"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 rounded-xl border border-border bg-surface p-3 font-mono text-sm text-ink-muted shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-brand/40 hover:text-brand ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Volver al inicio"
    >
      <span aria-hidden="true">↑</span>
      <span className="sr-only">Volver arriba</span>
    </button>
  );
}
