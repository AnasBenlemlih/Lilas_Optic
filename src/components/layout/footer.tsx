import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import { site, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-night-blue/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-cream">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-muted">
              {site.slogan}
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-gold/80">
              +{site.experienceYears} ans d&apos;expertise
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-muted transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-cream-muted transition-colors hover:text-gold"
                >
                  Contact & rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-cream-muted">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>
                  {site.address.streetAddress}
                  <br />
                  {site.address.postalCode} {site.address.addressLocality},{" "}
                  {site.address.addressCountry === "MA" ? "Maroc" : ""}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold/70" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Horaires
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-cream-muted">
              {site.openingHours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span className="text-cream/90">{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs italic text-cream-muted/70">
              Horaires indicatifs — modifiables selon la saison.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border-subtle p-2.5 text-cream transition-colors hover:border-gold/40 hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border-subtle px-3 py-2 text-xs font-medium uppercase tracking-wide text-cream transition-colors hover:border-gold/40 hover:text-gold"
              >
                Threads
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-xs text-cream-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Opticien à Casablanca —
            boutique optique Aïn Sebaâ.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-gold"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="transition-colors hover:text-gold"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
