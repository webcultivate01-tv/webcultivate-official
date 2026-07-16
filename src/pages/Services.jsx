import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, Users, Gauge, HeartHandshake } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { SITE_STATS } from '../constants/stats';

const engagement = [
  { step: '01', title: 'Discover', desc: 'A free consultation to understand your business, goals, and constraints.' },
  { step: '02', title: 'Define', desc: 'A clear proposal — scope, timeline, and transparent pricing within 48 hours.' },
  { step: '03', title: 'Deliver', desc: 'Milestone-driven execution with regular demos and a single point of contact.' },
  { step: '04', title: 'Grow', desc: 'Post-launch support, reporting, and continuous improvement as you scale.' },
];

const whyUs = [
  { Icon: Users, title: 'One accountable team', desc: 'Design, engineering, and marketing under one roof — no vendor juggling, no hand-off gaps.' },
  { Icon: Gauge, title: 'Enterprise discipline, startup speed', desc: 'Documented processes and QA standards, delivered on timelines a small business can act on.' },
  { Icon: ShieldCheck, title: 'Transparent by default', desc: 'Fixed scopes, clear pricing, and reporting that tells you exactly what you got for your money.' },
  { Icon: HeartHandshake, title: 'Partners, not vendors', desc: 'We measure ourselves on your outcomes — most of our clients stay and grow with us for years.' },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | WebCultivate Software Solutions Amravati</title>
        <meta name="description" content="WebCultivate delivers website design, development, digital marketing, social media management, AI automation, graphic design, domain registration, and business email services in Amravati." />
        <meta name="keywords" content="web development Amravati, digital marketing, social media management, AI automation, graphic design, business email, domain registration" />
      </Helmet>

      <div className="bg-white dark:bg-slate-950">

        {/* ================= HERO — dark, editorial, service-index style ================= */}
        <section className="relative bg-slate-950 overflow-hidden">
          {/* Fine grid + single restrained glow */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b30_1px,transparent_1px),linear-gradient(to_bottom,#1e293b30_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute -top-24 right-0 w-[520px] h-[520px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 pb-16 lg:pb-20">

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
                    Capabilities
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold text-white tracking-tight leading-[1.05] mb-7"
                >
                  Digital services,
                  <br />
                  delivered to an
                  <br />
                  <span className="text-blue-500">enterprise standard.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.22 }}
                  className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10"
                >
                  Eight core capabilities spanning design, engineering, growth, and automation —
                  one accountable team building the digital backbone of your business.
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
                    Talk to Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#services-grid"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-lg transition-colors duration-300"
                  >
                    Browse Capabilities
                  </a>
                </motion.div>
              </div>

              {/* Right — numbered service index */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5"
              >
                <div className="border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur divide-y divide-slate-800/80 overflow-hidden">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">Service Index</span>
                    <span className="text-xs text-slate-600">{String(SERVICES.length).padStart(2, '0')} capabilities</span>
                  </div>
                  {SERVICES.map((s, i) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="group flex items-center gap-4 px-6 py-[13px] hover:bg-slate-800/50 transition-colors duration-200"
                    >
                      <span className="text-xs font-mono text-slate-600 group-hover:text-blue-500 transition-colors w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-[15px] font-medium text-slate-300 group-hover:text-white transition-colors">
                        {s.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats ribbon on hero bottom edge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border-t border-slate-800"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-800">
                {[...SITE_STATS, { value: '8', label: 'Core Services' }].map((stat) => (
                  <div key={stat.label} className="px-4 py-7 text-center sm:text-left sm:px-8">
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section id="services-grid" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">What we do</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
                Everything your business needs to win online
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Each capability stands on its own — together, they compound. Explore a service to see
                exactly what's included, how we work, and what you walk away with.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group relative flex flex-col h-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Top row — icon + index */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                        <service.Icon className="w-[22px] h-[22px]" />
                      </span>
                      <span className="text-xs font-mono text-slate-300 dark:text-slate-700 group-hover:text-blue-400 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-500 mb-2">
                      {service.category}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                      {service.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mt-auto">
                      Explore service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">Why WebCultivate</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
                  Built like a big firm. Priced like a partner.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  We bring the process discipline of a large IT company to businesses that need
                  results — without the overhead, the bureaucracy, or the ticket queues.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all"
                >
                  More about our team <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-7 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 mb-5">
                      <item.Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= ENGAGEMENT MODEL ================= */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-14"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">Engagement model</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                From first call to long-term growth
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagement.map((e, i) => (
                <motion.div
                  key={e.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 font-extrabold text-sm flex-shrink-0">
                      {e.step}
                    </span>
                    {i < engagement.length - 1 && (
                      <span className="hidden lg:block h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{e.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-4">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative bg-slate-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b30_1px,transparent_1px),linear-gradient(to_bottom,#1e293b30_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 mb-5">Free consultation · No obligation</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Not sure which service you need?
                <br className="hidden sm:block" />
                That's exactly what the first call is for.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                Tell us where your business is headed. We'll map the right capabilities to your goals
                and send a clear plan — scope, timeline, and pricing — within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-lg transition-colors duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Services;
