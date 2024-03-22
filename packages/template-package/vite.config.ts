import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

import CustomizedBuild from '../../plugins/customizedBuild.js';

function getAbsolutePath(path: string) {
  return fileURLToPath(new URL(path, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
    CustomizedBuild(),
  ],
  base: './',
  esbuild: {
    legalComments: 'external',
  },
  build: {
    minify: true,
    target: 'esnext',
    assetsDir: 'app',
  },
  resolve: {
    alias: [
      { find: '@', replacement: getAbsolutePath('./src') },
      { find: '@app', replacement: getAbsolutePath('./src/app') },
      { find: '@entities', replacement: getAbsolutePath('./src/entities') },
      { find: '@features', replacement: getAbsolutePath('./src/features') },
      { find: '@shared', replacement: getAbsolutePath('./src/shared') },
      { find: '@widgets', replacement: getAbsolutePath('./src/widgets') },
      { find: '@processes', replacement: getAbsolutePath('./src/processes') },
    ],
  },
});
