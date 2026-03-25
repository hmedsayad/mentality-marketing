'use client'
import Image from 'next/image'

export default function Navigation() {
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
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
      <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-4 border border-white border-opacity-20">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/mentality-marketing-logo.svg"
              alt="Mentality Marketing Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => handleScrollTo('home')} 
              className="text-white hover:text-orange-500 transition-colors text-sm font-medium underline cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="text-white hover:text-orange-500 transition-colors text-sm font-medium cursor-pointer"
            >
              Contact us
            </button>
            <button 
              onClick={() => handleScrollTo('services')} 
              className="text-white hover:text-orange-500 transition-colors text-sm font-medium cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleScrollTo('about')} 
              className="text-white hover:text-orange-500 transition-colors text-sm font-medium cursor-pointer"
            >
              About us
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}