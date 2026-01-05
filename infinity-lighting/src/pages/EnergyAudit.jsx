import './EnergyAudit.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientsPartners from '../components/ClientsPartners'
import FloatingPhone from '../components/FloatingPhone'

const EnergyAudit = () => {
  return (
    <div className="energy-audit-page">
      <SEO 
        title="Free LED Lighting Energy Audit"
        description="Get a free commercial LED lighting energy audit in Houston. Discover potential savings, ROI analysis, utility rebates. No obligation assessment."
        keywords="LED energy audit Houston, free lighting assessment, commercial energy audit, LED lighting savings Houston, energy efficiency audit"
        canonical="/energy-audit"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="ea-hero">
        <div className="container">
          <div className="ea-hero-content">
            <h1 className="ea-hero-title">Houston Commercial LED Lighting Assessment</h1>
            <h1 className="ea-hero-title">&amp; Energy Audit</h1>
            <div className="ea-hero-highlight">
              <p>Most clients save more than <span className="accent">50%</span></p>
              <p>on energy cost with LED lighting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="ea-service">
        <div className="container">
          <div className="service-content">
            <h2 className="service-title">
              Infinity Lighting Solutions provides a<br />
              complete assessment of your property.
            </h2>
            
            <div className="assessment-details">
              <p className="assessment-intro">
                The assessment includes a survey of all existing fixtures as to type and wattages, 
                meter readings of foot candles, color temperature, number of fixtures, detailed 
                measurements of the property, hours of operation, and kilowatt cost of electricity.
              </p>
              
              <div className="assessment-process">
                <h3>Our Comprehensive Assessment Process</h3>
                <div className="process-grid">
                  <div className="process-item">
                    <div className="process-icon">📋</div>
                    <h4>Fixture Survey</h4>
                    <p>Complete inventory of all existing fixtures, types, and wattages</p>
                  </div>
                  <div className="process-item">
                    <div className="process-icon">💡</div>
                    <h4>Light Meter Readings</h4>
                    <p>Precise foot candle measurements throughout your property</p>
                  </div>
                  <div className="process-item">
                    <div className="process-icon">🌡️</div>
                    <h4>Color Temperature Analysis</h4>
                    <p>Evaluation of current lighting quality and color consistency</p>
                  </div>
                  <div className="process-item">
                    <div className="process-icon">📐</div>
                    <h4>Property Measurements</h4>
                    <p>Detailed dimensional analysis of all lighting areas</p>
                  </div>
                  <div className="process-item">
                    <div className="process-icon">⏰</div>
                    <h4>Usage Patterns</h4>
                    <p>Documentation of hours of operation and occupancy schedules</p>
                  </div>
                  <div className="process-item">
                    <div className="process-icon">💰</div>
                    <h4>Cost Analysis</h4>
                    <p>Current kilowatt costs and energy consumption evaluation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="ea-recommendations">
        <div className="container">
          <div className="recommendations-content">
            <div className="recommendations-text">
              <h2>Data-Driven Solutions</h2>
              <p className="recommendations-lead">
                From the collected data we will recommend the most energy-efficient and 
                cost-effective lighting solution for your property.
              </p>
              <p className="recommendations-detail">
                If necessary, photometric studies will be utilized to calculate the precise 
                number of fixtures, placement of fixtures, and lumens necessary to meet all 
                operational and safety requirements.
              </p>
              
              <div className="deliverables">
                <h3>What You'll Receive:</h3>
                <ul>
                  <li>Comprehensive energy savings analysis</li>
                  <li>ROI calculations and payback period</li>
                  <li>Detailed fixture recommendations</li>
                  <li>Photometric studies when required</li>
                  <li>Installation timeline and project plan</li>
                  <li>Available rebates and incentives information</li>
                </ul>
              </div>
            </div>
            
            <div className="recommendations-visual">
              <div className="savings-calculator">
                <h3>Average Client Savings</h3>
                <div className="savings-display">
                  <div className="savings-percentage">
                    <span className="percentage-number">50-75%</span>
                    <span className="percentage-label">Energy Cost Reduction</span>
                  </div>
                  <div className="savings-roi">
                    <span className="roi-number">12-24</span>
                    <span className="roi-label">Months Typical ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ea-benefits">
        <div className="container">
          <h2 className="section-title">Why Get an Energy Audit?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Identify Savings</h3>
              <p>Discover exactly how much you can save with LED upgrades</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Optimize Performance</h3>
              <p>Ensure proper lighting levels for safety and productivity</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Plan Your Investment</h3>
              <p>Make informed decisions with detailed ROI projections</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Maximize Incentives</h3>
              <p>Identify all available rebates and tax incentives</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ea-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your building</h2>
            <h2>with energy-efficient LED lighting?</h2>
            <div className="cta-buttons">
              <button className="cta-button">Contact Us & Get A Free Energy Survey</button>
              <button className="cta-button-secondary">GET A FREE ENERGY AUDIT</button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <ClientsPartners />

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default EnergyAudit