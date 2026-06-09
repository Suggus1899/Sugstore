"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getCompareList } from "@/lib/compare";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { blurPlaceholder } from "@/lib/utils";
import { getCategoryMeta } from "@/lib/data/products";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot() {
  return getCompareList();
}

export default function ComparePage() {
  const slugs = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const compare = slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <div className="pt-24 pb-20 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Comparar productos
        </h1>
        <p className="mt-2 text-ink-muted">
          Compara hasta 3 productos lado a lado.
        </p>

        {compare.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border py-20 text-center">
            <p className="text-ink-muted font-medium">
              No has seleccionado productos para comparar.
            </p>
            <Link
              href="/#catalogo"
              className="mt-6 inline-flex rounded-xl bg-brand px-6 py-3 font-mono text-sm text-white"
            >
              Explorar catálogo
            </Link>
          </div>
        ) : (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr>
                  <th className="w-40 p-3 text-left font-mono text-xs text-ink-faint uppercase tracking-wider" />
                  {compare.map((p) => (
                    <th key={p!.slug} className="p-3 text-left">
                      <div className="relative aspect-[4/3] w-full max-w-xs overflow-hidden rounded-xl bg-elevated">
                        <Image
                          src={p!.images[0]}
                          alt={p!.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL={blurPlaceholder}
                        />
                      </div>
                      <p className="mt-3 font-display font-bold">{p!.name}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { label: "Precio", render: (p: any) => formatPrice(p.priceFrom, p.currency) },
                  { label: "Categoría", render: (p: any) => getCategoryMeta(p.category)?.label },
                  { label: "Tags", render: (p: any) => p.tags.join(", ") },
                  { label: "Tiendas", render: (p: any) => p.stores.length },
                  {
                    label: "Ver",
                    render: (p: any) => (
                      <Link
                        href={`/producto/${p.slug}`}
                        className="text-brand underline underline-offset-2"
                      >
                        Ficha completa →
                      </Link>
                    ),
                  },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="p-3 font-mono text-xs text-ink-faint uppercase tracking-wider">
                      {row.label}
                    </td>
                    {compare.map((p) => (
                      <td key={p!.slug} className="p-3 text-sm text-ink-muted">
                        {row.render(p!)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
