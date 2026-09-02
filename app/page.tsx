export default function Home() {
  return (
    <section
      className="container"
      style={{ paddingTop: "5rem", paddingBottom: "5rem", maxWidth: "700px" }}
    >
      <p style={{ color: "#a9714c", marginBottom: "1rem" }}>Psychodynamic Therapy</p>
      <h1 style={{ fontSize: "2.75rem" }}>
        A space to understand what shapes you, not just manage what troubles you.
      </h1>
      <p style={{ fontSize: "1.25rem", marginTop: "1.5rem", maxWidth: "580px" }}>
        I work with individuals, couples, and families, as well as staff teams in
        social work and charity organisations facing the emotional weight of their roles.
      </p>
      <a href="/booking" style={{ display: "inline-block", marginTop: "2rem", padding: "0.8rem 1.6rem", background: "#4b3f52", color: "#f7f4ee", borderRadius: "2px" }}>
        Book a consultation
      </a>
    </section>
  );
}