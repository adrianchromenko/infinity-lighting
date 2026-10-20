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

const STATE_NAMES = { TX: 'Texas', LA: 'Louisiana', OK: 'Oklahoma', AR: 'Arkansas', KS: 'Kansas', MO: 'Missouri' }

// Copy that changes with how far the area is from the Richmond, TX office.
const groupCopy = {
  houston: {
    audience: 'Houston property managers',
    projectsTitle: 'Projects nearby',
    moreTitle: 'More Greater Houston areas',
    travel: null
  },
  texas: {
    audience: 'Texas property managers',
    projectsTitle: 'Recent work from our Houston portfolio',
    moreTitle: 'More Texas markets',
    travel: 'Our crews travel statewide from Richmond, TX. Texas electrical contractor licensing is statewide, so the same licensed crew handles the electrical scope here.'
  },
  regional: {
    audience: 'property managers across the region',
    projectsTitle: 'Recent work from our portfolio',
    moreTitle: 'More nearby states',
    travel: 'We travel for commercial projects in nearby states and confirm licensing and crew arrangements for your state before the proposal is issued.'
  }
}

// schema.org places for the Service entry on this page.
const areaServedFor = (area) => {
  const state = { '@type': 'State', name: STATE_NAMES[area.state] || area.state }
  return [{ '@type': 'City', name: area.city, containedInPlace: state }, state]
}

const ServiceArea = () => {
  const { slug } = useParams()
  const area = serviceAreasBySlug[slug]
  if (!area) {
    return <NotFound title="Service Area Not Found" message="We could not find that service area. See the areas we serve across Texas and nearby states." />
  }

  const copy = groupCopy[area.group] || groupCopy.houston
  const projects = area.projectIds.map(id => projectsById[id]).filter(Boolean)
  // Same-group areas first, then the rest, so Dallas links to Austin before it links to Katy.
  const sameGroup = serviceAreas.filter(a => a.slug !== slug && a.group === area.group)
  const otherGroups = serviceAreas.filter(a => a.group !== area.group)

  return (
    <div className="service-area-page">
      <SEO
        title={area.title}
        description={area.description}
        canonical={`/service-areas/${slug}`}
        image={area.beforeAfter?.after || projects[0]?.image}
        service
        areaServed={areaServedFor(area)}
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
              {copy.travel && <p className="sa-travel-note">{copy.travel}</p>}
            </div>
            <aside className="sa-trust-card">
              <h2>Why {copy.audience} call us</h2>
              <ul>
                <li>Free fixture-by-fixture energy audit with light readings</li>
                <li>Proposal with a layout, savings and payback period</li>
                <li>{area.utility ? `${area.utility} rebates filed for you` : 'Utility rebates filed for you'}</li>
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

      {area.beforeAfter && (
        <section className="sa-before-after">
          <div className="container">
            <h2 className="sa-section-title">Our work in {area.name}</h2>
            <div className="sa-ba-card">
              <div className="sa-ba-images">
                <figure className="sa-ba-frame">
                  <img src={area.beforeAfter.before} alt={`${area.beforeAfter.title} before the LED high bay conversion`} loading="lazy" />
                  <figcaption className="sa-ba-tag before">Before</figcaption>
                </figure>
                <figure className="sa-ba-frame">
                  <img src={area.beforeAfter.after} alt={`${area.beforeAfter.title} after the LED high bay conversion`} loading="lazy" />
                  <figcaption className="sa-ba-tag after">After</figcaption>
                </figure>
              </div>
              <div className="sa-ba-body">
                <h3>{area.beforeAfter.title}</h3>
                <p>{area.beforeAfter.note}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="sa-projects">
          <div className="container">
            <h2 className="sa-section-title">{copy.projectsTitle}</h2>
            {area.group !== 'houston' && (
              <p className="sa-projects-intro">
                These are the results we point to when a {area.name} owner asks what to expect. The same crews, fixtures and process travel with us.
              </p>
            )}
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
          {sameGroup.length > 0 && (
            <>
              <h2 className="sa-section-title">{copy.moreTitle}</h2>
              <ul className="sa-nearby-list">
                {sameGroup.map(a => (
                  <li key={a.slug}><Link to={`/service-areas/${a.slug}`}>{a.name}</Link></li>
                ))}
              </ul>
            </>
          )}
          <h2 className="sa-section-title sa-nearby-secondary">Other areas we serve</h2>
          <ul className="sa-nearby-list">
            {otherGroups.map(a => (
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
