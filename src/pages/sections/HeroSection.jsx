import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from '../../contexts/TranslationContext'
import { useTheme } from '../../contexts/ThemeContext'
import { company, getLogo } from '../../data/syntrix.js'

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <section id="hero" className="hero-section position-relative overflow-hidden">
      <motion.div 
        className="hero-background"
        style={{ y }}
      />
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
        <div className="hero-content text-center">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={getLogo(theme)} 
              alt={`${company.name} Logo`}
              style={{ height: '80px', objectFit: 'contain' }}
              className="mb-3"
            />
          </motion.div>
          
          <motion.h1 
            className="hero-title mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t('hero.title.line1')}<br />
            <span className="text-accent">{t('hero.title.line2')}</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            className="hero-cta d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <button className="btn btn-glass btn-primary btn-lg">
              {t('hero.cta.primary')}
            </button>
            <button className="btn btn-glass btn-lg">
              {t('hero.cta.secondary')}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <i className="bi bi-chevron-down"></i>
      </motion.div>
    </section>
  )
}

export default HeroSection
