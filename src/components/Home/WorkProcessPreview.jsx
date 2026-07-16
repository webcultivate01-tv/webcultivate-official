import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Gauge,
  Rocket,
  ArrowRight,
  Clock,
} from 'lucide-react';

// Each step names the visitor's deliverable — the thing they actually receive —
// so the process reads as accountability rather than as internal jargon.
const workProcess = [
  {
    step: '01',
    Icon: Search,
    title: 'Discovery',
    description:
      'We map your goals, customers and competitors before a single pixel is drawn.',
    deliverable: 'Project roadmap & quote',
    duration: '2–3 days',
  },
  {
    step: '02',
    Icon: PenTool,
    title: 'Design',
    description:
      'Wireframes and UI designs built around your customer journey, revised until you approve.',
    deliverable: 'Clickable prototype',
    duration: '1–2 weeks',
  },
  {
    step: '03',
    Icon: Code2,
    title: 'Development',
    description:
      'Clean, documented code shipped in weekly builds you can review as we go.',
    deliverable: 'Weekly staging builds',
    duration: '2–6 weeks',
  },
  {
    step: '04',
    Icon: ShieldCheck,
    title: 'Testing',
    description:
      'Every browser, device and edge case checked — plus security and accessibility passes.',
    deliverable: 'QA & test report',
    duration: '3–5 days',
  },
  {
    step: '05',
    Icon: Gauge,
    title: 'Optimization',
    description:
      'Speed, SEO and conversion tuning so the site performs from day one, not month six.',
    deliverable: 'Speed & SEO audit',
    duration: '2–4 days',
  },
  {
    step: '06',
    Icon: Rocket,
    title: 'Launch & Support',
    description:
      'We deploy, hand over every account in your name, and stay on for 30 days free.',
    deliverable: 'Full handover + 30-day support',
    duration: 'Ongoing',
  },
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

const WorkProcessPreview = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Static background glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
            Our Process
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Six steps.{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Zero surprises.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            You'll always know what stage your project is in, what you'll receive next,
            and when. No black boxes, no silent weeks, no invoice you didn't expect.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Rail behind the top row — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />

          {workProcess.map(({ step, Icon, title, description, deliverable, duration }) => (
            <motion.div
              key={step}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Accent rail — sweeps across on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

              {/* Oversized step digit, sits behind the content */}
              <span className="absolute top-4 right-5 font-mono text-5xl font-bold text-slate-100 dark:text-slate-700/40 select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/10">
                {step}
              </span>

              <div className="relative flex flex-col h-full p-6 sm:p-7">
                {/* Icon tile */}
                <span className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {description}
                </p>

                {/* What you get, and when */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 pt-0.5 flex-shrink-0">
                      You get
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 text-right ml-auto">
                      {deliverable}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    {duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing link — the homepage's single CTA lives at the bottom of the page. */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link
            to="/work-process"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-primary-light hover:gap-2.5 transition-all duration-300"
          >
            See the full process in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcessPreview;
