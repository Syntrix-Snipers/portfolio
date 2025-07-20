import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../../contexts/TranslationContext'
import { services } from '../../data/syntrix'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  const { t } = useTranslation()

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
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-6 col-md-6 col-sm-12">
              <motion.div
                className="glass-card h-100 d-flex flex-column p-4"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="service-icon mb-3 text-center">
                  <i className={`${service.icon} fs-1 text-primary`}></i>
                </div>
                <h3 className="h4 fw-bold mb-3 text-center">{service.name}</h3>
                <p className="text-center mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
                <ul className="list-unstyled mt-auto">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi-check-circle text-success me-2"></i>
                      <small>{feature}</small>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
