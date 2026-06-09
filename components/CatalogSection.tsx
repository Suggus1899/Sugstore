"use client";

import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";
import { useProductFilters } from "@/lib/useProductFilters";

export function CatalogSection() {
  const {
    activeCategory,
    searchQuery,
    sortBy,
    filtered,
    paginated,
    hasMore,
    setCategory,
    setSearch,
    setSort,
    loadMore,
    resetPage,
  } = useProductFilters();

  const counts: Record<string, number> = { all: products.length };
  for (const cat of categories) {
    if (cat.id === "all") continue;
    counts[cat.id] = products.filter((p) => p.category === cat.id).length;
  }

  const activeMeta = categories.find((c) => c.id === activeCategory);

  return (
    <section id="catalogo" className="border-t border-border-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <aside className="lg:w-56 lg:shrink-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint" aria-hidden="true">
              Filtrar
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              Categorías
              <span className="sr-only"> — filtra productos por categoría</span>
            </h2>
            {activeMeta && activeCategory !== "all" && (
              <p className="mt-2 text-sm text-ink-muted">
                {activeMeta.description}
              </p>
            )}

            <nav
              className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
              role="tablist"
              aria-label="Filtros de categoría"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={`flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm transition-all lg:w-full ${
                      isActive
                        ? "border-brand/40 bg-brand/10 text-brand shadow-sm shadow-brand/10"
                        : "border-border bg-surface text-ink-muted hover:border-border hover:bg-surface-hover hover:text-ink"
                    }`}
                  >
                    <span aria-hidden="true">{cat.icon}</span>
                    <span className="font-medium">{cat.label}</span>
                    <span
                      className={`ml-auto rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                        isActive
                          ? "bg-brand/20 text-brand"
                          : "bg-elevated text-ink-faint"
                      }`}
                    >
                      {counts[cat.id]}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1 max-w-md">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none text-sm" aria-hidden="true">
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar productos..."
                  aria-label="Buscar productos por nombre, descripción o etiquetas"
                  className="w-full rounded-xl border border-border bg-surface py-2.5 pl-9 pr-4 font-mono text-sm text-ink placeholder-ink-faint outline-none transition-all focus:border-brand/40 focus-visible:ring-2 focus-visible:ring-brand/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink transition-colors text-sm"
                    aria-label="Limpiar búsqueda"
                  >
                    <span aria-hidden="true">✕</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <label htmlFor="sort-select" className="font-mono text-xs text-ink-faint shrink-0">
                  Ordenar
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSort(e.target.value as any)}
                  className="rounded-xl border border-border bg-surface px-3 py-2.5 font-mono text-sm text-ink outline-none transition-all focus:border-brand/40 cursor-pointer"
                >
                  <option value="default">Por defecto</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="name-asc">Nombre A-Z</option>
                  <option value="name-desc">Nombre Z-A</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="font-mono text-xs text-ink-faint">
                {filtered.length} producto{filtered.length !== 1 && "s"}
                {searchQuery && ` para "${searchQuery}"`}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-border py-20 text-center">
                <p className="text-4xl mb-4" aria-hidden="true">🔍</p>
                <p className="text-ink-muted font-medium">
                  No hay productos en esta categoría.
                </p>
                {searchQuery && (
                  <p className="mt-1 text-sm text-ink-faint">
                    Intenta con otros términos o limpia el filtro.
                  </p>
                )}
              </div>
            ) : (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
                {paginated.map((product, i) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    index={i}
                  />
                ))}
              </div>
            )}

            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={loadMore}
                  className="rounded-xl border border-border bg-surface px-8 py-3 font-mono text-sm text-ink-muted transition-all hover:border-brand/40 hover:text-brand"
                >
                  Cargar más productos ({filtered.length - paginated.length} restantes)
                </button>
              </div>
            )}

            {!hasMore && filtered.length > 8 && (
              <div className="mt-8 text-center">
                <button
                  onClick={resetPage}
                  className="rounded-xl border border-border bg-surface px-8 py-3 font-mono text-sm text-ink-muted transition-all hover:border-brand/40 hover:text-brand"
                >
                  Mostrar menos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
