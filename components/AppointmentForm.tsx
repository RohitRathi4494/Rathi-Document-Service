"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, MessageCircle } from "lucide-react";
import {
  appointmentSchema,
  AppointmentFormData,
  documentTypes,
  timeSlots,
} from "@/lib/validations";

const WHATSAPP = "919910406641";

function SuccessCard({ data, onReset }: { data: AppointmentFormData; onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="success-card"
    >
      <div className="success-icon-circle">
        <CheckCircle size={40} color="#1B3A6B" strokeWidth={2} />
      </div>
      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          color: "#1B3A6B",
          marginBottom: "1rem",
        }}
      >
        Appointment Requested!
      </h2>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "1rem",
          color: "#5A5A7A",
          lineHeight: 1.7,
          maxWidth: 480,
          margin: "0 auto 0.75rem",
        }}
      >
        Thank you, <strong style={{ color: "#1B3A6B" }}>{data.name}</strong>. Your appointment request for a{" "}
        <strong style={{ color: "#1B3A6B" }}>{data.documentType}</strong> has been received.
      </p>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.9375rem",
          color: "#5A5A7A",
          marginBottom: "2rem",
        }}
      >
        We will contact you at{" "}
        <strong style={{ color: "#1B3A6B" }}>+91-{data.phone}</strong> within 2 hours.{" "}
        {data.email && (
          <>A confirmation has been sent to <strong style={{ color: "#1B3A6B" }}>{data.email}</strong>.</>
        )}
      </p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button
          onClick={onReset}
          className="btn btn-gold"
          aria-label="Book another appointment"
        >
          Book Another Appointment
        </button>
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hello%2C%20I%20just%20submitted%20an%20appointment%20request%20for%20${encodeURIComponent(data.documentType)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-navy"
          aria-label="WhatsApp us directly"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <MessageCircle size={16} />
          WhatsApp Us Directly →
        </a>
      </div>
    </motion.div>
  );
}

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<AppointmentFormData | null>(null);
  const [todayStr, setTodayStr] = useState("");

  // Set min date only on client to avoid server/client hydration mismatch
  useEffect(() => {
    setTodayStr(new Date().toISOString().split("T")[0]);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSuccessData(data);
      } else {
        setSubmitError("Something went wrong. Please try again or WhatsApp us directly.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setSubmitError(null);
    reset();
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    border: `1.5px solid ${hasError ? "#e53e3e" : "#E2DACE"}`,
    borderRadius: 8,
    background: "#ffffff",
    color: "#1A1A2E",
    fontFamily: "var(--font-inter)",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  } as React.CSSProperties);

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#1B3A6B",
    marginBottom: "0.375rem",
    display: "block",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.8125rem",
    color: "#e53e3e",
    fontWeight: 500,
    marginTop: "0.25rem",
  };

  return (
    <section
      id="book-appointment"
      style={{
        background: "#1B3A6B",
        padding: "6rem 1.5rem",
        position: "relative",
      }}
      aria-labelledby="book-heading"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 10% 50%, rgba(201,168,76,0.05) 0%, transparent 50%)",
        }}
      />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="eyebrow">Book an Appointment</span>
          <h2
            id="book-heading"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Tell Us What You Need —{" "}
            <span style={{ color: "#F0D98A" }}>We&apos;ll Handle the Rest</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1rem",
              color: "rgba(250,247,242,0.8)",
              lineHeight: 1.7,
            }}
          >
            Fill in your details below. You&apos;ll receive a confirmation and we&apos;ll contact you within 2 hours.
          </p>
        </div>

        <div
          style={{
            background: "#FAF7F2",
            borderRadius: 16,
            padding: "clamp(1.5rem, 5vw, 3rem)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <AnimatePresence mode="wait">
            {successData ? (
              <SuccessCard data={successData} onReset={handleReset} />
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g., Rajesh Kumar"
                      style={inputStyle(!!errors.name)}
                      {...register("name")}
                    />
                    {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      style={inputStyle(!!errors.phone)}
                      {...register("phone")}
                    />
                    {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row">
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="yourname@email.com"
                      style={inputStyle(!!errors.email)}
                      {...register("email")}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred Contact Method *</label>
                    <div style={{ display: "flex", gap: "1.25rem", paddingTop: "0.75rem" }}>
                      {["WhatsApp", "Call", "Email"].map((method) => (
                        <label
                          key={method}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            cursor: "pointer",
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            color: "#1A1A2E",
                          }}
                        >
                          <input
                            type="radio"
                            value={method}
                            {...register("contactMethod")}
                            style={{ accentColor: "#C9A84C" }}
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                    {errors.contactMethod && <p style={errorStyle}>{errors.contactMethod.message}</p>}
                  </div>
                </div>

                {/* Row 3 */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label htmlFor="documentType" style={labelStyle}>Document Type Required *</label>
                  <select
                    id="documentType"
                    style={{
                      ...inputStyle(!!errors.documentType),
                      cursor: "pointer",
                    }}
                    {...register("documentType")}
                  >
                    <option value="">— Select a document type —</option>
                    {documentTypes.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {errors.documentType && <p style={errorStyle}>{errors.documentType.message}</p>}
                </div>

                {/* Row 4 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row">
                  <div>
                    <label htmlFor="date" style={labelStyle}>Appointment Date *</label>
                    <input
                      id="date"
                      type="date"
                      min={todayStr}
                      style={inputStyle(!!errors.date)}
                      {...register("date")}
                    />
                    {errors.date && <p style={errorStyle}>{errors.date.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="timeSlot" style={labelStyle}>Preferred Time Slot *</label>
                    <select
                      id="timeSlot"
                      style={{ ...inputStyle(!!errors.timeSlot), cursor: "pointer" }}
                      {...register("timeSlot")}
                    >
                      <option value="">— Select a time slot —</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.timeSlot && <p style={errorStyle}>{errors.timeSlot.message}</p>}
                  </div>
                </div>

                {/* Row 5 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row">
                  <div>
                    <label htmlFor="area" style={labelStyle}>Your Area / Sector in Gurugram *</label>
                    <input
                      id="area"
                      type="text"
                      placeholder="e.g., Sector 45, DLF Phase 2"
                      style={inputStyle(!!errors.area)}
                      {...register("area")}
                    />
                    {errors.area && <p style={errorStyle}>{errors.area.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="referralSource" style={labelStyle}>How did you hear about us?</label>
                    <select
                      id="referralSource"
                      style={{ ...inputStyle(false), cursor: "pointer" }}
                      {...register("referralSource")}
                    >
                      <option value="">— Select —</option>
                      {["Google", "WhatsApp", "Referral", "Other"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 6 */}
                <div style={{ marginBottom: "2rem" }}>
                  <label htmlFor="additionalDetails" style={labelStyle}>Additional Details / Special Requirements</label>
                  <textarea
                    id="additionalDetails"
                    rows={4}
                    style={{
                      ...inputStyle(false),
                      resize: "vertical",
                      minHeight: 110,
                    }}
                    placeholder="E.g., 'I need a rent agreement for a 2BHK flat, tenant moving in next week. Landlord and tenant both have Aadhaar.' The more you tell us, the faster we can help."
                    {...register("additionalDetails")}
                  />
                </div>

                {/* Error banner */}
                {submitError && (
                  <div
                    style={{
                      background: "#FFF5F5",
                      border: "1px solid #FC8181",
                      borderRadius: 8,
                      padding: "0.875rem 1.25rem",
                      marginBottom: "1.25rem",
                      color: "#C53030",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9rem",
                    }}
                    role="alert"
                  >
                    {submitError}{" "}
                    <a
                      href={`https://wa.me/${WHATSAPP}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 700, color: "#C53030", textDecoration: "underline" }}
                    >
                      WhatsApp us directly →
                    </a>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold"
                  aria-label="Submit appointment booking form"
                  style={{
                    width: "100%",
                    fontSize: "1.0625rem",
                    padding: "1rem",
                    opacity: isSubmitting ? 0.8 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
                      Sending your request...
                    </>
                  ) : (
                    "Book My Appointment →"
                  )}
                </button>

                <p
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.8125rem",
                    color: "#5A5A7A",
                  }}
                >
                  🔒 Your information is private and will only be used to process your appointment.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
