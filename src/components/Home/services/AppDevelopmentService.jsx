import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AppDevelopmentService = () => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        className="relative mb-6 overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center"
          alt="App Development"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      </motion.div>

      <motion.div
        className="text-primary dark:text-primary-light mb-4 flex justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
        App Development
      </h3>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-6">
        Build powerful, cross-platform mobile apps for iOS and Android that engage your users.
      </p>

      <ul className="space-y-2 mb-6">
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          React Native & Flutter
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          iOS & Android
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Custom UI/UX
        </li>
      </ul>

      <div className="flex gap-3 relative z-10">
        <Link
          to="/contact"
          className="flex-1 text-center px-4 py-3 border-2 border-primary text-primary dark:text-primary-light font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default AppDevelopmentService;
