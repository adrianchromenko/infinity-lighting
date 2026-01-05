import './ParkingLots.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const ParkingLots = () => {
  const projects = [
    {
      id: 1,
      title: "Alamo/National Car Rental",
      description: "Replaced inefficient T5 pole lights with sleek, new LED pole lights reducing pole wattage by nearly 100 watts.",
      location: "Hobby Airport, 7800 Airport Blvd, Houston, TX 77061",
      savings: "100 watts per pole"
    },
    {
      id: 2,
      title: "IBC Bank Parking Lot",
      description: "Phase 2 of project included replacing old, inefficient parking lot pole lights, wall packs, ground flood lights and wall washers with stylish and energy efficient LED.",
      location: "5615 Kirby Dr., Houston, TX",
      client: "Senterra Real Estate Group"
    }
  ]

  return (
    <div className="parking-lots-page">
      <SEO 
        title="Parking Lot LED Lighting"
        description="LED parking lot lighting solutions for Houston businesses. Improve safety, reduce liability, cut energy costs. Free lighting assessment available."
        keywords="parking lot lighting Houston, LED parking lot lights, commercial parking lighting, pole lighting Houston, parking area lighting"
        canonical="/parking-lots"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="pl-hero">
        <div className="container">
          <div className="pl-hero-content">
            <h1 className="pl-hero-title">Houston Parking Lot LED Lighting</h1>
            <div className="pl-hero-message">
              <h2>Safety first with a</h2>
              <h2 className="highlight">well-lit outdoor environment!</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="pl-overview">
        <div className="container">
          <div className="overview-content">
            <p className="overview-lead">
              Infinity Lighting Solutions offers complete services for rooftop and parking lot lighting.
            </p>
            <div className="overview-grid">
              <div className="overview-main">
                <p className="overview-text">
                  Upgrading existing metal halide lamps to energy-efficient LED lamps saves energy, 
                  increases illumination, increases security, and adds to the aesthetics of your property.
                </p>
                <p className="overview-text">
                  From poles to fixtures, with multiple optic and lumen packages, Infinity Lighting Solutions 
                  can match LED pole lights to your needs with average energy savings of over 65% achieved.
                </p>
              </div>
              <div className="overview-stats">
                <div className="stat-highlight">
                  <div className="stat-number">65%+</div>
                  <div className="stat-label">Average Energy Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pl-benefits">
        <div className="container">
          <h2 className="section-title">Transform Your Parking Areas</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Enhanced Safety</h3>
              <p>
                Bright, uniform lighting eliminates dark spots and improves visibility for 
                pedestrians and drivers, reducing accidents and liability.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Energy Efficiency</h3>
              <p>
                LED technology reduces energy consumption by 65% or more compared to 
                traditional metal halide fixtures while providing better light quality.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Superior Illumination</h3>
              <p>
                Advanced optics provide uniform light distribution, eliminating shadows 
                and dark areas while reducing light pollution.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Low Maintenance</h3>
              <p>
                50,000+ hour lifespan means fewer replacements, reduced maintenance costs, 
                and minimal disruption to parking operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="pl-solutions">
        <div className="container">
          <div className="solutions-wrapper">
            <div className="solutions-content">
              <h2>Complete Parking Lot Solutions</h2>
              <div className="solution-features">
                <div className="feature-item">
                  <h4>Rooftop Lighting</h4>
                  <p>Specialized fixtures for parking deck rooftops with weather-resistant designs</p>
                </div>
                <div className="feature-item">
                  <h4>Pole Lighting</h4>
                  <p>Various mounting heights and configurations to match your specific layout</p>
                </div>
                <div className="feature-item">
                  <h4>Multiple Optic Options</h4>
                  <p>Type II, III, IV, and V distributions for optimal coverage patterns</p>
                </div>
                <div className="feature-item">
                  <h4>Lumen Packages</h4>
                  <p>Customizable light output to meet IES recommended lighting levels</p>
                </div>
                <div className="feature-item">
                  <h4>Smart Controls</h4>
                  <p>Dimming capabilities and photocell controls for maximum efficiency</p>
                </div>
              </div>
            </div>
            <div className="solutions-visual">
              <div className="visual-cards">
                <div className="visual-card poles">
                  <span className="card-icon">🏗️</span>
                  <span className="card-text">From Poles to Fixtures</span>
                </div>
                <div className="visual-card complete">
                  <span className="card-icon">✨</span>
                  <span className="card-text">Complete Service</span>
                </div>
                <div className="visual-card custom">
                  <span className="card-icon">🎯</span>
                  <span className="card-text">Matched to Your Needs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="pl-features">
        <div className="container">
          <h2 className="section-title">Why Choose LED for Parking Lots?</h2>
          <div className="features-comparison">
            <div className="comparison-side old">
              <h3>Traditional Metal Halide</h3>
              <ul>
                <li>High energy consumption</li>
                <li>15-20 minute warm-up time</li>
                <li>Frequent bulb replacements</li>
                <li>Color shift over time</li>
                <li>Poor performance in cold weather</li>
                <li>High maintenance costs</li>
              </ul>
            </div>
            <div className="vs-divider">VS</div>
            <div className="comparison-side new">
              <h3>Modern LED Solutions</h3>
              <ul>
                <li>65%+ energy savings</li>
                <li>Instant on/off capability</li>
                <li>50,000+ hour lifespan</li>
                <li>Consistent color temperature</li>
                <li>Excellent cold weather performance</li>
                <li>Minimal maintenance required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pl-projects">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <div className="project-content">
                  <p className="project-description">{project.description}</p>
                  {project.savings && (
                    <div className="project-savings">
                      <span className="savings-icon">⚡</span>
                      <span>Savings: {project.savings}</span>
                    </div>
                  )}
                  <div className="project-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  {project.client && (
                    <div className="project-client">
                      <span className="client-label">Client:</span>
                      <span className="client-name">{project.client}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pl-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your Parking Lots</h2>
            <h2>with energy-efficient LED lighting?</h2>
            <div className="cta-buttons">
              <button className="cta-button">Contact Us & Get A Free Energy Survey</button>
              <button className="cta-button-secondary">GET A FREE ENERGY AUDIT</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default ParkingLots