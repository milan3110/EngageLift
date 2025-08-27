import React from 'react';
import { Smartphone, Palette, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "Consistent posting, community engagement & brand presence",
      features: ["Build & nurture your audience", "Stress-free content scheduling", "Real-time engagement that drives loyalty"]
    },
    {
      icon: TrendingUp,
      title: "Paid Ads & Growth",
      description: "Facebook & Instagram Ads",
      features: ["Hyper-targeted audience campaigns", "Smart budget optimization", "Clear ROI & conversion tracking"]
    },
    {
      icon: Palette,
      title: "Content Strategy",
      description: "Tailored strategies to amplify your brand voice",
      features: ["Align content with your brand identity", "Creative campaigns that capture attention", "Visual storytelling that connects with your audience"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data that turns insights into action",
      features: ["Transparent ROI insights", "Detailed performance tracking", "Growth strategies backed by numbers"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive social media solutions designed to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 
                            group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={() => {
              window.location.href = 'https://wa.me/919558114763';
            }} className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold 
                           hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 
                           shadow-lg hover:shadow-xl flex items-center mx-auto gap-3">
            To Get Free Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;