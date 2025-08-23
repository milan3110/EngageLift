import React from 'react';
import { Star, Target, Brain, Building2 } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Target,
      title: "Not just posts – we deliver results",
      description: "Every post, story, and campaign is strategically designed to drive meaningful engagement and conversions."
    },
    {
      icon: Brain,
      title: "Creative + Data-driven approach",
      description: "We combine artistic creativity with analytical insights to create content that both inspires and performs."
    },
    {
      icon: Building2,
      title: "We understand small businesses & startups",
      description: "Having worked with 100+ small businesses, we know the unique challenges and opportunities you face."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another social media agency. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                       transition-all duration-500 transform hover:-translate-y-4 
                       border border-gray-100 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-blue-500 mr-2" />
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center 
                              group-hover:bg-blue-500 transition-colors duration-300 group-hover:scale-110">
                  <reason.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;