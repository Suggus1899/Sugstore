"use client";

import { useEffect } from "react";
import { addRecentlyViewed } from "@/lib/recentlyViewed";

export function TrackView({ slug }: { slug: string }) {
  useEffect(() => {
    addRecentlyViewed(slug);
  }, [slug]);

  return null;
}
