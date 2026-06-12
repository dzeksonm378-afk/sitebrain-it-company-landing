import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function FinalCtaSection() {
  const { contacts, finalCta } = siteContent;
  const phoneHref = `tel:${contacts.phone.replace(/[^\d+]/g, "")}`;

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
            <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:gap-4">
              <a
                href={phoneHref}
                className="w-fit rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-white/[0.06] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                {contacts.phone}
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" aria-hidden="true" />
              <span>Telegram — основной канал для первого сообщения.</span>
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
