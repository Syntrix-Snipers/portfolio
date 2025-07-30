import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from './contexts/ThemeContext'
import { TranslationProvider } from './contexts/TranslationContext'
import HomePage from './pages/HomePage'
import StarlinkNavbar from './components/StarlinkNavbar'
import StarlinkFooter from './components/StarlinkFooter'
import ScrollProgress from './components/ScrollProgress'
import SEOOptimizer from './components/SEOOptimizer'
import { company } from './data/syntrix'

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './ModernGlass.css'
import './styles/ImageOptimization.css'

function App() {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <Helmet>
          <html lang="en" />
          <title>{company.name} - {company.tagline} | Professional Software Development</title>
          <meta name="description" content={`${company.name} delivers cutting-edge software solutions for businesses worldwide. Expert web development, mobile apps, enterprise systems, and cloud architecture. Transform your digital vision into reality.`} />
          <meta name="keywords" content="software development, web development, mobile apps, enterprise solutions, React, JavaScript, TypeScript, Node.js, cloud architecture, technology consulting, modern design, glass morphism" />
          <meta name="author" content={company.name} />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <link rel="canonical" href={`https://${company.name.toLowerCase()}.com/`} />
          
          {/* Viewport and Mobile Optimization */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          <meta name="theme-color" content="#2563eb" />
          <meta name="color-scheme" content="light dark" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://${company.name.toLowerCase()}.com/`} />
          <meta property="og:title" content={`${company.name} - ${company.tagline}`} />
          <meta property="og:description" content={company.description} />
          <meta property="og:image" content={`https://${company.name.toLowerCase()}.com/og-image.jpg`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={`${company.name} - Professional Software Development Company`} />
          <meta property="og:site_name" content={company.name} />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter / X */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={`https://${company.name.toLowerCase()}.com/`} />
          <meta name="twitter:title" content={`${company.name} - ${company.tagline}`} />
          <meta name="twitter:description" content={company.description} />
          <meta name="twitter:image" content={`https://${company.name.toLowerCase()}.com/twitter-card.jpg`} />
          <meta name="twitter:image:alt" content={`${company.name} Logo and Services`} />
          
          {/* App Meta Tags */}
          <meta name="application-name" content={company.name} />
          <meta name="apple-mobile-web-app-title" content={company.name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2563eb" />
          
          {/* Performance Optimization */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          
          {/* Optimized Google Fonts */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            {`<link 
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
              rel="stylesheet"
            />`}
          </noscript>
          
          {/* Favicon */}
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Security Headers */}
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="DENY" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": company.name,
              "url": `https://${company.name.toLowerCase()}.com`,
              "logo": {
                "@type": "ImageObject",
                "url": `https://${company.name.toLowerCase()}.com/logo.png`,
                "width": 200,
                "height": 60
              },
              "description": company.description,
              "foundingDate": company.founded,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": company.phone,
                "contactType": "customer service",
                "email": company.email,
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": company.location
              },
              "sameAs": [
                company.social.linkedin,
                company.social.github,
                company.social.twitter
              ]
            })}
          </script>
        </Helmet>
        
        <SEOOptimizer />
        <ScrollProgress />
        <StarlinkNavbar />
        <main>
          <HomePage />
        </main>
        <StarlinkFooter/>
      </TranslationProvider>
    </ThemeProvider>
  )
}

export default App
