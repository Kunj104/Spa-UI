import React from 'react';
import { Flower2, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flower2 className="h-8 w-8" />
              <span className="text-xl font-serif">Sandalwood</span>
            </div>
            <p className="text-sage-300">
              Your sanctuary for peace and rejuvenation
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sage-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sage-300">
              <li>123 Serenity Lane</li>
              <li>Peaceful City, PC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@sandalwoodspa.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="h-10 w-10 bg-sage-800 rounded-full flex items-center justify-center hover:bg-sage-700 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-sage-800 text-center text-sage-400">
          <p>&copy; {new Date().getFullYear()} Sandalwood Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}