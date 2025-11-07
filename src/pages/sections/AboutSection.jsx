import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../../contexts/TranslationContext'
import { about, technologies } from '../../data/syntrix'
import Spline3D from '../../components/Spline3D'

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const { t } = useTranslation()

  return (
    <section id="about" className="about-section section py-5" ref={ref}>
      <div className="container">
        <div className="row align-items-center min-vh-100 flex-column-reverse flex-lg-row">
          {/* Text/Stats Column */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0 px-2 px-md-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>
                {about.title.line1}
                <span className="text-accent d-block">{about.title.line2}</span>
              </h2>
              <p className="lead mb-4" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)' }}>
                {about.description.paragraph1}
              </p>
              <p className="mb-4" style={{ fontSize: 'clamp(1rem, 1.7vw, 1.15rem)' }}>
                {about.description.paragraph2}
              </p>
              <div className="stats-grid mt-4 d-flex flex-wrap justify-content-center gap-3">
                <div className="stat-item text-center flex-fill min-w-100 min-w-md-0" style={{ minWidth: 120 }}>
                  <span className="stat-number d-block" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{about.stats.projects.number}</span>
                  <span className="stat-label small">{about.stats.projects.label}</span>
                </div>
                <div className="stat-item text-center flex-fill min-w-100 min-w-md-0" style={{ minWidth: 120 }}>
                  <span className="stat-number d-block" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{about.stats.satisfaction.number}</span>
                  <span className="stat-label small">{about.stats.satisfaction.label}</span>
                </div>
                <div className="stat-item text-center flex-fill min-w-100 min-w-md-0" style={{ minWidth: 120 }}>
                  <span className="stat-number d-block" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{about.stats.engineers.number}</span>
                  <span className="stat-label small">{about.stats.engineers.label}</span>
                </div>
                <div className="stat-item text-center flex-fill min-w-100 min-w-md-0" style={{ minWidth: 120 }}>
                  <span className="stat-number d-block" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{about.stats.experience.number}</span>
                  <span className="stat-label small">{about.stats.experience.label}</span>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Tech Grid Column (web only: hidden on mobile) */}
          <div className="col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center mb-4 mb-lg-0 px-2 px-md-4">
            <motion.div
              className="tech-visualization"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="tech-grid d-flex flex-wrap justify-content-center gap-3 py-2">
                <Spline3D style={{ margin: '0 auto', maxWidth: 900 }} />
                {technologies.frontend.slice(0, 3).map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="tech-item text-center px-3 py-2 rounded shadow-sm mb-2"
                    style={{ background: 'rgba(255,255,255,0.08)', minWidth: 90, fontSize: 'clamp(1rem,2vw,1.2rem)' }}
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
                    className="tech-item text-center px-3 py-2 rounded shadow-sm mb-2"
                    style={{ background: 'rgba(255,255,255,0.08)', minWidth: 90, fontSize: 'clamp(1rem,2vw,1.2rem)' }}
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
