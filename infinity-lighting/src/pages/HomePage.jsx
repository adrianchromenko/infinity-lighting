import SEO from '../components/SEO'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import ClientsPartners from '../components/ClientsPartners'
import Footer from '../components/Footer'
import FloatingPhone from '../components/FloatingPhone'

const HomePage = () => {
  return (
    <>
      <SEO 
        description="Infinity Lighting Solutions - Houston's premier commercial LED lighting company. Save up to 75% on energy costs with professional LED upgrades. Free energy audits. Serving Greater Houston area."
        keywords="commercial LED lighting Houston, LED lighting Houston, energy efficient lighting, LED retrofit Houston, commercial lighting contractor, LED lighting services Houston"
        canonical="/"
      />
      <TopBar />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <ClientsPartners />
      <Footer />
      <FloatingPhone />
    </>
  )
}

export default HomePage