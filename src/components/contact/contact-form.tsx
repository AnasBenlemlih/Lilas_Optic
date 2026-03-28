"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const waHref = () => {
    const text = [
      `Bonjour ${site.name},`,
      name.trim() ? `Je m'appelle ${name.trim()}.` : "",
      message.trim() || "Je souhaite obtenir des informations.",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="rounded-3xl border border-border-subtle bg-bg-elevated/90 p-8 shadow-xl shadow-black/30 backdrop-blur-md sm:p-10">
      <h2 className="font-serif text-2xl text-cream">Message WhatsApp</h2>
      <p className="mt-2 text-sm text-cream-muted">
        Renseignez votre prénom et votre message : nous vous redirigeons vers
        WhatsApp avec le texte prêt à envoyer.
      </p>
      <form
        className="mt-8 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(waHref(), "_blank", "noopener,noreferrer");
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium uppercase tracking-wider text-cream-muted"
          >
            Prénom ou nom
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-border-subtle bg-night-blue/50 px-4 py-3 text-cream placeholder:text-cream-muted/50 outline-none ring-gold/0 transition-[box-shadow,border-color] focus:border-gold/40 focus:ring-2 focus:ring-gold/20"
            placeholder="Ex. Salma"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium uppercase tracking-wider text-cream-muted"
          >
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="mt-2 w-full resize-y rounded-xl border border-border-subtle bg-night-blue/50 px-4 py-3 text-cream placeholder:text-cream-muted/50 outline-none ring-gold/0 transition-[box-shadow,border-color] focus:border-gold/40 focus:ring-2 focus:ring-gold/20"
            placeholder="Je souhaite prendre rendez-vous pour un essai de montures..."
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-colors hover:bg-[#20bd5a] sm:w-auto sm:px-10"
        >
          Continuer sur WhatsApp
        </button>
      </form>
    </div>
  );
}
