"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xkjnzbyb";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "0.7rem",
    marginTop: "0.4rem",
    border: "1px solid #d8d0c3",
    borderRadius: "2px",
    background: "#f7f4ee",
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: "1rem",
  };

  return (
    <section className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem", maxWidth: "700px" }}>
      <p style={{ color: "#a9714c", marginBottom: "1rem" }}>Contact</p>
      <h1 style={{ fontSize: "2.25rem" }}>Request a free consultation</h1>
      <p style={{ fontSize: "1.05rem", marginTop: "1.5rem", maxWidth: "580px" }}>
        Fill in the form below and I'll get back to you within two working days
        to arrange a time for a free 15 minute call.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: "2.5rem" }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#665f57" }}>Name</label>
          <input type="text" name="name" required style={inputStyle} />
        </div>

        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#665f57" }}>Your email</label>
          <input type="email" name="email" required style={inputStyle} />
        </div>
         <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#665f57" }}>Your phone number</label>
          <input type="phone number" name="phone number" required style={inputStyle} />
        </div>

        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#665f57" }}>Which service are you interested in?</label>
          <select name="service" required style={inputStyle}>
            <option value="">Please select</option>
            <option value="Individual Therapy">Individual Therapy</option>
            <option value="Couples Therapy">Couples Therapy</option>
            <option value="Family Therapy">Family Therapy</option>
            <option value="Organisational Support">Organisational Support</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#665f57" }}>Preferred contact method</label>
          <select name="contactMethod" required style={inputStyle}>
            <option value="">Please select</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
        </div>

        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#665f57" }}>What would you like to discuss?</label>
          <textarea name="message" required rows={6} style={inputStyle} />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            padding: "0.8rem 1.6rem",
            background: "#4b3f52",
            color: "#f7f4ee",
            border: "none",
            borderRadius: "2px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {status === "sending" ? "Sending..." : "Send request"}
        </button>
        {status === "sent" && (
          <p style={{ marginTop: "1rem", color: "#4b3f52" }}>
            Thank you — your request has been sent. I'll be in touch within two working days.
          </p>
        )}
        {status === "error" && (
          <p style={{ marginTop: "1rem", color: "#a9714c" }}>
            Something went wrong sending your request. Please try again in a moment.
          </p>
        )}
      </form>
    </section>
  );
}