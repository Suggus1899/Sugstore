import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/data/products";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();

  const products = slugs.map((slug) => ({
    url: `${SITE_URL}/producto/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...products,
  ];
}
