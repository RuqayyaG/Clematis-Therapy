"use client";

import Image from "next/image";

const links = ["About", "Services", "Contact", "Organisations"];

export default function Nav() {
  return (
    <header style={{ borderBottom: "1px solid #d8d0c3", padding: "1.25rem 0" }}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image src="/logo.png" alt="Clematis Therapy" width={140} height={40} style={{ height: "70px", width: "auto" }} priority />
          <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "2.0rem" }}>Clematis Therapy</span>
        </a>
        <nav style={{ display: "flex", gap: "2rem" }}>
          {links.map((item) => (
            <a key={item} href={"/" + item.toLowerCase()} style={{ fontSize: "0.9rem", color: "#262220" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#4b3f52")} onMouseLeave={(e) => (e.currentTarget.style.color = "#262220")}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}