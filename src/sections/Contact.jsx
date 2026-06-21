import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.15 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const sf = k => e => setForm(f => ({ ...f, [k]: e.target.value }))
 const submit = async (e) => {
  e.preventDefault()

  if (!form.name || !form.email || !form.message) return

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    )

    setSent(true)
    setForm({ name: '', email: '', message: '' })
  } catch (error) {
    console.error('Email send failed:', error)
    alert('Failed to send message. Try again.')
  }
}

  return (
    <>
      <style>{`
        .contact { padding: 110px 0 140px; border-top: 1px solid #1c2438; }
        .contact-h2 { font-family: 'Times New Roman', serif; font-size: clamp(32px,4vw,48px); color: #e4e8f2; margin-bottom: 20px; }
        .contact-sub { font-size: 16px; color: #8a93ab; line-height: 1.75; max-width: 480px; margin-bottom: 48px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .contact-detail { padding: 18px 0; border-top: 1px solid #1c2438; display: block; }
        .contact-detail:last-child { border-bottom: 1px solid #1c2438; }
        .contact-detail-l { font-size: 12px; color: #4a5270; margin-bottom: 4px; }
        .contact-detail-v { font-size: 15px; color: #e4e8f2; }
        a.contact-detail:hover .contact-detail-v { color: #4d7fff; }
        .form-group { margin-bottom: 20px; }
        .form-label { display: block; font-size: 12px; color: #4a5270; margin-bottom: 8px; }
        .form-input {
          width: 100%; padding: 12px 0;
          background: none; border: none; border-bottom: 1px solid #1c2438;
          color: #e4e8f2; font-size: 15px; font-family: var(--sans);
          outline: none; transition: border-color 0.2s; resize: none;
        }
        .form-input:focus { border-color: #4d7fff; }
        .form-input::placeholder { color: #3a4060; }
        .form-submit {
          margin-top: 8px; padding: 13px 28px;
          background: #4d7fff; color: #fff; border: none;
          border-radius: 3px; font-size: 15px; font-weight: 600;
          transition: background 0.2s;
        }
        .form-submit:hover { background: #2f5fe0; }
        .success { padding: 40px 0; }
        .success-h { font-family: 'Times New Roman', serif; font-size: 24px; color: #e4e8f2; margin-bottom: 10px; }
        .success-p { font-size: 14px; color: #8a93ab; margin-bottom: 20px; }
        .success-reset { font-size: 13px; color: #4d7fff; font-weight: 600; background: none; border: none; }
        .success-reset:hover { text-decoration: underline; }
        @media(max-width:760px) { .contact-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
      <section className="contact" id="contact" ref={ref}>
        <div className="container">
          <div className="eyebrow reveal">Get in touch</div>
          <h2 className="contact-h2 reveal">Let's work together</h2>
          <p className="contact-sub reveal">
            I'm actively looking for junior developer roles in the UK.
            If you have a role or project, I'd love to hear from you.
          </p>

          <div className="contact-grid">
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <a href="mailto:rikesh.stha73@gmail.com" className="contact-detail">
                <div className="contact-detail-l">Email</div>
                <div className="contact-detail-v">rikesh.stha73@gmail.com</div>
              </a>
              <div className="contact-detail">
                <div className="contact-detail-l">Location</div>
                <div className="contact-detail-v">Wolverhampton, UK</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-l">Work eligibility</div>
                <div className="contact-detail-v">Eligible to work in the UK</div>
              </div>
              <a href="tel:+447352128974" className="contact-detail">
                <div className="contact-detail-l">Phone</div>
                <div className="contact-detail-v">+44 7352 128974</div>
              </a>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              {sent ? (
                <div className="success">
                  <div className="success-h">Message sent</div>
                  <p className="success-p">Thanks for reaching out — I'll reply within 24 hours.</p>
                  <button className="success-reset" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}>Send another →</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-group">
                    <label className="form-label">Your name</label>
                    <input className="form-input" placeholder="Alex Smith" value={form.name} onChange={sf('name')} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="alex@company.com" value={form.email} onChange={sf('email')} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-input" rows={3} placeholder="Tell me about the role..." value={form.message} onChange={sf('message')} required />
                  </div>
                  <button type="submit" className="form-submit">Send message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
