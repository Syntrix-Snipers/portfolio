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
      style={{ minHeight: '100vh' }}
    >
      {/* Video Background */}
      <video
        className="hero-background-video"
        src="https://videos.pexels.com/video-files/7649289/7649289-uhd_2560_1440_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.7,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      {/* Overlay for glass effect */}
      <div
        className="hero-background-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: theme === 'dark'
            ? 'rgba(10, 10, 20, 0.55)'
            : 'rgba(255,255,255,0.35)',
          backdropFilter: 'blur(2px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        className="container h-100 d-flex align-items-center justify-content-center"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
        }}
      >
        <div className="hero-content text-center w-100 px-3 px-md-5">
          {isMobile ? (
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
                  height: '64px',
                  maxWidth: '90vw',
                  objectFit: 'contain',
                }}
                className="mb-3"
              />
            </motion.div>
          ) : (
            <Header3D />
          )}

          <motion.h1
            className="hero-title mb-4 fw-bold"
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4rem)',
              lineHeight: 1.1,
              wordBreak: 'break-word',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t('hero.title.line1')}<br />
            <span className="text-accent">{t('hero.title.line2')}</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle mb-5"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              maxWidth: 700,
              margin: '0 auto',
            }}
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
            <button className="btn btn-glass btn-primary btn-lg w-100 w-sm-auto">
              {t('hero.cta.primary')}
            </button>
            <button className="btn btn-glass btn-lg w-100 w-sm-auto">
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
          bottom: 24,
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