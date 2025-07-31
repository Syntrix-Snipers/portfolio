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
      className="navbar navbar-expand-lg navbar-dark glass-navbar"
      style={{ top: 0, left: 0, width: '100%', zIndex: 1030 }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo left */}
        <a
          className="navbar-brand d-flex align-items-center"
          href={navigation.brand.href}
          onClick={e => {
            e.preventDefault()
            scrollToSection(navigation.brand.targetSection)
            setActiveSection(navigation.brand.targetSection)
          }}
        >
          <img
            src={getLogo(theme)}
            alt={navigation.brand.logo.alt}
            height={navigation.brand.logo.height}
            className="me-2"
          />
        </a>

        {/* Brand center */}
        <motion.div
          className="mx-auto text-center"
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <strong style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>
            {navigation.brand.name}
          </strong>
        </motion.div>

        {/* Right controls */}
        <div className="d-flex align-items-center ms-auto">
          <motion.button
            className="language-toggle ms-2"
            onClick={() => changeLanguage(language === 'en' ? 'si' : 'en')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={navigation.actions.language.title}
          >
            {navigation.actions.language.options.find(opt => opt.code === language)?.label || 'EN'}
          </motion.button>
          <motion.button
            className="theme-toggle ms-2"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={navigation.actions.theme.title}
          >
            <i className={isDark ? navigation.actions.theme.darkIcon : navigation.actions.theme.lightIcon}></i>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default StarlinkNavbar
