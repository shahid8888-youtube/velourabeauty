export type ProductCategory =
  | "Skincare"
  | "Makeup"
  | "Haircare"
  | "Body Care"
  | "Fragrance"
  | "Beauty Tools";

export interface ProductVariant {
  id: string;
  label: string; // e.g. "30ml", "Shade 02 — Rose Nude"
  priceModifier: number; // added to base price
  stock: number;
  sku: string;
}

export interface ProductReview {
  id: string;
  author: string;
  city?: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  date: string; // ISO
  verified: boolean;
}

export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  oldPrice?: number;
  currency: string;
  stock: number;
  rating?: number;
  reviewCount?: number;
  texture?: string[];
  images: string[];
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string[];
  variants: ProductVariant[];
  tags: string[];
  isBestseller: boolean;
  isNew: boolean;
  isTrending?: boolean;
  relatedIds?: string[];
  reviews?: ProductReview[];
  soldToday?: number;
  createdAt: string;
}
