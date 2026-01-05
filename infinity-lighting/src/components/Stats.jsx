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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3 className="support-stat-title">Maximum Energy Impact</h3>
            <div className="stat-highlight">
              <span className="highlight-number">#1 Technology</span>
              <span className="highlight-text">Most effective energy-saving solution for commercial properties</span>
            </div>
            <p className="support-stat-text">
              LED technology delivers immediate ROI with up to 90% energy reduction compared to traditional lighting
            </p>
          </div>
          
          <div className="support-stat">
            <div className="support-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <h3 className="support-stat-title">2027 Projection</h3>
            <div className="stat-highlight">
              <span className="highlight-number">348,000 MWh</span>
              <span className="highlight-text">Annual electricity savings nationwide</span>
            </div>
            <p className="support-stat-text">
              Equivalent to removing 44 large power plants from the grid - a massive environmental impact
            </p>
          </div>
          
          <div className="support-stat">
            <div className="support-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="support-stat-title">Your Savings Potential</h3>
            <div className="stat-highlight">
              <span className="highlight-number">$30+ Billion</span>
              <span className="highlight-text">Total annual savings opportunity</span>
            </div>
            <p className="support-stat-text">
              Join thousands of businesses already cutting energy costs by 50-90% with LED upgrades
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