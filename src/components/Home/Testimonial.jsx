// src/components/Home/TestimonialsCarousel.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Archana Pawar",
      company: "Founder of Pioneer's Hub IT Consultant",
      text: "WebCultivate transformed our online presence. Excellent work!",
      rating: 5,
    },
    {
      name: "Kartikesh Ganoskar",
      company: "Founder of Cloud Graphics Studio",
      text: "Professional team, delivered exactly what we needed.",
      rating: 5,
    },
    {
      name: "Sanchit Pardhekar",
      company: "Founder of WedClicks Photography",
      text: "Great experience working with WebCultivate team.",
      rating: 5,
    },
    {
      name: "Prarthana Tolmare",
      company: "US Technical Recruiter",
      text: "Great experience working with WebCultivate team.",
      rating: 5,
    },
    {
      name: "Nilesh Gade",
      company: "Founder of ShubMilanfilms Photography & Films",
      text: "Great experience working with WebCultivate team.",
      rating: 5,
    },
    {
      name: "Arpit Pawar",
      company: "CA",
      text: "Great experience working with WebCultivate team.",
      rating: 5,
    },
    {
      name: "Anand Mehar",
      company: "Founder of VARelators",
      text: "Great experience working with WebCultivate team.",
      rating: 5,
    },
  ];

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section className="py-20 bg-primary/5 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real feedback from satisfied customers in Amravati
          </p>
        </motion.div>

        <div className="relative">
          {/* Back Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
              bg-white dark:bg-slate-800 p-3 rounded-full shadow
              hover:bg-primary hover:text-white transition"
          >
            ‹
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center mx-10"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>

            <div>
              <h4 className="font-bold text-gray-800 dark:text-gray-100">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
              bg-white dark:bg-slate-800 p-3 rounded-full shadow
              hover:bg-primary hover:text-white transition"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
