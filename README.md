# Rathi Document Services — Website

Production-ready Next.js website for **Rathi Document Services**, Gurugram's trusted legal document drafting service.

**Live at:** [rathidocuments.in](https://rathidocuments.in)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + custom CSS design tokens
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display + Inter (via `next/font/google`)
- **Forms:** React Hook Form + Zod v4 validation
- **Email:** Nodemailer v8 (Gmail SMTP)
- **Deployment:** Vercel-ready

---

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create `.env.local` in the project root:
```env
# SMTP — Gmail recommended
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your-16-char-app-password   # Gmail > Security > 2FA > App Passwords

# Email recipients
OWNER_EMAIL=father@email.com
FROM_EMAIL=noreply@rathidocuments.in

# Public env vars
NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX      # No spaces, no +, e.g. 919876543210
NEXT_PUBLIC_PHONE=+91-9876543210
NEXT_PUBLIC_ADDRESS=Shop No. X, Street Name, Gurugram, Haryana - 122001
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → Generate a 16-character password.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Production Build
```bash
npm run build
npm start
```

---

## Deploying to Vercel

1. Push to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Add all `.env.local` variables in Vercel → Project → Settings → Environment Variables
4. Deploy

---

## Before Going Live — Replace These Placeholders

Search for the following and replace with real values:

| Placeholder | Replace With |
|---|---|
| `XXXXXXXXXX` | 10-digit WhatsApp/phone number |
| `father@email.com` | Father's actual email |
| `[Your Address]` | Full shop address |
| `your-gmail@gmail.com` | Gmail for sending emails |
| `your-16-char-app-password` | Gmail App Password |
| Google Maps iframe `src` in `ContactSection.tsx` | Actual embed URL from Google Maps |

---

## Project Structure

```
app/
├── layout.tsx              # Root layout, fonts, SEO metadata, JSON-LD
├── page.tsx                # Homepage (all sections assembled)
├── globals.css             # Full design system + CSS tokens
├── sitemap.ts              # XML sitemap
├── robots.ts               # Robots.txt
└── api/
    └── book-appointment/
        └── route.ts        # Email API route (POST)

components/
├── Navbar.tsx              # Glassmorphism fixed navbar
├── Footer.tsx              # 3-column navy footer
├── FloatingWhatsApp.tsx    # Fixed WhatsApp + scroll-to-top buttons
├── Hero.tsx                # Full-viewport hero with gold seal watermark
├── ServicesTicker.tsx      # Infinite scrolling service names strip
├── ServicesGrid.tsx        # 12 service cards in responsive grid
├── HowItWorks.tsx          # 3-step process section
├── WhyChooseUs.tsx         # Split navy/cream layout
├── AreasWeServe.tsx        # Gurugram areas pill cloud
├── Testimonials.tsx        # 3 client testimonials
├── AppointmentForm.tsx     # Full booking form with states
├── FAQ.tsx                 # 8-question accordion
└── ContactSection.tsx      # Contact + map + CTA strip

lib/
├── validations.ts          # Zod v4 schema
├── mailer.ts               # Nodemailer transporter
└── emailTemplates.ts       # Customer + owner HTML email templates
```

---

## Features

- ✅ Full SEO — title, description, Open Graph, Twitter Card, JSON-LD structured data
- ✅ 10 homepage sections
- ✅ 12 service cards with pricing
- ✅ Appointment booking form with validation
- ✅ Dual email system (customer + owner)
- ✅ WhatsApp floating button with pulse animation
- ✅ Framer Motion staggered animations
- ✅ Infinite CSS marquee ticker
- ✅ FAQ accordion
- ✅ Google Maps embed
- ✅ Fully responsive (mobile-first)
- ✅ `prefers-reduced-motion` respected
- ✅ WCAG AA color contrast
- ✅ XML sitemap + robots.txt

---

© 2024 Rathi Document Services
