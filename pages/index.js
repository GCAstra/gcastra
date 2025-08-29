export default function Home() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: 14, height: 64, justifyContent: 'space-between' }}>
            {/* Left: Logo */}
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="GC Astra Logo" style={{ height: 70 }} />
            </div>

            {/* Right: Contact */}
            <a className="btn-outline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="container">
        {/* Hero */}
        <section className="hero">
          <div className="grid">
            {/* Left column */}
            <div>
              <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 900 }}>
                Smart Trading & Research<br />
                <span className="gold">by GC ASTRA</span>
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

            {/* Right column (Card) */}
            <div className="card card-premium" style={{ display: 'grid', placeItems: 'center', minHeight: 260 }}>
              <div style={{ textAlign: 'center' }}>
                {/* Χρυσό badge μόνο μέσα στο card */}
                <div className="gold-title" style={{ marginBottom: 12 }}>GC ASTRA</div>

                <div style={{ marginTop: 4, fontSize: 24, fontWeight: 700 }}>
                  Smart Investing & Research
                </div>

                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 14 }}>
                  <span className="pill">Markets</span>
                  <span className="pill">Strategy</span>
                  <span className="pill">Mentorship</span>
                </div>

                <div style={{ marginTop: 16 }}>
                  <a className="gold-link" href="#playbook">Learn the Playbook →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2 style={{ fontSize: 28 }}>About</h2>
          <p className="muted">
            GC ASTRA focuses on rule-based intraday trading. We combine multi-timeframe context,
            transparent execution, and order-flow timing for measurable, repeatable decisions.
          </p>
          <p className="muted" style={{ marginTop: 10 }}>
            Our mission is to blend discipline with innovation—providing a clear playbook and professional guidance
            so traders can grow with confidence.
          </p>
        </section>

        {/* CTA */}
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

      {/* Footer */}
      <footer>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>© {new Date().getFullYear()} GC ASTRA</div>
          <div>gcastra.com</div>
        </div>
      </footer>
    </div>
  );
}
