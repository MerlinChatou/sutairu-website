import MiniSearch from "minisearch";

const STYLE_SUFFIX = /-(solid|thin|wide-alt|wide)$/;

export function createIconSearch(iconsMeta, { minQueryLength = 2 } = {}) {
  const index = new MiniSearch({
    fields: ["name", "tags", "related"],
    storeFields: ["name", "category", "style"],
  });

  index.addAll(
    iconsMeta.icons.map((icon) => ({
      id: icon.name,
      name: icon.name,
      tags: icon.tags.join(" "),
      related: icon.related.join(" "),
      category: icon.category,
      style: icon.style,
    })),
  );

  return function search(q, style = "all", category = "all") {
    const matchesFilters = (icon) =>
      (style === "all" || icon.style === style) &&
      (category === "all" || icon.category === category);

    const term = q.trim();

    if (term.length < minQueryLength) {
      return iconsMeta.icons.filter(matchesFilters);
    }

    const hits = index.search(term, {
      boost: { name: 3, tags: 2, related: 0.5 },
      prefix: true,
      fuzzy: (t) => (t.length > 3 ? 0.2 : false),
      combineWith: "AND",
      filter: matchesFilters,
      boostDocument: (id) => (STYLE_SUFFIX.test(id) ? 1 : 1.15),
    });

    const wanted = term.toLowerCase().replace(/\s+/g, "-");
    const rank = (r) =>
      r.name === wanted ? 0 : r.name.replace(STYLE_SUFFIX, "") === wanted ? 1 : 2;

    return hits.sort((a, b) => rank(a) - rank(b) || b.score - a.score);
  };
}

export function createIconUri(iconsData) {
  const cache = new Map();
  return function iconUri(name) {
    if (!cache.has(name)) {
      const d = iconsData[name];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${d}"/></svg>`;
      cache.set(name, d ? `url("data:image/svg+xml,${encodeURIComponent(svg)}")` : "none");
    }
    return cache.get(name);
  };
}