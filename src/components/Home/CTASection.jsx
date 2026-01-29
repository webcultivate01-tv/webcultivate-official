import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Background Image – CRISP */}
      <img
        src="/CTA.webp"
        alt="Call to Action Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* Light Color Overlay (NO BLUR on image) */}
      <div
        className="absolute inset-0 bg-gradient-to-br 
        from-blue-950/65 via-blue-900/50 to-indigo-900/65"
      />

      {/* Soft Animated Glows (blur allowed here) */}
      <motion.div
        className="absolute -top-40 -left-40 w-[28rem] h-[28rem] 
                   bg-blue-500/30 rounded-full blur-[160px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] 
                   bg-indigo-500/30 rounded-full blur-[160px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6
                     bg-gradient-to-r from-blue-200 via-sky-300 to-indigo-300
                     bg-clip-text text-transparent"
        >
          Ready to Build Something Exceptional?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl mb-12 
                     text-blue-100/90 max-w-3xl mx-auto"
        >
          We help startups and businesses design, develop, and scale
          high-performance digital products.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center 
              px-12 py-4 text-lg font-semibold rounded-2xl text-blue-950
              bg-gradient-to-r from-sky-400 to-blue-500
              shadow-[0_18px_36px_-12px_rgba(56,189,248,0.45)]
              hover:shadow-[0_24px_48px_-12px_rgba(56,189,248,0.65)]
              transition-all duration-300 overflow-hidden group"
          >
            {/* Shine sweep */}
            <span
              className="absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/35 to-transparent
              -translate-x-full group-hover:translate-x-full 
              transition-transform duration-700"
            />

            <span className="relative z-10 flex items-center gap-3">
              Get in Touch
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
