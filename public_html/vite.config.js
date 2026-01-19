import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Isto diz ao sistema que "@" é igual à pasta "src"
      '@': path.resolve(__dirname, './src'),
    },
  },
});
