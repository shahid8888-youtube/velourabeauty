/**
 * Intentionally empty. Velourabeauty's catalog is real, seller-added
 * inventory only — no demo/fake products are seeded into the database.
 *
 * Add your products through the admin panel instead:
 *   1. npm run dev
 *   2. Open http://localhost:3000/admin/products/new
 *   3. Fill in your product details and upload real photos
 *
 * If you ever need to bulk-import products from a supplier feed (CSV from
 * CJ Dropshipping, Zendrop, etc.), this is the file to extend — read the
 * CSV, map each row to prisma.product.create({...}), and run:
 *   npm run seed
 */
async function main() {
  console.log("No demo data to seed. Add real products via /admin/products/new.");
}

main();
