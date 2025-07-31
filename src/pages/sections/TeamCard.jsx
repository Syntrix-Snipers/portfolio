import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../components/OptimizedImage';

const TeamCard = ({ member, index, inView }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="col-12 col-sm-10 col-md-6 col-lg-3 mb-4 d-flex align-items-stretch"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <motion.div
        className="team-card glass-card text-center p-3 p-md-4 w-100 d-flex flex-column align-items-center"
        style={{ minHeight: 180, boxShadow: '0 2px 16px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'min-height 0.3s' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.05, minHeight: 420 }}
      >
        <h4 className="team-name fw-bold mt-2 mb-1" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)' }}>{member.name}</h4>
        <p className="team-position text-primary fw-semibold mb-1" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>{member.position}</p>
        <p className="team-bio mb-2 mb-md-3" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2vw, 1.08rem)' }}>
          {member.bio}
        </p>
        {/* Expanded content on hover */}
        <div
          style={{
            maxHeight: hovered ? 500 : 0,
            opacity: hovered ? 1 : 0,
            transition: 'max-height 0.4s cubic-bezier(.4,2,.6,1), opacity 0.3s',
            overflow: 'hidden',
            width: '100%'
          }}
        >
          <OptimizedImage
            src={member.image}
            alt={member.name}
            className="team-photo rounded-circle mb-3 mx-auto d-block"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              border: '3px solid var(--bs-primary)',
              maxWidth: '30vw',
              minWidth: 70
            }}
            lazy={true}
          />
          <div className="team-skills mb-2 mb-md-3 d-flex flex-wrap justify-content-center">
            {member.skills.map((skill, idx) => (
              <span key={idx} className="badge bg-secondary me-1 mb-1" style={{ fontSize: '0.85em' }}>
                {skill}
              </span>
            ))}
          </div>
          <div className="team-social mt-auto">
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
        </div>
      </motion.div>
    </div>
  );
};

export default TeamCard;
