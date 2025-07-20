import React, { useState, useRef, useEffect } from 'react'
import '../styles/ImageOptimization.css'

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  lazy = true, 
  critical = false,
  placeholder = null,
  onLoad = null,
  onError = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
  const imgRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (lazy && !critical && imgRef.current) {
      // Intersection Observer for lazy loading
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          if (entry.isIntersecting) {
            setIsInView(true)
            observerRef.current.disconnect()
          }
        },
        {
          rootMargin: '50px', // Start loading 50px before coming into view
          threshold: 0.1
        }
      )

      observerRef.current.observe(imgRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [lazy, critical])

  // WebP support detection
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return ''
    
    // Check if browser supports WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      return canvas.toDataURL('image/webp').indexOf('image/webp') === 5
    }

    // If source already includes WebP or is SVG, return as is
    if (originalSrc.includes('.webp') || originalSrc.includes('.svg')) {
      return originalSrc
    }

    // For other formats, try to get WebP version if supported
    if (supportsWebP()) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    }

    return originalSrc
  }

  const handleLoad = (e) => {
    setIsLoaded(true)
    if (onLoad) onLoad(e)
  }

  const handleError = (e) => {
    setIsError(true)
    if (onError) onError(e)
    
    // Fallback to original format if WebP fails
    if (e.target.src.includes('.webp')) {
      e.target.src = src
    }
  }

  const imageClasses = [
    'optimized-image',
    lazy ? 'lazy-image' : '',
    critical ? 'critical-image' : 'non-critical-image',
    isLoaded ? 'loaded' : '',
    isError ? 'error' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <div 
      ref={imgRef}
      className={`image-container ${isLoaded ? 'loaded' : 'loading'}`}
    >
      {isInView && (
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          className={imageClasses}
          loading={lazy && !critical ? 'lazy' : 'eager'}
          fetchPriority={critical ? 'high' : 'low'}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
      
      {!isLoaded && placeholder && (
        <div className="image-placeholder">
          {placeholder}
        </div>
      )}
    </div>
  )
}

// Hook for checking WebP support
export const useWebPSupport = () => {
  const [supportsWebP, setSupportsWebP] = useState(null)

  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      const webpData = canvas.toDataURL('image/webp')
      setSupportsWebP(webpData.indexOf('image/webp') === 5)
    }

    checkWebPSupport()
  }, [])

  return supportsWebP
}

// Hook for preloading critical images
export const useImagePreloader = (imageSources = []) => {
  useEffect(() => {
    const preloadImages = imageSources.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })

    Promise.allSettled(preloadImages).then(results => {
      const loaded = results.filter(result => result.status === 'fulfilled').length
      console.log(`Preloaded ${loaded}/${imageSources.length} images`)
    })
  }, [imageSources])
}

export default OptimizedImage
