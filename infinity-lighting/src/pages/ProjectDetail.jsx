import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects, projectsById } from '../data/projects'
import { relatedServicesFor } from '../data/services'
import './ProjectDetail.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'
import NotFound from './NotFound'

const ProjectDetail = () => {
  const { id } = useParams()
  const [lightboxImage, setLightboxImage] = useState(null)

  const project = projectsById[id]

  if (!project) {
    return <NotFound title="Project Not Found" message="We couldn't find that project. Browse our full portfolio instead." />
  }

  const beforeImages = project.images.filter(img => img.isBefore)
  const afterImages = project.images.filter(img => img.isAfter)
  const regularImages = project.images.filter(img => !img.isBefore && !img.isAfter)

  const otherProjects = projects.filter(p => p.id !== id).slice(0, 3)

  return (
    <div className="project-detail-page">
      <SEO 
        title={`${project.title} LED Retrofit`}
        description={`${project.shortDescription}. ${project.type} LED retrofit at ${project.location} by Infinity Lighting Solutions.`}
        keywords={`${project.title}, ${project.type} lighting Houston, commercial LED project, electrical contractor Houston`}
        canonical={`/projects/${id}`}
        image={project.image}
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="container">
          <div className="project-detail-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
              <Link to="/projects">Projects</Link>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
              <span>{project.title}</span>
            </div>
            <h1 className="project-detail-title">{project.title}</h1>
            <span className="project-detail-type">{project.type}</span>
            {project.location && (
              <p className="project-detail-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3" fill="var(--color-dark)"/>
                </svg>
                {project.location}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="project-detail-content">
        <div className="container">
          <div className="project-layout">
            <div className="project-main">
              <p className="project-description">{project.description}</p>

              {project.stats && (
                <div className="project-stats-row">
                  {project.stats.map(stat => (
                    <div key={stat.label} className="project-stat">
                      <span className="project-stat-value">{stat.value}</span>
                      <span className="project-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
              
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

              <div className="project-info-card">
                <h3 className="info-card-title">Related Services</h3>
                <ul className="project-features-list project-related-services">
                  {relatedServicesFor(project.type).map(service => (
                    <li key={service.path}><Link to={service.path}>{service.name}</Link></li>
                  ))}
                  <li><Link to="/projects">All projects</Link></li>
                </ul>
              </div>


              <div className="warranty-card">
                <div className="warranty-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="warranty-title">10-Year Fixture / 5-Year Labor Warranty</h3>
                <p className="warranty-description">
                  Our installations are backed by a 10-year fixture warranty and a 5-year labor warranty.
                  Qualifying surge protection devices required.
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