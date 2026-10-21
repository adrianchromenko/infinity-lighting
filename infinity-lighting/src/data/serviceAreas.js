// Service-area landing pages. Each entry becomes /service-areas/<slug>.
// Keep every page grounded in real projects and the kinds of property found in that area.
export const serviceAreas = [
  {
    slug: 'downtown-houston',
    name: 'Downtown Houston',
    region: 'Houston, TX',
    group: 'houston',
    city: 'Houston',
    state: 'TX',
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
    group: 'houston',
    city: 'Houston',
    state: 'TX',
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
    group: 'houston',
    city: 'Houston',
    state: 'TX',
    title: 'Commercial LED Lighting Westchase TX',
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
    group: 'houston',
    city: 'Houston',
    state: 'TX',
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
    group: 'houston',
    city: 'The Woodlands',
    state: 'TX',
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
    group: 'houston',
    city: 'Sugar Land',
    state: 'TX',
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
    group: 'houston',
    city: 'Katy',
    state: 'TX',
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
    group: 'houston',
    city: 'Richmond',
    state: 'TX',
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
  },
  // ---------------------------------------------------------------------------------------------
  // Texas metros outside Houston. No local project photos yet, so these pages lean on the Houston
  // portfolio, the property types common to each market and the local utility rebate programs.
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'dallas-fort-worth',
    name: 'Dallas–Fort Worth',
    region: 'Dallas, TX',
    group: 'texas',
    city: 'Dallas',
    state: 'TX',
    title: 'Commercial LED Lighting Dallas–Fort Worth',
    description: 'Commercial LED lighting and electrical for Dallas–Fort Worth parking garages, office towers, warehouses and hotels. Oncor rebates handled. Free energy audit.',
    h1: 'Commercial LED Lighting in Dallas–Fort Worth',
    tagline: 'Uptown and Las Colinas towers, Plano and Frisco campuses, and the warehouses of AllianceTexas and south Dallas.',
    intro: [
      'Dallas–Fort Worth has more structured parking, Class A office and big-box distribution space than any market in Texas. Much of it opened with T8 fluorescent garages, metal halide lots and HID high bays that cost more to run and maintain every year. Owners along the Dallas North Tollway, in Las Colinas and around DFW Airport are converting to LED for the same reasons Houston owners did: lower bills, fewer lamp changes and brighter, safer property.',
      'Infinity Lighting Solutions brings the Houston playbook to North Texas. At Four Oaks Place we eliminated nearly 1,500 garage fixtures and reached payback in about a year; at GreenStreet we cut garage energy cost by 70% while the garage stayed open. Our crews travel from Richmond, TX for the free survey, then mobilize for a phased installation, and we file the Oncor commercial lighting rebate paperwork for you.'
    ],
    propertyTypes: [
      { name: 'Office towers and garages', text: 'Linear LED with motion sensors for Uptown, Downtown, Las Colinas and Legacy garages, phased so parking stays open.' },
      { name: 'Distribution and logistics', text: 'LED high bays with occupancy sensors for AllianceTexas, south Dallas and the I-20 and I-35W corridors.' },
      { name: 'Hotels and mixed-use', text: 'Garage entries, corridors, loading docks and back-of-house on one contractor around guest schedules.' },
      { name: 'Retail and medical campuses', text: 'LED pole lights, wall packs and drop-in troffers across Plano, Frisco, Arlington and Fort Worth.' }
    ],
    projectIds: ['four-oaks-place', 'greenstreet-parking'],
    utility: 'Oncor',
    faqs: [
      { q: 'Do you really work in Dallas–Fort Worth?', a: 'Yes. We are based in Richmond, TX and our crews travel statewide for commercial projects. The free energy audit starts with a site visit, and installation is scheduled in phases so the property keeps operating.' },
      { q: 'Are there LED rebates in the Oncor service area?', a: 'Yes. Oncor runs commercial energy-efficiency programs that pay incentives for qualifying LED retrofits. We prepare and file the rebate documentation as part of the proposal.' },
      { q: 'Is your Texas electrical license valid in Dallas?', a: 'Texas electrical contractor licensing is statewide, so the same licensed crew that handles the electrical scope in Houston handles it in Dallas, Fort Worth, Plano or Arlington.' }
    ]
  },
  {
    slug: 'austin',
    name: 'Austin & Central Texas',
    region: 'Austin, TX',
    group: 'texas',
    city: 'Austin',
    state: 'TX',
    title: 'Commercial LED Lighting Austin TX',
    description: 'LED lighting for Austin garages, tech campuses, offices, hotels and warehouses from Round Rock to San Marcos. Austin Energy rebates handled. Free energy audit.',
    h1: 'Commercial LED Lighting in Austin and Central Texas',
    tagline: 'Downtown and Domain garages, tech campuses in Round Rock and Cedar Park, and the warehouses along SH-130.',
    intro: [
      'Austin builds faster than almost any city in the country, and the properties that opened ten or fifteen years ago are already due for a lighting upgrade. Garages downtown and at the Domain run around the clock, corporate campuses in Round Rock and Cedar Park want occupancy-based control, and the distribution space along SH-130 and in San Marcos was built for HID high bays that LED now replaces at a fraction of the wattage.',
      'We bring the same approach that re-lit Houston’s Post Oak towers and downtown garages: a free fixture-by-fixture survey with light readings, a layout that often removes fixtures rather than swapping them one for one, and a phased installation that keeps the property open. Austin Energy and Oncor both offer commercial lighting incentives in the metro, and we handle the application.'
    ],
    propertyTypes: [
      { name: 'Downtown and Domain garages', text: 'Linear LED with integrated motion sensors on every deck, ramp and stairwell.' },
      { name: 'Tech and corporate campuses', text: 'Troffer, recessed and cove upgrades inside, pole lights and wall packs on the site, all on sensor control.' },
      { name: 'Hotels and event venues', text: 'Garages, corridors, loading docks and common areas re-lit with no disruption to guests.' },
      { name: 'Warehouses along SH-130 and I-35', text: 'LED high bays that replace metal halide and T5 with brighter, cooler light and up to 75% savings.' }
    ],
    projectIds: ['four-oaks-place', 'springwoods-marriott'],
    utility: 'Austin Energy',
    faqs: [
      { q: 'Do you travel to Austin for the free energy audit?', a: 'Yes. Austin is a short drive from our Richmond, TX office. We survey the property, take light readings and send a written proposal with savings and payback before anything is installed.' },
      { q: 'Which Austin utilities offer commercial LED rebates?', a: 'Austin Energy runs commercial lighting incentives inside the city, and Oncor and other transmission utilities cover much of the surrounding metro. We identify the program that applies and file the paperwork.' },
      { q: 'Can you handle the electrical scope as well as the fixtures?', a: 'Yes. We are a full-service electrical and lighting contractor, so panels, circuits, controls and fixtures are all handled by one crew.' }
    ]
  },
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    region: 'San Antonio, TX',
    group: 'texas',
    city: 'San Antonio',
    state: 'TX',
    title: 'Commercial LED Lighting San Antonio TX',
    description: 'Commercial LED lighting for San Antonio hotels, garages, medical campuses, offices and warehouses. CPS Energy rebates handled. Free energy audit and proposal.',
    h1: 'Commercial LED Lighting in San Antonio',
    tagline: 'River Walk hotels, Medical Center campuses, Northwest Side offices and the warehouses along I-35 and Loop 1604.',
    intro: [
      'San Antonio is a hospitality and medical city, and both industries run lighting 24 hours a day. Hotels along the River Walk and near the convention center, hospital and medical office campuses around the South Texas Medical Center, and the office parks on the Northwest Side all carry fluorescent and HID fixtures that LED replaces with better light for a fraction of the power.',
      'The Springwoods Village Marriott outside Houston shows how we work in a hotel: garage, loading dock, stairwells, guest rooms and common areas re-lit in 5000K LED around guest activity, with no disruption. The same crew handles San Antonio garages, campuses and warehouses, and we prepare the CPS Energy commercial rebate application so the incentive is captured.'
    ],
    propertyTypes: [
      { name: 'Hotels and convention properties', text: 'Garage, corridors, back-of-house and guest areas on one contractor working around occupancy.' },
      { name: 'Medical and hospital campuses', text: 'Even, flicker-free light in suites and corridors, plus garages and lots on motion and photocell control.' },
      { name: 'Office parks and garages', text: 'Linear LED garage fixtures and drop-in troffers for the Northwest Side and Stone Oak.' },
      { name: 'Warehouses and manufacturing', text: 'LED high bays for the I-35, I-10 and Loop 1604 industrial corridors.' }
    ],
    projectIds: ['springwoods-marriott', 'four-oaks-place'],
    utility: 'CPS Energy',
    faqs: [
      { q: 'Can a San Antonio hotel stay open during an LED upgrade?', a: 'Yes. We phase the work by area and schedule guest-facing spaces around occupancy, which is how the Springwoods Village Marriott was completed with no disruption.' },
      { q: 'Does CPS Energy pay rebates for commercial LED?', a: 'CPS Energy offers commercial energy-efficiency incentives for qualifying lighting retrofits. We document the existing fixtures and the proposed design and file the application for you.' },
      { q: 'How far do you travel for a San Antonio project?', a: 'San Antonio is about three hours from our Richmond, TX office. We travel for the free survey and mobilize for installation once the proposal is approved.' }
    ]
  },
  {
    slug: 'beaumont-golden-triangle',
    name: 'Beaumont & the Golden Triangle',
    region: 'Beaumont, TX',
    group: 'texas',
    city: 'Beaumont',
    state: 'TX',
    title: 'Commercial LED Lighting Beaumont TX',
    description: 'LED lighting for Beaumont, Port Arthur and Orange warehouses, industrial yards, offices, hotels and parking. Entergy Texas rebates handled. Free energy audit.',
    h1: 'Commercial LED Lighting in Beaumont and the Golden Triangle',
    tagline: 'Industrial yards, warehouses, medical offices and hotels in Beaumont, Port Arthur and Orange.',
    intro: [
      'The Golden Triangle runs on industry, and industrial properties carry some of the highest lighting loads anywhere: high bays over fabrication floors, flood lights over yards and lots, and wall packs around the perimeter that burn from dusk to dawn. Most of it was specified as metal halide or high-pressure sodium, and LED cuts that load by 65% or more while delivering whiter, more uniform light.',
      'Beaumont is a direct drive east from Houston on Interstate 10, so the Golden Triangle is well within our normal service range. We survey the property, replace HID floods and high bays with LED sized to the task, add photocell and motion control where it makes sense, and prepare the Entergy Texas commercial rebate application.'
    ],
    propertyTypes: [
      { name: 'Industrial yards and plants', text: 'LED floods, high masts and wall packs that replace HID with 65%+ savings and instant-on light.' },
      { name: 'Warehouses and fabrication shops', text: 'LED high bays with occupancy sensors sized to the ceiling height and the work below.' },
      { name: 'Medical and professional offices', text: 'Drop-in LED troffers and recessed fixtures with minimal disruption to patients and staff.' },
      { name: 'Hotels and retail along I-10', text: 'Parking lot poles, perimeter wall packs, corridors and lobbies handled by one crew.' }
    ],
    projectIds: ['four-oaks-place', 'bhp-tower'],
    utility: 'Entergy Texas',
    faqs: [
      { q: 'Do you serve Port Arthur and Orange as well as Beaumont?', a: 'Yes. We serve the whole Golden Triangle, including Port Arthur, Orange, Nederland, Groves and Vidor, along with Lake Charles across the state line.' },
      { q: 'Are industrial flood and high mast lights good LED candidates?', a: 'They are among the best. Metal halide floods lose output quickly and restrike slowly. LED floods from 50W to 500W+ deliver more usable light, come on instantly and typically save 65% or more.' },
      { q: 'Does Entergy Texas offer lighting rebates?', a: 'Entergy Texas runs commercial energy-efficiency programs with incentives for qualifying LED retrofits. We prepare the fixture inventory and the application as part of our proposal.' }
    ]
  },
  {
    slug: 'corpus-christi',
    name: 'Corpus Christi & the Coastal Bend',
    region: 'Corpus Christi, TX',
    group: 'texas',
    city: 'Corpus Christi',
    state: 'TX',
    title: 'Commercial LED Lighting Corpus Christi',
    description: 'Coastal-rated LED lighting for Corpus Christi hotels, industrial sites, offices, garages and parking lots. AEP Texas rebates handled. Free energy audit.',
    h1: 'Commercial LED Lighting in Corpus Christi and the Coastal Bend',
    tagline: 'Bayfront hotels, port and industrial properties, medical campuses and retail along SPID.',
    intro: [
      'Salt air is hard on lighting. Corpus Christi hotels, port facilities and retail centers see fixtures corrode and fail years before the same products would inland, and the humidity and heat push cooling loads up alongside the lighting bill. Sealed, corrosion-resistant LED fixtures with IP65 ratings solve both problems at once, and they come on instantly after a power blip instead of waiting for HID lamps to restrike.',
      'We survey Coastal Bend properties the same way we survey Houston towers: fixture by fixture, with light readings and run hours, then a written proposal with savings and payback. The crew travels from Richmond, TX for installation, and we file the AEP Texas commercial rebate application so the incentive is captured.'
    ],
    propertyTypes: [
      { name: 'Bayfront hotels and resorts', text: 'Garages, corridors, pool decks and exteriors with corrosion-resistant fixtures and warm or cool color options.' },
      { name: 'Port, industrial and refinery support', text: 'LED floods, high bays and wall packs rated for coastal exposure and 24-hour duty.' },
      { name: 'Medical and office campuses', text: 'Troffer and recessed LED upgrades inside, pole lights and wall packs outside.' },
      { name: 'Retail and parking along SPID', text: 'LED pole lights with the right optics to meet IES levels and cut lot lighting cost by 65%+.' }
    ],
    projectIds: ['springwoods-marriott', 'greenstreet-parking'],
    utility: 'AEP Texas',
    faqs: [
      { q: 'Do you use fixtures rated for coastal conditions?', a: 'Yes. For exterior and garage applications near the water we specify sealed, IP65-rated fixtures with corrosion-resistant housings and finishes.' },
      { q: 'Are there LED rebates in Corpus Christi?', a: 'AEP Texas offers commercial energy-efficiency incentives for qualifying lighting retrofits. We document the project and submit the application for you.' },
      { q: 'How far is Corpus Christi from your office?', a: 'About three and a half hours from Richmond, TX. We travel for the free survey and schedule installation in phases once the proposal is approved.' }
    ]
  },
  {
    slug: 'bryan-college-station',
    name: 'Bryan–College Station',
    region: 'College Station, TX',
    group: 'texas',
    city: 'College Station',
    state: 'TX',
    title: 'LED Lighting Bryan–College Station TX',
    description: 'LED lighting for Bryan–College Station student housing garages, hotels, medical offices, retail and warehouses. Free energy audit and written proposal.',
    h1: 'Commercial LED Lighting in Bryan–College Station',
    tagline: 'Student housing garages, game-day hotels, medical offices and retail along University Drive and Highway 6.',
    intro: [
      'Bryan–College Station has added a decade of mid-rise student housing, hotels and medical office space, and much of it was built with fluorescent garages and metal halide site lighting. Student housing garages in particular run every hour of the night, and the lighting bill shows it. Motion-controlled LED brightens the deck when someone is there and idles when no one is, which is where the 80%-plus garage savings come from.',
      'College Station is an easy drive north from our Richmond, TX office. We survey each garage, lot and building, design a layout that often removes fixtures rather than swapping one for one, and phase the installation so residents and guests keep parking. The result is the kind of bright, even garage that Four Oaks Place in Houston still has almost seven years after install.'
    ],
    propertyTypes: [
      { name: 'Student housing garages', text: 'Linear LED with motion sensors on every level and stairwell, phased around move-in and move-out.' },
      { name: 'Hotels and game-day properties', text: 'Garages, corridors and exteriors re-lit without disrupting guests.' },
      { name: 'Medical and professional offices', text: 'Drop-in LED troffers and recessed fixtures along University Drive and Highway 6.' },
      { name: 'Retail centers and warehouses', text: 'LED pole lights, wall packs and high bays with 65% to 75% savings.' }
    ],
    projectIds: ['four-oaks-place', 'shepherd-parking-garage'],
    utility: 'Entergy Texas and Bryan Texas Utilities',
    faqs: [
      { q: 'Can you re-light a student housing garage while it is occupied?', a: 'Yes. We work level by level so residents keep parking, and we schedule around move-in and move-out dates.' },
      { q: 'How much does a garage save with LED and motion sensors?', a: 'Our linear LED luminaire with an integrated motion sensor typically cuts garage lighting cost by more than 80%. Four Oaks Place in Houston paid back in just over one year.' },
      { q: 'Do you handle rebates in Bryan–College Station?', a: 'Yes. We identify the program that applies to your utility, whether Entergy Texas, Bryan Texas Utilities or College Station Utilities, and prepare the documentation.' }
    ]
  },
  // ---------------------------------------------------------------------------------------------
  // Nearby states. Kansas City has a real project (Keurig Dr Pepper, Lenexa, KS); the others lean
  // on the Houston portfolio and the regional utility programs.
  // ---------------------------------------------------------------------------------------------
  {
    slug: 'louisiana',
    name: 'Louisiana',
    region: 'Louisiana',
    group: 'regional',
    city: 'Lake Charles',
    state: 'LA',
    title: 'Commercial LED Lighting Louisiana',
    description: 'Commercial LED lighting for Lake Charles, Lafayette, Baton Rouge, New Orleans and Shreveport garages, hotels, warehouses and industry. Free energy audit.',
    h1: 'Commercial LED Lighting in Louisiana',
    tagline: 'Lake Charles, Lafayette, Baton Rouge, New Orleans and Shreveport, a straight shot east on I-10 from Houston.',
    intro: [
      'Louisiana shares Houston’s climate and much of its economy: petrochemical and port industry, hospitality, and a lot of structured parking that runs around the clock. Lake Charles is closer to our Richmond, TX office than Dallas is, and Lafayette and Baton Rouge are a direct drive along Interstate 10. Hotels and casinos in Lake Charles and New Orleans, industrial yards along the river, and office garages in Baton Rouge and Shreveport all carry HID and fluorescent lighting that LED replaces with brighter light at a fraction of the power.',
      'We keep a Louisiana phone line, (318) 572-3212, alongside our Houston number. The process is the same on either side of the state line: a free fixture-by-fixture survey, a written proposal with savings and payback, and a phased installation backed by a 10-year fixture and 5-year labor warranty. Entergy Louisiana, Cleco and SWEPCO each run commercial energy-efficiency programs, and we prepare the paperwork.'
    ],
    propertyTypes: [
      { name: 'Hotels, casinos and resorts', text: 'Garages, corridors, loading docks and exteriors re-lit around guest schedules.' },
      { name: 'Industrial and port facilities', text: 'LED floods, high bays and wall packs rated for 24-hour duty and humid, corrosive conditions.' },
      { name: 'Office garages and medical campuses', text: 'Linear LED with motion sensors in the garage, drop-in troffers inside.' },
      { name: 'Warehouses and distribution', text: 'LED high bays with occupancy sensors that cut energy use by up to 75%.' }
    ],
    projectIds: ['springwoods-marriott', 'greenstreet-parking'],
    utility: 'Entergy Louisiana, Cleco and SWEPCO',
    faqs: [
      { q: 'Which parts of Louisiana do you serve?', a: 'Lake Charles, Lafayette, Baton Rouge, New Orleans and Shreveport, and the industrial corridors between them. Lake Charles is about two hours from our office.' },
      { q: 'Are you licensed to do electrical work in Louisiana?', a: 'Licensing requirements differ by state. Contact us with the property details and we will confirm the licensing and crew arrangement for your project before the proposal is issued.' },
      { q: 'Do Louisiana utilities offer LED rebates?', a: 'Entergy Louisiana, Cleco and SWEPCO run commercial energy-efficiency programs with incentives for qualifying lighting projects. We document the fixtures and file the application.' }
    ]
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma City & Tulsa',
    region: 'Oklahoma',
    group: 'regional',
    city: 'Oklahoma City',
    state: 'OK',
    title: 'LED Lighting Oklahoma City & Tulsa',
    description: 'Commercial LED lighting for Oklahoma City and Tulsa parking garages, office buildings, warehouses, hotels and energy-sector campuses. Free energy audit.',
    h1: 'Commercial LED Lighting in Oklahoma City and Tulsa',
    tagline: 'Downtown and Bricktown garages, energy-company campuses, medical centers and the warehouses along I-35, I-40 and I-44.',
    intro: [
      'Oklahoma City and Tulsa have the same mix of property we light every week in Houston: energy-company office campuses with large garages, hospital and medical office districts, hotels around the convention centers, and distribution space along the interstates. Many of those buildings still run T8 fluorescent garages and HID site lighting that cost more to maintain than they are worth.',
      'Our approach does not change with the state line. We survey every fixture, take light readings, and design a layout that often removes fixtures rather than replacing them one for one. Four Oaks Place in Houston lost nearly 1,500 fixtures and got brighter. Installation is phased so the property keeps operating, and we prepare the OG&E or PSO commercial rebate documentation.'
    ],
    propertyTypes: [
      { name: 'Energy-company campuses and garages', text: 'Linear LED with motion sensors across every deck, with the fixture count cut by a smart layout.' },
      { name: 'Medical districts', text: 'Even, flicker-free light in suites and corridors, plus garages and lots on sensor and photocell control.' },
      { name: 'Hotels and convention properties', text: 'Garage entries, corridors, loading docks and common areas handled by one crew.' },
      { name: 'Warehouses and manufacturing', text: 'LED high bays that replace HID and T5 with brighter, cooler light and up to 75% savings.' }
    ],
    projectIds: ['four-oaks-place', 'alley-theatre'],
    utility: 'OG&E and PSO',
    faqs: [
      { q: 'Do you take on projects in Oklahoma?', a: 'Yes. We have completed work outside Texas, including a high bay conversion for Keurig Dr Pepper in Lenexa, Kansas, and we travel for commercial projects in Oklahoma City and Tulsa.' },
      { q: 'How is electrical licensing handled out of state?', a: 'Requirements differ by state. Send us the property details and we will confirm the licensing and crew arrangement for your project before we issue a proposal.' },
      { q: 'Are there LED rebates in Oklahoma?', a: 'OG&E and PSO both run commercial energy-efficiency programs that pay incentives for qualifying LED retrofits. We prepare the fixture inventory and the application.' }
    ]
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    region: 'Arkansas',
    group: 'regional',
    city: 'Little Rock',
    state: 'AR',
    title: 'Commercial LED Lighting Arkansas',
    description: 'Commercial LED lighting for Little Rock, Northwest Arkansas and Texarkana warehouses, distribution centers, offices, garages and hotels. Free energy audit.',
    h1: 'Commercial LED Lighting in Arkansas',
    tagline: 'Little Rock garages and medical campuses, Northwest Arkansas distribution and corporate space, and Texarkana industry.',
    intro: [
      'Arkansas is a logistics state. The distribution centers that serve the retailers headquartered in Northwest Arkansas, the trucking and warehouse space around Little Rock and the industrial properties in Texarkana all run tall-ceiling lighting for long hours, and HID high bays are the most expensive way to do it. LED high bays with occupancy sensors typically cut that load by up to 75% and give the floor brighter, cooler light.',
      'We have converted warehouse lighting as far north as Lenexa, Kansas, for Keurig Dr Pepper, and Arkansas sits on the same route. The free survey covers every fixture, run hour and your kilowatt rate, the proposal shows savings and payback in writing, and the installation is phased so the dock never stops. Entergy Arkansas and SWEPCO commercial rebate paperwork is prepared for you.'
    ],
    propertyTypes: [
      { name: 'Distribution centers and warehouses', text: 'LED high bays with occupancy sensors sized to the rack height and the work below.' },
      { name: 'Corporate and medical campuses', text: 'Garages on linear LED with motion sensors, troffers and recessed fixtures inside.' },
      { name: 'Hotels and retail', text: 'Parking lot poles, perimeter wall packs, corridors and lobbies on one contractor.' },
      { name: 'Industrial and manufacturing', text: 'Floods, high masts and wall packs that replace HID with instant-on LED.' }
    ],
    projectIds: ['four-oaks-place', 'greenstreet-parking'],
    utility: 'Entergy Arkansas and SWEPCO',
    faqs: [
      { q: 'How long does a warehouse LED conversion take?', a: 'A showroom and warehouse in Katy, TX was completed in one day. Larger distribution centers typically take about four days, phased by aisle so operations continue.' },
      { q: 'Do you work in Northwest Arkansas as well as Little Rock?', a: 'Yes. We serve Little Rock, Northwest Arkansas including Bentonville, Rogers, Springdale and Fayetteville, and Texarkana.' },
      { q: 'How is licensing handled for an Arkansas project?', a: 'Requirements differ by state. Contact us with the property details and we will confirm the licensing and crew arrangement for your project before the proposal is issued.' }
    ]
  },
  {
    slug: 'kansas-city',
    name: 'Kansas City',
    region: 'Kansas City, KS–MO',
    group: 'regional',
    city: 'Kansas City',
    state: 'KS',
    title: 'Commercial LED Lighting Kansas City',
    description: 'Warehouse and commercial LED lighting in Kansas City, Lenexa, Overland Park and Olathe. The Keurig Dr Pepper warehouse in Lenexa is our work. Free energy audit.',
    h1: 'Commercial LED Lighting in Kansas City',
    tagline: 'Johnson County warehouses and offices, the Lenexa and Olathe logistics corridor, and Kansas City, Missouri.',
    intro: [
      'Kansas City is one of the largest distribution hubs in the country, and the warehouses of Lenexa, Olathe, Edwardsville and the Northland run high bay lighting for long shifts. Metal halide and T5 high bays are the most expensive way to light that space, and the light they give fades long before the lamps fail.',
      'We converted the Keurig Dr Pepper warehouse in Lenexa, Kansas to LED high bays. The aisles are brighter and the electrical load is lower, and the photos below are from the same aisle before and after. The same process applies to any Kansas City property: a free fixture-by-fixture survey, a written proposal with savings and payback, a phased installation that keeps the dock moving, and Evergy commercial rebate paperwork prepared for you.'
    ],
    propertyTypes: [
      { name: 'Warehouses and distribution', text: 'LED high bays with occupancy sensors for Lenexa, Olathe, Edwardsville and the Northland.' },
      { name: 'Office parks and garages', text: 'Linear LED with motion sensors in the garage, troffers and recessed fixtures inside.' },
      { name: 'Food and beverage facilities', text: 'Sealed, washdown-rated LED fixtures with the color temperature the process needs.' },
      { name: 'Hotels, retail and medical', text: 'Parking lot poles, wall packs, corridors and lobbies on one contractor.' }
    ],
    projectIds: ['four-oaks-place', 'greenstreet-parking'],
    beforeAfter: {
      title: 'Keurig Dr Pepper Warehouse, Lenexa, KS',
      note: 'Same aisle before and after the high bay LED conversion. Brighter aisles, lower load.',
      before: '/images/lenexa-before.jpg',
      after: '/images/lenexa-after.jpg'
    },
    utility: 'Evergy',
    faqs: [
      { q: 'What did you do at the Keurig Dr Pepper warehouse in Lenexa?', a: 'We converted the warehouse high bay lighting to LED. The aisles are brighter, the electrical load is lower and the fixtures need far less maintenance than the lamps they replaced.' },
      { q: 'Do you serve both the Kansas and Missouri sides?', a: 'Yes. Lenexa, Overland Park, Olathe, Shawnee and Kansas City, Kansas as well as Kansas City, Missouri, Independence and the Northland.' },
      { q: 'How is licensing handled for a Kansas City project?', a: 'Requirements differ by state and city. Contact us with the property details and we will confirm the licensing and crew arrangement for your project before the proposal is issued.' }
    ]
  }
]

export const serviceAreasBySlug = Object.fromEntries(serviceAreas.map(a => [a.slug, a]))

// How the hub page, footer and related-links blocks group the areas.
export const serviceAreaGroups = [
  { id: 'houston', name: 'Greater Houston', blurb: 'Our home market. Downtown to The Woodlands, Katy to Sugar Land, with the projects to prove it.' },
  { id: 'texas', name: 'Across Texas', blurb: 'Dallas–Fort Worth, Austin, San Antonio and the Gulf Coast, with statewide electrical licensing and local utility rebates handled.' },
  { id: 'regional', name: 'Louisiana, Oklahoma, Arkansas & Kansas City', blurb: 'Nearby states we travel to for commercial projects, including the Keurig Dr Pepper warehouse in Lenexa, Kansas.' }
]

export const serviceAreasByGroup = Object.fromEntries(
  serviceAreaGroups.map(g => [g.id, serviceAreas.filter(a => a.group === g.id)])
)

// Other communities mentioned on the hub page without their own landing page.
export const otherCommunities = [
  'Pearland', 'Pasadena', 'Cypress', 'Humble', 'Missouri City', 'Stafford', 'Conroe', 'Tomball', 'Clear Lake', 'Bellaire', 'Memorial', 'Medical Center'
]

export const otherTexasCities = [
  'Galveston', 'Victoria', 'Waco', 'Tyler', 'Lufkin', 'Killeen–Temple', 'Laredo', 'McAllen', 'Brownsville', 'Lubbock', 'Midland–Odessa', 'Amarillo', 'El Paso'
]

// Hub page FAQs. Emitted as FAQPage structured data.
export const serviceAreaFaqs = [
  { q: 'Where is Infinity Lighting Solutions based?', a: 'Our office is in Richmond, TX 77407, on the southwest side of Greater Houston. Houston is our home market and where most of our project photos come from.' },
  { q: 'Do you work outside Houston?', a: 'Yes. We travel statewide in Texas, including Dallas–Fort Worth, Austin, San Antonio, Beaumont and Corpus Christi, and we take on commercial projects in Louisiana, Oklahoma, Arkansas and Kansas City. The Keurig Dr Pepper warehouse in Lenexa, Kansas is our work.' },
  { q: 'Is the energy audit free outside Houston?', a: 'Yes. The fixture-by-fixture survey, light readings and written proposal are free for commercial properties anywhere we serve. We schedule the site visit around your calendar.' },
  { q: 'Do you handle utility rebates in other cities?', a: 'Yes. We identify the commercial lighting program that applies to your utility, whether CenterPoint, Oncor, Austin Energy, CPS Energy, AEP Texas, Entergy, Cleco, SWEPCO, OG&E, PSO or Evergy, and prepare the application.' }
]
