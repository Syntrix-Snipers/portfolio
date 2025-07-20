import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../../contexts/TranslationContext'
import { about, technologies } from '../../data/syntrix'

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
                {about.title.line1}
                <span className="text-accent d-block">{about.title.line2}</span>
              </h2>
              <p className="lead mb-4">
                {about.description.paragraph1}
              </p>
              <p className="mb-4">
                {about.description.paragraph2}
              </p>
              
              <div className="stats-grid mt-5">
                <div className="stat-item">
                  <span className="stat-number">{about.stats.projects.number}</span>
                  <span className="stat-label">{about.stats.projects.label}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{about.stats.satisfaction.number}</span>
                  <span className="stat-label">{about.stats.satisfaction.label}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{about.stats.engineers.number}</span>
                  <span className="stat-label">{about.stats.engineers.label}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{about.stats.experience.number}</span>
                  <span className="stat-label">{about.stats.experience.label}</span>
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
                {technologies.frontend.slice(0, 3).map((tech, index) => (
                  <motion.div 
                    key={tech}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {tech}
                  </motion.div>
                ))}
                {technologies.backend.slice(0, 3).map((tech, index) => (
                  <motion.div 
                    key={tech}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
