// Prerenders every route of the site to static HTML after `vite build`, and writes sitemap.xml.
//
// Why: the site is a React SPA. Without this, crawlers and link previews receive an empty
// <div id="root"> and have to execute JavaScript to see any content or per-page meta tags.
// With it, every URL ships as a complete HTML document; React then hydrates on top.
//
// Wired into `npm run build`:
//   vite build && vite build --ssr --outDir dist-ssr && node scripts/prerender.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const SITE_URL = 'https://inflighting.com'

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> / <!--app-html--> placeholders')
}

const load = (file) => import(pathToFileURL(path.join(ssrDir, file)).href)
const { render } = await load('entry-server.js')
const { staticRoutes } = await load('routes.js')
const { projects } = await load('projects.js')
const { serviceAreas } = await load('serviceAreas.js')

const routes = [
  ...staticRoutes,
  ...projects.map(p => `/projects/${p.id}`),
  ...serviceAreas.map(a => `/service-areas/${a.slug}`)
]

const renderPage = (route) => {
  const { html, head } = render(route)
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)
}

// --- one HTML document per route ---------------------------------------------------------------
for (const route of routes) {
  const outFile = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, renderPage(route))
  console.log(`prerendered ${route}`)
}

// Unknown URLs: a real 404 document with noindex, for hosts that serve 404.html on misses.
fs.writeFileSync(path.join(dist, '404.html'), renderPage('/this-page-does-not-exist'))

// --- sitemap.xml --------------------------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10)
const priorityFor = (route) => {
  if (route === '/') return '1.0'
  if (route.startsWith('/projects/')) return '0.7'
  if (route.startsWith('/service-areas/')) return '0.8'
  if (route === '/contact-us' || route === '/lighting-proposal') return '0.8'
  return '0.9'
}
const changefreqFor = (route) => {
  if (route === '/') return 'weekly'
  if (route.startsWith('/projects/')) return 'yearly'
  return 'monthly'
}
const entries = routes.map(route => [
  '  <url>',
  `    <loc>${SITE_URL}${route}</loc>`,
  `    <lastmod>${today}</lastmod>`,
  `    <changefreq>${changefreqFor(route)}</changefreq>`,
  `    <priority>${priorityFor(route)}</priority>`,
  '  </url>'
].join('\n'))
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  '</urlset>',
  ''
].join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap)
console.log(`sitemap.xml written with ${routes.length} URLs`)

fs.rmSync(ssrDir, { recursive: true, force: true })
