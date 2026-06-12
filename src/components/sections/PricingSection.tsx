import { siteContent } from "@/data/siteContent";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function PricingSection() {
  return (
    <Section
      id="pricing"
      spacing="compact"
      eyebrow="Пакеты"
      title={siteContent.pricingSection.title}
      description={siteContent.pricingSection.text}
    >
      <div className="grid items-start gap-3 lg:grid-cols-3">
        {siteContent.pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.highlighted
                ? "motion-delay-2 relative border-[var(--accent)] bg-[linear-gradient(180deg,var(--accent-soft),rgba(255,255,255,0.045))] shadow-[0_28px_90px_rgba(35,199,232,0.1)] ring-1 ring-[rgba(35,199,232,0.12)] hover:shadow-[0_34px_110px_rgba(35,199,232,0.16)]"
                : plan.name === "Pro"
                  ? "motion-delay-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))]"
                  : "motion-delay-1"
            }
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                {plan.badge}
              </span>
              {plan.highlighted && (
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-[#061015]">
                  рекомендуем
                </span>
              )}
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">{plan.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              {plan.description}
            </p>
            <p className="mt-5 text-3xl font-semibold text-[var(--text)]">{plan.price}</p>
            <p className="mt-2 text-sm font-medium text-[var(--text-soft)]">{plan.timeframe}</p>
            {plan.note && (
              <p className="mt-4 rounded-[var(--radius-card)] border border-white/10 bg-black/20 p-3 text-sm leading-6 text-[var(--text-soft)]">
                {plan.note}
              </p>
            )}
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-[var(--text-soft)]">
              {plan.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--success-accent)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
