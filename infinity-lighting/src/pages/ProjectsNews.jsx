import './ProjectsNews.css'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const ProjectsNews = () => {
  const projects = [
    {
      id: 1,
      title: "Four Oaks Place Parking Garage",
      category: "Parking Garage",
      location: "1330 Post Oak Blvd, Houston, TX",
      description: "Phase 1 consisted of replacing 600+ old T8 fixtures with state-of-the-art linear luminaires with integrated motion sensors.",
      image: "parking-garage",
      featured: true
    },
    {
      id: 2,
      title: "Keurig Dr Pepper Warehouse",
      category: "Warehouse",
      location: "9960 Lakeview Ave., Lenexa, KS",
      description: "Transformed 7-Up warehouse by replacing 20+ year old high bay lighting with LED high bay lighting with motion sensors.",
      image: "warehouse"
    },
    {
      id: 3,
      title: "BHP Billiton Tower",
      category: "Commercial Landscape",
      location: "1400 Post Oak Blvd., Houston, TX",
      description: "Completed bollards installation with amazing results. Simple fix with fantastic aesthetic improvement.",
      image: "landscape"
    },
    {
      id: 4,
      title: "Galleria Office Tower 2",
      category: "Office Building",
      location: "Houston, TX",
      description: "LED lighting transformed a 1970's lobby into a modern, energy-efficient space.",
      image: "office"
    },
    {
      id: 5,
      title: "IBC Bank Parking Lot",
      category: "Parking Lot",
      location: "5615 Kirby Dr., Houston, TX",
      description: "Phase 2 included replacing parking lot pole lights, wall packs, ground flood lights and wall washers with LED.",
      image: "parking-lot"
    },
    {
      id: 6,
      title: "Transwestern Management Office",
      category: "Office Building",
      location: "1330 Post Oak, Houston, TX",
      description: "Beautiful conference room and lobby transformation with modern LED lighting.",
      image: "office"
    }
  ]

  const news = [
    {
      id: 1,
      title: "Houston Businesses Save Millions with LED Upgrades",
      date: "January 2024",
      excerpt: "Recent studies show Houston commercial properties reducing energy costs by over 60% with LED conversions.",
      category: "Industry News"
    },
    {
      id: 2,
      title: "New Texas Energy Incentives for 2024",
      date: "December 2023",
      excerpt: "Texas utilities expand rebate programs for commercial LED lighting upgrades, making conversions more affordable.",
      category: "Incentives"
    },
    {
      id: 3,
      title: "Motion Sensor Technology Revolutionizes Parking Garages",
      date: "November 2023",
      excerpt: "Advanced motion sensors in LED systems provide 80%+ energy savings in Houston parking facilities.",
      category: "Technology"
    }
  ]

  return (
    <div className="projects-news-page">
      <SEO 
        title="LED Lighting Projects & News"
        description="View our commercial LED lighting projects throughout Houston. Case studies, success stories, and latest LED technology news."
        keywords="LED lighting projects Houston, commercial lighting case studies, LED lighting news, Houston lighting projects, LED success stories"
        canonical="/projects-news"
      />
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="pn-hero">
        <div className="container">
          <div className="pn-hero-content">
            <h1 className="pn-hero-title">Houston LED Lighting Projects & News</h1>
            <p className="pn-hero-subtitle">
              Discover our latest commercial LED installations across Houston and industry updates
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="pn-featured">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>
          <div className="featured-project">
            <div className="featured-content">
              <span className="featured-badge">Featured Success Story</span>
              <h3>Four Oaks Place Parking Garage</h3>
              <p className="featured-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                1330 Post Oak Blvd, Houston, TX
              </p>
              <p className="featured-description">
                Phase 1 of this major Houston parking garage transformation consisted of replacing 600+ 
                outdated 8' T8 fixtures with state-of-the-art linear luminaires featuring integrated 
                motion sensors. The client successfully eliminated half of their lighting footprint 
                while improving illumination quality and safety.
              </p>
              <a href="/parking-garages" className="featured-link">Learn More About Parking Garage Lighting →</a>
            </div>
            <div className="featured-image"></div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pn-projects">
        <div className="container">
          <h2 className="section-title">Recent Houston LED Projects</h2>
          <div className="projects-filter">
            <button className="filter-btn active">All Projects</button>
            <button className="filter-btn">Parking Garages</button>
            <button className="filter-btn">Warehouses</button>
            <button className="filter-btn">Office Buildings</button>
            <button className="filter-btn">Outdoor</button>
          </div>
          
          <div className="projects-grid">
            {projects.filter(p => !p.featured).map(project => (
              <div key={project.id} className="project-card">
                <div className={`project-image ${project.image}`}>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {project.location}
                  </p>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="pn-news">
        <div className="container">
          <h2 className="section-title">Industry News & Updates</h2>
          <div className="news-grid">
            {news.map(article => (
              <article key={article.id} className="news-card">
                <span className="news-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p className="news-date">{article.date}</p>
                <p className="news-excerpt">{article.excerpt}</p>
                <button className="news-link">Read More →</button>
              </article>
            ))}
          </div>
          
          <div className="news-subscribe">
            <h3>Stay Updated on Houston LED Lighting</h3>
            <p>Get the latest news on commercial LED projects and energy savings opportunities</p>
            <button className="subscribe-btn">Subscribe to Updates</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pn-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Success Stories?</h2>
            <p>Start your Houston LED lighting transformation today</p>
            <button className="cta-button">Get Your Free Energy Assessment</button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default ProjectsNews