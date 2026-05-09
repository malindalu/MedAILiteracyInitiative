import { programs } from "@/content";
import PdfSlider from "@/components/PdfSlider";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #0a0f1e, #0e1628)" }}>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="overline">What We Do</div>
          <h1 className="section-headline-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", maxWidth: "700px" }}>
            {programs.headline}
          </h1>
          <p className="section-subheadline-light" style={{ marginTop: "1rem" }}>
            {programs.subheadline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {programs.items.map((p, i) => (
              <article key={p.id}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                  <span className={`badge badge--${p.status}`}>{p.statusLabel}</span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 320px",
                    gap: "4rem",
                    alignItems: "start",
                  }}
                >
                  {/* Content */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                        marginBottom: "0.4rem",
                        color: "var(--black)",
                      }}
                    >
                      {p.title}
                    </h2>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--cyan)",
                        fontWeight: 500,
                        marginBottom: "1.25rem",
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* <span>{p.host}</span> */}
                      {/* <span style={{ color: "var(--gray)" }}>·</span> */}
                      <span>{p.audience}</span>
                      <span style={{ color: "var(--gray)" }}>·</span>
                      <span style={{ color: "var(--dark-green)" }}>{p.duration}</span>
                    </div>
                    <p style={{ fontSize: "1rem", color: "var(--dark-brown)", lineHeight: 1.8, marginBottom: "2rem" }}>
                      {p.description}
                    </p>

                    {/* Topics */}
                    <div>
                      <div className="overline-dark" style={{ marginBottom: "0.75rem" }}>Topics Covered</div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {p.topics.map((topic) => (
                          <li
                            key={topic}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.75rem",
                              fontSize: "0.9rem",
                              color: "var(--dark-brown)",
                            }}
                          >
                            <span style={{ color: "var(--cyan)", fontSize: "0.7rem" }}>◆</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Embed */}
                  {/* {p.embed?.type === "pdf" && (
                    <div style={{ marginTop: "2.5rem" }}>
                      <div className="overline-dark" style={{ marginBottom: "0.75rem" }}>{p.embed.label}</div>
                      <iframe
                        src={p.embed.src}
                        width="100%"
                        height="600px"
                        style={{ border: "1px solid rgba(0,212,255,0.2)", borderRadius: "8px" }}
                      />
                    </div>
                  )} */}

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                  {/* Image card */}
                  <div
                    className="card"
                    style={{
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      background: "var(--cream-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* Replace with <Image> once you have real photos */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, var(--cream-light), #0a1f3a)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "0.5rem",
                        padding: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "2.5rem" }}>
                        {i === 0 ? "🎓" : i === 1 ? "🔬" : "🤝"}
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--gray-light)" }}>
                        {p.host}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--gray)", marginTop: "0.25rem" }}>
                        Photo coming soon
                      </div>
                    </div>
                    
                  </div>
                       {/* {p.embed?.type === "pdf" && (
                    <div style={{ marginTop: "2.5rem" }}>
                      <div className="overline-dark" style={{ marginBottom: "0.75rem" }}>{p.embed.label}</div>
                      <iframe
                        src={p.embed.src}
                        width="100%"
                        height="600px"
                        style={{ border: "1px solid rgba(0,212,255,0.2)", borderRadius: "8px" }}
                      />
                    </div>
                  )} */}
                  {/* PDF Slider — only if embed exists */}
                  {p.embed?.type === "pdf" && (
                    <div className="card" style={{ padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div className="overline-dark" style={{ marginBottom: "0.75rem", alignSelf: "flex-start" }}>
                        {p.embed.label}
                      </div>
                      <PdfSlider src={p.embed.src} />
                    </div>
                  )}
                  </div>
                </div>

                {i < programs.items.length - 1 && <hr className="hr" style={{ marginTop: "5rem" }} />}
              </article>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { article > div { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
