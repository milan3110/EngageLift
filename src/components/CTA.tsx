import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-white rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 text-white animate-bounce text-[35px]">🚀</div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Lift Your Brand on Social Media?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 200+ businesses that have transformed their social media presence with EngageLift. 
            Your success story starts with a single click.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* <button className="group bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-bold 
                             hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 
                             shadow-2xl hover:shadow-3xl flex items-center gap-3">
              📩 Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
            
            <button onClick={() => {
              window.location.href = 'https://wa.me/919558114763';
            }} className="group text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold 
                             hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105">
              💬 Chat with Us on WhatsApp
            </button>
          </div>

          <p className="text-blue-200 mt-8 text-sm">
            No commitment required • Free strategy session • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;