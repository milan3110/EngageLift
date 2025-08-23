import React from 'react';
import { CheckCircle, Heart, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "Affordable packages for small businesses",
      description: "Tailored solutions that fit your budget"
    },
    {
      icon: Heart,
      title: "Personal attention for every client",
      description: "Dedicated account manager for your success"
    },
    {
      icon: TrendingUp,
      title: "Proven growth strategies",
      description: "Data-driven approach with measurable results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About EngageLift
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            At EngageLift, we help businesses turn followers into paying customers by combining 
            creativity, strategy, and data.
          </p>
          
          <div className="bg-blue-50 p-8 rounded-2xl mb-12 border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 font-medium">
              Our mission is simple: Make social media work for your business — not the other way around.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-2 cursor-pointer border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 
                              group-hover:bg-blue-500 transition-colors duration-300">
                  <highlight.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;