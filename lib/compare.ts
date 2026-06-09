const STORAGE_KEY = "sugstore_compare";

export function getCompareList(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function toggleCompare(slug: string): boolean {
  const list = getCompareList();
  const idx = list.indexOf(slug);
  if (idx >= 0) {
    list.splice(idx, 1);
    save(list);
    return false;
  }
  if (list.length >= 3) return false;
  list.push(slug);
  save(list);
  return true;
}

function save(list: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
  }
}
