"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";

const heroImage = "/images/LOGO.png";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden pt-28"
    >
      <div className="absolute inset-0 bg-gradient-mesh" />
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={heroImage}
          alt="Monture optique élégante — lunettes premium et conseil opticien à Casablanca"
          fill
          priority
          className="object-cover opacity-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/80 via-bg-deep/70 to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-radial-gold" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 pb-24 pt-12 sm:px-6 lg:min-h-[calc(100svh-5rem)] lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Centre optique Casablanca · Aïn Sebaâ
          </div>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-6xl xl:text-[3.5rem]">
            <span className="block text-gold">{site.name}</span>
            <span className="mt-2 block text-cream">
              Offrez à vos yeux l’expertise qu’ils méritent.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-muted sm:text-xl">
          Chez Lila’s Optic, nous sélectionnons pour vous des lunettes et lentilles alliant confort, qualité et élégance.
          Profitez d’un accompagnement personnalisé pour trouver la solution visuelle idéale, adaptée à votre style et à vos besoins.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="primary" className="group">
              Prendre contact
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              Voir la collection
            </ButtonLink>
          </div>
          <p className="mt-10 text-sm text-cream-muted/80">
            En savoir plus sur notre{" "}
            <Link href="#a-propos" className="text-gold underline-offset-4 hover:underline">
              expertise en optique à Casablanca
            </Link>{" "}
            ou explorez nos{" "}
            <Link href="#services" className="text-gold underline-offset-4 hover:underline">
              services et montures tendance
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
