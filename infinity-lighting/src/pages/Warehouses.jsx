import './Warehouses.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const Warehouses = () => {
  return (
    <div className="warehouses-page">
      <SEO 
        title="Warehouse LED Lighting"
        description="Industrial LED lighting for Houston warehouses. High-bay fixtures, motion sensors, dramatic energy savings. Expert installation across Greater Houston."
        keywords="warehouse lighting Houston, LED high bay lighting, industrial lighting Houston, warehouse LED retrofit, high bay LED fixtures Houston"
        canonical="/warehouses"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="wh-hero">
        <div className="container">
          <div className="wh-hero-content">
            <h1 className="wh-hero-title">Houston Warehouse High Bay LED Lighting</h1>
            <div className="wh-hero-message">
              <h2>Illuminate your warehouse</h2>
              <h2>for a <span className="highlight">safer place to work!</span></h2>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="wh-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-main">
              <p className="intro-highlight">
                Infinity Lighting Solutions offers LED high bay fixtures that provide
                consistent illumination across all areas of the facility.
              </p>
              <p className="intro-text">
                Safety and maintenance of warehouses and industrial buildings is reliant on quality lighting. 
                By replacing existing HID, T8 or T5 fixtures with LED high bay fixtures you will benefit from 
                increased energy savings, increased safety and increased productivity.
              </p>
              <p className="intro-text">
                With no more bulbs or ballast to be replaced, the maintenance cost will be greatly reduced 
                and will allow the maintenance department to work on other projects.
              </p>
            </div>
            <div className="intro-benefits">
              <h3>Key Benefits</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Increased Energy Savings</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🛡️</span>
                  <span>Enhanced Safety</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📈</span>
                  <span>Improved Productivity</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🔧</span>
                  <span>Reduced Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="wh-comparison">
        <div className="container">
          <div className="comparison-content">
            <h2 className="section-title">The Real Cost of Traditional Lighting</h2>
            <div className="comparison-grid">
              <div className="comparison-card traditional">
                <h3>Traditional High Bays</h3>
                <ul className="comparison-list">
                  <li className="negative">Costly to operate</li>
                  <li className="negative">Even more costly to maintain</li>
                  <li className="negative">Requires lifts and labor for bulb changes</li>
                  <li className="negative">Frequent ballast replacements</li>
                  <li className="negative">Inconsistent lighting over time</li>
                  <li className="negative">High heat generation</li>
                </ul>
              </div>
              <div className="comparison-card led">
                <h3>LED High Bay Solutions</h3>
                <ul className="comparison-list">
                  <li className="positive">Up to 75% energy savings</li>
                  <li className="positive">50,000+ hour lifespan</li>
                  <li className="positive">No bulbs or ballasts to replace</li>
                  <li className="positive">Consistent bright illumination</li>
                  <li className="positive">Instant on/off capability</li>
                  <li className="positive">Motion sensor compatible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="wh-solution">
        <div className="container">
          <div className="solution-wrapper">
            <div className="solution-text">
              <h2>Customized for Your Facility</h2>
              <p className="solution-lead">
                Infinity Lighting Solutions will survey your facility and recommend the right high bay for your facility.
              </p>
              <div className="solution-features">
                <div className="feature">
                  <h4>Comprehensive Survey</h4>
                  <p>We analyze your current lighting, ceiling heights, and usage patterns</p>
                </div>
                <div className="feature">
                  <h4>Tailored Recommendations</h4>
                  <p>Custom solutions based on your specific warehouse requirements</p>
                </div>
                <div className="feature">
                  <h4>Professional Installation</h4>
                  <p>Minimal disruption to your operations with efficient installation</p>
                </div>
              </div>
            </div>
            <div className="solution-highlight">
              <div className="highlight-card">
                <div className="highlight-stat">
                  <span className="stat-number">4</span>
                  <span className="stat-text">Days</span>
                </div>
                <p>Average installation time for a complete warehouse transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="wh-projects">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          
          <div className="project-showcase">
            <div className="project-card featured">
              <div className="project-header">
                <h3>Keurig Dr Pepper</h3>
                <div className="project-badge">Featured Project</div>
              </div>
              <div className="project-content">
                <p className="project-description">
                  Transformed Lenexa, Kansas 7-Up warehouse by replacing 20+ year old high bay lighting 
                  with state of the art LED high bay lighting with motion sensors. After the warehouse 
                  was completed in 4 days it was virtually unrecognizable!
                </p>
                <div className="project-testimonial">
                  <p>"I've been waiting for this for 22 years!"</p>
                  <span>- Warehouse Manager</span>
                </div>
                <div className="project-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>9960 Lakeview Ave., Lenexa, KS</span>
                </div>
                <div className="project-stats">
                  <div className="stat">
                    <span className="stat-value">20+</span>
                    <span className="stat-label">Years Old System Replaced</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">4</span>
                    <span className="stat-label">Days to Complete</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Motion Sensor Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Rothchild Commercial Division</h3>
              </div>
              <div className="project-content">
                <p className="project-description">
                  Transformed Casual Patio showroom/warehouse in one day! Replaced 4 lamp T8's 
                  with 5K 1×2 linear High Bay LED Fixtures.
                </p>
                <div className="project-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>3719 N. Fry Rd., Katy, TX</span>
                </div>
                <div className="project-highlight">
                  <div className="highlight-item">
                    <span className="highlight-number">1</span>
                    <span className="highlight-text">Day Installation</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">5K</span>
                    <span className="highlight-text">Color Temperature</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wh-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your High Bay</h2>
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

export default Warehouses