const STORAGE_KEY = "sugstore_recently_viewed";
const MAX = 5;

export function addRecentlyViewed(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const list = getRecentlyViewed();
    const filtered = list.filter((s) => s !== slug);
    filtered.unshift(slug);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered.slice(0, MAX)));
  } catch {
  }
}

export function getRecentlyViewed(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
