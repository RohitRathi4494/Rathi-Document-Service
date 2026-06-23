"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Map } from "lucide-react";

const WHATSAPP = "919910406641";
const PHONE1 = "+91-9910406641";
const PHONE2 = "+91-9911346641";
const ADDRESS = "Shed no. 6, Tehsil Wazirabad, Sector-57, Gurugram, Haryana - 122001";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    items: [
      { text: ADDRESS, href: null }
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    items: [
      { text: PHONE1, href: `tel:+919910406641` },
      { text: PHONE2, href: `tel:+919911346641` }
    ],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    items: [
      { text: PHONE1, href: `https://wa.me/${WHATSAPP}` }
    ],
  },
  {
    icon: Mail,
    label: "Email",
    items: [
      { text: "rathigurugram@gmail.com", href: "mailto:rathigurugram@gmail.com" }
    ],
  },
  {
    icon: Clock,
    label: "Working Hours",
    items: [
      { text: "Monday – Saturday: 09:00 AM – 06:00 PM\nSunday: By appointment only", href: null }
    ],
  },
];

function scrollToBooking() {
  const el = document.querySelector("#book-appointment");
  if (el) {
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "#ffffff",
        padding: "6rem 1.5rem 0",
      }}
      aria-labelledby="contact-heading"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow">Get In Touch</span>
          <h2
            id="contact-heading"
            className="section-heading"
            style={{ marginBottom: "1rem" }}
          >
            Contact & Location
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Visit us or reach out — we&apos;re here Monday through Saturday.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="contact-grid"
        >
          {/* Left — Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: "1.375rem",
                color: "#1B3A6B",
                marginBottom: "2rem",
              }}
            >
              Contact Information
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {contactDetails.map(({ icon: Icon, label, items }) => (
                <div
                  key={label}
                  style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #FAF7F2, #F0EAE0)",
                      border: "1px solid #E2DACE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#C9A84C" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#5A5A7A",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      {items.map((item, index) =>
                        item.href ? (
                          <a
                            key={index}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontSize: "0.9375rem",
                              fontWeight: 500,
                              color: "#1B3A6B",
                              textDecoration: "none",
                              whiteSpace: "pre-line",
                              display: "block",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1B3A6B")}
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span
                            key={index}
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontSize: "0.9375rem",
                              fontWeight: 500,
                              color: "#1A1A2E",
                              whiteSpace: "pre-line",
                              display: "block",
                            }}
                          >
                            {item.text}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20document%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="Open WhatsApp chat"
              style={{
                marginTop: "2rem",
                background: "#25D366",
                color: "#ffffff",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <MessageCircle size={18} />
              Open WhatsApp
            </a>
          </motion.div>

          {/* Right — Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: "#F0EAE0",
              borderRadius: 16,
              border: "2px solid #E2DACE",
              overflow: "hidden",
              minHeight: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Google Maps embed placeholder — replace src with actual embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112167.54530780617!2d77.02665!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="380"
              className="contact-map-iframe"
              style={{ border: 0, display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rathi Document Point location in Gurugram"
            />

            {/* Map CTA overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
              }}
            >
              <a
                href="https://maps.google.com/?q=Gurugram,Haryana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                aria-label="Open in Google Maps"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  color: "#1B3A6B",
                  border: "1px solid #E2DACE",
                  fontSize: "0.8125rem",
                  padding: "0.5rem 1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                <Map size={14} />
                Open in Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA strip */}
      <div
        style={{
          background: "#1B3A6B",
          padding: "3.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.375rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "1.75rem",
          }}
        >
          Ready to get your document done?
        </h3>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={scrollToBooking}
            className="btn btn-gold"
            aria-label="Book an appointment now"
            style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            Book an Appointment Now
          </button>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
            aria-label="WhatsApp us"
            style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

    </section>
  );
}
