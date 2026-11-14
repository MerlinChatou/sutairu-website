import MiniSearch from "minisearch";
import iconsData from "@merlin-chatou/sutairu/icons-data";
import { parsePath } from "#lib/utils/pathGeometry.js";

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

/**
 *  Return the icon URI
 */
const uriCache = new Map();
export function iconUri(name) {
  if (!uriCache.has(name)) {
    const d = iconsData[name];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${d}"/></svg>`;
    uriCache.set(name, d ? `url("data:image/svg+xml,${encodeURIComponent(svg)}")` : "none");
  }
  return uriCache.get(name);
}

/**
 * Return the icon path
 */
const pathCache = new Map();
export function iconPath(name) {
  if (!pathCache.has(name)) {
    const d = iconsData[name];
    pathCache.set(name, d || "");
  }
  return pathCache.get(name);
}


const overlayCache = new Map();

function buildOverlay(d) {
  const { anchors, controls, handles } = parsePath(d);

  const lines = handles
    .map((h) => `<line x1="${h.a.x}" y1="${h.a.y}" x2="${h.b.x}" y2="${h.b.y}"/>`)
    .join("");
  const ctrl = controls.map((p) => `<circle cx="${p.x}" cy="${p.y}" r=".12"/>`).join("");
  const anch = anchors.map((p) => `<circle cx="${p.x}" cy="${p.y}" r=".25"/>`).join("");

return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<g stroke="#000" stroke-width=".1" stroke-opacity="0.9">${lines}</g>
<g fill="#000" fill-opacity="1">${ctrl}</g>
<g fill="#000" fill-opacity="1">${anch}</g>
</svg>`;
}



export function iconOverlayUri(name) {
  if (!overlayCache.has(name)) {
    const d = iconsData[name];
    overlayCache.set(
      name,
      d ? `url("data:image/svg+xml,${encodeURIComponent(buildOverlay(d))}")` : "none",
    );
  }
  return overlayCache.get(name);
}