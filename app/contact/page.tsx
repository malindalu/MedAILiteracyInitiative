import { contact, site } from "@/content";
import ContactForm from "./contact-form";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #0a0f1e, #0e1628)" }}>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="overline">Reach Out</div>
          <h1 className="section-headline-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}>
            {contact.headline}
          </h1>
          <p className="section-subheadline-light" style={{ marginTop: "1rem" }}>
            {contact.subheadline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            {/* Left: info */}
            <div>
              <div className="overline-dark" style={{ marginBottom: "1rem" }}>Email Us Directly</div>
              <a
                href={`mailto:${contact.email}`}
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  color: "var(--cyan)",
                  marginBottom: "3rem",
                  wordBreak: "break-all",
                }}
              >
                {contact.email}
              </a>

              <div className="overline-dark" style={{ marginBottom: "1rem" }}>Common Reasons to Reach Out</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {contact.reasons.map((reason) => (
                  <li
                    key={reason}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "var(--dark-brown)",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span style={{ color: "var(--cyan)", fontSize: "0.65rem" }}>◆</span>
                    {reason}
                  </li>
                ))}
              </ul>

              {site.socialLinks.linkedin && (
                <div style={{ marginTop: "2.5rem" }}>
                  <div className="overline-dark" style={{ marginBottom: "0.75rem" }}>Find Us Online</div>
                  <a
                    href={site.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", fontSize: "0.9rem", color: "var(--cyan)", fontWeight: 500 }}
                  >
                    LinkedIn →
                  </a>
                </div>
              )}
            </div>

            {/* Right: simple mailto form (no backend needed) */}
            <div>
              <div
                style={{
                  background: "var(--cream-light)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "2.5rem",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                  Send a Message
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--dark-brown)", marginBottom: "2rem" }}>
                  Fill this out and it will open in your email client — no account or sign-in required.
                </p>
                <ContactForm email={contact.email} />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { section .container > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
