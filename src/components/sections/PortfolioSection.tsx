import { siteContent } from "@/data/siteContent";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function PortfolioSection() {
  return (
    <Section
      id="portfolio"
      eyebrow="Портфолио"
      title={siteContent.portfolioSection.title}
      description={siteContent.portfolioSection.text}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.portfolioItems.map((item, index) => (
          <Card
            key={item.title}
            className={`motion-delay-${(index % 6) + 1} ${index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
          >
            <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              {item.type}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.focus.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full bg-black/20 px-3 py-1 text-xs text-[var(--text-soft)]"
                >
                  {focus}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
