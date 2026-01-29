import { Link } from 'react-router-dom'
import './Projects.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const Projects = () => {
  const projects = [
    {
      id: 'shepherd-parking-garage',
      title: '2323 S. Shepherd Parking Garage',
      type: 'Parking Garage',
      description: 'Complete LED retrofit for multi-level parking structure',
      image: '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd After 1.jpg',
      features: [
        'Multi-level parking garage LED conversion',
        'Stairwell safety lighting upgrade',
        'Motion sensor integration',
        '65% energy savings achieved',
        '24/7 operation reliability'
      ],
      images: [
        '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd After 1.jpg',
        '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 1.JPEG',
        '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 2.jpg',
        '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 5.jpg',
        '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 6.jpg',
        '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Stairwell Split.JPEG'
      ]
    },
    {
      id: 'global-financial',
      title: 'Global Financial',
      type: 'Commercial Office',
      description: 'Modern track lighting installation for financial services office',
      image: '/projects/Global Financial/Global Financial Track Lighting.jpg',
      features: [
        'Premium track lighting system',
        'Adjustable beam angles for flexibility',
        'Enhanced workspace illumination',
        'Professional atmosphere lighting',
        'Energy-efficient LED technology'
      ],
      images: [
        '/projects/Global Financial/Global Financial Track Lighting.jpg',
        '/projects/Global Financial/Global Financial Track Lighting with First Test Strip.jpg'
      ]
    },
    {
      id: 'greenstreet-parking',
      title: 'GreenStreet Parking Garage',
      type: 'Parking Garage',
      description: 'Comprehensive lighting upgrade with before & after transformation',
      image: '/projects/GreenStreet Parking Garage/GreenStreet After 1.jpg',
      features: [
        'Complete garage lighting overhaul',
        'Elevator lobby modernization',
        'Valet area enhancement',
        'Dramatic visual improvement',
        '70% reduction in energy costs'
      ],
      images: [
        '/projects/GreenStreet Parking Garage/GreenStreet After 1.jpg',
        '/projects/GreenStreet Parking Garage/GreenStreet Elevator Lobby After.JPEG',
        '/projects/GreenStreet Parking Garage/GreenStreet Elevator Lobby Before.JPEG',
        '/projects/GreenStreet Parking Garage/GreenStreet Old v New 1.jpg',
        '/projects/GreenStreet Parking Garage/GreenStreet Phase 1 After.jpg',
        '/projects/GreenStreet Parking Garage/GreenStreet Phase 1 Before.jpg',
        '/projects/GreenStreet Parking Garage/GreenStreet Valet Ramp Before.jpg',
        '/projects/GreenStreet Parking Garage/GreenStreet Valet Ramp Exit After.jpg'
      ]
    },
    {
      id: 'springwoods-marriott',
      title: 'Springwoods Village Marriott',
      type: 'Hospitality',
      description: 'Full-service hotel lighting renovation including guest rooms and facilities',
      image: '/projects/Springwoods Village Marriott/Marriott Garage After 2.jpg',
      features: [
        'Guest room lighting upgrades',
        'Parking garage illumination',
        'Loading dock safety lighting',
        'Stairwell emergency lighting',
        'Cove lighting aesthetics'
      ],
      images: [
        '/projects/Springwoods Village Marriott/Marriott Garage After 2.jpg',
        '/projects/Springwoods Village Marriott/Marriott Cove Lighting After.jpg',
        '/projects/Springwoods Village Marriott/Marriott Cove Lighting Before 1.jpg',
        '/projects/Springwoods Village Marriott/Marriott Garage Before 2.jpg',
        '/projects/Springwoods Village Marriott/Marriott Garage Stairwell After 1.jpg',
        '/projects/Springwoods Village Marriott/Marriott Garage Stairwell Before.jpg',
        '/projects/Springwoods Village Marriott/Marriott King Headboard Before 1.jpg',
        '/projects/Springwoods Village Marriott/Marriott King Headboard Demo Install 1.jpg',
        '/projects/Springwoods Village Marriott/Marriott King Headboard Demo Install After.jpg',
        '/projects/Springwoods Village Marriott/Marriott Loading Dock After 2.jpg',
        '/projects/Springwoods Village Marriott/Marriott Loading Dock Before.jpg'
      ]
    }
  ]

  return (
    <div className="projects-page">
      <SEO 
        title="Projects - Commercial LED Lighting Houston"
        description="View our portfolio of successful LED lighting projects in Houston. Parking garages, offices, hotels, and more. Full-service electrical with 5-year warranty."
        keywords="LED lighting projects Houston, commercial lighting portfolio, parking garage lighting, office lighting, hotel lighting renovation"
        canonical="/projects"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1 className="projects-hero-title">Our Lighting Projects</h1>
            <p className="projects-hero-subtitle">
              Full-Service Electrical & LED Lighting Solutions with Industry-Leading 5-Year Warranty Coverage
            </p>
            <div className="warranty-badge">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              5-Year Warranty on All Work
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-intro">
            <p className="section-subtitle">Portfolio</p>
            <h2 className="section-title">Transforming Houston's Commercial Spaces</h2>
            <p className="section-description">
              As a full-service electrical and lighting contractor, we handle every aspect of your project 
              from initial assessment to final installation. Our comprehensive 5-year warranty ensures 
              your investment is protected long after project completion.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map(project => (
              <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <span className="project-type-badge">{project.type}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <ul className="project-features">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="project-link">
                    View Project Details
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <div className="container">
          <div className="projects-intro">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">Full-Service Electrical & Lighting Excellence</h2>
          </div>
          
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="highlight-title">5-Year Warranty</h3>
              <p className="highlight-description">
                Industry-leading warranty coverage on all electrical work and LED installations
              </p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                </svg>
              </div>
              <h3 className="highlight-title">Full-Service Electrical</h3>
              <p className="highlight-description">
                Complete electrical services beyond just lighting - panel upgrades, wiring, and more
              </p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="highlight-title">Turnkey Solutions</h3>
              <p className="highlight-description">
                From assessment to installation, we handle every aspect of your project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Get your free energy assessment and discover how our full-service electrical 
               and LED lighting solutions can save you money</p>
            <div className="cta-buttons">
              <a href="tel:2812024625" className="cta-button">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call (281) 202-4625
              </a>
              <Link to="/contact-us" className="cta-button-secondary">
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default Projects