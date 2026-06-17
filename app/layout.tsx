import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
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
  ],
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
    images: [{ url: "/logo-rdp.png", width: 512, height: 512, alt: "Rathi Document Point Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rathi Document Point Gurugram",
    description:
      "Expert legal document drafting & registration in Gurugram — Rent Agreement, Affidavit, GPA, SPA, Sale Deed and more.",
  },
  alternates: {
    canonical: "https://rathidocumentpoint.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Rathi Document Point",
  description:
    "Professional legal document drafting & registration service in Gurugram — Rent Agreement, Affidavit, GPA, SPA, Sale Deed, Lease, and all court documents.",
  url: "https://rathidocumentpoint.in",
  telephone: "+91-9910406641",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Your Address]",
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
  openingHours: "Mo-Sa 10:00-19:00",
  areaServed: "Gurugram",
  priceRange: "₹₹",
  hasMap: "https://maps.google.com/?q=Gurugram",
  sameAs: ["https://wa.me/91XXXXXXXXXX"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
