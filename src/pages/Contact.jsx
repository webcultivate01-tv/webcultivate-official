import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ContactInfo, ContactForm } from '../components/Contact';
import { SITE_STATS } from '../constants/stats';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact WebCultivate Amravati | Get Free Quote for Web Development</title>
        <meta name="description" content="Contact WebCultivate for professional web development services in Amravati. Call +91 7821096438 or email info@webcultivate.com for free consultation and quotes." />
        <meta name="keywords" content="contact WebCultivate, web development quote Amravati, website design consultation, digital marketing services Amravati, free web development quote" />
        <meta property="og:title" content="Contact WebCultivate - Web Development Company in Amravati" />
        <meta property="og:description" content="Get in touch with WebCultivate for expert web development services in Amravati. Free consultation and competitive quotes available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/contact" />
        <link rel="canonical" href="https://www.webcultivate.com/contact" />
      </Helmet>
      
      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

        {/* Hero Section */}
        <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              {/* Left — Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-100/80 border border-blue-200/60 dark:text-blue-300 dark:bg-blue-900/40 dark:border-blue-700/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  We respond within 24 hours
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                  Let&apos;s Build{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    Something Great
                  </span>
                  <br />Together.
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
                  Have a project in mind or just want to explore what&apos;s possible? Reach out — our team in Amravati is ready to turn your vision into a digital reality.
                </p>

                {/* Contact info chips */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a
                    href="tel:+917821096438"
                    className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Call us</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">+91 7821096438</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@webcultivate.com"
                    className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500">Email us</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">info@webcultivate.com</p>
                    </div>
                  </a>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Send a Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                  <a
                    href="tel:+917821096438"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Call Now
                  </a>
                </div>
              </motion.div>

              {/* Right — Info cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-col gap-4"
              >
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=700&h=380&fit=crop&crop=center"
                    alt="Contact WebCultivate"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-white font-semibold text-lg">Based in Amravati, Maharashtra</p>
                    <p className="text-slate-300 text-sm">Serving clients across India &amp; beyond</p>
                  </div>
                </div>

                {/* 3 stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {SITE_STATS.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center shadow-sm"
                    >
                      <p className="text-xl font-extrabold text-blue-600 dark:text-blue-400">{s.value}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

