export const EditorialVariant = () => (
  <div className="prototype-shell signal">
    <header className="prototype-nav signal-nav">
      <div className="brand-mark">Karim Abousleiman</div>
      <nav>
        <a href="#">Experience</a>
        <a href="#">Visual Arts</a>
        <a href="#">Music</a>
        <a href="#">About</a>
      </nav>
    </header>

    <main className="prototype-main">
      <section className="signal-hero">
        <div className="signal-copy">
          <p className="eyebrow">Product manager / design strategist / creative technologist</p>
          <h1>
            I make complexity
            <span>feel clear.</span>
          </h1>
          <p>
            From digital products to creative direction, I connect user behavior, product strategy,
            and artistic taste to build experiences that feel intelligent and alive.
          </p>
          <div className="cta-row">
            <a href="#" className="primary-btn">LinkedIn</a>
            <a href="#" className="secondary-btn">Email</a>
          </div>
        </div>

        <aside className="signal-aside">
          <div className="signal-card accent">
            <span>Current focus</span>
            <strong>Product strategy</strong>
            <small>Growth, retention, and storytelling.</small>
          </div>
          <div className="signal-card">
            <span>Impact</span>
            <strong>1M+</strong>
            <small>users reached</small>
          </div>
        </aside>
      </section>

      <section className="signal-grid">
        <article className="signal-panel wide">
          <div className="panel-head">
            <span>Experience</span>
            <span className="chip">8+ years</span>
          </div>
          <h3>Scaling trust, clarity, and momentum across product, content, and culture.</h3>
          <p>
            My work has lived in product strategy, user education, experimentation, and brand storytelling —
            turning ambiguity into usable systems and memorable experiences.
          </p>
        </article>

        <article className="signal-panel">
          <span className="mini-label">Visual arts</span>
          <h3>Photography + cinema</h3>
        </article>

        <article className="signal-panel">
          <span className="mini-label">Music</span>
          <h3>Jazz, multi-instrumentalist</h3>
        </article>

        <article className="signal-panel">
          <span className="mini-label">About</span>
          <h3>Creative at heart, product by trade</h3>
        </article>
      </section>
    </main>
  </div>
);
