import Image from "next/image";
import { leadership } from "@/content";

export const metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #0a0f1e, #0e1628)" }}>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="overline">The Team</div>
          <h1 className="section-headline-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}>
            {leadership.headline}
          </h1>
          <p className="section-subheadline-light" style={{ marginTop: "1rem" }}>
            {leadership.subheadline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {leadership.members.map((m, i) => (
              <div
                key={m.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "240px 1fr",
                  gap: "3.5rem",
                  alignItems: "start",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                {/* Photo */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid rgba(0,212,255,0.25)",
                      background: "var(--cream-light)",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={m.imageSrc}
                      alt={m.imageAlt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {/* Fallback initials shown via CSS if image fails */}
                  </div>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.8rem",
                        color: "var(--dark-brown)",
                        fontWeight: 500,
                      }}
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>

                {/* Bio */}
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "var(--dark-brown)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {m.name}
                  </h2>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--dark-brown)",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {m.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--dark-green)",
                      marginBottom: "1.5rem",
                      fontStyle: "italic",
                    }}
                  >
                    {m.affiliation}
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--dark-brown)",
                      lineHeight: 1.85,
                    }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 700px) { section .container > div > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Join / Contribute CTA */}
      <section
        className="section section--alt"
        style={{ textAlign: "center" }}
      >
        <div className="container">
          <div className="overline-dark">Get Involved</div>
          <h2 className="section-headline" style={{ marginBottom: "1rem" }}>
            Interested in Contributing?
          </h2>
          <p style={{ color: "var(--dark-brown)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
            We are always looking for educators, researchers, community organizers, designers, and technologists who share our mission. If that's you, reach out.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us →
          </a>
        </div>
      </section>
    </>
  );
}
