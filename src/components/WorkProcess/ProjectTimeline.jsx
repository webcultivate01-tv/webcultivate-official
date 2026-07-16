import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Building2, ShoppingCart, Boxes, Check, ArrowRight } from 'lucide-react';

const timelines = [
  {
    Icon: FileText,
    projectType: 'Landing Page',
    duration: '1–2 weeks',
    description:
      'A single focused page built to convert — ideal for a product launch, campaign or event.',
    features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Contact form'],
  },
  {
    Icon: Building2,
    projectType: 'Business Website',
    duration: '3–4 weeks',
    description:
      'A multi-page site that explains who you are and what you sell, with content you can edit yourself.',
    features: ['5–10 pages', 'CMS integration', 'Blog section', 'Analytics setup'],
  },
  {
    Icon: ShoppingCart,
    projectType: 'E-Commerce Platform',
    duration: '6–8 weeks',
    description:
      'A full online store with payments, inventory and customer accounts wired up end to end.',
    features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Admin dashboard'],
  },
  {
    Icon: Boxes,
    projectType: 'Custom Web Application',
    duration: '8–12 weeks',
    description:
      'Bespoke software built around how your business actually runs, not around a template.',
    features: ['Custom features', 'Database design', 'User authentication', 'API integration'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectTimeline = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
            Timelines
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            How long will it take?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Real timeframes from projects we've delivered. Your exact date is fixed in
            writing at the Discovery stage — before you pay anything.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {timelines.map(({ Icon, projectType, duration, description, features }) => (
            <motion.div
              key={projectType}
              variants={itemVariants}
              className="group relative rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white truncate">
                      {projectType}
                    </h3>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-xs whitespace-nowrap flex-shrink-0">
                    {duration}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {description}
                </p>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-700/60">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Included
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <span className="flex items-center justify-center w-4 h-4 mt-0.5 rounded-full bg-primary/10 flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom timeline note */}
        <motion.div
          className="mt-8 sm:mt-10 rounded-2xl bg-gradient-to-r from-primary/[0.07] to-secondary/[0.07] dark:from-primary/10 dark:to-secondary/10 border border-primary/20 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              Something that doesn't fit the list?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Most projects don't, exactly. Tell us what you're building and we'll come
              back with a stage-by-stage schedule and a fixed quote — free, no obligation.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 whitespace-nowrap"
          >
            Get a timeline estimate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
