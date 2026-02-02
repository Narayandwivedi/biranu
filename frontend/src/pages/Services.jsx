import { Link } from 'react-router-dom'

const serviceTypes = [
  {
    title: 'Permanent & Contract Staffing',
    desc: 'Flexible hiring solutions for both long-term positions and project-based engagements.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Remote & Onsite Talent Solutions',
    desc: 'Deploy talent where you need them—whether in your office or working remotely.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Project-Based & Managed Resources',
    desc: 'Dedicated teams and managed resource models for your specific project needs.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Specialized IT Skill Hiring',
    desc: 'Niche technical specialists for hard-to-fill roles and emerging technologies.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-600',
  },
]

const expertise = [
  {
    title: 'Software Development & Engineering',
    desc: 'Full-stack developers, architects, and engineering leads across all modern tech stacks.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Cloud, DevOps & Infrastructure',
    desc: 'AWS, Azure, GCP specialists, CI/CD engineers, and platform architects.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Data, Analytics & AI',
    desc: 'Data engineers, scientists, ML specialists, and BI professionals.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Cybersecurity & Compliance',
    desc: 'Security engineers, compliance specialists, and identity management experts.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-red-500 to-rose-600',
  },
  {
    title: 'Enterprise Applications & Integration',
    desc: 'SAP, Salesforce, Oracle consultants and API integration specialists.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'QA, Testing & Automation',
    desc: 'QA engineers, test automation specialists, and performance testing experts.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-cyan-500 to-teal-600',
  },
]

const globalAdvantages = [
  { title: 'Diverse Talent Pool', desc: 'Access to pre-vetted professionals across UK, Europe, and India' },
  { title: 'Faster Hiring', desc: 'Accelerated recruitment cycles with flexible engagement models' },
  { title: 'Cost-Effective', desc: 'Competitive pricing without compromising on quality' },
  { title: 'Seamless Collaboration', desc: 'Cultural and time-zone alignment for your teams' },
]

const Services = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white border-b border-gray-100 pb-4 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">What We Do</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-1.5 mb-1.5 tracking-tight text-gray-900">Our Services</h1>
          <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto">
            We provide end-to-end IT talent supply services, tailored to meet the evolving demands of modern enterprises. From niche technical specialists to large-scale team augmentation, we ensure the right talent is available at the right time.
          </p>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Talent Solutions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">How We Help</h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto">
              Flexible engagement models designed for your unique business needs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {serviceTypes.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl border border-gray-100 p-3 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className={`shrink-0 w-7 h-7 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-sm`}>
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[10px] sm:text-base font-bold text-gray-900">{s.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px] sm:text-sm leading-relaxed mt-2 sm:mt-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-widest">Global Reach</span>
            <h2 className="text-xl sm:text-3xl font-bold mt-2 mb-2 sm:mb-3">Your Competitive Advantage</h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
              Operating across the UK, Europe, and India, we combine local market understanding with global delivery capability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {globalAdvantages.map((a) => (
              <div key={a.title} className="bg-gray-100 rounded-xl p-3 sm:p-6">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] sm:text-base font-bold text-gray-900">{a.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-[10px] sm:text-sm leading-relaxed mt-2">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Expertise */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Expertise Across IT</span>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">Our Talent Ecosystem</h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto">
              Our talent ecosystem spans a wide range of technologies and roles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${e.color} text-white mb-3 sm:mb-4 shadow-lg`}>
                  {e.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2">{e.title}</h3>
                <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Let's Build the Future, Together</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
            Whether you're scaling your team, launching a new project, or transforming your IT landscape, we're here to support you with the talent that drives results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-indigo-700 text-white font-semibold px-5 sm:px-7 py-2 sm:py-2.5 rounded-full hover:bg-indigo-800 transition text-xs sm:text-sm shadow-lg shadow-indigo-200"
          >
            Get in Touch
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
