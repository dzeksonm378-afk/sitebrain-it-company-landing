import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function FinalCtaSection() {
  const { contacts, finalCta } = siteContent;

  return (
    <Section id="contact" spacing="compact">
      <Card className="premium-panel relative overflow-hidden p-5 sm:p-6 lg:p-8">
        <div className="subtle-glow absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-3xl" />
        <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              Первый шаг
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-balance text-[var(--text)] sm:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--text-soft)]">
              {finalCta.text}
            </p>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {contacts.team.map((contact) => (
                <div
                  key={contact.telegram}
                  className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] p-3 text-[var(--text-muted)]"
                >
                  <p className="font-semibold text-[var(--text)]">
                    {contact.name}
                    <span className="ml-2 font-medium text-[var(--accent)]">
                      {contact.role}
                    </span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    <a
                      href={contact.telegramUrl}
                      className="transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contact.telegram}
                    </a>
                    <a
                      href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                      className="transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ButtonLink href={finalCta.cta.href} className="w-full sm:w-auto">
            {finalCta.cta.label}
          </ButtonLink>
        </div>
      </Card>
    </Section>
  );
}
