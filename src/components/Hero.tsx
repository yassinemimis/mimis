"use client";
import { data } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="hero-grid" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid var(--border)" }}>
      <div className="hero-left" style={{ borderRight: "0.5px solid var(--border)", padding: "8rem 3rem 4rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.5rem" }}>
            // {data.title}
          </p>
          <h1 style={{ fontSize: "clamp(36px,6vw,80px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", color: "var(--fg)", marginBottom: "2rem" }}>
            {data.name.first}<br />
            <span style={{ color: "var(--fg3)" }}>{data.name.last}</span><br />
            {data.name.family}
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--fg2)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: "400px" }}>
            {data.subtitle}<br />{data.bio}
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { label: "View Work →", href: "#work", accent: true },
            { label: "Contact Me", href: "#contact", accent: false },
            { label: "Download CV", href: data.cv, accent: false },
          ].map((btn) => (
            <a key={btn.label} href={btn.href}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "12px 20px", borderRadius: "2px", transition: "all 0.15s",
                background: btn.accent ? "var(--accent)" : "transparent",
                color: btn.accent ? "#fff" : "var(--fg2)",
                border: btn.accent ? "none" : "0.5px solid var(--border-md)",
              }}
              onMouseEnter={(e) => { if (!btn.accent) { e.currentTarget.style.background="var(--bg3)"; e.currentTarget.style.color="var(--fg)"; } else e.currentTarget.style.opacity="0.85"; }}
              onMouseLeave={(e) => { if (!btn.accent) { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="var(--fg2)"; } else e.currentTarget.style.opacity="1"; }}
            >{btn.label}</a>
          ))}
        </div>
      </div>

      <div className="hero-right" style={{ padding: "8rem 3rem 4rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "0.5px solid var(--border)", marginBottom: "2.5rem" }}>
          {data.stats.map((s) => (
            <div key={s.label} style={{ background: "var(--bg)", padding: "1.5rem" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "36px", fontWeight: 700, color: "var(--fg)", lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.02em" }}>
                {s.value.replace(/[+%]/g,"")}<span style={{ fontSize: "16px", color: "var(--accent)" }}>{s.value.match(/[+%]/)?.[0]??""}</span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg2)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--fg3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Core Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {data.stack.map((tech) => (
              <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: "10px", padding: "5px 10px", border: "0.5px solid var(--border-md)", borderRadius: "2px", color: "var(--fg2)", background: "var(--bg2)", letterSpacing: "0.04em" }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
