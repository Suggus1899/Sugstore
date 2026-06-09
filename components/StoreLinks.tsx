"use client";

import { trackAffiliateClick } from "@/lib/tracking";
import { formatPrice } from "@/lib/utils";
import type { StoreLink } from "@/lib/types/product";

const storeIcons: Record<string, string> = {
  amazon: "🛒",
  apple: "🍎",
  keychron: "⌨",
  logitech: "🖱",
  sony: "🎧",
  elgato: "🎙",
  remarkable: "📝",
  "herman-miller": "💺",
  caldigit: "🔌",
  oreilly: "📚",
  pccomponentes: "🖥",
  "el-corte-ingles": "🏬",
};

interface StoreLinksProps {
  stores: StoreLink[];
  compact?: boolean;
}

export function StoreLinks({ stores, compact = false }: StoreLinksProps) {
  const sorted = [...stores].sort((a, b) => {
    if (a.recommended && !b.recommended) return -1;
    if (!a.recommended && b.recommended) return 1;
    return 0;
  });

  return (
    <div className={compact ? "flex flex-wrap gap-2" : "space-y-3"}>
      {sorted.map((store) => (
        <a
          key={store.id}
          href={store.url}
          target="_blank"
          onClick={() => trackAffiliateClick(store.id, store.name, store.affiliate)}
          rel={store.affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
          className={
            compact
              ? "inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-ink-muted transition-all hover:border-brand/40 hover:text-brand"
              : `group flex items-center justify-between rounded-xl border p-4 transition-all hover:border-brand/30 hover:bg-surface-hover ${
                  store.recommended
                    ? "border-brand/30 bg-brand/5"
                    : "border-border bg-surface"
                }`
          }
        >
          {compact ? (
            <>
              <span>{storeIcons[store.id] ?? "🔗"}</span>
              <span>{store.name}</span>
              {store.affiliate && (
                <span className="text-[9px] text-ink-faint">afiliado</span>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-lg">
                  {storeIcons[store.id] ?? "🔗"}
                </span>
                <div>
                  <p className="font-medium text-ink group-hover:text-brand transition-colors">
                    {store.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    {store.price && (
                      <span className="font-mono text-sm text-brand">
                        {formatPrice(store.price, store.currency)}
                      </span>
                    )}
                    {store.affiliate && (
                      <span className="rounded bg-elevated px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
                        Enlace afiliado
                      </span>
                    )}
                    {store.recommended && (
                      <span className="rounded bg-brand/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-brand">
                        Recomendado
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <span className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-brand">
                ↗
              </span>
            </>
          )}
        </a>
      ))}
    </div>
  );
}
