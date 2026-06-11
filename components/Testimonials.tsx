"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    location: "Sector 45, Gurugram",
    stars: 5,
    quote:
      "Got my rent agreement done within 2 hours. Very professional and the pricing was completely transparent. Highly recommended for anyone in Gurugram.",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    location: "DLF Phase 2",
    stars: 5,
    quote:
      "I needed a GPA urgently for my property matter. Rathi ji guided me through the entire process patiently and the document was perfect. Will definitely come back.",
  },
  {
    initials: "SK",
    name: "Suresh Kumar",
    location: "Palam Vihar",
    stars: 5,
    quote:
      "Very experienced. They handled my sale deed and agreement to sell with complete accuracy. Have already referred them to 3 of my friends.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#C9A84C" color="#C9A84C" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "#FAF7F2",
        padding: "6rem 1.5rem",
      }}
      aria-labelledby="testimonials-heading"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow">Client Reviews</span>
          <h2
            id="testimonials-heading"
            className="section-heading"
            style={{ marginBottom: "1rem" }}
          >
            What Our Clients Say
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Thousands of clients across Gurugram trust us with their most
            important documents.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: "#ffffff",
                border: "1px solid #E2DACE",
                borderRadius: 14,
                padding: "2rem",
                boxShadow: "0 4px 20px rgba(27,58,107,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <StarRow count={t.stars} />

              <blockquote
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "#1A1A2E",
                  lineHeight: 1.75,
                  margin: "0 0 1.5rem",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div className="avatar-circle" aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: "#1B3A6B",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.8125rem",
                      color: "#5A5A7A",
                    }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.google.com/search?q=Rathi+Document+Services+Gurugram#lrd=0x0:0x0,1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-navy"
            aria-label="See all Google reviews"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See All Google Reviews
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            overflow-x: auto;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
