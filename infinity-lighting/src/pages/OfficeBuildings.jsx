import './OfficeBuildings.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const OfficeBuildings = () => {
  const projects = [
    {
      id: 1,
      title: "BHP Entrance & Lobby",
      description: "Illuminated with new LED lighting!",
      type: "entrance"
    },
    {
      id: 2,
      title: "Galleria Office Tower 2",
      description: "LED lighting transformed a 1970's lobby!",
      type: "lobby"
    },
    {
      id: 3,
      title: "Guest House",
      description: "Complete LED transformation of hospitality spaces",
      type: "hospitality"
    },
    {
      id: 4,
      title: "Four Oaks Place Cove Lighting",
      description: "Replaced high voltage system with energy efficient cove lighting",
      type: "cove"
    },
    {
      id: 5,
      title: "Transwestern Management Office - Lobby",
      description: "Transformed Lobby looks more modern!",
      location: "1330 Post Oak Houston, TX",
      type: "lobby"
    },
    {
      id: 6,
      title: "Transwestern Management Office - Conference",
      description: "Beautiful Conference Room Transformation!",
      location: "1330 Post Oak Houston, TX",
      type: "conference"
    }
  ]

  return (
    <div className="office-buildings-page">
      <SEO 
        title="Office Building LED Lighting"
        description="Modern LED lighting solutions for Houston office buildings. Boost productivity, reduce energy costs, improve workplace environment. Serving Houston's business district."
        keywords="office building lighting Houston, commercial LED office lighting, LED troffer lighting, office lighting retrofit Houston, workplace lighting Houston"
        canonical="/office-buildings"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="ob-hero">
        <div className="container">
          <div className="ob-hero-content">
            <h1 className="ob-hero-title">Office Buildings & Retail LED Lighting Houston</h1>
            <p className="ob-hero-subtitle">Transform your Houston commercial spaces with modern LED lighting solutions</p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="ob-transformation">
        <div className="container">
          <div className="transformation-content">
            <h2 className="transformation-title">
              Buildings are <span className="highlight">transformed</span> with LED lighting!
            </h2>
            <div className="transformation-grid">
              <div className="transformation-card">
                <div className="trans-icon">💡</div>
                <h3>Recessed Lighting</h3>
                <p>
                  Outdated recessed can lights can be replaced with clean, energy LED recessed lighting fixtures. 
                  With a broad range of applications from a warm glow to a cool white light, upgrading to LED 
                  recessed lighting can give your business your desired effect.
                </p>
              </div>
              <div className="transformation-card featured">
                <div className="trans-icon">🏢</div>
                <h3>Troffer Upgrades</h3>
                <p>
                  Most office buildings, retail office space, and most retail properties have 2×4 or 2×2 fluorescent fixtures. 
                  By today's standards, these fixtures are very dated, having either parabolic or acrylic lens.
                </p>
                <p className="trans-highlight">
                  Troffer lights have become the choice for most commercial buildings. Infinity Lighting Solutions offers 
                  a broad range of Troffers in standard sizes of 1×4, 2×2 and 2×4, enabling a quick change-out into existing ceiling grids.
                </p>
              </div>
              <div className="transformation-card">
                <div className="trans-icon">✨</div>
                <h3>Cove Lighting</h3>
                <p>
                  Existing cove lighting can be very expensive to operate and even more costly to maintain. 
                  By upgrading to LED systems your business can save up to 90% energy cost and virtually 
                  eliminate maintenance while maintaining the same dramatic lighting effect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ob-benefits">
        <div className="container">
          <div className="benefits-header">
            <h2 className="section-title">Why LED for Your Office?</h2>
            <p className="section-subtitle">
              A troffer upgrade offers increased illumination with decreased energy consumption 
              and adds to the aesthetics of your building.
            </p>
          </div>
          <div className="benefits-stats">
            <div className="benefit-stat">
              <div className="stat-number">90%</div>
              <div className="stat-label">Energy Savings</div>
              <div className="stat-desc">Cove Lighting Efficiency</div>
            </div>
            <div className="benefit-stat">
              <div className="stat-number">50%+</div>
              <div className="stat-label">More Light</div>
              <div className="stat-desc">Increased Illumination</div>
            </div>
            <div className="benefit-stat">
              <div className="stat-number">Zero</div>
              <div className="stat-label">Heat & Shadows</div>
              <div className="stat-desc">Cool, Even Lighting</div>
            </div>
            <div className="benefit-stat">
              <div className="stat-number">5 Years</div>
              <div className="stat-label">Warranty</div>
              <div className="stat-desc">Long-lasting Performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ob-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-content">
              <h2>Modern Lighting Solutions</h2>
              <div className="feature-list">
                <div className="feature-item">
                  <h4>Standard Size Options</h4>
                  <p>1×4, 2×2, and 2×4 troffers for easy retrofit into existing ceiling grids</p>
                </div>
                <div className="feature-item">
                  <h4>Customizable Color Temperature</h4>
                  <p>From warm glow to cool white light to match your business atmosphere</p>
                </div>
                <div className="feature-item">
                  <h4>Accent & Decorative Lighting</h4>
                  <p>LED cove lighting for dramatic effects without heat or shadows</p>
                </div>
                <div className="feature-item">
                  <h4>Quick Installation</h4>
                  <p>Minimal disruption to your business operations during upgrade</p>
                </div>
              </div>
            </div>
            <div className="feature-highlight">
              <div className="highlight-box">
                <h3>Let Infinity Lighting Solutions show you our line of troffers and office lighting</h3>
                <button className="demo-button">Request Product Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="ob-projects">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <div className="projects-gallery">
            {projects.map(project => (
              <div key={project.id} className={`project-card ${project.type}`}>
                <div className="project-image"></div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.location && (
                    <div className="project-location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ob-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your Office Buildings</h2>
            <h2>with energy-efficient LED lighting?</h2>
            <button className="cta-button">Contact Us & Get A Free Energy Survey</button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default OfficeBuildings