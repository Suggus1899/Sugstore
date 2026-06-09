import Link from "next/link";
import { getEditorPicks } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";

interface HeroProps {
  productCount: number;
  categoryCount: number;
}

export function Hero({ productCount, categoryCount }: HeroProps) {
  const editorPick = getEditorPicks()[0];

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="grid-pattern absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span className="font-mono text-xs text-ink-muted">
                Tienda sin tienda · Enlaces reales
              </span>
            </div>

            <h1 className="animate-rise delay-1 mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              El gear que todo{" "}
              <span className="text-gradient">developer</span> debería conocer
            </h1>

            <p className="animate-rise delay-2 mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              Curamos productos reales de Amazon, Apple y fabricantes oficiales.
              Sin inventario ni checkout — solo recomendaciones honestas con
              enlaces que nos ayudan a mantener el sitio.
            </p>

            <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="#destacados"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-soft hover:shadow-xl hover:shadow-brand/25"
              >
                Ver destacados
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#catalogo"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-6 py-3.5 text-sm font-medium text-ink-muted backdrop-blur-sm transition-all hover:border-border hover:bg-surface hover:text-ink"
              >
                Explorar catálogo
              </Link>
            </div>

            <div className="animate-rise delay-4 mt-10 flex gap-6">
              <Stat value={String(productCount)} label="Productos" />
              <Stat value={String(categoryCount - 1)} label="Categorías" />
              <Stat value="12+" label="Tiendas" />
            </div>
          </div>

          {editorPick && (
            <div className="animate-rise delay-2 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-brand/5 blur-2xl" />
                <div className="relative">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">
                    ★ Pick del editor
                  </p>
                  <ProductCard product={editorPick} variant="hero" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-bold text-ink">{value}</p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
        {label}
      </p>
    </div>
  );
}
