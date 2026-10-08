import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  const featured = projects.slice(0, 6)

  return (
    <section className="featured-projects">
      <div className="container">
        <div className="featured-projects-header">
          <p className="featured-projects-eyebrow">Our Work</p>
          <h2 className="featured-projects-title">Featured Projects</h2>
          <p className="featured-projects-subtitle">
            A look at some of the Houston commercial spaces we've transformed with LED lighting.
          </p>
        </div>

        <div className="featured-projects-grid">
          {featured.map(project => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="featured-project-card"
            >
              <div className="featured-project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="featured-project-image"
                  loading="lazy"
                />
                <span className="featured-project-badge">{project.type}</span>
              </div>
              <div className="featured-project-body">
                <h3 className="featured-project-title">{project.title}</h3>
                <p className="featured-project-description">{project.shortDescription}</p>
                <span className="featured-project-link">
                  View Project
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="featured-projects-cta">
          <Link to="/projects" className="featured-projects-cta-btn">
            View All Projects
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
