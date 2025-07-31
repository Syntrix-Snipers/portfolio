import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '../../contexts/TranslationContext'
import { team } from '../../data/syntrix'
import OptimizedImage from '../../components/OptimizedImage'
import TeamCard from './TeamCard'

const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t } = useTranslation()

  return (
    <section id="team" className="team-section section" ref={ref}>
      <div className="container">
        <div className="text-center mb-4 mb-md-5 px-2 px-md-0">
          <motion.h2 
            className="section-title fw-bold mb-3"
            style={{ fontSize: 'clamp(2rem, 6vw, 2.8rem)', lineHeight: 1.15 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="lead mx-auto"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
              maxWidth: 600,
              marginBottom: 0
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our talented team of developers, designers, and strategists is dedicated to delivering innovative solutions and exceptional results for our clients.
          </motion.p>
        </div>
        
        <div className="row justify-content-center g-3 g-md-4">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
