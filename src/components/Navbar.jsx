import { motion } from 'motion/react'
import { Link, NavLink } from 'react-router'
import { FaAward, FaEnvelope, FaHouse, FaLayerGroup, FaUser } from 'react-icons/fa6'
import { navLinks } from '../data'
import { useScrolled } from '../hooks'
import { spring } from '../motion'
import ThemeSwitch from './ThemeSwitch'

const tabIcons = { '/': FaHouse, '/about': FaUser, '/projects': FaLayerGroup, '/certificates': FaAward, '/contact': FaEnvelope }

// Floating Liquid Glass capsule on desktop; on phones the links move to an iOS-style tab bar at the bottom.
export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled()

  return (
    <>
      <motion.header className="nav-wrap" layoutRoot>
        <motion.nav
          className={`nav liquid ${scrolled ? 'is-scrolled' : ''}`}
          aria-label="Primary"
          initial={{ opacity: 0, y: -24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring.bouncy, delay: 0.1 }}
        >
          <Link className="brand mono" to="/">
            <span className="accent">&lt;</span>JAI<span className="accent">/&gt;</span>
          </Link>

          <ul className="nav-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} to={to} end={to === '/'}>
                  {({ isActive }) => (
                    <>
                      {isActive && <motion.span className="nav-pill" layoutId="nav-pill" transition={spring.bouncy} />}
                      <span>{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
        </motion.nav>
      </motion.header>

      <motion.nav className="tabbar liquid is-thick" aria-label="Primary" layoutRoot>
        {navLinks.map(({ to, label }) => {
          const Icon = tabIcons[to]
          return (
            <NavLink key={to} className={({ isActive }) => `tab ${isActive ? 'is-active' : ''}`} to={to} end={to === '/'}>
              {({ isActive }) => (
                <>
                  {isActive && <motion.span className="nav-pill" layoutId="tab-pill" transition={spring.bouncy} />}
                  <Icon aria-hidden="true" />
                  <span>{label === 'Certificates' ? 'Certs' : label}</span>
                </>
              )}
            </NavLink>
          )
        })}
      </motion.nav>
    </>
  )
}
