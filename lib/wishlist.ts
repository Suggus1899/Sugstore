export function getWishlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("sugstore_wishlist") || "[]");
  } catch {
    return [];
  }
}

export function toggleWishlist(slug: string): boolean {
  const list = getWishlist();
  const idx = list.indexOf(slug);
  if (idx >= 0) {
    list.splice(idx, 1);
    saveWishlist(list);
    return false;
  }
  list.push(slug);
  saveWishlist(list);
  return true;
}

export function isInWishlist(slug: string): boolean {
  return getWishlist().includes(slug);
}

function saveWishlist(list: string[]) {
  try {
    localStorage.setItem("sugstore_wishlist", JSON.stringify(list));
  } catch {
  }
}
