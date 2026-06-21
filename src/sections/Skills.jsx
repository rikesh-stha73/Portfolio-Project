import { useEffect, useRef } from 'react'

const GROUPS = [
  { name: 'Backend', items: ['Laravel', 'PHP', 'REST APIs', 'PostgreSQL', 'MySQL'] },
  { name: 'Frontend', items: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Chart.js'] },
  { name: 'Tools', items: ['Git & GitHub', 'Docker', 'Agile / Scrum', 'Postman', 'Composer / NPM'] },
]

export default function Skills() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.15 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .skills { padding: 110px 0; border-top: 1px solid #1c2438; }
        .skills-h2 { font-family: 'Times New Roman', serif; font-size: clamp(32px,4vw,48px); color: #e4e8f2; margin-bottom: 48px; }
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; margin-bottom: 56px; }
        .skills-group-name {
          font-family: 'Times New Roman', serif; font-style: italic;
          font-size: 18px; color: #4d7fff; margin-bottom: 20px;
        }
        .skills-item {
          font-size: 14px; color: #8a93ab; padding: 10px 0;
          border-bottom: 1px solid #1c2438;
        }
        .skills-item:last-child { border-bottom: none; }
        .skills-certs { display: flex; flex-direction: column; gap: 0; border-top: 1px solid #1c2438; }
        .skills-cert {
          display: flex; justify-content: space-between; align-items: center;
          padding: 18px 0; border-bottom: 1px solid #1c2438;
        }
        .skills-cert-name { font-size: 14px; color: #e4e8f2; font-weight: 500; }
        .skills-cert-by { font-size: 12px; color: #4a5270; margin-top: 2px; }
        .skills-cert-link { font-size: 13px; color: #4d7fff; font-weight: 600; }
        .skills-cert-link:hover { text-decoration: underline; }
        @media(max-width:760px) { .skills-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
      <section className="skills" id="skills" ref={ref}>
        <div className="container">
          <div className="eyebrow reveal">What I work with</div>
          <h2 className="skills-h2 reveal">Skills</h2>

          <div className="skills-grid">
            {GROUPS.map((g, i) => (
              <div key={g.name} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="skills-group-name">{g.name}</div>
                {g.items.map(item => <div key={item} className="skills-item">{item}</div>)}
              </div>
            ))}
          </div>

          <div className="skills-certs reveal">
            <div className="skills-cert">
              <div>
                <div className="skills-cert-name">Meta Front-End Developer Certificate</div>
                <div className="skills-cert-by">Coursera · 2024</div>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/specialization/T7Y9CX38KDMU" target="_blank" rel="noreferrer" className="skills-cert-link">Verify →</a>
            </div>
            <div className="skills-cert">
              <div>
                <div className="skills-cert-name">Secure Coding in Laravel</div>
                <div className="skills-cert-by">Coursera · 2024</div>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/specialization/DTG94JCNDRN7" target="_blank" rel="noreferrer" className="skills-cert-link">Verify →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
