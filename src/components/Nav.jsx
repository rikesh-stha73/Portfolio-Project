import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 26px 0;
          transition: padding 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          border-bottom: 1px solid transparent;
        }
        .nav.scrolled {
          padding: 16px 0;
          background: rgba(10, 14, 26, 0.9);
          backdrop-filter: blur(10px);
          border-color: #1c2438;
        }
        .nav-row {
          max-width: 980px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-mark {
          font-family: 'Times New Roman', serif;
          font-size: 22px; color: #e4e8f2;
          cursor: pointer; letter-spacing: 0.5px;
        }
        .nav-mark em { color: #4d7fff; font-style: normal; }
        .nav-links { display: flex; align-items: center; gap: 6px; list-style: none; }
        .nav-link {
          background: none; border: none;
          color: #8a93ab; font-size: 14px; font-weight: 500;
          padding: 7px 14px; transition: color 0.2s;
        }
        .nav-link:hover { color: #e4e8f2; }
        .nav-cta {
          margin-left: 8px; padding: 8px 18px;
          border: 1px solid #2f5fe0; color: #4d7fff;
          border-radius: 3px; font-size: 13px; font-weight: 600;
          transition: all 0.2s;
        }
        .nav-cta:hover { background: #4d7fff; color: #0a0e1a; }
        .nav-burger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; padding: 4px;
        }
        .nav-burger span {
          width: 20px; height: 1px; background: #e4e8f2;
          transition: all 0.25s;
        }
        .nav-burger.open span:nth-child(1) { transform: translateY(5px) rotate(45deg); }
        .nav-burger.open span:nth-child(2) { opacity: 0; }
        .nav-burger.open span:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }
        .nav-mobile {
          display: none; position: fixed; inset: 0; top: 0; z-index: 99;
          background: #0a0e1a; flex-direction: column;
          padding: 100px 32px 40px; gap: 4px;
        }
        .nav-mobile.open { display: flex; }
        .nav-mobile-link {
          background: none; border: none; color: #8a93ab;
          font-size: 22px; font-weight: 400; text-align: left;
          padding: 16px 0; border-bottom: 1px solid #1c2438;
          font-family: 'Times New Roman', serif;
        }
        .nav-mobile-cta {
          margin-top: 24px; text-align: center; padding: 14px;
          border: 1px solid #2f5fe0; color: #4d7fff; border-radius: 3px;
        }
        @media(max-width:680px) {
          .nav-links { display: none; }
          .nav-burger { display: flex; }
          .nav-row { padding: 0 22px; }
        }
      `}</style>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-row">
          <div className="nav-mark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Rikesh<em>.</em>
          </div>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l}><button className="nav-link" onClick={() => go(l)}>{l}</button></li>
            ))}
            <li><a href="mailto:rikesh.stha73@gmail.com" className="nav-cta">Hire me</a></li>
          </ul>
          <button className={`nav-burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(l => <button key={l} className="nav-mobile-link" onClick={() => go(l)}>{l}</button>)}
        <a href="mailto:rikesh.stha73@gmail.com" className="nav-mobile-cta">Hire me</a>
      </div>
    </>
  )
}
