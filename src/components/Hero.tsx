import React from 'react';
import { ArrowRight, Rocket, Play, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse float-animation"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-1000 float-animation"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-2000 float-animation"></div>
        <div className="absolute top-32 right-1/4 w-20 h-20 bg-white rounded-full animate-pulse delay-500 float-animation"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-pulse delay-1500 float-animation"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Stats Bar */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-6 text-white text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>200+ Happy Clients</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>400% Avg Growth</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            We Help Brands Grow on Social Media
            <span className="inline-block ml-4 animate-bounce hover:animate-spin transition-all duration-300">
              <Rocket className="w-12 h-12 md:w-16 md:h-16" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Social Media Management | Content Strategy | Paid Ads | Growth Tracking
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold 
                             hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 
                             shadow-2xl hover:shadow-3xl flex items-center gap-3 hover-glow">
              📩 Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-3 text-white font-semibold hover:text-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              Watch Our Story
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in-up animation-delay-600">
            <p className="text-blue-200 text-sm mb-6">Trusted by businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold text-lg">TechStart</div>
              <div className="text-white font-semibold text-lg">Bloom Boutique</div>
              <div className="text-white font-semibold text-lg">FitLife Gym</div>
              <div className="text-white font-semibold text-lg">Artisan Bakery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
           onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white text-xs mt-2 opacity-75">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;