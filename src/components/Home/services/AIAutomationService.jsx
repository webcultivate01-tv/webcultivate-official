import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIAutomationService = () => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        className="relative mb-6 overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=250&fit=crop&crop=center"
          alt="AI Automation"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent" />
      </motion.div>

      <motion.div
        className="text-violet-600 dark:text-violet-400 mb-4 flex justify-center"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
        </svg>
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
        AI Automation
      </h3>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-6">
        Supercharge your business with AI-powered automation — save time, reduce costs, and scale faster.
      </p>

      <ul className="space-y-2 mb-6">
        {["Workflow Automation", "AI Chatbots", "Smart Analytics"].map((item) => (
          <li key={item} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-violet-600 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex gap-3 relative z-10">
        <Link
          to="/services/ai-automation"
          className="flex-1 text-center px-4 py-3 border-2 border-violet-600 text-violet-600 dark:text-violet-400 font-semibold rounded-xl hover:bg-violet-600 hover:text-white transition-all duration-300"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-600/25 transition-all duration-300"
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default AIAutomationService;
