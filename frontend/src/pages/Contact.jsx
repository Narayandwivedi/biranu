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
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-indigo-100 text-sm sm:text-lg max-w-2xl mx-auto">
            Get in touch with Biranu Consulting. Our experts are ready to assist.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Office Address</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Biranu Consulting<br />
                Rear of 17 Plantagenet Road,<br />
                Barnet,<br />
                United Kingdom,<br />
                EN5 5JG
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Direct Contact</h2>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>
                  <span className="font-semibold">Email: </span>
                  <a href="mailto:ambikapadhy@biranuconsulting.com" className="text-indigo-700 hover:underline break-all">
                    ambikapadhy@biranuconsulting.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Mobile: </span>
                  <a href="tel:+447850409469" className="text-indigo-700 hover:underline">
                    +44 7850 409469
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Business Hours</h2>
              <ul className="space-y-1 text-gray-600 text-xs sm:text-sm">
                <li><span className="font-semibold">Monday &ndash; Friday:</span> 9:00 AM &ndash; 6:00 PM (GMT)</li>
                <li><span className="font-semibold">Saturday:</span> By Appointment</li>
                <li><span className="font-semibold">Sunday:</span> Closed</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-indigo-800 transition text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
