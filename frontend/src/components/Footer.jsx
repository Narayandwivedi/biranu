import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-0.5 mb-3">
              <img src="/biranulogo.webp" alt="Biranu" className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-sm" />
              <span className="text-sm sm:text-base font-bold tracking-tight text-white">
                Biranu<span className="font-normal">Consulting</span>
              </span>
            </div>
            <p className="text-[11px] sm:text-xs leading-relaxed max-w-xs">
              Connecting Technology, Talent, and Trade. A UK-based multi-disciplinary firm led by Ambika Padhy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[11px] sm:text-xs hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
              <li>IT Consulting</li>
              <li>International Export</li>
              <li>HR Supply</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
              <li>Rear of 17 Plantagenet Road,<br />Barnet, EN5 5JG, UK</li>
              <li>
                <a href="mailto:ambikapadhy@biranuconsulting.com" className="hover:text-white transition-colors break-all">
                  ambikapadhy@biranuconsulting.com
                </a>
              </li>
              <li>
                <a href="tel:+447850409469" className="hover:text-white transition-colors">
                  +44 7850 409469
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-xs">
          <span>&copy; {new Date().getFullYear()} Biranu Consulting. All rights reserved.</span>
          <span className="text-gray-500">Connecting Technology, Talent, and Trade</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
