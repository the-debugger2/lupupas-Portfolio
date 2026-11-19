import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const csp = [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src https://fonts.gstatic.com",
    "img-src 'self' data: https://i.ytimg.com",
    "frame-src https://www.youtube.com",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
].join('; ')

const securityMeta = () => ({
    name: 'security-meta',
    apply: 'build',
    transformIndexHtml: () => [
        { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: csp }, injectTo: 'head-prepend' },
        { tag: 'meta', attrs: { name: 'referrer', content: 'strict-origin-when-cross-origin' }, injectTo: 'head-prepend' },
    ],
})

export default defineConfig({
    base: "/lupupas-Portfolio/",
    plugins: [react(), securityMeta()],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'build',
        target: 'es2021',
    },
});