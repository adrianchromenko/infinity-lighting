// Service-area landing pages. Each entry becomes /service-areas/<slug>.
// Keep every page grounded in real projects and the kinds of property found in that area.
export const serviceAreas = [
  {
    slug: 'downtown-houston',
    name: 'Downtown Houston',
    region: 'Houston, TX',
    title: 'Commercial LED Lighting Downtown Houston',
    description: 'LED lighting and electrical for downtown Houston garages, office towers, theaters and hotels. GreenStreet and the Alley Theatre garage are our work. Free audit.',
    h1: 'Commercial LED Lighting in Downtown Houston',
    tagline: 'Garages, towers and theater-district properties re-lit without closing a single level.',
    intro: [
      'Downtown Houston garages run around the clock, and the lighting bill shows it. Legacy fluorescent and HID fixtures burn all night on levels that sit empty, then look dim and patchy on the cameras when a tenant walks to their car at 11 pm.',
      'Infinity Lighting Solutions has re-lit some of the most visible structures in the central business district. The GreenStreet garage went from warm, patchy and dim to even white light on every level with a 70% cut in energy cost, and the Alley Theatre garage measured 2.5 times the light while saving 64.5 watts per fixture. Both were done in phases so parking stayed open.'
    ],
    propertyTypes: [
      { name: 'High-rise office garages', text: 'Linear LED with integrated motion sensors on every deck, ramp and stairwell.' },
      { name: 'Theater District and hospitality', text: 'Garages, valet areas and entries that guests see before the show or the lobby.' },
      { name: 'Hotels and residential towers', text: 'Garage entries, loading docks, corridors and back-of-house areas on one contractor.' },
      { name: 'Mixed-use retail and dining', text: 'Elevator lobbies, walkways and perimeter wall packs that keep the block feeling safe after dark.' }
    ],
    projectIds: ['greenstreet-parking', 'alley-theatre'],
    faqs: [
      { q: 'Can you re-light a downtown garage without closing it?', a: 'Yes. We phase the work by level or zone so the garage stays open to tenants and the public. GreenStreet was completed in phases that way.' },
      { q: 'How much brighter does a downtown garage get?', a: 'At the Alley Theatre garage, foot-candle readings on the deck went from 8.5 to 21.1 after the retrofit, while each fixture used 64.5 fewer watts.' },
      { q: 'Do you handle the electrical scope downtown?', a: 'Yes. We are a full-service electrical and lighting contractor, so circuits, controls and fixtures are all handled by one crew.' }
    ]
  },
  {
    slug: 'galleria-uptown',
    name: 'Galleria & Uptown Houston',
    region: 'Houston, TX',
    title: 'Commercial LED Lighting Galleria Houston',
    description: 'LED retrofits for Post Oak Blvd. towers, garages, lobbies and landscape. Four Oaks Place, BHP Tower and Post Oak Central are our projects. Free energy audit.',
    h1: 'Commercial LED Lighting in the Galleria and Uptown Houston',
    tagline: 'Post Oak Boulevard towers, garages, lobbies and landscape, re-lit by one contractor.',
    intro: [
      'Uptown is where the most demanding property managers in Houston expect a building to look the part. Class A towers along Post Oak Boulevard compete on first impressions, and the garage, the plaza and the lobby are the first three things a tenant sees.',
      'Our longest-running Uptown relationship is Four Oaks Place at 1300 to 1360 Post Oak Blvd., where we replaced 8-foot T8 fluorescents with 4-foot linear LED and motion sensors, eliminated nearly 1,500 fixtures and reached payback in just over a year. The garage is still bright and even almost seven years later. Nearby, we re-lit the BHP Tower entry plaza bollards and lobby at 1400 Post Oak, the Post Oak Central garage at 2000 Post Oak, and the fountain and trees at Four Oaks Place with color-changing DMX lighting.'
    ],
    propertyTypes: [
      { name: 'Class A office towers', text: 'Lobby cove lighting, troffer upgrades and conference rooms that look current again.' },
      { name: 'Structured parking', text: 'Linear LED with motion sensors across every deck, with fixture counts cut by a smart layout.' },
      { name: 'Plazas and landscape', text: 'Bollards, fountains and tree uplighting on a wireless DMX controller.' },
      { name: 'Hotels and retail', text: 'Entries, corridors and perimeter lighting that match the standard of the district.' }
    ],
    projectIds: ['four-oaks-place', 'bhp-tower'],
    faqs: [
      { q: 'What did the Four Oaks Place retrofit save?', a: 'Nearly 1,500 fixtures came out of the design, payback arrived in just over one year at a 99% ROI, and the garage still reads bright and even almost seven years after install.' },
      { q: 'Do you do lobby and office interiors, not just garages?', a: 'Yes. At Four Oaks Place we replaced the yellowed cove lighting in the 1500 Post Oak lobby, and at 1330 Post Oak we re-lit the Transwestern management lobby and conference room.' },
      { q: 'Can you light the landscape and fountains too?', a: 'Yes. The Four Oaks Place fountain and campus trees run on wireless DMX color-changing LED, and the BHP Tower plaza bollards were converted to LED.' }
    ]
  },
  {
    slug: 'westchase',
    name: 'Westchase District',
    region: 'Houston, TX',
    title: 'Commercial LED Lighting Westchase Houston',
    description: 'LED garage, office and exterior lighting for Westchase District campuses along Beltway 8 and Westheimer. Westchase Towers is our work. Free energy audit.',
    h1: 'Commercial LED Lighting in the Westchase District',
    tagline: 'Office campuses, garages and corporate parks along Beltway 8 and Westheimer.',
    intro: [
      'The Westchase District is dense with corporate campuses, mid-rise office buildings and the parking structures that serve them. Many were built with 8-foot T8 fluorescent garages and metal halide site lighting that now cost more to maintain than they are worth.',
      'At Westchase Towers on Richmond Avenue we replaced the out-of-date, energy-inefficient 8-foot T8 garage fixtures with 8-foot LED linear luminaires with integrated motion sensors. The result is a garage that is brighter where people are and idle where they are not, with far fewer lamp changes for the building engineer.'
    ],
    propertyTypes: [
      { name: 'Corporate office campuses', text: 'Troffers, recessed and cove lighting inside, LED pole lights and wall packs outside.' },
      { name: 'Parking structures', text: 'Linear LED with motion sensors that cut garage lighting cost by more than 80%.' },
      { name: 'Medical and professional buildings', text: 'Even, flicker-free light in suites, corridors and waiting areas.' },
      { name: 'Hotels along the Beltway', text: 'Garage entries, loading docks and guest corridors on a single contractor.' }
    ],
    projectIds: ['four-oaks-place', 'shepherd-parking-garage'],
    faqs: [
      { q: 'What was done at Westchase Towers?', a: 'The garage at 10350 and 10370 Richmond Avenue had its 8-foot T8 fluorescents replaced with 8-foot LED linear luminaires with integrated motion sensors.' },
      { q: 'Can you handle a multi-building campus?', a: 'Yes. We survey each building and garage, then phase the installation so operations continue, as we have done on multi-building sites in Uptown.' },
      { q: 'Do you install exterior lighting as well?', a: 'Yes. LED pole lights, wall packs and floods replace metal halide around the campus with 65% or more in savings.' }
    ]
  },
  {
    slug: 'greenway-upper-kirby',
    name: 'Greenway Plaza & Upper Kirby',
    region: 'Houston, TX',
    title: 'Commercial LED Lighting Greenway Plaza',
    description: 'LED retrofits for Greenway Plaza garages, Upper Kirby and River Oaks parking, banks and offices. Greenway Plaza and 2323 S. Shepherd projects. Free audit.',
    h1: 'Commercial LED Lighting in Greenway Plaza and Upper Kirby',
    tagline: 'Garages, lots and offices between Greenway Plaza, Kirby Drive and Shepherd.',
    intro: [
      'The office towers at Greenway Plaza and the mixed-use blocks of Upper Kirby and River Oaks share a problem: large parking structures and surface lots lit by fixtures that were installed decades ago. Dim decks and metal halide poles are the first thing visitors notice.',
      'We replaced more than 800 old 8-foot T8 fixtures in the North Richmond parking garage at Greenway Plaza 8 and 12 with linear LED luminaires and motion sensors, making the garage nearly unrecognizable. At 2323 S. Shepherd we completed a multi-level garage retrofit with 65% energy savings, and at the IBC Bank property on Kirby Drive we converted the pole lights, wall packs, ground floods and wall washers to LED.'
    ],
    propertyTypes: [
      { name: 'Office tower garages', text: 'Linear LED with motion sensors on every level, phased so parking stays open.' },
      { name: 'Banks and retail lots', text: 'LED pole lights, wall packs and floods that replace metal halide across the site.' },
      { name: 'Mid-rise and medical offices', text: 'Troffer and recessed LED upgrades that drop into the existing ceiling grid.' },
      { name: 'Residential and mixed-use garages', text: 'Stairwells, elevator lobbies and decks that feel safe at any hour.' }
    ],
    projectIds: ['shepherd-parking-garage', 'alley-theatre'],
    faqs: [
      { q: 'What did the 2323 S. Shepherd garage achieve?', a: 'The multi-level LED retrofit cut energy use by 65% and brought even, bright light to the decks and stairwells.' },
      { q: 'Did the Greenway Plaza garage need new wiring?', a: 'No. The 800-plus linear LED luminaires with integrated motion sensors replaced the old T8 fixtures on the existing circuits.' },
      { q: 'Can you convert a surface parking lot too?', a: 'Yes. At IBC Bank on Kirby Drive we replaced the old pole lights, wall packs, ground floods and wall washers with LED in one project.' }
    ]
  },
  {
    slug: 'the-woodlands-spring',
    name: 'The Woodlands & Spring',
    region: 'Spring, TX',
    title: 'Commercial LED Lighting The Woodlands TX',
    description: 'LED lighting for hotels, corporate campuses, garages and retail in The Woodlands and Spring. The Springwoods Village Marriott is our work. Free energy audit.',
    h1: 'Commercial LED Lighting in The Woodlands and Spring',
    tagline: 'Hotels, corporate campuses and retail centers along I-45 and the Grand Parkway.',
    intro: [
      'North of Houston, The Woodlands, Spring and Springwoods Village have grown into a corridor of corporate campuses, full-service hotels and large retail centers. These are newer properties, but many opened with fluorescent garages and back-of-house lighting that LED has since made obsolete.',
      'At the Springwoods Village Marriott we retrofitted the garage entry, parking decks, loading dock, stairwells, guest rooms and common areas from fluorescent to 5000K LED without disrupting guests. Photographed from the same camera position, the entry and decks are dramatically brighter, staff safety and camera footage improved, and two years on the property still looks brand new.'
    ],
    propertyTypes: [
      { name: 'Hotels and conference properties', text: 'Garage, loading dock, stairwells, corridors and guest rooms handled by one crew around guest schedules.' },
      { name: 'Corporate campuses', text: 'Garage decks, office floors and site lighting with motion-sensor control.' },
      { name: 'Retail and restaurant centers', text: 'LED pole lights, wall packs and landscape lighting that keep the center inviting after dark.' },
      { name: 'Medical and professional buildings', text: 'Troffer and recessed upgrades with the color temperature you choose.' }
    ],
    projectIds: ['springwoods-marriott', 'greenstreet-parking'],
    faqs: [
      { q: 'Can a hotel stay fully booked during an LED upgrade?', a: 'Yes. At the Springwoods Village Marriott we coordinated the garage, dock, stairwell, guest room and common area work around guest activity so there was no disruption.' },
      { q: 'What color temperature did the Marriott choose?', a: '5000K LED replaced the fluorescent fixtures. The whiter light improved staff safety and the clarity of security camera footage.' },
      { q: 'Do you travel to The Woodlands and Spring for the free audit?', a: 'Yes. The free energy audit covers the whole Greater Houston area, including Montgomery County.' }
    ]
  },
  {
    slug: 'sugar-land',
    name: 'Sugar Land',
    region: 'Sugar Land, TX',
    title: 'Commercial LED Lighting Sugar Land TX',
    description: 'Commercial LED lighting and electrical for Sugar Land office parks, medical buildings, retail, warehouses and garages. Minutes from our Richmond office.',
    h1: 'Commercial LED Lighting in Sugar Land',
    tagline: 'Office parks, medical buildings and retail along US-59 and Highway 6, minutes from our office.',
    intro: [
      'Sugar Land is home to corporate headquarters, hospital campuses and medical office buildings, the retail around Town Square and First Colony, and the distribution and light-industrial space along US-90A. Our office is in Richmond, so Sugar Land is the closest market we serve and the easiest one to visit on short notice.',
      'The same approach we use on Houston towers applies here: a free, fixture-by-fixture energy audit, a proposal with a layout and a payback period, utility rebates handled for you, and an installation backed by a 10-year fixture and 5-year labor warranty.'
    ],
    propertyTypes: [
      { name: 'Office parks and headquarters', text: 'LED troffers, recessed and cove lighting inside, pole lights and wall packs outside.' },
      { name: 'Medical office buildings', text: 'Even, flicker-free light in exam rooms, corridors and waiting areas with minimal disruption.' },
      { name: 'Retail and restaurant centers', text: 'Parking lot poles, perimeter wall packs and landscape lighting on photocell control.' },
      { name: 'Warehouses and distribution', text: 'LED high bays with motion sensors that cut energy use by up to 75%.' }
    ],
    projectIds: ['four-oaks-place', 'springwoods-marriott'],
    faqs: [
      { q: 'How quickly can you visit a Sugar Land property?', a: 'Our office is in Richmond, a few minutes from Sugar Land, so site visits for the free energy audit are easy to schedule.' },
      { q: 'Do you handle rebates for Sugar Land utilities?', a: 'Yes. We work with TGHA Group to file the rebate application and documentation for each utility so eligible projects receive the maximum incentive.' },
      { q: 'What warranty applies?', a: 'Every installation carries a 10-year fixture warranty and a 5-year labor warranty. Qualifying surge protection devices are required.' }
    ]
  },
  {
    slug: 'katy-energy-corridor',
    name: 'Katy & the Energy Corridor',
    region: 'Katy, TX',
    title: 'Commercial LED Lighting Katy TX',
    description: 'LED high bay, office, garage and parking lot lighting for Katy and the Energy Corridor along I-10 and the Grand Parkway. One-day warehouse retrofit in Katy.',
    h1: 'Commercial LED Lighting in Katy and the Energy Corridor',
    tagline: 'Corporate campuses on I-10, warehouses on the Grand Parkway and retail around Katy Mills.',
    intro: [
      'West Houston stretches from the office campuses of the Energy Corridor along Interstate 10 to the warehouses, showrooms and retail centers that have followed the Grand Parkway through Katy. Large floor plates and tall ceilings make these buildings ideal candidates for LED high bays and motion control.',
      'At the Rothchild Commercial Division showroom and warehouse on N. Fry Road in Katy we replaced the 4-lamp T8 fixtures with 5000K 1×2 linear high bay LED in a single day. The same crew handles office floors, parking garages, pole lights and wall packs, so one contractor covers the whole property.'
    ],
    propertyTypes: [
      { name: 'Energy Corridor campuses', text: 'Office floors, garages and site lighting with motion-sensor control on one proposal.' },
      { name: 'Warehouses and showrooms', text: 'LED high bays that replace HID and T8 fixtures with brighter, cooler light.' },
      { name: 'Retail and big-box centers', text: 'LED pole lights, wall packs and floods that replace metal halide with 65%+ savings.' },
      { name: 'Hotels and medical buildings', text: 'Corridors, lobbies, garages and parking areas re-lit with minimal disruption.' }
    ],
    projectIds: ['four-oaks-place', 'bhp-tower'],
    faqs: [
      { q: 'How long does a warehouse conversion in Katy take?', a: 'The Rothchild showroom and warehouse on N. Fry Road was completed in one day. Larger warehouses typically take about four days.' },
      { q: 'Which fixtures did you use there?', a: '5000K 1×2 linear high bay LED fixtures replaced the 4-lamp T8 fluorescents.' },
      { q: 'Do you serve the whole Energy Corridor?', a: 'Yes. We serve properties along Interstate 10 from Beltway 8 to the Grand Parkway and throughout Katy.' }
    ]
  },
  {
    slug: 'richmond-rosenberg',
    name: 'Richmond & Rosenberg',
    region: 'Richmond, TX',
    title: 'Commercial LED Lighting Richmond TX',
    description: 'Based in Richmond, TX 77407. Commercial LED lighting and electrical for Fort Bend County industrial parks, retail, offices and parking garages. Free audit.',
    h1: 'Commercial LED Lighting in Richmond and Rosenberg',
    tagline: 'Our home base. Fort Bend County industrial parks, retail centers and offices.',
    intro: [
      'Infinity Lighting Solutions is based in Richmond, Texas, so Richmond, Rosenberg and the rest of Fort Bend County are home ground. The industrial parks along US-59 and FM 762, the retail centers along Grand Parkway and the office and medical buildings that have followed the county’s growth are all a short drive away.',
      'Being local means a fast site visit for the free energy audit, a crew that knows the area, and the same full-service electrical and lighting scope we deliver on Houston high-rises: survey, layout, fixtures, installation, rebates and a 10-year fixture and 5-year labor warranty.'
    ],
    propertyTypes: [
      { name: 'Industrial parks and warehouses', text: 'LED high bays with motion sensors and exterior wall packs and floods.' },
      { name: 'Retail and restaurant centers', text: 'Pole lights, perimeter wall packs and landscape lighting on photocell control.' },
      { name: 'Office and medical buildings', text: 'LED troffers and recessed fixtures that drop into the existing grid.' },
      { name: 'Parking garages and lots', text: 'Linear LED with motion sensors inside, LED pole lights outside.' }
    ],
    projectIds: ['four-oaks-place', 'greenstreet-parking'],
    faqs: [
      { q: 'Where is Infinity Lighting Solutions located?', a: 'Our office is in Richmond, TX 77407. We serve Fort Bend County and all of Greater Houston.' },
      { q: 'Do you work on small commercial buildings?', a: 'Yes. From a single retail suite or warehouse bay to a multi-building campus, the free energy audit shows what an upgrade would save.' },
      { q: 'Can you handle the electrical work, not just the fixtures?', a: 'Yes. We are a full-service electrical contractor, so panel work, circuits and controls are included in the scope.' }
    ]
  }
]

export const serviceAreasBySlug = Object.fromEntries(serviceAreas.map(a => [a.slug, a]))

// Other communities mentioned on the hub page without their own landing page.
export const otherCommunities = [
  'Pearland', 'Pasadena', 'Cypress', 'Humble', 'Missouri City', 'Stafford', 'Conroe', 'Tomball', 'Clear Lake', 'Bellaire', 'Memorial', 'Medical Center'
]
