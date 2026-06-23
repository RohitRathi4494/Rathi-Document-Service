"use client";

import Image from "next/image";
import { MessageCircle, Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";

const WHATSAPP = "919910406641";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Appointment", href: "#book-appointment" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Rent Agreement",
  "Affidavit",
  "GPA / SPA",
  "Sale Deed",
  "Agreement to Sell",
  "Relinquishment Deed",
  "Will / Vasiyatnama",
  "Indemnity Bond",
  "NOC",
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1B3A6B",
        color: "rgba(250,247,242,0.85)",
        fontFamily: "var(--font-inter)",
      }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "4rem 1.5rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* Col 1 — About */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <Image
              src="/logo-rdp.png"
              alt="Rathi Document Point Logo"
              width={52}
              height={52}
              loading="lazy"
              sizes="52px"
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
            <div>
              <div style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1rem", color: "#F0D98A", lineHeight: 1.15 }}>
                Rathi Document Point
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.25rem", color: "rgba(250,247,242,0.75)", maxWidth: 300 }}>
            Gurugram&apos;s most trusted legal document service. We draft, prepare, and register all court, property, and personal documents with accuracy and care.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: 6,
              padding: "0.5rem 0.875rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#F0D98A",
            }}
          >
            ⭐ 15+ Years of Trusted Service in Gurugram
          </div>
        </div>

        {/* Col 2 — Quick Links & Services */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#C9A84C",
                marginBottom: "1.125rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(250,247,242,0.72)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0D98A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.72)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#C9A84C",
                marginBottom: "1.125rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(250,247,242,0.72)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0D98A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.72)")}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#C9A84C",
              marginBottom: "1.125rem",
            }}
          >
            Contact Us
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { Icon: MapPin, text: "Shed no. 6, Tehsil Wazirabad, Sector-57, Gurugram, Haryana - 122001", href: null },
              { Icon: Phone, text: "+91-9910406641", href: "tel:+919910406641" },
              { Icon: Phone, text: "+91-9911346641", href: "tel:+919911346641" },
              { Icon: Mail, text: "rathigurugram@gmail.com", href: "mailto:rathigurugram@gmail.com" },
              { Icon: Clock, text: "Mon–Sat: 09 AM – 6 PM | Sun: By appointment", href: null },
            ].map(({ Icon, text, href }, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <Icon size={15} color="#C9A84C" style={{ flexShrink: 0, marginTop: 2 }} />
                {href ? (
                  <a href={href} style={{ fontSize: "0.875rem", color: "rgba(250,247,242,0.75)", textDecoration: "none", lineHeight: 1.5 }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0D98A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.75)")}
                  >{text}</a>
                ) : (
                  <span style={{ fontSize: "0.875rem", color: "rgba(250,247,242,0.75)", lineHeight: 1.5 }}>{text}</span>
                )}
              </div>
            ))}

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%2C%20I%20need%20help%20with%20a%20legal%20document.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#25D366",
                color: "#ffffff",
                padding: "0.625rem 1.125rem",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
                marginTop: "0.25rem",
                transition: "opacity 0.2s ease",
                width: "fit-content",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <MessageCircle size={15} />
              WhatsApp Us Now
            </a>

            <a
              href="https://maps.google.com/?q=Gurugram,Haryana"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.8125rem",
                color: "rgba(250,247,242,0.55)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0D98A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,242,0.55)")}
            >
              <MapPin size={13} />
              View on Google Maps
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <p style={{ fontSize: "0.8125rem", color: "rgba(250,247,242,0.5)", margin: 0 }}>
          © 2024 Rathi Document Point. All rights reserved.
        </p>
        <p style={{ fontSize: "0.8125rem", color: "rgba(250,247,242,0.4)", margin: 0 }}>
          rathidocumentpoint.in
        </p>
      </div>


    </footer>
  );
}
