import { Link } from 'react-router-dom'
import './WarrantySection.css'

const WarrantySection = () => {
  return (
    <section className="warranty-section">
      <div className="container">
        <div className="warranty-content">
          <div className="warranty-icon-main">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          </div>
          
          <h2 className="warranty-title-main">Industry-Leading 5-Year Warranty</h2>
          <p className="warranty-subtitle">
            Full-Service Electrical & LED Lighting with Complete Peace of Mind
          </p>
          
          <div className="warranty-features">
            <div className="warranty-feature">
              <div className="warranty-feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="warranty-feature-title">5 Years Coverage</h3>
              <p className="warranty-feature-desc">
                Complete warranty on all electrical work and LED installations
              </p>
            </div>
            
            <div className="warranty-feature">
              <div className="warranty-feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                </svg>
              </div>
              <h3 className="warranty-feature-title">Full-Service Electrical</h3>
              <p className="warranty-feature-desc">
                Complete electrical services including panel upgrades and wiring
              </p>
            </div>
            
            <div className="warranty-feature">
              <div className="warranty-feature-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="warranty-feature-title">Quality Guaranteed</h3>
              <p className="warranty-feature-desc">
                Professional installation with rigorous quality control standards
              </p>
            </div>
          </div>
          
          <Link to="/contact-us" className="warranty-cta">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Learn More About Our Warranty
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WarrantySection