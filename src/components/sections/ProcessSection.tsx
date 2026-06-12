import { siteContent } from "@/data/siteContent";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function ProcessSection() {
  return (
    <Section
      id="process"
      eyebrow="Процесс"
      title={siteContent.processSection.title}
      description={siteContent.processSection.text}
    >
      <div className="relative grid gap-2.5 before:absolute before:left-6 before:top-6 before:hidden before:h-[calc(100%-3rem)] before:w-px before:bg-white/10 sm:before:block">
        {siteContent.processSteps.map((step, index) => (
          <div key={step.title} className="relative grid gap-4 sm:grid-cols-[48px_1fr]">
            <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[var(--background)] text-sm font-semibold text-[var(--accent)]">
              {index + 1}
            </div>
            <Card className={`motion-delay-${Math.min(index + 1, 7)} p-4 hover:border-white/20 sm:p-5`}>
              <h3 className="text-lg font-semibold text-[var(--text)]">{step.title}</h3>
              <p className="mt-2 leading-6 text-[var(--text-muted)]">{step.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
