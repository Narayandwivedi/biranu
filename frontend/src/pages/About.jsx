const values = [
  {
    title: 'Integrity',
    desc: 'We prioritize honest, transparent relationships with every client we serve.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Innovation',
    desc: 'We embrace forward-thinking strategies to stay ahead in a dynamic market.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Excellence',
    desc: 'We deliver bespoke solutions that meet the highest standards of quality.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
  },
]

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white border-b border-gray-100 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Who We Are</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-2 mb-2 sm:mb-3 tracking-tight text-gray-900">About Us</h1>
          <p className="text-gray-500 text-xs sm:text-base max-w-xl mx-auto">
            Driving business excellence through innovation and execution.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10">
            <div className="lg:col-span-3 space-y-3 sm:space-y-5 text-gray-600 text-xs sm:text-sm leading-relaxed">
              <p>
                Biranu Consulting, headquartered in the UK and led by <strong className="text-gray-900">Ambika Padhy</strong>, is a multi-disciplinary firm dedicated to driving business excellence. We bridge the gap between innovation and execution by specializing in three strategic pillars: <strong className="text-gray-900">IT Consulting</strong>, <strong className="text-gray-900">International Export</strong>, and <strong className="text-gray-900">HR Supply</strong>.
              </p>
              <p>
                Our IT division empowers organizations through digital transformation and robust technical roadmaps. Simultaneously, our export wing facilitates seamless global trade, connecting quality products with international markets.
              </p>
              <p>
                Recognizing that people are a company's greatest asset, our HR supply services deliver top-tier talent tailored to your specific organizational needs. At Biranu Consulting, we pride ourselves on a leadership-driven approach that prioritizes integrity and bespoke solutions.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-5 sm:p-6 text-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-sm sm:text-base font-bold">AP</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1">Ambika Padhy</h3>
                <p className="text-[10px] sm:text-xs text-indigo-200 mb-2 sm:mb-3">Founder & Director</p>
                <p className="text-[11px] sm:text-xs text-indigo-100 leading-relaxed">
                  Leading Biranu Consulting with a vision to connect businesses globally through technology, talent, and trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Our Foundation</span>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mt-2">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${v.color} text-white mb-3 sm:mb-4 shadow-lg`}>
                  {v.icon}
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{v.title}</h3>
                <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-8 sm:py-12 bg-indigo-600 text-white text-center px-4">
        <p className="text-sm sm:text-xl lg:text-2xl font-bold tracking-tight">
          Biranu Consulting &ndash; Connecting Technology, Talent, and Trade.
        </p>
      </section>
    </>
  )
}

export default About
