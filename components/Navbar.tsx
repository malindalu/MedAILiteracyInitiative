"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav } from "@/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(10,15,30,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--white)", lineHeight: 1 }}>
            MedAI
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--white)", lineHeight: 1 }}>
            Literacy Initiative
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="desktop-nav">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  padding: "0.4rem 0.85rem",
                  borderRadius: "4px",
                  color: active ? "var(--white)" : "var(--gray-light)",
                  background: active ? "rgba(0,212,255,0.08)" : "transparent",
                  transition: "all 0.15s ease",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "var(--white)",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--cream-mid)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "1rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
          className="mobile-nav"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "0.65rem 0",
                color: pathname === item.href ? "var(--cyan)" : "var(--white)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
