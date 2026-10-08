import { Helmet } from 'react-helmet-async'

export const SITE_URL = 'https://inflighting.com'
export const SITE_NAME = 'Infinity Lighting Solutions'
const DEFAULT_TITLE = `${SITE_NAME} - Commercial LED Lighting & Electrical Houston TX`
const DEFAULT_DESCRIPTION =
  "Houston's commercial LED lighting and electrical contractor. LED retrofits for parking garages, offices, hotels and warehouses with a 10-year fixture and 5-year labor warranty. Free energy audits."
const DEFAULT_IMAGE = `${SITE_URL}/images/garage-night.jpg`

const SEGMENT_NAMES = {
  projects: 'Projects'
}

const toAbsolute = (path) => {
  if (!path) return SITE_URL
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

// Builds a schema.org BreadcrumbList from the canonical path, e.g.
// /projects/four-oaks-place -> Home > Projects > <page title>
const buildBreadcrumbs = (canonical, title) => {
  if (!canonical || canonical === '/') return null
  const segments = canonical.split('/').filter(Boolean)
  const items = [{ name: 'Home', url: SITE_URL }]
  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1
    const url = `${SITE_URL}/${segments.slice(0, index + 1).join('/')}`
    const name = isLast ? title : SEGMENT_NAMES[segment] || segment
    items.push({ name, url })
  })
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

/**
 * Per-page head tags.
 *
 * @param {string}  title        Page title (site name is appended). Omit on the home page.
 * @param {string}  description  Meta description, ideally 120-160 characters.
 * @param {string}  canonical    Path of this page, e.g. "/parking-garages".
 * @param {string}  image        Absolute URL or site path of the share image.
 * @param {string}  type         Open Graph type, "website" (default) or "article".
 * @param {boolean} noindex      Keep the page out of search results (404, thank-you pages).
 * @param {boolean} service      Emit a schema.org Service entry for this page (service/application pages).
 * @param {object|object[]} schema  Extra JSON-LD objects to embed (Article, FAQPage...).
 */
const SEO = ({ title, description, keywords, canonical, image, type = 'website', noindex = false, service = false, schema }) => {
  const finalTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const finalDescription = description || DEFAULT_DESCRIPTION
  const url = toAbsolute(canonical)
  const imageUrl = toAbsolute(image) || DEFAULT_IMAGE
  const breadcrumbs = buildBreadcrumbs(canonical, title)
  const serviceSchema = service
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        serviceType: title,
        description: finalDescription,
        url,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Houston' }
      }
    : null
  const schemas = [breadcrumbs, serviceSchema, ...(Array.isArray(schema) ? schema : [schema])].filter(Boolean)

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image ? imageUrl : DEFAULT_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image ? imageUrl : DEFAULT_IMAGE} />

      {schemas.map((item, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(item)}</script>
      ))}
    </Helmet>
  )
}

export default SEO
