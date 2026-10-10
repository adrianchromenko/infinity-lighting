import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const applicationItems = [
    { name: 'Parking Garages', path: '/parking-garages' },
    { name: 'Stairwells', path: '/stairwells' },
    { name: 'Office Buildings', path: '/office-buildings' },
    { name: 'Warehouses', path: '/warehouses' },
    { name: 'Fountains & Commercial Landscape Lighting', path: '/fountains-landscape' },
    { name: 'Wall Packs & Flood Lighting', path: '/wallpacks-flood' },
    { name: 'Parking Lots', path: '/parking-lots' }
  ]

  const servicesItems = [
    { name: 'Commercial Lighting Assessment & Energy Audit', path: '/energy-audit' },
    { name: 'Comprehensive Lighting Proposal', path: '/lighting-proposal' }
  ]

  // While the mobile menu is open: lock page scroll and hide the floating call/chat buttons (see index.css).
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', isMenuOpen)
    return () => document.documentElement.classList.remove('menu-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/Logo-V2.png" alt="Infinity Lighting Solutions" width="678" height="353" />
            </Link>
          </div>

          <nav id="site-nav" className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Main">
            <div className="nav-item-dropdown">
              <span className="nav-link">LED Lighting Applications</span>
              <div className="dropdown-menu">
                {applicationItems.map(item => (
                  <Link key={item.path} to={item.path} className="dropdown-item" onClick={closeMenu}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav-item-dropdown">
              <span className="nav-link">LED Lighting Services</span>
              <div className="dropdown-menu">
                {servicesItems.map(item => (
                  <Link key={item.path} to={item.path} className="dropdown-item" onClick={closeMenu}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
            <Link to="/service-areas" className="nav-link" onClick={closeMenu}>Service Areas</Link>
            <Link to="/contact-us" className="nav-link" onClick={closeMenu}>Contact Us</Link>
          </nav>

          <div className="header-actions">
            <Link to="/contact-us" className="cta-button">Free Energy Audit</Link>
          </div>

          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
