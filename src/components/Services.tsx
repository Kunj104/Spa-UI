import React from 'react';
import { Flower, Feather, Droplets } from 'lucide-react';

const services = [
  {
    icon: Flower,
    title: 'Aromatherapy Massage',
    description: 'Experience deep relaxation with our signature aromatherapy massage using premium essential oils.',
    price: '$120',
    duration: '60 min'
  },
  {
    icon: Feather,
    title: 'Hot Stone Therapy',
    description: 'Ancient healing technique using smooth, heated stones to melt away tension.',
    price: '$150',
    duration: '90 min'
  },
  {
    icon: Droplets,
    title: 'Luxury Facial',
    description: 'Rejuvenate your skin with our premium facial treatment using organic products.',
    price: '$95',
    duration: '45 min'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-sage-900 mb-4">Our Services</h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Immerse yourself in tranquility with our carefully curated spa treatments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-sage-50 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-12 w-12 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <service.icon className="h-6 w-6 text-sage-600" />
              </div>
              <h3 className="text-xl font-medium text-sage-900 mb-3">{service.title}</h3>
              <p className="text-sage-600 mb-6">{service.description}</p>
              <div className="flex justify-between items-center text-sage-700">
                <span className="font-medium">{service.price}</span>
                <span className="text-sm">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}