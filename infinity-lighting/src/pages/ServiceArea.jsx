import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'
import FAQ, { faqSchema } from '../components/FAQ'
import NotFound from './NotFound'
import { serviceAreas, serviceAreasBySlug } from '../data/serviceAreas'
import { projectsById } from '../data/projects'
import { applications, services } from '../data/services'
import './ServiceArea.css'

const ServiceArea = () => {
  const { slug } = useParams()
  const area = serviceAreasBySlug[slug]
  if (!area) {
    return <NotFound title="Service Area Not Found" message="We could not find that service area. See the areas we serve across Greater Houston." />
  }

  const projects = area.projectIds.map(id => projectsById[id]).filter(Boolean)
  const nearby = serviceAreas.filter(a => a.slug !== slug)

  return (
    <div className="service-area-page">
      <SEO
        title={area.title}
        description={area.description}
        canonical={`/service-areas/${slug}`}
        image={projects[0]?.image}
        service
        schema={faqSchema(area.faqs)}
      />
      <TopBar />
      <Header />

      <section className="sa-hero">
        <div className="container">
          <nav className="sa-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/service-areas">Service Areas</Link>
            <span aria-hidden="true">›</span>
            <span>{area.name}</span>
          </nav>
          <h1 className="sa-title">{area.h1}</h1>
          <p className="sa-tagline">{area.tagline}</p>
          <div className="sa-hero-actions">
            <Link to="/contact-us" className="sa-btn-primary">Get a Free Energy Audit</Link>
            <a href="tel:2812024625" className="sa-btn-secondary">Call (281) 202-4625</a>
          </div>
        </div>
      </section>

      <section className="sa-intro">
        <div className="container">
          <div className="sa-intro-grid">
            <div className="sa-intro-text">
              {area.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <aside className="sa-trust-card">
              <h2>Why Houston property managers call us</h2>
              <ul>
                <li>Free fixture-by-fixture energy audit with light readings</li>
                <li>Proposal with a layout, savings and payback period</li>
                <li>Utility rebates filed for you</li>
                <li>Full-service electrical and lighting on one crew</li>
                <li>10-year fixture and 5-year labor warranty</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="sa-properties">
        <div className="container">
          <h2 className="sa-section-title">What we light in {area.name}</h2>
          <div className="sa-property-grid">
            {area.propertyTypes.map(item => (
              <div key={item.name} className="sa-property-card">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="sa-projects">
          <div className="container">
            <h2 className="sa-section-title">Projects nearby</h2>
            <div className="sa-project-grid">
              {projects.map(project => (
                <Link to={`/projects/${project.id}`} key={project.id} className="sa-project-card">
                  <div className="sa-project-image">
                    <img src={project.image} alt={`${project.title}, ${project.type} LED lighting project`} loading="lazy" />
                    <span className="sa-project-type">{project.type}</span>
                  </div>
                  <div className="sa-project-body">
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <span className="sa-project-location">{project.location}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sa-services">
        <div className="container">
          <h2 className="sa-section-title">LED lighting services in {area.name}</h2>
          <div className="sa-service-grid">
            {[...applications, ...services].map(service => (
              <Link to={service.path} key={service.path} className="sa-service-card">
                <h3>{service.name}</h3>
                <p>{service.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={area.faqs} title={`${area.name} LED lighting questions`} />

      <section className="sa-nearby">
        <div className="container">
          <h2 className="sa-section-title">Other areas we serve</h2>
          <ul className="sa-nearby-list">
            {nearby.map(a => (
              <li key={a.slug}><Link to={`/service-areas/${a.slug}`}>{a.name}</Link></li>
            ))}
            <li><Link to="/service-areas">All service areas</Link></li>
          </ul>
        </div>
      </section>

      <section className="sa-cta">
        <div className="container">
          <h2>Ready to see what your {area.name} property can save?</h2>
          <p>Start with a free, no-obligation energy audit. We measure what you have and show the savings in writing.</p>
          <Link to="/contact-us" className="sa-btn-light">Request Your Free Energy Audit</Link>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default ServiceArea
