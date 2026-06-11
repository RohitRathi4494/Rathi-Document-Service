"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "91XXXXXXXXXX";

export default function FloatingWhatsApp() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn${showScrollTop ? " visible" : ""}`}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      {/* WhatsApp float */}
      <div className="whatsapp-float">
        <div className="whatsapp-pulse" aria-hidden="true" />
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20document%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15c0 2.2.6 4.3 1.7 6.2L2.5 27.5l6.5-1.7c1.8 1 3.9 1.5 6 1.5 6.9 0 12.5-5.6 12.5-12.5C27.5 8.1 21.9 2.5 15 2.5z"
              fill="white"
            />
            <path
              d="M21.5 18.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-2-.9-3.3-2-4.3-3.8-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.5z"
              fill="#1B3A6B"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
