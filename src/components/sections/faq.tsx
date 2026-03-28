"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const faqs = [
  {
    q: "Quels types de lunettes proposez-vous ?",
    a: "Nous proposons des lunettes de vue avec verres correcteurs sur mesure, des lunettes de soleil avec protection UV renforcée, ainsi qu’un choix de montures tendance et intemporelles. Chaque projet est discuté en boutique pour allier correction optique, confort et style.",
  },
  {
    q: "Faites-vous des lentilles ?",
    a: "Oui : nous réalisons l’adaptation des lentilles de contact (souples, journalières, mensuelles), avec essai et suivi. Nous vous recommandons aussi les produits d’entretien adaptés pour préserver votre santé visuelle.",
  },
  {
    q: "Travaillez-vous avec les verres correcteurs ?",
    a: "Absolument. Nous travaillons avec des verres unifocaux, progressifs, anti-lumière bleue et photochromiques, selon votre prescription et vos habitudes — écrans, conduite, lecture, sport.",
  },
  {
    q: "Comment vous contacter ?",
    a: "Appelez-nous au 06 12 16 36 36, écrivez-nous sur WhatsApp, passez sur notre page contact ou rendez-vous directement à la boutique à Aïn Sebaâ. Nous répondons avec plaisir à vos questions.",
  },
  {
    q: "Où êtes-vous situés à Casablanca ?",
    a: "Nous sommes en face de 2M, boulevard des Troènes, Résidence Jardins de Ain Sebaa N°4 — 20250 Casablanca. Un lien Google Maps est disponible sur cette page pour faciliter votre trajet.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-28 border-t border-border-subtle bg-night-blue/20 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Questions fréquentes
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
            Parce que choisir ses lunettes soulève des questions
          </h2>
          <p className="mt-4 text-cream-muted">
            Retrouvez ici les réponses aux demandes les plus courantes sur
            notre centre optique à Casablanca. Pour un cas précis,{" "}
            <a href="/contact" className="text-gold underline-offset-4 hover:underline">
              écrivez-nous
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated/90 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-cream transition-colors hover:bg-night-blue/40"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="border-t border-border-subtle px-5 pb-5 pt-0 text-sm leading-relaxed text-cream-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
