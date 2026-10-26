import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import BeforeAfter from '../components/BeforeAfter'
import WarrantySection from '../components/WarrantySection'
import ClientsPartners from '../components/ClientsPartners'
import FeaturedProjects from '../components/FeaturedProjects'
import RelatedLinks from '../components/RelatedLinks'
import FAQ, { faqSchema } from '../components/FAQ'
import { faqs } from '../data/faqs'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const HomePage = () => {
  return (
    <>
      <SEO
        description="Houston commercial LED lighting contractor. Garage, office, hotel and warehouse LED retrofits across Greater Houston, backed by a 10-year fixture warranty."
        preloadImage="/images/garage-night.jpg"
        keywords="commercial LED lighting Houston, LED lighting Houston TX, commercial lighting contractor Houston, LED retrofit Houston, parking garage LED lighting Houston, warehouse LED lighting Houston, office LED lighting Houston, LED lighting Katy, LED lighting Sugar Land, LED lighting The Woodlands, LED lighting Richmond TX"
        canonical="/"
        schema={faqSchema(faqs['/'])}
      />
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <WarrantySection />
      <ClientsPartners />
      <FeaturedProjects />
      <FAQ items={faqs['/']} title="Houston commercial LED lighting questions" />
      <RelatedLinks current="/" title="LED Lighting Services and Areas We Serve" />
      <Footer />
      <FloatingPhone />
    </>
  )
}

export default HomePage