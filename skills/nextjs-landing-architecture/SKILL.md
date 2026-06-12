---
name: nextjs-landing-architecture
description: Architecture rules for the SiteBrain Next.js landing. Use when creating or editing the Next.js App Router structure, TypeScript components, Tailwind styles, section composition, or src/data/siteContent.ts for this landing project.
---

# Next.js Landing Architecture

Use this skill when building the SiteBrain landing skeleton and sections.

## Stack

- Use Next.js App Router.
- Use TypeScript.
- Use Tailwind CSS.
- Prepare for Vercel deployment.

## Project Structure

Prefer this structure:

```txt
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
src/data/siteContent.ts
src/components/sections/
src/components/ui/
```

## Rules

- Keep `page.tsx` as a section composer.
- Put landing copy and repeated content in `src/data/siteContent.ts`.
- Keep sections small and readable.
- Keep shared UI primitives separate from business sections.
- Use typed data structures for content.
- Do not create backend routes unless a task explicitly asks for them.
- Do not add auth, database, payments or personal account logic in v1.
- Avoid unnecessary dependencies.

## Section Order

1. Hero
2. Services
3. Target Audience
4. Pricing
5. Portfolio
6. Process
7. Why Us
8. Final CTA

