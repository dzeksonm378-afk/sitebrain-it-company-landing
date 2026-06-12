import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`interactive-card animate-fade-up rounded-[var(--radius-card)] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
