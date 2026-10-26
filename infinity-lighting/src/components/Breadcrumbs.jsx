import { Link } from 'react-router-dom'
import './Breadcrumbs.css'

// Visible breadcrumb trail for the dark page heroes. The matching BreadcrumbList
// structured data is emitted by SEO.jsx from the page's canonical path.
const Breadcrumbs = ({ current, parent }) => (
  <nav className="breadcrumbs" aria-label="Breadcrumb">
    <Link to="/">Home</Link>
    {parent && (
      <>
        <span aria-hidden="true">›</span>
        <Link to={parent.path}>{parent.name}</Link>
      </>
    )}
    <span aria-hidden="true">›</span>
    <span aria-current="page">{current}</span>
  </nav>
)

export default Breadcrumbs
