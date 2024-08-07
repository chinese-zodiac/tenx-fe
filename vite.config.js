import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePluginRadar } from 'vite-plugin-radar';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    VitePluginRadar({
      // Google Analytics tag injection
      gtm: [
        {
          id: 'AW-16657419279',
        },
      ],
    }),
  ],
});
