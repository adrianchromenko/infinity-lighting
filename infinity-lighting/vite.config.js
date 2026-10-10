import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ ssrBuild, isSsrBuild }) => ({
  plugins: [react()],
  // react-helmet-async is CommonJS; bundle it into the server build so Node can import it as ESM.
  ssr: { noExternal: ['react-helmet-async'] },
  build: (ssrBuild || isSsrBuild)
    ? {
        // Server bundle used only by scripts/prerender.mjs at build time (see `npm run build`).
        rollupOptions: {
          input: {
            'entry-server': 'src/entry-server.jsx',
            routes: 'src/routes.jsx',
            projects: 'src/data/projects.js',
            serviceAreas: 'src/data/serviceAreas.js'
          },
          output: { entryFileNames: '[name].js' }
        }
      }
    : undefined
}))
