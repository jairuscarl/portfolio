import { motion } from 'motion/react'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { spring } from '../motion'

// iOS-style toggle. The knob springs across using a layout animation.
export default function ThemeSwitch({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button className="switch" role="switch" aria-checked={dark} aria-label="Dark mode" onClick={onToggle}>
      <motion.span className="switch-knob" layout transition={spring.bouncy}>
        {dark ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
      </motion.span>
    </button>
  )
}
