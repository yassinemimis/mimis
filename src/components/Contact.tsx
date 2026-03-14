"use client";
import { data } from "@/data/portfolio";

export default function Contact() {
  const links = [
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    { label: "GitHub", value: "@yassinemimis", href: data.github },
    { label: "LinkedIn", value: "Mohammed Yacine", href: data.linkedin },
    { label: "WhatsApp", value: "+213 799 23 76 97", href: data.whatsapp },
  ];
  return (
    <section id="contact">
      <div className="section-hdr" style={{ display: "flex", alignItems: "baseline", gap: "1rem", padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em" }}>04</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg2)" }}>Contact</span>
      </div>
      <div className="contact-inner contact-grid" style={{ padding: "4rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--fg)", marginBottom: "1.5rem" }}>
            Got a<br /><span style={{ color: "var(--accent)" }}>project?</span><br />Let's talk.
          </h2>
          <a href={`mailto:${data.email}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 24px", background: "var(--accent)", color: "#fff", borderRadius: "2px", transition: "opacity 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity="0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity="1")}
          >Send Message →</a>
        </div>
        <div className="contact-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "0.5px solid var(--border)" }}>
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
              style={{ background: "var(--bg)", padding: "1.2rem 1.4rem", display: "flex", flexDirection: "column", gap: "4px", transition: "background 0.12s", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.background="var(--bg2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background="var(--bg)")}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--fg3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{link.label}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", letterSpacing: "0.02em" }}>{link.value}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bar" style={{ padding: "1.2rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg3)", letterSpacing: "0.04em" }}>© 2026 KHERBOUCHE Mohammed Yacine</span>
        <div style={{ display: "flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent2)", letterSpacing: "0.06em" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent2)", display: "inline-block" }} />
          {data.location}
        </div>
      </div>
    </section>
  );
}
