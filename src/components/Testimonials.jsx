import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The best dental experience I've ever had! Dr. Smith and the entire team made me feel so comfortable. My teeth have never looked better.",
      image: "https://images.pexels.com/photos/7697400/pexels-photo-7697400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "smiling patient in dental chair photo for dental website - hero banner showing patient comfort"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Professional, caring, and thorough. They explained everything clearly and made sure I was comfortable throughout the entire procedure.",
      image: "https://images.pexels.com/photos/7697400/pexels-photo-7697400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "smiling patient in dental chair photo for dental website - hero banner showing patient comfort"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "I used to be terrified of dentists, but BrightSmile changed that completely. Now I actually look forward to my appointments!",
      image: "https://images.pexels.com/photos/7697400/pexels-photo-7697400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "smiling patient in dental chair photo for dental website - hero banner showing patient comfort"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Happy Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;