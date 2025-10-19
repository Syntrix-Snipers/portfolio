import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useTheme } from '../contexts/ThemeContext'

const ParticlesBackground = ({ disableOnMobile = true }) => {
	const { theme } = useTheme()

	const particlesInit = useCallback(async (engine) => {
		// load only the slim bundle to keep the bundle small
		await loadSlim(engine)
	}, [])

	const particlesLoaded = useCallback(async (container) => {
		// container available for future interactions
	}, [])

	// small-screen performance: don't render particles if disabled
	if (disableOnMobile && typeof window !== 'undefined' && window.innerWidth < 520) {
		return null
	}

	const isDark = theme === 'dark'
	const particleColor = isDark ? '#e6eef8' : '#0b1220'
	const linkColor = isDark ? '#9aa6b2' : '#6b7280'

	return (
		<div
			aria-hidden
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 0,
				pointerEvents: 'none',
				opacity: 1,
			}}
		>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				style={{ position: 'absolute', inset: 0, zIndex: 0 }}
				options={{
					fullScreen: { enable: true },
					fpsLimit: 60,
					interactivity: {
						events: { onHover: { enable: true }, onClick: { enable: false }, resize: true },
						modes: {},
					},
					particles: {
						color: { value: particleColor },
						links: { color: linkColor, distance: 140, enable: true, opacity: 0.25, width: 1 },
						move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, speed: 0.6 },
						number: { value: 55, density: { enable: true, area: 900 } },
						opacity: { value: 0.6 },
						shape: { type: 'circle' },
						size: { value: { min: 1, max: 4 } },
					},
					detectRetina: true,
				}}
			/>
		</div>
	)
}

export default ParticlesBackground

