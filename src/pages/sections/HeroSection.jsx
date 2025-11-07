import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '../../contexts/TranslationContext'
import { useTheme } from '../../contexts/ThemeContext'
import { company, getLogo } from '../../data/syntrix.js'
import Header3D from '../../components/Header3D'

const HeroSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 576)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="hero"
      className="hero-section position-relative overflow-hidden min-vh-100 d-flex align-items-center"
      style={{
        // remove background
        background: 'transparent',
        backgroundImage: 'none',
        backgroundColor: 'transparent',

        minHeight: '100vh',
        marginTop: '-56px',
        paddingTop: '56px',
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        className="container h-100 d-flex align-items-center justify-content-center"
        style={{
          position: 'relative',
          minHeight: '100vh',
          paddingTop: '8vw',
          paddingBottom: '4vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="hero-content text-center w-100 px-2 px-md-5" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={getLogo(theme)}
              alt={`${company.name} Logo`}
              style={{
                height: '48px',
                maxWidth: '80vw',
                objectFit: 'contain',
                width: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
              className="mb-3"
            />
          </motion.div>

          <motion.h1
            className="hero-title mb-4 fw-bold"
            style={{
              fontSize: 'clamp(1.5rem, 7vw, 3.5rem)',
              lineHeight: 1.1,
              wordBreak: 'break-word',
              marginBottom: '1.2rem',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t('hero.title.line1')}<br />
            <span className="text-accent">{t('hero.title.line2')}</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle mb-4 mb-md-5"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              maxWidth: 700,
              margin: '0 auto',
              lineHeight: 1.4,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="hero-cta d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3"
            style={{ rowGap: 12, columnGap: 18 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <button className="btn btn-glass btn-primary btn-lg w-100 w-sm-auto" style={{ minWidth: 140 }}>
              {t('hero.cta.primary')}
            </button>
            <button className="btn btn-glass btn-lg w-100 w-sm-auto" style={{ minWidth: 140 }}>
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
        style={{
          zIndex: 2,
          position: 'absolute',
          left: '50%',
          bottom: '5px',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          color: theme === 'dark' ? '#fff' : '#222',
          cursor: 'pointer',
        }}
      >
        <i className="bi bi-chevron-down"></i>
      </motion.div>
    </section>
  )
}

export default HeroSection