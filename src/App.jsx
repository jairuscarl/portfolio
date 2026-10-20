import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation } from 'react-router'
import { navLinks, profile } from './data'
import { useTheme } from './hooks'
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

// Scrolls to the top and updates the tab title whenever the page changes.
function PageChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const page = navLinks.find((link) => link.to === pathname)
    document.title = page && page.to !== '/' ? `${page.label} | ${profile.name}` : `${profile.name} | Portfolio`
  }, [pathname])

  return null
}

function Layout({ theme, onToggleTheme }) {
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <PageChange />
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

      <main>
        <Outlet />
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

  const openImage = useCallback((items, index) => setViewer({ items, index }), [])
  const closeImage = useCallback(() => setViewer(null), [])
  const changeImage = useCallback((index) => setViewer((v) => ({ ...v, index })), [])

  return (
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

      {viewer && (
        <Lightbox items={viewer.items} index={viewer.index} onChange={changeImage} onClose={closeImage} />
      )}
    </BrowserRouter>
  )
}
