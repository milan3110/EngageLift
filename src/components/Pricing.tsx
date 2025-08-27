import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹5,000",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "5 high-quality posts",
        "Basic social media management",
        "Community engagement",
        "Monthly analytics report",
        "Email support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Growth",
      price: "₹10,000",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "10 posts + stories",
        "Advanced social media management",
        "Paid ads management",
        "Community engagement",
        "Detailed analytics & insights",
        "Priority support"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      name: "Pro",
      price: "₹15,000",
      period: "/month",
      description: "Complete social media solution",
      features: [
        "15+ premium posts + stories",
        "Full social media management",
        "Advanced paid ads campaigns",
        "Influencer collaborations",
        "Custom content creation",
        "24/7 priority support",
        "Dedicated account manager"
      ],
      popular: false,
      buttonText: "Scale Your Business"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our proven growth strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                       transform hover:-translate-y-2 border-2 ${
                         pkg.popular ? 'border-blue-500 scale-105' : 'border-gray-100'
                       }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
            Contact us for custom pricing →
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;