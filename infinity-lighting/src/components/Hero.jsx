import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Full-Service</span> LED Lighting & Electrical
          </h1>
          <h2 className="hero-subtitle">Houston's commercial LED lighting and electrical contractor, backed by a 10-year fixture and 5-year labor warranty.</h2>
          <p className="hero-description">
            From panel upgrades to full LED retrofits, one team handles design, fixtures, installation and service
            for parking garages, offices, hotels and warehouses across Greater Houston.
          </p>
          <div className="hero-badges">
            <div className="warranty-badge-hero">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span>10-Yr Fixture / 5-Yr Labor Warranty</span>
            </div>
            <div className="service-badge-hero">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
              </svg>
              <span>Full-Service Electrical</span>
            </div>
          </div>
          <div className="hero-actions">
            <a href="/energy-audit" className="hero-cta">Get a Free Energy Audit</a>
            <a href="/projects" className="hero-cta hero-cta-secondary">See Our Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero