"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/services-data";

/** 6 cartes = grille 2×3 ; le reste en grille identique en dessous */
const FEATURED_COUNT = 6;

const objectFocus: Record<
  NonNullable<(typeof services)[number]["imageFocus"]>,
  string
> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
};

function ServiceImageCard({
  item,
  index,
  priority,
}: {
  item: (typeof services)[number];
  index: number;
  priority: boolean;
}) {
  const focus = item.imageFocus ?? "center";
  const objectPos = objectFocus[focus];

  return (
    <Reveal delay={Math.min(index * 0.04, 0.35)}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gold/25 shadow-lg shadow-black/35"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          quality={88}
          className={`object-cover ${objectPos} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          priority={priority}
        />

        {/* Bandeau bas ~30–36 % : le reste de la carte reste sans voile vert */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] min-h-[7rem] max-h-[10.5rem] bg-gradient-to-t from-[#154D4B] from-0% via-[#154D4B]/82 via-[45%] to-transparent sm:max-h-[11.5rem]"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start px-4 pb-4 pt-6 text-left sm:px-5 sm:pb-5">
          <h3 className="max-w-[98%] font-serif text-base font-medium leading-tight tracking-tight text-gold sm:text-lg md:text-xl">
            {item.title}
          </h3>
          <div
            className="mt-2 h-px w-10 shrink-0 bg-gold/90 sm:w-11"
            aria-hidden
          />
          <p className="mt-2 line-clamp-3 max-w-[98%] text-[11px] leading-snug text-white/95 sm:text-xs sm:leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Services() {
  const featured = services.slice(0, FEATURED_COUNT);
  const more = services.slice(FEATURED_COUNT);

  return (
    <section
      id="services"
      className="scroll-mt-28 border-t border-border-subtle bg-[#154D4B] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Univers optique
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
            Services &amp; catégories
          </h2>
          <p className="mt-4 text-cream-muted">
            De la lunette de vue aux lentilles de contact, en passant par le
            sur-mesure et l&apos;audition : une offre complète pour votre regard
            et votre confort, au cœur de notre{" "}
            <a
              href="#localisation"
              className="text-gold underline-offset-4 hover:underline"
            >
              boutique optique à Aïn Sebaa
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <ServiceImageCard
              key={item.title}
              item={item}
              index={i}
              priority={i < 3}
            />
          ))}
        </div>

        {more.length > 0 && (
          <>
            <Reveal className="mx-auto mt-20 max-w-xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Au-delà de l&apos;essentiel
              </p>
              <h3 className="mt-2 font-serif text-2xl text-cream sm:text-3xl">
                Offres, enfants &amp; expertises
              </h3>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {more.map((item, i) => (
                <ServiceImageCard
                  key={item.title}
                  item={item}
                  index={i + featured.length}
                  priority={false}
                />
              ))}
            </div>
          </>
        )}

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-cream-muted">
          Besoin d&apos;un avis sur des{" "}
          <strong className="font-medium text-cream">verres progressifs</strong>{" "}
          ou un{" "}
          <strong className="font-medium text-cream">visagisme</strong> ?{" "}
          <a
            href="/contact"
            className="text-gold underline-offset-4 hover:underline"
          >
            Écrivez-nous
          </a>{" "}
          ou consultez notre{" "}
          <a
            href="#expertise"
            className="text-gold underline-offset-4 hover:underline"
          >
            expertise santé visuelle
          </a>
          .
        </p>
      </div>
    </section>
  );
}
