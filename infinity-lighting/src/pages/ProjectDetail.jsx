import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const ProjectDetail = () => {
  const { id } = useParams()
  const [lightboxImage, setLightboxImage] = useState(null)

  const projectsData = {
    'shepherd-parking-garage': {
      title: '2323 S. Shepherd Parking Garage',
      type: 'Parking Garage',
      description: 'This comprehensive LED retrofit project transformed a multi-level parking structure in the heart of Houston. We replaced outdated fluorescent and HID fixtures with state-of-the-art LED technology, dramatically improving visibility and safety while reducing energy consumption by 65%. The project included motion sensor integration for additional energy savings during low-traffic hours.',
      features: [
        'Complete LED conversion of all parking levels',
        'Stairwell safety lighting with emergency backup',
        'Motion sensor integration for automated control',
        '65% reduction in energy consumption',
        '24/7 operational reliability with minimal maintenance',
        'Enhanced security with improved brightness levels',
        'Full electrical system evaluation and upgrades'
      ],
      images: [
        { url: '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd After 1.jpg', caption: 'Main parking area after LED upgrade' },
        { url: '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 1.JPEG', caption: 'Night view showing improved illumination' },
        { url: '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 2.jpg', caption: 'Enhanced visibility at night' },
        { url: '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 5.jpg', caption: 'Uniform light distribution' },
        { url: '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 6.jpg', caption: 'Improved safety lighting' },
        { url: '/projects/2323 S. Shepherd Parking Garage/2323 S. Shepherd Stairwell Split.JPEG', caption: 'Stairwell before and after comparison' }
      ]
    },
    'global-financial': {
      title: 'Global Financial',
      type: 'Commercial Office',
      description: 'Global Financial required a sophisticated lighting solution that would create a professional atmosphere while maximizing energy efficiency. Our team installed a premium track lighting system throughout their offices, providing adjustable illumination that can be customized for different work areas and tasks. The result is a modern, flexible lighting system that enhances productivity and reduces energy costs.',
      features: [
        'Premium LED track lighting installation',
        'Adjustable beam angles for task-specific lighting',
        'Dimmable controls for ambiance adjustment',
        'Integration with existing electrical infrastructure',
        'Energy-efficient design reducing costs by 50%',
        'Professional atmosphere enhancement',
        'Full-service electrical upgrades as needed'
      ],
      images: [
        { url: '/projects/Global Financial/Global Financial Track Lighting.jpg', caption: 'Modern track lighting system' },
        { url: '/projects/Global Financial/Global Financial Track Lighting with First Test Strip.jpg', caption: 'Initial test installation showing light quality' }
      ]
    },
    'greenstreet-parking': {
      title: 'GreenStreet Parking Garage',
      type: 'Parking Garage',
      description: 'The GreenStreet Parking Garage project showcases the dramatic transformation possible with professional LED lighting upgrades. This comprehensive renovation included not just the main parking areas, but also elevator lobbies and valet zones. The before and after comparisons demonstrate the significant improvement in visibility, safety, and aesthetic appeal, while achieving a 70% reduction in energy costs.',
      features: [
        'Complete garage lighting system overhaul',
        'Elevator lobby modernization with accent lighting',
        'Valet area enhancement for premium service',
        'Phase-based implementation minimizing disruption',
        '70% energy cost reduction achieved',
        'Dramatic improvement in light quality and coverage',
        'Full electrical service upgrades included'
      ],
      images: [
        { url: '/projects/GreenStreet Parking Garage/GreenStreet Phase 1 Before.jpg', caption: 'Phase 1 before renovation', isBefore: true },
        { url: '/projects/GreenStreet Parking Garage/GreenStreet Phase 1 After.jpg', caption: 'Phase 1 after LED upgrade', isAfter: true },
        { url: '/projects/GreenStreet Parking Garage/GreenStreet Elevator Lobby Before.JPEG', caption: 'Elevator lobby before', isBefore: true },
        { url: '/projects/GreenStreet Parking Garage/GreenStreet Elevator Lobby After.JPEG', caption: 'Elevator lobby after modernization', isAfter: true },
        { url: '/projects/GreenStreet Parking Garage/GreenStreet After 1.jpg', caption: 'Main garage area with new lighting' },
        { url: '/projects/GreenStreet Parking Garage/GreenStreet Old v New 1.jpg', caption: 'Direct comparison of old vs new lighting' },
        { url: '/projects/GreenStreet Parking Garage/GreenStreet Valet Ramp Before.jpg', caption: 'Valet ramp before upgrade', isBefore: true },
        { url: '/projects/GreenStreet Parking Garage/GreenStreet Valet Ramp Exit After.jpg', caption: 'Valet ramp after installation', isAfter: true }
      ]
    },
    'springwoods-marriott': {
      title: 'Springwoods Village Marriott',
      type: 'Hospitality',
      description: 'This extensive hotel renovation project required careful coordination to upgrade lighting throughout the property without disrupting guest experiences. Our team successfully retrofitted guest rooms, parking facilities, loading docks, and common areas with energy-efficient LED lighting. The project included custom solutions for guest room headboard lighting and decorative cove lighting in public spaces.',
      features: [
        'Guest room lighting upgrades with custom headboard solutions',
        'Parking garage complete LED conversion',
        'Loading dock safety and security lighting',
        'Stairwell emergency lighting systems',
        'Decorative cove lighting in public areas',
        'Phased installation to minimize guest disruption',
        'Full electrical service and panel upgrades',
        'Integration with hotel management systems'
      ],
      images: [
        { url: '/projects/Springwoods Village Marriott/Marriott Garage Before 2.jpg', caption: 'Parking garage before renovation', isBefore: true },
        { url: '/projects/Springwoods Village Marriott/Marriott Garage After 2.jpg', caption: 'Parking garage after LED upgrade', isAfter: true },
        { url: '/projects/Springwoods Village Marriott/Marriott Cove Lighting Before 1.jpg', caption: 'Cove area before lighting upgrade', isBefore: true },
        { url: '/projects/Springwoods Village Marriott/Marriott Cove Lighting After.jpg', caption: 'Enhanced cove lighting installation', isAfter: true },
        { url: '/projects/Springwoods Village Marriott/Marriott Garage Stairwell Before.jpg', caption: 'Stairwell before upgrade', isBefore: true },
        { url: '/projects/Springwoods Village Marriott/Marriott Garage Stairwell After 1.jpg', caption: 'Stairwell with new safety lighting', isAfter: true },
        { url: '/projects/Springwoods Village Marriott/Marriott King Headboard Before 1.jpg', caption: 'Guest room before custom lighting', isBefore: true },
        { url: '/projects/Springwoods Village Marriott/Marriott King Headboard Demo Install After.jpg', caption: 'Custom headboard lighting installed', isAfter: true },
        { url: '/projects/Springwoods Village Marriott/Marriott Loading Dock Before.jpg', caption: 'Loading dock before upgrade', isBefore: true },
        { url: '/projects/Springwoods Village Marriott/Marriott Loading Dock After 2.jpg', caption: 'Loading dock with security lighting', isAfter: true }
      ]
    }
  }

  const project = projectsData[id]

  if (!project) {
    return <div>Project not found</div>
  }

  const beforeImages = project.images.filter(img => img.isBefore)
  const afterImages = project.images.filter(img => img.isAfter)
  const regularImages = project.images.filter(img => !img.isBefore && !img.isAfter)

  const otherProjects = Object.keys(projectsData)
    .filter(key => key !== id)
    .slice(0, 3)
    .map(key => ({
      id: key,
      ...projectsData[key],
      image: projectsData[key].images[0].url
    }))

  return (
    <div className="project-detail-page">
      <SEO 
        title={`${project.title} - LED Lighting Project Houston`}
        description={`${project.description} Full-service electrical and lighting with 5-year warranty.`}
        keywords={`${project.title}, ${project.type} lighting Houston, commercial LED project, electrical contractor Houston`}
        canonical={`/projects/${id}`}
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="container">
          <div className="project-detail-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
              <Link to="/projects">Projects</Link>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
              <span>{project.title}</span>
            </div>
            <h1 className="project-detail-title">{project.title}</h1>
            <span className="project-detail-type">{project.type}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="project-detail-content">
        <div className="container">
          <div className="project-layout">
            <div className="project-main">
              <p className="project-description">{project.description}</p>
              
              {/* Before/After Gallery */}
              {beforeImages.length > 0 && afterImages.length > 0 && (
                <div className="project-gallery">
                  <h2 className="gallery-title">Before & After Transformation</h2>
                  <div className="before-after-container">
                    {beforeImages.map((image, index) => (
                      <div key={`before-${index}`} className="before-after-item">
                        <span className="before-after-label before-label">Before</span>
                        <div className="gallery-item" onClick={() => setLightboxImage(image.url)}>
                          <img src={image.url} alt={image.caption} />
                        </div>
                      </div>
                    ))}
                    {afterImages.map((image, index) => (
                      <div key={`after-${index}`} className="before-after-item">
                        <span className="before-after-label after-label">After</span>
                        <div className="gallery-item" onClick={() => setLightboxImage(image.url)}>
                          <img src={image.url} alt={image.caption} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Gallery */}
              {regularImages.length > 0 && (
                <div className="project-gallery">
                  <h2 className="gallery-title">Project Gallery</h2>
                  <div className="gallery-grid">
                    {regularImages.map((image, index) => (
                      <div key={index} className="gallery-item" onClick={() => setLightboxImage(image.url)}>
                        <img src={image.url} alt={image.caption} />
                        <div className="gallery-caption">{image.caption}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="project-sidebar">
              <div className="project-info-card">
                <h3 className="info-card-title">Project Features</h3>
                <ul className="project-features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="warranty-card">
                <div className="warranty-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="warranty-title">5-Year Warranty</h3>
                <p className="warranty-description">
                  All our installations come with a comprehensive 5-year warranty covering parts and labor
                </p>
              </div>

              <div className="project-cta-card">
                <h3 className="cta-card-title">Start Your Project</h3>
                <p className="cta-card-description">
                  Get a free energy assessment and see how much you can save with LED lighting
                </p>
                <div className="cta-card-buttons">
                  <a href="tel:2812024625" className="cta-card-button">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Call (281) 202-4625
                  </a>
                  <Link to="/contact-us" className="cta-card-button-secondary">
                    Request Free Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {otherProjects.length > 0 && (
        <section className="related-projects">
          <div className="container">
            <h2 className="related-projects-title">Other Projects</h2>
            <div className="related-projects-grid">
              {otherProjects.map(proj => (
                <Link to={`/projects/${proj.id}`} key={proj.id} className="project-card">
                  <div className="project-image-container">
                    <img src={proj.image} alt={proj.title} className="project-image" />
                    <span className="project-type-badge">{proj.type}</span>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{proj.title}</h3>
                    <span className="project-link">
                      View Project
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Full size" className="lightbox-image" />
          <div className="lightbox-close">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      )}

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default ProjectDetail