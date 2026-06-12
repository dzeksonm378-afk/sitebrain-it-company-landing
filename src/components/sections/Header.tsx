import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { ButtonLink } from "@/components/ui/ButtonLink";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Кейсы", href: "#portfolio" },
  { label: "Процесс", href: "#process" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,10,15,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="group flex min-w-0 items-center gap-2"
          aria-label="SiteBrain, к началу страницы"
        >
          <Image
            src="/brand/sitebrain-logo.jpg"
            alt="SiteBrain"
            width={184}
            height={62}
            className="h-8 w-auto rounded-[6px] object-contain sm:h-9"
            priority
          />
          <span className="hidden text-xs font-medium text-[var(--text-muted)] lg:inline">
            IT Company Group
          </span>
        </a>

        <nav className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--text-muted)] sm:order-none sm:w-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href={siteContent.contacts.telegramUrl}
          className="min-h-10 px-4 py-2"
          ariaLabel="Обсудить проект в Telegram"
        >
          Обсудить проект
        </ButtonLink>
      </div>
    </header>
  );
}
