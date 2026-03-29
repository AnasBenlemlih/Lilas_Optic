import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

const portraitImage = "/images/laila.jpeg";
const brandCardImage = "/images/about-lilas-optic.jpeg";

export function About() {
  return (
    <section
      id="a-propos"
      className="relative scroll-mt-28 overflow-hidden border-t border-gold/15 bg-[#154D4B] py-20 sm:py-28"
    >
      {/* Fond : dégradé vert forêt + halo doré discret (comme la carte marque) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(228,210,139,0.08),transparent_50%),linear-gradient(180deg,#0f2524_0%,#154D4B_42%,#123230_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* En-tête section */}
        <Reveal className="text-center lg:text-left">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
            À propos
          </p>
          <div className="mt-4 flex flex-col items-center gap-4 lg:items-start">
            <p className="font-display text-sm font-bold uppercase tracking-[0.28em] text-gold/95 sm:text-base">
              {site.name.replace("’", "'").toUpperCase()}
            </p>
            <h2 className="max-w-2xl font-serif text-[1.65rem] font-medium leading-[1.15] tracking-tight text-cream sm:text-3xl md:text-[2.15rem]">
              Votre regard, notre passion
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent sm:w-24" />
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Portrait — Laila Lahrichi */}
          <Reveal>
            <div className="relative mx-auto h-full max-w-md overflow-hidden rounded-[1.75rem] border border-gold/35 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)] ring-1 ring-gold/10 lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[3/4] w-full min-h-[320px]">
                <Image
                  src={portraitImage}
                  alt="Laila Lahrichi, opticienne et fondatrice de Lila's Optic à Casablanca"
                  fill
                  className="object-cover object-[center_15%] sm:object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#030807] via-[#154D4B]/45 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-4 pb-8 pt-20 text-center sm:px-6 sm:pb-10">
                  <p className="font-signature text-[2.5rem] leading-none text-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-[2.85rem]">
                    Laila Lahrichi
                  </p>
                  <p className="mt-4 font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-gold/95 sm:text-[11px]">
                    Opticienne &amp; Fondatrice
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bloc inspiré carte marque : vert profond, bordure or, typo hiérarchisée */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.06}>
              <div className="overflow-hidden rounded-[1.75rem] border border-gold/30 bg-gradient-to-br from-[#0f2322] via-[#0f2e2c] to-[#081816] p-1 shadow-[0_28px_64px_-18px_rgba(0,0,0,0.55)] ring-1 ring-gold/15">
               <div className="space-y-8 px-5 py-8 sm:px-8 sm:py-10">
                  <div className="text-center lg:text-left">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.42em] text-gold sm:text-sm">
                      Lens &amp; Style
                    </p>
                    <div
                      className="mt-4 flex justify-center gap-2 text-[15px] text-gold lg:justify-start"
                      aria-hidden
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="text-gold drop-shadow-[0_0_8px_rgba(228,210,139,0.35)]"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <blockquote className="mt-8 border-l-[3px] border-gold/70 bg-black/15 py-4 pl-5 pr-3 text-left font-serif text-lg italic leading-snug text-cream/95 sm:text-xl sm:leading-relaxed">
                      <span className="font-display not-italic text-gold/80">
                        &ldquo;
                      </span>
                      Votre satisfaction compte pour nous.
                      <span className="font-display not-italic text-gold/80">
                        &rdquo;
                      </span>
                    </blockquote>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

                  <div className="space-y-6 text-[0.9375rem] leading-[1.8] text-cream/88 sm:text-base sm:leading-[1.85]">
                    <p>
                      Derrière{" "}
                      <strong className="font-semibold text-cream">
                        {site.name}
                      </strong>
                      , une vision claire : allier{" "}
                      <strong className="font-semibold text-cream">
                        expertise d&apos;opticienne
                      </strong>{" "}
                      et{" "}
                      <strong className="font-semibold text-cream">
                        élégance
                      </strong>
                      . Depuis plus de{" "}
                      <strong className="font-semibold text-gold/95">
                        {site.experienceYears} ans
                      </strong>
                      , nous vous accueillons à Aïn Sebaâ avec la même
                      exigence que sur nos montures — conseil sur mesure, écoute
                      et transparence.
                    </p>
                  </div>

                  <ul className="space-y-4 text-[0.9375rem] leading-relaxed text-cream/82 sm:text-base">
                    <li className="flex gap-3.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(228,210,139,0.5)]"
                        aria-hidden
                      />
                      <span>
                        Visagisme, verres progressifs et confort écran : un
                        accompagnement personnalisé à chaque visite.
                      </span>
                    </li>
                    <li className="flex gap-3.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(228,210,139,0.5)]"
                        aria-hidden
                      />
                      <span>
                        Lunettes de vue, de soleil et lentilles : une sélection
                        au service de votre santé visuelle.
                      </span>
                    </li>
                    <li className="flex gap-3.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(228,210,139,0.5)]"
                        aria-hidden
                      />
                      <span>
                        Une boutique où l&apos;on prend le temps — votre
                        confiance est notre priorité.
                      </span>
                    </li>
                  </ul>

                  <p className="text-center text-sm text-cream/70 sm:text-left">
                    Découvrez nos{" "}
                    <a
                      href="#services"
                      className="font-medium text-gold underline-offset-[5px] transition-colors hover:text-gold-hover hover:underline"
                    >
                      services
                    </a>{" "}
                    et notre{" "}
                    <a
                      href="#expertise"
                      className="font-medium text-gold underline-offset-[5px] transition-colors hover:text-gold-hover hover:underline"
                    >
                      expertise
                    </a>
                    .
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
