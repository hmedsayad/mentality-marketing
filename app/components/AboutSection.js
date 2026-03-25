'use client'
import Image from 'next/image'

export default function AboutSection() {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 bg-[#0d3d54] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-5xl font-bold mb-8">
              About <span className="text-orange-500">mentality</span><br />
              <span className="text-orange-500">Marketing</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                We came from America because we believe there are tons of opportunities waiting for Algerian products and we believe good products deserve to be seen.
              </p>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleScrollTo('contact')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer"
                >
                  Contact us
                </button>
                <button 
                  onClick={() => handleScrollTo('services')}
                  className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer"
                >
                  Our Services →
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Marketing team working together"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}