import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";

export function ContactCta() {
  return (
    <section className="border-t border-border-subtle py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-gradient-to-br from-laurel/25 via-bg-elevated to-amulet/20 px-8 py-14 text-center shadow-2xl shadow-black/35 sm:px-14">
            <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-amulet/30 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Rendez-vous &amp; conseil
            </p>
            <h2 className="relative mt-4 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
              Prêt à sublimer votre regard ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-cream-muted">
              Prenez contact pour un essai, une question sur vos verres ou une
              première visite dans notre{" "}
              <strong className="font-medium text-cream">
                boutique optique Casablanca
              </strong>
              . Nous vous accueillons avec la même exigence qu&apos;à la
              vitrine : écoute, précision et élégance.
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Nous contacter
              </ButtonLink>
              <a
                href={`tel:${site.phoneTel}`}
                className="text-sm font-medium text-gold underline-offset-4 hover:underline"
              >
                Appeler le {site.phoneDisplay}
              </a>
            </div>
            <p className="relative mt-8 text-xs text-cream-muted/80">
              Retour à l&apos;{" "}
              <Link href="/" className="text-gold hover:underline">
                accueil
              </Link>{" "}
              ·{" "}
              <Link href="#services" className="text-gold hover:underline">
                services
              </Link>{" "}
              ·{" "}
              <Link href="#faq" className="text-gold hover:underline">
                FAQ
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
