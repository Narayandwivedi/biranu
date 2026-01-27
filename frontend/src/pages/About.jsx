const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">About Us</h1>
          <p className="text-indigo-100 text-sm sm:text-lg max-w-2xl mx-auto">
            Driving business excellence through innovation and execution.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            Biranu Consulting, headquartered in the UK and led by <strong>Ambika Padhy</strong>, is a multi-disciplinary firm dedicated to driving business excellence. We bridge the gap between innovation and execution by specializing in three strategic pillars: <strong>IT Consulting</strong>, <strong>International Export</strong>, and <strong>HR Supply</strong>.
          </p>
          <p>
            Our IT division empowers organizations through digital transformation and robust technical roadmaps. Simultaneously, our export wing facilitates seamless global trade, connecting quality products with international markets. Recognizing that people are a company's greatest asset, our HR supply services deliver top-tier talent tailored to your specific organizational needs.
          </p>
          <p>
            At Biranu Consulting, we pride ourselves on a leadership-driven approach that prioritizes integrity and bespoke solutions. Whether optimizing your infrastructure or expanding your global footprint, we provide the expertise to navigate today's complex business landscape.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              { title: 'Integrity', desc: 'We prioritize honest, transparent relationships with every client we serve.' },
              { title: 'Innovation', desc: 'We embrace forward-thinking strategies to stay ahead in a dynamic market.' },
              { title: 'Excellence', desc: 'We deliver bespoke solutions that meet the highest standards of quality.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl shadow-md p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2 sm:mb-3">{v.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-10 sm:py-16 bg-indigo-700 text-white text-center px-4">
        <p className="text-lg sm:text-2xl font-bold">Biranu Consulting &ndash; Connecting Technology, Talent, and Trade.</p>
      </section>
    </>
  )
}

export default About
