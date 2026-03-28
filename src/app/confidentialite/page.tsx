import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité — ${site.name}, opticien Casablanca.`,
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <div className="border-b border-border-subtle pb-24 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-cream">
          Politique de confidentialité
        </h1>
        <p className="mt-6 text-cream-muted leading-relaxed">
          {site.name} accorde une importance particulière à la protection de vos
          données personnelles lorsque vous utilisez ce site vitrine ou lorsque
          vous nous contactez par téléphone, WhatsApp ou en boutique.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-gold">
          Données collectées
        </h2>
        <p className="mt-3 text-cream-muted leading-relaxed">
          Selon votre interaction (navigation, formulaire, messagerie), peuvent
          être traitées des données telles que votre nom, numéro de téléphone ou
          contenu de message. Ces données servent uniquement à répondre à votre
          demande liée à nos services d&apos;optique.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-gold">Finalités</h2>
        <p className="mt-3 text-cream-muted leading-relaxed">
          Prise de contact, prise de rendez-vous, suivi commercial lié à votre
          équipement optique, et amélioration de l&apos;expérience client dans le
          respect du cadre légal applicable au Maroc et aux bonnes pratiques.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-gold">Vos droits</h2>
        <p className="mt-3 text-cream-muted leading-relaxed">
          Vous pouvez demander l&apos;accès, la rectification ou la suppression
          de vos données lorsque la loi l&apos;autorise, en nous contactant à
          l&apos;adresse de la boutique ou au numéro indiqué sur le site.
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
