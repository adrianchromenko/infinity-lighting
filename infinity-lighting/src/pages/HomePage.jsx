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
        description="Houston commercial LED lighting and electrical contractor serving Texas and nearby states. Garages, offices, hotels and warehouses with a 10-year warranty."
        preloadImage="/images/garage-night.jpg"
        keywords="commercial LED lighting Houston, commercial LED lighting Texas, LED lighting Houston TX, LED retrofit Texas, commercial lighting contractor Texas, LED lighting Dallas, LED lighting Austin, LED lighting San Antonio, parking garage LED lighting Texas, warehouse LED lighting Texas, commercial electrician Houston"
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