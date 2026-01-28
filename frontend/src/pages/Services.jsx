import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'IT Consulting & Solutions',
    intro: 'We offer strategic technical guidance to help you navigate the digital landscape.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
    items: [
      { name: 'Digital Transformation', desc: 'Modernizing legacy systems for better efficiency.' },
      { name: 'Infrastructure Strategy', desc: 'Designing scalable IT roadmaps.' },
      { name: 'Tech Implementation', desc: 'Deploying software solutions that solve real-world business problems.' },
    ],
  },
  {
    number: '02',
    title: 'International Export Management',
    intro: 'Our trade division simplifies the complexities of the global supply chain.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
    items: [
      { name: 'Market Entry Support', desc: 'Navigating UK and international trade regulations.' },
      { name: 'Supply Chain Optimization', desc: 'Ensuring quality control and timely delivery.' },
      { name: 'Strategic Sourcing', desc: 'Connecting high-quality products with viable global markets.' },
    ],
  },
  {
    number: '03',
    title: 'Strategic HR Supply',
    intro: 'We bridge the gap between industry-leading companies and top-tier professionals.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
    items: [
      { name: 'Talent Acquisition', desc: 'Sourcing skilled personnel for specialized roles.' },
      { name: 'Workforce Solutions', desc: 'Providing flexible HR supply to meet seasonal or project demands.' },
      { name: 'Cultural Alignment', desc: 'Ensuring every candidate fits your organizational values.' },
    ],
  },
]

const Services = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white border-b border-gray-100 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">What We Offer</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-2 mb-2 sm:mb-3 tracking-tight text-gray-900">Our Services</h1>
          <p className="text-gray-500 text-xs sm:text-base max-w-xl mx-auto">
            A holistic suite of services designed to scale your business operations and expand your global reach.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
          {services.map((s) => (
            <div key={s.number} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 p-5 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-5 mb-4 sm:mb-6">
                <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-lg`}>
                  {s.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] sm:text-xs font-bold text-indigo-400 uppercase tracking-wider">{s.number}</span>
                  </div>
                  <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900">{s.title}</h2>
                  <p className="text-gray-500 text-[11px] sm:text-sm mt-1">{s.intro}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {s.items.map((item) => (
                  <div key={item.name} className="bg-slate-50 rounded-xl p-3 sm:p-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">{item.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Need a Tailored Solution?</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
            Reach out and let us craft a strategy that fits your unique business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-indigo-700 text-white font-semibold px-5 sm:px-7 py-2 sm:py-2.5 rounded-full hover:bg-indigo-800 transition text-xs sm:text-sm shadow-lg shadow-indigo-200"
          >
            Contact Us
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
