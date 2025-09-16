import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About BrightSmile Dental</h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, BrightSmile Dental has been providing exceptional dental care to families in our community. Our state-of-the-art facility and experienced team are dedicated to helping you achieve optimal oral health.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We combine advanced technology with compassionate care to ensure every visit is comfortable and effective. From routine cleanings to complex procedures, we're here to support your dental health journey.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">5,000+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="text-gray-600">Emergency Care</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="dental team group photo in clinic for healthcare website - about us team introduction"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl">
              <p className="text-sm font-semibold">Award Winning</p>
              <p className="text-xs">Dental Practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;