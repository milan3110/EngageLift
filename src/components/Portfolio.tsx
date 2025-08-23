import React from 'react';
import { TrendingUp, Users, Heart } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      company: "XYZ Café",
      industry: "Food & Beverage",
      timeframe: "4 months",
      metrics: [
        { icon: Users, label: "Followers", before: "2,000", after: "10,000", growth: "+400%" },
        { icon: Heart, label: "Engagement", before: "3.2%", after: "8.7%", growth: "+172%" },
        { icon: TrendingUp, label: "Sales", before: "Baseline", after: "+40%", growth: "+40%" }
      ],
      description: "XYZ Café transformed their Instagram presence with EngageLift's strategic approach, resulting in significant follower growth and increased sales."
    },
    {
      company: "TechStart Solutions",
      industry: "Technology",
      timeframe: "6 months",
      metrics: [
        { icon: Users, label: "Followers", before: "500", after: "5,200", growth: "+940%" },
        { icon: Heart, label: "Engagement", before: "2.1%", after: "12.4%", growth: "+490%" },
        { icon: TrendingUp, label: "Leads", before: "5/month", after: "45/month", growth: "+800%" }
      ],
      description: "A B2B tech startup that needed to establish thought leadership and generate quality leads through social media."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped our clients achieve remarkable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg 
                       hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                  <p className="text-blue-600 font-medium">{study.industry}</p>
                </div>
                <div className="bg-blue-100 px-4 py-2 rounded-full">
                  <span className="text-blue-700 font-semibold">{study.timeframe}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">{study.description}</p>

              <div className="grid grid-cols-3 gap-4">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <metric.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">Before: {metric.before}</p>
                      <p className="text-sm font-semibold text-gray-900">After: {metric.after}</p>
                      <p className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {metric.growth}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;