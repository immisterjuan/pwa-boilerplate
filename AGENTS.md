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
  App.tsx           # Root component; defines all client-side routes (react-router-dom)
  main.tsx          # Entry point; MUI theme, BrowserRouter, service worker registration
  index.css         # Tailwind entry point / global styles
  components/
    layout/         # App shell components (AppTopBar, AppDock, AppLayout)
    common/         # Shared, generic/reusable UI components (Button, Input, Card, ...)
    pages/          # Route-level page components (Login, Dashboard, ...)
    shared/         # 📁 empty — reserved for shared feature-specific components
  helper/           # Utility/helper functions (e.g. authStorage.ts)
  hooks/            # Custom React hooks (e.g. useAuth.ts)
public/             # Static assets, icons, manifest-referenced files
vite.config.ts      # Vite + PWA plugin configuration (manifest, caching strategies)
```

## UI components & app flow

### `layout` — `src/components/layout`
- **AppTopBar** — top bar showing the app title/meta (reads `VITE_APP_NAME` by default).
- **AppDock** — bottom navigation dock wrapping the app's primary section icons (Dashboard/Account/Settings/About).
- **AppLayout** — shell combining `AppTopBar` + routed `<Outlet />` + `AppDock`; used as the parent route element for authenticated pages.

### `common` — `src/components/common`
Reusable, typed wrappers around MUI primitives — import from the barrel `components/common` (e.g. `import { Button, Input } from '../common'`):
`Card`, `Modal`, `Table` (generic `<T>`), `Alert`, `Form`, `Input`, `Button`, `Select`, `MultiSelect`.

### `pages` — `src/components/pages`
`SplashIntro`, `Registration`, `Login`, `Dashboard`, `Account`, `Settings`, `About`. Import from the barrel `components/pages`.

### App flow

```
[Splash Intro] --> [Checks for stored user data] --> [Login] --> [Dashboard]
                                     |
                   [Registration] <--┘
```

- `SplashIntro` (`/`) briefly shows a loader, checks `useAuth()`/`helper/authStorage.ts` (localStorage-backed), then redirects to `/dashboard` if a user is stored, otherwise `/login`.
- `Login` (`/login`) and `Registration` (`/register`) both call `useAuth().login(user)` (storing the user) and navigate to `/dashboard`. They link to each other.
- `Dashboard` (`/dashboard`), `Account` (`/account`), `Settings` (`/settings`), `About` (`/about`) are nested under the `AppLayout` route in `App.tsx` and require `isAuthenticated`; unauthenticated visits redirect to `/login`.
- Replace the localStorage-based `helper/authStorage.ts` / `hooks/useAuth.ts` with real API/session/token logic when integrating a backend — the page components only depend on the `useAuth()` contract (`user`, `isAuthenticated`, `login`, `logout`).

## Full workspace file map

Complete inventory of tracked/source files (excludes `node_modules/`, `dist/`, `dev-dist/`, `.git/`). Use this to jump straight to a file instead of searching.

```
pwa-boilerplate/
├── .github/
│   └── copilot-instructions.md   # GitHub Copilot repo-wide custom instructions
├── .env                          # ✅ committed — default env vars for all modes
├── .env.development              # ✅ committed — dev-mode env overrides
├── .env.production               # ✅ committed — production-mode env overrides
├── .env.example                  # ✅ committed — template; copy to .env.local for personal overrides
├── .gitignore
├── AGENTS.md                     # This file — agent guidance
├── README.md                     # Project overview, setup, deployment guide
├── eslint.config.js              # ESLint flat config (JS/TS/React rules)
├── index.html                    # HTML entry point; PWA meta tags, manifest link
├── package.json                  # Scripts, dependencies
├── package-lock.json
├── postcss.config.js             # PostCSS config (Tailwind + Autoprefixer)
├── tailwind.config.js             # Tailwind CSS config
├── tsconfig.json                 # Root TS config (app code, strict mode)
├── tsconfig.node.json            # TS config for Node-context files (vite.config.ts)
├── tsconfig.tsbuildinfo          # ⚙️ generated incremental build cache — do not edit
├── tsconfig.node.tsbuildinfo     # ⚙️ generated incremental build cache — do not edit
├── vite.config.ts                # Vite + vite-plugin-pwa config; loads env via loadEnv()
├── vite.config.js                # ⚙️ generated JS output of vite.config.ts — do not edit
├── vite.config.d.ts              # ⚙️ generated type declarations for vite.config.ts — do not edit
├── public/
│   ├── manifest.webmanifest      # Generated/served PWA manifest
│   └── icons/
│       ├── icon.svg              # Favicon / scalable app icon
│       ├── icon-192.png          # 192×192 app icon
│       ├── icon-512.png          # 512×512 app icon
│       └── icon-maskable-512.png # 512×512 maskable icon (Android adaptive icons)
└── src/
    ├── App.tsx                   # Root component; defines client-side routes
    ├── main.tsx                  # App entry: MUI theme, BrowserRouter, service worker registration
    ├── index.css                 # Tailwind directives + global styles
    ├── vite-env.d.ts             # Vite/TS ambient type declarations + typed ImportMetaEnv
    ├── components/
    │   ├── layout/
    │   │   ├── AppTopBar.tsx     # Top bar (app title/meta)
    │   │   ├── AppDock.tsx       # Bottom navigation dock
    │   │   ├── AppLayout.tsx     # Authenticated app shell (TopBar + Outlet + Dock)
    │   │   └── index.ts          # Barrel export
    │   ├── common/
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── Select.tsx
    │   │   ├── MultiSelect.tsx
    │   │   ├── Card.tsx
    │   │   ├── Modal.tsx
    │   │   ├── Alert.tsx
    │   │   ├── Form.tsx
    │   │   ├── Table.tsx
    │   │   └── index.ts          # Barrel export
    │   ├── pages/
    │   │   ├── SplashIntro.tsx
    │   │   ├── Login.tsx
    │   │   ├── Registration.tsx
    │   │   ├── Dashboard.tsx
    │   │   ├── Account.tsx
    │   │   ├── Settings.tsx
    │   │   ├── About.tsx
    │   │   └── index.ts          # Barrel export
    │   └── shared/                # 📁 empty — reserved for shared feature-specific components
    ├── helper/
    │   └── authStorage.ts        # localStorage-backed stored-user helper (demo auth)
    └── hooks/
        └── useAuth.ts            # Auth hook wrapping helper/authStorage.ts
```

**Notes:**
- `vite.config.js`, `vite.config.d.ts`, `tsconfig.tsbuildinfo`, and `tsconfig.node.tsbuildinfo` are build-generated artifacts (from `tsc -b` compiling `vite.config.ts`). Treat `vite.config.ts` as the source of truth; regenerate the others via `npm run build` rather than hand-editing.
- `helper/authStorage.ts` and `hooks/useAuth.ts` are a placeholder/demo auth implementation (localStorage-based) to drive the Splash → Login/Register → Dashboard flow. Swap in real backend auth before shipping.

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

> **STRICT RULE: TypeScript only.** All source code in this project MUST be written in TypeScript (`.ts` / `.tsx`). Do NOT create new `.js`/`.jsx` files under `src/`, and do NOT introduce plain JavaScript files anywhere `tsc`/ESLint should cover. The only permitted plain-`.js` files are pre-existing tool config files that require it (e.g. `postcss.config.js`, `tailwind.config.js`) and build-generated artifacts (`vite.config.js`, `*.tsbuildinfo`) — never hand-write new ones. If asked to add config that supports a `.ts` variant, prefer the TypeScript form.

- Use TypeScript with strict mode; the `tsconfig.json` has `strict`, `noUnusedLocals`, and `noUnusedParameters` enabled — keep code compliant. Avoid `any`; prefer explicit types/interfaces, and avoid disabling type-checking with `// @ts-ignore` or `as any` unless unavoidable and commented why.
- Use functional React components and hooks (no class components).
- Style with Tailwind utility classes; use MUI components for structured UI elements (buttons, containers, typography, etc.) and combine with Tailwind via `className`.
- Follow the ESLint config in `eslint.config.js` (`@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh` rules). Run `npm run lint` before finishing a task that touches `.ts`/`.tsx` files.
- Keep the service worker / PWA manifest configuration in `vite.config.ts` in sync with any changes to icons or offline-caching behavior in `public/`.
- **Environment variables**: use Vite's `.env` system (`.env`, `.env.development`, `.env.production`, `.env.local`, `.env.[mode].local`). All client-exposed vars must be prefixed `VITE_` and declared in `src/vite-env.d.ts`'s `ImportMetaEnv` interface. Never commit secrets — only `.env`, `.env.development`, `.env.production`, and `.env.example` are tracked; `*.local` files are gitignored and machine-specific. Add new example values to `.env.example` whenever you add a new `VITE_` variable.

## Before finishing a task

1. Run `npm run lint` for any TypeScript/React changes.
2. Run `npm run build` if changes could affect type-checking or the production build.
3. Do not commit `dist/`, `dev-dist/`, or `node_modules/` (already gitignored).
