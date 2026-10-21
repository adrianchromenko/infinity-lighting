import { Link } from 'react-router-dom'
import { allServices, applications } from '../data/services'
import { serviceAreasByGroup, serviceAreasBySlug } from '../data/serviceAreas'
import './RelatedLinks.css'

// Internal links to the other services, the project portfolio and the service-area pages.
const RelatedLinks = ({ current, title = 'Explore More' }) => {
  const others = allServices.filter(s => s.path !== current)
  // On an application page, add "<service> in <city>" links so each service is tied to every market.
  const service = applications.find(s => s.path === current)
  const cityAreas = service
    ? [serviceAreasBySlug['downtown-houston'], ...serviceAreasByGroup.texas, ...serviceAreasByGroup.regional]
    : []
  return (
    <section className="related-links">
      <div className="container">
        <h2 className="related-links-title">{title}</h2>
        {service && (
          <p className="related-links-cities">
            <span>{service.name} across Texas and nearby states:</span>{' '}
            {cityAreas.map((a, i) => (
              <span key={a.slug}>
                <Link to={`/service-areas/${a.slug}`}>{service.name} in {a.slug === 'downtown-houston' ? 'Houston' : a.name}</Link>
                {i < cityAreas.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        )}
        <div className="related-links-grid">
          <div className="related-links-group">
            <h3>LED Lighting Services</h3>
            <ul>
              {others.map(s => (
                <li key={s.path}><Link to={s.path}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="related-links-group">
            <h3>Greater Houston</h3>
            <ul>
              {serviceAreasByGroup.houston.map(a => (
                <li key={a.slug}><Link to={`/service-areas/${a.slug}`}>{a.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="related-links-group">
            <h3>Texas &amp; Nearby States</h3>
            <ul>
              {[...serviceAreasByGroup.texas, ...serviceAreasByGroup.regional].map(a => (
                <li key={a.slug}><Link to={`/service-areas/${a.slug}`}>{a.name}</Link></li>
              ))}
              <li><Link to="/service-areas">All service areas</Link></li>
            </ul>
          </div>
          <div className="related-links-group">
            <h3>See the Results</h3>
            <ul>
              <li><Link to="/projects">Commercial LED lighting projects</Link></li>
              <li><Link to="/projects/four-oaks-place">Four Oaks Place parking garage</Link></li>
              <li><Link to="/projects/greenstreet-parking">GreenStreet parking garage</Link></li>
              <li><Link to="/projects/springwoods-marriott">Springwoods Village Marriott</Link></li>
              <li><Link to="/contact-us">Request a free energy audit</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedLinks
