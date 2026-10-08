import { Link } from 'react-router-dom'
import './Services.css'

const benefits = [
  {
    title: 'Cut energy use by 50%+',
    text: 'LED draws a fraction of the power of fluorescent and HID for the same light.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    )
  },
  {
    title: 'Brighter, more even light',
    text: 'Higher light levels with no dark patches, measured on site before and after.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    )
  },
  {
    title: 'Almost no maintenance',
    text: 'No bulbs or ballasts to change, so lifts, ladders and service calls go away.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-2.1 2.6-2.6z" />
      </svg>
    )
  },
  {
    title: 'Safer property',
    text: 'Well-lit garages, stairwells and entries reduce slips, falls and security risk.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 5v6c0 5.5 3.4 10.4 8 11.8 4.6-1.4 8-6.3 8-11.8V5l-8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Higher property value',
    text: 'A building that looks newer, costs less to run and is easier to lease.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    )
  },
  {
    title: 'Fast payback',
    text: 'Most projects pay for themselves in one to two years, then keep saving.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    )
  }
]

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-grid">
          <div className="services-left">
            <p className="services-eyebrow">Why Houston properties switch to LED</p>
            <h2 className="services-headline">
              Less energy for the same light, and a building that looks better for it.
            </h2>
            <p className="services-lead">
              We start with a free on-site audit, measure what you have, and show you the savings in writing before anything is installed.
            </p>
            <div className="services-actions">
              <Link to="/energy-audit" className="services-cta">Get a Free Energy Audit</Link>
              <a href="tel:2812024625" className="services-phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (281) 202-4625
              </a>
            </div>
          </div>

          <div className="services-right">
            <div className="benefit-grid">
              {benefits.map(b => (
                <div key={b.title} className="benefit-card">
                  <div className="benefit-card-icon">{b.icon}</div>
                  <h3 className="benefit-card-title">{b.title}</h3>
                  <p className="benefit-card-text">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
