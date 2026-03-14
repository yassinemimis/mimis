"use client";
import { data } from "@/data/portfolio";

export default function Skills() {
  const categories = Object.entries(data.skills);
  return (
    <section id="skills" style={{ borderBottom: "0.5px solid var(--border)" }}>
      <div className="section-hdr" style={{ display: "flex", alignItems: "baseline", gap: "1rem", padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em" }}>03</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg2)" }}>Skills</span>
      </div>
      <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        {categories.map(([cat, items], i) => (
          <div key={cat} className="skills-col" style={{ padding: "2rem 2.5rem", borderRight: i < categories.length-1 ? "0.5px solid var(--border)" : "none" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>{cat}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {items.map((item) => (
                <li key={item} style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--fg2)", lineHeight: 1.4, paddingLeft: "12px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--fg3)" }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
