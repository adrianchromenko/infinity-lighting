import './TopBar.css'

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 5.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 5.5v10a2.5 2.5 0 0 1-2.5 2.5H14l-4 4v-4H5.5A2.5 2.5 0 0 1 3 15.5z"/>
              </svg>
              <a href="tel:2812024625">(281) 202-4625</a>
            </div>
            <div className="top-bar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
              <a href="mailto:Sales@Inflighting.com">Sales@Inflighting.com</a>
            </div>
          </div>
          <div className="top-bar-right">
            <span>Energy-Efficient LED Solutions Since 2003</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar