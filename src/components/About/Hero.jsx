// src/components/About/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Rocket, Star, Users, Check, ArrowRight } from "lucide-react";
import { SITE_STATS } from "../../constants/stats";

// Above the fold, so entrances run on mount (`animate`) rather than on
// intersection — same rule as the homepage hero.
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

const rise = {
  initial: "hidden",
  animate: "visible",
  variants: itemVariants,
};

// Floating fact chips around the team visual — the "who we are" at a glance.
const chips = [
  {
    Icon: MapPin,
    label: "Based in",
    value: "Amravati, India",
    tone: "text-primary bg-primary/10 dark:bg-primary/20",
    pos: "top-[8%] -left-[10%]",
  },
  {
    Icon: Rocket,
    label: "Founded",
    value: "2025",
    tone: "text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/20",
    pos: "top-[8%] -right-[8%]",
  },
  {
    Icon: Users,
    label: "Projects Shipped",
    value: "50+",
    tone: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20",
    pos: "bottom-[14%] -left-[10%]",
  },
  {
    Icon: Star,
    label: "Client Rating",
    value: "5.0 ★",
    tone: "text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20",
    pos: "bottom-[14%] -right-[8%]",
  },
];

const valuePoints = [
  "Conversion-first design",
  "Direct access to builders",
  "Results you can measure",
];

// Fades the blueprint grid out toward the edges so it never competes with the copy.
const GRID_FADE = "radial-gradient(ellipse 75% 60% at 50% 0%, #000 55%, transparent 100%)";

const AboutHeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      {/* Ambient background — grid + glows, purely decorative */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(100 116 139 / 0.10) 1px, transparent 1px), linear-gradient(to bottom, rgb(100 116 139 / 0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: GRID_FADE,
            WebkitMaskImage: GRID_FADE,
          }}
        />
        <motion.div
          className="absolute -top-1/2 -right-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-10 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl"
          animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-12 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

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
              Your growth partner since 2022
            </motion.span>

            <motion.h1
              custom={1} {...rise}
              className="max-w-2xl text-[2.1rem] sm:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold leading-[1.12] tracking-[-0.03em] text-slate-900 dark:text-white [text-wrap:balance]"
            >
              The Team Behind Websites That{" "}
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
                  Actually Convert
                </span>
              </span>
            </motion.h1>

            <motion.p
              custom={2} {...rise}
              className="mt-5 text-base sm:text-[1.0625rem] leading-[1.7] text-slate-600 dark:text-slate-400 max-w-xl"
            >
              WebCultivate Software Solutions is Amravati's trusted digital partner.
              We don't just build websites — we build business assets that turn
              your visitors into paying clients, backed by numbers you can see.
            </motion.p>

            {/* Value bullets */}
            <motion.ul
              custom={3} {...rise}
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2.5 mt-5"
            >
              {valuePoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                    <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" strokeWidth={3.5} />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              custom={4} {...rise}
              className="flex flex-wrap gap-3.5 mt-7 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work-process"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/10 dark:ring-white/10 text-slate-800 dark:text-white hover:ring-primary/60 hover:text-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
              >
                See How We Work
              </Link>
            </motion.div>

            <motion.p
              custom={5} {...rise}
              className="mt-4 text-xs text-slate-500 dark:text-slate-500"
            >
              Free consultation · No pressure, no jargon
            </motion.p>

            {/* Trust panel — stats */}
            <motion.div
              custom={6} {...rise}
              className="w-full mt-7 pt-6 border-t border-slate-900/[0.08] dark:border-white/10"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-5">
                {SITE_STATS.map((s, i) => (
                  <div
                    key={i}
                    className="shrink-0 pr-4 border-r border-slate-900/[0.08] dark:border-white/10 last:border-r-0"
                  >
                    <p className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.07em] whitespace-nowrap text-slate-500 dark:text-slate-400">
                      {s.label}
                    </p>
                  </div>
                ))}
                <div className="shrink-0">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-[10px] whitespace-nowrap text-slate-500 dark:text-slate-400 mt-0.5">
                    Rated 5.0 by our clients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <motion.div
            className="relative flex items-center justify-center lg:py-10 lg:px-8 xl:px-12"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Rotating ring — desktop only (chips need space) */}
            <motion.div
              className="hidden lg:block absolute w-[380px] h-[380px] xl:w-[460px] xl:h-[460px] rounded-full border border-dashed border-primary/20 dark:border-primary/15"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner glow */}
            <div aria-hidden className="absolute w-[280px] h-[280px] bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-[80px]" />

            {/* Team visual card */}
            <div className="relative z-10 w-full max-w-sm lg:max-w-[360px] xl:max-w-[400px] rounded-2xl shadow-2xl shadow-primary/20 ring-1 ring-slate-900/10 dark:ring-white/10 overflow-hidden bg-slate-900">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="The WebCultivate team collaborating on a project"
                  loading="eager"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              </div>

              {/* Caption strip */}
              <div className="px-5 pt-1 pb-5 -mt-10 relative">
                <p className="text-sm font-semibold text-white">
                  Strategy · Design · Technology
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  One small senior team, end to end — the people you talk to are
                  the people who build your project.
                </p>
              </div>

              {/* Fact chips row — mobile only (inline instead of floating) */}
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

            {/* Floating fact chips — desktop only.
                Outer node owns the entrance, inner node owns the idle float. */}
            {chips.map(({ Icon, label, value, tone, pos }, i) => (
              <motion.div
                key={label}
                className={`hidden lg:block absolute ${pos} z-20`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: "backOut" }}
              >
                <motion.div
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-800/90 ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-lg shadow-slate-900/5 backdrop-blur-sm"
                  animate={reduceMotion ? undefined : { y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: 1 + i * 0.2 }}
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
  );
};

export default AboutHeroSection;
