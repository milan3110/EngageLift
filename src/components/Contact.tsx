import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Linkedin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', businessName: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email Us",
      value: "contact.engagelift@gmail.com",
      action: "mailto:contact.engagelift@gmail.com"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with our team",
      action: "https://wa.me/1234567890"
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98765 43210",
      action: "tel:+919876543210"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/engagelift"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/company/engagelift"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your social media presence? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300
                             placeholder-transparent peer"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 
                                 transition-all duration-300 peer-placeholder-shown:text-base 
                                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 
                                 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                    Your Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300
                             placeholder-transparent peer"
                    placeholder="Email Address"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 
                                 transition-all duration-300 peer-placeholder-shown:text-base 
                                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 
                                 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                    Email Address *
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300
                           placeholder-transparent peer"
                  placeholder="Business Name"
                />
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 
                               transition-all duration-300 peer-placeholder-shown:text-base 
                               peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 
                               peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                  Business Name
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300
                           placeholder-transparent peer resize-none"
                  placeholder="Tell us about your business and goals"
                ></textarea>
                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 
                               transition-all duration-300 peer-placeholder-shown:text-base 
                               peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 
                               peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                  Tell us about your business and goals *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold
                         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                         shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg 
                             transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <method.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{method.label}</p>
                      <p className="text-gray-600">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center 
                             hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-600 text-sm">
                We respond to all inquiries within 24 hours. For urgent matters, 
                reach out via WhatsApp for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;