import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Eye, RefreshCw } from 'lucide-react';

// The three promises the rest of the page has to earn. Each pairs an icon with
// the concrete commitment rather than an adjective ("transparent", "agile"),
// so the hero states what the client gets, not how we describe ourselves.
const promises = [
  {
    Icon: Eye,
    title: 'You see everything',
    detail: 'Weekly builds on a live staging link from week one.',
  },
  {
    Icon: CalendarCheck,
    title: 'Dates are fixed',
    detail: 'Every stage is quoted with a deliverable and a date.',
  },
  {
    Icon: RefreshCw,
    title: 'Revisions included',
    detail: 'We iterate on designs until you sign off — no change fees.',
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid wash — fades out before it reaches the copy */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — copy */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
              Our Process
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              How your project
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                actually gets built.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
              Most agencies go quiet after the deposit. We don't. Six defined stages,
              each with a deliverable you receive and a date it lands on — so you always
              know where your project stands and what's coming next.
            </p>

            {/* Promises */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-9">
              {promises.map(({ Icon, title, detail }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-4"
                >
                  <Icon className="w-5 h-5 text-primary mb-2.5" strokeWidth={1.75} />
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start your project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
              <a
                href="#process-steps"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/40 hover:text-primary dark:hover:text-primary-light transition-all duration-300"
              >
                See the six stages
              </a>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl">
              <img
                src="/process.jpg"
                alt="The WebCultivate team planning a project roadmap"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Tint keeps the photo from fighting the brand palette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating stat — anchors the photo to a real claim */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl px-5 py-4">
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                30 days
              </p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                free support after launch
              </p>
            </div>

            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
