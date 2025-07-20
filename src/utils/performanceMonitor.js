import React from 'react'

// Performance monitoring utilities
export class PerformanceMonitor {
  constructor() {
    this.metrics = {}
    this.observers = []
    this.init()
  }

  init() {
    // Core Web Vitals monitoring
    this.observeLCP()
    this.observeFID()
    this.observeCLS()
    this.observeFCP()
    this.observeTTFB()
  }

  // Largest Contentful Paint
  observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime
        this.logMetric('LCP', lastEntry.startTime)
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    }
  }

  // First Input Delay
  observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          this.metrics.fid = entry.processingStart - entry.startTime
          this.logMetric('FID', entry.processingStart - entry.startTime)
        })
      })
      
      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    }
  }

  // Cumulative Layout Shift
  observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        this.metrics.cls = clsValue
        this.logMetric('CLS', clsValue)
      })
      
      observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    }
  }

  // First Contentful Paint
  observeFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime
            this.logMetric('FCP', entry.startTime)
          }
        })
      })
      
      observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    }
  }

  // Time to First Byte
  observeTTFB() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        const navEntries = performance.getEntriesByType('navigation')
        if (navEntries.length > 0) {
          const ttfb = navEntries[0].responseStart - navEntries[0].requestStart
          this.metrics.ttfb = ttfb
          this.logMetric('TTFB', ttfb)
        }
      })
    }
  }

  // Log performance metrics
  logMetric(name, value) {
    const threshold = this.getThreshold(name)
    const status = value <= threshold.good ? 'good' : 
                   value <= threshold.needs_improvement ? 'needs improvement' : 'poor'
    
    console.log(`📊 ${name}: ${Math.round(value)}ms (${status})`)
    
    // You can send this data to analytics services
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_rating: status
      })
    }
  }

  // Core Web Vitals thresholds
  getThreshold(metric) {
    const thresholds = {
      LCP: { good: 2500, needs_improvement: 4000 },
      FID: { good: 100, needs_improvement: 300 },
      CLS: { good: 0.1, needs_improvement: 0.25 },
      FCP: { good: 1800, needs_improvement: 3000 },
      TTFB: { good: 800, needs_improvement: 1800 }
    }
    return thresholds[metric] || { good: 1000, needs_improvement: 2000 }
  }

  // Get all metrics
  getMetrics() {
    return { ...this.metrics }
  }

  // Memory usage monitoring
  monitorMemory() {
    if ('memory' in performance) {
      const memory = performance.memory
      console.log('🧠 Memory Usage:', {
        used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
        total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
        limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
      })
    }
  }

  // Resource timing analysis
  analyzeResources() {
    const resources = performance.getEntriesByType('resource')
    const analysis = {
      total: resources.length,
      slow: resources.filter(r => r.duration > 1000).length,
      scripts: resources.filter(r => r.initiatorType === 'script').length,
      stylesheets: resources.filter(r => r.initiatorType === 'css').length,
      images: resources.filter(r => r.initiatorType === 'img').length
    }
    
    console.log('📦 Resource Analysis:', analysis)
    return analysis
  }

  // Cleanup observers
  disconnect() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = (enabled = true) => {
  const [metrics, setMetrics] = React.useState({})
  const monitorRef = React.useRef(null)

  React.useEffect(() => {
    if (enabled && typeof window !== 'undefined') {
      monitorRef.current = new PerformanceMonitor()
      
      // Update metrics periodically
      const interval = setInterval(() => {
        setMetrics(monitorRef.current.getMetrics())
      }, 5000)

      return () => {
        clearInterval(interval)
        if (monitorRef.current) {
          monitorRef.current.disconnect()
        }
      }
    }
  }, [enabled])

  return {
    metrics,
    monitor: monitorRef.current,
    analyzeResources: () => monitorRef.current?.analyzeResources(),
    monitorMemory: () => monitorRef.current?.monitorMemory()
  }
}

// Utility for measuring component render performance
export const measureRender = (componentName) => {
  const start = performance.now()
  
  return () => {
    const end = performance.now()
    const duration = end - start
    console.log(`⚡ ${componentName} render: ${Math.round(duration)}ms`)
    return duration
  }
}

// Bundle size analysis
export const analyzeBundleSize = () => {
  if ('getEntriesByType' in performance) {
    const navigation = performance.getEntriesByType('navigation')[0]
    const resources = performance.getEntriesByType('resource')
    
    const jsSize = resources
      .filter(r => r.name.includes('.js'))
      .reduce((sum, r) => sum + (r.transferSize || 0), 0)
      
    const cssSize = resources
      .filter(r => r.name.includes('.css'))
      .reduce((sum, r) => sum + (r.transferSize || 0), 0)
    
    console.log('📦 Bundle Analysis:', {
      totalLoadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      jsSize: `${Math.round(jsSize / 1024)}KB`,
      cssSize: `${Math.round(cssSize / 1024)}KB`,
      totalSize: `${Math.round((jsSize + cssSize) / 1024)}KB`
    })
  }
}
