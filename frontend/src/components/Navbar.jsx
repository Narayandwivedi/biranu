import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 sm:h-14 lg:h-16 items-center">
          <Link to="/" className="flex items-center gap-0.5">
            <img src="/biranulogo.webp" alt="Biranu" className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-sm" />
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-blue-950">
                Biranu<span className="font-normal">Consulting</span>
              </span>
              <span className="text-[8px] sm:text-[9px] text-blue-600/70 font-medium tracking-widest uppercase">Driving Business Excellence</span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  pathname === l.to
                    ? 'text-indigo-700 bg-indigo-50'
                    : 'text-gray-600 hover:text-indigo-700 hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 bg-indigo-700 text-white text-xs lg:text-sm font-medium px-4 py-1.5 rounded-full hover:bg-indigo-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="bg-white px-4 py-2 space-y-0.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block py-2 px-3 rounded-lg text-xs font-medium transition ${
                pathname === l.to ? 'text-indigo-700 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-1 pb-2">
            <Link
              to="/contact"
              className="block text-center bg-indigo-700 text-white text-xs font-medium py-2 rounded-lg hover:bg-indigo-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
