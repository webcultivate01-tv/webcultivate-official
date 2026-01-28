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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
        delay: 0.5
      }
    }
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
        delay: 0.8
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute -top-1/2 -right-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-1/2 -left-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-secondary/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
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
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Transform Your Business with{" "}
                <motion.span 
                  className="relative inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Digital Excellence
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-9 leading-relaxed"
              variants={itemVariants}
            >
              WebCultivate delivers cutting-edge web solutions, innovative app development, 
              and strategic digital marketing to elevate your brand in Amravati and beyond.
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
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
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
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
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
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
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
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center order-1 lg:order-2">
            {/* Floating Icons with Enhanced Animations */}
            <motion.div 
              className="absolute w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border border-gray-200 dark:border-slate-700 top-[10%] sm:top-[20%] left-[5%] sm:left-[10%]"
              variants={floatingVariants}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <motion.svg
                className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </motion.svg>
            </motion.div>

            <motion.div 
              className="absolute w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border border-gray-200 dark:border-slate-700 top-[60%] sm:top-[60%] right-[5%] sm:right-[10%]"
              variants={floatingVariants}
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              whileHover={{ scale: 1.1, rotate: -15 }}
            >
              <motion.svg
                className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </motion.svg>
            </motion.div>

            <motion.div 
              className="absolute w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border border-gray-200 dark:border-slate-700 bottom-[10%] sm:bottom-[20%] left-[15%] sm:left-[20%]"
              variants={floatingVariants}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
              whileHover={{ scale: 1.1, rotate: 25 }}
            >
              <motion.svg
                className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </motion.svg>
            </motion.div>

            {/* Center Circle with Logo */}
            <motion.div 
              className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center"
              variants={logoVariants}
            >
              {/* Animated Background Rings */}
              <motion.div 
                className="absolute w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              />

              <motion.div 
                className="absolute -inset-3 sm:-inset-4 md:-inset-5 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                }}
              />

              {/* WebCultivate logo */}
              <motion.img
                src={logo}
                alt="WebCultivate Logo"
                className="w-full h-full object-contain relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(37, 99, 235, 0.5))",
                    "drop-shadow(0 0 20px rgba(37, 99, 235, 0.8))",
                    "drop-shadow(0 0 0px rgba(37, 99, 235, 0.5))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
