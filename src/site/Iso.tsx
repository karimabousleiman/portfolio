import { useMemo } from "react";
import type { Scene } from "@/data/site";
import "./iso.css";

// Isometric scenes in Caldera's style: black machined objects with white edges on a flat colour field.
// Each scene is a list of boxes, gable roofs and extruded logo outlines, painted back to front.

type Pt = [number, number];
type V3 = [number, number, number];
type Mat = "blk" | "colw" | "colp" | "cols" | "emb" | "teal";
interface Box { t: "box"; x: number; y: number; z: number; w: number; d: number; h: number; m: Mat; f?: string }
interface Roof { t: "roofY"; x: number; y: number; z: number; w: number; d: number; h: number; m: Mat; f?: string }
interface Prism { t: "prism"; plane: "front" | "side" | "floor"; o: V3; pts: Pt[]; depth: number; m: Mat; front?: string; f?: string; k?: number; key?: number; sc?: number }
type Item = Box | Roof | Prism;

// [top, +y face, +x face, stroke]
const M: Record<Mat, [string, string, string, string]> = {
  blk: ["#232120", "#121110", "#000000", "#f7f6f2"],
  colw: ["#f7f6f2", "#121110", "#000000", "#f7f6f2"],
  colp: ["#7d77f2", "#121110", "#000000", "#f7f6f2"],
  cols: ["#f5f28e", "#121110", "#000000", "#f7f6f2"],
  emb: ["#ff7a33", "#fc5000", "#c43e00", "#070607"],
  teal: ["#86d6c6", "#3f9e8c", "#2b7366", "#070607"],
};

const box = (x: number, y: number, z: number, w: number, d: number, h: number, m: Mat, f?: string): Box => ({ t: "box", x, y, z, w, d, h, m, f });
const cab = (x: number, y: number, z: number, w: number, d: number, h: number) => box(x, y, z, w, d, h, "blk", "c");
const logo = (pts: Pt[], s: number, H: number): Pt[] => pts.map(([x, y]) => [x * s, (H - y) * s]);

const chart: Item[] = [];
const tops: Mat[] = ["cols", "colp", "colw"];
for (let r = 0; r < 3; r++)
  for (let i = 0; i < 14; i++) {
    const h = 0.9 + i * 0.17 + 1.7 * Math.abs(Math.sin(i * 0.68 + r * 0.95));
    chart.push(box(i * 1.12, r * 1.3, 0.8, 0.8, 0.8, +h.toFixed(2), tops[r], "eq"));
  }

// TF1+ wordmark, traced from the logo (1663 x 391)
const tf: Pt[][] = [
  [[0, 0], [342, 0], [342, 134], [255, 134], [255, 391], [87, 391], [87, 134], [0, 134]],
  [[502, 0], [815, 0], [815, 98], [670, 98], [670, 169], [774, 169], [774, 267], [670, 267], [670, 391], [502, 391]],
  [[975, 50], [1152, 0], [1152, 391], [975, 391]],
].map((p) => logo(p as Pt[], 1 / 70, 391));
const plus = logo([[1443, 17], [1506, 4], [1506, 167], [1663, 167], [1663, 228], [1506, 228], [1506, 376], [1443, 391], [1443, 228], [1286, 228], [1286, 167], [1443, 167]], 1 / 70, 391);

// Garantme's round G with its crossbar
const gPts: Pt[] = (() => {
  const R = 4.2, r = 2.55, t = 0.8, rad = Math.PI / 180, P: Pt[] = [];
  for (let a = 40; a <= 360; a += 8) P.push([R + R * Math.cos(a * rad), R + R * Math.sin(a * rad)]);
  P.push([2 * R, R + t], [R + 0.15 * R, R + t], [R + 0.15 * R, R - t]);
  const a0 = -Math.asin(t / r) / rad;
  for (let a = a0; a >= -320; a -= 8) P.push([R + r * Math.cos(a * rad), R + r * Math.sin(a * rad)]);
  P.push([R + r * Math.cos(40 * rad), R + r * Math.sin(40 * rad)]);
  return P;
})();

// Myki's mark: the V-shaped owl and its head, traced from the logo
const mk = (pts: Pt[]): Pt[] => pts.map(([x, y]) => [(x - 35) / 24, (282 - y) / 24]);
const mykiV = mk([[35, 52], [122, 138], [122, 185], [168, 228], [215, 185], [215, 138], [300, 52], [300, 150], [168, 282], [35, 150]]);
const mykiHead = mk([[133, 138], [203, 138], [168, 175]]);

const SCENES: Record<Scene, { bg: string; alt: string; items: Item[] }> = {
  home: {
    bg: "#fc5000",
    alt: "Three rows of black isometric columns with yellow, violet and white tops: a sound wave that also climbs like a growth chart",
    items: [cab(-16, 1.4, 0.2, 15.2, 0.5, 0.5), cab(15.8, 1.4, 0.2, 16, 0.5, 0.5), cab(4, 4, 0.2, 0.5, 14, 0.5), cab(11, 4, 0.2, 0.5, 14, 0.5), box(-0.8, -0.6, 0, 16.6, 4.6, 0.8, "blk", "p"), ...chart],
  },
  tf1: {
    bg: "#524ae9",
    alt: "The TF1+ wordmark extruded in isometric, white letters with black sides standing on a long black plinth",
    items: [
      cab(-18, 0.2, 0.2, 17.4, 0.5, 0.5), cab(3, -6, 0.2, 16, 0.5, 0.5), cab(1, 12.8, 0.2, 0.5, 14, 0.5),
      box(-0.6, -12.6, 0, 3.6, 25.4, 1, "blk", "p"),
      ...tf.map((pts, i): Prism => ({ t: "prism", plane: "side", o: [2, 12, 1], pts, depth: 1.6, m: "blk", front: "#f7f6f2", k: 3 - i })),
      { t: "prism", plane: "side", o: [2, 12, 1], pts: plus, depth: 1.6, m: "blk", front: "#fc5000", f: "hv", k: 0 },
    ],
  },
  garantme: {
    bg: "#f5f28e",
    alt: "The round G from the Garantme logo extruded in white and black, with an orange pitched roof and chimney on top, making it a house",
    items: [
      cab(-16, 1.6, 0.2, 14.8, 0.5, 0.5), cab(9.6, 1.6, 0.2, 16, 0.5, 0.5), cab(4, 4.2, 0.2, 0.5, 14, 0.5),
      box(-1.2, -0.6, 0, 10.8, 4.8, 1, "blk", "p"),
      { t: "prism", plane: "front", o: [0, 3, 1], pts: gPts, depth: 2.4, m: "blk", front: "#f7f6f2", k: 0 },
      box(6.4, 1.2, 9.6, 0.8, 0.8, 2.2, "blk", "hv"),
      { t: "roofY", x: -0.6, y: 0.3, z: 8.9, w: 9.6, d: 3, h: 3.2, m: "emb", f: "hv" },
    ],
  },
  myki: {
    bg: "#fc5000",
    alt: "The Myki owl mark, a V-shaped owl with its head, raised in teal on a black base like a badge",
    items: [
      cab(-16, 5.6, 0.3, 16, 0.6, 0.6), cab(13, 3, 0.3, 16, 0.6, 0.6), cab(5.6, 13, 0.3, 0.6, 16, 0.6), cab(8.4, -16, 0.3, 0.6, 16, 0.6),
      box(0, 0, 0, 13, 13, 1.6, "blk", "p"),
      { t: "prism", plane: "floor", o: [6.01, 13.43, 1.6], sc: 0.95, pts: mykiV, depth: 0.9, m: "blk", front: "#52ae9b", k: 0, key: 40 },
      { t: "prism", plane: "floor", o: [6.01, 13.43, 1.6], sc: 0.95, pts: mykiHead, depth: 1.5, m: "blk", front: "#86d6c6", f: "hv", k: 1, key: 41 },
    ],
  },
};

const U = 30, C = 0.866;
const pr = (p: V3): Pt => [(p[0] - p[1]) * C * U, (p[0] + p[1]) * 0.5 * U - p[2] * U];
const str = (pts: Pt[]) => pts.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
const inset = (q: V3[]): V3[] => {
  const c = [0, 1, 2].map((k) => q.reduce((a, p) => a + p[k], 0) / q.length);
  return q.map((p) => p.map((v, k) => v + (c[k] - v) * 0.22) as V3);
};

interface Face { p: string; fill: string; stroke: string; ins?: string }

function build(scene: Scene) {
  const sc = SCENES[scene];
  const bounds: Pt[] = [];
  let collect = false;
  const face = (q: V3[], fill: string, stroke: string, ins = false): Face => {
    const pp = q.map(pr);
    if (collect) bounds.push(...pp);
    return { p: str(pp), fill, stroke, ins: ins ? str(inset(q).map(pr)) : undefined };
  };
  const facesOf = (it: Item): Face[] => {
    const m = M[it.m];
    if (it.t === "box") {
      const { x, y, z, w, d, h } = it;
      const q: V3[][] = [
        [[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]],
        [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]],
        [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]],
      ];
      return q.map((qq, i) => face(qq, m[i], m[3], it.f === "p" && i > 0));
    }
    if (it.t === "roofY") {
      const { x, y, z, w, d, h } = it, xm = x + w / 2;
      return [
        face([[x, y, z], [x, y + d, z], [xm, y + d, z + h], [xm, y, z + h]], m[0], m[3]),
        face([[x + w, y, z], [x + w, y + d, z], [xm, y + d, z + h], [xm, y, z + h]], m[2], m[3]),
        face([[x, y + d, z], [x + w, y + d, z], [xm, y + d, z + h]], m[1], m[3]),
      ];
    }
    let pts = it.pts.slice();
    const area = pts.reduce((a, p, i) => { const q = pts[(i + 1) % pts.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0);
    if (area < 0) pts = pts.reverse();
    const [ox, oy, oz] = it.o, dp = it.depth, k2 = (it.sc || 1) / Math.SQRT2;
    const F = ([u, v]: Pt): V3 => it.plane === "floor" ? [ox + (u - v) * k2, oy - (u + v) * k2, oz + dp] : it.plane === "side" ? [ox, oy - u, oz + v] : [ox + u, oy, oz + v];
    const B = ([u, v]: Pt): V3 => it.plane === "floor" ? [ox + (u - v) * k2, oy - (u + v) * k2, oz] : it.plane === "side" ? [ox - dp, oy - u, oz + v] : [ox + u, oy - dp, oz + v];
    const sides: { mid: number; f: Face }[] = [];
    pts.forEach((a, i) => {
      const b = pts[(i + 1) % pts.length];
      const nu = b[1] - a[1], nv = -(b[0] - a[0]);
      const n: V3 = it.plane === "floor" ? [nu - nv, -nu - nv, 0] : it.plane === "side" ? [0, -nu, nv] : [nu, 0, nv];
      if (n[0] + n[1] + n[2] <= 1e-6) return;
      const quad = [F(a), F(b), B(b), B(a)];
      const ab = Math.abs(n[0]) + Math.abs(n[1]) + Math.abs(n[2]);
      const fill = it.plane === "floor" ? (n[0] > n[1] ? m[2] : m[1]) : n[2] / ab > 0.55 ? m[0] : it.plane === "side" ? (n[1] > 0 ? m[1] : m[0]) : n[0] > 0 ? m[2] : m[0];
      sides.push({ mid: quad.reduce((acc, p) => acc + p[0] + p[1] + p[2], 0) / 4, f: face(quad, fill, m[3]) });
    });
    sides.sort((p, q) => p.mid - q.mid);
    return [...sides.map((s) => s.f), face(pts.map(F), it.front || (it.plane === "floor" ? m[0] : it.plane === "side" ? m[2] : m[1]), it.front ? "#070607" : m[3])];
  };
  const key = (it: Item) => (it.t === "prism" ? it.key ?? it.o[0] + it.o[1] + it.o[2] + (it.k || 0) * 0.01 : it.x + it.y + it.z);
  const sorted = sc.items.slice().sort((a, b) => {
    const ca = a.f === "c" ? 1 : 0, cb = b.f === "c" ? 1 : 0;
    return ca !== cb ? cb - ca : key(a) - key(b);
  });
  const items = sorted.map((it, i) => {
    collect = it.f !== "c";
    const faces = facesOf(it);
    const fl = it.f || "";
    const cls = fl === "eq" ? "eq" : fl.includes("hv") ? "blk hv" : "blk";
    const x = it.t === "prism" ? it.o[0] : it.x, y = it.t === "prism" ? it.o[1] : it.y;
    const delay = fl === "eq" ? `${(0.1 + i * 0.03).toFixed(2)}s, ${(-(x * 0.14 + y * 0.25)).toFixed(2)}s` : `${(0.05 + i * 0.06).toFixed(2)}s`;
    return { faces, cls, delay };
  });
  const xs = bounds.map((p) => p[0]), ys = bounds.map((p) => p[1]);
  const pad = 36, minX = Math.min(...xs) - pad, minY = Math.min(...ys) - pad;
  const vb = [minX, minY, Math.max(...xs) + pad - minX, Math.max(...ys) + pad - minY].map((v) => v.toFixed(0)).join(" ");
  return { items, vb, bg: sc.bg, alt: sc.alt };
}

interface IsoProps { scene: Scene; height: number; transparent?: boolean }

const Iso = ({ scene, height, transparent = false }: IsoProps) => {
  const { items, vb, bg, alt } = useMemo(() => build(scene), [scene]);
  return (
    <figure className="iso-fig" style={{ height, background: transparent ? "transparent" : bg }}>
      <svg className="iso" viewBox={vb} preserveAspectRatio="xMidYMid meet" role="img" aria-label={alt}>
        {items.map((it, i) => (
          <g key={i} className={it.cls} style={{ animationDelay: it.delay }}>
            {it.faces.map((f, j) => (
              <g key={j}>
                <polygon points={f.p} style={{ fill: f.fill, stroke: f.stroke }} />
                {f.ins && <polygon className="ins" points={f.ins} style={{ stroke: f.stroke }} />}
              </g>
            ))}
          </g>
        ))}
      </svg>
    </figure>
  );
};

export default Iso;
