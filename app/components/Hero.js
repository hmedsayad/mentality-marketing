'use client'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Hero() {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden" style={{ backgroundColor: '#0d3d54' }}>
      {/* Background overlay with the specific blue color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#0d3d54', opacity: 0.9 }}></div>
      
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Marketing team background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            We're the marketing guides for Algerian businesses that{' '}
            <span className="text-orange-500">want to grow</span>
          </h1>
          
          <button 
            onClick={handleContactClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto cursor-pointer"
          >
            <span>Contact us</span>
            <span>→</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-30 left-2 flex flex-col items-center space-y-1">
        {/* Company Name — now above the line */}
        <div className="transform -rotate-90 whitespace-nowrap">
          <span className="text-white text-xs font-medium tracking-widest">Mentality marketing</span>
        </div>
        {/* Vertical line below company name */}
        {/* <div className="w-0.5 h-16 bg-white"></div> */}
      </div>

    </div>
  )
}