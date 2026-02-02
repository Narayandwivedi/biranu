import { Link } from 'react-router-dom'

const stats = [
  { value: 'UK', label: 'Europe & India' },
  { value: 'Fast', label: 'Hiring Cycles' },
  { value: '100%', label: 'Quality Focus' },
  { value: '24/7', label: 'Support' },
]

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 via-indigo-50 to-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-14 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 bg-indigo-100/60 border border-indigo-200/50 rounded-full px-2.5 py-0.5 mb-3 sm:mb-4">
          <span className="text-[10px] sm:text-xs font-medium text-indigo-700">Global IT Talent Solutions</span>
        </div>

        <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] mb-2 sm:mb-3 tracking-tight text-gray-900">
          Empowering Global IT Talent.{' '}
          <span className="text-indigo-600">Delivering Local Impact.</span>
        </h1>

        <p className="max-w-lg mx-auto text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 leading-relaxed">
          Connecting high-quality technology professionals with forward-thinking organizations across the UK, Europe, and India.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
          <Link
            to="/services"
            className="group bg-indigo-700 text-white font-semibold px-5 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-indigo-800 transition-all text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shadow-md shadow-indigo-200"
          >
            Explore Services
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="border border-gray-300 text-gray-700 font-medium px-5 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-gray-50 transition-all text-xs sm:text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-sm sm:text-lg lg:text-xl font-bold text-indigo-700">{s.value}</div>
                <div className="text-[9px] sm:text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
