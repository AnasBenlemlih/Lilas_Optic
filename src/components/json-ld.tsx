import { site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: "Casablanca",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    sameAs: [site.social.instagram, site.social.threads],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd() {
  const faqs = [
    {
      question: "Quels types de lunettes proposez-vous ?",
      answer:
        "Nous proposons des lunettes de vue et des lunettes de soleil, avec un large choix de montures tendance et de verres adaptés à votre correction et à votre style de vie.",
    },
    {
      question: "Faites-vous des lentilles ?",
      answer:
        "Oui : lentilles de contact souples, journalières ou mensuelles, avec essai et suivi en boutique à Casablanca pour garantir confort et sécurité.",
    },
    {
      question: "Travaillez-vous avec les verres correcteurs ?",
      answer:
        "Absolument. Nous réalisons des verres unifocaux, progressifs et traitements (anti-lumière bleue, photochromiques, etc.) selon votre prescription.",
    },
    {
      question: "Comment vous contacter ?",
      answer:
        "Par téléphone au 06 12 16 36 36, via WhatsApp, ou en venant nous voir à Aïn Sebaâ. Les liens sont disponibles sur ce site.",
    },
    {
      question: "Où êtes-vous situés à Casablanca ?",
      answer:
        "En face de 2M, boulevard des Troènes, Résidence Jardins de Ain Sebaa N°4 — 20250 Casablanca, Maroc.",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
