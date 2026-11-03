import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Shell, { NewTab, OutArrow } from "@/site/Shell";
import { FILM, IMDB, photos } from "@/data/site";

type Rect = { x: number; y: number; w: number; h: number };
type Phase = "from" | "in" | "out";

const rectOf = (el: Element | null | undefined): Rect | null => {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, w: r.width, h: r.height };
};

/**
 * Lightbox that grows out of the tapped photo and shrinks back into it. The photo follows the finger 1:1,
 * resists when dragged up, and a release is judged by where its momentum is heading: throw it to close.
 */
const Lightbox = ({ index, origin, onIndex, onClosed }: { index: number; origin: Rect; onIndex: (i: number) => void; onClosed: () => void }) => {
  const [phase, setPhase] = useState<Phase>("from");
  const [from, setFrom] = useState<Rect>(origin);
  const [dy, setDy] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ y0: number; active: boolean; hist: { y: number; t: number }[] } | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const timer = useRef<number>();

  useEffect(() => {
    const go = () => setPhase((p) => (p === "from" ? "in" : p));
    const raf = requestAnimationFrame(() => requestAnimationFrame(go));
    const fallback = window.setTimeout(go, 60);
    closeBtn.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      window.clearTimeout(timer.current);
      document.body.style.overflow = prev;
    };
  }, []);

  const close = useCallback(() => {
    setDragging(false);
    setFrom((f) => rectOf(document.querySelectorAll(".ph")[index]) ?? f);
    setPhase("out");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(onClosed, 360);
  }, [index, onClosed]);

  const step = useCallback((d: number) => {
    setDy(0);
    onIndex((index + d + photos.length) % photos.length);
  }, [index, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, step]);

  const onDown = (e: React.PointerEvent<HTMLImageElement>) => {
    if (e.button > 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { y0: e.clientY, active: false, hist: [{ y: e.clientY, t: performance.now() }] };
  };
  const onMove = (e: React.PointerEvent<HTMLImageElement>) => {
    const d = drag.current;
    if (!d) return;
    const raw = e.clientY - d.y0;
    if (!d.active && Math.abs(raw) < 8) return;
    d.active = true;
    d.hist.push({ y: e.clientY, t: performance.now() });
    if (d.hist.length > 6) d.hist.shift();
    const vh = window.innerHeight;
    // Down follows the finger; up rubber-bands, giving less the further it goes.
    setDy(raw >= 0 ? raw : (raw * vh * 0.55) / (vh + 0.55 * Math.abs(raw)));
    setDragging(true);
  };
  const onUp = () => {
    const d = drag.current;
    drag.current = null;
    if (!d || !d.active) return;
    const a = d.hist[0], b = d.hist[d.hist.length - 1];
    const v = b.t > a.t ? ((b.y - a.y) / (b.t - a.t)) * 1000 : 0;
    // Project where the flick is heading (exponential deceleration), then commit or settle back.
    const projected = dy + ((v / 1000) * 0.99) / (1 - 0.99);
    if (dy > 24 && projected > window.innerHeight * 0.22) close();
    else {
      setDy(0);
      setDragging(false);
    }
  };

  const p = photos[index];
  const vw = window.innerWidth, vh = window.innerHeight, ar = p.width / p.height;
  let w = Math.min(vw - 32, 1400), h = w / ar;
  if (h > vh - 170) { h = vh - 170; w = h * ar; }
  const tx = (vw - w) / 2, ty = (vh - h) / 2 - 18;
  const atOrigin = phase !== "in";
  const transform = atOrigin
    ? `translate(${from.x - tx}px, ${from.y - ty}px) scale(${from.w / w}, ${from.h / h})`
    : `translate(0px, ${dy}px) scale(${1 - Math.min(Math.abs(dy) / 1400, 0.1)})`;
  const imgStyle: CSSProperties = {
    left: tx, top: ty, width: w, height: h, transform, borderRadius: atOrigin ? 28 : 16,
    transition: dragging || phase === "from" ? "none" : `transform ${phase === "out" ? 360 : 520}ms cubic-bezier(.2,.9,.25,1), border-radius 360ms ease`,
  };
  const fade = 1 - Math.min(Math.abs(dy) / 520, 1) * 0.75;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={p.title}>
      <div className="lb-bg" onClick={close} style={{ opacity: atOrigin ? 0 : 0.94 * fade, transition: dragging ? "none" : "opacity 360ms ease" }} />
      <img className="lb-img" src={p.src} alt={p.alt} style={imgStyle} draggable={false} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} />
      <div className="lb-ui" style={{ opacity: atOrigin || dragging ? 0 : 1 }}>
        <button ref={closeBtn} className="inkb lb-close" type="button" onClick={close}>Close</button>
        <div className="lb-bar">
          <button className="ghost" type="button" onClick={() => step(-1)} aria-label="Previous photo"><ArrowLeft size={18} aria-hidden="true" /></button>
          <p className="lb-cap">{p.title}<span>{index + 1} / {photos.length}</span></p>
          <button className="ghost" type="button" onClick={() => step(1)} aria-label="Next photo"><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
};

const PhotoFilm = () => {
  const [open, setOpen] = useState<{ index: number; origin: Rect } | null>(null);
  const onClosed = useCallback(() => {
    const i = open?.index;
    setOpen(null);
    if (i !== undefined) (document.querySelectorAll(".ph")[i] as HTMLElement | undefined)?.focus();
  }, [open]);
  const onIndex = useCallback((index: number) => setOpen((o) => (o ? { ...o, index } : o)), []);
  const tile = (i: number, style?: CSSProperties) => {
    const p = photos[i];
    return (
      <button key={i} type="button" className={p.span >= 4 ? "ph wide" : "ph"} style={{ gridColumn: `span ${p.span}`, aspectRatio: p.ratio || undefined, ...style }}
        aria-label={`View ${p.title} full screen`} onClick={(e) => setOpen({ index: i, origin: rectOf(e.currentTarget)! })}>
        <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading={i > 2 ? "lazy" : undefined} />
        <span className="lbl">{p.title}</span>
      </button>
    );
  };

  return (
    <Shell title="Photo & Film · Karim Abousleiman" active="photo" band="make">
      <section className="wrap" style={{ paddingTop: 56 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 32 }}>
          <h1 className="d rise" style={{ fontSize: "clamp(72px, 15vw, 220px)", lineHeight: 0.84 }}>Photo<br />&amp; Film</h1>
          <p className="lede rise" style={{ margin: "0 0 12px", maxWidth: "26rem", fontSize: "clamp(20px, 1.8vw, 26px)", animationDelay: ".1s" }}>Photographs from Beirut to Venice, and film work credited on IMDb.</p>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 64 }} aria-label="Photographs">
        <div className="mosaic">
          {photos.slice(0, 7).map((_, i) => tile(i))}
          <div className="stack" style={{ gridColumn: "span 2" }}>
            {tile(7, { height: "100%", gridColumn: "auto" })}
            {tile(8, { height: "100%", gridColumn: "auto" })}
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="film-h">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 32 }}>
          <h2 id="film-h" className="d h2" style={{ marginBottom: 0 }}>Film</h2>
          <a className="ghost" href={IMDB} target="_blank" rel="noopener noreferrer">Credits on IMDb <OutArrow /><NewTab /></a>
        </div>
        <div className="film">
          <iframe src={FILM} title="Film by Karim Abousleiman" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </section>

      {open && <Lightbox index={open.index} origin={open.origin} onIndex={onIndex} onClosed={onClosed} />}
    </Shell>
  );
};

export default PhotoFilm;
