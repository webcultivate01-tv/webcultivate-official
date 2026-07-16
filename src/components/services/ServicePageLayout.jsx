import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight, PhoneCall } from 'lucide-react';
import { SERVICES } from '../../data/servicesData';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const ServicePageLayout = ({ service }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const { Icon } = service;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{service.meta.title}</title>
        <meta name="description" content={service.meta.description} />
        <meta name="keywords" content={service.meta.keywords} />
      </Helmet>

      <div className="bg-white dark:bg-slate-950">

        {/* ============ HERO — dark, editorial, breadcrumb-led ============ */}
        <section className="relative bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b30_1px,transparent_1px),linear-gradient(to_bottom,#1e293b30_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">

            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1.5 text-sm text-slate-400 mb-10"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-blue-400 font-medium">{service.name}</span>
            </motion.nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">

              {/* Left — copy */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-400">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                    {service.category}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white tracking-tight leading-[1.08] mb-6"
                >
                  {service.name}
                  <span className="block mt-3 text-xl sm:text-2xl lg:text-[1.6rem] font-medium text-slate-400 tracking-normal leading-snug">
                    {service.tagline}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
                >
                  {service.heroDesc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.28 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    Get a Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-lg transition-colors duration-300"
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </div>

              {/* Right — stats panel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="lg:col-span-5"
              >
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                      {service.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/70 border border-slate-700 text-slate-200 backdrop-blur">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-slate-800">
                    {service.stats.map((s) => (
                      <div key={s.label} className="px-4 py-5 text-center">
                        <p className="text-xl sm:text-2xl font-extrabold text-white">{s.value}</p>
                        <p className="text-[11px] text-slate-400 mt-1 leading-tight">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ============ CAPABILITIES ============ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">What's included</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Capabilities, end to end
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Everything this service covers — delivered by one accountable team, to one professional standard.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              {service.capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group bg-white dark:bg-slate-950 p-7 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-105 transition-transform duration-300">
                    <cap.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{cap.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">How we work</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                A disciplined, transparent process
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300"
                >
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-widest">{p.step}</span>
                  <div className="h-px w-full bg-slate-200 dark:bg-slate-800 my-4" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DELIVERABLES ============ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">Deliverables</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
                What you walk away with
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                No vague promises — a concrete set of assets and outcomes, documented and handed over as yours.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                <img src={service.image} alt={`${service.name} — WebCultivate`} className="w-full h-80 lg:h-96 object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 bg-slate-950 text-white rounded-xl px-5 py-4 shadow-2xl border border-slate-800">
                <PhoneCall className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm font-bold leading-tight">Free consultation</p>
                  <p className="text-xs text-slate-400">Scoped estimate within 48 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="mb-12 text-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Common questions
              </h2>
            </motion.div>

            <div className="space-y-3">
              {service.faqs.map((f, i) => (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RELATED SERVICES ============ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">Explore more</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Related services
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all">
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link
                    to={`/services/${r.slug}`}
                    className="group flex flex-col h-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-7 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400">
                        <r.Icon className="w-5 h-5" />
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{r.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{r.shortDesc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative bg-slate-950 py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[280px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
          <motion.div {...fadeUp} className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              Let's scope your {service.name.toLowerCase()} project
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-9 max-w-xl mx-auto">
              Tell us your goals — we'll come back within 48 hours with a clear plan, timeline, and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold rounded-lg transition-colors duration-300"
              >
                Explore Pricing
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default ServicePageLayout;
