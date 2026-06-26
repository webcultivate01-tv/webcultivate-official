// src/components/About/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE_STATS } from "../../constants/stats";

const statCard = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold
              text-slate-900 dark:text-white leading-tight mb-6"
            >
              Websites That{" "}
              <span
                className="bg-gradient-to-r from-blue-500 to-indigo-500
                bg-clip-text text-transparent"
              >
                Grow Your Business
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300
              max-w-2xl leading-relaxed mb-8"
            >
              WebCultivate Software Solutions is Amravati's trusted digital
              partner — delivering high-quality websites, scalable software, and
              user-focused digital experiences that convert visitors into paying
              clients.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">Our Approach</p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Strategy • Design • Technology
                </p>
              </div>
              <div
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">Our Focus</p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Performance • Security • Scalability
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
              font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500
              shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40
              transition-all duration-300"
            >
              Get a Free Consultation →
            </Link>
          </motion.div>

          {/* Right: Image + Stat Cards below */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="WebCultivate Software Solutions Team"
                className="w-full rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 object-cover max-h-72 lg:max-h-80"
              />
              <div
                className="absolute -z-10 -bottom-6 -right-6 w-full h-full
                rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl"
              />
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-4">
              {SITE_STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={statCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur
                    border border-slate-200 dark:border-slate-700
                    rounded-2xl p-4 text-center shadow-lg"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
