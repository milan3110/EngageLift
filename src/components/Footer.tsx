import React from 'react';
import { Instagram, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Social Media Management", href: "#services" },
        { name: "Content Strategy", href: "#services" },
        { name: "Paid Advertising", href: "#services" },
        { name: "Analytics & Reporting", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Work", href: "#portfolio" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "Pricing", href: "#pricing" },
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#portfolio" }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/engagelift",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/engagelift",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:contact.engagelift@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                <span className="font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold">EngageLift</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping brands grow on social media through strategic content, 
              creative campaigns, and data-driven insights.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center 
                           hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 
                               hover:underline text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Tips</h3>
            <p className="text-gray-400 mb-6">
              Get weekly social media insights and growth strategies delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none 
                         transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 EngageLift. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full 
                 shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 
                 transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;