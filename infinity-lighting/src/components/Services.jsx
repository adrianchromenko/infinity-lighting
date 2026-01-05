import './Services.css'

const Services = () => {
  const benefits = [
    "Increase the market value of your Houston property",
    "Decrease lighting energy use by 50%+ in Texas heat",
    "Increase light levels and enhance light quality",
    "Decrease maintenance costs for Houston businesses",
    "Improve the safety of your building environment",
    "With our quality LED products, realize the highest return on investment"
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services-content">
          <div className="services-header">
            <h2 className="services-title">HOUSTON'S LED LIGHTING EXPERTS</h2>
            <h3 className="services-subtitle">
              Energy efficiency is about using less energy to get the same job done - 
              saving Houston businesses thousands on energy costs
            </h3>
          </div>
          
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <a href="#services" className="services-cta">DISCOVER OUR HOUSTON LED LIGHTING SERVICES</a>
        </div>
      </div>
    </section>
  )
}

export default Services