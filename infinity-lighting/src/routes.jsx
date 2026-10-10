import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ParkingGarages from './pages/ParkingGarages'
import Stairwells from './pages/Stairwells'
import OfficeBuildings from './pages/OfficeBuildings'
import Warehouses from './pages/Warehouses'
import FountainsLandscape from './pages/FountainsLandscape'
import WallPacksFlood from './pages/WallPacksFlood'
import ParkingLots from './pages/ParkingLots'
import EnergyAudit from './pages/EnergyAudit'
import LightingProposal from './pages/LightingProposal'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ServiceAreas from './pages/ServiceAreas'
import ServiceArea from './pages/ServiceArea'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'

// Static (non-dynamic) paths. Used by the prerender script and the sitemap generator.
// Dynamic routes (/projects/:id, /service-areas/:slug) are expanded from their data files.
export const staticRoutes = [
  '/',
  '/parking-garages',
  '/stairwells',
  '/office-buildings',
  '/warehouses',
  '/fountains-landscape',
  '/wallpacks-flood',
  '/parking-lots',
  '/energy-audit',
  '/lighting-proposal',
  '/projects',
  '/service-areas',
  '/contact-us'
]

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/parking-garages" element={<ParkingGarages />} />
    <Route path="/stairwells" element={<Stairwells />} />
    <Route path="/office-buildings" element={<OfficeBuildings />} />
    <Route path="/warehouses" element={<Warehouses />} />
    <Route path="/fountains-landscape" element={<FountainsLandscape />} />
    <Route path="/wallpacks-flood" element={<WallPacksFlood />} />
    <Route path="/parking-lots" element={<ParkingLots />} />
    <Route path="/energy-audit" element={<EnergyAudit />} />
    <Route path="/lighting-proposal" element={<LightingProposal />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:id" element={<ProjectDetail />} />
    <Route path="/service-areas" element={<ServiceAreas />} />
    <Route path="/service-areas/:slug" element={<ServiceArea />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
