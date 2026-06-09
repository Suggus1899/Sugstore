import { getFeaturedProducts } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";

export function FeaturedSection() {
  const featured = getFeaturedProducts();

  return (
    <section id="destacados" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            ★ Selección del editor
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Productos destacados
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Los imprescindibles que recomendamos sin reservas — probados,
            comparados y elegidos para developers que se toman su craft en serio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant={i === 0 ? "featured" : "default"}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
