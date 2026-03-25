'use client'

export default function TestimonialsSection() {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const testimonials = [
    {
      name: "Josh Penn",
      text: "Working with Mentality Marketing was easy, comfortable, and collaborative... our results were instantaneous! We started receiving hundreds of inquiries from potential clients within 24 hours!",
      position: "Operations Manager",
      company: "Company Name"
    },
    {
      name: "Josh Penn",
      text: "Working with Mentality Marketing was easy, comfortable, and collaborative... our results were instantaneous! We started receiving hundreds of inquiries from potential clients within 24 hours!",
      position: "Operations Manager", 
      company: "Company Name"
    },
    {
      name: "Josh Penn",
      text: "Working with Mentality Marketing was easy, comfortable, and collaborative... our results were instantaneous! We started receiving hundreds of inquiries from potential clients within 24 hours!",
      position: "Operations Manager",
      company: "Company Name"
    },
    {
      name: "Josh Penn", 
      text: "Working with Mentality Marketing was easy, comfortable, and collaborative... our results were instantaneous! We started receiving hundreds of inquiries from potential clients within 24 hours!",
      position: "Operations Manager",
      company: "Company Name"
    },
    {
      name: "Josh Penn",
      text: "Working with Mentality Marketing was easy, comfortable, and collaborative... our results were instantaneous! We started receiving hundreds of inquiries from potential clients within 24 hours!",
      position: "Operations Manager", 
      company: "Company Name"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden min-h-screen">
      {/* Background Logo Image */}
      <div className="absolute top-0 right-0 w-150 h-full  z-0">
        <img
          src="/images/mentality-marketring-logo-background.png"
          alt="Mentality Marketing Logo Background"
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Desktop Layout */}
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-16">
          {/* Left Side - Header Section */}
          <div className="lg:w-1/2 lg:max-w-xl mb-16 lg:mb-0">
            <h2 className="text-6xl font-bold text-orange-500 mb-6 leading-tight">
              What our<br />
              Clients Say
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our clients range from various industries in Algiers.<br />
              From small to large, in the desert or in the capital.
            </p>

            <button 
              onClick={() => handleScrollTo('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Contact us →
            </button>
          </div>

          {/* Right Side - Testimonials Cards */}
          <div className="lg:w-1/2 relative">
            {/* Floating cards arrangement */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 items-start">
              {/* Card 1 */}
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      JP
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonials[0].name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    "{testimonials[0].text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">OM</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[0].position}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🏢</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[0].company}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                <div className="bg-orange-100/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-orange-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      JP
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonials[1].name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    "{testimonials[1].text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">OM</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[1].position}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🏢</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[1].company}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300 mt-4">
                <div className="bg-orange-200/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-orange-300 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      JP
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonials[2].name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    "{testimonials[2].text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">OM</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[2].position}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🏢</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[2].company}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300 mt-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      JP
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonials[3].name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                    "{testimonials[3].text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">OM</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[3].position}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🏢</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[3].company}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
          {/*     <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300 mt-2">
                <div className="bg-orange-100/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-orange-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      JP
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonials[4].name}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    "{testimonials[4].text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">OM</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[4].position}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🏢</span>
                      </div>
                      <span className="text-xs text-gray-600">{testimonials[4].company}</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}