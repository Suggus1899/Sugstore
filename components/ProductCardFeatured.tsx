import Image from "next/image";
import Link from "next/link";
import { getCategoryMeta } from "@/lib/data/products";
import { formatPrice, blurPlaceholder } from "@/lib/utils";
import type { Product } from "@/lib/types/product";
import { StoreLinks } from "./StoreLinks";
import { WishlistButton } from "./WishlistButton";
import { CompareButton } from "./CompareButton";

interface Props {
  product: Product;
  index: number;
}

export function ProductCardFeatured({ product, index }: Props) {
  const category = getCategoryMeta(product.category);
  const delayClass = `delay-${Math.min(index + 1, 5)}`;
  const recommendedStore = product.stores.find((s) => s.recommended) ?? product.stores[0];

  return (
    <article
      className={`animate-rise ${delayClass} card-shine group flex flex-col overflow-hidden rounded-2xl border border-brand/20 bg-surface transition-all hover:border-brand/40 hover:shadow-xl hover:shadow-black/30`}
    >
      <Link
        href={`/producto/${product.slug}`}
        className="relative aspect-[4/3] overflow-hidden bg-elevated"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-lg bg-gold/90 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-canvas">
            ★ Destacado
          </span>
        )}
        {product.images.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded-lg bg-canvas/70 px-2 py-1 font-mono text-[9px] text-ink-muted backdrop-blur-md">
            +{product.images.length - 1} fotos
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
          {category?.icon} {category?.label}
        </span>

        <Link href={`/producto/${product.slug}`} className="mt-2 block">
          <h3 className="font-display text-xl font-bold leading-snug transition-colors group-hover:text-brand">
            {product.name}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">
            {product.tagline}
          </p>
        </Link>

          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-elevated px-2 py-0.5 font-mono text-[9px] text-ink-faint"
              >
                #{tag}
              </span>
            ))}
            <CompareButton slug={product.slug} />
          </div>

        <div className="mt-auto flex items-end justify-between pt-4 gap-3">
          <div>
            <p className="font-mono text-sm font-semibold text-brand">
              desde {formatPrice(product.priceFrom, product.currency)}
            </p>
            <p className="text-[10px] text-ink-faint">
              en {recommendedStore.name}
            </p>
          </div>
          <div className="flex gap-2">
            <WishlistButton slug={product.slug} />
            <Link
              href={`/producto/${product.slug}`}
              className="rounded-lg border border-border px-3 py-2 font-mono text-xs text-ink-muted transition-all hover:border-brand/40 hover:text-brand"
            >
              Detalles
            </Link>
            <a
              href={recommendedStore.url}
              target="_blank"
              rel={
                recommendedStore.affiliate
                  ? "noopener noreferrer sponsored"
                  : "noopener noreferrer"
              }
              className="rounded-lg bg-brand px-3 py-2 font-mono text-xs font-medium text-white transition-all hover:bg-brand-soft"
            >
              Comprar ↗
            </a>
          </div>
        </div>

        {product.stores.length > 1 && (
          <div className="mt-3 border-t border-border-subtle pt-3">
            <StoreLinks stores={product.stores} compact />
          </div>
        )}
      </div>
    </article>
  );
}
