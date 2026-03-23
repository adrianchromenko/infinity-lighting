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