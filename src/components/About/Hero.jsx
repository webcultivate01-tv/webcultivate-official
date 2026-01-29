// src/components/About/AboutHeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <section
      className="relative overflow-hidden pt-10 sm:pt-28 lg:pt-12 pb-20
      bg-gradient-to-br from-blue-50 via-white to-sky-50
      dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Subtle Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full
              text-sm font-semibold text-blue-600 bg-blue-100/70
              dark:text-blue-300 dark:bg-blue-900/40"
            >
              About Us
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
              text-slate-900 dark:text-white leading-tight mb-6"
            >
              WebCultivate
              <span
                className="block bg-gradient-to-r from-blue-500 to-indigo-500
                bg-clip-text text-transparent"
              >
                Software Solutions
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300
  max-w-2xl leading-relaxed mb-8"
            >
              WebCultivate Software Solutions is a modern IT company based in
              Amravati, delivering high-quality websites, scalable software
              solutions, and user-focused digital experiences. We help startups,
              businesses, and organizations build strong digital foundations and
              grow with confidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <div
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Our Approach
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Strategy • Design • Technology
                </p>
              </div>

              <div
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Our Focus
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Performance • Security • Scalability
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85"
              alt="WebCultivate Software Solutions Team"
              className="w-full max-w-md lg:max-w-lg
                rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
            />

            {/* Image Accent */}
            <div
              className="absolute -z-10 -bottom-8 -right-8 w-full h-full
              rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
