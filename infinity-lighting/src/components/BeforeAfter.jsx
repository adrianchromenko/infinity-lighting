import { Link } from 'react-router-dom'
import { homeBeforeAfter } from '../data/projects'
import './BeforeAfter.css'

const BeforeAfter = () => {
  return (
    <section className="before-after">
      <div className="container">
        <div className="before-after-header">
          <p className="before-after-eyebrow">Before &amp; After</p>
          <h2 className="before-after-title">See the Difference</h2>
          <p className="before-after-subtitle">
            Same property, same camera position. The only thing that changed is the lighting.
          </p>
        </div>

        <div className="before-after-grid">
          {homeBeforeAfter.map(pair => (
            <Link to={`/projects/${pair.projectId}`} key={pair.projectId} className="before-after-card">
              <div className="before-after-images">
                <div className="before-after-frame">
                  <img src={pair.before} alt={`${pair.title} before LED retrofit`} loading="lazy" />
                  <span className="before-after-tag before">Before</span>
                </div>
                <div className="before-after-frame">
                  <img src={pair.after} alt={`${pair.title} after LED retrofit`} loading="lazy" />
                  <span className="before-after-tag after">After</span>
                </div>
              </div>
              <div className="before-after-body">
                <h3>{pair.title}</h3>
                <p>{pair.note}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="before-after-stats">
          <div className="before-after-stat">
            <span className="before-after-stat-value">8.5 → 21.1</span>
            <span className="before-after-stat-label">Foot-candles measured on the deck at the Alley Theatre garage</span>
          </div>
          <div className="before-after-stat">
            <span className="before-after-stat-value">64.5 W</span>
            <span className="before-after-stat-label">Saved per fixture while delivering 2.5× the light</span>
          </div>
          <div className="before-after-stat">
            <span className="before-after-stat-value">~1,500</span>
            <span className="before-after-stat-label">Fixtures eliminated at Four Oaks Place with a one-year payback</span>
          </div>
          <div className="before-after-stat">
            <span className="before-after-stat-value">7 yrs</span>
            <span className="before-after-stat-label">After install, Four Oaks Place is still bright and even</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
