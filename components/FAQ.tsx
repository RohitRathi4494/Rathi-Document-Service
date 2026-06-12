"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to get a rent agreement done?",
    a: "A standard rent agreement takes 1–2 hours. For urgent cases, we offer same-day service. Once you submit your details, we'll call you to confirm the timeline.",
  },
  {
    q: "What documents do I need for a rent agreement?",
    a: "You'll need: Aadhaar card of landlord and tenant, one passport-size photo each, and property details (address, floor, BHK type). We'll guide you through everything when we call.",
  },
  {
    q: "Do you offer doorstep document delivery in Gurugram?",
    a: "Yes. For most documents, we offer delivery across Gurugram at a small convenience charge. Mention this requirement in the booking form.",
  },
  {
    q: "What is the difference between GPA and SPA?",
    a: "A General Power of Attorney (GPA) authorizes someone to act on your behalf for all matters. A Special Power of Attorney (SPA) limits the authorization to specific tasks only — such as selling a particular property.",
  },
  {
    q: "Is a rent agreement made by you legally valid?",
    a: "Absolutely. All our documents are drafted in accordance with Haryana stamp duty rules and are legally enforceable. For documents like Sale Deeds and Lease Agreements, we also provide full assistance with sub-registrar registration. We have 15+ years of experience serving Gurugram clients.",
  },
  {
    q: "What are your charges / fees?",
    a: "Our pricing starts at ₹200 for simple affidavits and goes up depending on the document type. We maintain complete transparency — no hidden charges. You'll be told the exact cost before we begin.",
  },
  {
    q: "Can you prepare documents in Hindi?",
    a: "Yes, we prepare documents in both Hindi and English as per your requirement.",
  },
  {
    q: "Do you assist with sub-registrar registration in Gurugram?",
    a: "Yes. For documents that require registration — such as Sale Deeds, Lease Agreements, and Agreement to Sell — we guide you through the entire registration process at the sub-registrar office in Gurugram. We handle the paperwork so you don't have to worry.",
  },
  {
    q: "How do I book an appointment?",
    a: "Simply fill in the booking form above, or WhatsApp us directly at +91-9910406641 or +91-9911346641. We'll confirm your appointment within 2 hours.",
  },
];

function FaqItem({ faq, isOpen, onClick }: {
  faq: typeof faqs[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        <span style={{ paddingRight: "1rem" }}>{faq.q}</span>
        <div className="faq-icon">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="faq-answer"
          >
            <div style={{ paddingBottom: "1.25rem" }}>{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        background: "#FAF7F2",
        padding: "6rem 1.5rem",
      }}
      aria-labelledby="faq-heading"
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow">FAQ</span>
          <h2
            id="faq-heading"
            className="section-heading"
            style={{ marginBottom: "1rem" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Everything you need to know about our document services.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#ffffff",
            borderRadius: 14,
            border: "1px solid #E2DACE",
            padding: "0 1.75rem",
            boxShadow: "0 4px 24px rgba(27,58,107,0.06)",
          }}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
