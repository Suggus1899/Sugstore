export function trackAffiliateClick(
  storeId: string,
  storeName: string,
  isAffiliate: boolean
) {
  if (typeof window === "undefined") return;

  const event = {
    type: isAffiliate ? "affiliate_click" : "store_click",
    storeId,
    storeName,
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
  };

  try {
    const history = JSON.parse(
      localStorage.getItem("sugstore_clicks") || "[]"
    );
    history.push(event);
    localStorage.setItem("sugstore_clicks", JSON.stringify(history.slice(-100)));
  } catch {
  }
}
