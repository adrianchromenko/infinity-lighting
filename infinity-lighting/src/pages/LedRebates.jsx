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

// Utility programs around Houston. Names and budgets change year to year, so the page describes
// each program in general terms and the proposal confirms the current details.
const houstonUtilities = [
  { utility: 'CenterPoint Energy', area: 'Houston and most of Harris, Fort Bend, Brazoria and Galveston counties', note: 'Commercial standard offer program for lighting and controls retrofits in existing buildings. Covers Downtown, the Galleria, Westchase, Katy, Sugar Land and Richmond.', link: '/service-areas/downtown-houston' },
  { utility: 'Entergy Texas', area: 'Conroe, much of Montgomery County and parts of The Woodlands', note: 'Commercial solutions program for lighting retrofits, with incentives based on the kilowatts and kilowatt-hours removed.', link: '/service-areas/the-woodlands-spring' },
  { utility: 'TNMP (Texas-New Mexico Power)', area: 'League City, Texas City, Dickinson, Friendswood, Alvin and parts of Galveston and Brazoria counties', note: 'Commercial standard offer program; projects are reserved with the utility before installation.', link: '/service-areas' },
  { utility: 'Electric cooperatives', area: 'The outer edges of the metro, such as San Bernard Electric Cooperative to the west and Sam Houston Electric Cooperative to the northeast', note: 'Co-op programs vary. We confirm what is available for your meter during the audit.', link: '/service-areas' }
]

const steps = [
  { title: 'Survey and savings calculation', text: 'We inventory every fixture, its wattage and its run hours, then calculate the kilowatt-hours and peak kilowatts the LED design removes. Those two numbers are what most programs pay on.' },
  { title: 'Application and pre-approval', text: 'Most programs must approve the project before installation starts and reserve funds for it. We file the application with the fixture inventory, the proposed design and the savings math.' },
  { title: 'Installation', text: 'Once the project is reserved we install in phases so the property keeps operating, keeping the documentation the program needs along the way.' },
  { title: 'Verification and payment', text: 'The utility or its inspector verifies the installed fixtures and controls. The incentive is paid once verification is complete, and we reflect it in your net project cost and payback.' }
]

const LedRebates = () => {
  const items = faqs['/led-lighting-rebates-houston']
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Commercial LED Lighting Rebates in Greater Houston',
    description: 'How utility rebate programs for commercial LED lighting work around Houston, which program applies to each part of the metro, and how Infinity Lighting Solutions files them for you.',
    url: `${SITE_URL}/led-lighting-rebates-houston`,
    image: `${SITE_URL}/images/garage-night.jpg`,
    author: { '@id': `${SITE_URL}/#business` },
    publisher: { '@id': `${SITE_URL}/#business` },
    about: ['Utility rebates', 'Commercial LED lighting', 'CenterPoint Energy', 'Energy efficiency programs'],
    inLanguage: 'en-US'
  }

  return (
    <div className="service-area-page rebates-page">
      <SEO
        title="Commercial LED Lighting Rebates Houston"
        description="How Houston utility rebates for commercial LED lighting work: CenterPoint Energy, Entergy Texas and TNMP programs. We file the paperwork for you."
        keywords="commercial LED lighting rebates Houston, CenterPoint commercial lighting rebate, CenterPoint Energy LED rebate, Entergy Texas lighting incentive, TNMP commercial rebate, utility rebate LED retrofit Houston, Houston lighting rebate program"
        canonical="/led-lighting-rebates-houston"
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
          <h1 className="sa-title">Commercial LED Lighting Rebates in Greater Houston</h1>
          <p className="sa-tagline">
            Houston-area utilities pay commercial customers to cut lighting load. Here is how the programs work, which one applies to your property, and how we handle the application so the incentive lands in your project.
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
              <h2 className="rb-h2">Why Houston utilities pay for LED upgrades</h2>
              <p>
                Texas requires its transmission and distribution utilities to meet energy-efficiency goals every year, and the cheapest way for a utility to meet them is to pay customers to use less. Around Houston that means CenterPoint Energy for most of the metro, Entergy Texas to the north and TNMP along the coast, each running a commercial program that pays an incentive for the kilowatt-hours and peak kilowatts a lighting retrofit removes.
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
          <h2 className="sa-section-title">Houston utility programs by area</h2>
          <p className="rb-note">
            Program names, incentive rates and budgets change from year to year. The table shows who serves each part of the metro and the kind of program they run; we confirm the current details when we prepare your proposal. Your electric bill names the transmission and distribution utility separately from your retail electric provider, and it is the utility that runs the rebate program.
          </p>
          <div className="rb-table-wrap">
            <table className="rb-table">
              <thead>
                <tr><th>Utility</th><th>Service area</th><th>Commercial lighting program</th></tr>
              </thead>
              <tbody>
                {houstonUtilities.map(u => (
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

      <RelatedLinks current="/led-lighting-rebates-houston" title="LED lighting services and areas we serve" />
      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default LedRebates
