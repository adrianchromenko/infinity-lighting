import './LightingProposal.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const LightingProposal = () => {
  return (
    <div className="lighting-proposal-page">
      <SEO 
        title="Commercial LED Lighting Proposal"
        description="Comprehensive LED lighting proposals for Houston businesses. Detailed cost analysis, energy savings projections, financing options available."
        keywords="LED lighting proposal Houston, commercial lighting design, LED lighting cost analysis, energy savings proposal, LED lighting ROI Houston"
        canonical="/lighting-proposal"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="lp-hero">
        <div className="container">
          <div className="lp-hero-content">
            <h1 className="lp-hero-title">HOUSTON LED LIGHTING PROPOSAL</h1>
            <p className="lp-hero-subtitle">For the most efficient LED lighting upgrade in Houston, Texas!</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="lp-overview">
        <div className="container">
          <div className="overview-content">
            <p className="overview-text">
              The proposal will include an analysis of the current lighting system and recommendations 
              for the most efficient LED lighting upgrade for the application.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Proposal Section */}
      <section className="lp-details">
        <div className="container">
          <div className="details-grid">
            <div className="details-main">
              <h2>What's Included in Your Proposal</h2>
              <p className="details-lead">
                Our detailed proposal will include a design layout of the building showing the 
                positioning of all fixtures, including additional fixtures if required, or removal 
                of any existing fixtures that will not be utilized.
              </p>
              <p className="details-text">
                The proposal will include an analysis of the current lighting system and 
                recommendations for the most efficient lighting upgrade for the application.
              </p>
              
              <div className="proposal-components">
                <div className="component-card">
                  <div className="component-icon">📐</div>
                  <h3>Design Layout</h3>
                  <ul>
                    <li>Complete building floor plans</li>
                    <li>Fixture positioning maps</li>
                    <li>Optimal placement recommendations</li>
                    <li>Additional fixtures if needed</li>
                    <li>Removal of unnecessary fixtures</li>
                  </ul>
                </div>
                
                <div className="component-card">
                  <div className="component-icon">📊</div>
                  <h3>System Analysis</h3>
                  <ul>
                    <li>Current system evaluation</li>
                    <li>Energy consumption metrics</li>
                    <li>Performance assessment</li>
                    <li>Efficiency comparisons</li>
                    <li>Code compliance review</li>
                  </ul>
                </div>
                
                <div className="component-card">
                  <div className="component-icon">💡</div>
                  <h3>LED Recommendations</h3>
                  <ul>
                    <li>Specific fixture models</li>
                    <li>Lumen output specifications</li>
                    <li>Color temperature options</li>
                    <li>Control system integration</li>
                    <li>Smart lighting capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="details-visual">
              <div className="visual-highlight">
                <h3>Proposal Benefits</h3>
                <div className="benefit-list">
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Professional design layout</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Optimized fixture placement</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Detailed cost analysis</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>ROI projections</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Implementation timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculations Section */}
      <section className="lp-savings">
        <div className="container">
          <h2 className="section-title">Comprehensive Savings Analysis</h2>
          <p className="savings-intro">
            The proposal will also include saving calculations that compare the current amount 
            of electricity being used, the amount that will be used by the new LED system, 
            the kilowatt-hours saved, annualized dollars saved based on the kilowatt rate, 
            the project payback based on savings, and the return on investment.
          </p>
          
          <div className="savings-grid">
            <div className="savings-card">
              <div className="savings-icon">⚡</div>
              <h3>Energy Comparison</h3>
              <p>Current vs. LED system consumption analysis</p>
            </div>
            <div className="savings-card">
              <div className="savings-icon">💰</div>
              <h3>Cost Savings</h3>
              <p>Annualized dollar savings based on kW rates</p>
            </div>
            <div className="savings-card">
              <div className="savings-icon">📈</div>
              <h3>ROI Analysis</h3>
              <p>Complete return on investment projections</p>
            </div>
            <div className="savings-card">
              <div className="savings-icon">⏰</div>
              <h3>Payback Period</h3>
              <p>Project payback timeline based on savings</p>
            </div>
            <div className="savings-card">
              <div className="savings-icon">🔋</div>
              <h3>kWh Reduction</h3>
              <p>Total kilowatt-hours saved annually</p>
            </div>
            <div className="savings-card">
              <div className="savings-icon">📊</div>
              <h3>Detailed Reports</h3>
              <p>Comprehensive financial analysis reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Utility Incentives Section */}
      <section className="lp-incentives">
        <div className="container">
          <div className="incentives-content">
            <div className="incentives-text">
              <h2>Maximize Your Utility Incentives</h2>
              <p className="incentives-lead">
                Infinity Lighting Solutions works with TGHA Group, experts at navigating 
                the complex process for each utility company.
              </p>
              <p className="incentives-detail">
                Their experience and know-how allow us to qualify every eligible project 
                to receive the maximum incentives from each participating utility.
              </p>
              
              <div className="incentive-benefits">
                <h3>We Handle Everything:</h3>
                <ul>
                  <li>Utility rebate applications</li>
                  <li>Documentation requirements</li>
                  <li>Compliance verification</li>
                  <li>Maximum incentive qualification</li>
                  <li>Direct utility coordination</li>
                </ul>
              </div>
            </div>
            
            <div className="incentives-visual">
              <div className="partner-card">
                <h3>TGHA Group Partnership</h3>
                <p>Expert navigation of utility incentive programs</p>
                <div className="partner-stats">
                  <div className="stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Approval Rate</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">Maximum</span>
                    <span className="stat-label">Incentives Secured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator Example Section */}
      <section className="lp-calculator">
        <div className="container">
          <h2 className="section-title">Savings Calculator Example</h2>
          <div className="calculator-display">
            <div className="calculator-grid">
              <div className="calc-item current">
                <h3>Current System</h3>
                <div className="calc-details">
                  <div className="calc-row">
                    <span>Annual kWh:</span>
                    <span className="value">500,000</span>
                  </div>
                  <div className="calc-row">
                    <span>Annual Cost:</span>
                    <span className="value">$50,000</span>
                  </div>
                  <div className="calc-row">
                    <span>Maintenance:</span>
                    <span className="value">$8,000/yr</span>
                  </div>
                </div>
              </div>
              
              <div className="calc-arrow">→</div>
              
              <div className="calc-item new">
                <h3>LED System</h3>
                <div className="calc-details">
                  <div className="calc-row">
                    <span>Annual kWh:</span>
                    <span className="value">175,000</span>
                  </div>
                  <div className="calc-row">
                    <span>Annual Cost:</span>
                    <span className="value">$17,500</span>
                  </div>
                  <div className="calc-row">
                    <span>Maintenance:</span>
                    <span className="value">$1,000/yr</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="savings-summary">
              <div className="summary-item">
                <span className="summary-label">Annual Energy Savings:</span>
                <span className="summary-value">325,000 kWh</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Annual Cost Savings:</span>
                <span className="summary-value highlight">$39,000</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Payback Period:</span>
                <span className="summary-value">18 Months</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">10-Year Savings:</span>
                <span className="summary-value">$390,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lp-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your building</h2>
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

export default LightingProposal