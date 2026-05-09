"use client";
import Link from "next/link";
import Image from "next/image";
import { home, programs, leadership, tutorials } from "@/content";

export default function HomePage() {
  const featured = programs.items
  .filter((p) => home.featuredPrograms.includes(p.id))
  .sort((a, b) => rankItem(a.status, a.date, "program") - rankItem(b.status, b.date, "program"));

  type WorkItem =
  | (typeof programs.items[0] & { kind: "program" })
  | (typeof tutorials.items[0] & { kind: "tutorial" });

  const workItems: WorkItem[] = [
    ...featured.map((p) => ({ ...p, kind: "program" as const })),
    ...tutorials.items.map((t) => ({ ...t, kind: "tutorial" as const })),
  ].sort((a, b) => rankItem(a.status, a.date, a.kind) - rankItem(b.status, b.date, b.kind))
  .slice(0, 6);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(125deg, #3c425b 0%, #b08b80 60%, #ffe4de 100%)",
        }}
      >
        {/* Geometric accent */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 0, 0, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "60px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, padding: "8rem 2rem 6rem" }}>
          <div style={{ maxWidth: "760px" }}>
            <div className="overline animate-fade-up">Med-AI Literacy Initiative</div>
            <h1
              className="animate-fade-up delay-1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                lineHeight: 1.08,
                marginBottom: "1.75rem",
                color: "var(--white)",
                whiteSpace: "pre-line",
              }}
            >
              {home.hero.headline}
            </h1>
            <p
              className="animate-fade-up delay-2"
              style={{
                fontSize: "1.2rem",
                color: "var(--gray-light)",
                maxWidth: "580px",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              {home.hero.subheadline}
            </p>
            <div className="animate-fade-up delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href={home.hero.cta.href} className="btn btn-primary">
                {home.hero.cta.label} →
              </Link>
              <Link href={home.hero.ctaSecondary.href} className="btn btn-outline">
                {home.hero.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Cyan bottom border */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
          }}
        />
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      {/* <section style={{ background: "var(--cream-light)", padding: "3rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {home.stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    color: "var(--dark-green)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--dark-green)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 600px) { section .container > div { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
      </section> */}

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="overline-dark">Our Mission</div>
              <h2 className="section-headline" style={{ marginBottom: "1.5rem" }}>
                Why AI Literacy in Medicine is Urgent
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--dark-brown)", lineHeight: 1.8 }}>
                {home.missionStatement}
              </p>
              <Link href="/about" style={{ display: "inline-block", marginTop: "2rem", color: "var(--cyan)", fontSize: "0.9rem", fontWeight: 500 }}>
                Read more about our approach →
              </Link>
            </div>
            <div
              style={{
                borderLeft: "3px solid var(--cyan)",
                paddingLeft: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {[
                { icon: "📑", title: "Tailored to Communities", body: "From high schoolers exploring career options to community members trying unfamiliar technologies — literacy looks different for every audience." },
                // { icon: "🏥", title: "Institutions", body: "We partner with schools, cultural organizations, and academic programs to embed AI literacy where it's needed most." },
                { icon: "🔭", title: "Forward Thinkers", body: "Our programs don't just teach what AI does today — they train the critical frameworks needed to shape what it does tomorrow." },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>{item.title}</span>
                  </div>
                  <p style={{ fontSize: "1.1rem", color: "var(--dark-brown)", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { section .container > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── Our Work ──────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="overline-dark">Our Work</div>
              <h2 className="section-headline">Programs & Resources</h2>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/programs" className="btn btn-outline">All Programs</Link>
              <Link href="/tutorials" className="btn btn-outline">All Tutorials</Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>

            {/* Program cards */}
            {workItems.map((item) =>
                item.kind === "program" ? (
                  <div key={item.id} className="card" style={{ padding: "1.75rem" }}>
                    <span className={`badge badge--${item.status}`} style={{ marginBottom: "1rem" }}>
                      {item.status === "completed"
                        ? `Program Completed · ${item.statusLabel}`
                        : `Program ${item.statusLabel}`}
                    </span>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--cyan)", marginBottom: "0.75rem", fontWeight: 500 }}>
                      {item.host} · {item.audience}
                    </div>
                    <p style={{ fontSize: "1.0rem", color: "var(--dark-brown)", lineHeight: 1.7 }}>{item.description.slice(0, 160)}…</p>
                    <Link href="/programs" style={{ display: "inline-block", marginTop: "1.25rem", fontSize: "0.9rem", color: "var(--cyan)", fontWeight: 500 }}>
                      Learn more →
                    </Link>
                  </div>
                ) : (
                  <div key={item.id} className="card" style={{ padding: "1.75rem" }}>
                    <span className={`badge badge--${item.status === "available" ? "completed" : "upcoming"}`} style={{ marginBottom: "1rem" }}>
                      {item.status === "available"
                        ? `Tutorial Published · ${item.statusLabel}`
                        : `Tutorial Coming Soon · ${item.level}`}
                    </span>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--cyan)", marginBottom: "0.75rem", fontWeight: 500 }}>{item.duration} · {item.level}</div>
                    <p style={{ fontSize: "1.0rem", color: "var(--dark-brown)", lineHeight: 1.7 }}>{item.description.slice(0, 160)}…</p>
                    <Link href={item.href} style={{ display: "inline-block", marginTop: "1.25rem", fontSize: "0.9rem", color: "var(--cyan)", fontWeight: 500 }}>
                      {item.status === "available" ? "Read tutorial →" : "Coming soon"}
                    </Link>
                  </div>
                )
              )}

          </div>
        </div>
        <style>{`@media (max-width: 900px) { .our-work-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── Leadership teaser ─────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="overline-dark">Leadership</div>
          <h2 className="section-headline" style={{ marginBottom: "0.75rem" }}>Founded by Researchers</h2>
          <p className="section-subheadline" style={{ margin: "0 auto 3rem" }}>
            With diverse expertise from Yale, MIT, Wellesley, and Mass General Brigham.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {leadership.members.map((m) => (
              <div
                key={m.name}
                className="card"
                style={{ padding: "2rem", textAlign: "center", width: "260px" }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "var(--cream-mid)",
                    border: "2px solid rgba(0,212,255,0.3)",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={m.imageSrc}
                    alt={m.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginBottom: "0.25rem" }}>{m.name}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--cyan)", fontWeight: 500 }}>{m.title}</div>
              </div>
            ))}
          </div>
          <Link href="/leadership" style={{ display: "inline-block", marginTop: "2.5rem" }} className="btn btn-outline">
            Meet the Team
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--cream-light), #dddcc9)",
          borderTop: "1px solid rgba(0,212,255,0.15)",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              marginBottom: "1rem",
              color: "var(--dark-brown)",
            }}
          >
            Bring a Program to Your Community
          </h2>
          <p style={{ color: "var(--dark-brown)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
            We work with schools, community organizations, and institutions of all sizes. Reach out to start the conversation.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}

function rankItem(status: string, date: string, type: "program" | "tutorial") {
  const isComplete = status === "completed" || status === "available";
  const typePriority = type === "program" ? 0 : 1; // program before tutorial within same tier
  const time = new Date(date).getTime();

  if (isComplete) {
    // Tier 0: completed — sorted by date desc, program before tutorial on same date
    return typePriority * 1e9 - time;
  } else {
    // Tier 1: in-progress/coming-soon — programs first, then tutorials, each by date desc
    return 1e15 + typePriority * 1e12 - time;
  }
}