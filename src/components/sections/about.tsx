import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

const aboutImage =
  "https://images.unsplash.com/photo-1511499767150-a48a237e0082?auto=format&fit=crop&w=1200&q=85";

export function About() {
  return (
    <section
      id="a-propos"
      className="scroll-mt-28 border-t border-border-subtle bg-bg-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              À propos
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
              Une opticienne à Casablanca, une exigence de maison
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream-muted">
              Chez {site.name}, nous cultivons depuis plus de{" "}
              <strong className="font-medium text-cream">
                {site.experienceYears} ans
              </strong>{" "}
              une approche où l&apos;optique rencontre l&apos;élégance. Notre
              centre optique à Aïn Sebaâ accueille celles et ceux qui
              recherchent une correction fiable, des montures d&apos;exception et
              un accompagnement humain.
            </p>
            <ul className="mt-8 space-y-4 text-cream-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  Conseil personnalisé : visagisme, adaptation des verres
                  progressifs et solutions de confort pour les écrans.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  Expertise en correction optique et suivi attentif pour
                  préserver votre santé visuelle au quotidien.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  Une ambiance premium — rassurante, moderne — pour choisir en
                  toute confiance vos lunettes à Casablanca.
                </span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-cream-muted/90">
              Découvrez également nos{" "}
              <a href="#services" className="text-gold underline-offset-4 hover:underline">
                catégories produits
              </a>{" "}
              et notre{" "}
              <a href="#expertise" className="text-gold underline-offset-4 hover:underline">
                bloc expertise
              </a>{" "}
              dédié à l&apos;optique et au style.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border-subtle bg-night-blue-soft shadow-2xl shadow-black/40">
              <Image
                src={aboutImage}
                alt="Lunettes de soleil et style optique — boutique Lila's Optic Casablanca"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-serif text-2xl text-cream">Confiance &amp; finesse</p>
                <p className="mt-2 text-sm text-cream-muted">
                  Votre opticien de proximité au Maroc, ancré à Aïn Sebaâ.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
