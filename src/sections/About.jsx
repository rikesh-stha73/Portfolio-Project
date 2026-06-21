import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.15 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .about { padding: 110px 0; border-top: 1px solid #1c2438; }
        .about-h2 {
          font-family: 'Times New Roman', serif;
          font-size: clamp(32px, 4vw, 48px);
          color: #e4e8f2; margin-bottom: 32px;
          line-height: 1.2;
        }
        .about-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 60px; align-items: start; }
        .about-p {
          font-size: 16px; color: #8a93ab; line-height: 1.85;
          margin-bottom: 20px; font-family: var(--sans);
        }
        .about-stats {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 24px; margin-top: 36px;
        }
        .about-stat { padding-top: 16px; border-top: 1px solid #1c2438; }
        .about-stat-n {
          font-family: 'Times New Roman', serif;
          font-size: 32px; color: #e4e8f2; margin-bottom: 4px;
        }
        .about-stat-l { font-size: 12px; color: #4a5270; }
        .about-links { display: flex; gap: 28px; margin-top: 40px; }
        .about-link {
          font-size: 14px; color: #8a93ab; font-weight: 600;
          border-bottom: 1px solid #1c2438; padding-bottom: 3px;
          transition: all 0.2s;
        }
        .about-link:hover { color: #4d7fff; border-color: #4d7fff; }
        @media(max-width:760px) { .about-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
      <section className="about" id="about" ref={ref}>
        <div className="container">
          <div className="eyebrow reveal">About</div>
          <h2 className="about-h2 reveal">A developer who ships</h2>

          <div className="about-grid">
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <p className="about-p">
                I've spent nearly three years building production software — not tutorials,
                not demos. Real systems used by government offices, retail businesses, and
                financial teams in Nepal.
              </p>
              <p className="about-p">
                My stack is Laravel on the backend, React on the front. I write code that's
                clean enough for the next developer to pick up without a long handoff —
                Service classes for business logic, proper decimal types for money, REST
                APIs that make sense.
              </p>
              <p className="about-p">
                Now based in Wolverhampton, looking for a junior developer role in the UK.
                Eligible to work with no restrictions.
              </p>
              <div className="about-links">
                <a href="https://github.com/rikesh-stha73" target="_blank" rel="noreferrer" className="about-link">GitHub</a>
                <a href="mailto:rikesh.stha73@gmail.com" className="about-link">Email</a>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="about-stats">
                <div className="about-stat"><div className="about-stat-n">3</div><div className="about-stat-l">Years experience</div></div>
                <div className="about-stat"><div className="about-stat-n">4</div><div className="about-stat-l">Companies worked</div></div>
                <div className="about-stat"><div className="about-stat-n">10+</div><div className="about-stat-l">Projects shipped</div></div>
                <div className="about-stat"><div className="about-stat-n">2</div><div className="about-stat-l">Certifications</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
