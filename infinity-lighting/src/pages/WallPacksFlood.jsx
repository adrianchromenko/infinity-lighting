import './WallPacksFlood.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const WallPacksFlood = () => {
  return (
    <div className="wallpacks-flood-page">
      <SEO 
        title="Wall Pack & Flood LED Lighting"
        description="Commercial wall pack and flood LED lighting in Houston. Secure perimeter lighting, parking lot illumination. Save up to 75% on energy."
        keywords="wall pack lighting Houston, LED flood lighting, commercial exterior lighting, perimeter lighting Houston, security lighting Houston"
        canonical="/wall-packs-flood"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="wpf-hero">
        <div className="container">
          <div className="wpf-hero-content">
            <h1 className="wpf-hero-title">Houston Wall Packs & Flood LED Lighting</h1>
            <p className="wpf-hero-subtitle">
              Illuminate walkways, driveways, buildings, outdoor areas, and flag poles.
            </p>
          </div>
        </div>
      </section>

      {/* Energy Savings Highlight */}
      <section className="wpf-highlight">
        <div className="container">
          <div className="highlight-box">
            <h2 className="highlight-title">
              Energy efficient LED fixtures save more than <span className="accent">65% energy</span>
              <br />while increasing the quality of light.
            </h2>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="wpf-solutions">
        <div className="container">
          <div className="solutions-grid">
            <div className="solution-card flood">
              <div className="solution-icon">💡</div>
              <h3>LED Flood Lighting</h3>
              <p className="solution-description">
                Infinity Lighting Solutions offers multiple lines of LED floodlights from 50 watts to over 500 watts 
                and will match the right fixture to your needs.
              </p>
              <div className="solution-features">
                <h4>Applications:</h4>
                <ul>
                  <li>Building facades</li>
                  <li>Outdoor areas</li>
                  <li>Flag poles</li>
                  <li>Parking lots</li>
                  <li>Sports facilities</li>
                </ul>
              </div>
              <div className="wattage-range">
                <span className="range-label">Power Range</span>
                <div className="range-display">
                  <span className="range-min">50W</span>
                  <span className="range-bar"></span>
                  <span className="range-max">500W+</span>
                </div>
              </div>
            </div>

            <div className="solution-card wallpack">
              <div className="solution-icon">🏢</div>
              <h3>LED Wall Pack Lighting</h3>
              <p className="solution-description">
                Wall pack lighting is used primarily to illuminate the exterior building perimeter. 
                Wall packs add another layer of security to your property by eliminating dark areas 
                not illuminated by parking lot or floodlights.
              </p>
              <div className="solution-benefits">
                <h4>Key Benefits:</h4>
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>60% average energy savings</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🔧</span>
                  <span>Eliminate high maintenance costs</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🛡️</span>
                  <span>Enhanced security coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="wpf-products">
        <div className="container">
          <h2 className="section-title">Complete Exterior Lighting Solutions</h2>
          <p className="section-subtitle">
            Infinity Lighting Solutions offers a broad range of LED wall pack fixtures to replace 
            existing high wattage metal halide fixtures.
          </p>
          
          <div className="products-grid">
            <div className="product-category">
              <div className="category-icon">🌙</div>
              <h3>Dusk-to-Dawn</h3>
              <p>Automatic photocell control for seamless operation</p>
            </div>
            <div className="product-category">
              <div className="category-icon">📡</div>
              <h3>Motion Sensor</h3>
              <p>Smart activation for maximum energy efficiency</p>
            </div>
            <div className="product-category">
              <div className="category-icon">🎨</div>
              <h3>Color Options</h3>
              <p>Various color temperatures to match your needs</p>
            </div>
            <div className="product-category">
              <div className="category-icon">🌧️</div>
              <h3>Weather Resistant</h3>
              <p>IP65+ rated for all weather conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="wpf-applications">
        <div className="container">
          <h2 className="section-title">Where We Make a Difference</h2>
          <div className="applications-grid">
            <div className="app-card">
              <div className="app-header walkways">
                <h3>Walkways & Pathways</h3>
              </div>
              <p>Ensure safe passage with bright, consistent illumination along all pedestrian routes.</p>
            </div>
            <div className="app-card">
              <div className="app-header driveways">
                <h3>Driveways & Entrances</h3>
              </div>
              <p>Welcome visitors with well-lit entrances that enhance visibility and curb appeal.</p>
            </div>
            <div className="app-card">
              <div className="app-header buildings">
                <h3>Building Perimeters</h3>
              </div>
              <p>Eliminate dark spots and enhance security with strategic wall pack placement.</p>
            </div>
            <div className="app-card">
              <div className="app-header outdoor">
                <h3>Outdoor Areas</h3>
              </div>
              <p>Transform outdoor spaces into usable areas with powerful flood lighting solutions.</p>
            </div>
            <div className="app-card">
              <div className="app-header flags">
                <h3>Flag Poles</h3>
              </div>
              <p>Showcase your colors 24/7 with dedicated flag pole lighting fixtures.</p>
            </div>
            <div className="app-card">
              <div className="app-header security">
                <h3>Security Zones</h3>
              </div>
              <p>Deter unwanted activity with bright, motion-activated security lighting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="wpf-stats">
        <div className="container">
          <div className="stats-wrapper">
            <div className="stat-card primary">
              <div className="stat-number">65%+</div>
              <div className="stat-label">Energy Savings</div>
              <p className="stat-description">
                Compared to traditional metal halide fixtures
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number">50,000</div>
              <div className="stat-label">Hour Lifespan</div>
              <p className="stat-description">
                Minimal maintenance required
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number">3x</div>
              <div className="stat-label">Better Light Quality</div>
              <p className="stat-description">
                Superior color rendering and uniformity
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number">Instant</div>
              <div className="stat-label">On/Off</div>
              <p className="stat-description">
                No warm-up time required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="wpf-final-cta">
        <div className="container">
          <div className="final-message">
            <p className="final-highlight">
              Energy efficient LED fixtures save more than 65% energy while increasing the quality of light.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wpf-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to upgrade your Wall Packs &</h2>
            <h2>Floodlights with energy-efficient LED lighting?</h2>
            <button className="cta-button">Contact Us & Get A Free Energy Survey</button>
            <button className="cta-button-secondary">GET A FREE ENERGY AUDIT</button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default WallPacksFlood