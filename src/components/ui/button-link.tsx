import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-bg-deep shadow-lg shadow-black/25 ring-1 ring-gold/30 hover:bg-gold-hover hover:shadow-gold/20 hover:ring-bg-deep/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
  secondary:
    "border border-gold/25 bg-laurel/20 text-cream backdrop-blur-sm hover:border-gold/45 hover:bg-laurel/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60",
  ghost:
    "border border-transparent text-cream-muted hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70",
};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  variant?: Variant;
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
