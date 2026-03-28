import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { site, getMapsEmbedSrc } from "@/lib/site";

export function Location() {
  const embedSrc = getMapsEmbedSrc();

  return (
    <section
      id="localisation"
      className="scroll-mt-28 border-t border-border-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Localisation
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
              Votre opticien à Aïn Sebaâ, Casablanca
            </h2>
            <p className="mt-4 text-cream-muted leading-relaxed">
              Notre boutique optique vous accueille dans un cadre accessible,
              en face de 2M, boulevard des Troènes — idéal pour un{" "}
              <strong className="text-cream/95">essai de lunettes</strong> ou un{" "}
              <strong className="text-cream/95">suivi lentilles</strong> sans
              contrainte.
            </p>
            <div className="mt-8 flex gap-3 rounded-2xl border border-border-subtle bg-night-blue/40 p-5 backdrop-blur-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-medium text-cream">Adresse</p>
                <p className="mt-1 text-sm leading-relaxed text-cream-muted">
                  {site.address.streetAddress}
                  <br />
                  {site.address.postalCode} {site.address.addressLocality},{" "}
                  Maroc
                </p>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-4 inline-block text-sm font-medium text-gold hover:underline"
                >
                  {site.phoneDisplay} — appel direct
                </a>
              </div>
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-bg-deep shadow-lg shadow-gold/20 transition-colors hover:bg-gold-hover"
            >
              <Navigation className="h-4 w-4" />
              Ouvrir dans Google Maps
            </a>
            <p className="mt-6 text-sm text-cream-muted">
              Questions avant de venir ? Consultez la{" "}
              <a href="#faq" className="text-gold underline-offset-4 hover:underline">
                FAQ
              </a>{" "}
              ou{" "}
              <a href="/contact" className="text-gold underline-offset-4 hover:underline">
                contactez-nous
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border-subtle bg-night-blue-soft shadow-2xl shadow-black/40">
              <div className="aspect-[4/3] w-full lg:aspect-square">
                <iframe
                  title="Carte — Lila's Optic, Casablanca"
                  src={embedSrc}
                  className="h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
