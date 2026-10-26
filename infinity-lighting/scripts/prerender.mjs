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
import { execSync } from 'node:child_process'

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

// Real last-modified dates: the last commit that touched the files a route is built from.
// Uncommitted changes to those files count as "modified today".
const pageFileFor = {
  '/parking-garages': 'ParkingGarages', '/stairwells': 'Stairwells', '/office-buildings': 'OfficeBuildings',
  '/warehouses': 'Warehouses', '/fountains-landscape': 'FountainsLandscape', '/wallpacks-flood': 'WallpacksFlood',
  '/parking-lots': 'ParkingLots', '/energy-audit': 'EnergyAudit', '/lighting-proposal': 'LightingProposal',
  '/led-lighting-rebates-houston': 'LedRebates', '/projects': 'Projects', '/contact-us': 'ContactUs',
  '/service-areas': 'ServiceAreas', '/': 'HomePage'
}
const sourcesFor = (route) => {
  if (route.startsWith('/projects/')) return ['src/data/projects.js', 'src/pages/ProjectDetail.jsx']
  if (route.startsWith('/service-areas/')) return ['src/data/serviceAreas.js', 'src/pages/ServiceArea.jsx']
  const page = pageFileFor[route]
  if (!page) return []
  const files = [`src/pages/${page}.jsx`, 'src/data/faqs.js']
  if (route === '/') files.push('src/components/Hero.jsx', 'src/components/Services.jsx', 'src/components/BeforeAfter.jsx', 'src/components/WarrantySection.jsx', 'src/data/projects.js')
  if (route === '/projects') files.push('src/data/projects.js')
  if (route === '/service-areas') files.push('src/data/serviceAreas.js')
  return files
}
const git = (args) => execSync(`git ${args}`, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
const lastmodFor = (route) => {
  const files = sourcesFor(route)
  if (files.length === 0) return today
  try {
    const quoted = files.map(f => `"${f}"`).join(' ')
    if (git(`status --porcelain -- ${quoted}`)) return today
    return git(`log -1 --format=%cs -- ${quoted}`) || today
  } catch {
    return today
  }
}
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
  `    <lastmod>${lastmodFor(route)}</lastmod>`,
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
