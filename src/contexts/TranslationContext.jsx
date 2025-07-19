import React, { createContext, useContext, useState, useEffect } from 'react'

const TranslationContext = createContext()

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.mission': 'Mission',
    'nav.capabilities': 'Capabilities',
    'nav.launch': 'Launch',
    
    // Hero Section
    'hero.title.line1': 'Precision Code.',
    'hero.title.line2': 'Infinite Possibilities.',
    'hero.subtitle': 'We craft next-generation software solutions that propel your business beyond the ordinary.',
    'hero.cta.primary': 'Start Your Mission',
    'hero.cta.secondary': 'Explore Solutions',
    
    // About Section
    'about.title.line1': 'Engineered for',
    'about.title.line2': 'Excellence',
    'about.description.1': 'At SyntaxSnipers, we don\'t just write code — we architect the future. Our precision-crafted solutions power the next generation of digital experiences.',
    'about.description.2': 'From cutting-edge web applications to enterprise-scale systems, we deliver software that performs beyond expectations.',
    'about.stats.projects': 'Projects Launched',
    'about.stats.satisfaction': 'Client Satisfaction',
    'about.stats.engineers': 'Expert Engineers',
    
    // Services Section
    'services.title': 'Our Capabilities',
    'services.subtitle': 'Comprehensive solutions for every digital challenge',
    'services.web.title': 'Web Development',
    'services.web.description': 'Cutting-edge web applications built with modern frameworks and technologies.',
    'services.mobile.title': 'Mobile Solutions',
    'services.mobile.description': 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    'services.enterprise.title': 'Enterprise Systems',
    'services.enterprise.description': 'Scalable enterprise solutions designed to handle complex business requirements.',
    'services.cloud.title': 'Cloud Architecture',
    'services.cloud.description': 'Robust cloud infrastructure and deployment strategies for maximum reliability.',
    
    // Contact Section
    'contact.title.line1': 'Ready to Launch Your',
    'contact.title.line2': 'Next Project?',
    'contact.description': 'Let\'s discuss how we can transform your vision into reality. Our team is ready to engineer your success.',
    'contact.cta.primary': 'Start Collaboration',
    'contact.cta.secondary': 'Schedule Consultation',
    'contact.info.email': 'info@syntaxsnipers.com',
    'contact.info.phone': '+1 (555) 123-4567',
    'contact.info.location': 'Global Remote Team'
  },
  es: {
    // Navigation
    'nav.mission': 'Misión',
    'nav.capabilities': 'Capacidades',
    'nav.launch': 'Lanzar',
    
    // Hero Section
    'hero.title.line1': 'Código Preciso.',
    'hero.title.line2': 'Posibilidades Infinitas.',
    'hero.subtitle': 'Creamos soluciones de software de próxima generación que impulsan tu negocio más allá de lo ordinario.',
    'hero.cta.primary': 'Inicia Tu Misión',
    'hero.cta.secondary': 'Explorar Soluciones',
    
    // About Section
    'about.title.line1': 'Diseñado para la',
    'about.title.line2': 'Excelencia',
    'about.description.1': 'En SyntaxSnipers, no solo escribimos código — arquitectamos el futuro. Nuestras soluciones de precisión impulsan la próxima generación de experiencias digitales.',
    'about.description.2': 'Desde aplicaciones web de vanguardia hasta sistemas empresariales, entregamos software que supera las expectativas.',
    'about.stats.projects': 'Proyectos Lanzados',
    'about.stats.satisfaction': 'Satisfacción del Cliente',
    'about.stats.engineers': 'Ingenieros Expertos',
    
    // Services Section
    'services.title': 'Nuestras Capacidades',
    'services.subtitle': 'Soluciones integrales para cada desafío digital',
    'services.web.title': 'Desarrollo Web',
    'services.web.description': 'Aplicaciones web de vanguardia construidas con frameworks y tecnologías modernas.',
    'services.mobile.title': 'Soluciones Móviles',
    'services.mobile.description': 'Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales.',
    'services.enterprise.title': 'Sistemas Empresariales',
    'services.enterprise.description': 'Soluciones empresariales escalables diseñadas para manejar requisitos comerciales complejos.',
    'services.cloud.title': 'Arquitectura en la Nube',
    'services.cloud.description': 'Infraestructura en la nube robusta y estrategias de implementación para máxima confiabilidad.',
    
    // Contact Section
    'contact.title.line1': '¿Listo para Lanzar tu',
    'contact.title.line2': 'Próximo Proyecto?',
    'contact.description': 'Hablemos sobre cómo podemos transformar tu visión en realidad. Nuestro equipo está listo para diseñar tu éxito.',
    'contact.cta.primary': 'Iniciar Colaboración',
    'contact.cta.secondary': 'Programar Consulta',
    'contact.info.email': 'info@syntaxsnipers.com',
    'contact.info.phone': '+1 (555) 123-4567',
    'contact.info.location': 'Equipo Remoto Global'
  }
}

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || 'en'
  })

  // Change language
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    
    // Update HTML lang attribute
    document.documentElement.lang = newLanguage
  }

  // Translation function
  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  // Get available languages
  const getAvailableLanguages = () => {
    return Object.keys(translations).map(code => ({
      code,
      name: code === 'en' ? 'English' : 'Español'
    }))
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = {
    language,
    changeLanguage,
    t,
    getAvailableLanguages,
    isEnglish: language === 'en',
    isSpanish: language === 'es'
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}
