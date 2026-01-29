import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const statCard = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutSection = () => {
  return (
    <>
      <Helmet>
        <title>
          About WebCultivate - Leading Web Development Company in Amravati
        </title>
        <meta
          name="description"
          content="WebCultivate is Amravati's premier web development company specializing in modern websites, digital solutions, and business growth."
        />
        <meta
          name="keywords"
          content="web development Amravati, website design Amravati, digital agency Amravati, software company Amravati"
        />
        <link rel="canonical" href="https://www.webcultivate.com/about" />
      </Helmet>

      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold
                text-blue-600 bg-blue-100/70 dark:text-blue-300 dark:bg-blue-900/40"
              >
                About WebCultivate
              </span>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                text-slate-900 dark:text-white leading-tight mb-6"
              >
                Let’s Build Your
                <span
                  className="block bg-gradient-to-r from-blue-500 to-indigo-500
                  bg-clip-text text-transparent"
                >
                  Digital Presence Together
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-5 leading-relaxed max-w-2xl">
                WebCultivate Software Solutions is a modern IT company based in
                Amravati, delivering high-quality websites, scalable software
                solutions, and user-focused digital experiences for startups and
                growing businesses.
              </p>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Our team blends creativity with technology to build reliable,
                secure, and performance-driven digital products that help
                businesses grow with confidence.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
                  font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500
                  shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40
                  transition-all duration-300"
              >
                Learn More About Us →
              </Link>
            </motion.div>

            {/* Right Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "20+", label: "Projects Completed" },
                { value: "10+", label: "Happy Clients" },
                { value: "2+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={statCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur
                    border border-slate-200 dark:border-slate-700
                    rounded-2xl p-6 text-center shadow-lg"
                >
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
