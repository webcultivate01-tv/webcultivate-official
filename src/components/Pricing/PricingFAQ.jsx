import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you offer custom packages?',
    answer: 'Yes! We can create custom packages tailored to your specific requirements. Contact us to discuss your needs.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. Payment terms can be discussed during consultation.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No hidden fees! The price you see includes everything mentioned in the package features.'
  },
  {
    question: 'What happens after the support period?',
    answer: 'You can purchase extended support or maintenance packages. We are always here to help you grow.'
  },
  {
    question: 'Are there any special discounts or early bird offers?',
    answer: 'Yes! We offer limited-time early bird discounts and bundle packages for group registrations. Be sure to sign up early to grab the best deals.'
  }
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Everything you need to know about our pricing and services
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-slate-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b30_1px,transparent_1px),linear-gradient(to_bottom,#1e293b30_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 mb-5">
            Free consultation · No obligation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Still deciding which package fits?
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your business and we'll recommend the right package — with a clear scope,
            timeline, and quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-lg transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default PricingFAQ;
