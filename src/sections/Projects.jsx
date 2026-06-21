import { useState, useEffect, useRef } from 'react'

const PROJECTS = [
  {
    n: '01', title: 'Financial Accounts System', co: 'Codebyte Nepal', year: '2025',
    desc: 'A complete financial accounts module — balance sheet, profit & loss, trial balance. Calculations handled in dedicated Laravel Service classes. PostgreSQL with NUMERIC types for decimal precision. React dashboard with live data.',
    stack: ['Laravel', 'React', 'PostgreSQL', 'Sanctum'],
  },
  {
    n: '02', title: 'Government E-Office System', co: 'Shangrila Informatics', year: '2023',
    desc: 'Digital workflow system deployed in real government institutions, replacing paper-based processes. Built file handling, role management, and multi-step approval workflows.',
    stack: ['Laravel', 'React', 'MySQL', 'REST APIs'],
  },
  {
    n: '03', title: 'Eshikshya Education Platform', co: 'Creation Soft Nepal', year: '2024',
    desc: 'Academic management platform for student records, course handling, and digital learning. Backend logic for large datasets, API integration across modules.',
    stack: ['Laravel', 'React', 'MySQL', 'Tailwind'],
  },
  {
    n: '04', title: 'Boutique Management System', co: 'Phye Gan Pvt. Ltd.', year: '2024',
    desc: 'Migrated a legacy PHP application to modern Laravel and React. Built inventory, order management, and sales workflows from scratch.',
    stack: ['Laravel', 'React', 'MySQL'],
  },
  {
    n: '05', title: 'FinTrack — Finance Tracker', co: 'Personal project', year: '2026',
    desc: 'Open-source personal finance tracker showcasing clean Laravel architecture. Sanctum auth, Service classes, PostgreSQL decimal precision, React + TypeScript frontend.',
    stack: ['Laravel', 'React', 'TypeScript', 'PostgreSQL'],
    link: 'https://github.com/rikesh-stha73',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .projects { padding: 110px 0; border-top: 1px solid #1c2438; }
        .projects-h2 { font-family: 'Times New Roman', serif; font-size: clamp(32px,4vw,48px); color: #e4e8f2; margin-bottom: 48px; }
        .proj-row {
          border-top: 1px solid #1c2438;
          padding: 28px 0; cursor: pointer;
        }
        .proj-row:last-child { border-bottom: 1px solid #1c2438; }
        .proj-row-top {
          display: flex; align-items: baseline; gap: 20px;
        }
        .proj-n { font-size: 13px; color: #4a5270; font-family: var(--sans); flex-shrink: 0; }
        .proj-title {
          font-family: 'Times New Roman', serif;
          font-size: 22px; color: #e4e8f2; flex: 1;
          transition: color 0.2s;
        }
        .proj-row:hover .proj-title { color: #4d7fff; }
        .proj-co { font-size: 13px; color: #4a5270; flex-shrink: 0; }
        .proj-body {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .proj-body.open { max-height: 280px; }
        .proj-body-inner { padding: 20px 0 4px 0; }
        .proj-desc { font-size: 15px; color: #8a93ab; line-height: 1.75; margin-bottom: 18px; max-width: 640px; }
        .proj-stack { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px; }
        .proj-tag { font-size: 12px; color: #4a5270; padding: 4px 10px; border: 1px solid #1c2438; border-radius: 3px; }
        .proj-link { font-size: 13px; color: #4d7fff; font-weight: 600; }
        .proj-link:hover { text-decoration: underline; }
        @media(max-width:600px) {
          .proj-row-top { flex-wrap: wrap; gap: 8px; }
          .proj-co { width: 100%; }
        }
      `}</style>
      <section className="projects" id="projects" ref={ref}>
        <div className="container">
          <div className="eyebrow reveal">What I've built</div>
          <h2 className="projects-h2 reveal">Projects</h2>

          <div className="reveal">
            {PROJECTS.map((p, i) => (
              <div key={p.n} className="proj-row" onClick={() => setActive(active === i ? null : i)}>
                <div className="proj-row-top">
                  <span className="proj-n">{p.n}</span>
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-co">{p.co} · {p.year}</span>
                </div>
                <div className={`proj-body ${active === i ? 'open' : ''}`}>
                  <div className="proj-body-inner">
                    <p className="proj-desc">{p.desc}</p>
                    <div className="proj-stack">
                      {p.stack.map(s => <span key={s} className="proj-tag">{s}</span>)}
                    </div>
                    {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="proj-link" onClick={e=>e.stopPropagation()}>View on GitHub →</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
