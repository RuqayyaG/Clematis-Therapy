const services = [
  {
    name: "Adult Therapy",
    audience: "Individuals",
    description:
      "One-to-one sessions for adults navigating anxiety, depression, trauma, relationship difficulties, low self-worth, or simply a sense that something isn't right. We work at your pace, in a confidential space that is entirely yours.",
  },
  {
    name: "Children's Therapy",
    audience: "Individuals",
    description:
      "Children often struggle to put their feelings into words. Through age-appropriate psychodynamic work, I help children make sense of their emotional world; whether they're dealing with anxiety, behavioural changes, family transitions, or difficult experiences at school or home.",
  },
  {
    name: "Couples Therapy",
    audience: "Partners",
    description:
      "Relationships are rarely simple. Couples therapy offers a structured, neutral space to explore patterns of conflict, breakdown in communication, intimacy difficulties, or the impact of external pressures on your relationship. I work with couples of all backgrounds, at any stage of their relationship.",
  },
  {
    name: "Family Therapy",
    audience: "Families",
    description:
      "When tension within a family feels stuck or overwhelming, it can help to step back and look at the system as a whole. Family therapy brings everyone into the room - exploring dynamics, improving communication, and helping families find a healthier way forward together.",
  },
  {
    name: "Reflective Practice Groups",
    audience: "Organisational Support",
    description:
  "Working in social work, healthcare, or the charity sector often means absorbing other people's pain alongside your own workload. Organisational support offers staff and teams a confidential space to process difficult casework, address vicarious trauma, and build resilience against burnout - helping people sustain the work they care about, without losing themselves to it.",
  },
];

export default function Services() {
  return (
    <section className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem", maxWidth: "700px" }}>
      <p style={{ color: "#a9714c", marginBottom: "1rem" }}>Services</p>
      <h1 style={{ fontSize: "2.25rem" }}>Ways of working together</h1>
      <div style={{ marginTop: "3rem" }}>
        {services.map((service) => (
          <div key={service.name} style={{ borderTop: "1px solid #d8d0c3", padding: "2rem 0" }}>
            <p style={{ color: "#a9714c", fontSize: "1rem", marginBottom: "0.3rem" }}>{service.audience}</p>
            <h2 style={{ fontSize: "1.25rem" }}>{service.name}</h2>
            <p style={{ fontSize: "1rem", marginTop: "0.75rem", maxWidth: "600px" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}