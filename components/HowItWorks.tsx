"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Phone, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Fill the Form",
    description:
      "Tell us what document you need and share basic details through our simple appointment form. Takes less than 2 minutes.",
  },
  {
    number: "02",
    icon: Phone,
    title: "We Contact You",
    description:
      "Our expert calls or WhatsApps you within 2 hours to confirm details, clarify requirements, and tell you the exact cost.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Collect Your Document",
    description:
      "Visit us or we deliver. Your document is ready — accurate, legally compliant, and properly stamped.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "#1B3A6B",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="how-heading"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="eyebrow">Simple Process</span>
          <h2
            id="how-heading"
            className="section-heading section-heading--white"
            style={{ marginBottom: 0 }}
          >
            Get Your Document in 3 Steps
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr",
            alignItems: "start",
            gap: "1.5rem",
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.18 }}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: 16,
                    padding: "2.25rem 2rem",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                  }}
                >
                  {/* Background number */}
                  <div className="step-number-bg" style={{ left: "50%", transform: "translateX(-50%)", opacity: 0.06 }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #C9A84C, #A8861E)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.25rem",
                      boxShadow: "0 8px 24px rgba(201,168,76,0.3)",
                    }}
                  >
                    <Icon size={28} color="#ffffff" strokeWidth={1.75} />
                  </div>

                  {/* Step badge */}
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C9A84C",
                      marginBottom: "0.625rem",
                    }}
                  >
                    Step {i + 1}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      color: "#ffffff",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9375rem",
                      color: "rgba(250,247,242,0.75)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow connector (between steps) */}
                {i < 2 && (
                  <div
                    aria-hidden="true"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "3rem",
                      color: "#C9A84C",
                      fontSize: "1.75rem",
                    }}
                    className="step-arrow"
                  >
                    →
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <style>{`
        .steps-grid {
          grid-template-columns: 1fr auto 1fr auto 1fr;
        }
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
