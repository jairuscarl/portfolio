import { useEffect, useState } from 'react'
import { useMotionValue, useSpring, useTransform } from 'motion/react'
import { spring } from './motion'

// Dark/light theme stored on <html data-theme> and remembered in localStorage.
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#000000' : '#f5f5f7')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be blocked (private mode); the theme still works for this visit.
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}

// True once the page has scrolled past `offset` pixels.
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

// Springy 3D tilt toward the pointer, plus --mx/--my for the glass highlight to follow it.
// Spread the result onto a motion element.
export function useTilt(max = 6) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring.smooth)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring.smooth)

  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    px.set(x)
    py.set(y)
    e.currentTarget.style.setProperty('--mx', `${x * 100}%`)
    e.currentTarget.style.setProperty('--my', `${y * 100}%`)
  }

  const onPointerLeave = (e) => {
    px.set(0.5)
    py.set(0.5)
    e.currentTarget.style.removeProperty('--mx')
    e.currentTarget.style.removeProperty('--my')
  }

  return { style: { rotateX, rotateY, transformPerspective: 1000 }, onPointerMove, onPointerLeave }
}
