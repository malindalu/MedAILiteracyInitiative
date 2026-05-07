"use client";

export default function ContactForm({ email }: { email: string }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        const name = fd.get("name");
        const subject = fd.get("subject");
        const message = fd.get("message");
        const body = `Name: ${name}\n\n${message}`;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(body)}`;
      }}
    >
      {[
        { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
        { id: "subject", label: "Subject", type: "text", placeholder: "Partnership inquiry" },
      ].map((field) => (
        <div key={field.id} style={{ marginBottom: "1.25rem" }}>
          <label
            htmlFor={field.id}
            style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--dark-brown)",
              marginBottom: "0.5rem",
            }}
          >
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required
            style={{
              width: "100%",
              background: "var(--cream)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              padding: "0.75rem 1rem",
              color: "var(--white)",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.15s",
              fontFamily: "var(--font-body)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--cyan)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
          />
        </div>
      ))}

      <div style={{ marginBottom: "1.5rem" }}>
        <label
          htmlFor="message"
          style={{
            display: "block",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--dark-brown)",
            marginBottom: "0.5rem",
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your organization and what you're looking for..."
          required
          style={{
            width: "100%",
            background: "var(--cream)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "4px",
            padding: "0.75rem 1rem",
            color: "var(--white)",
            fontSize: "0.9rem",
            outline: "none",
            resize: "vertical",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--cyan)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
        Send via Email →
      </button>
    </form>
  );
}
