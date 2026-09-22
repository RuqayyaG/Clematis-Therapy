"use client";

import { useState } from "react";
import Image from "next/image";

const links = ["About", "Services", "Contact", "Organisations"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid #d8d0c3", padding: "1.25rem 0" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image src="/logo.png" alt="Clematis Therapy" width={140} height={60} style={{ height: "70px", width: "auto" }} priority />
          <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "1.5rem" }}>Clematis Therapy</span>
        </a>

        <nav className="desktop-nav">
          {links.map((item) => (
            <a key={item} href={"/" + item.toLowerCase()} style={{ fontSize: "0.9rem", color: "#262220" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#4b3f52")} onMouseLeave={(e) => (e.currentTarget.style.color = "#262220")}>
              {item}
            </a>
          ))}
        </nav>

        <button className="hamburger-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span style={{ display: "block", width: "24px", height: "2px", background: "#262220", margin: "5px 0" }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", background: "#262220", margin: "5px 0" }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", background: "#262220", margin: "5px 0" }}></span>
        </button>

        <nav className={open ? "mobile-menu open" : "mobile-menu"}>
          {links.map((item) => (
            <a key={item} href={"/" + item.toLowerCase()} style={{ fontSize: "1rem", color: "#262220" }} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}