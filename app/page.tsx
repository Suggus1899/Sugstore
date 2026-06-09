import { Suspense } from "react";
import { CatalogSection } from "@/components/CatalogSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { RecentlyViewed } from "@/components/RecentlyViewed";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";

function CatalogFallback() {
  return (
    <div className="border-t border-border-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-48 rounded-xl bg-surface" />
          <div className="h-6 w-96 rounded-xl bg-surface" />
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-surface" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero
        productCount={products.length}
        categoryCount={categories.length}
      />
      <FeaturedSection />
      <HowItWorks />
      <ErrorBoundary>
        <Suspense fallback={<CatalogFallback />}>
          <CatalogSection />
        </Suspense>
      </ErrorBoundary>
      <RecentlyViewed />
    </>
  );
}
