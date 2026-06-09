"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { blurPlaceholder } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const close = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setActive((p) => (p > 0 ? p - 1 : images.length - 1));
      if (e.key === "ArrowRight") setActive((p) => (p < images.length - 1 ? p + 1 : 0));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, close, images.length]);

  return (
    <>
      <div className="space-y-4">
        <button
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-elevated sm:aspect-square transition-all hover:opacity-95"
          aria-label="Ver imagen ampliada"
        >
          <Image
            src={images[active]}
            alt={`${name} — imagen ${active + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            placeholder="blur"
            blurDataURL={blurPlaceholder}
          />
          <span className="absolute bottom-3 right-3 rounded-lg bg-canvas/60 px-3 py-1.5 font-mono text-xs text-ink-muted backdrop-blur-sm">
            ⛶ Ampliar
          </span>
        </button>

        {images.length > 1 && (
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  i === active
                    ? "border-brand shadow-lg shadow-brand/20"
                    : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-canvas/95 backdrop-blur-xl"
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-12 right-0 text-ink-muted hover:text-ink transition-colors font-mono text-sm"
              aria-label="Cerrar"
            >
              Cerrar [Esc]
            </button>

            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={images[active]}
                alt={`${name} — imagen ${active + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />
            </div>

            {images.length > 1 && (
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <button
                  onClick={() => setActive((p) => (p > 0 ? p - 1 : images.length - 1))}
                  className="rounded-xl bg-surface border border-border px-4 py-2 font-mono text-sm text-ink-muted hover:text-ink transition-all"
                  aria-label="Anterior"
                >
                  ← Anterior
                </button>
                <span className="font-mono text-sm text-ink-faint">
                  {active + 1} / {images.length}
                </span>
                <button
                  onClick={() => setActive((p) => (p < images.length - 1 ? p + 1 : 0))}
                  className="rounded-xl bg-surface border border-border px-4 py-2 font-mono text-sm text-ink-muted hover:text-ink transition-all"
                  aria-label="Siguiente"
                >
                  Siguiente →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
