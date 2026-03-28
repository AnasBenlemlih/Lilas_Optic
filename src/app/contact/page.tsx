import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact & rendez-vous",
  description:
    "Contactez Lila's Optic à Casablanca (Aïn Sebaâ) : téléphone, WhatsApp, adresse et prise de rendez-vous pour lunettes, lentilles et conseil opticien.",
  openGraph: {
    title: "Contact | Lila's Optic — Opticien Casablanca",
    description:
      "Par téléphone, WhatsApp ou en boutique : notre équipe vous répond pour vos lunettes et lentilles à Aïn Sebaâ.",
    url: `${site.url}/contact`,
  },
  alternates: {
    canonical: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="border-b border-border-subtle pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Contact
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-cream sm:text-5xl">
            Parlons de votre vue
          </h1>
          <p className="mt-4 text-lg text-cream-muted">
            Une question sur des verres progressifs, un essai de montures ou un
            suivi lentilles ? Écrivez-nous ou passez à la boutique : nous sommes
            votre{" "}
            <strong className="font-medium text-cream">
              centre optique de confiance à Casablanca
            </strong>
            .
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border-subtle bg-night-blue/40 p-6 backdrop-blur-sm">
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium text-cream">Téléphone</p>
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="mt-1 block text-gold hover:underline"
                    >
                      {site.phoneDisplay}
                    </a>
                    <p className="mt-2 text-xs text-cream-muted">
                      Appel direct — réponse pendant les horaires d&apos;ouverture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-night-blue/40 p-6 backdrop-blur-sm">
                <div className="flex gap-4">
                  <MessageCircle className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium text-cream">WhatsApp</p>
                    <p className="mt-1 text-sm text-cream-muted">
                      Idéal pour une photo de ordonnance, un créneau ou une
                      question rapide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-night-blue/40 p-6 backdrop-blur-sm">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium text-cream">Adresse</p>
                    <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                      {site.address.streetAddress}
                      <br />
                      {site.address.postalCode} {site.address.addressLocality},
                      Maroc
                    </p>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-gold hover:underline"
                    >
                      Ouvrir dans Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-cream-muted">
                <Link href="/" className="text-gold hover:underline">
                  ← Retour à l&apos;accueil
                </Link>{" "}
                ·{" "}
                <Link href="/#faq" className="text-gold hover:underline">
                  FAQ
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
