import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../../contexts/TranslationContext'
import { portfolio } from '../../data/syntrix'
import OptimizedImage from '../../components/OptimizedImage'

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t } = useTranslation()

  return (
    <section id="portfolio" className="portfolio-section section" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            className="section-title fw-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p 
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </div>
        
        <div className="row g-4">
          {portfolio.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <motion.div
                className="portfolio-card glass-card h-100 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <OptimizedImage
                  src={project.image}
                  alt={project.name}
                  className="portfolio-image w-100"
                  style={{ height: '200px', objectFit: 'cover' }}
                  lazy={true}
                />
                <div className="portfolio-content p-4">
                  <h4 className="portfolio-title fw-bold mb-2">{project.name}</h4>
                  <p className="portfolio-description mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="portfolio-tech mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge bg-primary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-secondary">{project.category}</span>
                    {project.url && (
                      <a href={project.url} className="btn btn-outline-primary btn-sm">
                        {t('portfolio.viewProject')} <i className="bi-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
