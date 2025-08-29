export default function Home() {
  return (
    <div>
      {/* ===== Header ===== */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              {/* Λογότυπο από /public/logo.png */}
              <img src="/logo.png" alt="GC Astra Logo" style={{ height: 56 }} />
            </div>
            <div style={{ display: 'none' }}></div>
            <a className="btn-outline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ===== Main ===== */}
      <main className="container">
        {/* Hero */}
        <section className="hero">
          <div className="grid">
            {/* Left column */}
            <div>
              <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 900 }}>
                Smart Trading & Research<br />
                <span
                  style={{
                    background: 'linear-gradient(135deg,#fcd34d,#f59e0b)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
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

            {/* Right column (Premium card) */}
            <div className="card" style={{ display: 'grid', placeItems: 'center', minHeight: 260 }}>
              <div style={{ textAlign: 'center' }}>
                {/* Premium GC ASTRA */}
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    background: 'linear-gradient(135deg,#fcd34d,#f59e0b)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    marginBottom: 10
                  }}
                >
                  GC ASTRA
                </div>

                {/* Κεντρικός τίτλος */}
                <div style={{ marginTop: 8, fontSize: 24, fontWeight: 700 }}>
                  Smart Investing & Research
                </div>

                {/* Tags με χρυσό περίγραμμα */}
                <div style={{ marginTop: 12, display: 'flex', gap: 10, justifyContent: 'center' }}>
                  {['Markets', 'Strategy', 'Mentorship'].map(tag => (
                    <span
                      key={tag}
                      style={{
                        border: '1px solid #fcd34d',
                        borderRadius: '20px',
                        padding: '4px 12px',
                        fontSize: 13,
                        color: '#e5e7eb'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#about"
                  style={{
                    display: 'inline-block',
                    marginTop: 16,
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#fcd34d',
                    textDecoration: 'none'
                  }}
                >
                  Learn the Playbook →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2 style={{ fontSize: 28 }}>About</h2>
          <p className="muted">
            GC ASTRA focuses on rule-based intraday trading.
            We combine multi-timeframe context, transparent execution,
            and order-flow timing for measurable, repeatable decisions.
          </p>
        </section>

        {/* CTA form */}
        <section id="cta" className="section card">
          <h3 style={{ fontSize: 22, marginTop: 0 }}>Ready to level up?</h3>
          <p className="muted">Leave your email and we'll reach out.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr auto' }}
            id="contact"
          >
            <input
              placeholder="you@example.com"
              required
              style={{
                borderRadius: 12,
                padding: '12px 14px',
                background: '#0b0c0e',
                color: '#e5e7eb',
                border: '1px solid rgba(255,255,255,.12)'
              }}
            />
            <button className="btn" type="submit">Send</button>
          </form>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>© {new Date().getFullYear()} GC ASTRA</div>
          <div>gcastra.com</div>
        </div>
      </footer>
    </div>
  );
}
