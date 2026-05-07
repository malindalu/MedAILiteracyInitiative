import { about } from "@/content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #0a0f1e, #0e1628)" }}>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="overline">About Us</div>
          <h1 className="section-headline-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", maxWidth: "700px" }}>
            {about.headline}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              {about.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "1.05rem",
                    color: i === 0 ? "var(--black)" : "var(--dark-brown)",
                    lineHeight: 1.85,
                    marginBottom: "1.5rem",
                    fontWeight: i === 0 ? 400 : 300,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Visual quote / pull quote */}
            <div>
              <div
                style={{
                  background: "var(--cream-light)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  borderLeft: "4px solid var(--cyan)",
                  borderRadius: "0 8px 8px 0",
                  padding: "2.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--black)", lineHeight: 1.5, fontStyle: "italic" }}>
                  "Understanding AI should not be limited to engineers and researchers."
                </p>
              </div>
              <div
                style={{
                  background: "var(--cream-light)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "2rem",
                }}
              >
                <div className="overline-dark" style={{ marginBottom: "1rem" }}>Who We Serve</div>
                {[
                  { group: "High School Students", detail: "Technical depth, research skills, portfolio projects" },
                  { group: "Community Members", detail: "Practical AI literacy, safety, everyday use" },
                  { group: "Educators & Orgs", detail: "Curriculum partnerships and institutional programs" },
                ].map((item) => (
                  <div
                    key={item.group}
                    style={{
                      padding: "0.875rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.2rem",
                    }}
                  >
                    <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)" }}>{item.group}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--dark-brown)" }}>{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { section .container > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <div className="overline-dark">Our Values</div>
          <h2 className="section-headline" style={{ marginBottom: "3rem" }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {about.values.map((v) => (
              <div
                key={v.title}
                className="card"
                style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
              >
                <span style={{ fontSize: "2rem", flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                    {v.title}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--dark-brown)", lineHeight: 1.7 }}>
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 600px) { section .container > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
