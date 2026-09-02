export default function Contact() {
  return (
    <section className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem", maxWidth: "700px" }}>
      <p style={{ color: "#a9714c", marginBottom: "1rem" }}>Contact</p>
      <h1 style={{ fontSize: "2.25rem" }}>Get in touch</h1>
      <p style={{ fontSize: "1.05rem", marginTop: "1.5rem", maxWidth: "580px" }}>
Taking the first step towards therapy can feel daunting.
I offer a free 20-minute introductory call so we can get a sense of whether we're a good fit, with no obligation to proceed.      </p>
      <div style={{ marginTop: "2.5rem", borderTop: "1px solid #d8d0c3", paddingTop: "2rem" }}>
        <p style={{ fontSize: "0.85rem", color: "#665f57", marginBottom: "0.3rem" }}>Email</p>
        <a href="mailto:TH@dgmail.com" style={{ fontSize: "1.1rem", color: "#4b3f52" }}>TH@dgmail.com</a>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <p style={{ fontSize: "0.85rem", color: "#665f57", marginBottom: "0.3rem" }}>Location</p>
        <p style={{ fontSize: "1.1rem" }}>In-person and online sessions available</p>
      </div>
    </section>
  );
}