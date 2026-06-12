"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, ShieldCheck, Scale } from "lucide-react";

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
    title: "Document Writer",
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
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="leader-card"
            >
              {/* Top Accent Line */}
              <div className="card-top-accent" />

              {/* Title & Badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div className="leader-icon-bg">{leader.icon}</div>
                <span className="leader-badge">{leader.title}</span>
              </div>

              {/* Name & Role */}
              <h3 className="leader-name">{leader.name}</h3>
              <p className="leader-role">{leader.role}</p>

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
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .leadership-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .leader-card {
          background: #ffffff;
          border: 1px solid #E2DACE;
          border-radius: 16px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(27,58,107,0.04);
          transition: all 0.3s ease;
        }

        .leader-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(27,58,107,0.08);
          border-color: #C9A84C;
        }

        .card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #1B3A6B;
          transition: background 0.3s ease;
        }

        .leader-card:hover .card-top-accent {
          background: #C9A84C;
        }

        .leader-icon-bg {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: #1B3A6B;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(27, 58, 107, 0.15);
        }

        .leader-badge {
          font-family: "var(--font-inter)";
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #C9A84C;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.2);
          padding: 0.375rem 0.875rem;
          border-radius: 100px;
        }

        .leader-name {
          font-family: "var(--font-playfair)";
          font-size: 1.75rem;
          font-weight: 700;
          color: #1B3A6B;
          margin-bottom: 0.375rem;
        }

        .leader-role {
          font-family: "var(--font-inter)";
          font-size: 0.9375rem;
          font-weight: 600;
          color: #C9A84C;
          margin-bottom: 0;
        }

        .leader-desc {
          font-family: "var(--font-inter)";
          font-size: 0.9375rem;
          color: #4A4A68;
          line-height: 1.6;
        }

        .leader-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .leader-bullet-list li {
          font-family: "var(--font-inter)";
          font-size: 0.875rem;
          color: #4A4A68;
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-weight: 500;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C9A84C;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .leadership-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
          .leader-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
