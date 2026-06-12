import { siteContent } from "@/data/siteContent";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const serviceAccents = [
  "from-cyan-400/15",
  "from-emerald-400/14",
  "from-sky-400/14",
  "from-teal-300/14",
];

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Что делаем"
      title={siteContent.servicesSection.title}
      description={siteContent.servicesSection.text}
    >
      <div className="grid gap-3 md:grid-cols-2">
        {siteContent.services.map((service, index) => (
          <Card
            key={service.title}
            className={`motion-delay-${index + 1} group flex h-full flex-col overflow-hidden bg-gradient-to-br ${serviceAccents[index]} to-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="rounded-[var(--radius-card)] border border-white/10 bg-black/20 px-3 py-2 text-sm font-semibold text-[var(--accent)]">
                0{index + 1}
              </div>
              <span className="max-w-48 text-right text-sm leading-5 text-[var(--text-muted)]">
                {service.benefit}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[var(--text)]">{service.title}</h3>
            <p className="mt-3 leading-7 text-[var(--text-muted)]">{service.description}</p>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--text-soft)] sm:grid-cols-2">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
