import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Clock,
  Star,
  ShieldCheck,
  MapPin,
  Send,
} from 'lucide-react';
import { ContactInfo, ContactForm } from '../components/Contact';
import { SITE_STATS } from '../constants/stats';

// Entrances run on mount (`animate`) — this hero is above the fold, same as Home.
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

const rise = { initial: 'hidden', animate: 'visible', variants: itemVariants };

// Fades the blueprint grid out toward the edges so it never competes with the copy.
const GRID_FADE = 'radial-gradient(ellipse 75% 60% at 50% 0%, #000 55%, transparent 100%)';

// Floating trust chips around the chat mockup — desktop only.
const chips = [
  {
    Icon: Clock,
    label: 'Avg. Response',
    value: '< 24 hrs',
    tone: 'text-primary bg-primary/10 dark:bg-primary/20',
    pos: 'top-[8%] -left-[14%]',
  },
  {
    Icon: Star,
    label: 'Client Rating',
    value: '5.0 / 5',
    tone: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20',
    pos: 'top-[8%] -right-[12%]',
  },
  {
    Icon: ShieldCheck,
    label: 'Consultation',
    value: '100% Free',
    tone: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20',
    pos: 'bottom-[10%] -right-[12%]',
  },
  {
    Icon: MapPin,
    label: 'Based In',
    value: 'Amravati, MH',
    tone: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/20',
    pos: 'bottom-[10%] -left-[14%]',
  },
];

// Conversation shown in the chat mockup — mirrors how a first inquiry actually goes.
const chatMessages = [
  { from: 'client', text: 'Hi! I need a website for my business 👋' },
  { from: 'us', text: "Great to hear from you! What kind of business is it?" },
  { from: 'client', text: 'A local clothing brand — I want to sell online too.' },
  { from: 'us', text: "Perfect. Let's hop on a free call — we'll map out pages, timeline and a fixed quote." },
];

const Contact = () => {
  const reduceMotion = useReducedMotion();

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

      <div className="bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">

          {/* Ambient background — grid + glows, purely decorative */}
          <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgb(100 116 139 / 0.10) 1px, transparent 1px), linear-gradient(to bottom, rgb(100 116 139 / 0.10) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
                maskImage: GRID_FADE,
                WebkitMaskImage: GRID_FADE,
              }}
            />
            <motion.div
              className="absolute -top-1/3 -right-10 w-[400px] h-[400px] md:w-[560px] md:h-[560px] bg-primary/10 rounded-full blur-3xl"
              animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-1/3 -left-10 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl"
              animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

              {/* ── LEFT: the pitch ── */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Live-status badge */}
                <motion.span
                  custom={0} {...rise}
                  className="inline-flex items-center gap-2.5 pl-2.5 pr-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/70 backdrop-blur text-slate-700 dark:text-slate-200 text-[13px] font-medium tracking-tight ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm mb-5"
                >
                  <span className="relative flex h-2 w-2">
                    {!reduceMotion && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    )}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Online now — we reply within 24 hours
                </motion.span>

                <motion.h1
                  custom={1} {...rise}
                  className="max-w-2xl text-[2.1rem] sm:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold leading-[1.12] tracking-[-0.03em] text-slate-900 dark:text-white [text-wrap:balance]"
                >
                  Let&apos;s Build Something{' '}
                  <span className="relative inline-block">
                    {/* Highlighter sweep sits behind the words */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-x-0 bottom-[0.08em] h-[0.34em] origin-left rounded-[3px] bg-gradient-to-r from-primary/20 via-secondary/20 to-secondary/5 dark:from-primary/35 dark:via-secondary/30 dark:to-secondary/10"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="relative bg-gradient-to-r from-primary to-secondary-light bg-clip-text text-transparent">
                      Great Together
                    </span>
                  </span>
                </motion.h1>

                <motion.p
                  custom={2} {...rise}
                  className="mt-5 text-base sm:text-[1.0625rem] leading-[1.7] text-slate-600 dark:text-slate-400 max-w-xl"
                >
                  Have a project in mind or just exploring what&apos;s possible? Tell us where
                  you want to go — our team in Amravati will map the route, the timeline
                  and a fixed quote, free of charge.
                </motion.p>

                {/* Direct-contact chips */}
                <motion.div
                  custom={3} {...rise}
                  className="flex flex-col sm:flex-row gap-3 mt-7 w-full sm:w-auto"
                >
                  <a
                    href="tel:+917821096438"
                    className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm hover:ring-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[10px] font-medium uppercase tracking-[0.07em] text-slate-500 dark:text-slate-400">Call us</span>
                      <span className="block text-sm font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors">+91 78210 96438</span>
                    </span>
                  </a>

                  <a
                    href="mailto:info@webcultivate.com"
                    className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm hover:ring-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[10px] font-medium uppercase tracking-[0.07em] text-slate-500 dark:text-slate-400">Email us</span>
                      <span className="block text-sm font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors">info@webcultivate.com</span>
                    </span>
                  </a>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  custom={4} {...rise}
                  className="flex flex-wrap gap-3.5 mt-6 justify-center lg:justify-start"
                >
                  <a
                    href="#contact-form"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
                  >
                    Send a Message
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://wa.me/917821096438"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/10 dark:ring-white/10 text-slate-800 dark:text-white hover:ring-primary/60 hover:text-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </motion.div>

                <motion.p
                  custom={5} {...rise}
                  className="mt-4 text-xs text-slate-500 dark:text-slate-500"
                >
                  Free consultation · No pressure, no jargon
                </motion.p>

                {/* Stats row */}
                <motion.div
                  custom={6} {...rise}
                  className="w-full mt-7 pt-6 border-t border-slate-900/[0.08] dark:border-white/10"
                >
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-5">
                    {SITE_STATS.map((s, i) => (
                      <div
                        key={i}
                        className={`shrink-0 ${i < SITE_STATS.length - 1 ? 'pr-5 border-r border-slate-900/[0.08] dark:border-white/10' : ''}`}
                      >
                        <p className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                          {s.value}
                        </p>
                        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.07em] whitespace-nowrap text-slate-500 dark:text-slate-400">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── RIGHT: inquiry-chat mockup ── */}
              <motion.div
                className="relative flex items-center justify-center lg:py-10 lg:px-8 xl:px-12"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                {/* Rotating ring — desktop only (chips need space) */}
                <motion.div
                  className="hidden lg:block absolute w-[380px] h-[380px] xl:w-[440px] xl:h-[440px] rounded-full border border-dashed border-primary/20 dark:border-primary/15"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                {/* Inner glow */}
                <div aria-hidden className="absolute w-[280px] h-[280px] bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-[80px]" />

                {/* Chat window — the contact-page twin of the Home hero's code editor */}
                <div className="relative z-10 w-full max-w-sm lg:max-w-[360px] xl:max-w-[400px] rounded-2xl shadow-2xl shadow-primary/20 ring-1 ring-slate-900/10 dark:ring-white/10 overflow-hidden bg-slate-900">

                  {/* Title bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div className="ml-3 flex items-center gap-1.5 text-[10px] text-slate-400">
                      <MessageCircle className="w-3 h-3" />
                      <span>new-project-inquiry</span>
                    </div>
                  </div>

                  {/* Conversation header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-slate-800/40 border-b border-slate-700/60">
                    <div className="relative">
                      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold">
                        WC
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">WebCultivate Team</p>
                      <p className="text-[10px] text-emerald-400">Online — typically replies in minutes</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="px-4 py-5 space-y-3">
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.35, ease: 'easeOut' }}
                      >
                        <div
                          className={`max-w-[80%] px-3.5 py-2.5 text-xs leading-relaxed ${
                            msg.from === 'client'
                              ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-2xl rounded-br-md'
                              : 'bg-slate-800 text-slate-200 ring-1 ring-white/10 rounded-2xl rounded-bl-md'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator trails the conversation */}
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + chatMessages.length * 0.35 }}
                    >
                      <div className="flex items-center gap-1 px-3.5 py-3 bg-slate-800 ring-1 ring-white/10 rounded-2xl rounded-bl-md">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            className="w-1.5 h-1.5 rounded-full bg-slate-400"
                            animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.2 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Status bar */}
                  <motion.div
                    className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 border-t border-slate-700/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Send className="w-3 h-3 text-primary-light" />
                      <span className="text-[10px] font-medium text-slate-400">Start your conversation below</span>
                    </div>
                    <span className="text-[10px] font-medium text-emerald-400">Free quote · 24 hrs</span>
                  </motion.div>

                  {/* Trust chips row — mobile only (inline instead of floating) */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-800/40 border-t border-slate-700/60 lg:hidden">
                    {chips.map(({ Icon, label, value, tone }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/70 ring-1 ring-white/10"
                      >
                        <span className={`flex items-center justify-center w-7 h-7 shrink-0 rounded-lg ${tone}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[9px] text-slate-400 leading-none mb-1 truncate">{label}</p>
                          <p className="text-xs font-bold tracking-tight text-white leading-none">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating trust chips — desktop only.
                    Outer node owns the entrance, inner node owns the idle float. */}
                {chips.map(({ Icon, label, value, tone, pos }, i) => (
                  <motion.div
                    key={label}
                    className={`hidden lg:block absolute ${pos} z-20`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: 'backOut' }}
                  >
                    <motion.div
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-800/90 ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-lg shadow-slate-900/5 backdrop-blur-sm"
                      animate={reduceMotion ? undefined : { y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                      transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: 1 + i * 0.2 }}
                    >
                      <span className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-lg ${tone}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-none mb-1">{label}</p>
                        <p className="text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-none">{value}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── CONTACT INFO + FORM ── */}
        <section id="contact-form" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ── MAP ── */}
        <section className="relative pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-3xl overflow-hidden ring-1 ring-slate-900/10 dark:ring-white/10 shadow-xl"
            >
              <iframe
                title="WebCultivate office location — Sai Nagar, Amravati"
                src="https://www.google.com/maps?q=Sai+Nagar,+Amravati,+Maharashtra&output=embed"
                className="w-full h-[320px] sm:h-[380px] border-0 grayscale-[35%] contrast-[1.05] dark:grayscale-[60%] dark:opacity-90"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Address card overlays the map on desktop, stacks under it on mobile */}
              <div className="sm:absolute sm:bottom-5 sm:left-5 flex items-start gap-3.5 p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur sm:rounded-2xl sm:ring-1 sm:ring-slate-900/10 dark:sm:ring-white/10 sm:shadow-lg sm:max-w-xs">
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">WebCultivate</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Sai Nagar, Amravati, Maharashtra, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sai+Nagar+Amravati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-primary hover:underline"
                  >
                    Get directions
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
