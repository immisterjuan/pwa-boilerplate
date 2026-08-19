# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project overview

`pwa-boilerplate` is a single-page Progressive Web App boilerplate built with:

- **Vite** — build tool and dev server
- **React 18 + TypeScript** — UI and type safety
- **Tailwind CSS** — utility-first styling
- **Material UI (MUI)** — component library
- **vite-plugin-pwa** — service worker, manifest, offline caching

It is meant to be used as a starting point for new web apps that can also be installed as standalone (mobile/desktop) apps.

## Project structure

```
src/
  App.tsx           # Root component
  main.tsx          # Entry point; sets up MUI theme and registers the service worker
  index.css         # Tailwind entry point / global styles
  components/
    common/         # Shared, generic/reusable UI components
    pages/          # Route-level / page components
    shared/         # Shared feature-specific components
  helper/           # Utility/helper functions
  hooks/            # Custom React hooks
public/             # Static assets, icons, manifest-referenced files
vite.config.ts      # Vite + PWA plugin configuration (manifest, caching strategies)
```

`components/common`, `components/pages`, `components/shared`, `helper`, and `hooks` currently exist as empty placeholder directories — put new code in the directory that matches its purpose.

## Commands

Run these from the repository root.

| Purpose        | Command           |
|----------------|-------------------|
| Install deps   | `npm install`     |
| Dev server     | `npm run dev`     |
| Type-check + build | `npm run build` |
| Preview build  | `npm run preview` |
| Lint           | `npm run lint`    |

There is no test suite configured yet (`npm test` is a placeholder that exits with an error). Do not add a testing framework unless explicitly asked.

## Conventions

- Use TypeScript with strict mode; the `tsconfig.json` has `strict`, `noUnusedLocals`, and `noUnusedParameters` enabled — keep code compliant.
- Use functional React components and hooks (no class components).
- Style with Tailwind utility classes; use MUI components for structured UI elements (buttons, containers, typography, etc.) and combine with Tailwind via `className`.
- Follow the ESLint config in `eslint.config.js` (`@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh` rules). Run `npm run lint` before finishing a task that touches `.ts`/`.tsx` files.
- Keep the service worker / PWA manifest configuration in `vite.config.ts` in sync with any changes to icons or offline-caching behavior in `public/`.

## Before finishing a task

1. Run `npm run lint` for any TypeScript/React changes.
2. Run `npm run build` if changes could affect type-checking or the production build.
3. Do not commit `dist/`, `dev-dist/`, or `node_modules/` (already gitignored).
