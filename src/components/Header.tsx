import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, TrendingUp, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedNavItem, setSelectedItem] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    // { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setSelectedItem(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <TrendingUp className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              EngageLift
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`cursor-pointer border-none font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <div className={`h-1 rounded-xl mt-1 ${
                  selectedNavItem === item.href
                    ? 'bg-[#2e6fef]' 
                    : ''
                }`}></div>
                {/* <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : selectedNavItem === item.href ? 'bg-blue-600' : 'bg-white'
                }`}></span> */}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('#contact')}
              className={`px-6 py-3 flex items-center gap-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
              }`}
            >
              <Phone size={18} /> Contact Us
            </button>
          </div>
          {/* <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('#contact')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
              }`}
            >
              📩 Get Started
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
  className={`md:hidden transition-all duration-300 overflow-hidden -mx-6 ${
    isMenuOpen ? 'max-h-screen' : 'max-h-0'
  }`}
>
  <nav className="bg-white border-t border-gray-200 shadow-sm">
    <ul className="flex flex-col divide-y divide-gray-100">
      {navItems.map((item) => (
        <li key={item.name}>
          <button
            onClick={() => scrollToSection(item.href)}
            className="w-full text-left px-6 py-4 font-medium text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            {item.name}
          </button>
        </li>
      ))}
      <li className="p-4">
        <button
          onClick={() => scrollToSection('#contact')}
          className="w-full px-6 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          📩 Get Started
        </button>
      </li>
    </ul>
  </nav>
</div>
    </div>
    </header>
  );
};

export default Header;