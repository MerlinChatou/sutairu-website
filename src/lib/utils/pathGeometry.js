const NUM = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/y;
const SEP = /[\s,]*/y;

/**
 * Extracts the points to display from an SVG path `d` attribute.
 * @param {string} d
 * @returns {{
 *   anchors: {x:number,y:number}[],
 *   controls: {x:number,y:number}[],
 *   handles: {a:{x:number,y:number}, b:{x:number,y:number}}[]
 * }}
 */
export function parsePath(d) {
  const anchors = [];
  const controls = [];
  const handles = [];

  let i = 0;
  let cmd = null;
  let x = 0, y = 0; // current point
  let sx = 0, sy = 0; // start of the subpath (for Z)
  let lastCubic = null; // previous control point, used by S
  let lastQuad = null; // previous control point, used by T

  const skip = () => {
    SEP.lastIndex = i;
    SEP.test(d);
    i = SEP.lastIndex;
  };
  const num = () => {
    skip();
    NUM.lastIndex = i;
    const m = NUM.exec(d);
    if (!m) throw new Error("Invalid path");
    i = NUM.lastIndex;
    return parseFloat(m[0]);
  };
  // arc flags can be glued together ("a1 1 0 011 1"), so read one char
  const flag = () => {
    skip();
    return d[i++] === "1" ? 1 : 0;
  };
  const addControl = (from, c) => {
    controls.push(c);
    handles.push({ a: from, b: c });
  };

  try {
    while ((skip(), i < d.length)) {
      if (/[a-z]/i.test(d[i])) cmd = d[i++];
      else if (!cmd) break;

      const rel = cmd === cmd.toLowerCase();
      const ox = rel ? x : 0;
      const oy = rel ? y : 0;
      const start = { x, y };
      let nextCubic = null;
      let nextQuad = null;

      switch (cmd.toUpperCase()) {
        case "M":
          x = ox + num(); y = oy + num();
          sx = x; sy = y;
          anchors.push({ x, y });
          cmd = rel ? "l" : "L"; // extra pairs after M are implicit lineto
          break;
        case "L":
          x = ox + num(); y = oy + num();
          anchors.push({ x, y });
          break;
        case "H":
          x = ox + num();
          anchors.push({ x, y });
          break;
        case "V":
          y = oy + num();
          anchors.push({ x, y });
          break;
        case "C": {
          const c1 = { x: ox + num(), y: oy + num() };
          const c2 = { x: ox + num(), y: oy + num() };
          x = ox + num(); y = oy + num();
          addControl(start, c1);
          addControl({ x, y }, c2);
          anchors.push({ x, y });
          nextCubic = c2;
          break;
        }
        case "S": {
          if (lastCubic) addControl(start, { x: 2 * x - lastCubic.x, y: 2 * y - lastCubic.y });
          const c2 = { x: ox + num(), y: oy + num() };
          x = ox + num(); y = oy + num();
          addControl({ x, y }, c2);
          anchors.push({ x, y });
          nextCubic = c2;
          break;
        }
        case "Q": {
          const c = { x: ox + num(), y: oy + num() };
          x = ox + num(); y = oy + num();
          addControl(start, c);
          addControl({ x, y }, c);
          anchors.push({ x, y });
          nextQuad = c;
          break;
        }
        case "T": {
          const c = lastQuad
            ? { x: 2 * x - lastQuad.x, y: 2 * y - lastQuad.y }
            : { x, y };
          x = ox + num(); y = oy + num();
          if (lastQuad) {
            addControl(start, c);
            addControl({ x, y }, c);
          }
          anchors.push({ x, y });
          nextQuad = c;
          break;
        }
        case "A":
          num(); num(); num(); flag(); flag(); // rx ry rotation large-arc sweep
          x = ox + num(); y = oy + num();
          anchors.push({ x, y });
          break;
        case "Z":
          x = sx; y = sy;
          cmd = null; // numbers after Z are invalid
          break;
        default:
          throw new Error("Unknown command");
      }

      lastCubic = nextCubic;
      lastQuad = nextQuad;
    }
  } catch {
    // malformed path: keep what we parsed so far
  }

  return { anchors, controls, handles };
}