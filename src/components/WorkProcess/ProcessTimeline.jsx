import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Gauge,
  Rocket,
  Clock,
  Check,
} from 'lucide-react';

// The homepage preview summarises these six stages in a grid; this page is where
// they earn the claim. Each stage lists what we do, what you receive at the end
// of it, and what we need from you — the three questions clients actually ask.
const stages = [
  {
    step: '01',
    Icon: Search,
    title: 'Discovery',
    duration: '2–3 days',
    summary:
      'Before anything gets designed, we map what the site has to achieve and who it has to convince.',
    activities: [
      'Goals, audience and competitor review',
      'Sitemap and content requirements',
      'Fixed quote and stage-by-stage schedule',
    ],
    deliverable: 'Project roadmap & fixed quote',
    fromYou: 'One 45-minute call and any brand material you already have.',
  },
  {
    step: '02',
    Icon: PenTool,
    title: 'Design',
    duration: '1–2 weeks',
    summary:
      'We design the journey first, then the pixels — so every screen has a job to do.',
    activities: [
      'Wireframes for each key page',
      'Full UI design in your brand direction',
      'Revisions until you approve — no change fees',
    ],
    deliverable: 'Clickable prototype you can walk through',
    fromYou: 'Feedback on each round, usually within 2–3 days.',
  },
  {
    step: '03',
    Icon: Code2,
    title: 'Development',
    duration: '2–6 weeks',
    summary:
      'Your approved design becomes clean, documented code you can hand to any developer later.',
    activities: [
      'Responsive build across every breakpoint',
      'CMS setup so you can edit content yourself',
      'Weekly staging builds you can review as we go',
    ],
    deliverable: 'Weekly staging builds on a live link',
    fromYou: 'Final copy and images, plus a look at each weekly build.',
  },
  {
    step: '04',
    Icon: ShieldCheck,
    title: 'Testing',
    duration: '3–5 days',
    summary:
      'Everything is checked on real devices — not just resized in a browser window.',
    activities: [
      'Cross-browser and real-device testing',
      'Security and accessibility passes',
      'Forms, payments and integrations verified end to end',
    ],
    deliverable: 'QA report with every issue logged and fixed',
    fromYou: 'Nothing — this stage is on us.',
  },
  {
    step: '05',
    Icon: Gauge,
    title: 'Optimization',
    duration: '2–4 days',
    summary:
      'A site that loads slowly costs you customers, so speed and SEO are tuned before launch, not after.',
    activities: [
      'Core Web Vitals and image optimisation',
      'On-page SEO, metadata and structured data',
      'Analytics and conversion tracking installed',
    ],
    deliverable: 'Speed & SEO audit with before/after scores',
    fromYou: 'Access to your analytics or domain accounts, if they exist.',
  },
  {
    step: '06',
    Icon: Rocket,
    title: 'Launch & Support',
    duration: 'Ongoing',
    summary:
      'We deploy, hand over every account in your name, and stay on the line after go-live.',
    activities: [
      'Deployment with zero downtime',
      'Handover walkthrough plus written documentation',
      '30 days of free support and fixes',
    ],
    deliverable: 'Full handover + 30-day support window',
    fromYou: 'A go-live date that suits your business.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const ProcessTimeline = () => {
  return (
    <section
      id="process-steps"
      className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-900 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
            The six stages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Every stage, start to finish
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            No stage begins until you've signed off on the one before it. Here's exactly
            what happens, what you walk away with, and what we'll need from you.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Spine — sits under the markers, left-aligned on mobile, centred on desktop */}
          <div className="absolute top-0 bottom-0 left-[27px] lg:left-1/2 lg:-translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent pointer-events-none" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-4">
            {stages.map(
              (
                { step, Icon, title, duration, summary, activities, deliverable, fromYou },
                index
              ) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={step}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center"
                  >
                    {/* Marker */}
                    <div className="absolute left-0 top-0 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20">
                      <div className="flex items-center justify-center w-[54px] h-[54px] rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold shadow-lg shadow-primary/30 ring-4 ring-white dark:ring-slate-900">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Card — alternates sides on desktop, always right of the spine on mobile */}
                    <div
                      className={
                        isLeft
                          ? 'lg:col-start-1 lg:pr-4 ml-[70px] lg:ml-0'
                          : 'lg:col-start-2 lg:pl-4 ml-[70px] lg:ml-0'
                      }
                    >
                      <div className="group relative rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        {/* Accent rail — sweeps across on hover */}
                        <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

                        {/* Oversized step digit behind the content */}
                        <span className="absolute top-3 right-5 font-mono text-6xl font-bold text-slate-100 dark:text-slate-700/40 select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/10">
                          {step}
                        </span>

                        <div className="relative p-6 sm:p-7">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                              {title}
                            </h3>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap">
                              <Clock className="w-3 h-3" />
                              {duration}
                            </span>
                          </div>

                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                            {summary}
                          </p>

                          <ul className="space-y-2 mb-6">
                            {activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2.5">
                                <span className="flex items-center justify-center w-4 h-4 mt-0.5 rounded-full bg-primary/10 flex-shrink-0">
                                  <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                                </span>
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                  {activity}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* What you get, and what we need */}
                          <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                                You get
                              </p>
                              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                {deliverable}
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                                We need from you
                              </p>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                {fromYou}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
