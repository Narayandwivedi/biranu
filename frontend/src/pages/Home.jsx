import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const pillars = [
  {
    title: 'Permanent & Contract Staffing',
    desc: 'Sourcing and deploying skilled IT professionals for both permanent positions and contract engagements.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Remote & Onsite Solutions',
    desc: 'Flexible talent deployment models tailored to your work environment and team structure.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Project-Based Resources',
    desc: 'Managed resource models for project-specific needs and large-scale team augmentation.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
  },
]

const Home = () => {
  return (
    <>
      <Hero />

      {/* Pillars */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">What We Do</span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">End-to-End IT Talent Services</h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto">
              Tailored solutions to meet the evolving demands of modern enterprises.
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
              <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Why Partner With Us</span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-5">
                Your Competitive Advantage
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Operating across the UK, Europe, and India, we combine local market understanding with global delivery capability. We don't just supply talent — we enable success.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { title: 'Quality-Driven Selection', desc: 'Access to a diverse, pre-vetted global talent pool' },
                  { title: 'Faster Hiring Cycles', desc: 'Flexible engagement models for rapid deployment' },
                  { title: 'Cost-Effective Solutions', desc: 'Competitive pricing without compromising on quality' },
                  { title: 'Seamless Collaboration', desc: 'Cultural and time-zone alignment for your teams' },
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
                  "We bridge the gap between business needs and exceptional IT talent—quickly, reliably, and at scale. Long-term partnerships, not just placements."
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
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">Let's Build the Future, Together</h2>
          <p className="text-indigo-100 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed max-w-lg mx-auto">
            Whether you're scaling your team, launching a new project, or transforming your IT landscape, we're here to support you with the talent that drives results.
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
