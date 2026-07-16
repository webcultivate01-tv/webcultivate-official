import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, ShieldCheck, Check } from 'lucide-react';

const methodologies = [
  {
    Icon: Zap,
    title: 'Agile Delivery',
    description:
      'We ship in weekly sprints instead of disappearing for two months. You see working software early, which means changes cost days rather than a rebuild.',
    benefits: ['Working builds every week', 'Changes absorbed mid-project', 'No big-bang reveal'],
  },
  {
    Icon: Users,
    title: 'Client Collaboration',
    description:
      'You get one named point of contact for the whole project — not a ticket queue. Questions are answered the same working day.',
    benefits: ['One dedicated contact', 'Same-day replies', 'Decisions logged in writing'],
  },
  {
    Icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Testing runs alongside development, not as an afterthought at the end. Bugs get caught while the code is still fresh and cheap to fix.',
    benefits: ['Real-device testing', 'Security & accessibility passes', 'Performance budgets enforced'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const MethodologySection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
            How we work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            The principles behind the{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              six stages
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A process is only as good as the habits behind it. These three shape every
            project we take on.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {methodologies.map(({ Icon, title, description, benefits }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

              <div className="flex flex-col h-full p-6 sm:p-8">
                <span className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                  {description}
                </p>

                <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-700/60 space-y-2.5">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2.5">
                      <span className="flex items-center justify-center w-4 h-4 mt-0.5 rounded-full bg-primary/10 flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
