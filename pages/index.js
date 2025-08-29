export default function Home() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <div className="logo-badge">★</div>
              <div>
                <div>GC ASTRA</div>
                <div style={{fontSize:12, color:'#9ca3af'}}>Invest in the Stars</div>
              </div>
            </div>
            <div style={{display:'none'}}></div>
            <a className="btn-outline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="grid">
            <div>
              <h1 style={{fontSize:42, lineHeight:1.1, margin:0, fontWeight:900}}>
                Smart Trading & Research<br/>
                <span style={{background:'linear-gradient(135deg,#fcd34d,#f59e0b)', WebkitBackgroundClip:'text', color:'transparent'}}>by GC ASTRA</span>
              </h1>
              <p className="muted" style={{marginTop:14, fontSize:18}}>
                VWAP + Order Flow playbook, disciplined execution, and mentoring for consistent growth.
              </p>
              <div style={{display:'flex', gap:12, marginTop:18}}>
                <a className="btn" href="#cta">Get started</a>
                <a className="btn-outline" href="#about">Learn more</a>
              </div>
              <ul className="muted" style={{marginTop:18, fontSize:14, lineHeight:1.6}}>
                <li>• Transparent risk rules</li>
                <li>• NinjaTrader 8 tooling</li>
                <li>• Education in Greek & English</li>
              </ul>
            </div>
            <div className="card" style={{display:'grid', placeItems:'center', minHeight:260}}>
              <div style={{textAlign:'center'}}>
                <div className="muted" style={{letterSpacing:2, textTransform:'uppercase'}}>GC ASTRA</div>
                <div style={{marginTop:8, fontSize:24, fontWeight:700}}>VWAP + EMA + Order Flow</div>
                <div className="muted" style={{marginTop:4}}>Scalping Playbook & Execution</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 style={{fontSize:28}}>About</h2>
          <p className="muted">
            GC ASTRA focuses on rule‑based intraday trading (ES/NQ). We combine multi‑timeframe context, 
            VWAP pullbacks, and order‑flow timing for measurable, repeatable decisions.
          </p>
        </section>

        <section id="cta" className="section card">
          <h3 style={{fontSize:22, marginTop:0}}>Ready to level up?</h3>
          <p className="muted">Leave your email and we'll reach out.</p>
          <form onSubmit={(e)=>e.preventDefault()} style={{display:'grid', gap:12, gridTemplateColumns:'1fr auto'}} id="contact">
            <input placeholder="you@example.com" required style={{borderRadius:12, padding:'12px 14px', background:'#0b0c0e', color:'#e5e7eb', border:'1px solid rgba(255,255,255,.12)'}}/>
            <button className="btn" type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="container" style={{display:'flex', justifyContent:'space-between'}}>
          <div>© {new Date().getFullYear()} GC ASTRA</div>
          <div>gcastra.com</div>
        </div>
      </footer>
    </div>
  );
}
