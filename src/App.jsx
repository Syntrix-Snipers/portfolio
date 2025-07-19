import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from './contexts/ThemeContext'
import { TranslationProvider } from './contexts/TranslationContext'
import HomePage from './pages/HomePage'
import StarlinkNavbar from './components/StarlinkNavbar'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './ModernGlass.css'

function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <Helmet>
          <html lang="en" />
          <title>SyntaxSnipers - Precision Code. Infinite Possibilities.</title>
          <meta name="description" content="SyntaxSnipers delivers cutting-edge software solutions for businesses worldwide. We craft next-generation applications that propel your business beyond the ordinary." />
          <meta name="keywords" content="software development, web development, mobile apps, enterprise solutions, React, JavaScript, technology consulting, modern design, glass morphism" />
          <meta name="author" content="SyntaxSnipers" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://syntaxsnipers.com/" />
          <meta property="og:title" content="SyntaxSnipers - Precision Code. Infinite Possibilities." />
          <meta property="og:description" content="SyntaxSnipers delivers cutting-edge software solutions for businesses worldwide. We craft next-generation applications that propel your business beyond the ordinary." />
          <meta property="og:site_name" content="SyntaxSnipers" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://syntaxsnipers.com/" />
          <meta property="twitter:title" content="SyntaxSnipers - Precision Code. Infinite Possibilities." />
          <meta property="twitter:description" content="SyntaxSnipers delivers cutting-edge software solutions for businesses worldwide." />
          
          {/* Additional SEO */}
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://syntaxsnipers.com/" />
          
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          
          {/* Google Translate Integration */}
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
          <script type="text/javascript">{`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es,fr,de,it,pt,ru,ja,ko,zh-CN,ar',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}</script>
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SyntaxSnipers",
              "url": "https://syntaxsnipers.com",
              "logo": "https://syntaxsnipers.com/logo.png",
              "description": "SyntaxSnipers delivers cutting-edge software solutions for businesses worldwide.",
              "foundingDate": "2020",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1 (555) 123-4567",
                "contactType": "customer service",
                "email": "info@syntaxsnipers.com"
              },
              "sameAs": [
                "https://linkedin.com/company/syntaxsnipers",
                "https://github.com/syntaxsnipers",
                "https://twitter.com/syntaxsnipers"
              ]
            })}
          </script>
        </Helmet>
        
        <ParticleBackground />
        <ScrollProgress />
        <StarlinkNavbar />
        <main>
          <HomePage />
        </main>
        
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
      </TranslationProvider>
    </ThemeProvider>
  )
}

export default App
