import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Flower2 className={`h-8 w-8 ${isScrolled ? 'text-sage-600' : 'text-white'}`} />
            <span className={`text-xl font-serif ${isScrolled ? 'text-sage-900' : 'text-white'}`}>
              Sandalwood
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? 'text-sage-600 hover:text-sage-900' : 'text-white/90 hover:text-white'
                } transition-colors duration-200`}
              >
                {item}
              </a>
            ))}
            <button className={`${
              isScrolled 
                ? 'bg-sage-600 hover:bg-sage-700 text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            } px-4 py-2 rounded-full transition-all duration-300 hover:scale-105`}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}