import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Business Portfolio',
    price: '₹15,999',
    period: 'one-time',
    description: 'Perfect showcase for your business identity',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=440&fit=crop&crop=center',
    features: [
      '5-7 professional pages',
      'Modern responsive design',
      'Business gallery showcase',
      'Contact & inquiry forms',
      'Google Maps integration',
      'Social media links',
      'Basic SEO optimization',
      'Free domain for 1 year',
      'Business email for 1 year',
      'Web hosting for 1 year',
      '3 months free support'
    ],
    popular: false
  },
  {
    name: 'E-Commerce Starter',
    price: '₹29,999',
    period: 'one-time',
    description: 'Complete online store solution',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=440&fit=crop&crop=center',
    features: [
      'Up to 50 products',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Order management system',
      'Customer accounts',
      'Inventory management',
      'Mobile-optimized design',
      'Free domain for 1 year',
      'Business email for 1 year',
      'Web hosting for 1 year',
      '6 months support & training'
    ],
    popular: true
  },
  {
    name: 'Professional Website',
    price: '₹45,999',
    period: 'one-time',
    description: 'Advanced business website with CMS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=440&fit=crop&crop=center',
    features: [
      'Unlimited pages',
      'Custom CMS dashboard',
      'Advanced SEO features',
      'Blog & news section',
      'Analytics integration',
      'Performance optimization',
      'Security features',
      'Free domain for 1 year',
      'Business email for 1 year',
      'Web hosting for 1 year',
      '1 year support & maintenance'
    ],
    popular: false
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom Quote',
    period: 'project-based',
    description: 'Tailored solutions for large businesses',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=440&fit=crop&crop=center',
    features: [
      'Custom web application',
      'Advanced integrations',
      'Multi-user dashboard',
      'API development',
      'Database design',
      'Cloud deployment',
      'Dedicated project manager',
      'Free domain for 1 year',
      'Business email for 1 year',
      'Web hosting for 1 year',
      'Ongoing support & updates'
    ],
    popular: false
  }
];

const assurances = ['No Hidden Costs', 'Money Back Guarantee', '24/7 Support'];

const PricingCards = () => {
  return (
    <>
      {/* ================= HERO — dark, editorial, package-index style ================= */}
      <section className="relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b30_1px,transparent_1px),linear-gradient(to_bottom,#1e293b30_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -top-24 right-0 w-[520px] h-[520px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">

            {/* Left — statement */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="h-px w-12 bg-blue-500" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400">
                  Pricing Plans
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold text-white tracking-tight leading-[1.05] mb-7"
              >
                Choose Your
                <br />
                Perfect <span className="text-blue-500">Package</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10"
              >
                Transparent pricing with no hidden costs. Choose the package that fits your business needs in Amravati.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#pricing-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-lg transition-colors duration-300"
                >
                  Compare Packages
                </a>
              </motion.div>
            </div>

            {/* Right — package index */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur divide-y divide-slate-800/80 overflow-hidden">
                <div className="px-6 py-4 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">Package Index</span>
                  <span className="text-xs text-slate-600">{String(plans.length).padStart(2, '0')} packages</span>
                </div>
                {plans.map((plan, i) => (
                  <a
                    key={plan.name}
                    href="#pricing-grid"
                    className="group flex items-center gap-4 px-6 py-[15px] hover:bg-slate-800/50 transition-colors duration-200"
                  >
                    <span className="text-xs font-mono text-slate-600 group-hover:text-blue-500 transition-colors w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-[15px] font-medium text-slate-300 group-hover:text-white transition-colors">
                      {plan.name}
                    </span>
                    {plan.popular && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-blue-500/10 border border-blue-500/25 text-blue-400">
                        Popular
                      </span>
                    )}
                    <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE GRID ================= */}
      <section id="pricing-grid" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
                className={`group relative flex flex-col h-full bg-white dark:bg-slate-950 border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 ${
                  plan.popular
                    ? 'border-blue-500 dark:border-blue-500 ring-1 ring-blue-500/30 shadow-lg shadow-blue-500/5'
                    : 'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-blue-600 text-white">
                    Most Popular
                  </span>
                )}

                {/* Package image */}
                <div className="relative h-44 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-slate-950/20" />
                  <span className="absolute top-4 left-4 text-xs font-mono text-white/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg text-sm font-semibold mt-auto transition-colors duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6 bg-slate-50 dark:bg-slate-900/50"
          >
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center lg:text-left">
              All packages include free consultation and project planning
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {assurances.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={3} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PricingCards;
