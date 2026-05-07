"use client";
import { useState } from "react";
import { gallery } from "@/content";

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="page-hero" style={{ background: "linear-gradient(135deg, #0a0f1e, #0e1628)" }}>
        <div className="container" style={{ paddingTop: "2rem" }}>
          <div className="overline">Gallery</div>
          <h1 className="section-headline-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}>
            {gallery.headline}
          </h1>
          <p className="section-subheadline-light" style={{ marginTop: "1rem" }}>
            {gallery.subheadline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {gallery.images.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 2rem",
                color: "var(--gray)",
                border: "1px dashed rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📸</div>
              <p>Photos will appear here as programs get underway.</p>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                Add images to <code style={{ color: "var(--cyan)" }}>/public/images/</code> and update{" "}
                <code style={{ color: "var(--cyan)" }}>content.js</code>.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {gallery.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                    aspectRatio: "4/3",
                    backgroundColor: "var(--cream-light)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {img.caption && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(transparent, rgba(10,15,30,0.9))",
                        padding: "1.5rem 1rem 0.75rem",
                        fontSize: "0.78rem",
                        color: "var(--gray-light)",
                        textAlign: "left",
                      }}
                    >
                      {img.caption}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "900px", width: "100%", position: "relative" }}>
            <img
              src={gallery.images[selected].src}
              alt={gallery.images[selected].alt}
              style={{ width: "100%", borderRadius: "8px", display: "block" }}
            />
            {gallery.images[selected].caption && (
              <p style={{ marginTop: "1rem", color: "var(--gray-light)", fontSize: "0.9rem", textAlign: "center" }}>
                {gallery.images[selected].caption}
              </p>
            )}
            {/* Prev / Next */}
            {selected > 0 && (
              <button
                onClick={() => setSelected(selected - 1)}
                style={{
                  position: "absolute",
                  left: "-3rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--white)",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              >
                ←
              </button>
            )}
            {selected < gallery.images.length - 1 && (
              <button
                onClick={() => setSelected(selected + 1)}
                style={{
                  position: "absolute",
                  right: "-3rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--white)",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              >
                →
              </button>
            )}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "-2.5rem",
                right: 0,
                background: "none",
                border: "none",
                color: "var(--gray)",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
