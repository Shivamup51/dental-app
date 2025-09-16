import React from 'react';
import { Heart, Star, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive oral health care for the whole family",
      image: "https://images.pexels.com/photos/33872067/pexels-photo-33872067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "professional dentist examining patient photo for service card - card grid service image with overlay title"
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter, confident smile",
      image: "https://images.pexels.com/photos/33916728/pexels-photo-33916728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "tooth whitening procedure photo for dental service card - cosmetic service showcase"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art technology for precise treatments",
      image: "https://images.pexels.com/photos/33841601/pexels-photo-33841601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "modern dental equipment showcase photo - services section equipment display"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care using the latest technology and techniques
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Gentle Care</h3>
            <p className="text-gray-600 text-sm">Pain-free treatments</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">5-Star Service</h3>
            <p className="text-gray-600 text-sm">Exceptional patient care</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Safe & Clean</h3>
            <p className="text-gray-600 text-sm">Sterilized environment</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Flexible Hours</h3>
            <p className="text-gray-600 text-sm">Evening & weekend appointments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;