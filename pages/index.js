export default function Home() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src="/logo.png" alt="GC Astra Logo" style={{ height: 50 }} />
            </div>
            <div style={{ display: 'none' }}></div>
            <a className="btn-outline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="grid">
            <div>
              <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 900 }}>
                Smart Trading & Research<br />
                <span style={{
                  background: 'linear-gradient(135deg,#fcd34d,#f59e0b)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  by GC ASTRA
                </span>
              </h1>
              <p className="muted" style={{ marginTop: 14, fontSize: 18 }}>
                Disciplined execution, transparent strategies, and mentoring for consistent growth.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                <a className="btn" href="#cta">Get started</a>
                <a className="btn-outline" href="#about">Learn more</a>
              </div>
              <ul className="muted" style={{ marginTop: 18, fontSize: 14, lineHeight: 1.6 }}>
                <li>• Transparent risk rules</li>
                <li>• NinjaTrader 8 tooling</li>
                <li>• Education in Greek & English</li>
              </ul>
            </div>
            <div className="card" style={{ display: 'grid', placeItems: 'center', minHeight: 260 }}>
              <div style={{ textAlign: 'center' }}>
                <div className="muted gold-title">GC ASTRA</div>
                <div style={{ marginTop: 8, fontSize: 24, fontWeight: 700 }}>Smart Investing & Research</div>
                <div className="muted" style={{ marginTop: 8 }}>
                  <span className="tag">Markets</span>
                  <span className="tag">Strategy</span>
                  <span className="tag">Mentorship</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <a href="#about" className="link">Learn the Playbook →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 style={{ fontSize: 28 }}>About</h2>
          <p className="muted" style={{ marginBottom: 12 }}>
            At <strong>GC ASTRA</strong>, we believe trading success comes from structure, discipline, and clarity.
            Our approach is built on rule-based strategies and professional execution standards.
          </p>
          <p className="muted">
            We blend multi-timeframe analysis with order-flow insights and transparent execution—turning market
            complexity into confident, repeatable decisions and measurable results.
          </p>
        </section>

        <section id="cta" className="section card">
          <h3 style={{ fontSize: 22, marginTop: 0 }}>Ready to level up?</h3>
          <p className="muted">Leave your email and we'll reach out.</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr auto' }} id="contact">
            <input placeholder="you@example.com" required
              style={{
                borderRadius: 12,
                padding: '12px 14px',
                background: '#0b0c0e',
                color: '#e5e7eb',
                border: '1px solid rgba(255,255,255,.12)'
              }} />
            <button className="btn" type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>© {new Date().getFullYear()} GC ASTRA</div>
          <div>gcastra.com</div>
        </div>
      </footer>
    </div>
  );
}
