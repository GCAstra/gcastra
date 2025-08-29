export default function Home() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <a className="logo" href="#">
              <img
                src="/logo.png"
                alt="GC Astra Logo"
                style={{ height: 56, filter: 'drop-shadow(0 0 6px rgba(255, 204, 102, .28))' }}
              />
            </a>

            <div style={{ flex: 1 }} />

            <a className="btn-outline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="grid">
            {/* Left */}
            <div>
              <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0, fontWeight: 900 }}>
                Smart Trading & Research<br />
                <span
                  className="gold"
                  style={{
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  by GC ASTRA
                </span>
              </h1>

              <p className="muted" style={{ marginTop: 16, fontSize: 18 }}>
                Disciplined execution, transparent strategies, and mentoring for consistent growth.
              </p>

              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                <a className="btn" href="#cta">Get started</a>
                <a className="btn-outline" href="#about">Learn more</a>
              </div>

              <ul className="muted" style={{ marginTop: 18, fontSize: 14, lineHeight: 1.65 }}>
                <li>• Transparent risk rules</li>
                <li>• NinjaTrader 8 tooling</li>
                <li>• Education in Greek & English</li>
              </ul>
            </div>

            {/* Right card */}
            <div className="card card-premium" style={{ display: 'grid', placeItems: 'center', minHeight: 280 }}>
              <div style={{ textAlign: 'center' }}>
                <div className="muted gold-glow" style={{ letterSpacing: 2.5, textTransform: 'uppercase' }}>
                  <span className="gold">GC ASTRA</span>
                </div>

                <div style={{ marginTop: 10, fontSize: 24, fontWeight: 800 }}>
                  Smart Investing & Research
                </div>

                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 14 }}>
                  <span className="pill">Markets</span>
                  <span className="pill">Strategy</span>
                  <span className="pill">Mentorship</span>
                </div>

                <a href="#playbook" className="gold-link" style={{ display: 'inline-block', marginTop: 18 }}>
                  Learn the Playbook →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 style={{ fontSize: 28, marginBottom: 10 }}>About</h2>
          <p className="muted" style={{ fontSize: 16 }}>
            GC ASTRA focuses on rule-based intraday trading. We combine multi-timeframe context,
            transparent execution, and order-flow timing for measurable, repeatable decisions.
          </p>
          <p className="muted" style={{ fontSize: 16, marginTop: 8 }}>
            Our mission is to blend discipline with innovation—providing a clear playbook and
            professional guidance so traders can grow with confidence.
          </p>
        </section>

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

      <footer>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>© {new Date().getFullYear()} GC ASTRA</div>
          <div>gcastra.com</div>
        </div>
      </footer>
    </div>
  );
}
