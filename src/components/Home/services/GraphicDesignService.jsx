import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GraphicDesignService = () => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div 
        className="relative mb-6 overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=center"
          alt="Graphic Design"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
      </motion.div>

      <motion.div 
        className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
        Graphic Design
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-6">
        Creative designs that visually communicate your brand's story and identity effectively.
      </p>

      <ul className="space-y-2 mb-6">
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
          Logo Design
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
          Brand Identity
        </li>
        <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
          Print Design
        </li>
      </ul>

      <div className="flex gap-3 relative z-10">
        <Link
          to="/services/graphic-design"
          className="flex-1 text-center px-4 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default GraphicDesignService;