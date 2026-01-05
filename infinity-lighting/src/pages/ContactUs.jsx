import './ContactUs.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <SEO 
        title="Contact Us - Houston LED Lighting"
        description="Contact Infinity Lighting Solutions for Houston commercial LED lighting. Free consultations, energy audits. Call (281) 202-4625 or email Sales@Inflighting.com"
        keywords="contact LED lighting Houston, commercial lighting consultation, LED lighting contractor Houston, Infinity Lighting Solutions contact"
        canonical="/contact-us"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Houston's LED Lighting Experts</h1>
            <p className="contact-hero-subtitle">
              Get your free energy assessment and start saving on commercial lighting costs today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Get Your Free Energy Assessment</h2>
              <p className="form-intro">
                Complete the form below and our Houston LED lighting specialists will contact you 
                within 24 hours to schedule your free consultation.
              </p>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required 
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="email@company.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="(713) 555-0000"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="property-type">Property Type *</label>
                  <select id="property-type" name="property-type" required>
                    <option value="">Select Property Type</option>
                    <option value="parking-garage">Parking Garage</option>
                    <option value="office-building">Office Building</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="retail">Retail Space</option>
                    <option value="hotel">Hotel</option>
                    <option value="school">School/Gym</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Property Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    placeholder="Houston, TX"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message / Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    placeholder="Tell us about your lighting needs and current challenges..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Request Free Energy Assessment
                </button>
              </form>
            </div>
            
            <div className="contact-details-section">
              <div className="contact-card">
                <h3>Houston Office</h3>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <p>Richmond, TX 77407</p>
                    <p className="service-area">Serving Houston, Sugar Land, Katy,<br/>The Woodlands & Greater Houston</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <p><a href="tel:2812024625">(281) 202-4625</a></p>
                    <p><a href="tel:3185723212">(318) 572-3212</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <p><a href="mailto:Sales@Inflighting.com">Sales@Inflighting.com</a></p>
                  </div>
                </div>
              </div>
              
              <div className="contact-card">
                <h3>Why Choose Infinity Lighting?</h3>
                <ul className="why-list">
                  <li>20+ Years Experience in Houston</li>
                  <li>Free Energy Assessments</li>
                  <li>Maximum Utility Rebates</li>
                  <li>50%+ Energy Savings Guaranteed</li>
                  <li>Professional Installation Team</li>
                  <li>5-Year Warranty on All Products</li>
                </ul>
              </div>
              
              <div className="contact-card emergency">
                <h3>Emergency Service</h3>
                <p>Need immediate assistance with your commercial lighting?</p>
                <a href="tel:2812024625" className="emergency-btn">
                  Call Now: (281) 202-4625
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="service-areas">
        <div className="container">
          <h2 className="section-title">Houston Service Areas</h2>
          <div className="areas-grid">
            <div className="area-card">
              <h4>Central Houston</h4>
              <ul>
                <li>Downtown</li>
                <li>Midtown</li>
                <li>Montrose</li>
                <li>Medical Center</li>
                <li>Galleria</li>
              </ul>
            </div>
            <div className="area-card">
              <h4>West Houston</h4>
              <ul>
                <li>Katy</li>
                <li>Energy Corridor</li>
                <li>Memorial</li>
                <li>Spring Branch</li>
                <li>Westchase</li>
              </ul>
            </div>
            <div className="area-card">
              <h4>North Houston</h4>
              <ul>
                <li>The Woodlands</li>
                <li>Spring</li>
                <li>Cypress</li>
                <li>Tomball</li>
                <li>Conroe</li>
              </ul>
            </div>
            <div className="area-card">
              <h4>South Houston</h4>
              <ul>
                <li>Sugar Land</li>
                <li>Missouri City</li>
                <li>Pearland</li>
                <li>Clear Lake</li>
                <li>Friendswood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="container">
          <h2 className="section-title">Visit Our Houston Office</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <h3>Infinity Lighting Solutions</h3>
                <p>Richmond, TX 77407</p>
                <p>Serving All of Greater Houston</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start Saving on Energy Costs Today</h2>
            <p>Join hundreds of Houston businesses that have upgraded to LED</p>
            <div className="cta-buttons">
              <a href="tel:2812024625" className="cta-button">Call (281) 202-4625</a>
              <a href="mailto:Sales@Inflighting.com" className="cta-button-secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default ContactUs