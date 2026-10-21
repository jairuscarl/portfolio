import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { BrowserRouter, Link, Route, Routes, useLocation, useOutlet } from 'react-router'
import { navLinks, profile } from './data'
import { useRefraction, useTheme } from './hooks'
import { spring } from './motion'
import Backdrop from './components/Backdrop'
import GlassFilter from './components/GlassFilter'
import Lightbox from './components/Lightbox'
import Navbar from './components/Navbar'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

// Clean URLs live under /Portfolio on XAMPP (set in .env.production) and at / in `npm run dev`.
const basename = import.meta.env.VITE_BASENAME || '/'

// Pages sink back and blur out, then the next one rises into focus.
const pageMotion = {
  initial: { opacity: 0, y: 24, scale: 0.985, filter: 'blur(12px)' },
  animate: { opacity: 1, y: 0, scale: 1, filter: 'none', transition: spring.smooth },
  exit: { opacity: 0, scale: 0.97, filter: 'blur(8px)', transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
}

function Layout({ theme, onToggleTheme }) {
  const { pathname } = useLocation()
  const outlet = useOutlet() // captured per page so the leaving page keeps rendering during its exit

  useEffect(() => {
    const page = navLinks.find((link) => link.to === pathname)
    document.title = page && page.to !== '/' ? `${page.label} | ${profile.name}` : `${profile.name} | Portfolio`
  }, [pathname])

  return (
    <>
      <Backdrop />
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

      <main>
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
          <motion.div key={pathname} {...pageMotion}>
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer shell">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <Link to="/contact">Say hi, I don't bite →</Link>
      </footer>
    </>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [viewer, setViewer] = useState(null) // { items, index } while the lightbox is open
  useRefraction()

  const openImage = useCallback((items, index) => setViewer({ items, index }), [])
  const closeImage = useCallback(() => setViewer(null), [])
  const changeImage = useCallback((index) => setViewer((v) => ({ ...v, index })), [])

  return (
    <MotionConfig reducedMotion="user">
      <GlassFilter />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Layout theme={theme} onToggleTheme={toggleTheme} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About onOpenImage={openImage} />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certificates" element={<Certificates onOpenImage={openImage} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <AnimatePresence>
          {viewer && (
            <Lightbox key="lightbox" items={viewer.items} index={viewer.index} onChange={changeImage} onClose={closeImage} />
          )}
        </AnimatePresence>
      </BrowserRouter>
    </MotionConfig>
  )
}
