import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function TargetAudienceSection() {
  return (
    <Section
      id="target-audience"
      spacing="compact"
      eyebrow="Кому подойдёт"
      title={siteContent.targetAudienceSection.title}
      description={siteContent.targetAudienceSection.text}
    >
      <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="premium-panel rounded-[var(--radius-card)] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Реальный малый и средний бизнес
          </p>
          <p className="mt-3 text-2xl font-semibold leading-snug text-[var(--text)]">
            Для тех, кто хочет меньше терять заявки и быстрее навести порядок.
          </p>
          <p className="mt-3 leading-7 text-[var(--text-muted)]">
            Начните с лендинга, затем добавьте бота, CRM или AI.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {siteContent.targetAudiences.map((audience) => (
            <span
              key={audience.label}
              className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm leading-6 text-[var(--text-soft)]"
            >
              {audience.label}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
