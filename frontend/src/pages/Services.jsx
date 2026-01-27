const services = [
  {
    number: '01',
    title: 'IT Consulting & Solutions',
    intro: 'We offer strategic technical guidance to help you navigate the digital landscape.',
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
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">Our Services</h1>
          <p className="text-indigo-100 text-sm sm:text-lg max-w-2xl mx-auto">
            A holistic suite of services designed to scale your business operations and expand your global reach.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
          {services.map((s) => (
            <div key={s.number} className="bg-white rounded-xl shadow-md p-5 sm:p-8 md:p-10">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-indigo-200">{s.number}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{s.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">{s.intro}</p>
                </div>
              </div>
              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {s.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2 sm:gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                    <div className="text-sm sm:text-base">
                      <span className="font-semibold text-gray-900">{item.name}: </span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
