import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from '../contexts/TranslationContext'

const StarlinkNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])
  const { theme, toggleTheme, isDark } = useTheme()
  const { t, language, changeLanguage, getAvailableLanguages } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
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
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'scrolled' : ''}`}
      style={{ opacity: navbarOpacity }}
    >
      <div className="container">
        <motion.a 
          className="navbar-brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero')
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>SyntaxSnipers</strong>
        </motion.a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <motion.a 
                className="nav-link"
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.mission')}
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a 
                className="nav-link"
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('services')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.capabilities')}
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a 
                className="nav-link"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.launch')}
              </motion.a>
            </li>
            
            {/* Language Toggle */}
            <li className="nav-item">
              <motion.button
                className="language-toggle ms-2"
                onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Toggle Language"
              >
                {language.toUpperCase()}
              </motion.button>
            </li>
            
            {/* Theme Toggle */}
            <li className="nav-item">
              <motion.button
                className="theme-toggle ms-2"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Toggle Theme"
              >
                {isDark ? (
                  <i className="bi bi-sun"></i>
                ) : (
                  <i className="bi bi-moon"></i>
                )}
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default StarlinkNavbar
