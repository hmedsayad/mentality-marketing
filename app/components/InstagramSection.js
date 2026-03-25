// components/InstagramSection.js
'use client'
import { useState } from 'react'

export default function InstagramSection() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const handleVideoError = () => {
    setVideoError(true);
    console.error('Video failed to load: /images/mentality-video.mp4');
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
                We Make Brands Visible
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe good products deserve to be seen and great brands deserve recognition.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our marketing expertise helps businesses grow and reach their full potential.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">What We Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Strategic marketing that drives results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Brand awareness campaigns that work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Digital solutions for business growth</span>
                </li>
              </ul>
            </div>
          </div>

         
          {/* Right side - Simple video display */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                {/* Video container */}
                <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-gray-200 relative">
                  <video 
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    loop
                    muted
                    playsInline
                    id="mentality-video"
                    onClick={(e) => {
                      // Prevent navigation if clicking on the mute button area
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const clickY = e.clientY - rect.top;
                      
                      // Mute button is positioned at bottom-4 left-4 (roughly 16px from bottom and left)
                      // Button is approximately 36px x 36px (p-2 + icon size)
                      const buttonLeft = 16;
                      const buttonTop = rect.height - 52; // 16px from bottom + button height
                      const buttonRight = buttonLeft + 36;
                      const buttonBottom = rect.height - 16;
                      
                      // Only navigate if click is outside the mute button area
                      if (!(clickX >= buttonLeft && clickX <= buttonRight && 
                            clickY >= buttonTop && clickY <= buttonBottom)) {
                        window.open('https://www.instagram.com/reel/DH6DW-ds7kA/', '_blank');
                      }
                    }}
                  >
                    <source src="/images/mentality-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom mute/unmute button */}
                  <button
                    className="absolute bottom-4 left-4 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200 cursor-pointer z-10"
                    style={{ backgroundColor: '#0d3d54' }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the video click handler from firing
                      const video = document.getElementById('mentality-video');
                      video.muted = !video.muted;
                      setIsMuted(video.muted);
                    }}
                  >
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {isMuted ? (
                        /* Muted icon */
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      ) : (
                        /* Volume on icon */
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}