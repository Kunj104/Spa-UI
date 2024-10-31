import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
                alt="Spa interior"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-sage-900">Our Sanctuary</h2>
            <p className="text-sage-600 leading-relaxed">
              Nestled in tranquility, Sandalwood Spa offers a haven of peace where ancient wisdom meets modern luxury. 
              Our expertly trained therapists combine traditional techniques with contemporary approaches to provide 
              a uniquely rejuvenating experience.
            </p>
            <p className="text-sage-600 leading-relaxed">
              Every treatment is personalized to meet your specific needs, ensuring a journey of complete relaxation 
              and renewal. Step into our sanctuary and let the healing begin.
            </p>
            <button className="mt-8 bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transform transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}