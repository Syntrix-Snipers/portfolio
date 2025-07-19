import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useTheme } from '../contexts/ThemeContext'

// Particle class moved outside component to avoid recreation
class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.z = Math.random() * 1000 + 1
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.vz = (Math.random() - 0.5) * 2
    this.size = Math.random() * 3 + 1
    this.life = 1
    this.decay = Math.random() * 0.005 + 0.001
    this.connectionDistance = 120
    this.opacity = Math.random() * 0.8 + 0.2
  }

  update(mouseX, mouseY) {
    // Mouse interaction
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 150) {
      const force = (150 - distance) / 150
      this.vx += (dx / distance) * force * 0.01
      this.vy += (dy / distance) * force * 0.01
    }

    // 3D movement simulation
    this.x += this.vx
    this.y += this.vy
    this.z += this.vz

    // Perspective effect
    const perspective = 500
    const scale = perspective / (perspective + this.z)
    this.screenX = this.x * scale
    this.screenY = this.y * scale
    this.screenSize = this.size * scale

    // Reset particles that go off screen or too far
    if (this.x < 0 || this.x > this.canvas.width || 
        this.y < 0 || this.y > this.canvas.height || 
        this.z > 1000 || this.z < 1) {
      this.reset()
    }

    // Life cycle
    this.life -= this.decay
    if (this.life <= 0) {
      this.reset()
      this.life = 1
    }
  }

  draw(ctx, theme) {
    const alpha = this.opacity * this.life
    const color = theme === 'dark' 
      ? `rgba(255, 255, 255, ${alpha})` 
      : `rgba(0, 0, 0, ${alpha * 0.6})`

    // Draw particle with glow effect
    ctx.save()
    ctx.globalAlpha = alpha
    ctx.fillStyle = color
    ctx.shadowBlur = 10
    ctx.shadowColor = color
    ctx.beginPath()
    ctx.arc(this.screenX, this.screenY, this.screenSize, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  drawConnection(ctx, other, theme) {
    const dx = this.screenX - other.screenX
    const dy = this.screenY - other.screenY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < this.connectionDistance) {
      const alpha = (1 - distance / this.connectionDistance) * 0.3 * this.life * other.life
      const color = theme === 'dark' 
        ? `rgba(255, 255, 255, ${alpha})` 
        : `rgba(0, 0, 0, ${alpha * 0.4})`

      ctx.save()
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.globalAlpha = alpha
      ctx.beginPath()
      ctx.moveTo(this.screenX, this.screenY)
      ctx.lineTo(other.screenX, other.screenY)
      ctx.stroke()
      ctx.restore()
    }
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()
  const particlesRef = useRef([])
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const animationFrameRef = useRef()
  const [isInitialized, setIsInitialized] = useState(false)

  // Memoize device capabilities
  const deviceConfig = useMemo(() => {
    if (typeof window === 'undefined') return { particleCount: 50, objectCount: 3, targetFPS: 30, isMobile: true }
    
    const isMobile = window.innerWidth < 768
    const isLowEnd = window.navigator.hardwareConcurrency <= 4
    let particleCount = 80
    
    if (isMobile) particleCount = 30
    if (isLowEnd) particleCount = Math.min(particleCount, 40)
    if (window.innerWidth < 400) particleCount = 20

    return {
      isMobile,
      isLowEnd,
      particleCount,
      objectCount: isMobile ? 3 : 6,
      targetFPS: isMobile ? 30 : 60
    }
  }, [])

  // CSS-only Floating 3D objects component
  const FloatingObject = React.memo(({ delay, type, isDark, index }) => {
    const style = {
      position: 'absolute',
      width: type === 'cube' ? '40px' : '30px',
      height: type === 'cube' ? '40px' : '30px',
      left: `${(index * 15 + 10) % 90 + 5}%`,
      top: `${(index * 20 + 15) % 70 + 15}%`,
      pointerEvents: 'none',
      zIndex: 1,
      animation: `float-${index} ${8 + (index % 3) * 2}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }

    const contentStyle = {
      width: '100%',
      height: '100%',
      background: type === 'cube' 
        ? (isDark 
            ? 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
            : 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.05))')
        : (isDark 
            ? 'radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0.05))'
            : 'radial-gradient(circle, rgba(0,0,0,0.15), rgba(0,0,0,0.05))'),
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
      borderRadius: type === 'cube' ? '8px' : '50%',
      backdropFilter: 'blur(10px)',
      boxShadow: isDark 
        ? '0 8px 32px rgba(255,255,255,0.1)'
        : '0 8px 32px rgba(0,0,0,0.1)',
    }

    return (
      <div style={style}>
        <div style={contentStyle} />
      </div>
    )
  })

  // Initialize particles
  const initializeParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    particlesRef.current = []
    for (let i = 0; i < deviceConfig.particleCount; i++) {
      particlesRef.current.push(new Particle(canvas))
    }
    setIsInitialized(true)
  }, [deviceConfig.particleCount])

  // Handle mouse movement with throttling
  const handleMouseMove = useCallback((event) => {
    setMouse({
      x: event.clientX,
      y: event.clientY
    })
  }, [])

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Reset particles for new canvas size
    particlesRef.current.forEach(particle => particle.reset())
  }, [])

  // Initialize particles on mount
  useEffect(() => {
    initializeParticles()
    
    const handleResizeThrottled = () => {
      clearTimeout(handleResize.timeout)
      handleResize.timeout = setTimeout(handleResize, 250)
    }

    window.addEventListener('resize', handleResizeThrottled)
    
    // Only add mouse interaction on non-touch devices for performance
    if (!('ontouchstart' in window)) {
      let mouseThrottle
      const throttledMouseMove = (event) => {
        if (mouseThrottle) return
        mouseThrottle = setTimeout(() => {
          handleMouseMove(event)
          mouseThrottle = null
        }, 16)
      }
      window.addEventListener('mousemove', throttledMouseMove)
      
      return () => {
        window.removeEventListener('resize', handleResizeThrottled)
        window.removeEventListener('mousemove', throttledMouseMove)
      }
    }

    return () => {
      window.removeEventListener('resize', handleResizeThrottled)
    }
  }, [initializeParticles, handleResize, handleMouseMove])

  // Animation loop
  useEffect(() => {
    if (!isInitialized) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let lastTime = 0
    const frameInterval = 1000 / deviceConfig.targetFPS
    
    const animate = (currentTime) => {
      if (currentTime - lastTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }
      
      lastTime = currentTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update(mouse.x, mouse.y)
        particle.draw(ctx, isDark ? 'dark' : 'light')
      })

      // Draw connections between nearby particles (reduce on mobile)
      const maxConnections = deviceConfig.isMobile ? 3 : 5
      for (let i = 0; i < particlesRef.current.length; i++) {
        let connections = 0
        for (let j = i + 1; j < particlesRef.current.length && connections < maxConnections; j++) {
          particlesRef.current[i].drawConnection(ctx, particlesRef.current[j], isDark ? 'dark' : 'light')
          connections++
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isInitialized, mouse, isDark, deviceConfig])

  return (
    <>
      {/* CSS animations for floating objects */}
      <style>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); }
          50% { transform: translateY(-30px) rotateX(180deg) rotateY(90deg) scale(1.1); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateZ(0deg) scale(1); }
          50% { transform: translateY(-25px) rotateX(90deg) rotateZ(180deg) scale(1.05); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotateY(0deg) rotateZ(0deg) scale(1); }
          50% { transform: translateY(-35px) rotateY(180deg) rotateZ(90deg) scale(1.15); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); }
          50% { transform: translateY(-20px) rotateX(270deg) rotateY(45deg) scale(1.08); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotateZ(0deg) rotateY(0deg) scale(1); }
          50% { transform: translateY(-40px) rotateZ(180deg) rotateY(180deg) scale(1.12); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateZ(0deg) scale(1); }
          50% { transform: translateY(-28px) rotateX(45deg) rotateZ(270deg) scale(1.06); }
        }
      `}</style>
      
      <div className="particle-background">
        {/* Canvas for particles */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: isDark ? 0.8 : 0.4
          }}
        />
        
        {/* Floating 3D objects */}
        {isInitialized && [...Array(deviceConfig.objectCount)].map((_, index) => (
          <FloatingObject 
            key={index} 
            delay={index * 2} 
            type={index % 2 === 0 ? 'cube' : 'sphere'}
            isDark={isDark}
            index={index}
          />
        ))}
        
        {/* Gradient overlays for depth */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: isDark 
            ? 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%)'
            : 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.1) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />
      </div>
    </>
  )
}

export default ParticleBackground
