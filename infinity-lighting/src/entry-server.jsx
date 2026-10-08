import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import AppRoutes from './routes'
import FloatingPhone from './components/FloatingPhone'
import ChatBot from './components/ChatBot'

// Used only by scripts/prerender.mjs at build time. Renders one route to static HTML
// plus the <head> tags that the page's <SEO> component produced.
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <div className="App">
          <FloatingPhone />
          <ChatBot />
          <AppRoutes />
        </div>
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script].map(t => t.toString()).join('\n    ')
    : ''
  return { html, head }
}
