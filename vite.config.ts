import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // https://react-svgr.com/docs/options/#replace-attribute-value
      svgrOptions: {
        replaceAttrValues: {
          '#111111': 'currentColor',
        },
      },
    }),
  ],
  root: 'src/',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    sourcemap: false,
  },
  publicDir: '../public/',
  base: './',
  server: {
    host: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
