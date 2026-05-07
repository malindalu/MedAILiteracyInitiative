import { collaborators } from "@/content";

export const metadata = { title: "Collaborators" };

const statusColors: Record<string, string> = {
  Partner: "var(--light-green)",
  "In Development": "var(--dark-yellow)",
};

export default function CollaboratorsPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #0a0f1e, #0e1628)" }}>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="overline">Partners</div>
          <h1 className="section-headline-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}>
            {collaborators.headline}
          </h1>
          <p className="section-subheadline-light" style={{ marginTop: "1rem" }}>
            {collaborators.subheadline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {collaborators.items.map((c) => (
              <div
                key={c.name}
                className="card"
                style={{
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                {/* Logo placeholder */}
                <div
                  style={{
                    height: "100px",
                    background: "var(--cream-mid)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.07)",
                    padding: "1rem",
                  }}
                >
                  {/* Replace with <Image src={c.logoSrc} ... /> when you have logos */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.85rem",
                      color: "var(--dark-green)",
                      textAlign: "center",
                      lineHeight: 1.4,
                    }}
                  >
                    {c.name}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--black)" }}>
                      {c.name}
                    </h2>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "100px",
                        border: `1px solid ${statusColors[c.status] || "var(--dark-green)"}40`,
                        color: statusColors[c.status] || "var(--dark-green)",
                        background: `${statusColors[c.status] || "var(--dark-green)"}10`,
                      }}
                    >
                      {c.status}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--dark-green)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                    {c.type}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--dark-green-light)", lineHeight: 1.75, marginBottom: "1rem" }}>
                    {c.description}
                  </p>
                  {c.website && (
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.82rem", color: "var(--cyan)", fontWeight: 500 }}
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div
            style={{
              marginTop: "4rem",
              background: "var(--cream-light)",
              border: "1px solid rgba(0,212,255,0.15)",
              borderRadius: "8px",
              padding: "3rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div>
              <div className="overline-dark">Work With Us</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", marginBottom: "0.5rem" }}>
                Interested in Partnering?
              </h3>
              <p style={{ color: "var(--dark-green)", fontSize: "0.95rem", maxWidth: "480px" }}>
                We collaborate with schools, nonprofits, healthcare institutions, and community organizations. If your mission aligns, let's talk.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
              Get in Touch →
            </a>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .card { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
