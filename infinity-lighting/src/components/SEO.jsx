import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, canonical }) => {
  const siteName = 'Infinity Lighting Solutions'
  const finalTitle = title ? `${title} | ${siteName}` : `${siteName} - Commercial LED Lighting Houston TX`
  const url = canonical ? `https://inflighting.com${canonical}` : 'https://inflighting.com'

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://inflighting.com/Logo-V2.png" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://inflighting.com/Logo-V2.png" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SEO