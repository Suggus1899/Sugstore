"use client";

import { useSyncExternalStore } from "react";
import { products } from "@/lib/data/products";
import { getRecentlyViewed } from "@/lib/recentlyViewed";
import { ProductCard } from "./ProductCard";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot() {
  return getRecentlyViewed();
}

export function RecentlyViewed() {
  const slugs = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const recent = products.filter((p) => slugs.includes(p.slug));

  if (recent.length === 0) return null;

  return (
    <section className="border-t border-border-subtle py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Vistos recientemente
        </h2>
        <p className="mt-2 text-ink-muted">Productos que has visitado.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
