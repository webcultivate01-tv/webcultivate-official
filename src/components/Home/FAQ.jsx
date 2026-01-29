// src/components/Home/FAQSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically 2-6 weeks depending on complexity and requirements.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support and maintenance packages.",
    },
    {
      question: "What's included in your web development service?",
      answer:
        "Design, development, testing, deployment, and 3 months free support.",
    },
    {
      question: "Do you work with businesses in Amravati?",
      answer:
        "Yes, we specialize in serving businesses in Amravati and surrounding areas.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-primary"
                >
                  ↓
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
