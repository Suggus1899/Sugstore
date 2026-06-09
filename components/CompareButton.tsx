"use client";

import { useSyncExternalStore, useCallback, useState } from "react";
import { getCompareList, toggleCompare } from "@/lib/compare";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot() {
  return getCompareList();
}

interface Props {
  slug: string;
  className?: string;
}

export function CompareButton({ slug, className = "" }: Props) {
  const list = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const isActive = list.includes(slug);
  const [maxed, setMaxed] = useState(false);

  const handleClick = useCallback(() => {
    const added = toggleCompare(slug);
    if (!added && !isActive) {
      setMaxed(true);
      setTimeout(() => setMaxed(false), 2000);
    }
    window.dispatchEvent(new Event("storage"));
  }, [slug, isActive]);

  return (
    <button
      onClick={handleClick}
      className={`rounded-lg border px-2 py-1 font-mono text-[10px] transition-all ${
        isActive
          ? "border-brand/40 bg-brand/10 text-brand"
          : "border-border text-ink-faint hover:border-brand/40 hover:text-brand"
      } ${className}`}
      aria-label={isActive ? "Quitar de comparación" : "Añadir a comparación"}
      aria-pressed={isActive}
      title={maxed ? "Máximo 3 productos" : undefined}
    >
      {isActive ? "✓ Comparando" : maxed ? "Máx. 3" : "+ Comparar"}
    </button>
  );
}
