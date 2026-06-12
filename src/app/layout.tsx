import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "SiteBrain | IT Company Group — сайты, CRM, Telegram-боты и AI-автоматизация",
  description:
    "Создаём сайты, CRM-приложения, Telegram-ботов и AI-автоматизацию для бизнеса. Помогаем получать заявки, вести клиентов и автоматизировать рутину.",
  keywords: [
    "сайты для бизнеса",
    "CRM приложение",
    "Telegram бот для бизнеса",
    "AI автоматизация",
    "разработка лендингов",
    "автоматизация заявок",
    "SiteBrain",
  ],
  authors: [{ name: "SiteBrain | IT Company Group" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "SiteBrain | IT Company Group — сайты, CRM, Telegram-боты и AI-автоматизация",
    description:
      "Создаём сайты, CRM-приложения, Telegram-ботов и AI-автоматизацию для бизнеса. Помогаем получать заявки, вести клиентов и автоматизировать рутину.",
    siteName: "SiteBrain | IT Company Group",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "SiteBrain | IT Company Group — сайты, CRM, Telegram-боты и AI-автоматизация",
    description:
      "Создаём сайты, CRM-приложения, Telegram-ботов и AI-автоматизацию для бизнеса. Помогаем получать заявки, вести клиентов и автоматизировать рутину.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
