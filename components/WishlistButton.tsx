"use client";

import { useSyncExternalStore, useCallback } from "react";
import { getWishlist, toggleWishlist } from "@/lib/wishlist";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot() {
  return getWishlist();
}

interface WishlistButtonProps {
  slug: string;
  className?: string;
}

export function WishlistButton({ slug, className = "" }: WishlistButtonProps) {
  const list = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const isActive = list.includes(slug);

  const handleClick = useCallback(() => {
    toggleWishlist(slug);
    window.dispatchEvent(new Event("storage"));
  }, [slug]);

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 font-mono text-xs transition-all ${
        isActive
          ? "border-brand/40 bg-brand/10 text-brand"
          : "border-border text-ink-muted hover:border-brand/40 hover:text-brand"
      } ${className}`}
      aria-label={isActive ? "Quitar de favoritos" : "Añadir a favoritos"}
      aria-pressed={isActive}
    >
      <span aria-hidden="true">{isActive ? "♥" : "♡"}</span>
      {isActive ? "Favorito" : "Favoritos"}
    </button>
  );
}
