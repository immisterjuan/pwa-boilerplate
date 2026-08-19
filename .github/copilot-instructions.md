# GitHub Copilot Instructions

This repository, `pwa-boilerplate`, is a Vite + React + TypeScript + Tailwind CSS + Material UI (MUI) Progressive Web App boilerplate, using `vite-plugin-pwa` for offline support and installability.

## Stack

- Vite (build tool / dev server)
- React 18 with TypeScript (strict mode)
- Tailwind CSS for utility styling
- Material UI (MUI) for components
- vite-plugin-pwa for the service worker and web app manifest

## Where things live

- `src/App.tsx` — root component
- `src/main.tsx` — app entry point; configures the MUI theme and registers the service worker
- `src/components/common` — shared, generic UI components
- `src/components/pages` — page/route-level components
- `src/components/shared` — shared feature-specific components
- `src/helper` — utility/helper functions
- `src/hooks` — custom React hooks
- `vite.config.ts` — Vite config, including the PWA manifest and Workbox runtime caching rules
- `public/` — static assets referenced by the manifest (icons, etc.)

## Coding guidelines

- Write React function components with hooks; avoid class components.
- Keep TypeScript strict-mode clean — no unused locals/parameters, no implicit `any`.
- Prefer Tailwind utility classes for layout/spacing; use MUI components for interactive/structured UI elements.
- Match the existing ESLint configuration (`eslint.config.js`): `@eslint/js` recommended rules, `typescript-eslint` recommended rules, `react-hooks` and `react-refresh` plugin rules.
- Place new files in the directory that matches their purpose (see structure above) rather than directly under `src/`.
- When changing icons, manifest fields, or caching behavior, update `vite.config.ts` and the corresponding files in `public/` together.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — type-check (`tsc -b`) and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

There is currently no automated test suite (`npm test` is a placeholder). Do not introduce a testing framework unless explicitly requested.

## Validation expectations

- Run `npm run lint` after changes to `.ts`/`.tsx` files.
- Run `npm run build` when changes could affect type-checking or bundling.
- Never commit `dist/`, `dev-dist/`, or `node_modules/`.
