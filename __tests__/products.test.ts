import { describe, it, expect } from "vitest";
import {
  products,
  getFeaturedProducts,
  getEditorPicks,
  getProductBySlug,
  getAllSlugs,
} from "@/lib/data/products";

describe("products data", () => {
  it("has at least one product", () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it("each product has required fields", () => {
    for (const p of products) {
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.tagline).toBeTruthy();
      expect(p.priceFrom).toBeGreaterThan(0);
      expect(p.currency).toBeTruthy();
      expect(p.images.length).toBeGreaterThan(0);
      expect(p.stores.length).toBeGreaterThan(0);
    }
  });

  it("has featured products", () => {
    expect(getFeaturedProducts().length).toBeGreaterThan(0);
  });

  it("editor picks exist", () => {
    expect(getEditorPicks().length).toBeGreaterThan(0);
  });

  it("getProductBySlug returns correct product", () => {
    const p = getProductBySlug("keychron-k2");
    expect(p).toBeDefined();
    expect(p?.name).toBe("Keychron K2");
  });

  it("getProductBySlug returns undefined for missing", () => {
    expect(getProductBySlug("does-not-exist")).toBeUndefined();
  });

  it("all slugs are unique", () => {
    const slugs = getAllSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
