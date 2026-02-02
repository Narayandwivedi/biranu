import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] sm:text-xs font-medium text-indigo-200">Global IT Talent Solutions Partner</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
              Empowering Global IT Talent.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Delivering Local Impact.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We connect high-quality technology professionals with forward-thinking organizations across the UK, Europe, and India.
            </p>
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 10 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Our Mission</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
                Bridging Business Needs and Exceptional IT Talent
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  With deep expertise across the IT domain, we specialize in <strong className="text-gray-900">sourcing, vetting, and deploying</strong> skilled professionals who help businesses innovate, transform, and grow in an increasingly digital world.
                </p>
                <p>
                  Our mission is simple: to bridge the gap between business needs and exceptional IT talent—<strong className="text-gray-900">quickly, reliably, and at scale.</strong>
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">3</div>
                  <div className="text-xs sm:text-sm text-gray-500">Global Regions</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">6+</div>
                  <div className="text-xs sm:text-sm text-gray-500">IT Domains</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">100%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Client Focus</div>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-indigo-200/50">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30 text-lg font-bold">
                    AP
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Ambika Padhy</h3>
                    <p className="text-xs text-indigo-200">Founder & Director</p>
                  </div>
                </div>
                <blockquote className="text-sm sm:text-base leading-relaxed text-indigo-100 italic">
                  "We don't just supply talent — we enable success. Our goal is to build long-term partnerships, delivering the right IT professionals to drive your business forward."
                </blockquote>
                <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-xs text-indigo-200">UK Headquartered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">End-to-End IT Talent Services</h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Tailored solutions to meet the evolving demands of modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { icon: '01', title: 'Permanent & Contract Staffing', desc: 'Flexible hiring for long-term and project-based roles.' },
              { icon: '02', title: 'Remote & Onsite Solutions', desc: 'Talent deployment tailored to your work environment.' },
              { icon: '03', title: 'Project-Based Resources', desc: 'Managed resource models for specific project needs.' },
              { icon: '04', title: 'Specialized IT Hiring', desc: 'Niche technical specialists across all IT domains.' },
            ].map((item) => (
              <div key={item.icon} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-bold mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Global Reach</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Your Competitive Advantage</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Operating across the UK, Europe, and India, we combine local market understanding with global delivery capability.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Diverse Talent Pool', desc: 'Access to pre-vetted professionals across multiple regions' },
                  { title: 'Faster Hiring Cycles', desc: 'Accelerated recruitment with flexible engagement models' },
                  { title: 'Cost-Effective Solutions', desc: 'Competitive pricing without compromising on quality' },
                  { title: 'Seamless Collaboration', desc: 'Cultural and time-zone alignment for your teams' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold">Our Regions</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { region: 'United Kingdom', flag: '🇬🇧', status: 'Headquarters' },
                    { region: 'Europe', flag: '🇪🇺', status: 'Active Operations' },
                    { region: 'India', flag: '🇮🇳', status: 'Talent Hub' },
                  ].map((r) => (
                    <div key={r.region} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{r.flag}</span>
                        <span className="text-sm font-medium">{r.region}</span>
                      </div>
                      <span className="text-xs text-slate-400">{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 sm:py-16 lg:py-20 bg-indigo-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold text-indigo-200 uppercase tracking-widest mb-2">Why Partner With Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">We Enable Success</h2>
            <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto">
              Long-term partnerships, not just placements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { title: 'Quality-Driven', desc: 'Rigorous vetting for the best IT professionals' },
              { title: 'Client-Centric', desc: 'Transparent engagement focused on your needs' },
              { title: 'Scalable', desc: 'Flexible models that grow with your business' },
              { title: 'Partnership', desc: 'Building lasting relationships that matter' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center hover:bg-white/20 transition-colors">
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-indigo-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">IT Domains We Cover</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { name: 'Software Dev', icon: '💻' },
              { name: 'Cloud & DevOps', icon: '☁️' },
              { name: 'Data & AI', icon: '📊' },
              { name: 'Cybersecurity', icon: '🔒' },
              { name: 'Enterprise Apps', icon: '🏢' },
              { name: 'QA & Testing', icon: '✅' },
            ].map((d) => (
              <div key={d.name} className="bg-slate-50 rounded-xl p-4 text-center hover:bg-indigo-50 hover:shadow-md transition-all cursor-default">
                <div className="text-2xl mb-2">{d.icon}</div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">{d.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Let's Build the Future, Together</h2>
          <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Whether you're scaling your team, launching a new project, or transforming your IT landscape — we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-indigo-700 transition text-sm shadow-lg shadow-indigo-500/30"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
