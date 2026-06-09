import type { Product } from "@/lib/types/product";
import { ProductCardHero } from "./ProductCardHero";
import { ProductCardFeatured } from "./ProductCardFeatured";
import { ProductCardDefault } from "./ProductCardDefault";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "featured" | "hero";
  index?: number;
}

export function ProductCard({
  product,
  variant = "default",
  index = 0,
}: ProductCardProps) {
  if (variant === "hero") {
    return <ProductCardHero product={product} />;
  }

  if (variant === "featured") {
    return <ProductCardFeatured product={product} index={index} />;
  }

  return <ProductCardDefault product={product} index={index} />;
}
