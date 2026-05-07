"use client";
import Link from "next/link";
import { site, nav } from "@/content";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy-mid)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "4rem 0 2rem",
      }}
    >
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", color: "var(--cream-light)", fontSize: "1.4rem", marginBottom: "0.75rem" }}>
              MedAI Literacy Initiative
            </div>
            <p style={{ color: "var(--gray-light)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "280px" }}>
              {site.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="overline" style={{ marginBottom: "1.25rem" }}>Pages</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--gray-light)",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-light)")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="overline" style={{ marginBottom: "1.25rem" }}>Contact</div>
            <a
              href={`mailto:${site.email}`}
              style={{ fontSize: "0.875rem", color: "var(--gray-light)", display: "block", marginBottom: "1.5rem" }}
            >
              {site.email}
            </a>
            {site.socialLinks.linkedin && (
              <a
                href={site.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.8rem", color: "var(--gray-light)" }}
              >
                LinkedIn →
              </a>
            )}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "var(--gray)" }}>
            © {new Date().getFullYear()} MedAI Literacy Initiative. All rights reserved.
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--gray)" }}>
            Built for community. Grounded in research.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
