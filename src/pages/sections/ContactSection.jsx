import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../../contexts/TranslationContext'
import { company, contact } from '../../data/syntrix'

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
              
              <div className="contact-actions mb-5 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                <motion.button 
                  className="btn btn-glass btn-primary btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.cta.primary')}
                </motion.button>
                <motion.button 
                  className="btn btn-glass btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.cta.secondary')}
                </motion.button>
              </div>
              
              <div className="row g-4">
                <div className="col-md-4 col-sm-6">
                  <motion.div 
                    className="contact-item text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <i className="bi bi-envelope-at fs-2 mb-2 d-block text-primary"></i>
                    <p className="mb-0 small">{t('contact.info.email')}</p>
                    <p className="mb-0 fw-bold">{company.email}</p>
                  </motion.div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <motion.div 
                    className="contact-item text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <i className="bi bi-telephone fs-2 mb-2 d-block text-primary"></i>
                    <p className="mb-0 small">{t('contact.info.phone')}</p>
                    <p className="mb-0 fw-bold">{company.phone}</p>
                  </motion.div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <motion.div 
                    className="contact-item text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <i className="bi bi-geo-alt fs-2 mb-2 d-block text-primary"></i>
                    <p className="mb-0 small">{t('contact.info.location')}</p>
                    <p className="mb-0 fw-bold">{contact.businessHours.hours}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
