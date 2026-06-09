"use client";

import { useState } from "react";
import { SITE_URL } from "@/lib/utils";

interface Props {
  name: string;
  slug: string;
}

export function ShareButton({ name, slug }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${SITE_URL}/producto/${slug}`;

    if (navigator.share) {
      await navigator.share({ title: name, url });
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="rounded-lg border border-border px-3 py-2 font-mono text-xs text-ink-muted transition-all hover:border-brand/40 hover:text-brand"
      aria-label={copied ? "Enlace copiado" : `Compartir ${name}`}
    >
      {copied ? "✓ Copiado" : "↗ Compartir"}
    </button>
  );
}
