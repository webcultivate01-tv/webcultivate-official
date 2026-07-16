import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessagesSquare,
  CalendarCheck,
  KeyRound,
  LifeBuoy,
  TrendingUp,
  Target,
  Zap,
  Star,
  Quote,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { SITE_STATS } from '../../constants/stats';

// The objections a prospect actually has before signing — each answered by how we work.
const differentiators = [
  {
    Icon: MessagesSquare,
    title: 'You talk to the people building it',
    description:
      'No account managers relaying messages. Direct access to the developers and designers on your project.',
  },
  {
    Icon: CalendarCheck,
    title: 'Fixed scope, fixed timeline',
    description:
      'You get a written scope and delivery date before we start — not a moving target and a growing invoice.',
  },
  {
    Icon: KeyRound,
    title: 'You own everything',
    description:
      'Code, hosting, domains and analytics are handed over in your name. No lock-in, no hostage situations.',
  },
  {
    Icon: LifeBuoy,
    title: 'We stay after launch',
    description:
      '30 days of free post-launch support, then optional maintenance. Launch day is the start, not the exit.',
  },
];

// Outcome metrics shown in the proof panel. These mirror the figures used on the hero
// so the same claims appear consistently across the homepage.
const outcomes = [
  { Icon: TrendingUp, value: '+340%', label: 'Avg. traffic growth', iconClass: 'text-primary' },
  { Icon: Target, value: '+2.8×', label: 'Conversion rate', iconClass: 'text-amber-500' },
  { Icon: Zap, value: '< 1.2s', label: 'Page load speed', iconClass: 'text-emerald-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const GrowthSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Static background glows — no animation loop, keeps the section calm */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ── LEFT: the pitch ── */}
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-block mb-5 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/20"
            >
              Why WebCultivate
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-900 dark:text-white mb-5 leading-[1.15] tracking-tight"
            >
              Growth you can measure,{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                not guess
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl"
            >
              Most agencies sell you a website. We build a business asset — then prove it
              works with traffic, leads and revenue you can see in your own dashboard.
              Here's what that looks like in practice.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {differentiators.map(({ Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work-process"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold border-2 border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white transition-all duration-300"
              >
                See How We Work
              </Link>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              30-minute call · Free project roadmap · No obligation
            </motion.p>
          </div>

          {/* ── RIGHT: the proof ── */}
          <motion.div variants={itemVariants} className="lg:pl-4">
            <div className="rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-900/5 overflow-hidden">
              {/* Outcome metrics */}
              <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-700/60">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
                  What clients typically see
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {outcomes.map(({ Icon, value, label, iconClass }) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60 p-4 text-center"
                    >
                      <Icon className={`w-5 h-5 mx-auto mb-2.5 ${iconClass}`} strokeWidth={1.75} />
                      <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none">
                        {value}
                      </p>
                      <p className="mt-1.5 text-[10px] leading-tight text-slate-500 dark:text-slate-400">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client quote */}
              <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-700/60 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 dark:text-primary/20" />
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed mb-5">
                  "WebCultivate transformed our online presence. Excellent work!"
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold flex-shrink-0">
                    AP
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Archana Pawar
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Founder, Pioneer's Hub IT Consultant
                    </p>
                  </div>
                </figcaption>
              </div>

              {/* Track record */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-700/60 bg-slate-50/50 dark:bg-slate-900/30">
                {SITE_STATS.map(({ value, label }) => (
                  <div key={label} className="px-3 py-5 text-center">
                    <p className="text-xl sm:text-2xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent leading-none">
                      {value}
                    </p>
                    <p className="mt-1.5 text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/testimonials"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-primary-light hover:gap-2.5 transition-all duration-300"
            >
              Read all client reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthSection;
