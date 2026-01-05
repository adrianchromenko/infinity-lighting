import './ParkingGarages.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const ParkingGarages = () => {
  const projects = [
    {
      id: 1,
      title: "Four Oaks Place Parking Garage",
      description: "Phase 1 of the parking garage consisted of replacing 600 + old, ugly and inefficient 8' T8 fixtures with 600 + state of the art linear luminaires with integrated motion sensor. The client was able to eliminate one half of their lighting footprint!",
      location: "1300, 1330, 1360 Post Oak Blvd."
    },
    {
      id: 2,
      title: "Post Oak Central #1",
      description: "Replaced 4' and 8' T8 original fixtures to the garage construction with state of the art 4' and 8' linear luminaire with integrated motion sensor",
      location: "2000 Post Oak Blvd., Houston, TX Parkway Properties"
    },
    {
      id: 3,
      title: "Westchase Towers",
      description: "Replaced out of date, energy-inefficient 8' T8 fixtures with state of the art 8' linear luminaires with integrated motion sensors.",
      location: "10350 & 10370 Richmond Ave. Houston, TX"
    },
    {
      id: 4,
      title: "North Richmond Parking Garage",
      description: "Replaced 800+ old ugly and inefficient 8' T8 fixtures with state of the art Linear Luminaires with integrated motion sensors making the \"new\" garage nearly unrecognizable!",
      location: "Greenway Plaza 8 & 12, Houston, TX Parkway Properties"
    }
  ]

  return (
    <div className="parking-garages-page">
      <SEO 
        title="Parking Garage LED Lighting"
        description="Transform your Houston parking garage with energy-efficient LED lighting. Improve safety, reduce costs by up to 75%. Free energy audit. Serving Greater Houston area."
        keywords="parking garage lighting Houston, LED garage lighting, parking structure lighting, garage LED retrofit Houston, commercial garage lighting"
        canonical="/parking-garages"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section - Simple and Clean */}
      <section className="pg-hero">
        <div className="container">
          <div className="pg-hero-content">
            <h1 className="pg-hero-title">Parking Garage LED Lighting in Houston</h1>
            <p className="pg-hero-subtitle">Transform your Houston parking facilities with energy-efficient LED solutions</p>
          </div>
        </div>
      </section>

      {/* First Impressions Section */}
      <section className="pg-impression">
        <div className="container">
          <div className="impression-content">
            <div className="impression-text">
              <h2>Your parking garage is the <span className="highlight">first impression</span> 
              <br/>and the <span className="highlight">last impression</span> of your building.</h2>
            </div>
            <div className="impression-question">
              <h3>What impression does your garage make?</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pg-benefits">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-main">
              <h2 className="benefit-title">Why Upgrade to LED?</h2>
              <p className="benefit-lead">
                Upgrading your parking garage to LED lighting with motion sensors will
                significantly reduce your energy consumption and maintenance costs.
              </p>
              <div className="benefit-features">
                <div className="feature-item">
                  <div className="feature-icon">💡</div>
                  <div className="feature-text">
                    <h4>Enhanced Safety</h4>
                    <p>More lumen output decreases slip and falls while improving security</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-text">
                    <h4>Energy Savings</h4>
                    <p>Save over 80% in electrical costs with motion sensors</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔧</div>
                  <div className="feature-text">
                    <h4>Reduced Maintenance</h4>
                    <p>Long-lasting LED technology minimizes replacement needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefit-highlight">
              <div className="savings-card">
                <p className="savings-label">Recent Project Savings</p>
                <div className="savings-amount">$331,618</div>
                <p className="savings-period">per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="pg-solutions">
        <div className="container">
          <div className="solutions-content">
            <h2 className="section-title">Our Solutions</h2>
            <p className="solutions-text">
              Infinity Lighting Solutions offers a proprietary 4' Linear Luminaire and depending on the type of existing fixtures, 
              upgrading your parking garage to our proprietary Luminaires with integrated motion sensors can save over 80% in electrical cost.
            </p>
            <p className="solutions-text">
              In addition to our proprietary Luminaire, Infinity Lighting Solutions offers different types and all major brands for 
              different garage applications. Infinity Lighting will match your garage with the most cost-efficient lighting system.
            </p>
            <button className="download-btn">DOWNLOAD PRODUCT BROCHURE</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pg-projects">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pg-video">
        <div className="container">
          <div className="video-wrapper">
            <div className="video-info">
              <h3>See the Transformation</h3>
              <p>Watch a video tour of our Elevator Lobby project for Four Oaks Place</p>
            </div>
            <div className="video-player">
              <button className="play-btn">▶</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pg-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your Parking Garages?</h2>
            <p>Transform your facilities with energy-efficient LED lighting</p>
            <button className="cta-button">Contact Us & Get A Free Energy Survey</button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default ParkingGarages