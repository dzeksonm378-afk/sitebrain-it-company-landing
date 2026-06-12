import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-card)] px-5 py-3 text-sm font-semibold transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:translate-y-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-[#061015] shadow-[0_14px_42px_rgba(35,199,232,0.22)] hover:-translate-y-0.5 hover:bg-[#6adcf0] hover:shadow-[0_18px_52px_rgba(35,199,232,0.28)]",
  secondary:
    "border border-white/15 bg-white/[0.045] text-[var(--text)] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.075] hover:shadow-[0_14px_44px_rgba(0,0,0,0.18)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
