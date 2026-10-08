import './Services.css'

const Services = () => {
  const benefits = [
    "Cut lighting energy use by 50% or more",
    "Brighter, more even light in every space",
    "No bulbs or ballasts, so maintenance all but disappears",
    "Safer parking garages, stairwells and entries",
    "Higher property value and tenant appeal",
    "Fast payback, often inside two years"
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services-content">
          <div className="services-grid">
            <div className="services-left">
              <div className="services-header">
                <h2 className="services-title">WHY HOUSTON PROPERTIES SWITCH TO LED</h2>
                <h3 className="services-subtitle">
                  Less energy for the same light, and a building that looks better for it.
                </h3>
              </div>
              <a href="/energy-audit" className="services-cta">GET A FREE ENERGY AUDIT</a>
            </div>

            <div className="services-right">
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
