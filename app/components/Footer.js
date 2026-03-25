'use client'
import Image from 'next/image'

export default function Footer() {
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
    <footer className="bg-[#0d3d54] text-white">
      {/* CTA Section */}
      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-orange-500">How can we help</span><br />
                <span className="text-orange-500">you, get in touch</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mx-auto lg:mx-0">
                How can we help you get in touch, contact us now 
                and blast off with a free consultation and marketing 
                audit to identify your marketing gaps.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleScrollTo('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 cursor-pointer"
              >
                <span>Contact us</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-slate-700 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Logo */}
            <div className="flex items-center mb-6 lg:mb-0">
              <Image
                src="/images/mentality-marketing-logo.svg"
                alt="Mentality Marketing Logo"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8 mb-6 lg:mb-0">
              <button 
                onClick={() => handleScrollTo('home')} 
                className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base cursor-pointer"
              >
                Contact us
              </button>
              <button 
                onClick={() => handleScrollTo('services')} 
                className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base cursor-pointer"
              >
                Services
              </button>
              <button 
                onClick={() => handleScrollTo('about')} 
                className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base cursor-pointer"
              >
                About us
              </button>
            </nav>

            {/* Social Links */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xs md:text-sm font-bold">f</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs md:text-sm font-bold">ig</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <span className="text-xs md:text-sm font-bold">yt</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-xs md:text-sm">
            Copyright © 2025 Mentality Marketing.
          </p>
        </div>
      </div>
    </footer>
  )
}