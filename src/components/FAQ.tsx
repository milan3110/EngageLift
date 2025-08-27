import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long before I see results?",
      answer: "Most clients notice improvements in engagement within 4–6 weeks, with measurable growth in 2–3 months. However, building a strong social media presence is a marathon, not a sprint. Consistent, strategic efforts compound over time for sustainable growth."
    },
    {
      question: "Do you guarantee followers?",
      answer: "We don't sell followers — we grow your account organically and via strategic paid advertising, ensuring genuine engagement from your target audience. Our focus is on quality growth that translates to real business results, not vanity metrics."
    },
    {
      question: "Can I customize my package?",
      answer: "Absolutely! We understand that every business is unique. We offer flexible plans and can customize services based on your specific needs, goals, budget, and industry requirements. Let's discuss what works best for you."
    },
    {
      question: "Do I need to provide content?",
      answer: "Not necessarily. We can create, edit, and manage all content for you from scratch. However, if you already have brand assets, product photos, or specific content ideas, we'll incorporate them into our strategy to maintain brand consistency."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "We recommend a minimum of 3 months to see significant results and properly execute our growth strategies. However, our packages are flexible, and we can discuss terms that work for your business needs and goals."
    },
    {
      question: "Which platforms do you manage?",
      answer: "We specialize in Instagram, Facebook, LinkedIn, and Twitter. We can also help with TikTok and YouTube depending on your target audience and business objectives. We'll recommend the best platforms for your specific industry and goals."
    },
    {
      question: "How do you measure success?",
      answer: "We track multiple KPIs including engagement rate, reach, follower growth, website traffic from social media, lead generation, and ultimately, ROI. You'll receive detailed monthly reports showing your progress and insights for continued growth."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer flex items-center justify-between p-6 text-left hover:bg-gray-100 
                           rounded-xl transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                  />
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="px-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;