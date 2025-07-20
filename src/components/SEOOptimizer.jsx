import { useEffect } from 'react'

const SEOOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS if not already loaded
      const criticalCSS = document.createElement('link')
      criticalCSS.rel = 'preload'
      criticalCSS.as = 'style'
      criticalCSS.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
      document.head.appendChild(criticalCSS)
    }

    // Add structured data for breadcrumbs
    const addBreadcrumbSchema = () => {
      const breadcrumbScript = document.createElement('script')
      breadcrumbScript.type = 'application/ld+json'
      breadcrumbScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntaxsnipers.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://syntaxsnipers.com/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Services",
            "item": "https://syntaxsnipers.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact",
            "item": "https://syntaxsnipers.com/#contact"
          }
        ]
      })
      document.head.appendChild(breadcrumbScript)
    }

    // Performance optimization: Defer non-critical operations
    const deferNonCritical = () => {
      // Add Google Analytics if needed
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: 'SyntaxSnipers - Professional Software Development',
          page_location: window.location.href
        })
      }

      // Add viewport meta for mobile optimization
      let viewport = document.querySelector('meta[name="viewport"]')
      if (!viewport) {
        viewport = document.createElement('meta')
        viewport.name = 'viewport'
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
        document.head.appendChild(viewport)
      }
    }

    // Performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          // Get performance metrics
          const perfData = performance.getEntriesByType('navigation')[0]
          if (perfData) {
            console.log('Page Load Performance:', {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalTime: perfData.loadEventEnd - perfData.fetchStart
            })
          }
        })
      }
    }

    // Execute optimizations
    preloadCriticalResources()
    setTimeout(() => {
      addBreadcrumbSchema()
      deferNonCritical()
      monitorPerformance()
    }, 100)

    // Cleanup function
    return () => {
      // Remove event listeners if needed
    }
  }, [])

  return null // This component doesn't render anything
}

export default SEOOptimizer
