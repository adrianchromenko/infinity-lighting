// Single source of truth for project content.
// Used by the home page Featured Projects, the /projects listing and /projects/:id detail pages.

const IMG = '/images'
const OLD = '/projects'

export const projects = [
  {
    id: 'four-oaks-place',
    title: 'Four Oaks Place Parking Garage',
    type: 'Parking Garage',
    location: '1300–1360 Post Oak Blvd., Houston, TX',
    shortDescription: 'Nearly 1,500 fixtures eliminated with a one-year payback',
    description: "Four Oaks Place is the project we point to when owners ask what a smart LED design can do. The garage was lit with 8-foot T8 fluorescent fixtures. We re-lit it with 4-foot LED linear luminaires with integrated motion sensors and eliminated nearly 1,500 fixtures in the process. Payback came in just over one year at a 99% ROI. Installed almost seven years ago, the garage is still bright and even today. The 1500 Post Oak elevator lobby received the same treatment, with yellowed cove lighting replaced by clean white LED.",
    features: [
      '8-foot T8 fluorescents replaced with 4-foot LED linear fixtures',
      'Nearly 1,500 fixtures eliminated from the design',
      'Integrated motion sensors on every fixture',
      'Payback in just over one year at a 99% ROI',
      'Still bright and even almost seven years after install',
      '1500 Post Oak lobby cove lighting upgraded to LED',
      'Full electrical scope handled in-house'
    ],
    stats: [
      { value: '~1,500', label: 'Fixtures eliminated' },
      { value: '~1 yr', label: 'Payback period' },
      { value: '99%', label: 'Return on investment' }
    ],
    image: `${IMG}/four-oaks-garage-today.jpg`,
    images: [
      { url: `${IMG}/fop-b1-ramp-before.jpg`, caption: 'B1 entrance ramp under the original 8-foot T8 fixtures', isBefore: true },
      { url: `${IMG}/fop-1500-lobby-before.jpg`, caption: '1500 Post Oak lobby with the yellowed cove lighting', isBefore: true },
      { url: `${IMG}/four-oaks-garage-today.jpg`, caption: 'The garage today, almost seven years after install', isAfter: true },
      { url: `${IMG}/fop-1500-lobby-after.jpg`, caption: '1500 Post Oak lobby with clean white LED cove lighting', isAfter: true },
      { url: `${IMG}/fop-1400-b1-comp.jpg`, caption: 'Old and new fixtures in one frame on the 1400 B1 level' },
      { url: `${IMG}/bhp-garage-night.jpg`, caption: 'The Post Oak garage at night' }
    ]
  },
  {
    id: 'greenstreet-parking',
    title: 'GreenStreet Parking Garage',
    type: 'Parking Garage',
    location: 'Downtown Houston, TX',
    shortDescription: 'Complete garage overhaul with 70% cost reduction',
    description: 'The GreenStreet Parking Garage project showcases the dramatic transformation possible with professional LED lighting upgrades. This comprehensive renovation included not just the main parking areas, but also elevator lobbies and valet zones. Legacy fixtures were replaced with LED and motion sensors were added to save even more. Shot from the lot across the street, the before and after comparison shows decks that went from warm, patchy and dim to even white light on every level, while achieving a 70% reduction in energy costs.',
    features: [
      'Complete garage lighting system overhaul',
      'Elevator lobby modernization with accent lighting',
      'Valet area enhancement for premium service',
      'Motion sensors added for additional savings',
      'Phase-based implementation minimizing disruption',
      '70% energy cost reduction achieved',
      'Full electrical service upgrades included'
    ],
    image: `${IMG}/garage-night.jpg`,
    images: [
      { url: `${IMG}/greenstreet-before.jpg`, caption: 'From across the street: warm, patchy and dim under the legacy fixtures', isBefore: true },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet Phase 1 Before.jpg`, caption: 'Phase 1 before renovation', isBefore: true },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet Elevator Lobby Before.JPEG`, caption: 'Elevator lobby before', isBefore: true },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet Valet Ramp Before.jpg`, caption: 'Valet ramp before upgrade', isBefore: true },
      { url: `${IMG}/garage-night.jpg`, caption: 'Same vantage point: even white light across every level', isAfter: true },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet Phase 1 After.jpg`, caption: 'Phase 1 after LED upgrade', isAfter: true },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet Elevator Lobby After.JPEG`, caption: 'Elevator lobby after modernization', isAfter: true },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet Valet Ramp Exit After.jpg`, caption: 'Valet ramp after installation', isAfter: true },
      { url: `${IMG}/greenstreet-after.jpg`, caption: 'Decks read bright and even from the street' },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet After 1.jpg`, caption: 'Main garage area with new lighting' },
      { url: `${OLD}/GreenStreet Parking Garage/GreenStreet Old v New 1.jpg`, caption: 'Direct comparison of old vs new lighting' }
    ]
  },
  {
    id: 'springwoods-marriott',
    title: 'Springwoods Village Marriott',
    type: 'Hospitality',
    location: 'Springwoods Village, Spring, TX',
    shortDescription: 'Back of house to front door, re-lit in 5000K LED',
    description: 'This extensive hotel renovation project required careful coordination to upgrade lighting throughout the property without disrupting guest experiences. Our team retrofitted the garage entry, parking decks, loading dock, stairwells, guest rooms and common areas with energy-efficient LED lighting. Fluorescent lighting was replaced with 5000K LED, photographed from the same camera position, and both staff safety and camera footage improved. Two years on, the entry and parking deck still look brand new.',
    features: [
      'Garage entry and parking deck LED conversion',
      'Loading dock safety and security lighting',
      'Stairwell emergency lighting systems',
      'Guest room lighting upgrades with custom headboard solutions',
      'Decorative cove lighting in public areas',
      'Phased installation to minimize guest disruption',
      'Still bright and even two years after install'
    ],
    image: `${IMG}/marriott-entry-after.jpg`,
    images: [
      { url: `${IMG}/marriott-entry-before.jpg`, caption: 'Garage entry under fluorescent lighting', isBefore: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Garage Before 2.jpg`, caption: 'Parking garage before renovation', isBefore: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Loading Dock Before.jpg`, caption: 'Loading dock before upgrade', isBefore: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Garage Stairwell Before.jpg`, caption: 'Stairwell before upgrade', isBefore: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Cove Lighting Before 1.jpg`, caption: 'Cove area before lighting upgrade', isBefore: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott King Headboard Before 1.jpg`, caption: 'Guest room before custom lighting', isBefore: true },
      { url: `${IMG}/marriott-entry-after.jpg`, caption: 'Garage entry with 5000K LED, same camera position', isAfter: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Garage After 2.jpg`, caption: 'Parking garage after LED upgrade', isAfter: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Loading Dock After 2.jpg`, caption: 'Loading dock with security lighting', isAfter: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Garage Stairwell After 1.jpg`, caption: 'Stairwell with new safety lighting', isAfter: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott Cove Lighting After.jpg`, caption: 'Enhanced cove lighting installation', isAfter: true },
      { url: `${OLD}/Springwoods Village Marriott/Marriott King Headboard Demo Install After.jpg`, caption: 'Custom headboard lighting installed', isAfter: true },
      { url: `${IMG}/marriott-garage-today.jpg`, caption: 'Parking deck two years after install' },
      { url: `${IMG}/marriott-entry-today.jpg`, caption: 'Garage entry today' }
    ]
  },
  {
    id: 'alley-theatre',
    title: 'Alley Theatre Garage',
    type: 'Parking Garage',
    location: 'Downtown Houston, TX',
    shortDescription: 'Light readings up 2.5x while saving 64.5 watts per fixture',
    description: 'Numbers tell the story at the Alley Theatre garage. We took foot-candle readings on the garage floor at the same spot before and after the LED retrofit. Under the old fixtures the light meter read 8.5 foot-candles. Under the new LED fixtures it reads 21.1 foot-candles, about two and a half times the light, while the client saves 64.5 watts per fixture. More light on the deck and less power on the bill.',
    features: [
      'Foot-candle readings taken before and after at the same spot',
      '8.5 foot-candles before, 21.1 foot-candles after',
      'About 2.5 times more light on the deck',
      '64.5 watts saved per fixture',
      'Brighter, safer parking for theatre patrons',
      'Full electrical scope handled in-house'
    ],
    stats: [
      { value: '8.5 → 21.1', label: 'Foot-candles on the deck' },
      { value: '2.5×', label: 'More light' },
      { value: '64.5 W', label: 'Saved per fixture' }
    ],
    image: `${IMG}/alley-meter-after.jpg`,
    images: [
      { url: `${IMG}/alley-meter-before.jpg`, caption: 'Light meter under the old fixtures: 8.5 foot-candles', isBefore: true },
      { url: `${IMG}/alley-meter-after.jpg`, caption: 'Light meter under the new LED: 21.1 foot-candles', isAfter: true }
    ]
  },
  {
    id: 'bhp-tower',
    title: 'BHP Tower Entry Plaza & Lobby',
    type: 'Commercial Office',
    location: '1400 Post Oak Blvd., Houston, TX',
    shortDescription: 'Entry plaza bollards and lobby re-lit in even white LED',
    description: 'At BHP Tower on Post Oak the bollards and entry plaza lighting were re-lit to even white LED, photographed before and after from the same spot. The lobby received the same treatment, so the stone, steel and glass the owner paid for finally read the way they were designed to. A simple fix with amazing results.',
    features: [
      'Entry plaza bollards converted to LED',
      'Entrance lighting re-lit in even white light',
      'Lobby lighting upgraded to LED',
      'Before and after shot from the same vantage point',
      'Improved safety and curb appeal at night',
      'Full electrical scope handled in-house'
    ],
    image: `${IMG}/bhp-entry-after.jpg`,
    images: [
      { url: `${IMG}/bhp-entry-before.jpg`, caption: 'Entry plaza and bollards before', isBefore: true },
      { url: `${IMG}/bhp-entry-after.jpg`, caption: 'Entry plaza and bollards after, same spot', isAfter: true },
      { url: `${IMG}/bhp-lobby-after.jpg`, caption: 'Lobby after the LED upgrade' }
    ]
  },
  {
    id: 'global-financial',
    title: 'Global Financial',
    type: 'Commercial Office',
    location: 'Houston, TX',
    shortDescription: 'Custom channel lighting over the workstations',
    description: 'Global Financial required a sophisticated lighting solution that would create a professional atmosphere while maximizing energy efficiency. Our team installed custom channel and track lighting throughout their offices, providing enhanced illumination over the workstations and adding beauty at the same time. The result is a modern, flexible lighting system that enhances productivity and reduces energy costs.',
    features: [
      'Custom LED channel lighting over workstations',
      'Premium LED track lighting installation',
      'Adjustable beam angles for task-specific lighting',
      'Dimmable controls for ambiance adjustment',
      'Integration with existing electrical infrastructure',
      'Energy-efficient design reducing costs by 50%',
      'Full-service electrical upgrades as needed'
    ],
    image: `${IMG}/office-1.jpg`,
    images: [
      { url: `${IMG}/office-1.jpg`, caption: 'Custom channel lighting over the workstations' },
      { url: `${IMG}/office-2.jpg`, caption: 'Linear channel lighting adds light and beauty at the same time' },
      { url: `${OLD}/Global Financial/Global Financial Track Lighting.jpg`, caption: 'Modern track lighting system' },
      { url: `${OLD}/Global Financial/Global Financial Track Lighting with First Test Strip.jpg`, caption: 'Initial test installation showing light quality' }
    ]
  },
  {
    id: 'shepherd-parking-garage',
    title: '2323 S. Shepherd Parking Garage',
    type: 'Parking Garage',
    location: '2323 S. Shepherd Dr., Houston, TX',
    shortDescription: 'Multi-level LED retrofit with 65% energy savings',
    description: 'This comprehensive LED retrofit project transformed a multi-level parking structure in the heart of Houston. We replaced outdated fluorescent and HID fixtures with state-of-the-art LED technology, dramatically improving visibility and safety while reducing energy consumption by 65%. The project included motion sensor integration for additional energy savings during low-traffic hours.',
    features: [
      'Complete LED conversion of all parking levels',
      'Stairwell safety lighting with emergency backup',
      'Motion sensor integration for automated control',
      '65% reduction in energy consumption',
      '24/7 operational reliability with minimal maintenance',
      'Enhanced security with improved brightness levels',
      'Full electrical system evaluation and upgrades'
    ],
    image: `${OLD}/2323 S. Shepherd Parking Garage/2323 S. Shepherd After 1.jpg`,
    images: [
      { url: `${OLD}/2323 S. Shepherd Parking Garage/2323 S. Shepherd After 1.jpg`, caption: 'Main parking area after LED upgrade' },
      { url: `${OLD}/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 1.JPEG`, caption: 'Night view showing improved illumination' },
      { url: `${OLD}/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 2.jpg`, caption: 'Enhanced visibility at night' },
      { url: `${OLD}/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 5.jpg`, caption: 'Uniform light distribution' },
      { url: `${OLD}/2323 S. Shepherd Parking Garage/2323 S. Shepherd Night 1 6.jpg`, caption: 'Improved safety lighting' },
      { url: `${OLD}/2323 S. Shepherd Parking Garage/2323 S. Shepherd Stairwell Split.JPEG`, caption: 'Stairwell before and after comparison' }
    ]
  }
]

export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]))

// One-off transformations that don't need a full project page.
export const snapshots = [
  {
    title: 'Keurig Dr Pepper Warehouse',
    place: 'Lenexa, KS',
    note: 'High-bay LED conversion: brighter aisles, lower load',
    before: `${IMG}/lenexa-before.jpg`,
    after: `${IMG}/lenexa-after.jpg`
  },
  {
    title: 'C&C Dental',
    place: 'Houston, TX',
    note: 'A new LED flat panel beside the original fluorescent troffer, same ceiling',
    image: `${IMG}/cc-dental-comp.jpg`
  },
  {
    title: 'Four Oaks Place Landscape',
    place: 'Houston, TX',
    note: 'Color-changing uplighting on a row of crepe myrtles',
    image: `${IMG}/christmas-crepes.jpg`
  },
  {
    title: 'Phoenix Tower Garage',
    place: 'Houston, TX',
    note: 'Garage facade at night after the LED retrofit',
    image: `${IMG}/phoenix-tower.jpg`
  },
  {
    title: 'Hospitality Corridor',
    place: 'Houston, TX',
    note: 'Guest corridor re-lit with warm, even LED',
    image: `${IMG}/hotel-corridor.jpg`
  }
]

// Before/after pairs used on the home page.
export const homeBeforeAfter = [
  {
    projectId: 'greenstreet-parking',
    title: 'GreenStreet Garage',
    note: 'Same vantage point from across the street. Legacy fixtures replaced with LED.',
    before: `${IMG}/greenstreet-before.jpg`,
    after: `${IMG}/garage-night.jpg`
  },
  {
    projectId: 'springwoods-marriott',
    title: 'Springwoods Village Marriott',
    note: 'Garage entry, fluorescent to 5000K LED, same camera position.',
    before: `${IMG}/marriott-entry-before.jpg`,
    after: `${IMG}/marriott-entry-after.jpg`
  },
  {
    projectId: 'bhp-tower',
    title: 'BHP Tower Entry Plaza',
    note: 'Bollards and entry lighting re-lit in even white LED.',
    before: `${IMG}/bhp-entry-before.jpg`,
    after: `${IMG}/bhp-entry-after.jpg`
  }
]
