import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-5 md:mb-6">Let's Build Your Digital Presence Together</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              At WebCultivate, we specialize in crafting powerful, user-friendly, and visually 
              stunning websites tailored to your unique business objectives. Whether you're a 
              startup or an established brand, we bring your digital vision to life through 
              modern design, robust development, and result-driven strategies.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              Our team combines creativity and technical expertise to deliver seamless experiences 
              that captivate your audience and drive results. Let's collaborate and turn your ideas 
              into a high-performing digital reality.
            </p>
            <Link to="/about" className="inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400">
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 order-1 lg:order-2">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-3xl text-center sm:text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-3xl sm:text-4xl text-center font-bold text-primary mb-2">5+</h3>
              <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-3xl sm:text-4xl text-center font-bold text-primary mb-2">2+</h3>
              <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
