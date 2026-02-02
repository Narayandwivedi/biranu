const Contact = () => {
  const whatsappNumber = '447850409469'
  const whatsappMessage = encodeURIComponent('Hello! I would like to enquire about your IT talent solutions.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Chat with Us on WhatsApp</h2>
                <p className="text-[11px] sm:text-xs text-gray-500 max-w-xs mx-auto">
                  Get instant responses by messaging us directly on WhatsApp. We're happy to help!
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-3.5 rounded-xl transition text-xs sm:text-sm shadow-lg shadow-green-200 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
              <p className="text-[10px] sm:text-[11px] text-gray-400">
                Available Mon &ndash; Fri, 9 AM &ndash; 6 PM (GMT)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
