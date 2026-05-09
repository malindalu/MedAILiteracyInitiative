"use client";
import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfSlider({ src }: { src: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = src;
    a.download = src.split("/").pop() || "slides.pdf";
    a.click();
  };

  const btnStyle = (disabled = false) => ({
    padding: "0.4rem 0.9rem",
    borderRadius: "6px",
    border: "1px solid rgba(0,212,255,0.3)",
    background: "transparent",
    color: "var(--cyan)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    fontSize: "0.9rem",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        background: "var(--cream-light)",
        padding: "0.5rem",
        borderRadius: "8px",
      }}
    >
      <Document file={src} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={page} width={320} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1} style={btnStyle(page <= 1)}>←</button>
        <span style={{ fontSize: "0.85rem", color: "var(--gray)", minWidth: "50px", textAlign: "center" }}>
          {page} / {numPages}
        </span>
        <button onClick={() => setPage((p) => Math.min(numPages, p + 1))} disabled={page >= numPages} style={btnStyle(page >= numPages)}>→</button>

        <span style={{ color: "var(--gray)", opacity: 0.3 }}>|</span>

        <button onClick={handleDownload} title="Download PDF" style={btnStyle()}>↓</button>
      </div>
    </div>
  );
}