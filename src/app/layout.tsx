import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Jost,
  Outfit,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { LocalBusinessJsonLd, FaqJsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const signature = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

/** Titres « carte marque » : capitales, style premium (proche Lens & Style) */
const displaySans = Jost({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const keywords = [
  "opticien Casablanca",
  "optique Casablanca",
  "lunettes de vue Casablanca",
  "lunettes de soleil Casablanca",
  "lentilles de contact Casablanca",
  "boutique optique Ain Sebaa",
  "centre optique Casablanca",
  "montures tendance",
  "verres progressifs",
  "santé visuelle",
  "opticien maroc",
  "opticienne Casablanca",
  "Lila's Optic",
];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Lila's Optic | Opticien Casablanca — Lunettes, lentilles & expertise Aïn Sebaâ",
    template: "%s | Lila's Optic",
  },
  description: site.description,
  keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: site.url,
    siteName: site.name,
    title:
      "Lila's Optic — Opticien à Casablanca | Lunettes de vue, soleil & lentilles",
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Lila's Optic — boutique d'optique premium à Casablanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lila's Optic | Opticien Casablanca — Aïn Sebaâ",
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: site.url,
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#154D4B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${outfit.variable} ${signature.variable} ${displaySans.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-sans">
        <LocalBusinessJsonLd />
        <FaqJsonLd />
        <Header />
        <main className="relative flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
