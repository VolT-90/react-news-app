// All API knowledge lives here. Response shape (inspected in DevTools):
// list   -> { count, results: [ { id, title, summary, image_url, news_site, published_at, url } ] }
// single -> { id, title, summary, image_url, news_site, published_at, url }
const BASE = "https://api.spaceflightnewsapi.net/v4/articles/";

export const CATEGORIES = ["Rockets", "Moon", "Mars", "Satellites", "Telescopes"];

export function listUrl(search = "") {
  const q = search ? `&search=${encodeURIComponent(search)}` : "";
  return `${BASE}?limit=12${q}`;
}

export function articleUrl(id) {
  return `${BASE}${encodeURIComponent(id)}/`;
}

export function formatDate(iso) {
  return iso ? new Date(iso).toLocaleDateString(undefined, { dateStyle: "long" }) : "";
}
