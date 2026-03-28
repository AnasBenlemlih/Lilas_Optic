import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-bg-deep shadow-lg shadow-gold/20 hover:bg-gold-hover hover:shadow-gold/30",
  secondary:
    "border border-border-subtle bg-night-blue-soft/80 text-cream backdrop-blur-sm hover:border-gold/40 hover:bg-night-blue-soft",
  ghost: "text-cream-muted hover:text-gold border border-transparent",
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
