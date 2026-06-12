# TASKS.md

# Roadmap

## Stage 0 — Project foundation — complete

- [x] `AGENTS.md`
- [x] `PROJECT_BRIEF.md`
- [x] `CONTENT_MAP.md`
- [x] `DESIGN_SYSTEM.md`
- [x] `TASKS.md`
- [x] `README.md`
- [x] Локальные skills

## Stage 1 — Next.js landing skeleton — complete

- [x] `package.json`
- [x] `tsconfig.json`
- [x] `next.config.ts`
- [x] `postcss.config.mjs`
- [x] `eslint.config.mjs`
- [x] `src/app/page.tsx`
- [x] `src/app/layout.tsx`
- [x] `src/app/globals.css`
- [x] Базовая структура `src/components`
- [x] `src/components/sections`
- [x] `src/components/ui`
- [x] `src/data/siteContent.ts`
- [x] Базовые типы контента
- [x] Подключение Tailwind CSS
- [x] `npm install`
- [x] `npm run lint`
- [x] `npm run build`

## Stage 2 — Landing sections polish / visual improvement — complete

- [x] Улучшить Hero и первый экран.
- [x] Доработать Services cards.
- [x] Доработать Target Audience layout.
- [x] Усилить Pricing cards и CTA.
- [x] Привести Portfolio к более убедительной подаче.
- [x] Улучшить Process timeline.
- [x] Доработать Why Us.
- [x] Усилить Final CTA.
- [x] Проверить mobile spacing и переносы текста.

## Stage 3 — Contacts / CTA setup, SEO and deployment preparation — complete

- [x] Централизовать контакты в `src/data/siteContent.ts`.
- [x] Заменить старые CTA placeholders на `contacts.telegramUrl`.
- [x] Добавить favicon/logo placeholder.
- [x] Расширить SEO metadata.
- [x] Проверить Open Graph metadata.
- [x] Подготовить Vercel deployment checklist.
- [x] Проверить финальные CTA и контактные сценарии.
- [x] Выполнить `npm run lint`.
- [x] Выполнить `npm run build`.
- [x] Проверить локальную страницу через HTTP.

## Stage 4 — Manual QA, real contact replacement, final mobile review and deploy preparation — complete

- [x] Заменить старый Telegram placeholder на реальный Telegram.
- [x] Оставить `TODO_REPLACE_EMAIL` до появления рабочего email.
- [x] Заменить старый phone placeholder на реальный телефон.
- [x] Проверить все CTA перед показом клиентам.
- [x] Проверить SEO metadata / Open Graph на отсутствие фейковых доменов.
- [x] Провести финальную чистку текста и TSX-форматирования.
- [x] Выполнить `npm run lint`.
- [x] Выполнить `npm run build`.
- [x] Проверить локально `/` и `/icon.svg` через HTTP.

## Stage 4.1 — Subtle motion and interaction polish — complete

- [x] Добавить мягкие hover-состояния для карточек.
- [x] Добавить fade-up появление карточек.
- [x] Добавить subtle stagger delay для карточных сеток.
- [x] Добавить soft floating motion в hero visual.
- [x] Улучшить hover/focus состояния CTA-кнопок.
- [x] Усилить Business pricing package без агрессивного glow.
- [x] Добавить `prefers-reduced-motion` fallback.
- [x] Выполнить `npm run lint`.
- [x] Выполнить `npm run build`.

## Stage 4.2 — Global spacing, copy cleanup and real logo integration — complete

- [x] Добавить реальный логотип SiteBrain в `public/brand/sitebrain-logo.jpg`.
- [x] Подключить логотип в `Header.tsx` через `next/image`.
- [x] Глобально уменьшить вертикальные padding секций.
- [x] Сделать Target Audience → Pricing заметно плотнее.
- [x] Сократить тексты в Hero, Services, Pricing, Portfolio, Process, Why Us и Final CTA.
- [x] Сохранить анимации Stage 4.1, но сделать glow/floating мягче.
- [x] Оставить реальные контакты без изменений.
- [x] Выполнить `npm run lint`.
- [x] Выполнить `npm run build`.
- [x] Проверить локально `/`, `/icon.svg` и `/brand/sitebrain-logo.jpg` через HTTP.

## Stage 5 — Vercel deploy, live URL smoke test, GitHub/Vercel production verification

- [ ] Push to GitHub.
- [ ] Import project in Vercel.
- [ ] Deploy production build.
- [ ] Проверить live URL.
- [ ] Проверить CTA на live URL.
- [ ] Проверить mobile layout на live URL.
- [ ] Проверить favicon и metadata на live URL.
- [ ] Заменить `TODO_REPLACE_EMAIL`, когда появится рабочий email.
