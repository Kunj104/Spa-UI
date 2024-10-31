import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-sage-900/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            <span className="block transform hover:translate-x-2 transition-transform duration-300">
              Discover Inner Peace
            </span>
            <span className="block mt-2 font-serif transform hover:translate-x-2 transition-transform duration-300">
              at Sandalwood Spa
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-sage-50 max-w-3xl mx-auto leading-relaxed">
            Experience the ancient art of relaxation through our carefully curated treatments
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <button className="group bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105">
              Book Now
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transform transition-all duration-300 hover:scale-105">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}