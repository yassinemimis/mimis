"use client";
import { useState, useEffect } from "react";
import { data } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty("--bg",        "#0C0C0B");
      root.style.setProperty("--bg2",       "#141413");
      root.style.setProperty("--bg3",       "#1C1C1A");
      root.style.setProperty("--border",    "rgba(255,255,255,0.08)");
      root.style.setProperty("--border-md", "rgba(255,255,255,0.13)");
      root.style.setProperty("--fg",        "#F0EDE6");
      root.style.setProperty("--fg2",       "#7A7870");
      root.style.setProperty("--fg3",       "#4A4845");
    } else {
      root.style.setProperty("--bg",        "#FAFAF8");
      root.style.setProperty("--bg2",       "#F2F0EB");
      root.style.setProperty("--bg3",       "#E8E5DE");
      root.style.setProperty("--border",    "rgba(0,0,0,0.08)");
      root.style.setProperty("--border-md", "rgba(0,0,0,0.15)");
      root.style.setProperty("--fg",        "#1A1917");
      root.style.setProperty("--fg2",       "#6B6860");
      root.style.setProperty("--fg3",       "#B0ADA6");
    }
  }, [dark]);

  const navBg = scrolled
    ? dark ? "rgba(12,12,11,0.92)" : "rgba(250,250,248,0.92)"
    : "transparent";

  return (
    <>
      <nav className="nav-wrap" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem 2.5rem",
        borderBottom: scrolled ? "0.5px solid var(--border)" : "0.5px solid transparent",
        background: navBg,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}>
       <a href="#" style={{ display: "flex", alignItems: "center" }}>
  {dark ? (
    /* Dark logo */
    <svg width="80" height="35" viewBox="0 0 160 70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="56" fontFamily="Georgia, 'Times New Roman', serif" fontSize="58" fontWeight="700" fill="#E8593C">M</text>
      <text x="46" y="56" fontFamily="Georgia, 'Times New Roman', serif" fontSize="58" fontWeight="300" fill="#F0EDE6">Y</text>
      <line x1="1" y1="64" x2="108" y2="64" stroke="#E8593C" strokeWidth="1.5"/>
    </svg>
  ) : (
    /* Light logo */
    <svg width="80" height="35" viewBox="0 0 160 70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="56" fontFamily="Georgia, 'Times New Roman', serif" fontSize="58" fontWeight="700" fill="#E8593C">M</text>
      <text x="46" y="56" fontFamily="Georgia, 'Times New Roman', serif" fontSize="58" fontWeight="300" fill="#1A1917">Y</text>
      <line x1="1" y1="64" x2="108" y2="64" stroke="#E8593C" strokeWidth="1.5"/>
    </svg>
  )}
</a>

        <div className="nav-links" style={{ display: "flex", gap: "2rem", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg2)" }}>
          {["Work", "Experience", "Skills", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{ transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg2)")}
            >{link}</a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {data.available && (
            <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent2)", letterSpacing: "0.06em" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent2)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
              Open to work
            </div>
          )}

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            title={dark ? "Switch to light" : "Switch to dark"}
            style={{
              width: "32px", height: "32px",
              borderRadius: "50%",
              border: "0.5px solid var(--border-md)",
              background: "var(--bg2)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-md)")}
          >
            {dark ? (
              /* Sun icon */
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--fg2)" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--fg2)" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-burger"
            style={{ display: "none", flexDirection: "column", gap: "5px", padding: "4px", background: "none", border: "none", cursor: "pointer" }}
          >
            {[0,1,2].map((i) => (
              <span key={i} style={{ display: "block", width: "20px", height: "1px", background: "var(--fg)", transition: "all 0.2s",
                transform: menuOpen ? (i===0?"rotate(45deg) translate(4px,4px)":i===2?"rotate(-45deg) translate(4px,-4px)":"scaleX(0)") : "none",
              }} />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: "56px", left: 0, right: 0, zIndex: 99,
          background: dark ? "rgba(12,12,11,0.97)" : "rgba(250,250,248,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "0.5px solid var(--border)", padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "1.5rem",
          fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          {["Work", "Experience", "Skills", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ color: "var(--fg2)" }}
            >{link}</a>
          ))}
          {data.available && (
            <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "var(--accent2)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent2)" }} />Open to work
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @media (max-width: 768px) { .nav-burger { display: flex !important; } }
      `}</style>
    </>
  );
}
