import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import PortfolioSection from './sections/PortfolioSection'
import TeamSection from './sections/TeamSection'
import ContactSection from './sections/ContactSection'

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
