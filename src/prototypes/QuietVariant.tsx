import aboutPhoto from "@/assets/about-photo.jpg";

const disciplines = ["Product strategy", "Growth", "Photography", "Cinema", "Jazz", "Guitar", "Creative direction", "Retention"];

export const QuietVariant = () => (
  <div className="prototype-shell archive">
    <div className="archive-glow archive-glow-one" aria-hidden="true" />
    <div className="archive-glow archive-glow-two" aria-hidden="true" />
    <div className="archive-glow archive-glow-three" aria-hidden="true" />

    <header className="prototype-nav archive-nav reveal">
      <div className="brand-mark">KA</div>
      <nav>
        <a href="#">Experience</a>
        <a href="#">Visual Arts</a>
        <a href="#">Music</a>
        <a href="#">About</a>
      </nav>
    </header>

    <main className="prototype-main">
      <section className="archive-hero">
        <div className="archive-orb" aria-hidden="true" />

        <div className="archive-title-wrap">
          <div className="archive-meta reveal">
            <span><i style={{ background: "#ff6a3d" }} />Product manager</span>
            <span><i style={{ background: "#7b6bff" }} />Paris</span>
            <span><i style={{ background: "#2fd8a8" }} />Creative systems</span>
          </div>
          <h1>
            <span className="line reveal" style={{ animationDelay: "120ms" }}>Designing calm,</span>
            <span className="line grad reveal" style={{ animationDelay: "220ms" }}>useful systems</span>
            <span className="line reveal" style={{ animationDelay: "320ms" }}>for people in motion.</span>
          </h1>
          <div className="archive-copy reveal" style={{ animationDelay: "420ms" }}>
            <p>
              I build clear experiences at the intersection of product, storytelling, and culture —
              from product leadership to visuals, music, and cinema.
            </p>
            <div className="cta-row">
              <a href="#" className="primary-btn">LinkedIn</a>
              <a href="#" className="secondary-btn">Email</a>
            </div>
          </div>
        </div>

        <figure className="archive-photo reveal" style={{ animationDelay: "300ms" }}>
          <img src={aboutPhoto} alt="Karim playing guitar" />
          <figcaption>Now playing · Telecaster sessions</figcaption>
        </figure>
      </section>

      <div className="archive-marquee" aria-hidden="true">
        <div className="archive-marquee-track">
          {[...disciplines, ...disciplines].map((item, i) => (
            <span key={i} data-tone={i % 4}>{item}</span>
          ))}
        </div>
      </div>

      <section className="archive-grid">
        <article className="feature feature-large tone-sunset reveal" style={{ animationDelay: "100ms" }}>
          <p className="mini-label">Selected profile</p>
          <h2>From product strategy to sonic storytelling.</h2>
          <p>
            Growth, retention, and user education work — kept rooted in culture and human behavior
            through music and visual narratives.
          </p>
          <div className="art-rings" aria-hidden="true"><i /><i /><i /></div>
        </article>

        <article className="feature tone-violet reveal" style={{ animationDelay: "200ms" }}>
          <p className="mini-label">Focus</p>
          <h3>Product & growth</h3>
          <p>Experiments, trust, retention loops.</p>
          <div className="art-bars" aria-hidden="true">
            {[40, 65, 50, 85, 70, 100].map((h, i) => (
              <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }} />
            ))}
          </div>
        </article>

        <article className="feature tone-lime reveal" style={{ animationDelay: "300ms" }}>
          <p className="mini-label">Practice</p>
          <h3>Art & music</h3>
          <p>Photography, cinema, multi-instrumentalist.</p>
          <div className="art-eq" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <i key={i} style={{ animationDelay: `${(i * 137) % 900}ms` }} />
            ))}
          </div>
        </article>
      </section>

      <section className="archive-stats">
        {[
          ["Years", "8+", "#ff6a3d"],
          ["Scale", "1M+", "#7b6bff"],
          ["Base", "Paris", "#2fd8a8"],
        ].map(([label, value, color], i) => (
          <div key={label} className="reveal" style={{ animationDelay: `${400 + i * 100}ms`, ["--c" as string]: color }}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>
    </main>
  </div>
);
