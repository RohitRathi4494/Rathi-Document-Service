"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const WHATSAPP = "919910406641";

function GoldSeal({ size = 420 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className="seal-watermark"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" stroke="#C9A84C" strokeWidth="2" />
      <circle cx="100" cy="100" r="88" stroke="#C9A84C" strokeWidth="0.5" />
      {/* Inner decorative ring */}
      <circle cx="100" cy="100" r="78" stroke="#C9A84C" strokeWidth="1.5" />
      {/* Star/seal motif */}
      <path
        d="M100 20 L108 75 L160 60 L120 100 L160 140 L108 125 L100 180 L92 125 L40 140 L80 100 L40 60 L92 75 Z"
        fill="#C9A84C"
        opacity="0.6"
      />
      {/* Center circle */}
      <circle cx="100" cy="100" r="22" fill="#C9A84C" opacity="0.4" />
      <circle cx="100" cy="100" r="16" stroke="#C9A84C" strokeWidth="2" fill="none" />
      {/* Text arc — decorative dots */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const r = 83;
        const x = 100 + r * Math.cos(angle - Math.PI / 2);
        const y = 100 + r * Math.sin(angle - Math.PI / 2);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 1.5 : 0.75}
            fill="#C9A84C"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}

const trustBadges = [
  { icon: "📄", label: "15+ Years", sub: "Experience" },
  { icon: "✅", label: "5000+", sub: "Documents Served" },
  { icon: "⚡", label: "Same-Day", sub: "Service Available" },
  { icon: "📍", label: "All Gurugram", sub: "Areas Covered" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const scrollToBook = () => {
    const el = document.querySelector("#book-appointment");
    if (el) {
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 108,
        paddingBottom: 64,
        backgroundImage: "linear-gradient(rgba(15, 37, 72, 0.9), rgba(11, 28, 54, 0.85)), url('/legal_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Hero — Rathi Document Services"
    >
      {/* Seal watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        <GoldSeal size={520} />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 760,
          padding: "0 1.5rem",
        }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: 100,
              padding: "0.375rem 1.125rem",
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F0D98A",
              marginBottom: "1.5rem",
            }}
          >
            Gurugram&apos;s Most Trusted Document Service
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.25rem, 7vw, 4.25rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          Every Legal Document,
          <br />
          <span style={{ color: "#F0D98A" }}>Done Right.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "rgba(250,247,242,0.88)",
            lineHeight: 1.8,
            marginBottom: "2.25rem",
            maxWidth: 580,
            margin: "0 auto 2.25rem",
          }}
        >
          From Rent Agreements to Sale Deeds — we draft, prepare, register,
          and deliver all your legal documents with accuracy, speed, and 15+
          years of expertise. Serving all of Gurugram.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <button
            onClick={scrollToBook}
            className="btn btn-gold"
            aria-label="Book an appointment"
            style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            Book an Appointment →
          </button>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%2C%20I%20need%20help%20with%20a%20legal%20document.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
            aria-label="WhatsApp us now"
            style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            💬 WhatsApp Us Now
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: 10,
                padding: "0.875rem 0.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                {badge.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#F0D98A",
                  lineHeight: 1.2,
                }}
              >
                {badge.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.75rem",
                  color: "rgba(250,247,242,0.7)",
                  marginTop: "0.125rem",
                }}
              >
                {badge.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.5)",
          animation: "float 2s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          section[id="home"] > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
