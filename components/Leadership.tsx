"use client";

import { m } from "framer-motion";
import { Award, BookOpen, Scale } from "lucide-react";

const leaders = [
  {
    name: "Rahul Rathi",
    title: "Advocate",
    icon: <Scale size={24} color="#F0D98A" />,
    role: "Legal Advisor & Consultant",
    desc: "Provides expert legal counsel, court representation, and ensures all drafted documents comply with current legal acts and Haryana State stamp regulations.",
    credentials: [
      "Expert in Property & Contract Law",
      "Court Representation & Liaison",
      "Legal Compliance Assurance",
    ],
  },
  {
    name: "Rajender Rathi",
    title: "",
    icon: <BookOpen size={24} color="#F0D98A" />,
    role: "Senior Drafting Expert",
    desc: "A veteran drafting specialist with over 15 years of hands-on experience writing Rent Agreements, Sale Deeds, GPA, SPA, Affidavits, and registry paperwork.",
    credentials: [
      "15+ Years Drafting Experience",
      "Gurugram Property Registry Specialist",
      "Expert in Court Paperwork & Stamp Rules",
    ],
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      style={{
        background: "#FAF7F2",
        padding: "6.5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="leadership-heading"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10rem",
          left: "-10rem",
          width: "30rem",
          height: "30rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="eyebrow">Our Leadership</span>
          <h2
            id="leadership-heading"
            className="section-heading"
            style={{ marginBottom: "1.25rem" }}
          >
            Meet Our Legal & Drafting Experts
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            The professional team managing Rathi Document Point, combining legal counsel and years of document writing expertise.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="leadership-grid">
          {leaders.map((leader, i) => (
            <m.div
              key={leader.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="leader-card"
            >
              {/* Top Accent Line */}
              <div className="card-top-accent" />

              {/* Icon + Name row */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                <div className="leader-icon-bg" style={{ flexShrink: 0 }}>{leader.icon}</div>
                <h3 className="leader-name" style={{ margin: 0 }}>
                  {leader.name}{leader.title ? `, ${leader.title}` : ""}
                </h3>
              </div>

              {/* Role */}
              <p className="leader-role" style={{ marginBottom: "0" }}>{leader.role}</p>

              {/* Divider */}
              <div style={{ height: "1px", background: "#E2DACE", margin: "1.25rem 0" }} />

              {/* Description */}
              <p className="leader-desc">{leader.desc}</p>

              {/* Key Credentials */}
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#1B3A6B",
                  letterSpacing: "0.05em",
                  marginBottom: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <Award size={14} color="#C9A84C" /> Areas of Expertise
                </h4>
                <ul className="leader-bullet-list">
                  {leader.credentials.map((cred) => (
                    <li key={cred}>
                      <span className="bullet-dot" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          ))}
        </div>
      </div>


    </section>
  );
}
