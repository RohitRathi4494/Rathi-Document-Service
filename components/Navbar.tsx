"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
      <Image
        src="/logo.png"
        alt="Rathi Document Services Logo"
        width={48}
        height={48}
        style={{ objectFit: "contain", flexShrink: 0 }}
        priority
      />
      <div>
        <span
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#1B3A6B",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
            display: "block",
          }}
        >
          Rathi Document
        </span>
        <span
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#1B3A6B",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
            display: "block",
          }}
        >
          Services
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 72;
      const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`navbar-glass${scrolled ? " scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "box-shadow 0.3s ease",
        }}
        role="banner"
      >
        <nav
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} aria-label="Rathi Document Services — Home">
          <Logo />
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  color: "#1B3A6B",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A84C")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#1B3A6B")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book-appointment"
              onClick={(e) => handleNavClick(e, "#book-appointment")}
              className="btn btn-gold"
              aria-label="Book an appointment"
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1B3A6B",
              display: "none",
              padding: "0.5rem",
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(15,37,72,0.5)",
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 280,
              height: "100%",
              background: "#ffffff",
              padding: "80px 2rem 2rem",
              boxShadow: "-4px 0 24px rgba(27,58,107,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    color: "#1B3A6B",
                    textDecoration: "none",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #E2DACE",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book-appointment"
                onClick={(e) => handleNavClick(e, "#book-appointment")}
                className="btn btn-gold"
                aria-label="Book an appointment"
                style={{ textAlign: "center", marginTop: "0.5rem" }}
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
