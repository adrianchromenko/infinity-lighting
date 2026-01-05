import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Infinite</span> Lighting Possibilities
          </h1>
          <h2 className="hero-subtitle">Premier Commercial LED Lighting Solutions - Serving Greater Houston</h2>
          <p className="hero-description">
            Infinity Lighting Solutions is Houston's premier LED lighting company, leading the transformation of commercial and industrial 
            properties throughout Houston, Texas and surrounding areas with leading-edge, energy-efficient LED lighting systems. With over 20 years 
            of experience serving the Greater Houston area, our commercial LED lighting 
            upgrades are found in parking garages, warehouses, industrial buildings, schools, gyms, 
            churches, hotels, casinos, nursing homes, restaurants, and retail establishments across Houston, Katy, 
            Sugar Land, The Woodlands, and all of Harris County.
          </p>
          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Proudly Serving Houston, TX and the Greater Houston Area</span>
          </div>
          <a href="#projects" className="hero-cta">SEE OUR HOUSTON LED LIGHTING PROJECTS</a>
        </div>
      </div>
    </section>
  )
}

export default Hero