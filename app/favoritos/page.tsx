"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getWishlist } from "@/lib/wishlist";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/ProductCard";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot() {
  return getWishlist();
}

export default function FavoritesPage() {
  const slugs = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const favorites = products.filter((p) => slugs.includes(p.slug));

  return (
    <div className="pt-24 pb-20 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint" aria-hidden="true">♥</span>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tus favoritos
          </h1>
        </div>
        <p className="mt-3 text-ink-muted">
          Los productos que has guardado se sincronizan en este dispositivo.
        </p>

        <div className="mt-12">
          {favorites.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border py-20 text-center">
              <p className="text-4xl mb-4" aria-hidden="true">♡</p>
              <p className="text-ink-muted font-medium">No tienes favoritos guardados.</p>
              <Link
                href="/#catalogo"
                className="mt-6 inline-flex rounded-xl bg-brand px-6 py-3 font-mono text-sm text-white transition-all hover:bg-brand-soft"
              >
                Explorar catálogo
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
              {favorites.map((product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
