# PWA Boilerplate

A single-page Progressive Web App (PWA) boilerplate built with **Vite + React + TypeScript + Tailwind CSS + Material UI (MUI)**. It works as a regular responsive web app and can also be installed as a standalone application on desktop and mobile, with offline support powered by a service worker.

## Goal

Provide a clean, ready-to-use starting point for new web app projects so you don't have to re-wire the same boilerplate every time. Out of the box it gives you:

- ⚡ Fast dev server and build via Vite
- ⚛️ React 18 + TypeScript (strict mode)
- 🎨 Tailwind CSS for utility-first styling, combined with Material UI components
- 📦 Installable PWA with an app manifest and custom icons
- 🌐 Offline-ready via a Workbox-powered service worker (cache-first for images, stale-while-revalidate for styles/scripts/fonts, network-first for `/api/*` calls)
- ✅ ESLint pre-configured for TypeScript + React

## Tech stack

| Layer            | Technology                                      |
|-------------------|--------------------------------------------------|
| Build tool / dev server | [Vite](https://vitejs.dev/)                 |
| UI library        | [React 18](https://react.dev/)                   |
| Language           | [TypeScript](https://www.typescriptlang.org/)     |
| Styling            | [Tailwind CSS](https://tailwindcss.com/)          |
| Components         | [Material UI (MUI)](https://mui.com/)             |
| PWA / offline support | [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (Workbox) |
| Linting            | [ESLint](https://eslint.org/) + `typescript-eslint` |

## Project structure

```
src/
  App.tsx           # Root component
  main.tsx          # Entry point; sets up the MUI theme and registers the service worker
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

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the dev server (with the service worker enabled for local PWA testing):

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Linting

```bash
npm run lint
```

### Production build

Type-checks the project and builds optimized, production-ready assets into `dist/`:

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## Customizing the PWA

Before deploying, update the following to match your project:

- `vite.config.ts` — `VitePWA({ manifest: { ... } })`: app `name`, `short_name`, `description`, `theme_color`, `background_color`, and `start_url`/`scope` if not served from the domain root.
- `public/icons/` — replace `icon.svg`, `icon-192.png`, `icon-512.png`, and the maskable icon with your own branding (keep the same file names or update the references in `vite.config.ts` and `index.html`).
- `index.html` — page `<title>`, meta `description`, and `theme-color`.
- `package.json` — `name`, `description`, and `author`.

## Deployment

This project builds to static files (`dist/`), so it can be hosted on any static hosting provider or CDN. General steps:

1. Run `npm run build` to generate the `dist/` folder.
2. Deploy the contents of `dist/` to your host of choice.
3. Ensure your host serves `index.html` for unknown routes (SPA fallback) if you add client-side routing later.
4. Serve over **HTTPS** — service workers (and therefore PWA installability/offline support) only work on secure origins (`https://` or `localhost`).

### Vercel

1. Import the repository in [Vercel](https://vercel.com/).
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. Deploy — Vercel serves over HTTPS automatically.

### Netlify

1. Import the repository in [Netlify](https://netlify.com/).
2. Build command: `npm run build`. Publish directory: `dist`.
3. Deploy — Netlify serves over HTTPS automatically.

### GitHub Pages

1. Set `base` in `vite.config.ts` to your repository name (e.g. `base: '/your-repo-name/'`) if deploying to a project page (`username.github.io/your-repo-name`).
2. Run `npm run build`.
3. Publish the `dist/` folder to the `gh-pages` branch (e.g. using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package) or via a GitHub Actions workflow.

### Any static file host / CDN / container

Serve the contents of `dist/` with any static file server (Nginx, Apache, Cloudflare Pages, AWS S3 + CloudFront, etc.), making sure `manifest.webmanifest` and the service worker files are served with correct MIME types and that HTTPS is enabled.

## Using the installed app

Once deployed over HTTPS, users can install the app:

- **Desktop (Chrome/Edge):** click the install icon in the address bar, or open the browser menu → "Install [app name]".
- **Android (Chrome):** browser menu → "Add to Home screen" / "Install app".
- **iOS (Safari):** Share button → "Add to Home Screen".

The service worker automatically caches the app shell for offline use and will prompt to refresh when a new version is deployed (see `onNeedRefresh`/`onOfflineReady` handlers in `src/main.tsx`).
