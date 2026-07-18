import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/validations/product";
import { slugify } from "@/lib/utils";

// GET /api/products — public list, used by shop/homepage
// Supports ?category=SKINCARE&published=true
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const onlyPublished = searchParams.get("published") !== "false";

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(category ? { category: category as any } : {}),
        ...(onlyPublished ? { isPublished: true } : {}),
      },
      include: { images: { orderBy: { position: "asc" } }, variants: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ products });
  } catch (err) {
    // Most likely cause: DATABASE_URL isn't configured yet.
    return NextResponse.json(
      { products: [], error: "Database not connected yet. Add DATABASE_URL in .env.local and run `npx prisma migrate dev`." },
      { status: 200 }
    );
  }
}

// POST /api/products — add a new product (used by /admin/products/new)
// TODO: once NextAuth is wired up, protect this route so only role=ADMIN can call it.
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = productSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const slug = slugify(data.name);

  try {
    const product = await prisma.product.create({
      data: {
        sku: data.sku,
        slug,
        name: data.name,
        brand: data.brand || "Velourabeauty",
        category: data.category,
        subcategory: data.subcategory,
        price: data.price,
        oldPrice: data.oldPrice ? Number(data.oldPrice) : null,
        stock: data.stock,
        description: data.description,
        benefits: (data.benefits || "").split("\n").map((s) => s.trim()).filter(Boolean),
        ingredients: (data.ingredients || "").split("\n").map((s) => s.trim()).filter(Boolean),
        usage: (data.usage || "").split("\n").map((s) => s.trim()).filter(Boolean),
        tags: [data.category, data.subcategory].filter(Boolean) as string[],
        isPublished: data.isPublished,
        isBestseller: data.isBestseller,
        images: {
          create: data.images.map((url, i) => ({ url, position: i })),
        },
        variants: {
          create: [{ label: "Standard", priceModifier: 0, stock: data.stock, sku: `${data.sku}-STD` }],
        },
      },
      include: { images: true, variants: true },
    });
    return NextResponse.json({ product }, { status: 201 });
  } catch (err: any) {
    if (err?.code === "P2002") {
      return NextResponse.json({ error: "A product with this SKU or name already exists." }, { status: 409 });
    }
    return NextResponse.json(
      { error: "Could not save product. Check that DATABASE_URL is set and migrations have run." },
      { status: 500 }
    );
  }
}
