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
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <svg width="36" height="28" viewBox="0 0 114 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.6992 79.5981H43.3008L58 54.808L72.6992 79.5981Z" stroke="#D9D9D9" strokeWidth="2"/>
                <path d="M3.05811 22.6993C-15.7043 35.301 58 56.8481 58 56.8481L37.5 31.8481C37.5 31.8481 21.8206 10.0976 3.05811 22.6993Z" fill="#AACB6F"/>
                <path d="M110 21.8481C130.056 34.4498 61 55.3481 61 55.3481L75.5 33.8481C75.5 33.8481 89.9436 9.24644 110 21.8481Z" fill="#5F934A"/>
                <path d="M60 2.84808C78.439 16.2788 56.6771 52.3195 56.6771 52.3195L49.5 27.8482C49.5 27.8482 41.561 -10.5826 60 2.84808Z" fill="#79B84E"/>
                <circle cx="57.5" cy="57.3481" r="7.5" fill="#AFA18C"/>
                <circle cx="76.5" cy="81.3481" r="7.5" fill="#CEA1A1"/>
                <circle cx="40.5" cy="81.3481" r="7.5" fill="#9AABCD"/>
              </svg>
              <div style={{ fontFamily: "var(--font-display)", color: "var(--cream-light)", fontSize: "1.4rem" }}>
                MedAI Literacy Initiative
              </div>
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
