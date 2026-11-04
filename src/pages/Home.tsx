import { Link } from "react-router-dom";
import Shell, { Arrow, Figure } from "@/site/Shell";
import Iso from "@/site/Iso";
import { chapters, products } from "@/data/site";
import lookTheSun from "@/assets/photos/look-the-sun-is-leaving-us.webp";

const cardTone = ["r-ember", "r-surface", "r-plasma"];
const logoFilter = ["brightness(0)", "var(--logo)", "var(--plasma-logo)"];
const roleLine: Record<string, string> = { tf1: "Senior Product Manager", garantme: "Product Manager → Group PM", myki: "Product Manager" };

const Home = () => {
  const cauldron = products[0];
  return (
    <Shell title="Karim Abousleiman · Senior Product Manager, Paris" active={null}>
      <section className="wrap hero">
        <div className="ht rise hero-tile">
          <div className="hero-scene" aria-hidden="true"><Iso scene="home" height={600} transparent /></div>
          <div className="hero-body">
            <p className="cap" style={{ margin: 0, color: "inherit" }}>Senior Product Manager · Music Composer · Paris</p>
            <div className="hero-main">
              <h1 className="d hero-name"><span>Karim</span><br />Abousleiman</h1>
              <p className="hero-line">Building products people come back to.</p>
              <div className="hero-ctas">
                <Link className="inkb" to="/work/tf1">See the work <Arrow /></Link>
                <Link className="ghost hero-ghost" to="/music">Listen to kimbü</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: 16 }} aria-label="Highlights">
        <div className="card hero-intro">
          <p className="muted" style={{ margin: 0, maxWidth: "40rem" }}>Senior PM at TF1+, the TF1 group's free streaming platform. Before that I led a team of 4 PMs at Garantme and helped grow MYKI to 1M+ daily users.</p>
          <ul className="chips">
            <li>+12 pts first-session watch rate · TF1+</li>
            <li>Managed 4 PMs · Garantme</li>
            <li>1M+ daily users · MYKI</li>
          </ul>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="work-h">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40 }}>
          <h2 id="work-h" className="d h2" style={{ marginBottom: 0 }}>Three companies,<br />three results</h2>
          <Link className="ghost" to="/work/tf1">Read every chapter <Arrow /></Link>
        </div>
        <div className="grid3">
          {chapters.map((c, i) => (
            <Link key={c.slug} to={`/work/${c.slug}`} className={`result lift ${cardTone[i]}`}>
              <div className="top">
                <img src={c.logo} alt={c.name} style={{ height: c.slug === "myki" ? 26 : 22, filter: logoFilter[i] }} />
                <span>{c.years}</span>
              </div>
              <div style={{ marginTop: "auto" }}>
                <p className="d num"><Figure value={c.result.figure} /></p>
                <p style={{ margin: "8px 0 0" }}>{c.result.label.toLowerCase()}</p>
              </div>
              <div className="rfoot"><span>{roleLine[c.slug]}</span><Arrow /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="prod-h">
        <Link to="/products" className="card lift" style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 40, alignItems: "center", padding: 24 }}>
          <img src={cauldron.image.src} alt={cauldron.image.alt} width={cauldron.image.width} height={cauldron.image.height} style={{ width: "100%", height: "auto", borderRadius: 24, display: "block" }} />
          <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
            <span className="tag">Built on my own · {cauldron.kind}</span>
            <h2 id="prod-h" className="d" style={{ fontSize: "clamp(40px, 5vw, 80px)" }}>Cauldron<br />Who's Who</h2>
            <p className="muted" style={{ margin: 0, maxWidth: "30rem" }}>Look up any person, movement, place or year as you read <em>The Cauldron</em>, and follow on a map who ruled where, from 1299 to today. {cauldron.role}</p>
            <span className="inkb">All products <Arrow /></span>
          </div>
        </Link>
      </section>

      <section className="wrap sec" aria-labelledby="off-h">
        <h2 id="off-h" className="d h2" style={{ marginBottom: 40 }}>Off the clock</h2>
        <div className="grid2">
          <Link to="/music" className="ht lift tile" style={{ color: "var(--on-plasma)" }}>
            <span className="tag" style={{ alignSelf: "flex-start" }}>Released as kimbü</span>
            <div>
              <p className="d" style={{ fontSize: "clamp(56px, 10vw, 160px)" }}>Music</p>
              <p style={{ margin: "12px 0 0", maxWidth: "26rem" }}>Jazz-rooted tracks I write and play across more than ten instruments.</p>
            </div>
          </Link>
          <Link to="/photo-film" className="lift tile" style={{ position: "relative", overflow: "hidden", color: "#ffffff" }}>
            <img src={lookTheSun} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <span style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(7,6,7,.72), rgba(7,6,7,0) 60%)" }} />
            <span className="tag" style={{ alignSelf: "flex-start", position: "relative" }}>Beirut to Venice</span>
            <div style={{ position: "relative" }}>
              <p className="d" style={{ fontSize: "clamp(56px, 10vw, 160px)" }}>Photo &amp; Film</p>
              <p style={{ margin: "12px 0 0", maxWidth: "26rem" }}>Nine photographs and a film credited on IMDb.</p>
            </div>
          </Link>
        </div>
      </section>
    </Shell>
  );
};

export default Home;
