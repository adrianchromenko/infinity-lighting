import './Stats.css'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-header">
          <h2 className="stats-title">The Energy Crisis in Numbers</h2>
          <div className="stats-underline"></div>
        </div>
        
        <div className="main-stat">
          <div className="main-stat-content">
            <div className="stat-amount">
              <span className="dollar-sign">$</span>
              <span className="stat-value">1.2</span>
              <span className="stat-unit">Trillion</span>
            </div>
            <p className="main-stat-description">
              Annual cost of wasted energy in US buildings
            </p>
          </div>
        </div>

        <div className="supporting-stats">
          <div className="support-stat">
            <div className="support-stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3 className="support-stat-title">Greatest Impact Potential</h3>
            <p className="support-stat-text">
              LED lighting represents the single most effective energy-saving technology available for commercial buildings today
            </p>
          </div>
          
          <div className="support-stat">
            <div className="support-stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="support-stat-title">By 2027</h3>
            <div className="stat-highlight">
              <span className="highlight-number">348,000 MWh</span>
              <span className="highlight-text">Annual Electricity Savings</span>
            </div>
            <p className="support-stat-text">
              Equivalent to 44 power plants' output
            </p>
          </div>
          
          <div className="support-stat">
            <div className="support-stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="support-stat-title">Save Money</h3>
            <div className="stat-highlight">
              <span className="highlight-number">$30+ Billion</span>
              <span className="highlight-text">Annual Savings Potential</span>
            </div>
            <p className="support-stat-text">
              At today's electricity prices
            </p>
          </div>
        </div>
        
        <div className="upgrade-cta">
          <h3 className="upgrade-headline">Ready to Stop Wasting Energy?</h3>
          <p className="upgrade-subtext">Join thousands of businesses already saving with LED technology</p>
          <div className="cta-buttons">
            <Link to="/energy-audit" className="cta-primary">Get Free Energy Audit</Link>
            <Link to="/contact-us" className="cta-secondary">Calculate Your Savings</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats