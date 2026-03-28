"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

const tiles = [
  {
    src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80",
    alt: "Lunettes tendance et monture optique — inspiration style Lila's Optic",
  },
  {
    src: "https://images.unsplash.com/photo-1509695507492-924f7cb5c8e4?auto=format&fit=crop&w=800&q=80",
    alt: "Détail verres et monture — expertise opticien Casablanca",
  },
  {
    src: "https://images.unsplash.com/photo-1591076482160-42ce6f69f306?auto=format&fit=crop&w=800&q=80",
    alt: "Showroom optique moderne — boutique lunettes Casablanca",
  },
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    alt: "Sélection de lunettes de vue — optique Aïn Sebaa",
  },
  {
    src: "https://images.unsplash.com/photo-1513677784618-e35a7c90e2a7?auto=format&fit=crop&w=800&q=80",
    alt: "Lunettes de soleil premium — soleil et protection visuelle",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    alt: "Conseil en lentilles et santé visuelle — centre optique",
  },
];

export function Social() {
  return (
    <section
      id="inspiration"
      className="scroll-mt-28 border-t border-border-subtle bg-laurel/12 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Réseaux &amp; inspiration
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
              Suivez l&apos;univers Lila&apos;s Optic
            </h2>
            <p className="mt-4 text-cream-muted">
              Coulisses, nouveautés, conseils santé visuelle et tendances
              lunettes : retrouvez-nous sur Instagram et Threads pour ne rien
              manquer de notre actualité à Casablanca.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated px-5 py-2.5 text-sm text-cream transition-colors hover:border-gold/40 hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={site.social.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold/15"
            >
              Threads
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {tiles.map((tile, i) => (
            <Reveal key={tile.src} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border-subtle bg-amulet/20"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-cream/90 opacity-0 transition-opacity group-hover:opacity-100">
                  @lilas_optic
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cream-muted">
          Les visuels ci-dessus sont des illustrations premium — remplacez-les
          par vos photos Instagram pour un feed 100 % authentique.{" "}
          <Link href="#localisation" className="text-gold underline-offset-4 hover:underline">
            Nous rendre visite à Aïn Sebaâ
          </Link>
        </p>
      </div>
    </section>
  );
}
