import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <Section
      id="hero"
      spacing="hero"
      className="overflow-hidden"
      contentClassName="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="animate-fade-up relative z-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-[var(--text-soft)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          <span>{hero.badge}</span>
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-balance text-[var(--text)] sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)] sm:text-lg">
          {hero.subtitle}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {hero.results.map((result) => (
            <div
              key={result.label}
              className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] p-3"
            >
              <p className="text-sm font-semibold text-[var(--text)]">{result.label}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{result.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-soft-float">
        <Card className="premium-panel motion-delay-2 relative overflow-hidden p-0">
          <div className="subtle-glow absolute right-0 top-0 h-32 w-32 rounded-full bg-[var(--accent-soft)] blur-3xl" />
          <div className="relative border-b border-white/10 p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              Digital system for business
            </p>
            <div className="mt-5 grid gap-3">
              {hero.systemFlow.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-card)] border border-white/10 bg-black/20 text-sm font-semibold text-[var(--text)]">
                    {index + 1}
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                  <p className="min-w-24 text-right text-sm font-semibold text-[var(--text-soft)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-5 sm:p-6">
            <p className="text-sm font-semibold text-[var(--text)]">Что собираем в систему</p>
            <ul className="mt-4 space-y-3">
              {hero.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-soft)]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  );
}
