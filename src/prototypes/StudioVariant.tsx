export const StudioVariant = () => (
  <div className="prototype-shell monolith">
    <header className="prototype-nav monolith-nav">
      <div className="brand-mark">K.A.</div>
      <nav>
        <a href="#">Experience</a>
        <a href="#">Visuals</a>
        <a href="#">Music</a>
        <a href="#">About</a>
      </nav>
    </header>

    <main className="prototype-main monolith-main">
      <section className="monolith-hero">
        <div>
          <p className="eyebrow">Paris · Product leader · Creative operator</p>
          <h1>
            Karim<br />
            <span>Abousleiman</span>
          </h1>
        </div>

        <div className="monolith-bio">
          <p>
            Product manager with a background in cinema, building systems that feel intuitive,
            expressive, and people-first. I move between product strategy, design, and creative direction.
          </p>
          <div className="cta-row">
            <a href="#" className="primary-btn">LinkedIn</a>
            <a href="#" className="secondary-btn">Email</a>
          </div>
        </div>
      </section>

      <section className="monolith-grid">
        <article className="monolith-panel wide">
          <span className="mini-label">Selected work</span>
          <h3>Strategy, clarity, and cultural signal.</h3>
          <p>
            Scaling digital products, shaping narratives, and translating complex decisions into useful,
            memorable experiences.
          </p>
        </article>

        <article className="monolith-panel">
          <span className="mini-label">Impact</span>
          <strong>1M+</strong>
          <small>users reached</small>
        </article>

        <article className="monolith-panel">
          <span className="mini-label">Focus</span>
          <strong>Growth</strong>
          <small>Product, retention, storytelling</small>
        </article>

        <article className="monolith-panel">
          <span className="mini-label">Outside work</span>
          <strong>Music + film</strong>
          <small>Photography, cinema, jazz</small>
        </article>
      </section>
    </main>
  </div>
);
