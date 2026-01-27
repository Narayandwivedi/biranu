import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'IT Consulting',
    desc: 'Empowering organizations through digital transformation and robust technical roadmaps.',
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'International Export',
    desc: 'Facilitating seamless global trade, connecting quality products with international markets.',
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'HR Supply',
    desc: 'Delivering top-tier talent tailored to your specific organizational needs.',
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-800 text-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-indigo-200 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            UK-Based Multi-Disciplinary Firm
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4">
            Connecting Technology,<br />Talent, and Trade
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm lg:text-base text-indigo-100/90 mb-6 sm:mb-8 leading-relaxed">
            Driving business excellence through IT Consulting, International Export, and Strategic HR Supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/services"
              className="bg-white text-indigo-700 font-semibold px-6 py-2 sm:py-2.5 rounded-full hover:bg-indigo-50 transition text-xs sm:text-sm shadow-lg shadow-indigo-900/30"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border border-white/40 text-white font-semibold px-6 py-2 sm:py-2.5 rounded-full hover:bg-white/10 backdrop-blur transition text-xs sm:text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Our Three Strategic Pillars</h2>
          <p className="text-center text-gray-500 text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-12">
            We bridge the gap between innovation and execution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 transition mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">{p.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Ready to Scale Your Business?</h2>
          <p className="text-indigo-100/90 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
            Whether optimizing your infrastructure or expanding your global footprint, we provide the expertise to navigate today's complex business landscape.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 sm:px-8 py-2 sm:py-2.5 rounded-full hover:bg-indigo-50 transition text-xs sm:text-sm shadow-lg shadow-indigo-900/30"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
