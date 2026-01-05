import './FountainsLandscape.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const FountainsLandscape = () => {
  const projects = [
    {
      id: 1,
      title: "BHP Billiton Tower",
      description: "Completed the bollards and the results are fantastic! Simple Fix with amazing results.",
      location: "1400 Post Oak Blvd., Houston, TX",
      type: "bollards"
    },
    {
      id: 2,
      title: "Four Oaks Place - Trees",
      description: "Transformed campus trees into a forest of color with DMX controlled, color changing landscape lighting",
      location: "1330 Post Oak Blvd., Houston, TX",
      type: "landscape"
    },
    {
      id: 3,
      title: "Four Oaks Place - Fountain",
      description: "Replaced old energy inefficient white lights with wireless DMX controlled color changing lights.",
      location: "1330 Post Oak Blvd., Houston, TX",
      type: "fountain"
    }
  ]

  return (
    <div className="fountains-landscape-page">
      <SEO 
        title="Fountain & Landscape LED Lighting"
        description="Beautiful LED lighting for Houston fountains and commercial landscapes. Energy-efficient outdoor illumination. Professional design and installation."
        keywords="fountain lighting Houston, landscape lighting Houston, outdoor LED lighting, commercial landscape lighting, decorative lighting Houston"
        canonical="/fountains-landscape"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="fl-hero">
        <div className="container">
          <div className="fl-hero-content">
            <h1 className="fl-hero-title">Houston Fountains & Commercial Landscape Lighting</h1>
            <p className="fl-hero-subtitle">A truly innovative approach to your outdoor lighting!</p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="fl-technology">
        <div className="container">
          <div className="tech-content">
            <div className="tech-highlight">
              <p className="tech-lead">
                Our computer lighting controllers orchestrate the color and intensity
                of hundreds of lights with millisecond accuracy.
              </p>
            </div>
            <div className="tech-grid">
              <div className="tech-main">
                <p className="tech-text">
                  Infinity Lighting Solutions working with GTL Landscape Lighting offers proprietary state of the art 
                  technology for fountain and commercial landscaping. Integrate with fountains, landscape, wall washers, 
                  bollards, and path lights to provide a cohesive experience for your tenants and guests.
                </p>
                <p className="tech-text">
                  The correct lighting enhances the feel and aesthetics of a property. Upgrading to LED fountain and 
                  landscape lighting enables you to save energy, reduce high maintenance costs, and enhance the quality 
                  of your installation.
                </p>
              </div>
              <div className="tech-features">
                <h3>Integration Options</h3>
                <ul className="feature-list">
                  <li>
                    <span className="feature-icon">💧</span>
                    <span>Fountains & Water Features</span>
                  </li>
                  <li>
                    <span className="feature-icon">🌳</span>
                    <span>Landscape Lighting</span>
                  </li>
                  <li>
                    <span className="feature-icon">🏢</span>
                    <span>Wall Washers</span>
                  </li>
                  <li>
                    <span className="feature-icon">🔲</span>
                    <span>Bollards</span>
                  </li>
                  <li>
                    <span className="feature-icon">🚶</span>
                    <span>Path Lights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="fl-benefits">
        <div className="container">
          <h2 className="section-title">Transform Your Property</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎨</div>
              <h3>Dynamic Color Control</h3>
              <p>
                DMX controlled systems allow infinite color combinations and dynamic lighting scenes 
                that can change for events, seasons, or daily schedules
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Energy Efficiency</h3>
              <p>
                LED technology reduces energy consumption by up to 80% compared to traditional 
                landscape lighting while providing superior illumination
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Low Maintenance</h3>
              <p>
                Long-lasting LED fixtures eliminate frequent bulb replacements and reduce 
                maintenance costs significantly over the system lifetime
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h3>Enhanced Aesthetics</h3>
              <p>
                Professional lighting design creates dramatic effects that enhance architectural 
                features and landscape elements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features Section */}
      <section className="fl-features">
        <div className="container">
          <div className="features-wrapper">
            <div className="features-content">
              <h2>State-of-the-Art Control Systems</h2>
              <div className="control-features">
                <div className="control-item">
                  <h4>Millisecond Accuracy</h4>
                  <p>Computer-controlled systems orchestrate hundreds of lights with perfect synchronization</p>
                </div>
                <div className="control-item">
                  <h4>Wireless DMX Control</h4>
                  <p>Advanced wireless technology eliminates complex wiring while maintaining reliable control</p>
                </div>
                <div className="control-item">
                  <h4>Programmable Scenes</h4>
                  <p>Create custom lighting programs for holidays, events, or seasonal changes</p>
                </div>
                <div className="control-item">
                  <h4>Remote Management</h4>
                  <p>Control and monitor your entire lighting system from anywhere</p>
                </div>
              </div>
            </div>
            <div className="features-visual">
              <div className="visual-card">
                <div className="visual-icon">🎭</div>
                <h3>Create Any Atmosphere</h3>
                <p>From subtle elegance to vibrant celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="fl-projects">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className={`project-card ${project.type}`}>
                <div className="project-image">
                  <div className="project-type-badge">{project.type}</div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fl-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your Fountains and</h2>
            <h2>Landscape with energy-efficient LED lighting?</h2>
            <button className="cta-button">Contact Us & Get A Free Energy Survey</button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default FountainsLandscape