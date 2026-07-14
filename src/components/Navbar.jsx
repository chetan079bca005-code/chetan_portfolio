import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const scrolledSurfaceClass = darkMode
    ? 'bg-black/70 backdrop-blur-md py-3 shadow-[0_8px_30px_rgba(0,0,0,0.28)] border-b border-white/10'
    : 'bg-[rgba(255,248,237,0.88)] backdrop-blur-xl py-3 shadow-[0_8px_30px_rgba(28,25,23,0.06)] border-b border-charcoal-900/10'

  const navLinks = [
    { name: 'INDEX', path: '#home' },
    { name: 'ABOUT', path: '#about' },
    { name: 'EXPERIENCE', path: '#experience' },
    { name: 'PROJECTS', path: '#projects' },
    { name: 'CONTACT', path: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, null, path)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-[80] transition-all duration-300 ${
      scrolled 
        ? scrolledSurfaceClass
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group font-serif text-lg font-normal tracking-tight text-charcoal-900 dark:text-cream-50"
        >
          <span className="font-mono text-xs text-terracotta-800 dark:text-terracotta-600 font-bold">CK</span>
          <span className="hidden sm:inline hover:underline decoration-terracotta-800 dark:decoration-terracotta-600 underline-offset-4">chetankoirala.com.np</span>
          <span className="inline sm:hidden font-serif">Chetan K.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 font-mono text-[11px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-charcoal-700 hover:text-terracotta-800 dark:text-cream-200 dark:hover:text-terracotta-600 transition-all relative group py-2 active:scale-[0.98]"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta-800 dark:bg-terracotta-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-charcoal-900/10 dark:border-cream-100/10 hover:bg-charcoal-900/5 dark:hover:bg-cream-100/5 transition-all text-charcoal-700 dark:text-cream-200 active:scale-[0.96]"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-charcoal-900/10 dark:border-cream-100/10 hover:bg-charcoal-900/5 dark:hover:bg-cream-100/5 transition-all text-charcoal-700 dark:text-cream-200 active:scale-[0.96]"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>

          {/* Menu button */}
          <button
            className="text-charcoal-900 dark:text-cream-50 p-2 rounded-full border border-charcoal-900/10 dark:border-cream-100/10 hover:bg-charcoal-900/5 dark:hover:bg-cream-100/5 transition-all active:scale-[0.96]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-charcoal-900/5 dark:border-cream-100/5 bg-[rgba(255,248,237,0.98)] dark:bg-charcoal-900/95 backdrop-blur-xl flex flex-col p-5 space-y-3 font-mono text-sm absolute top-full left-0 w-full shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-charcoal-700 dark:text-cream-200 py-3 border-b border-charcoal-900/5 dark:border-cream-100/5 transition-all active:scale-[0.98]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar

