"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-bg-deep/85 py-3 shadow-lg shadow-black/25 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative shrink-0 outline-offset-4 transition-opacity hover:opacity-90 focus-visible:opacity-90"
        >
          <Image
            src="/images/LOGOpng.png"
            alt={`${site.name} — Casablanca, Aïn Sebaâ`}
            width={500}
            height={100}
            priority
            sizes="(max-width: 640px) min(200px, 52vw), (max-width: 1024px) 240px, 280px"
            className="h-8 w-auto max-w-[min(200px,52vw)] object-contain object-left sm:h-10 sm:max-w-[240px] md:h-11 lg:h-12 lg:max-w-[280px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream-muted transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="/contact" variant="primary" className="!py-2.5 !text-xs">
            Contact
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="rounded-full border border-border-subtle p-2.5 text-cream lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border-subtle bg-bg-deep/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-cream transition-colors hover:bg-laurel/30 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <ButtonLink
                href="/contact"
                variant="primary"
                className="mt-2 justify-center"
                onClick={() => setOpen(false)}
              >
                Contact
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
