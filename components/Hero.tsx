"use client";

import Image from "next/image";
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

// Only animate below-fold/non-LCP elements
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
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
      className="hero-section"
      aria-label="Hero — Rathi Document Point"
    >
      {/* LCP-optimized background image — preloadable via Next.js Image priority */}
      <div className="hero-bg-wrap" aria-hidden="true">
        <Image
          src="/legal_bg.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          className="hero-bg-img"
        />
        {/* Dark overlay */}
        <div className="hero-overlay" />
      </div>

      {/* Seal watermark */}
      <div className="hero-seal-wrap" aria-hidden="true">
        <GoldSeal size={520} />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Badge — animated (not LCP element) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <span className="hero-badge">
            Gurugram&apos;s Most Trusted Document Service
          </span>
        </motion.div>

        {/* H1 — NO animation delay, renders immediately for LCP */}
        <h1 className="hero-h1">
          Every Legal Document,
          <br />
          <span className="hero-h1-gold">Done Right.</span>
        </h1>

        {/* Body — animated */}
        <motion.p
          className="hero-body"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          From Rent Agreements to Sale Deeds — we draft, prepare, register,
          and deliver all your legal documents with accuracy, speed, and 15+
          years of expertise. Serving all of Gurugram.
        </motion.p>

        {/* CTAs — animated */}
        <motion.div
          className="hero-ctas"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
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

        {/* Trust badges — animated */}
        <motion.div
          className="hero-badges-grid"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="trust-badge-card">
              <div className="trust-badge-icon">{badge.icon}</div>
              <div className="trust-badge-label">{badge.label}</div>
              <div className="trust-badge-sub">{badge.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — CSS animation, no JS */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
