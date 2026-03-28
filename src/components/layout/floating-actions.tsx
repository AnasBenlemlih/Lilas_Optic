"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Bonjour Lila's Optic, je souhaite prendre des informations."
)}`;

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <motion.a
        href={`tel:${site.phoneTel}`}
        aria-label="Appeler la boutique"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-laurel/50 text-gold shadow-xl shadow-black/35 backdrop-blur-md transition-colors hover:border-gold/55 hover:bg-laurel/70 hover:text-cream"
      >
        <Phone className="h-5 w-5" strokeWidth={1.75} />
      </motion.a>
      <motion.a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.08 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-amulet text-white shadow-xl shadow-black/35 transition-colors hover:bg-laurel hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
      </motion.a>
    </div>
  );
}
