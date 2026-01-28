import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      
      {/* Background Image (CRISP) */}
      <img
        src="/CTA.webp"
        alt="Call to Action Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* Gradient Overlay (light, not blurry) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/70 
                      dark:from-black/70 dark:via-black/50 dark:to-black/70"></div>

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 
                     bg-gradient-to-r from-primary via-secondary to-primary 
                     bg-clip-text text-transparent"
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-800 dark:text-gray-200"
        >
          Let’s build something impactful, scalable, and future-ready together 🚀
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center px-10 py-4 
                       text-lg font-semibold text-white rounded-2xl 
                       bg-gradient-to-r from-primary to-secondary 
                       shadow-xl shadow-primary/40 hover:shadow-2xl 
                       transition-all duration-300 overflow-hidden group"
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                             -translate-x-full group-hover:translate-x-full 
                             transition-transform duration-700"></span>

            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
