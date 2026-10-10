import './FAQ.css'

// Builds schema.org FAQPage JSON-LD from a list of { q, a } items.
export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
})

const FAQ = ({ items, title = 'Frequently Asked Questions', intro }) => {
  if (!items || items.length === 0) return null
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="faq-title">{title}</h2>
        {intro && <p className="faq-intro">{intro}</p>}
        <div className="faq-list">
          {items.map((item, index) => (
            <details key={index} className="faq-item" open={index === 0}>
              <summary className="faq-question">
                <span>{item.q}</span>
                <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
