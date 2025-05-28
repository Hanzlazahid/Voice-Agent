"use client";

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const animatedTexts = [
    "boost conversions",
    "increase sales", 
    "save time",
    "scale efficiently",
    "grow revenue"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black relative overflow-hidden flex items-center justify-center py-20 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-8 animate-bounce">
          <span className="bg-white text-purple-600 px-2 py-1 rounded-full text-xs font-bold mr-2 hidden md:block">NEW</span>
          AI can now automate your business processes!
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Transform your business with</span>
          <span className="block">AI automation that </span>
          <span className="inline-block relative">
            <span 
              key={currentText}
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse"
            >
              {animatedTexts[currentText]}
            </span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Deploy cutting-edge artificial intelligence solutions that streamline operations, 
          enhance productivity, and deliver measurable results in 60 seconds or less.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg cursor-pointer">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;