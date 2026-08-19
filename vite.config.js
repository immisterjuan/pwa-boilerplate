import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            includeAssets: ['icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'],
            manifest: {
                id: '/',
                name: 'PWA Boilerplate',
                short_name: 'PWA App',
                description: 'Single page progressive web application boilerplate using Vite + React + TypeScript + Tailwind CSS + Material UI.',
                theme_color: '#1976d2',
                background_color: '#ffffff',
                display: 'standalone',
                display_override: ['window-controls-overlay', 'standalone'],
                orientation: 'portrait',
                start_url: '/',
                scope: '/',
                lang: 'en',
                categories: ['productivity', 'utilities'],
                icons: [
                    {
                        src: '/icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: '/icons/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: '/icons/icon-maskable-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            },
            workbox: {
                // Precache the built app shell (JS/CSS/HTML) for instant offline loads.
                globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
                skipWaiting: true,
                navigateFallback: '/index.html',
                runtimeCaching: [
                    {
                        // Cache-first for static image assets.
                        urlPattern: function (_a) {
                            var request = _a.request;
                            return request.destination === 'image';
                        },
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images-cache',
                            expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
                            cacheableResponse: { statuses: [0, 200] },
                        },
                    },
                    {
                        // Stale-while-revalidate for same-origin fonts/styles/scripts fetched at runtime.
                        urlPattern: function (_a) {
                            var request = _a.request;
                            return ['style', 'script', 'font'].includes(request.destination);
                        },
                        handler: 'StaleWhileRevalidate',
                        options: { cacheName: 'assets-cache' },
                    },
                    {
                        // Network-first for API calls so users get fresh data when online,
                        // falling back to cache when offline.
                        urlPattern: function (_a) {
                            var url = _a.url;
                            return url.pathname.startsWith('/api/');
                        },
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'api-cache',
                            networkTimeoutSeconds: 5,
                            expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
                            cacheableResponse: { statuses: [0, 200] },
                        },
                    },
                ],
            },
            devOptions: {
                // Enable the service worker in `vite dev` for local testing.
                enabled: true,
                type: 'module',
            },
        }),
    ],
    server: {
        port: 5173,
    },
});
