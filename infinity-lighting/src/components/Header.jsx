import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState('')

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

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">
              <img src="/Logo-V2.png" alt="Infinity Lighting Solutions" />
            </Link>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-item-dropdown">
              <span className="nav-link">LED Lighting Applications</span>
              <div className="dropdown-menu">
                {applicationItems.map(item => (
                  <Link key={item.path} to={item.path} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="nav-item-dropdown">
              <span className="nav-link">LED Lighting Services</span>
              <div className="dropdown-menu">
                {servicesItems.map(item => (
                  <Link key={item.path} to={item.path} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </nav>

          <div className="header-actions">
            <Link to="/contact-us" className="cta-button">Free Energy Audit</Link>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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