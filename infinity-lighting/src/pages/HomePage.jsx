import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WarrantySection from '../components/WarrantySection'
import ClientsPartners from '../components/ClientsPartners'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const HomePage = () => {
  return (
    <>
      <SEO
        description="Houston's #1 commercial LED lighting company. Save up to 75% on energy costs with professional LED upgrades for parking garages, offices, and warehouses. Free energy audits available. Serving Houston, Sugar Land, Katy, and The Woodlands TX."
        keywords="commercial LED lighting Houston, LED lighting Houston TX, energy efficient lighting Houston, LED retrofit Houston, commercial lighting contractor Houston TX, LED lighting installation Houston, LED upgrade Houston, commercial electrician Houston"
        canonical="/"
      />
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <WarrantySection />
      <ClientsPartners />
      <Footer />
      <FloatingPhone />
    </>
  )
}

export default HomePage