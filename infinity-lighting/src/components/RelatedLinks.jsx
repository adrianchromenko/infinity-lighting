import { Link } from 'react-router-dom'
import { allServices } from '../data/services'
import { serviceAreas } from '../data/serviceAreas'
import './RelatedLinks.css'

// Internal links to the other services, the project portfolio and the service-area pages.
const RelatedLinks = ({ current, title = 'Explore More' }) => {
  const others = allServices.filter(s => s.path !== current)
  return (
    <section className="related-links">
      <div className="container">
        <h2 className="related-links-title">{title}</h2>
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
            <h3>Areas We Serve</h3>
            <ul>
              {serviceAreas.map(a => (
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
