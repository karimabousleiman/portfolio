export const BloomVariant = () => (
  <div className="prototype-shell bloom">
    <header className="prototype-nav bloom-nav">
      <div className="brand-mark">KA</div>
      <nav>
        <a href="#">Experience</a>
        <a href="#">Visuals</a>
        <a href="#">Music</a>
        <a href="#">About</a>
      </nav>
    </header>

    <main className="prototype-main bloom-main">
      <section className="bloom-hero">
        <div className="bloom-copy">
          <p className="eyebrow">Product leader · Artist · Strategist</p>
          <h1>
            Designing <span>beautifully useful</span> systems.
          </h1>
          <p>
            I bring product thinking, editorial clarity, and creative instinct together to build
            experiences that feel human, tactile, and memorable.
          </p>
          <div className="cta-row">
            <a href="#" className="primary-btn">LinkedIn</a>
            <a href="#" className="secondary-btn">Email</a>
          </div>
        </div>

        <div className="bloom-visual" aria-hidden="true">
          <div className="bloom-card card-one">
            <span>01</span>
            <strong>Product</strong>
            <small>Strategy</small>
          </div>
          <div className="bloom-card card-two">
            <span>02</span>
            <strong>Visuals</strong>
            <small>Cinema</small>
          </div>
          <div className="bloom-card card-three">
            <span>03</span>
            <strong>Music</strong>
            <small>Jazz</small>
          </div>
        </div>
      </section>

      <section className="bloom-grid">
        <article className="bloom-panel accent-panel">
          <p className="mini-label">Selected work</p>
          <h2>From product strategy to culture-driven storytelling.</h2>
          <p>
            I build experiences with intent — balancing clarity, retention, and emotional resonance
            while shaping narratives that feel distinct and lasting.
          </p>
        </article>

        <article className="bloom-panel">
          <p className="mini-label">Impact</p>
          <h3>1M+</h3>
          <p>users reached</p>
        </article>

        <article className="bloom-panel">
          <p className="mini-label">Focus</p>
          <h3>Growth</h3>
          <p>Experimentation, trust, activation</p>
        </article>

        <article className="bloom-panel">
          <p className="mini-label">Beyond work</p>
          <h3>Art + sound</h3>
          <p>Photography, film, and multi-instrument playing</p>
        </article>
      </section>
    </main>
  </div>
);
