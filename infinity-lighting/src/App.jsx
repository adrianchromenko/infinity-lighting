import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
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
import ProjectsNews from './pages/ProjectsNews'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
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
          <Route path="/projects" element={<ProjectsNews />} />
          <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App