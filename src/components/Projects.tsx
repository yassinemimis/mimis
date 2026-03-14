"use client";
import { useState } from "react";
import { data } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Web", "Mobile", "Desktop"];
  const filtered = filter === "All" ? data.projects : data.projects.filter((p) => p.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="work" style={{ borderBottom: "0.5px solid var(--border)" }}>
      <div className="proj-header section-hdr" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em" }}>01</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg2)" }}>Selected Work</span>
        </div>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {types.map((t) => (
            <button key={t} onClick={() => setFilter(t)} style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "2px", border: "0.5px solid var(--border)", background: filter===t ? "var(--accent)" : "transparent", color: filter===t ? "#fff" : "var(--fg2)", cursor: "pointer", transition: "all 0.15s" }}>{t}</button>
          ))}
        </div>
      </div>
      <div>{filtered.map((p) => <ProjectRow key={p.id} project={p} />)}</div>
      <div className="proj-github" style={{ padding: "1.5rem 2.5rem", borderTop: "0.5px solid var(--border)", display: "flex", justifyContent: "flex-end" }}>
        <a href={data.github} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg2)", transition: "color 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color="var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color="var(--fg2)")}
        >View all on GitHub →</a>
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: (typeof data.projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="proj-row"
      style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", alignItems: "start", borderBottom: "0.5px solid var(--border)", background: hovered ? "var(--bg2)" : "transparent", transition: "background 0.12s", textDecoration: "none" }}
    >
      <div className="proj-num" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--fg3)", padding: "2rem 1rem 2rem 2.5rem", paddingTop: "2.1rem", lineHeight: 1, opacity: hovered?1:0.6 }}>{project.id}</div>
      <div className="proj-body" style={{ padding: "1.8rem 1.5rem 1.8rem 0" }}>
        <div style={{ fontSize: "18px", fontWeight: 600, color: "var(--fg)", marginBottom: "5px", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {project.title}
          {project.featured && <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "2px 7px", background: "var(--accent-dim)", border: "0.5px solid var(--accent)", borderRadius: "2px", color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Featured</span>}
        </div>
        <p style={{ fontSize: "13px", color: "var(--fg2)", lineHeight: 1.6, marginBottom: "0.9rem", maxWidth: "560px" }}>{project.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {project.tags.map((tag) => <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", padding: "3px 7px", border: "0.5px solid var(--border)", borderRadius: "2px", color: "var(--fg3)", background: "var(--bg)", letterSpacing: "0.04em" }}>{tag}</span>)}
        </div>
      </div>
      <div className="proj-meta" style={{ padding: "1.8rem 2.5rem 1.8rem 1rem", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", minWidth: "110px", height: "100%" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", background: "var(--bg3)", border: "0.5px solid var(--border)", borderRadius: "2px", color: "var(--fg2)", whiteSpace: "nowrap" }}>{project.type}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "var(--accent)", opacity: hovered?1:0, transform: hovered?"translateX(0)":"translateX(-6px)", transition: "all 0.15s" }}>↗</span>
      </div>
    </a>
  );
}
