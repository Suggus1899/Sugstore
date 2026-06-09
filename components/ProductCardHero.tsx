import Image from "next/image";
import Link from "next/link";
import { getCategoryMeta } from "@/lib/data/products";
import { formatPrice, blurPlaceholder } from "@/lib/utils";
import type { Product } from "@/lib/types/product";

interface Props {
  product: Product;
}

export function ProductCardHero({ product }: Props) {
  const category = getCategoryMeta(product.category);

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="card-shine group block overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <p className="font-mono text-[10px] uppercase tracking-wider text-brand">
          {category?.icon} {category?.label}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold group-hover:text-brand transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-ink-muted">{product.tagline}</p>
        <p className="mt-4 font-mono text-lg font-semibold text-brand">
          desde {formatPrice(product.priceFrom, product.currency)}
        </p>
      </div>
    </Link>
  );
}
