export const site = {
  name: "Lila's Optic",
  slogan:
    "La destination où la santé des yeux et l'élégance se rencontrent",
  description:
    "Boutique d'optique premium à Aïn Sebaâ, Casablanca : lunettes de vue et solaires, lentilles de contact, verres progressifs et conseil personnalisé depuis plus de 10 ans.",
  url: "https://www.lilasoptic.ma",
  locale: "fr_MA",
  address: {
    streetAddress:
      "En face de 2M, BD de Troènes, Résidence Jardins de Ain Sebaa N°4",
    addressLocality: "Casablanca",
    postalCode: "20250",
    addressCountry: "MA",
    area: "Aïn Sebaâ",
  },
  phoneDisplay: "06 12 16 36 36",
  phoneTel: "+212612163636",
  whatsapp: "212612163636",
  mapsUrl: "https://maps.app.goo.gl/KyTxEauyai48wNLt7",
  social: {
    instagram: "https://www.instagram.com/lilas_optic",
    threads:
      "https://www.threads.com/@lilas_optic?xmt=AQF0ym2RK3w7j5rsux0sAv2cm3RCv5I4uJ0-VRAA5W3dJNY",
  },
  experienceYears: 10,
  openingHours: [
    { days: "Lundi — Samedi", hours: "9h30 — 19h30" },
    { days: "Dimanche", hours: "Fermé" },
  ],
} as const;

export function getMapsEmbedSrc(): string {
  const q = encodeURIComponent(
    `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality}, Maroc`
  );
  return `https://maps.google.com/maps?q=${q}&hl=fr&z=16&output=embed`;
}

export const navLinks = [
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#inspiration", label: "Inspiration" },
  { href: "#localisation", label: "Localisation" },
  { href: "#faq", label: "FAQ" },
] as const;
