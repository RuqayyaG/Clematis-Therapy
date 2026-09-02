export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid #d8d0c3",
        marginTop: "6rem",
        padding: "2rem 0",
        fontSize: "0.85rem",
        color: "#665f57",
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <span>© {year} Tasneem Hussain</span>
        <span>MBACP Registered</span>
      </div>
    </footer>
  );
}