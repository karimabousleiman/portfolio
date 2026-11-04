import { CSSProperties, useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Shell, { Arrow } from "@/site/Shell";
import { chapters, languages } from "@/data/site";
import cutout from "@/assets/karim-cutout.png";

const mask = (from: string, to: string): CSSProperties => {
  const m = `url(${cutout}), linear-gradient(to bottom, ${from}, ${to})`;
  return { WebkitMaskImage: m, maskImage: m };
};

const words = ["Product", "Music", "Film", "Photography"];

const Bio = () => {
  // Pointer parallax: the name, shadow and portrait shift at different depths.
  const [p, setP] = useState({ x: 0, y: 0 });
  const frame = useRef(0);
  const move = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setP({ x, y }));
  }, []);
  const shift = (k: number, j: number): CSSProperties => ({ transform: `translate(${(p.x * k).toFixed(1)}px, ${(p.y * j).toFixed(1)}px)` });
  const [paused, setPaused] = useState(false);

  return (
    <Shell title="Bio · Karim Abousleiman" active="bio">
      <section className="wrap fit-bio" aria-labelledby="bio-h">
        <div className="stage" onPointerMove={move} onPointerLeave={() => setP({ x: 0, y: 0 })}>
          <div className="layer" style={shift(-36, -14)}><h1 id="bio-h" className="d giant rise">Karim</h1></div>
          <div className="layer" style={shift(30, 14)}>
            <div className="fig rise" style={{ animationDelay: ".12s" }}><span className="fig-mask fig-shadow" style={mask("#000 40%", "transparent 54%")} /></div>
          </div>
          <div className="layer" style={shift(12, 6)}>
            <div className="fig rise" style={{ animationDelay: ".18s" }}>
              <img src={cutout} alt="Karim Abousleiman in a white T-shirt, looking off to the side" width={670} height={987} />
              <span className="fig-mask fig-dots" style={mask("transparent 38%", "#000 52%")} />
            </div>
          </div>
          <div className="layer" style={shift(-18, 0)}><p className="d giant lo rise" aria-hidden="true" style={{ animationDelay: ".26s" }}>Abousleiman</p></div>
          <span className="scan" aria-hidden="true" />
        </div>
        <p style={{ margin: "40px auto 0", maxWidth: "40rem", textAlign: "center", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1.4 }}>
          Senior Product Manager and music composer. Art and science aren't opposites to me; they're two lenses on the same world.
        </p>
      </section>

      <section style={{ padding: "96px 16px 0" }}>
        <div className="marq" aria-hidden="true">
          <div className={paused ? "track paused" : "track"}>
            {[0, 1, 2, 3].flatMap((n) => words.map((w) => (
              <span key={`${n}-${w}`} style={{ display: "contents" }}><span className="d">{w}</span><span className="dot" /></span>
            )))}
          </div>
        </div>
        <div className="wrap" style={{ display: "flex", justifyContent: "flex-end", paddingTop: 12 }}>
          <button className="ghost" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} style={{ padding: "8px 18px", fontSize: 14 }}>
            {paused ? "Play ticker" : "Pause ticker"}
          </button>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="story-h">
        <h2 id="story-h" className="d h2" style={{ marginBottom: 24 }}>The story</h2>
        {[
          ["Where I started", "I started in cinema, as a director of photography.", "I moved into tech through QA, where the job was finding what breaks, and product management turned that into building things that don't."],
          ["How I lead", "Measure what matters. Make discovery routine.", "At TF1+ that meant replacing revenue-only reporting with product-health metrics. At Garantme it meant managing four PMs and building a discovery framework that starts every feature from its why."],
          ["Outside work", "More than ten instruments.", "From keys and guitar to brass, woodwinds and percussion. I release music as kimbü."],
        ].map(([label, head, body]) => (
          <div key={label} className="row" style={{ padding: "40px 0" }}>
            <span className="cap" style={{ paddingTop: 12 }}>{label}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p className="d" style={{ fontSize: "clamp(36px, 4vw, 64px)", lineHeight: 1 }}>{head}</p>
              <p className="muted" style={{ maxWidth: "40rem", fontSize: 18, lineHeight: 1.55 }}>{body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="wrap sec" aria-label="On and off the clock">
        <div className="grid2">
          <div className="half" style={{ background: "var(--surface)" }}>
            <span className="cap" style={{ color: "var(--ink)" }}>On the clock</span>
            <p className="d" style={{ fontSize: "clamp(56px, 8vw, 128px)" }}>Product</p>
            <div style={{ marginTop: "auto" }}>
              {chapters.map((c) => (
                <Link key={c.slug} className="li" to={`/work/${c.slug}`}><span>{c.name} · {c.role.split(" → ").pop()}</span><Arrow /></Link>
              ))}
              <Link className="li" to="/products"><span>Cauldron Who's Who · Meridian</span><Arrow /></Link>
            </div>
          </div>
          <div className="half" style={{ background: "var(--plasma)", color: "var(--on-plasma)" }}>
            <span className="cap" style={{ color: "inherit" }}>Off the clock</span>
            <p className="d" style={{ fontSize: "clamp(56px, 8vw, 128px)" }}>Craft</p>
            <div style={{ marginTop: "auto" }}>
              <Link className="li" to="/music"><span>Music as kimbü · 8 tracks</span><Arrow /></Link>
              <Link className="li" to="/photo-film"><span>Photographs · Beirut to Venice</span><Arrow /></Link>
              <Link className="li" to="/photo-film"><span>Film · credited on IMDb</span><Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="lang-h">
        <h2 id="lang-h" className="d h2">Four languages</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
          {languages.map((l) => (
            <div key={l.name} className="card" style={{ minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span className={l.level === "Native" ? "tag" : "tag quiet"} style={{ alignSelf: "flex-start" }}>{l.level}</span>
              <p className="d" style={{ fontSize: 64 }}>{l.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
};

export default Bio;
