/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';__TAILWIND_IMPORT__

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      content: {
        highlighter: '__CONTENT_HIGHLIGHTER__',
      },
      prerender: {
        routes: ['/blog', '/blog/2022-12-27-my-first-post'],
      },__ANALOG_SFC_CONFIG__
    }),__TAILWIND_PLUGIN__
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
