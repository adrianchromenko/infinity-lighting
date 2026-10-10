// The services the site offers, used for related-links blocks, service-area pages and the footer.
export const applications = [
  { name: 'Parking Garage Lighting', short: 'Parking Garages', path: '/parking-garages', blurb: 'Linear LED with motion sensors that cuts garage lighting cost by more than 80%.' },
  { name: 'Stairwell Lighting', short: 'Stairwells', path: '/stairwells', blurb: 'Motion-controlled LED so stairwells are bright when occupied and idle when empty.' },
  { name: 'Office Building Lighting', short: 'Office Buildings', path: '/office-buildings', blurb: 'Drop-in LED troffers, recessed and cove lighting for offices, lobbies and retail.' },
  { name: 'Warehouse High Bay Lighting', short: 'Warehouses', path: '/warehouses', blurb: 'LED high bays that replace HID, T8 and T5 fixtures with brighter, cooler light.' },
  { name: 'Fountain & Landscape Lighting', short: 'Fountains & Landscape', path: '/fountains-landscape', blurb: 'DMX color-controlled fountain, tree, wall-wash and path lighting.' },
  { name: 'Wall Pack & Flood Lighting', short: 'Wall Packs & Floods', path: '/wallpacks-flood', blurb: 'Perimeter wall packs and 50W to 500W+ LED floods that replace metal halide.' },
  { name: 'Parking Lot Lighting', short: 'Parking Lots', path: '/parking-lots', blurb: 'LED pole lights with the right optics and lumen package for every lot.' }
]

export const services = [
  { name: 'Free Energy Audit', short: 'Energy Audit', path: '/energy-audit', blurb: 'A fixture-by-fixture survey with light readings, hours and your kilowatt rate.' },
  { name: 'Lighting Proposal', short: 'Lighting Proposal', path: '/lighting-proposal', blurb: 'A layout, savings analysis and payback period, with utility rebates handled.' }
]

export const allServices = [...applications, ...services]

const byPath = Object.fromEntries(allServices.map(s => [s.path, s]))

// Services most relevant to a project, by its `type` in src/data/projects.js.
const relatedPathsByType = {
  'Parking Garage': ['/parking-garages', '/stairwells', '/energy-audit'],
  'Commercial Office': ['/office-buildings', '/fountains-landscape', '/energy-audit'],
  'Hospitality': ['/parking-garages', '/stairwells', '/office-buildings', '/energy-audit']
}

export const relatedServicesFor = (type) =>
  (relatedPathsByType[type] || ['/energy-audit', '/lighting-proposal']).map(p => byPath[p]).filter(Boolean)
