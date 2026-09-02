const sectors = [
  "Children's social care",
  "Adoption and fostering",
  "Domestic abuse services",
  "Refugee and asylum support",
  "Hospice and end of life care",
  "Mental health charities",
  "Youth work and education",
];

const offerings = [
  "Regular ongoing group sessions (monthly or fortnightly recommended)",
  "One-off sessions for teams following a critical incident",
  "Individual follow-up sessions for staff who need additional support",
];

export default function ForOrganisations() {
  return (
    <section className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem", maxWidth: "700px" }}>
      <p style={{ color: "#a9714c", marginBottom: "1rem" }}>For Organisations</p>
      <h1 style={{ fontSize: "2.25rem" }}>Supporting the people who support others</h1>

      <p style={{ fontSize: "1.05rem", marginTop: "1.5rem", maxWidth: "580px" }}>
        Staff working in social care, adoption, charity, and the wider helping
        professions carry an enormous weight. The nature of the work; bearing
        witness to trauma, navigating complex cases, managing emotional labour
        day after day takes a toll that standard staff support rarely
        addresses adequately.
      </p>
      <p style={{ fontSize: "1.05rem", marginTop: "1.25rem", maxWidth: "580px" }}>
        I offer Reflective Practice Groups for organisations in these sectors:
        a structured, psychodynamically-informed space where staff can process
        the emotional impact of their work, build resilience, and feel
        genuinely supported.
      </p>

      <h2 style={{ fontSize: "1.4rem", marginTop: "3rem" }}>What are Reflective Practice Groups?</h2>
      <p style={{ fontSize: "1.05rem", marginTop: "1rem", maxWidth: "580px" }}>
        Reflective Practice is an established model of staff support widely
        used in social care and adoption settings. In a safe, confidential
        group environment, staff are supported to explore the emotional and
        psychological dimensions of their work, including the ways it may
        connect with their own experiences.
      </p>
      <p style={{ fontSize: "1.05rem", marginTop: "1.25rem", maxWidth: "580px" }}>
        This is not training. It is not a workshop. It is a professionally
        facilitated space to think, feel, and process - and the evidence for
        its impact on staff retention, wellbeing, and performance is strong.
      </p>

      <h2 style={{ fontSize: "1.4rem", marginTop: "3rem" }}>Particularly valuable for teams working in:</h2>
      <ul style={{ fontSize: "1rem", marginTop: "1rem", paddingLeft: "1.2rem" }}>
        {sectors.map((sector) => (
          <li key={sector} style={{ marginBottom: "0.5rem" }}>{sector}</li>
        ))}
      </ul>

      <h2 style={{ fontSize: "1.4rem", marginTop: "3rem" }}>What I offer:</h2>
      <ul style={{ fontSize: "1rem", marginTop: "1rem", paddingLeft: "1.2rem" }}>
        {offerings.map((offer) => (
          <li key={offer} style={{ marginBottom: "0.5rem" }}>{offer}</li>
        ))}
      </ul>
      
      <h2 style={{ fontSize: "1.4rem", marginTop: "3rem" }}>For enquiries:</h2>
      <p style={{ fontSize: "1.05rem", marginTop: "1rem", maxWidth: "580px" }}>
        ASDFGHJKL
      </p>
    </section>
  );
}