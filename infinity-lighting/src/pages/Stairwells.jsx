import './Stairwells.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const Stairwells = () => {
  return (
    <div className="stairwells-page">
      <SEO 
        title="Stairwell LED Lighting"
        description="Upgrade stairwell lighting in Houston buildings with LED solutions. 24/7 reliability, enhanced safety, 75% energy savings. Professional installation throughout Houston TX."
        keywords="stairwell lighting Houston, LED stairwell lights, motion sensor stairwell lighting, commercial stairwell LED, building stairwell lighting Houston"
        canonical="/stairwells"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="sw-hero">
        <div className="container">
          <div className="sw-hero-content">
            <h1 className="sw-hero-title">Stairwell LED Lighting Houston TX</h1>
            <p className="sw-hero-subtitle">Smart motion-controlled lighting solutions for Houston commercial buildings</p>
          </div>
        </div>
      </section>

      {/* Waste Section */}
      <section className="sw-waste">
        <div className="container">
          <div className="waste-content">
            <h2 className="waste-title">Stop Wasting Energy & Money</h2>
            <div className="waste-text">
              <p className="waste-highlight">
                Having a stairwell lit 24/7/365 without a motion sensor and LED lighting 
                is a <span className="highlight">waste of money!</span>
              </p>
              <p className="waste-description">
                Transform your stairwells with intelligent LED lighting that activates only when needed, 
                dramatically reducing energy consumption while maintaining safety and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="sw-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">86%</div>
              <div className="stat-label">Energy Savings</div>
              <p className="stat-description">
                Average reduction in lighting energy consumption with motion-controlled LED systems
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Unnecessary Lighting</div>
              <p className="stat-description">
                Traditional stairwell lighting wastes energy lighting empty spaces around the clock
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Hours Lifespan</div>
              <p className="stat-description">
                LED fixtures last years longer than traditional lighting, reducing maintenance costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="sw-solution">
        <div className="container">
          <div className="solution-content">
            <h2 className="section-title">The Smart Solution</h2>
            <div className="solution-grid">
              <div className="solution-main">
                <h3>Motion-Activated LED Technology</h3>
                <p>
                  Our integrated motion sensor LED fixtures provide instant illumination when someone 
                  enters the stairwell, then automatically dim or turn off when vacant. This intelligent 
                  approach ensures safety while maximizing energy efficiency.
                </p>
                <ul className="solution-benefits">
                  <li>Automatic activation upon entry</li>
                  <li>Adjustable timeout settings</li>
                  <li>Emergency override capabilities</li>
                  <li>Code-compliant illumination levels</li>
                  <li>Seamless integration with existing systems</li>
                </ul>
              </div>
              <div className="solution-highlight">
                <div className="highlight-card">
                  <h4>Real World Impact</h4>
                  <p className="highlight-stat">$1,250</p>
                  <p className="highlight-label">Average Annual Savings Per Stairwell</p>
                  <p className="highlight-note">
                    Based on typical 10-story commercial building with 4 stairwells
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="sw-case-study">
        <div className="container">
          <h2 className="section-title">Success Story</h2>
          <div className="case-study-card">
            <div className="case-study-header">
              <div className="case-logo">LIFETIME FITNESS</div>
              <div className="case-location">Houston, Texas</div>
            </div>
            <div className="case-study-content">
              <div className="case-challenge">
                <h3>The Challenge</h3>
                <p>
                  Lifetime Fitness was experiencing excessive energy costs from their continuously 
                  lit stairwells across multiple floors. Their traditional fluorescent fixtures 
                  were consuming power 24/7, regardless of actual usage.
                </p>
              </div>
              <div className="case-solution">
                <h3>Our Solution</h3>
                <p>
                  We installed state-of-the-art LED fixtures with integrated motion sensors 
                  throughout all stairwells. The new system provides bright, instant illumination 
                  when needed while remaining in low-power standby mode when vacant.
                </p>
              </div>
              <div className="case-results">
                <h3>The Results</h3>
                <div className="results-grid">
                  <div className="result-item">
                    <span className="result-value">82%</span>
                    <span className="result-label">Energy Reduction</span>
                  </div>
                  <div className="result-item">
                    <span className="result-value">$4,800</span>
                    <span className="result-label">Annual Savings</span>
                  </div>
                  <div className="result-item">
                    <span className="result-value">14 months</span>
                    <span className="result-label">ROI Period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="sw-benefits">
        <div className="container">
          <h2 className="section-title">Why Upgrade Your Stairwells?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏢</div>
              <h3>Code Compliance</h3>
              <p>
                Meet all building codes and safety requirements while reducing energy consumption. 
                Our systems maintain required illumination levels for emergency egress.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                Reduce your carbon footprint and contribute to LEED certification points. 
                Smart lighting demonstrates environmental responsibility.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Enhanced Safety</h3>
              <p>
                Instant, bright illumination when needed ensures safe passage while reducing 
                liability risks from inadequate lighting.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Quick ROI</h3>
              <p>
                Most installations pay for themselves in 12-18 months through energy savings 
                and reduced maintenance costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sw-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Stop Lighting Empty Stairwells</h2>
            <p>Calculate your potential savings with a free energy audit</p>
            <button className="cta-button">Get Your Free Energy Assessment</button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default Stairwells