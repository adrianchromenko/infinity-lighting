import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'
import FAQ, { faqSchema } from '../components/FAQ'
import { serviceAreaGroups, serviceAreasByGroup, otherCommunities, otherTexasCities, serviceAreaFaqs } from '../data/serviceAreas'
import './ServiceArea.css'

const ServiceAreas = () => (
  <div className="service-area-page">
    <SEO
      title="Service Areas | Texas & Nearby States"
      description="Commercial LED lighting across Greater Houston, Dallas–Fort Worth, Austin, San Antonio and the Gulf Coast, plus Louisiana, Oklahoma, Arkansas and Kansas City."
      canonical="/service-areas"
      schema={faqSchema(serviceAreaFaqs)}
    />
    <TopBar />
    <Header />

    <section className="sa-hero">
      <div className="container">
        <nav className="sa-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Service Areas</span>
        </nav>
        <h1 className="sa-title">Commercial LED Lighting Across Texas and Nearby States</h1>
        <p className="sa-tagline">
          Based in Richmond, TX and working from downtown Houston to Dallas, Austin, San Antonio and the Gulf Coast, with projects as far as Louisiana and Kansas City. Pick your area to see the property types we handle there and the projects we point to.
        </p>
      </div>
    </section>

    <section className="sa-areas">
      <div className="container">
        {serviceAreaGroups.map(group => (
          <div key={group.id} className="sa-group">
            <div className="sa-group-header">
              <h2 className="sa-section-title">{group.name}</h2>
              <p>{group.blurb}</p>
            </div>
            <div className="sa-area-grid">
              {serviceAreasByGroup[group.id].map(area => (
                <Link to={`/service-areas/${area.slug}`} key={area.slug} className="sa-area-card">
                  <h3>{area.name}</h3>
                  <p>{area.tagline}</p>
                  <span className="sa-area-link">LED lighting in {area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="sa-other">
          Around Houston we also serve {otherCommunities.join(', ')} and the rest of the metro area.
          Across Texas we take on projects in {otherTexasCities.join(', ')} and anywhere in between.
          Not sure if we cover you? <Link to="/contact-us">Ask us</Link>.
        </p>
      </div>
    </section>

    <FAQ items={serviceAreaFaqs} title="Working with us outside Houston" />

    <section className="sa-cta">
      <div className="container">
        <h2>Start with a free energy audit</h2>
        <p>We survey every fixture, take light readings and show you the savings in writing before anything is installed, wherever your property is.</p>
        <Link to="/contact-us" className="sa-btn-light">Request Your Free Energy Audit</Link>
      </div>
    </section>

    <Footer />
    <FloatingPhone />
  </div>
)

export default ServiceAreas
