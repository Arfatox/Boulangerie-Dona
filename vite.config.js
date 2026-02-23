import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false, gzipSize: true, }),
    viteCompression({
      algorithm: 'gzip',  // Choisis entre gzip, br, etc.
      threshold: 10240,  // Taille minimum pour compresser les fichiers (en octets)
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      react: path.resolve(__dirname, 'node_modules/react'), // Force la bonne résolution
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  build: {
    outDir: 'dist',
  },
});
