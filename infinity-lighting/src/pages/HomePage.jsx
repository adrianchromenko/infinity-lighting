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
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const HomePage = () => {
  return (
    <>
      <SEO
        description="Houston commercial LED lighting and electrical contractor. Garages, offices, hotels and warehouses re-lit with a 10-year fixture and 5-year labor warranty."
        keywords="commercial LED lighting Houston, LED lighting Houston TX, energy efficient lighting Houston, LED retrofit Houston, commercial lighting contractor Houston TX, LED lighting installation Houston, LED upgrade Houston, commercial electrician Houston"
        canonical="/"
      />
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <WarrantySection />
      <ClientsPartners />
      <FeaturedProjects />
      <RelatedLinks current="/" title="LED Lighting Services and Areas We Serve" />
      <Footer />
      <FloatingPhone />
    </>
  )
}

export default HomePage