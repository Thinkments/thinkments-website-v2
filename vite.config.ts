import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({ hostname: 'https://thinkments.com' })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild', // Esbuild is 10-20x faster than Terser and produces similar results
    cssMinify: true,   // Ensure CSS is also minified
    modulePreload: false, // Disable modulepreload to prevent "preload not used" warnings
    rollupOptions: {
      output: {
        // Manual Chunking: This splits huge JS files into smaller, cacheable pieces
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', 'lucide-react', '@radix-ui/react-slot'],
          'vendor-utils': ['clsx', 'tailwind-merge', 'react-helmet-async']
        }
      }
    },
    // Warn if chunks are too big (helps you spot unoptimized libraries later)
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
});