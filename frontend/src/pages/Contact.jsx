import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:ambikapadhy@biranuconsulting.com?subject=Enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
    window.location.href = mailto
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white border-b border-gray-100 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-2 mb-2 sm:mb-3 tracking-tight text-gray-900">Contact Us</h1>
          <p className="text-gray-500 text-xs sm:text-base max-w-xl mx-auto">
            Our experts are ready to assist you with your business needs.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {/* Address */}
            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">Office Address</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  Rear of 17 Plantagenet Road,<br />
                  Barnet, EN5 5JG,<br />
                  United Kingdom
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">Email</h3>
                <a href="mailto:ambikapadhy@biranuconsulting.com" className="text-[11px] sm:text-xs text-indigo-600 hover:text-indigo-700 transition break-all">
                  ambikapadhy@biranuconsulting.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">Phone</h3>
                <a href="tel:+447850409469" className="text-[11px] sm:text-xs text-indigo-600 hover:text-indigo-700 transition">
                  +44 7850 409469
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">Business Hours</h3>
                <div className="text-[11px] sm:text-xs text-gray-500 space-y-0.5">
                  <p>Mon &ndash; Fri: 9:00 AM &ndash; 6:00 PM (GMT)</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
              <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Send Us a Message</h2>
              <p className="text-[11px] sm:text-xs text-gray-500 mb-4 sm:mb-6">Fill out the form below and we'll get back to you promptly.</p>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 sm:py-2.5 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 sm:py-2.5 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 sm:py-2.5 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none placeholder:text-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-700 text-white font-semibold py-2 sm:py-2.5 rounded-xl hover:bg-indigo-800 transition text-xs sm:text-sm shadow-lg shadow-indigo-200 inline-flex items-center justify-center gap-1.5"
                >
                  Send Message
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
