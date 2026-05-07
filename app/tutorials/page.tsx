import Link from "next/link";
import { tutorials } from "@/content";

export const metadata = { title: "Tutorials" };

const levelColor: Record<string, string> = {
  Beginner: "#22c55e",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

export default function TutorialsPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #0a0f1e, #0e1628)" }}>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="overline">Open Resources</div>
          <h1 className="section-headline-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}>
            {tutorials.headline}
          </h1>
          <p className="section-subheadline-light" style={{ marginTop: "1rem" }}>
            {tutorials.subheadline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {tutorials.items.map((t) => {
              const available = t.status === "available";
              return (
                <div
                  key={t.id}
                  className="card"
                  style={{
                    padding: "2rem",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "2rem",
                    alignItems: "center",
                    opacity: available ? 1 : 0.65,
                  }}
                >
                  <div>
                    {/* Meta row */}
                    <div
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          color: levelColor[t.level] || "var(--dark-brown)",
                          background: `${levelColor[t.level] || "var(--gray)"}18`,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px",
                        }}
                      >
                        {t.level}
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "var(--dark-brown)" }}>{t.duration}</span>
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.7rem",
                            color: "var(--dark-brown)",
                            background: "rgba(255,255,255,0.05)",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "4px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        color: "var(--black)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {t.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--dark-brown)", lineHeight: 1.7 }}>
                      {t.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div style={{ flexShrink: 0 }}>
                    {available ? (
                      <a href={t.href} className="btn btn-primary">
                        Open →
                      </a>
                    ) : (
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.75rem 1.5rem",
                          borderRadius: "4px",
                          fontSize: "0.82rem",
                          color: "var(--gray)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contribute note */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2rem",
              borderRadius: "8px",
              background: "rgba(0,212,255,0.05)",
              border: "1px solid rgba(0,212,255,0.15)",
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "2rem" }}>📚</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                Want to contribute a tutorial?
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--dark-brown)", lineHeight: 1.6 }}>
                We welcome contributions from educators, researchers, and practitioners who want to share their knowledge with our community.
              </p>
            </div>
            <a href="/contact" className="btn btn-outline" style={{ whiteSpace: "nowrap" }}>
              Get in Touch
            </a>
          </div>
        </div>
        <style>{`@media (max-width: 600px) { .card { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
