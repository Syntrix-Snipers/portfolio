import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from './contexts/ThemeContext'
import { TranslationProvider } from './contexts/TranslationContext'
import HomePage from './pages/HomePage'
import StarlinkNavbar from './components/StarlinkNavbar'
import ScrollProgress from './components/ScrollProgress'
import SEOOptimizer from './components/SEOOptimizer'

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
          <title>SyntaxSnipers - Precision Code. Infinite Possibilities. | Professional Software Development</title>
          <meta name="description" content="SyntaxSnipers delivers cutting-edge software solutions for businesses worldwide. Expert web development, mobile apps, enterprise systems, and cloud architecture. Transform your digital vision into reality." />
          <meta name="keywords" content="software development, web development, mobile apps, enterprise solutions, React, JavaScript, TypeScript, Node.js, cloud architecture, technology consulting, modern design, glass morphism, Sri Lanka, global remote team" />
          <meta name="author" content="SyntaxSnipers" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
          <link rel="canonical" href="https://syntaxsnipers.com/" />
          
          {/* Viewport and Mobile Optimization */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          <meta name="theme-color" content="#000000" />
          <meta name="color-scheme" content="light dark" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://syntaxsnipers.com/" />
          <meta property="og:title" content="SyntaxSnipers - Precision Code. Infinite Possibilities." />
          <meta property="og:description" content="Professional software development company delivering cutting-edge web applications, mobile solutions, and enterprise systems. Expert team with global reach." />
          <meta property="og:image" content="https://syntaxsnipers.com/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="SyntaxSnipers - Professional Software Development Company" />
          <meta property="og:site_name" content="SyntaxSnipers" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter / X */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@syntaxsnipers" />
          <meta name="twitter:creator" content="@syntaxsnipers" />
          <meta name="twitter:url" content="https://syntaxsnipers.com/" />
          <meta name="twitter:title" content="SyntaxSnipers - Precision Code. Infinite Possibilities." />
          <meta name="twitter:description" content="Professional software development company delivering cutting-edge solutions worldwide." />
          <meta name="twitter:image" content="https://syntaxsnipers.com/twitter-card.jpg" />
          <meta name="twitter:image:alt" content="SyntaxSnipers Logo and Services" />
          
          {/* Additional SEO Meta Tags */}
          <meta name="application-name" content="SyntaxSnipers" />
          <meta name="apple-mobile-web-app-title" content="SyntaxSnipers" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preconnect" href="https://translate.google.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          
          {/* DNS prefetch for better performance */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          <link rel="dns-prefetch" href="//translate.google.com" />
          
          {/* Optimized Google Fonts loading */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>{`
            <link 
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
              rel="stylesheet"
            />
          `}</noscript>
          
          {/* Favicon and App Icons */}
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          
          {/* Performance and Security Headers */}
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="DENY" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          
          {/* Google Translate Integration - Optimized */}
          <script type="text/javascript">{`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,si,es,fr,de,it,pt,ru,ja,ko,zh-CN,ar,hi,ta',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true
              }, 'google_translate_element');
            }
            
            // Load Google Translate script asynchronously
            (function() {
              var gt = document.createElement('script');
              gt.type = 'text/javascript';
              gt.async = true;
              gt.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(gt, s);
            })();
          `}</script>
          
          {/* Enhanced Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SyntaxSnipers",
              "alternateName": "Syntax Snipers",
              "url": "https://syntaxsnipers.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://syntaxsnipers.com/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Professional software development company delivering cutting-edge web applications, mobile solutions, and enterprise systems with global expertise.",
              "foundingDate": "2020",
              "numberOfEmployees": "10-50",
              "areaServed": "Worldwide",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 7.8731,
                  "longitude": 80.7718
                },
                "geoRadius": "20000000"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1 (555) 123-4567",
                  "contactType": "customer service",
                  "email": "info@syntaxsnipers.com",
                  "availableLanguage": ["English", "Sinhala", "Spanish"]
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "email": "support@syntaxsnipers.com",
                  "availableLanguage": ["English", "Sinhala"]
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK",
                "addressLocality": "Global Remote Team"
              },
              "sameAs": [
                "https://linkedin.com/company/syntax-dipers",
                "https://github.com/Syntax-Dipers",
                "https://twitter.com/syntaxsnipers"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Cutting-edge web applications built with modern frameworks"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile Development",
                      "description": "Native and cross-platform mobile applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enterprise Solutions",
                      "description": "Scalable enterprise systems for complex business requirements"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud Architecture",
                      "description": "Robust cloud infrastructure and deployment strategies"
                    }
                  }
                ]
              }
            })}
          </script>
          
          {/* WebSite Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SyntaxSnipers",
              "url": "https://syntaxsnipers.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://syntaxsnipers.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SyntaxSnipers"
              }
            })}
          </script>
        </Helmet>
        
        <SEOOptimizer />
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
