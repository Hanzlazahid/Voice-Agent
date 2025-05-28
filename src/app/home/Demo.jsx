"use client";

import { useState } from 'react';
import { Play, User, Mail, Phone, Flag } from 'lucide-react';

const DemoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
    const video = document.querySelector('video');
    if (video) {
      video.play();
    }
  };

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 relative md:py-36">
      {/* Seamless top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Video Section - Left Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl">
              {/* Video background */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {/* Actual video element */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls={isPlaying}
                  muted
                  playsInline
                  poster="/assets/images/thumbnail.png"
                >
                  <source src="/assets/video/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay for play button */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button 
                      onClick={handlePlayVideo}
                      className="group relative cursor-pointer"
                    >
                      {/* Play button */}
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer">
                        <Play className="w-8 h-8 text-white ml-1 cursor-pointer" fill="currentColor" />
                      </div>
                      
                      {/* Pulsing rings */}
                      <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-30"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-ping opacity-20 animation-delay-1000"></div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form Section - Right Side */}
          <div className="relative order-1 lg:order-2">
            {/* Agent Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  AVAILABLE
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">ALEX (DEMO AGENT)</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available Now</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-100 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-100 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none">
                  <Flag className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-gray-500 text-sm">+1</span>
                  <span className="text-gray-300 ml-2">•</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="phone number"
                  className="w-full pl-24 pr-4 py-4 bg-gray-100 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg cursor-pointer"
              >
                Call me now
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                🔒 Secure • 📞 Instant Connection • 🎯 Personalized Demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;