import { Link } from 'react-router-dom'
import SEO, { SITE_URL } from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'
import FAQ, { faqSchema } from '../components/FAQ'
import RelatedLinks from '../components/RelatedLinks'
import { faqs } from '../data/faqs'
import './ServiceArea.css'
import './LedRebates.css'

// Utility programs we work with. Names and budgets change year to year, so the page describes
// each program in general terms and the proposal confirms the current details.
const texasUtilities = [
  { utility: 'CenterPoint Energy', area: 'Houston and most of the Greater Houston area', note: 'Commercial standard offer program for lighting and controls retrofits in existing buildings.', link: '/service-areas/downtown-houston' },
  { utility: 'Oncor', area: 'Dallas–Fort Worth and much of North, Central and West Texas', note: 'Commercial standard offer program; projects are reserved with the utility before installation.', link: '/service-areas/dallas-fort-worth' },
  { utility: 'Austin Energy', area: 'City of Austin', note: 'Municipal commercial rebate program with incentives for LED fixtures and lighting controls.', link: '/service-areas/austin' },
  { utility: 'CPS Energy', area: 'San Antonio', note: 'Municipal commercial lighting and demand-response incentives.', link: '/service-areas/san-antonio' },
  { utility: 'Entergy Texas', area: 'Southeast Texas including Beaumont, Port Arthur, Conroe and The Woodlands', note: 'Commercial solutions program for lighting retrofits.', link: '/service-areas/beaumont-golden-triangle' },
  { utility: 'AEP Texas', area: 'Corpus Christi, the Coastal Bend, the Rio Grande Valley and Abilene', note: 'Commercial solutions program for lighting and controls.', link: '/service-areas/corpus-christi' },
  { utility: 'TNMP', area: 'Parts of the Gulf Coast, DFW suburbs and West Texas', note: 'Commercial standard offer program.', link: '/service-areas' },
  { utility: 'Xcel Energy and El Paso Electric', area: 'The Panhandle, South Plains and El Paso', note: 'Commercial lighting efficiency programs.', link: '/service-areas' }
]

const nearbyUtilities = [
  { utility: 'Entergy Louisiana, Cleco and SWEPCO', area: 'Louisiana', note: 'Commercial energy-efficiency programs with prescriptive lighting incentives.', link: '/service-areas/louisiana' },
  { utility: 'OG&E and PSO', area: 'Oklahoma City and Tulsa', note: 'Commercial lighting rebate programs.', link: '/service-areas/oklahoma' },
  { utility: 'Entergy Arkansas and SWEPCO', area: 'Arkansas', note: 'Commercial energy-efficiency programs with lighting incentives.', link: '/service-areas/arkansas' },
  { utility: 'Evergy', area: 'Kansas City, Kansas and Missouri', note: 'Business lighting rebate programs.', link: '/service-areas/kansas-city' }
]

const steps = [
  { title: 'Survey and savings calculation', text: 'We inventory every fixture, its wattage and its run hours, then calculate the kilowatt-hours and peak kilowatts the LED design removes. Those two numbers are what most programs pay on.' },
  { title: 'Application and pre-approval', text: 'Most programs must approve the project before installation starts and reserve funds for it. We file the application with the fixture inventory, the proposed design and the savings math.' },
  { title: 'Installation', text: 'Once the project is reserved we install in phases so the property keeps operating, keeping the documentation the program needs along the way.' },
  { title: 'Verification and payment', text: 'The utility or its inspector verifies the installed fixtures and controls. The incentive is paid once verification is complete, and we reflect it in your net project cost and payback.' }
]

const LedRebates = () => {
  const items = faqs['/led-lighting-rebates-texas']
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Commercial LED Lighting Rebates in Texas and Nearby States',
    description: 'How utility rebate programs for commercial LED lighting work in Texas, which programs apply in each city, and how Infinity Lighting Solutions files them for you.',
    url: `${SITE_URL}/led-lighting-rebates-texas`,
    image: `${SITE_URL}/images/garage-night.jpg`,
    author: { '@id': `${SITE_URL}/#business` },
    publisher: { '@id': `${SITE_URL}/#business` },
    about: ['Utility rebates', 'Commercial LED lighting', 'Energy efficiency programs'],
    inLanguage: 'en-US'
  }

  return (
    <div className="service-area-page rebates-page">
      <SEO
        title="Commercial LED Lighting Rebates in Texas"
        description="How Texas utility rebates for commercial LED lighting work: CenterPoint, Oncor, Austin Energy, CPS Energy, Entergy and AEP Texas. We file the paperwork for you."
        keywords="commercial LED lighting rebates Texas, Oncor LED rebate, CenterPoint commercial lighting rebate, Austin Energy commercial rebate, CPS Energy lighting rebate, Entergy Texas lighting incentive, AEP Texas commercial solutions, utility rebate LED retrofit"
        canonical="/led-lighting-rebates-texas"
        type="article"
        schema={[article, faqSchema(items)]}
      />
      <TopBar />
      <Header />

      <section className="sa-hero">
        <div className="container">
          <nav className="sa-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>LED Lighting Rebates</span>
          </nav>
          <h1 className="sa-title">Commercial LED Lighting Rebates in Texas and Nearby States</h1>
          <p className="sa-tagline">
            Utilities across Texas pay commercial customers to cut lighting load. Here is how the programs work, which one applies to your property, and how we handle the application so the incentive lands in your project.
          </p>
          <div className="sa-hero-actions">
            <Link to="/contact-us" className="sa-btn-primary">Get a Free Energy Audit</Link>
            <a href="tel:2812024625" className="sa-btn-secondary">Call (281) 202-4625</a>
          </div>
        </div>
      </section>

      <section className="sa-intro">
        <div className="container">
          <div className="sa-intro-grid">
            <div className="sa-intro-text">
              <h2 className="rb-h2">Why Texas utilities pay for LED upgrades</h2>
              <p>
                Texas requires its transmission and distribution utilities to meet energy-efficiency goals every year, and the cheapest way for a utility to meet them is to pay customers to use less. Oncor, CenterPoint Energy, AEP Texas, Entergy Texas, TNMP, Xcel Energy and El Paso Electric each run commercial programs that pay an incentive for the kilowatt-hours and peak kilowatts a lighting retrofit removes. Municipal utilities such as Austin Energy and CPS Energy, and many electric cooperatives, run programs of their own.
              </p>
              <p>
                Lighting is the easiest measure to qualify. A parking garage that goes from 8-foot T8 fluorescents running 24 hours a day to motion-controlled linear LED removes a large, predictable load, and that is exactly what these programs are designed to reward. Controls such as occupancy sensors and photocells usually increase the incentive because they cut hours as well as watts.
              </p>
              <p>
                The catch is timing. Program budgets are set each calendar year and are reserved first come, first served. Most programs require the project to be approved before any fixture is installed, and a retrofit completed without pre-approval is usually not eligible. That is why the rebate application is part of our proposal, not an afterthought.
              </p>
            </div>
            <aside className="sa-trust-card">
              <h2>What we handle for you</h2>
              <ul>
                <li>Identify the program that applies to your utility and property</li>
                <li>Fixture inventory, savings math and the application itself</li>
                <li>Pre-approval and fund reservation before installation</li>
                <li>Post-installation documentation and inspection</li>
                <li>Incentive reflected in your net cost and payback</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="rb-steps">
        <div className="container">
          <h2 className="sa-section-title">How a commercial lighting rebate works</h2>
          <ol className="rb-step-list">
            {steps.map((step, index) => (
              <li key={step.title} className="rb-step">
                <span className="rb-step-number">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rb-utilities">
        <div className="container">
          <h2 className="sa-section-title">Texas utility programs by area</h2>
          <p className="rb-note">
            Program names, incentive rates and budgets change from year to year. The table shows who serves each area and the kind of program they run; we confirm the current details when we prepare your proposal.
          </p>
          <div className="rb-table-wrap">
            <table className="rb-table">
              <thead>
                <tr><th>Utility</th><th>Service area</th><th>Commercial lighting program</th></tr>
              </thead>
              <tbody>
                {texasUtilities.map(u => (
                  <tr key={u.utility}>
                    <td><strong>{u.utility}</strong></td>
                    <td><Link to={u.link}>{u.area}</Link></td>
                    <td>{u.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="sa-section-title rb-h2-spaced">Louisiana, Oklahoma, Arkansas and Kansas City</h2>
          <div className="rb-table-wrap">
            <table className="rb-table">
              <thead>
                <tr><th>Utility</th><th>Service area</th><th>Commercial lighting program</th></tr>
              </thead>
              <tbody>
                {nearbyUtilities.map(u => (
                  <tr key={u.utility}>
                    <td><strong>{u.utility}</strong></td>
                    <td><Link to={u.link}>{u.area}</Link></td>
                    <td>{u.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rb-measures">
        <div className="container">
          <h2 className="sa-section-title">What usually qualifies</h2>
          <div className="sa-property-grid">
            <div className="sa-property-card">
              <h3>Parking garage retrofits</h3>
              <p>Fluorescent or HID garage fixtures replaced with linear LED, with motion sensors adding a controls incentive on top. <Link to="/parking-garages">Garage lighting</Link></p>
            </div>
            <div className="sa-property-card">
              <h3>Warehouse high bays</h3>
              <p>Metal halide, T5 or T8 high bays replaced with LED high bays, with occupancy sensors on aisles and docks. <Link to="/warehouses">Warehouse lighting</Link></p>
            </div>
            <div className="sa-property-card">
              <h3>Office and retail interiors</h3>
              <p>Fluorescent troffers replaced with LED troffers or flat panels, plus occupancy and daylight controls. <Link to="/office-buildings">Office lighting</Link></p>
            </div>
            <div className="sa-property-card">
              <h3>Exterior and site lighting</h3>
              <p>Metal halide pole lights, wall packs and floods replaced with LED on photocell or motion control. <Link to="/parking-lots">Parking lot lighting</Link></p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={items} title="Rebate questions we hear most" />

      <section className="sa-cta">
        <div className="container">
          <h2>Find out what your utility will pay</h2>
          <p>The free energy audit produces the fixture inventory and savings numbers the application needs. We take it from there.</p>
          <Link to="/contact-us" className="sa-btn-light">Request Your Free Energy Audit</Link>
        </div>
      </section>

      <RelatedLinks current="/led-lighting-rebates-texas" title="LED lighting services and areas we serve" />
      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default LedRebates
