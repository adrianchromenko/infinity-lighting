import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img src="/inflighting-white.png" alt="Infinity Lighting Solutions" className="footer-logo" />
            <h3>Houston LED Lighting Experts</h3>
            <p>Richmond, TX 77407</p>
            <p>Serving Houston, Sugar Land, Katy, The Woodlands & All of Greater Houston</p>
            <p>E: <a href="mailto:mark@inflighting.com">mark@inflighting.com</a></p>
            <p>P: <a href="tel:2812024625">(281) 202-4625</a> or <a href="tel:3185723212">(318) 572-3212</a></p>
          </div>
          
          <div className="footer-nav">
            <h3>Services</h3>
            <ul>
              <li><Link to="/parking-lots">Parking Lots</Link></li>
              <li><Link to="/parking-garages">Parking Garages</Link></li>
              <li><Link to="/stairwells">Stairwells</Link></li>
              <li><Link to="/office-buildings">Office Buildings</Link></li>
              <li><Link to="/warehouses">Warehouses</Link></li>
              <li><Link to="/wall-packs-flood">Wall Packs & Flood Lights</Link></li>
              <li><Link to="/fountains-landscape">Fountains & Landscape</Link></li>
            </ul>
          </div>
          
          <div className="footer-nav">
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects-news">Projects & News</Link></li>
              <li><Link to="/energy-audit">Energy Audit</Link></li>
              <li><Link to="/lighting-proposal">Lighting Proposal</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © Infinity Lighting Solutions | Houston Commercial LED Lighting | All Rights Reserved</p>
          <p>Designed by <a href="https://primarydm.com" target="_blank" rel="noopener noreferrer" style={{color: '#a52929', textDecoration: 'none', fontWeight: '500'}}>Primary Digital Marketing</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer