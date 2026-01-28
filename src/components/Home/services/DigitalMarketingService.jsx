import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DigitalMarketingService = () => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div 
        className="relative mb-6 overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
          alt="Digital Marketing"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent" />
      </motion.div>

      <motion.div 
        className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
        Digital Marketing
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-6">
        Boost your online presence, drive traffic, and increase sales with our marketing solutions.
      </p>

      <ul className="space-y-2 mb-6">
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
          SEO Optimization
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
          Social Media
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
          PPC Campaigns
        </li>
      </ul>

      <Link
        to="/contact"
        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-600/25 transition-all duration-300 group-hover:scale-105"
      >
        Get Quote
      </Link>
    </motion.div>
  );
};

export default DigitalMarketingService;