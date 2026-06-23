"use client";

import { m } from "framer-motion";

const areas = [
  "Sector 14", "Sector 15", "Sector 22", "Sector 23", "Sector 40",
  "Sector 45", "Sector 56", "Sector 57", "DLF Phase 1", "DLF Phase 2",
  "DLF Phase 3", "DLF Phase 4", "DLF Phase 5", "Palam Vihar",
  "Sushant Lok", "South City 1", "South City 2", "Udyog Vihar",
  "MG Road", "Golf Course Road", "Sheetla Mata Road", "Maruti Kunj",
  "Bajghera", "Kherki Daula", "New Colony", "Old Gurugram",
  "Manesar", "IMT Manesar",
];

export default function AreasWeServe() {
  return (
    <section
      id="areas"
      style={{
        background: "#ffffff",
        padding: "6rem 1.5rem",
      }}
      aria-labelledby="areas-heading"
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="eyebrow">Service Areas</span>
          <h2
            id="areas-heading"
            className="section-heading"
            style={{ marginBottom: "1rem" }}
          >
            We Serve All of Gurugram
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From DLF phases to Manesar — wherever you are in Gurugram, we&apos;re here to help.
          </p>
        </div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          {areas.map((area, i) => (
            <m.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="area-pill"
            >
              {area}
            </m.span>
          ))}
        </m.div>

        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.9375rem",
              color: "#5A5A7A",
              background: "#FAF7F2",
              border: "1px solid #E2DACE",
              borderRadius: 8,
              padding: "1rem 2rem",
              display: "inline-block",
            }}
          >
            📞 Don&apos;t see your area?{" "}
            <strong style={{ color: "#1B3A6B" }}>Call us</strong> — we cover all of Gurugram and neighbouring areas.
          </p>
        </div>
      </div>
    </section>
  );
}
