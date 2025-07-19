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
  si: {
    // Navigation
    'nav.mission': 'අරමුණ',
    'nav.capabilities': 'හැකියාවන්',
    'nav.launch': 'ආරම්භ කරන්න',
    
    // Hero Section
    'hero.title.line1': 'නිරවද්‍ය Code.',
    'hero.title.line2': 'අසීමිත Possibilities.',
    'hero.subtitle': 'අපි ඔබේ business එක සාමාන්‍ය මට්ටමින් ඔබ්බට ගෙන යන next-generation software solutions නිර්මාණය කරමු.',
    'hero.cta.primary': 'ඔබේ Mission ආරම්භ කරන්න',
    'hero.cta.secondary': 'Solutions ගවේෂණය කරන්න',
    
    // About Section
    'about.title.line1': 'Excellence සඳහා',
    'about.title.line2': 'නිර්මාණය කළ',
    'about.description.1': 'SyntaxSnipers හි අපි code ලිවන එක විතරක් නෙවෙයි — අපි future එක architect කරනවා. අපේ precision-crafted solutions නිසා next generation digital experiences වලට power කරනවා.',
    'about.description.2': 'Cutting-edge web applications වල සිට enterprise-scale systems වලට, අපි expectations ඔබ්බට ගෙන යන software deliver කරනවා.',
    'about.stats.projects': 'Launch කළ Projects',
    'about.stats.satisfaction': 'Client Satisfaction',
    'about.stats.engineers': 'Expert Engineers ලා',
    
    // Services Section
    'services.title': 'අපේ හැකියාවන්',
    'services.subtitle': 'සෑම digital challenge එකකටම comprehensive solutions',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern frameworks සහ technologies සමඟ නිර්මාණය කළ cutting-edge web applications.',
    'services.mobile.title': 'Mobile Solutions',
    'services.mobile.description': 'Exceptional user experiences ලබා දෙන native සහ cross-platform mobile apps.',
    'services.enterprise.title': 'Enterprise Systems',
    'services.enterprise.description': 'Complex business requirements handle කරන්න design කළ scalable enterprise solutions.',
    'services.cloud.title': 'Cloud Architecture',
    'services.cloud.description': 'Maximum reliability සඳහා robust cloud infrastructure සහ deployment strategies.',
    
    // Contact Section
    'contact.title.line1': 'ඔබේ Next Project එක',
    'contact.title.line2': 'Launch කරන්න Ready ද?',
    'contact.description': 'ඔබේ vision එක reality එකක් බවට transform කරන්නේ කොහොමද කියලා discuss කරමු. අපේ team ඔබේ success engineer කරන්න ready.',
    'contact.cta.primary': 'Collaboration ආරම්භ කරන්න',
    'contact.cta.secondary': 'Consultation Schedule කරන්න',
    'contact.info.email': 'info@syntaxsnipers.com',
    'contact.info.phone': '+1 (555) 123-4567',
    'contact.info.location': 'Global Remote Team'
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
      name: code === 'en' ? 'English' : 'සිංහල'
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
    isSinhala: language === 'si'
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}
