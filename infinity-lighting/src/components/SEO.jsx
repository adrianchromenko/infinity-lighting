import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, canonical }) => {
  const siteTitle = 'Infinity Lighting Solutions - Commercial LED Lighting Houston TX'
  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle
  
  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={`https://inflighting.com${canonical}`} />}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO