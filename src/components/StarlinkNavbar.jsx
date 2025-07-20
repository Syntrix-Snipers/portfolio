import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from '../contexts/TranslationContext'
import { company, getLogo, navigation } from '../data/syntrix'

const StarlinkNavbar = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme, isDark } = useTheme()
  const { language, changeLanguage } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.menuItems.map(item => item.targetSection)
      sections.unshift('hero') // Add hero section to the beginning
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial section
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top glass-navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.a 
          className={`navbar-brand d-flex align-items-center ${activeSection === 'hero' ? 'active' : ''}`}
          href={navigation.brand.href}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(navigation.brand.targetSection)
            setActiveSection(navigation.brand.targetSection)
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={getLogo(theme)} 
            alt={navigation.brand.logo.alt}
            height={navigation.brand.logo.height}
            className="me-2"
          />
          <strong>{navigation.brand.name}</strong>
        </motion.a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={navigation.mobile.togglerTarget}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id={navigation.mobile.collapseId}>
          <ul className="navbar-nav ms-auto">
            {navigation.menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <motion.a 
                  className={`nav-link ${activeSection === item.targetSection ? 'active' : ''}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.targetSection)
                    setActiveSection(item.targetSection)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.description}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
            
            {/* Language Toggle */}
            <li className="nav-item">
              <motion.button
                className="language-toggle ms-2"
                onClick={() => changeLanguage(language === 'en' ? 'si' : 'en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={navigation.actions.language.title}
              >
                {navigation.actions.language.options.find(opt => opt.code === language)?.label || 'EN'}
              </motion.button>
            </li>
            
            {/* Theme Toggle */}
            <li className="nav-item">
              <motion.button
                className="theme-toggle ms-2"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={navigation.actions.theme.title}
              >
                <i className={isDark ? navigation.actions.theme.darkIcon : navigation.actions.theme.lightIcon}></i>
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default StarlinkNavbar
