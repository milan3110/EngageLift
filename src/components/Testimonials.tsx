import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Bloom Boutique",
      rating: 5,
      text: "EngageLift transformed our Instagram. More reach, more customers, and our sales have increased by 60%! Their team really understands our brand.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mike Chen",
      business: "FitLife Gym",
      rating: 5,
      text: "Affordable and effective. Highly recommend! Our membership inquiries have doubled since working with EngageLift.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Lisa Rodriguez",
      business: "Artisan Bakery",
      rating: 5,
      text: "The creativity and strategy they bring is unmatched. Our social media presence went from boring to absolutely engaging!",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "David Kumar",
      business: "Tech Repair Solutions",
      rating: 5,
      text: "Professional, data-driven, and results-focused. EngageLift helped us establish a strong online presence in our local market.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl transform transition-all duration-500">
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
                />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-blue-600 font-medium">{testimonials[currentIndex].business}</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 
                       bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 
                       hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 
                       bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 
                       hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-blue-300 hover:bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;