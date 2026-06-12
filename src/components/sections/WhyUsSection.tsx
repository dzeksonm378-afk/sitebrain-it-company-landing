import { siteContent } from "@/data/siteContent";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function WhyUsSection() {
  return (
    <Section
      id="why-us"
      eyebrow="Почему SiteBrain"
      title={siteContent.whyUsSection.title}
      description={siteContent.whyUsSection.text}
    >
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="premium-panel motion-delay-1">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Не просто исполнитель верстки
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-balance text-[var(--text)]">
            Лендинг может стать первым слоем бизнес-системы.
          </h3>
          <p className="mt-3 leading-7 text-[var(--text-muted)]">
            Запускаем понятный v1 и оставляем путь к Telegram, CRM и AI.
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {siteContent.whyUsItems.map((item, index) => (
            <Card key={item.title} className={`motion-delay-${index + 2} hover:border-white/20`}>
              <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 leading-6 text-[var(--text-muted)]">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
