import type { ReactNode } from "react";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tasneem Hussain | Psychodynamic Therapy",
  description: "Psychodynamic therapy for individuals, couples, families, and organisations.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}