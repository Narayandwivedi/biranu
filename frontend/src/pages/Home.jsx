import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'IT Consulting',
    desc: 'Empowering organizations through digital transformation and robust technical roadmaps.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'International Export',
    desc: 'Facilitating seamless global trade, connecting quality products with international markets.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'HR Supply',
    desc: 'Delivering top-tier talent tailored to your specific organizational needs.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
  },
]

const stats = [
  { value: '3+', label: 'Core Services' },
  { value: 'UK', label: 'Headquartered' },
  { value: '24/7', label: 'Support' },
  { value: '100%', label: 'Client Focus' },
]

const Home = () => {
  return (
    <>
      {/* Hero - light, compact */}
      <section className="relative bg-gradient-to-b from-indigo-50 via-white to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-14 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 bg-indigo-100/60 border border-indigo-200/50 rounded-full px-2.5 py-0.5 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
            <span className="text-[10px] sm:text-xs font-medium text-indigo-600 tracking-wide uppercase">UK-Based Multi-Disciplinary Firm</span>
          </div>

          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] mb-2 sm:mb-3 tracking-tight text-gray-900">
            Connecting Technology,{' '}
            <span className="text-indigo-600">Talent, and Trade</span>
          </h1>

          <p className="max-w-md mx-auto text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 leading-relaxed">
            Driving business excellence through IT Consulting, International Export, and Strategic HR Supply.
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
        <div className="border-t border-gray-100 bg-white/60">
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

      {/* Pillars */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">What We Do</span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">Our Three Strategic Pillars</h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto">
              We bridge the gap between innovation and execution across three key domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-7 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${p.color} text-white mb-3 sm:mb-4 shadow-lg`}>
                  {p.icon}
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{p.title}</h3>
                <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-3 sm:mt-4">
                  <Link to="/services" className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition">
                    Learn more
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-5">
                A Leadership-Driven Approach
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Led by Ambika Padhy, Biranu Consulting prioritizes integrity and bespoke solutions. Whether optimizing your infrastructure or expanding your global footprint, we provide the expertise to navigate today's complex business landscape.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { title: 'Bespoke Solutions', desc: 'Tailored strategies designed for your unique challenges' },
                  { title: 'Global Reach', desc: 'International expertise with local understanding' },
                  { title: 'Proven Expertise', desc: 'Deep domain knowledge across all three pillars' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-2.5 sm:gap-3">
                    <div className="mt-0.5 shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 sm:p-10 text-white">
                <blockquote className="text-xs sm:text-sm lg:text-base leading-relaxed italic opacity-90">
                  "At Biranu Consulting, we pride ourselves on a leadership-driven approach that prioritizes integrity and bespoke solutions for every client."
                </blockquote>
                <div className="mt-4 sm:mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold">AP</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold">Ambika Padhy</div>
                    <div className="text-[10px] sm:text-xs text-indigo-200">Founder & Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">Ready to Scale Your Business?</h2>
          <p className="text-indigo-100 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed max-w-lg mx-auto">
            Whether optimizing your infrastructure or expanding your global footprint, we provide the expertise to navigate today's complex business landscape.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-white text-indigo-700 font-semibold px-5 sm:px-8 py-1.5 sm:py-2 rounded-full hover:bg-indigo-50 transition text-xs sm:text-sm shadow-md"
          >
            Contact Us Today
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
