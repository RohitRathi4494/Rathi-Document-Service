"use client";

import { motion, type Variants } from "framer-motion";
import {
  FileText,
  FileCheck,
  Stamp,
  Scale,
  Home,
  Building,
  Users,
  ScrollText,
  Shield,
  FileX,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    icon: Home,
    name: "Rent Agreement",
    description:
      "Most common residential/commercial property document. Legally binding, stamp duty compliant.",
  },
  {
    icon: Building,
    name: "Lease Agreement",
    description:
      "Long-term property lease document for 11 months and above. We draft, stamp, and assist with registration.",
  },
  {
    icon: Stamp,
    name: "Affidavit",
    description:
      "Sworn legal statement for all purposes — court, school, government use.",
  },
  {
    icon: Scale,
    name: "General Power of Attorney (GPA)",
    description:
      "Authorize someone to act on your behalf for all matters legally and comprehensively.",
  },
  {
    icon: FileText,
    name: "Special Power of Attorney (SPA)",
    description:
      "Authorize someone for specific transactions only — such as selling a particular property.",
  },
  {
    icon: FileCheck,
    name: "Sale Deed",
    description:
      "Transfer of property ownership. We draft, prepare, and assist with full registration at the sub-registrar office in Gurugram.",
  },
  {
    icon: ScrollText,
    name: "Agreement to Sell",
    description:
      "Pre-sale agreement between buyer and seller before final registration of property. We handle drafting and registration assistance.",
  },
  {
    icon: Users,
    name: "Relinquishment Deed",
    description:
      "Surrender of property rights or share among family members. Legally drafted.",
  },
  {
    icon: ClipboardCheck,
    name: "Will / Vasiyatnama",
    description:
      "Legal declaration of property and asset distribution as per your wishes.",
  },
  {
    icon: Shield,
    name: "Indemnity Bond",
    description:
      "Legal protection document for financial or property matters. Court admissible.",
  },
  {
    icon: FileX,
    name: "NOC (No Objection Certificate)",
    description:
      "From landlord, employer, or society as required by any authority.",
  },
  {
    icon: BadgeCheck,
    name: "Court / Income Affidavit",
    description:
      "Notarized sworn statement for court or government submission. Quickly prepared.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  const scrollToBook = () => {
    const el = document.querySelector("#book-appointment");
    if (el) {
      const top =
        (el as HTMLElement).getBoundingClientRect().top +
        window.scrollY -
        72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="card service-card"
      role="article"
      style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}
      aria-label={`Service: ${service.name}`}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
          background: "linear-gradient(135deg, #FAF7F2, #F0EAE0)",
          border: "1px solid #E2DACE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.25s ease",
        }}
        className="service-icon-wrap"
      >
        <Icon size={24} color="#C9A84C" strokeWidth={1.75} />
      </div>

      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#1B3A6B",
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {service.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.875rem",
            color: "#5A5A7A",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>

      <div
        style={{
          paddingTop: "0.75rem",
          borderTop: "1px solid #E2DACE",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={scrollToBook}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "#1B3A6B",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            textDecoration: "underline",
            textDecorationColor: "transparent",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#C9A84C";
            (e.currentTarget as HTMLElement).style.textDecorationColor = "#C9A84C";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#1B3A6B";
            (e.currentTarget as HTMLElement).style.textDecorationColor = "transparent";
          }}
          aria-label={`Get ${service.name}`}
        >
          Get This →
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section
      id="services"
      style={{
        background: "#FAF7F2",
        padding: "6rem 1.5rem",
      }}
      aria-labelledby="services-heading"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow">Our Services</span>
          <h2
            id="services-heading"
            className="section-heading"
            style={{ marginBottom: "1rem" }}
          >
            Documents We Draft & Register
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            All documents drafted with legal precision — and where required, we
            assist with full registration at the sub-registrar office.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </motion.div>
      </div>

      <style>{`
        .card:hover .service-icon-wrap {
          background: linear-gradient(135deg, #F0D98A, #C9A84C) !important;
          border-color: #C9A84C !important;
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .services-grid {
          align-items: stretch;
        }
        .service-card {
          height: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
}
