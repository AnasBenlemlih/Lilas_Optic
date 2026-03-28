"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/services-data";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 border-t border-border-subtle bg-amulet/14 py-24 sm:py-32"
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
            <a href="#localisation" className="text-gold underline-offset-4 hover:underline">
              boutique optique à Aïn Sebaa
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.04, 0.35)}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-laurel/18 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-gold/35 hover:bg-laurel/28"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-bg-deep/60 text-gold transition-colors group-hover:border-gold/45 group-hover:bg-bg-deep/85">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-cream">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-muted">
                  {item.description}
                </p>
                <div className="mt-5 h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
              </motion.article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-cream-muted">
          Besoin d&apos;un avis sur des{" "}
          <strong className="font-medium text-cream">verres progressifs</strong>{" "}
          ou un{" "}
          <strong className="font-medium text-cream">visagisme</strong> ?{" "}
          <a href="/contact" className="text-gold underline-offset-4 hover:underline">
            Écrivez-nous
          </a>{" "}
          ou consultez notre{" "}
          <a href="#expertise" className="text-gold underline-offset-4 hover:underline">
            expertise santé visuelle
          </a>
          .
        </p>
      </div>
    </section>
  );
}
