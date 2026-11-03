import Shell, { NewTab, OutArrow } from "@/site/Shell";
import { products } from "@/data/site";

const Products = () => (
  <Shell title="Products · Karim Abousleiman" active="products">
    <section className="wrap" style={{ paddingTop: 56 }}>
      <span className="tag rise">Designed and built on my own</span>
      <h1 className="d rise" style={{ fontSize: "clamp(65px, 18vw, 260px)", lineHeight: 0.84, marginTop: 24, animationDelay: ".08s" }}>Products</h1>
      <p className="lede rise" style={{ marginTop: 32, maxWidth: "40rem", animationDelay: ".16s" }}>Things I make outside the day job, start to finish: the idea, the design and the build.</p>
    </section>

    {products.map((p, n) => (
      <section key={p.slug} className="wrap" style={{ paddingTop: n === 0 ? 96 : 120 }} aria-labelledby={`${p.slug}-h`}>
        <a className="shot" href={p.url} target="_blank" rel="noopener noreferrer" style={n === 1 ? { background: "var(--plasma)" } : undefined}>
          <img src={p.image.src} width={p.image.width} height={p.image.height} alt={p.image.alt} loading={n === 0 ? undefined : "lazy"} />
          <span className="sr">Open {p.name} (opens in a new tab)</span>
        </a>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: 40, marginTop: 40, alignItems: "start" }}>
          <div>
            <span className="tag">{p.kind}</span>
            <h2 id={`${p.slug}-h`} className="d" style={{ fontSize: "clamp(44px, 7.5vw, 112px)", marginTop: 20 }}>{p.name}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 8 }}>
            <p style={{ margin: 0, fontSize: 20 }}>
              {p.book && <>A companion to <em>{p.book}</em>. </>}
              {p.description}
            </p>
            <p className="muted" style={{ margin: 0 }}>{p.role}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a className="cta" href={p.url} target="_blank" rel="noopener noreferrer">{p.cta} <OutArrow /><NewTab /></a>
              <span className="cap">{p.domain}</span>
            </div>
          </div>
        </div>
      </section>
    ))}
  </Shell>
);

export default Products;
