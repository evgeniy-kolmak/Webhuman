import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
});
