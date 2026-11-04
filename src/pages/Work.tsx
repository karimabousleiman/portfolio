import { Link, Navigate, useParams } from "react-router-dom";
import Shell, { Arrow, Figure, NewTab, OutArrow } from "@/site/Shell";
import Iso from "@/site/Iso";
import { chapters } from "@/data/site";

const Work = () => {
  const { slug } = useParams();
  const i = chapters.findIndex((c) => c.slug === slug);
  if (i < 0) return <Navigate to="/work/tf1" replace />;
  const c = chapters[i];
  const next = chapters[i + 1];

  return (
    <Shell title={`${c.name} · Karim Abousleiman`} active="work">
      <section className="wrap fit-work">
        <nav aria-label="Chapters" className="seg rise">
          {chapters.map((ch, n) => (
            <Link key={ch.slug} to={`/work/${ch.slug}`} className={ch.slug === c.slug ? "on" : undefined} aria-current={ch.slug === c.slug ? "page" : undefined}>
              <span className="cap" style={{ color: "inherit" }}>0{n + 1}</span>{ch.name}
            </Link>
          ))}
        </nav>
        <div className="fit-grid">
          <div className="card rise fit-card" style={{ animationDelay: ".08s" }}>
            <div className="fit-top">
              <h1 className="d fit-name">{c.name}</h1>
              <dl className="facts">
                <dt className="cap">Role</dt><dd>{c.role}</dd>
                <dt className="cap">When</dt><dd>{c.when}</dd>
                <dt className="cap">Where</dt><dd>{c.where}</dd>
              </dl>
            </div>
            <p className="lede">{c.about}</p>
          </div>
          <div className="rise fit-scene" style={{ animationDelay: ".16s" }}><Iso scene={c.scene} height={600} /></div>
        </div>
      </section>

      <section className="wrap sec-sm" aria-labelledby="res-h">
        <h2 id="res-h" className="d h2">What changed</h2>
        {c.second ? (
          <div className="grid2">
            {[{ ...c.result, tone: "stat" }, { ...c.second, tone: "stat r-plasma" }].map((s) => (
              <div key={s.figure} className={`${s.tone} stat-tall`}>
                <p style={{ margin: 0, fontSize: 16 }}>{s.label}</p>
                <div>
                  <p className="d fig-xl"><Figure value={s.figure} /></p>
                  <p style={{ margin: "24px 0 0", fontSize: "clamp(18px, 1.6vw, 24px)", lineHeight: 1.35, maxWidth: "30rem" }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="stat" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 40, alignItems: "end" }}>
            <div>
              <p style={{ margin: "0 0 8px", fontSize: 16 }}>{c.result.label}</p>
              <p className="d fig-xl"><Figure value={c.result.figure} /></p>
            </div>
            <p style={{ margin: 0, fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1.35, maxWidth: "32rem" }}>{c.result.text}</p>
          </div>
        )}
        {c.extras && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 16, marginTop: 16 }}>
            {c.extras.map((x) => (
              <div key={x.figure} className="card extra">
                <p className="d fig-l"><Figure value={x.figure} /></p>
                <p style={{ margin: 0 }}>{x.text}</p>
              </div>
            ))}
          </div>
        )}
        {c.rows && (
          <div style={{ marginTop: 56 }}>
            {c.rows.map((r) => (
              <div key={r.label} className="row"><span className="cap" style={{ paddingTop: 10 }}>{r.label}</span><p>{r.text}</p></div>
            ))}
          </div>
        )}
      </section>

      {c.roles && (
        <section className="wrap sec-sm" aria-labelledby="roles-h">
          <h2 id="roles-h" className="d h2" style={{ marginBottom: 24 }}>Two roles</h2>
          {c.roles.map((r) => (
            <div key={r.title} className="row">
              <span className="cap" style={{ paddingTop: 10 }}>{r.years}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h3 className="d" style={{ fontSize: "clamp(32px, 3.4vw, 52px)" }}>{r.title}</h3>
                {r.points.map((pt) => <p key={pt} style={{ margin: 0, maxWidth: "44rem", fontSize: 18 }}>{pt}</p>)}
              </div>
            </div>
          ))}
        </section>
      )}

      {c.press && (
        <section className="wrap sec-sm" aria-labelledby="press-h">
          <h2 id="press-h" className="d h2">In the press</h2>
          <div className="grid2">
            {c.press.map((pr) => (
              <a key={pr.url} className="press lift" href={pr.url} target="_blank" rel="noopener noreferrer">
                <div style={{ display: "flex", flexDirection: "column", gap: 20, height: "100%" }}>
                  <span className={pr.during ? "tag" : "tag quiet"} style={{ alignSelf: "flex-start" }}>{pr.tag}</span>
                  <p className="d" style={{ fontSize: "clamp(32px, 3.8vw, 60px)", lineHeight: 1, marginTop: "auto" }}>{pr.title}</p>
                  <p className="muted" style={{ margin: 0 }}>{pr.source}<NewTab /></p>
                </div>
                <OutArrow size={28} />
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="wrap sec-sm" aria-label="Next">
        <Link to={next ? `/work/${next.slug}` : "/products"} className="card lift" style={{ textDecoration: "none", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, padding: 48 }}>
          <div>
            <p className="cap" style={{ margin: "0 0 16px" }}>{next ? `Next chapter · 0${i + 2}` : "Up next · what I build on my own"}</p>
            <p className="d" style={{ fontSize: "clamp(36px, 9vw, 140px)" }}>{next ? next.name : "Products"}</p>
          </div>
          <span className="inkb" style={{ marginBottom: 12 }}>{next ? "Read it" : "See them"} <Arrow /></span>
        </Link>
      </section>
    </Shell>
  );
};

export default Work;
