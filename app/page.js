import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import ComparisonSection from './components/ComparisonSection'
import AboutSection from './components/AboutSection'
import InstagramSection from './components/InstagramSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <ClientLogos />
      <ComparisonSection />
      <div id="about">
        <AboutSection />
      </div>
      <InstagramSection />
      <div id="services">
        <ServicesSection />
      </div>
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}