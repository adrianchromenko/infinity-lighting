import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './NotFound.css'

const NotFound = ({ title = 'Page Not Found', message = "The page you're looking for doesn't exist or has moved." }) => (
  <div className="not-found-page">
    <SEO title={title} description={message} noindex />
    <TopBar />
    <Header />
    <main className="not-found">
      <div className="container">
        <p className="not-found-code">404</p>
        <h1>{title}</h1>
        <p className="not-found-message">{message}</p>
        <div className="not-found-actions">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/projects" className="btn-secondary">View Our Projects</Link>
          <Link to="/contact-us" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default NotFound
