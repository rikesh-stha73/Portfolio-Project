export default function Footer() {
  return (
    <>
      <style>{`
        .footer { padding: 28px 0; border-top: 1px solid #1c2438; }
        .footer-row {
          max-width: 980px; margin: 0 auto; padding: 0 32px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-mark { font-family: 'Times New Roman', serif; font-size: 16px; color: #8a93ab; }
        .footer-links { display: flex; gap: 20px; }
        .footer-links a { font-size: 13px; color: #4a5270; transition: color 0.2s; }
        .footer-links a:hover { color: #4d7fff; }
        @media(max-width:640px) { .footer-row { padding: 0 22px; } }
      `}</style>
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-mark">Rikesh Shrestha</div>
          <div className="footer-links">
            <a href="https://github.com/rikesh-stha73" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:rikesh.stha73@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}
