import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MotionProvider } from "@/components/MotionProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rathidocumentpoint.in"),
  title:
    "Rathi Document Point Gurugram | Rent Agreement, Affidavit, GPA, SPA, Sale Deed",
  description:
    "Rathi Document Point is Gurugram's trusted legal document service. Expert drafting & registration of Rent Agreement, Affidavit, GPA, SPA, Sale Deed, Lease Agreement and all court documents. Fast, accurate, affordable.",
  keywords: [
    "rent agreement gurugram",
    "affidavit gurugram",
    "GPA SPA gurugram",
    "sale deed gurugram",
    "legal document service gurugram",
    "document registration gurugram",
    "notary gurugram",
    "power of attorney gurugram",
    "agreement to sell gurugram",
    "court documents gurugram",
    "lease agreement gurugram",
    "legal document drafting haryana",
    "rathi document point",
  ],
  authors: [{ name: "Rathi Document Point" }],
  creator: "Rathi Document Point",
  publisher: "Rathi Document Point",
  icons: {
    icon: "/logo-rdp.png",
    shortcut: "/logo-rdp.png",
    apple: "/logo-rdp.png",
  },
  openGraph: {
    title: "Rathi Document Point — Gurugram's Trusted Legal Document Service",
    description:
      "Rent Agreement, Affidavit, GPA, SPA, Sale Deed & all legal documents drafted & registered by experts. Serving all of Gurugram.",
    url: "https://rathidocumentpoint.in",
    siteName: "Rathi Document Point",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-rdp.png",
        width: 1200,
        height: 630,
        alt: "Rathi Document Point — Legal Document Services Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rathi Document Point Gurugram",
    description:
      "Expert legal document drafting & registration in Gurugram — Rent Agreement, Affidavit, GPA, SPA, Sale Deed and more.",
    images: ["/logo-rdp.png"],
  },
  alternates: {
    canonical: "https://rathidocumentpoint.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification token here when available
    // google: "your-verification-token",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Rathi Document Point",
  alternateName: "Rathi Document Point (Regd.)",
  description:
    "Professional legal document drafting & registration service in Gurugram — Rent Agreement, Affidavit, GPA, SPA, Sale Deed, Lease, and all court documents.",
  url: "https://rathidocumentpoint.in",
  telephone: "+91-9910406641",
  email: "rathidocumentpoint@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,
    longitude: 77.0266,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Gurugram",
    containedIn: {
      "@type": "State",
      name: "Haryana",
    },
  },
  priceRange: "₹₹",
  hasMap: "https://maps.google.com/?q=Rathi+Document+Point+Gurugram",
  sameAs: [
    `https://wa.me/919910406641`,
  ],
  serviceType: [
    "Rent Agreement",
    "Affidavit",
    "General Power of Attorney",
    "Special Power of Attorney",
    "Sale Deed",
    "Lease Agreement",
    "Agreement to Sell",
    "Relinquishment Deed",
    "Will / Vasiyatnama",
    "Indemnity Bond",
    "NOC Certificate",
    "Court Affidavit",
  ],
  knowsAbout: [
    "Property Law",
    "Contract Law",
    "Haryana Stamp Duty",
    "Document Registration",
    "Legal Document Drafting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Critical resource hints — eliminate render-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload hero background image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/legal_bg.png"
          fetchPriority="high"
        />

        {/* Structured data — rich snippets for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter">
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
