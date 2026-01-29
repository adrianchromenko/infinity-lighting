import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Full-Service</span> Electrical & LED Lighting
          </h1>
          <h2 className="hero-subtitle">Houston's Premier Commercial Contractor with 5-Year Warranty</h2>
          <p className="hero-description">
            Infinity Lighting Solutions provides complete electrical and LED lighting services for commercial and industrial 
            properties throughout Houston. As a full-service electrical contractor with over 20 years of experience, we handle 
            everything from panel upgrades to complete LED retrofits. Our industry-leading <strong>5-year warranty</strong> covers 
            all work, ensuring your investment is protected. We serve parking garages, warehouses, office buildings, hotels, 
            and retail establishments across Houston, Katy, Sugar Land, The Woodlands, and all of Harris County.
          </p>
          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Proudly Serving Houston, TX and the Greater Houston Area</span>
          </div>
          <div className="hero-badges">
            <div className="warranty-badge-hero">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span>5-Year Warranty</span>
            </div>
            <div className="service-badge-hero">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
              </svg>
              <span>Full-Service Electrical</span>
            </div>
          </div>
          <a href="/projects" className="hero-cta">VIEW OUR PROJECTS & 5-YEAR WARRANTY</a>
        </div>
      </div>
    </section>
  )
}

export default Hero