# SiteBrain | IT Company Group

Next.js лендинг для мини IT-студии, подготовленный к реальному показу клиентам и будущему деплою на Vercel.

## Что это за проект

**SiteBrain | IT Company Group** — будущий landing page для продажи сайтов, CRM-приложений, Telegram-ботов и AI-автоматизации для бизнеса.

Главный оффер:

> Сайты, CRM, Telegram-боты и AI-автоматизация для бизнеса

Сайт должен работать как продающая презентация: его можно отправить потенциальному клиенту после звонка или переписки, чтобы человек быстро посмотрел услуги, пакеты и примеры.

## Цель

Создать чистый современный B2B лендинг, который объясняет, чем занимается студия, кому помогает, какие есть пакеты и как перейти к обсуждению проекта.

## Стек

Текущий стек:

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Vercel
- Без базы данных в v1
- Без сложного backend в v1
- Без личных кабинетов в v1

## Установка зависимостей

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

После запуска откройте:

```txt
http://localhost:3000
```

## Production build

```bash
npm run build
```

## Проверки

```bash
npm run lint
npm run build
```

## Контент

Контент лендинга должен храниться отдельно от компонентов.

Основной файл контента:

```txt
src/data/siteContent.ts
```

Первый черновик контента описан в:

```txt
CONTENT_MAP.md
```

CTA и контакты тоже хранятся в `src/data/siteContent.ts`.

Контакты находятся в объекте `contacts`:

```ts
contacts: {
  telegramLabel: "Написать в Telegram",
  telegramUrl: "https://t.me/itttt211",
  email: "TODO_REPLACE_EMAIL",
  phone: "+7 952 212-61-93",
}
```

Перед реальным показом или деплоем нужно заменить `email` на рабочий адрес, когда он будет готов.

## Что входит в v1

- Одностраничный лендинг.
- Hero section.
- Services section.
- Target Audience section.
- Pricing section.
- Portfolio / examples section.
- Process section.
- Why Us section.
- Final CTA.
- Адаптивная верстка.
- Контент в data-файле.
- Подготовка к деплою на Vercel.

## Что не входит в v1

- Backend.
- База данных.
- Авторизация.
- Личный кабинет.
- Оплата.
- Админ-панель.
- Серверная обработка формы заявки.
- Полноценная CRM внутри лендинга.
- Сложные анимации.

## Документы фундамента

- `AGENTS.md` — правила AI-разработки в проекте.
- `PROJECT_BRIEF.md` — бизнесовый и продуктовый бриф.
- `CONTENT_MAP.md` — карта контента будущего лендинга.
- `DESIGN_SYSTEM.md` — визуальное направление и дизайн-токены.
- `TASKS.md` — дорожная карта по этапам.
- `skills/` — локальные project skills для будущей AI-работы.

## Структура приложения

- `src/app/layout.tsx` — базовый layout и metadata.
- `src/app/page.tsx` — сборка секций лендинга.
- `src/app/icon.svg` — placeholder favicon/logo.
- `src/app/globals.css` — базовый тёмный стиль и дизайн-токены.
- `src/components/sections/` — секции лендинга.
- `src/components/ui/` — простые reusable UI-компоненты.
- `src/data/siteContent.ts` — единый источник текста, тарифов, кейсов, CTA и typed-структур.
- `public/brand/sitebrain-logo.jpg` — реальный логотип SiteBrain для header.

## Деплой на Vercel

Stage 5 пока не выполнялся. Перед деплоем проект нужно отправить в GitHub, импортировать в Vercel и проверить live URL.

Для v1 не нужны backend, database, auth, server actions и env variables. Email `TODO_REPLACE_EMAIL` может оставаться в `src/data/siteContent.ts` до появления рабочего адреса, но его нужно заменить перед полноценным публичным использованием.

Перед деплоем проверьте:

- Telegram URL уже установлен: `https://t.me/itttt211`;
- phone уже установлен и отображается: `+7 952 212-61-93`;
- заменить email `TODO_REPLACE_EMAIL`, когда будет готов рабочий email;
- metadata в `src/app/layout.tsx`;
- favicon placeholder в `src/app/icon.svg`;
- `package-lock.json` присутствует;
- `.gitignore` исключает `.next/`, `node_modules/`, `.env`, `.env*.local`, `.vercel/` и логи;
- `npm run lint`;
- `npm run build`;
- check mobile layout;
- check CTA clicks;
- deploy to Vercel.

## Где менять контакты

```txt
src/data/siteContent.ts → contacts
```

## Следующие шаги

Рекомендуемый следующий этап:

**Stage 5 — Vercel deploy, live URL smoke test, GitHub/Vercel production verification.**
