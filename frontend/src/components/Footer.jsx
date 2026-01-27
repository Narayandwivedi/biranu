import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Biranu Consulting</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Connecting Technology, Talent, and Trade. Headquartered in the UK, led by Ambika Padhy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>Rear of 17 Plantagenet Road, Barnet, EN5 5JG, UK</li>
              <li>
                <a href="mailto:ambikapadhy@biranuconsulting.com" className="hover:text-white transition break-all">
                  ambikapadhy@biranuconsulting.com
                </a>
              </li>
              <li>
                <a href="tel:+447850409469" className="hover:text-white transition">
                  +44 7850 409469
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-10 pt-4 sm:pt-6 text-center text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Biranu Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
