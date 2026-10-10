import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'
import { serviceAreas, otherCommunities } from '../data/serviceAreas'
import './ServiceArea.css'

const ServiceAreas = () => (
  <div className="service-area-page">
    <SEO
      title="Service Areas | Houston LED Lighting"
      description="Commercial LED lighting across Greater Houston: Downtown, Galleria, Westchase, Greenway Plaza, The Woodlands, Sugar Land, Katy and Fort Bend County. Free audit."
      canonical="/service-areas"
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
        <h1 className="sa-title">Commercial LED Lighting Across Greater Houston</h1>
        <p className="sa-tagline">
          Based in Richmond, TX and working from downtown to The Woodlands. Pick your area to see the projects and property types we handle there.
        </p>
      </div>
    </section>

    <section className="sa-areas">
      <div className="container">
        <div className="sa-area-grid">
          {serviceAreas.map(area => (
            <Link to={`/service-areas/${area.slug}`} key={area.slug} className="sa-area-card">
              <h2>{area.name}</h2>
              <p>{area.tagline}</p>
              <span className="sa-area-link">LED lighting in {area.name}</span>
            </Link>
          ))}
        </div>
        <p className="sa-other">
          We also serve {otherCommunities.join(', ')} and the rest of the Greater Houston area.
          Not sure if we cover you? <Link to="/contact-us">Ask us</Link>.
        </p>
      </div>
    </section>

    <section className="sa-cta">
      <div className="container">
        <h2>Start with a free energy audit</h2>
        <p>We survey every fixture, take light readings and show you the savings in writing before anything is installed.</p>
        <Link to="/contact-us" className="sa-btn-light">Request Your Free Energy Audit</Link>
      </div>
    </section>

    <Footer />
    <FloatingPhone />
  </div>
)

export default ServiceAreas
