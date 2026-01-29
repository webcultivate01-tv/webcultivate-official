import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WebsiteDesignService = () => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        className="relative mb-6 overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center"
          alt="Website Design"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      </motion.div>

      <motion.div
        className="text-primary dark:text-primary-light mb-4 flex justify-center"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
        Website Design
      </h3>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-6">
        Create stunning, responsive, and user-friendly websites that perfectly
        represent your brand.
      </p>

      <ul className="space-y-2 mb-6">
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Responsive Design
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Modern UI/UX
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Brand Integration
        </li>
      </ul>

      <div className="flex gap-3 relative z-10">
        <Link
          to="/services/website-design"
          className="flex-1 text-center px-4 py-3 border-2 border-primary text-primary dark:text-primary-light font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => {
            console.log('Learn More clicked');
          }}
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer"
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => {
            console.log('Get Quote clicked');
          }}
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default WebsiteDesignService;
