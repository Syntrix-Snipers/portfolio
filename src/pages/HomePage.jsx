import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../contexts/TranslationContext'

// Section Components
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero-section position-relative overflow-hidden">
      <motion.div 
        className="hero-background"
        style={{ y }}
      />
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
        <div className="hero-content">
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
            className="hero-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <button className="btn btn-glass btn-primary btn-lg me-3">
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

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const { t } = useTranslation()

  return (
    <section id="about" className="about-section section" ref={ref}>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title fw-bold mb-4">
                {t('about.title.line1')}
                <span className="text-accent d-block">{t('about.title.line2')}</span>
              </h2>
              <p className="lead mb-4">
                {t('about.description.1')}
              </p>
              <p className="mb-4">
                {t('about.description.2')}
              </p>
              
              <div className="stats-grid mt-5">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">{t('about.stats.projects')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">{t('about.stats.satisfaction')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{t('about.stats.engineers')}</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              className="tech-visualization"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="tech-grid">
                <div className="tech-item">React</div>
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Python</div>
                <div className="tech-item">AWS</div>
                <div className="tech-item">TypeScript</div>
                <div className="tech-item">MongoDB</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  const { t } = useTranslation()

  const services = [
    {
      icon: 'bi bi-code-slash',
      title: t('services.web.title'),
      description: t('services.web.description')
    },
    {
      icon: 'bi bi-phone',
      title: t('services.mobile.title'),
      description: t('services.mobile.description')
    },
    {
      icon: 'bi bi-building',
      title: t('services.enterprise.title'),
      description: t('services.enterprise.description')
    },
    {
      icon: 'bi bi-cloud',
      title: t('services.cloud.title'),
      description: t('services.cloud.description')
    }
  ]

  return (
    <section id="services" className="services-section section" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            className="section-title fw-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <motion.div
                className="glass-card h-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="service-icon mb-3">
                  <i className={service.icon}></i>
                </div>
                <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const { t } = useTranslation()

  return (
    <section id="contact" className="contact-section section" ref={ref}>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title fw-bold mb-4">
                {t('contact.title.line1')}
                <span className="text-accent d-block">{t('contact.title.line2')}</span>
              </h2>
              <p className="lead mb-5">
                {t('contact.description')}
              </p>
              
              <div className="contact-actions mb-5">
                <button className="btn btn-glass btn-primary btn-lg me-3">
                  {t('contact.cta.primary')}
                </button>
                <button className="btn btn-glass btn-lg">
                  {t('contact.cta.secondary')}
                </button>
              </div>
              
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <i className="bi bi-envelope-at"></i>
                    <p className="mb-0">{t('contact.info.email')}</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <p className="mb-0">{t('contact.info.phone')}</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <p className="mb-0">{t('contact.info.location')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
