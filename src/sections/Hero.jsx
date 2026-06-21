export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh; display: flex; align-items: center;
          padding: 140px 0 100px;
        }
        .hero-kicker {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; color: #8a93ab;
          margin-bottom: 36px;
          padding-bottom: 0;
        }
        .hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4d7fff;
        }
        .hero-h1 {
          font-family: 'Times New Roman', serif;
          font-weight: 400;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.15;
          letter-spacing: 0;
          color: #e4e8f2;
          margin-bottom: 28px;
          max-width: 760px;
        }
        .hero-h1 em {
          font-style: italic;
          color: #4d7fff;
        }
        .hero-sub {
          font-size: 17px; color: #8a93ab;
          line-height: 1.75; max-width: 540px;
          margin-bottom: 44px;
          font-family: var(--sans);
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 64px; }
        .hero-btn-primary {
          padding: 13px 28px;
          background: #4d7fff; color: #fff;
          border-radius: 3px; font-size: 15px; font-weight: 600;
          transition: background 0.2s;
        }
        .hero-btn-primary:hover { background: #2f5fe0; }
        .hero-btn-ghost {
          padding: 13px 28px;
          border: 1px solid #1c2438; color: #e4e8f2;
          border-radius: 3px; font-size: 15px; font-weight: 600;
          transition: border-color 0.2s;
        }
        .hero-btn-ghost:hover { border-color: #4d7fff; }
        .hero-meta {
          display: flex; gap: 40px; flex-wrap: wrap;
          padding-top: 36px; border-top: 1px solid #1c2438;
        }
        .hero-meta-item { font-size: 13px; color: #4a5270; }
        .hero-meta-item strong { color: #8a93ab; font-weight: 600; display: block; margin-bottom: 3px; font-size: 13px; }
        @media(max-width:640px) {
          .hero { padding: 110px 0 80px; }
          .hero-meta { gap: 28px; }
        }
      `}</style>
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-kicker">
            <span className="hero-dot" />
            Available for work — Wolverhampton, UK
          </div>

          <h1 className="hero-h1">
            Laravel & React developer<br />
            building things that <em>actually ship.</em>
          </h1>

          <p className="hero-sub">
            I'm Rikesh — nearly three years building production web apps.
            Financial systems, government platforms, REST APIs. Real users, real deadlines.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn-primary"
              onClick={e => { e.preventDefault(); go('projects') }}>View my work</a>
            <a href="#contact" className="hero-btn-ghost"
              onClick={e => { e.preventDefault(); go('contact') }}>Get in touch</a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item"><strong>Stack</strong>Laravel · React · PostgreSQL</div>
            <div className="hero-meta-item"><strong>Experience</strong>Nearly 3 years, 4 companies</div>
            <div className="hero-meta-item"><strong>Location</strong>Wolverhampton, UK</div>
          </div>
        </div>
      </section>
    </>
  )
}
