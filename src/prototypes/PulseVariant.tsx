import aboutPhoto from "@/assets/about-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Letters = ({ text, offset = 0 }: { text: string; offset?: number }) => (
  <span className="pulse-word">
    {text.split("").map((ch, i) => (
      <span key={i} style={{ animationDelay: `${(offset + i) * 45}ms` }}>{ch}</span>
    ))}
  </span>
);

const tracks = ["A1 · Product strategy", "A2 · Growth loops", "A3 · User trust", "B1 · Photography", "B2 · Cinema", "B3 · Jazz guitar"];

export const PulseVariant = () => (
  <div className="prototype-shell pulse">
    <header className="prototype-nav pulse-nav">
      <div className="brand-mark">KA</div>
      <div className="pulse-tags">
        <span>[ Sound on ]</span>
        <span>[ Paris ]</span>
        <span>[ 2026 ]</span>
      </div>
      <nav>
        <a href="#">Experience</a>
        <a href="#">Visuals</a>
        <a href="#">Music</a>
        <a href="#">About</a>
      </nav>
    </header>

    <main className="prototype-main">
      <section className="pulse-hero">
        <h1 aria-label="Karim Abousleiman">
          <Letters text="KARIM" />
          <Letters text="ABOUSLEIMAN" offset={5} />
        </h1>

        <div className="pulse-vinyl" aria-hidden="true">
          <div className="pulse-disc">
            <img src={aboutPhoto} alt="" />
          </div>
          <div className="pulse-arm" />
        </div>
      </section>

      <div className="pulse-eq" aria-hidden="true">
        {Array.from({ length: 48 }, (_, i) => (
          <i key={i} style={{ animationDelay: `${(i * 173) % 1100}ms`, animationDuration: `${600 + ((i * 89) % 600)}ms` }} />
        ))}
      </div>

      <section className="pulse-bento">
        <article className="pulse-tile tile-ink">
          <span className="pulse-label">[ Side A — Product ]</span>
          <h2>I make complexity feel clear.</h2>
          <p>Product manager with a cinema background — growth, retention, and storytelling for 1M+ users.</p>
          <div className="cta-row">
            <a href="#" className="pulse-btn">LinkedIn ↗</a>
            <a href="#" className="pulse-btn ghost">Email ↗</a>
          </div>
        </article>

        <article className="pulse-tile tile-photo">
          <img src={heroBg} alt="" />
          <span className="pulse-label">[ Visuals ]</span>
          <h3>Photography + cinema</h3>
        </article>

        <article className="pulse-tile tile-lime">
          <span className="pulse-label">[ Side B — Music ]</span>
          <h3>Jazz, multi-instrumentalist</h3>
          <div className="pulse-wave" aria-hidden="true" />
        </article>

        <article className="pulse-tile tile-cobalt">
          <span className="pulse-label">[ Stats ]</span>
          <div className="pulse-stats">
            <div><strong>8+</strong><small>years</small></div>
            <div><strong>1M+</strong><small>users</small></div>
          </div>
        </article>
      </section>

      <div className="pulse-ticker" aria-hidden="true">
        <div className="pulse-ticker-track">
          {[...tracks, ...tracks].map((t, i) => <span key={i}>{t} <b>●</b></span>)}
        </div>
      </div>
    </main>
  </div>
);
