import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  contentClassName?: string;
  spacing?: "hero" | "normal" | "compact";
};

const spacingClasses = {
  hero: "scroll-mt-24 pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-20 lg:pb-16",
  normal: "scroll-mt-24 py-10 sm:py-12 lg:py-16",
  compact: "scroll-mt-24 py-8 sm:py-10 lg:py-12",
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
  spacing = "normal",
  ...props
}: SectionProps) {
  const headingId = id && title ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative ${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${contentClassName}`}>
        {(eyebrow || title || description) && (
          <div className="mb-6 max-w-3xl sm:mb-8">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="text-3xl font-semibold text-balance text-[var(--text)] sm:text-4xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
