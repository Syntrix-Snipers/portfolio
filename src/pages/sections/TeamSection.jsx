import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../../contexts/TranslationContext'
import { team } from '../../data/syntrix'
import OptimizedImage from '../../components/OptimizedImage'

const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t } = useTranslation()

  return (
    <section id="team" className="team-section section" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 
            className="section-title fw-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('team.title')}
          </motion.h2>
          <motion.p 
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('team.subtitle')}
          </motion.p>
        </div>
        
        <div className="row justify-content-center">
          {team.map((member, index) => (
            <div key={member.id} className="col-lg-4 col-md-6 mb-4">
              <motion.div
                className="team-card glass-card text-center p-4 h-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  className="team-photo rounded-circle mb-3 mx-auto d-block"
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    objectFit: 'cover',
                    border: '3px solid var(--bs-primary)'
                  }}
                  lazy={true}
                />
                <h4 className="team-name fw-bold">{member.name}</h4>
                <p className="team-position text-primary fw-semibold">{member.position}</p>
                <p className="team-bio mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {member.bio}
                </p>
                <div className="team-skills mb-3">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="badge bg-secondary me-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="team-social">
                  {member.social.linkedin && (
                    <motion.a 
                      href={member.social.linkedin} 
                      className="btn btn-outline-primary btn-sm me-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="bi-linkedin"></i>
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a 
                      href={member.social.github} 
                      className="btn btn-outline-primary btn-sm me-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="bi-github"></i>
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a 
                      href={member.social.twitter} 
                      className="btn btn-outline-primary btn-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="bi-twitter"></i>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
