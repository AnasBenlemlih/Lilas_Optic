import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name} — opticien à Casablanca.`,
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="border-b border-border-subtle pb-24 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-cream">Mentions légales</h1>
        <p className="mt-6 text-cream-muted leading-relaxed">
          Les présentes mentions légales régulent l&apos;usage du site vitrine de{" "}
          <strong className="text-cream">{site.name}</strong>, centre
          d&apos;optique situé à {site.address.addressLocality}, Maroc. Les
          informations ci-dessous sont fournies à titre indicatif et pourront
          être mises à jour pour refléter l&apos;évolution de l&apos;entreprise
          ou de la réglementation.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-gold">Éditeur du site</h2>
        <p className="mt-3 text-cream-muted leading-relaxed">
          <strong className="text-cream">{site.name}</strong>
          <br />
          {site.address.streetAddress}
          <br />
          {site.address.postalCode} {site.address.addressLocality}, Maroc
          <br />
          Téléphone :{" "}
          <a href={`tel:${site.phoneTel}`} className="text-gold hover:underline">
            {site.phoneDisplay}
          </a>
        </p>
        <h2 className="mt-10 font-serif text-2xl text-gold">Hébergement</h2>
        <p className="mt-3 text-cream-muted leading-relaxed">
          Les informations relatives à l&apos;hébergeur du site pourront être
          complétées ici (nom, adresse, contact) selon votre prestataire
          d&apos;hébergement effectif.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-gold">
          Propriété intellectuelle
        </h2>
        <p className="mt-3 text-cream-muted leading-relaxed">
          Les contenus textes, visuels et éléments graphiques composant ce site
          sont la propriété de {site.name} ou utilisés sous licence. Toute
          reproduction non autorisée est interdite sauf accord écrit.
        </p>
        <p className="mt-10 text-sm text-cream-muted">
          <Link href="/" className="text-gold hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </p>
      </article>
    </div>
  );
}
