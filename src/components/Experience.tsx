"use client";
import { data } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" style={{ borderBottom: "0.5px solid var(--border)" }}>
      <div className="section-hdr" style={{ display: "flex", alignItems: "baseline", gap: "1rem", padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em" }}>02</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg2)" }}>Experience</span>
      </div>
      <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {data.experience.map((exp, i) => (
          <div key={i} className="exp-item" style={{ padding: "2rem 2.5rem", borderRight: i%2===0 ? "0.5px solid var(--border)" : "none", borderBottom: "0.5px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.7rem", flexWrap: "wrap", gap: "6px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: exp.current ? "var(--accent2)" : "var(--fg3)", letterSpacing: "0.06em" }}>{exp.period}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "2px 7px", borderRadius: "2px", border: "0.5px solid var(--border)", color: exp.current?"var(--accent2)":"var(--fg3)", background: exp.current?"rgba(29,158,117,0.1)":"var(--bg2)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{exp.current?"Current":exp.type}</span>
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--fg)", letterSpacing: "-0.01em", marginBottom: "3px" }}>{exp.role}</h3>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg2)", marginBottom: "0.8rem" }}>
              {exp.company}<span style={{ color: "var(--fg3)", marginLeft: "8px" }}>— {exp.location}</span>
            </p>
            <p style={{ fontSize: "13px", color: "var(--fg2)", lineHeight: 1.6, marginBottom: "0.9rem" }}>{exp.note}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {exp.tags.map((tag) => <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "2px 6px", borderRadius: "2px", background: "var(--bg3)", border: "0.5px solid var(--border)", color: "var(--fg2)", letterSpacing: "0.04em" }}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
