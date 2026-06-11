"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "10+ Years of Experience in Gurugram",
  "All documents legally compliant with Haryana stamp duty rules",
  "Same-day service for urgent requirements",
  "Doorstep delivery available across Gurugram",
  "Transparent pricing — no hidden charges",
  "Trusted by 5000+ satisfied clients",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      className="why-us-section"
      aria-labelledby="why-heading"
    >
      {/* Left — Navy */}
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        style={{
          background: "#1B3A6B",
          padding: "5rem 4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative seal */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-4rem",
            right: "-4rem",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "2px solid rgba(201,168,76,0.1)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-2rem",
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.08)",
            pointerEvents: "none",
          }}
        />

        <span className="eyebrow" style={{ color: "#F0D98A" }}>
          Why Choose Us
        </span>
        <h2
          id="why-heading"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          Why Gurugram Trusts Rathi Document Services
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1rem",
            color: "rgba(250,247,242,0.82)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          For over 10 years, families, property dealers, businesses, and
          individuals across Gurugram have relied on us for accurate, timely,
          and affordable legal document preparation.
        </p>

        {/* Quote */}
        <blockquote
          style={{
            borderLeft: "3px solid #C9A84C",
            paddingLeft: "1.5rem",
            margin: 0,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.0625rem",
              fontStyle: "italic",
              color: "#F0D98A",
              lineHeight: 1.7,
              margin: "0 0 0.75rem",
            }}
          >
            &ldquo;Documents are the foundation of every legal right. We make
            sure yours are built right.&rdquo;
          </p>
          <cite
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.8125rem",
              color: "rgba(250,247,242,0.65)",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            — Rathi Document Services
          </cite>
        </blockquote>
      </motion.div>

      {/* Right — Cream */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.1 }}
        style={{
          background: "#FAF7F2",
          padding: "5rem 4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span className="eyebrow">Our Strengths</span>
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700,
            color: "#1B3A6B",
            marginBottom: "2rem",
            lineHeight: 1.2,
          }}
        >
          What Makes Us Different
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                padding: "1rem 1.25rem",
                background: "#ffffff",
                borderRadius: 10,
                border: "1px solid #E2DACE",
                boxShadow: "0 2px 8px rgba(27,58,107,0.05)",
              }}
            >
              <CheckCircle
                size={20}
                color="#1D9E75"
                strokeWidth={2.5}
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "#1A1A2E",
                  lineHeight: 1.5,
                }}
              >
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .why-us-section {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .why-us-section {
            grid-template-columns: 1fr !important;
          }
          .why-us-section > div {
            padding: 3.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
