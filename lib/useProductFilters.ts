"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data/products";
import type { Product } from "@/lib/types/product";

const ITEMS_PER_PAGE = 8;

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const sortFns: Record<SortOption, (a: Product, b: Product) => number> = {
  default: () => 0,
  "price-asc": (a, b) => a.priceFrom - b.priceFrom,
  "price-desc": (a, b) => b.priceFrom - a.priceFrom,
  "name-asc": (a, b) => a.name.localeCompare(b.name),
  "name-desc": (a, b) => b.name.localeCompare(a.name),
};

export function useProductFilters() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result =
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return [...result].sort(sortFns[sortBy]);
  }, [activeCategory, searchQuery, sortBy]);

  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginated.length < filtered.length;

  const setCategory = (id: string) => {
    setActiveCategory(id);
    setPage(1);
  };

  const setSearch = (q: string) => {
    setSearchQuery(q);
    setPage(1);
  };

  const setSort = (s: SortOption) => {
    setSortBy(s);
    setPage(1);
  };

  const loadMore = () => setPage((p) => p + 1);
  const resetPage = () => setPage(1);

  return {
    activeCategory,
    searchQuery,
    sortBy,
    filtered,
    paginated,
    hasMore,
    ITEMS_PER_PAGE,
    setCategory,
    setSearch,
    setSort,
    loadMore,
    resetPage,
  };
}
