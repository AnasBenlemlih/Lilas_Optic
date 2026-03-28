import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-28 border-t border-border-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Inspiration &amp; expertise
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
              Santé visuelle, confort &amp; style — le triptyque Lila&apos;s Optic
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream-muted">
              Être{" "}
              <strong className="font-medium text-cream">
                opticien à Casablanca
              </strong>
              , c&apos;est aussi écouter votre routine, vos écrans et vos
              envies. Nous sélectionnons des montures tendance, des verres adaptés
              et des solutions de correction optique pour que chaque regard soit
              à la fois protégé, net et affirmé.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="space-y-6 rounded-3xl border border-border-subtle bg-night-blue/40 p-8 backdrop-blur-sm">
              <div>
                <h3 className="font-serif text-xl text-gold">
                  Centre optique Aïn Sebaa &amp; conseil d&apos;opticien
                </h3>
                <p className="mt-3 text-cream-muted leading-relaxed">
                  Notre équipe vous guide pour la{" "}
                  <strong className="text-cream/95">
                    lunette de vue à Casablanca
                  </strong>
                  , la{" "}
                  <strong className="text-cream/95">
                    lunette de soleil Casablanca
                  </strong>{" "}
                  avec protection UV, et les{" "}
                  <strong className="text-cream/95">
                    lentilles de contact Casablanca
                  </strong>{" "}
                  les mieux adaptées. Nous parlons{" "}
                  <strong className="text-cream/95">santé visuelle</strong>,{" "}
                  <strong className="text-cream/95">verres progressifs</strong>{" "}
                  et confort de port, sans jargon inutile.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gold">
                  Optique Casablanca &amp; élégance
                </h3>
                <p className="mt-3 text-cream-muted leading-relaxed">
                  En tant que{" "}
                  <strong className="text-cream/95">opticienne Casablanca</strong>{" "}
                  et boutique de référence, nous mettons l&apos;accent sur le{" "}
                  <strong className="text-cream/95">visagisme</strong>, les
                  matériaux nobles et les finitions soignées. Que vous cherchiez
                  une{" "}
                  <strong className="text-cream/95">
                    correction optique
                  </strong>{" "}
                  précise ou une silhouette mode, vous trouverez une réponse
                  sur-mesure dans notre{" "}
                  <strong className="text-cream/95">
                    centre optique Casablanca
                  </strong>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-gold">
                  Opticien Maroc — proximité &amp; exigence
                </h3>
                <p className="mt-3 text-cream-muted leading-relaxed">
                  L&apos;excellence n&apos;est pas réservée aux grandes vitrines
                  internationales : elle commence par une écoute sincère, une
                  lunette bien ajustée et un suivi après livraison. C&apos;est
                  l&apos;engagement de Lila&apos;s Optic pour{" "}
                  <strong className="text-cream/95">l&apos;optique Casablanca</strong>{" "}
                  et au-delà.
                </p>
              </div>
              <p className="border-t border-border-subtle pt-6 text-sm text-cream-muted">
                Poursuivez la découverte avec notre{" "}
                <Link href="#inspiration" className="text-gold underline-offset-4 hover:underline">
                  univers visuel sur les réseaux
                </Link>{" "}
                ou{" "}
                <Link href="/contact" className="text-gold underline-offset-4 hover:underline">
                  prenez rendez-vous
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
