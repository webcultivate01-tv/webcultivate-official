import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Boxes,
  Palette,
  TrendingUp,
  Bot,
  Check,
  ArrowRight,
} from 'lucide-react';

// The first three are the headline offering and are the only ones shown on mobile.
// `to` must point at a route registered in App.jsx — services without a page yet
// send the visitor to contact rather than a dead link.
const services = [
  {
    Icon: Code2,
    title: 'Website Development',
    description:
      'Fast, secure, scalable websites built on modern frameworks — engineered to rank and to convert.',
    features: ['React & Next.js', 'Fast Performance', 'SEO Optimized'],
    to: '/services/website-development',
  },
  {
    Icon: Smartphone,
    title: 'App Development',
    description:
      'Cross-platform mobile apps for iOS and Android that your users actually keep on their home screen.',
    features: ['React Native & Flutter', 'iOS & Android', 'Custom UI/UX'],
    to: '/contact',
  },
  {
    Icon: Boxes,
    title: 'Custom Software Development',
    description:
      'Tailored internal tools, dashboards and platforms built around how your business actually runs.',
    features: ['Bespoke Platforms', 'API Integrations', 'Scalable Architecture'],
    to: '/contact',
  },
  {
    Icon: Palette,
    title: 'Website Design',
    description:
      'Conversion-first interfaces designed around your customer journey, not around a template.',
    features: ['Responsive Design', 'Modern UI/UX', 'Brand Integration'],
    to: '/services/website-design',
  },
  {
    Icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'SEO, PPC and analytics that put your business in front of buyers who are ready to act.',
    features: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing'],
    to: '/services/digital-marketing',
  },
  {
    Icon: Bot,
    title: 'AI Automation',
    description:
      'Custom AI workflows and chatbots that remove manual work from your day-to-day operations.',
    features: ['Workflow Automation', 'AI Chatbots', 'Smart Analytics'],
    to: '/services/ai-automation',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ServicesSection = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
      id="services"
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold border border-primary/20">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_100%]"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              Digital Solutions
            </motion.span>{' '}
            That Drive Results
          </h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive digital services tailored to transform your business and
            accelerate growth in the digital landscape of Amravati and beyond.
          </motion.p>
        </motion.div>

        {/* Service grid — first 3 always visible, rest from `sm` up */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map(({ Icon, title, description, features, to }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className={index > 2 ? 'hidden sm:block' : undefined}
            >
              <Link
                to={to}
                className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Accent rail — sweeps across on hover */}
                <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

                {/* Oversized index digit, sits behind the content */}
                <span className="absolute top-4 right-5 font-mono text-5xl font-bold text-slate-100 dark:text-slate-700/40 select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative flex flex-col h-full p-6 sm:p-7">
                  {/* Icon tile */}
                  <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-5">
                    {description}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                      >
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" strokeWidth={3.5} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer link */}
                  <span className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/60 inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-primary-light">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Services */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold border-2 border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/25"
          >
            View More Services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
