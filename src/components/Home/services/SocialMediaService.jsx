import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialMediaService = () => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        className="relative mb-6 overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop&crop=center"
          alt="Social Media Management"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
      </motion.div>

      <motion.div
        className="text-pink-600 dark:text-pink-400 mb-4 flex justify-center"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
        Social Media Management
      </h3>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-6">
        Build a powerful social presence, engage your audience, and grow your brand across all platforms.
      </p>

      <ul className="space-y-2 mb-6">
        {["Content Creation", "Community Engagement", "Paid Ad Campaigns"].map((item) => (
          <li key={item} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex gap-3 relative z-10">
        <Link
          to="/services/social-media"
          className="flex-1 text-center px-4 py-3 border-2 border-pink-600 text-pink-600 dark:text-pink-400 font-semibold rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-600/25 transition-all duration-300"
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default SocialMediaService;
