const Contact = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white border-b border-gray-100 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-2 mb-2 sm:mb-3 tracking-tight text-gray-900">Contact Us</h1>
          <p className="text-gray-500 text-xs sm:text-base max-w-xl mx-auto">
            Discover how our IT talent solutions can power your business forward.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8 space-y-5 sm:space-y-6">
              <h2 className="text-base sm:text-xl font-bold text-gray-900">Contact Information</h2>

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
                  <a href="mailto:info@biranuconsulting.com" className="text-[11px] sm:text-xs text-indigo-600 hover:text-indigo-700 transition break-all">
                    info@biranuconsulting.com
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
