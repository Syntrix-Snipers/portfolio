
import React from "react";
import { company, navigation, getLogo } from '../data/syntrix'
import { useTheme } from '../contexts/ThemeContext'

export default function StarlinkFooter() {
  const { theme } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer
      className="glass-footer pt-5 pb-3 mt-5"
      style={{
        background: theme === 'dark'
          ? 'rgba(20,24,32,0.85)'
          : 'rgba(255,255,255,0.85)',
        color: theme === 'dark' ? '#e5e7eb' : '#222',
        borderTop: '1px solid rgba(120,120,120,0.12)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        boxShadow: '0 -4px 32px 0 rgba(0,0,0,0.08)',
        zIndex: 10,
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Brand and Social */}
          <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
              <img
                src={getLogo(theme)}
                alt={navigation.brand.logo.alt}
                height={navigation.brand.logo.height}
                className="mb-2"
                style={{ filter: theme === 'dark' ? 'none' : 'invert(0.1)' }}
              />
              <div className="fw-bold" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>{company.name}</div>
              <div className="small text-secondary" style={{ maxWidth: 220 }}>{company.tagline}</div>
              <div className="d-flex gap-2 mt-2">
                {company.social && Object.entries(company.social).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={key}
                  >
                    <i className={`bi bi-${key.replace('facebook','facebook').replace('linkedin','linkedin').replace('github','github').replace('twitter','twitter')}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <nav className="footer-nav d-flex flex-wrap justify-content-center gap-2 gap-md-3">
              {navigation.menuItems.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className="footer-link px-2 px-md-3"
                  style={{ fontWeight: 500, fontSize: '1rem', letterSpacing: '0.5px' }}
                  onClick={e => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault()
                      const el = document.getElementById(link.targetSection)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Legal */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="mb-2">
              <a href={`mailto:${company.email}`} className="footer-link" style={{ fontWeight: 500 }}>
                {company.email}
              </a>
            </div>
            <div className="small text-secondary">
              &copy; {year} {company.name}. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .glass-footer {
          border-radius: 0 0 24px 24px;
        }
        .footer-link {
          color: inherit;
          opacity: 0.8;
          text-decoration: none;
          transition: color 0.2s, opacity 0.2s, text-shadow 0.2s;
        }
        .footer-link:hover {
          color: var(--accent-primary, #2563eb);
          opacity: 1;
          text-shadow: 0 2px 8px rgba(37,99,235,0.12);
        }
        .footer-social-link {
          color: inherit;
          font-size: 1.3rem;
          opacity: 0.7;
          margin-right: 0.5rem;
          transition: color 0.2s, opacity 0.2s, transform 0.2s;
        }
        .footer-social-link:hover {
          color: var(--accent-primary, #2563eb);
          opacity: 1;
          transform: scale(1.15) translateY(-2px);
        }
        @media (max-width: 767px) {
          .glass-footer {
            border-radius: 0;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .footer-link {
            font-size: 0.98rem;
            padding: 0.2rem 0.5rem;
          }
        }
      `}</style>
    </footer>
  )
}