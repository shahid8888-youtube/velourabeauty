# Velourabeauty — Your E-commerce Store

**No demo or placeholder products are included.** This store starts empty —
you add your own real products through the admin panel, with your own
photos, prices, and descriptions. What you add is what customers see.

## What's built so far

- Homepage (Hero, Categories, Best Sellers, Flash Sale, Reviews, Newsletter, FAQ)
  — pulls live from *your* database. Shows an "Add your first product"
  prompt until you add something.
- **Admin Panel** (`/admin`) — your product management dashboard:
  - `/admin/products` — list, edit, delete your products
  - `/admin/products/new` — add a product: name, SKU, category, price,
    stock, description, ingredients, usage steps, and real photo uploads
    (via Cloudinary)
- Database schema (`prisma/schema.prisma`) for Products, Orders, Customers,
  Reviews, Coupons, Addresses
- Cart (Zustand, persisted) — customers can add your real products to bag

## Coming in later phases
Shop/listing page, Product Detail page, Cart page UI, Checkout (Stripe/PayPal/COD),
Customer login (NextAuth), Order management in admin, remaining static pages
(About, Policies, Blog, 404), SEO sitemap/robots.

## Getting started (on your own machine)

1. Install [Node.js 20+](https://nodejs.org)
2. Unzip this project, open it in VS Code, then:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. **Set up a free database** — this is required before you can add products:
   - Go to [neon.tech](https://neon.tech) (or [supabase.com](https://supabase.com)), create a free Postgres database
   - Copy the connection string into `DATABASE_URL` in `.env.local`
5. **Set up Cloudinary** (free, for product photo uploads):
   - Go to [cloudinary.com](https://cloudinary.com), create a free account
   - Copy your Cloud Name, API Key, and API Secret into `.env.local`
6. Create the database tables:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
7. Run the site:
   ```bash
   npm run dev
   ```
8. Open **http://localhost:3000/admin/products/new** and add your first real product.
9. Open **http://localhost:3000** — your product is now live on the homepage.

## Your domain

Set `NEXT_PUBLIC_SITE_URL=https://velourabeauty.com` in `.env.local` /
your hosting provider's environment variables once you deploy (e.g. on
Vercel), and point velourabeauty's DNS to your hosting provider.

## WhatsApp ordering

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` to your business WhatsApp
number (with country code, no `+` or spaces, e.g. `923001234567`). The
floating WhatsApp button on every page will message that number directly.
