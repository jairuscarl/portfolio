import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'
import { navLinks } from '../data'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`topbar ${scrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="nav shell" aria-label="Primary">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-dot" />
          <span>
            <span className="accent">&lt;</span> JAI <span className="accent">/&gt;</span>
          </span>
        </Link>

        <div className="nav-right">
          <ul className={`nav-links ${open ? 'is-open' : ''}`} id="nav-menu">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="icon-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="nav-menu"
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  )
}
