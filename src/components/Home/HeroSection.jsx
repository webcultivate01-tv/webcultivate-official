import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.webp";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut",
        delay: 0.5,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "backOut",
        delay: 0.8,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-1/2 -right-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-1/2 -left-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-secondary/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Helping Businesses Grow{" "}
                <motion.span
                  className="relative inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Through Smart Digital Solutions
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-9 leading-relaxed"
              variants={itemVariants}
            >
              We build high-performing websites, custom software, and digital
              solutions that help businesses attract more customers, increase
              sales, and grow faster.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-6 sm:mb-8 md:mb-9"
              variants={statsVariants}
            >
              <motion.div
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  20+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </motion.div>
              <motion.div
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  10+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Clients
                </div>
              </motion.div>
              <motion.div
                className="text-center lg:text-left"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-primary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  2+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 transition-all duration-400 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/work-process"
                  className="inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base rounded-xl font-semibold text-primary dark:text-primary-light bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/35"
                >
                  View Our Process
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section */}
          {/* Right Section – Fixed Corporate Image Layout */}
          <div
            className="relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px]
                flex items-center justify-center order-1 lg:order-2"
          >
            {/* Main Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85"
              alt="Professional Web Dashboard"
              className="relative z-10 w-[230px] sm:w-[290px] md:w-[330px] lg:w-[380px]
               rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Left Top Image */}
            <motion.img
              src="./hhero1.jpg"
              alt="Analytics Dashboard"
              className="absolute top-[6%] left-[6%]
               w-[120px] sm:w-[150px] md:w-[170px]
               rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 bg-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            />

            {/* Right Top Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500&q=85"
              alt="Landing Page UI"
              className="absolute top-[10%] right-[6%]
               w-[120px] sm:w-[150px] md:w-[170px]
               rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 bg-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />

            {/* Bottom Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=85"
              alt="Mobile App Interface"
              className="absolute bottom-[8%] left-[20%]
               w-[120px] sm:w-[150px] md:w-[170px]
               rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />

            {/* Subtle Background Glow (STATIC) */}
            <div
              className="absolute -z-10 w-[360px] h-[360px] sm:w-[460px] sm:h-[460px]
                  bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                  rounded-full blur-[120px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
