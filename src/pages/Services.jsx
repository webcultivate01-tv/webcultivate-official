import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SITE_STATS } from '../constants/stats';

const allServices = [
  {
    title: "Website Design",
    description: "Stunning, responsive websites that captivate your audience and convert visitors into paying clients.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ["Responsive Design", "Modern UI/UX", "Brand Integration"],
    link: "/services/website-design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=280&fit=crop&crop=center",
  },
  {
    title: "Website Development",
    description: "Scalable, high-performance web applications built with modern technologies for real business results.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: ["Custom Development", "CMS Integration", "API Development"],
    link: "/services/website-development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=280&fit=crop&crop=center",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies that boost your online visibility, drive targeted traffic, and increase sales.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: ["SEO Optimization", "PPC Campaigns", "Content Marketing"],
    link: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=280&fit=crop&crop=center",
  },
  {
    title: "Social Media Management",
    description: "Build a powerful social presence, engage your audience, and grow your brand across every platform.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    features: ["Content Creation", "Community Engagement", "Paid Ad Campaigns"],
    link: "/services/social-media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=280&fit=crop&crop=center",
  },
  {
    title: "AI Automation",
    description: "Automate repetitive tasks, deploy intelligent chatbots, and leverage AI insights to scale faster.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    features: ["Workflow Automation", "AI Chatbots", "Smart Analytics"],
    link: "/services/ai-automation",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=280&fit=crop&crop=center",
  },
  {
    title: "Graphic Design",
    description: "Eye-catching visuals — logos, brand identity, social creatives, and marketing materials that stand out.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Logo Design", "Brand Identity", "Print & Digital"],
    link: "/services/graphic-design",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&h=280&fit=crop&crop=center",
  },
  {
    title: "Domain Registration",
    description: "Secure the perfect domain name for your business with fast, hassle-free registration and management.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: ["Domain Search", "All Extensions", "Auto Renewal"],
    link: "/services/domain-registration",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=280&fit=crop&crop=center",
  },
  {
    title: "Business Email",
    description: "Professional email hosting on your own domain that builds credibility and keeps your team connected.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Custom Domain Email", "Spam Protection", "Team Mailboxes"],
    link: "/services/business-email",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=280&fit=crop&crop=center",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | WebCultivate Software Solutions Amravati</title>
        <meta name="description" content="WebCultivate offers website design, development, digital marketing, social media management, AI automation, graphic design, domain registration, and business email services in Amravati." />
        <meta name="keywords" content="web development Amravati, digital marketing, social media management, AI automation, graphic design, business email, domain registration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

        {/* Subtle background glows */}
        <div className="fixed -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Hero */}
        <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-100/80 border border-blue-200/60 dark:text-blue-300 dark:bg-blue-900/40 dark:border-blue-700/40"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              8 Services · Built for Growth
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6"
            >
              One Company.{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                Every Digital Service
              </span>{' '}
              You Need.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              From your first website to AI-powered automation — WebCultivate delivers everything your business needs to dominate online, right from Amravati.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-14"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get a Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm"
              >
                View Pricing
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                ...SITE_STATS,
                { value: '8', label: 'Core Services' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/90 dark:bg-slate-800/90 text-blue-600 flex items-center justify-center shadow">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-5 flex-1">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full mr-2 bg-blue-500 flex-shrink-0"></span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2 mt-auto">
                      <Link
                        to={service.link}
                        className="flex-1 text-center px-3 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-md hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 text-center px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-300 bg-blue-900/50 border border-blue-700/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Free Consultation Available
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                  Ready to Build{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Something Great?
                  </span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Not sure where to start? Our team will listen to your goals and craft the perfect digital strategy — no pressure, no jargon.
                </p>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: '✓', text: 'Free Strategy Call' },
                    { icon: '✓', text: 'No Long-Term Lock-in' },
                    { icon: '✓', text: 'Results-Focused' },
                  ].map((chip) => (
                    <span key={chip.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/60 border border-slate-600/60 text-slate-300 text-sm">
                      <span className="text-blue-400 font-bold">{chip.icon}</span>
                      {chip.text}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Start the Conversation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-slate-400 hover:text-white transition-all duration-300"
                  >
                    Explore Pricing
                  </Link>
                </div>
              </motion.div>

              {/* Right — info cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { icon: '🚀', title: 'Fast Turnaround', desc: 'Most projects kick off within 48 hours of your first call.' },
                  { icon: '🎯', title: 'Tailored Strategy', desc: 'No cookie-cutter plans — every solution is built around your goals.' },
                  { icon: '📊', title: 'Transparent Reporting', desc: 'Regular updates so you always know what is happening.' },
                  { icon: '🤝', title: 'Dedicated Support', desc: 'A real team you can reach — not a ticket queue.' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-300"
                  >
                    <span className="text-2xl mb-3 block">{card.icon}</span>
                    <h4 className="text-white font-semibold mb-1.5">{card.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Services;
