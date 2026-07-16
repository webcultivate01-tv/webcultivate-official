import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Zap, Target, ShieldCheck, Check, GitBranch, ArrowRight, Star } from "lucide-react";
import { SITE_STATS } from "../../constants/stats";

// The hero sits above the fold, so entrances run on mount (`animate`) rather than
// on intersection — an observer that fires late leaves the pitch invisible.
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

// Floating metric chips on the right panel. Positions are tuned to clear the
// editor's title bar and status bar — they overlap only its empty corners.
const chips = [
  {
    Icon: TrendingUp,
    label: "Avg. Traffic Growth",
    value: "+340%",
    tone: "text-primary bg-primary/10 dark:bg-primary/20",
    pos: "top-[1%] -left-[18%]",
  },
  {
    Icon: Zap,
    label: "Page Load Speed",
    value: "< 1.2s",
    tone: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20",
    pos: "top-[1%] -right-[16%]",
  },
  {
    Icon: Target,
    label: "Conversion Rate",
    value: "+2.8×",
    tone: "text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20",
    pos: "bottom-[14%] -right-[16%]",
  },
  {
    Icon: ShieldCheck,
    label: "Uptime Guarantee",
    value: "99.9%",
    tone: "text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/20",
    pos: "bottom-[14%] -left-[18%]",
  },
];

const valuePoints = [
  "SEO-optimized builds",
  "Blazing-fast performance",
  "Custom UI/UX design",
];

// Syntax-highlighted source shown in the editor mockup.
// Tokens carry their own colour class so the block stays readable in both themes.
const codeLines = [
  [
    { t: "const", c: "text-violet-400" },
    { t: " project", c: "text-sky-300" },
    { t: " = ", c: "text-slate-400" },
    { t: "await", c: "text-violet-400" },
    { t: " webCultivate", c: "text-sky-300" },
    { t: ".", c: "text-slate-400" },
    { t: "build", c: "text-emerald-300" },
    { t: "({", c: "text-slate-400" },
  ],
  [
    { t: "  design", c: "text-sky-200" },
    { t: ": ", c: "text-slate-400" },
    { t: '"conversion-first"', c: "text-amber-300" },
    { t: ",", c: "text-slate-400" },
  ],
  [
    { t: "  stack", c: "text-sky-200" },
    { t: ": [", c: "text-slate-400" },
    { t: '"react"', c: "text-amber-300" },
    { t: ", ", c: "text-slate-400" },
    { t: '"node"', c: "text-amber-300" },
    { t: ", ", c: "text-slate-400" },
    { t: '"mongo"', c: "text-amber-300" },
    { t: "],", c: "text-slate-400" },
  ],
  [
    { t: "  seo", c: "text-sky-200" },
    { t: ": ", c: "text-slate-400" },
    { t: "true", c: "text-violet-400" },
    { t: ", ", c: "text-slate-400" },
    { t: "responsive", c: "text-sky-200" },
    { t: ": ", c: "text-slate-400" },
    { t: "true", c: "text-violet-400" },
    { t: ",", c: "text-slate-400" },
  ],
  [{ t: "});", c: "text-slate-400" }],
  [],
  [
    { t: "// ship it", c: "text-slate-500 italic" },
  ],
  [
    { t: "project", c: "text-sky-300" },
    { t: ".", c: "text-slate-400" },
    { t: "deploy", c: "text-emerald-300" },
    { t: "(", c: "text-slate-400" },
    { t: '"production"', c: "text-amber-300" },
    { t: ");", c: "text-slate-400" },
  ],
];

// Decorative — the adjacent "Loved by 25+ clients" line carries the meaning.
const clientAvatars = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=72&h=72&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=72&h=72&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=72&h=72&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&crop=face",
];

// Fades the blueprint grid out toward the edges so it never competes with the copy.
const GRID_FADE = "radial-gradient(ellipse 75% 60% at 50% 0%, #000 55%, transparent 100%)";

const techLogos = [
  { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "MongoDB", src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    // min-h (not h) + svh: the hero fills one screen on desktop but is still free
    // to grow past it on short/mobile viewports rather than clipping the CTAs.
    <section className="relative flex items-center overflow-hidden lg:min-h-svh pt-24 sm:pt-28 lg:pt-24 pb-14 sm:pb-16 lg:pb-12 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      {/* Ambient background — grid + glows, purely decorative */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Faint blueprint grid, faded out toward the edges */}
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
        {/* Left column runs wider than the right so the stats + social-proof row
            fits on a single line without the two colliding. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-12 items-center">

          {/* ── LEFT CONTENT ── (stays first on mobile so the pitch lands before the visual) */}
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
              Trusted by 25+ growing businesses
            </motion.span>

            <motion.h1
              custom={1} {...rise}
              className="max-w-2xl text-[2.1rem] sm:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold leading-[1.12] tracking-[-0.03em] text-slate-900 dark:text-white [text-wrap:balance]"
            >
              Helping Businesses{" "}
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
                  Grow Online
                </span>
              </span>{" "}
              With Smart Digital Solutions
            </motion.h1>

            <motion.p
              custom={2} {...rise}
              className="mt-5 text-base sm:text-[1.0625rem] leading-[1.7] text-slate-600 dark:text-slate-400 max-w-xl"
            >
              We design high-performing websites, develop custom software, and create digital experiences that turn visitors into paying customers.
            </motion.p>

            {/* Value bullets */}
            <motion.ul
              custom={3} {...rise}
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2.5 mt-5"
            >
              {valuePoints.map((point, i) => (
                <li
                  key={point}
                  className={`flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 ${
                    i === 2 ? "basis-full justify-center lg:basis-auto lg:justify-start" : ""
                  }`}
                >
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
              className="flex flex-nowrap gap-2 sm:gap-3.5 mt-7 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="group inline-flex flex-1 lg:flex-none min-w-0 items-center justify-center text-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work-process"
                className="inline-flex flex-1 lg:flex-none min-w-0 items-center justify-center text-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/10 dark:ring-white/10 text-slate-800 dark:text-white hover:ring-primary/60 hover:text-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
              >
                View Our Process
              </Link>
            </motion.div>

            <motion.p
              custom={5} {...rise}
              className="mt-4 text-xs text-slate-500 dark:text-slate-500"
            >
              Free consultation · No pressure, no jargon
            </motion.p>

            {/* Trust panel — stats + social proof */}
            <motion.div
              custom={6} {...rise}
              className="w-full mt-7 pt-6 border-t border-slate-900/[0.08] dark:border-white/10"
            >
              {/* Stats + social proof share one row from xl up, where the left
                  column is ~642px against the ~620px this row needs. Below that
                  there isn't room, so it wraps cleanly instead of colliding. */}
              <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center lg:justify-start gap-y-4 lg:gap-x-4 lg:gap-y-5">
                <div className="grid grid-cols-3 gap-x-2 w-full lg:contents">
                  {SITE_STATS.map((s, i) => (
                    <div
                      key={i}
                      className="text-center lg:text-left lg:shrink-0 lg:pr-4 lg:border-r lg:border-slate-900/[0.08] lg:dark:border-white/10"
                    >
                      <p className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.07em] leading-tight lg:whitespace-nowrap text-slate-500 dark:text-slate-400">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Social proof */}
                <div className="flex shrink-0 items-center gap-2">
                  <div className="flex shrink-0 -space-x-2">
                    {clientAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        loading="lazy"
                        className="w-7 h-7 shrink-0 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[10px] whitespace-nowrap text-slate-500 dark:text-slate-400 mt-0.5">
                      Loved by 25+ clients
                    </p>
                  </div>
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

            {/* Code editor mockup — full width on mobile, fixed on desktop */}
            {/* Fluid rather than a fixed 400px: the right column is the narrower
                of the two, and a fixed width spills out of it at lg. */}
            <div className="relative z-10 w-full max-w-sm lg:max-w-[360px] xl:max-w-[400px] rounded-2xl shadow-2xl shadow-primary/20 ring-1 ring-slate-900/10 dark:ring-white/10 overflow-hidden bg-slate-900">

              {/* Editor title bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="ml-3 flex items-center gap-1.5 text-[10px] text-slate-400">
                  <GitBranch className="w-3 h-3" />
                  <span>main</span>
                </div>
              </div>

              {/* File tabs */}
              <div className="flex items-stretch text-[11px] bg-slate-800/40 border-b border-slate-700/60">
                <div className="px-3.5 py-2 font-medium text-sky-300 bg-slate-900 border-t-2 border-primary">
                  project.js
                </div>
                <div className="px-3.5 py-2 text-slate-500">api.js</div>
                <div className="px-3.5 py-2 text-slate-500">seo.config.js</div>
              </div>

              {/* Code body */}
              <div className="flex px-1 py-4 font-mono text-[11px] leading-[1.9]">
                {/* Line numbers */}
                <div className="select-none px-2 text-right text-slate-600">
                  {codeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Tokens */}
                <div className="flex-1 overflow-hidden pr-2">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className="whitespace-pre"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.4 + i * 0.11, ease: "easeOut" }}
                    >
                      {line.length === 0 ? (
                        <span>&nbsp;</span>
                      ) : (
                        line.map((tok, j) => (
                          <span key={j} className={tok.c}>
                            {tok.t}
                          </span>
                        ))
                      )}
                      {/* Blinking caret trails the final line */}
                      {i === codeLines.length - 1 && (
                        <motion.span
                          className="inline-block w-[6px] h-[12px] ml-0.5 align-middle bg-primary"
                          animate={reduceMotion ? undefined : { opacity: [1, 1, 0, 0] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Build status bar */}
              <motion.div
                className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 border-t border-slate-700/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[10px] font-medium text-emerald-400">Build passed</span>
                </div>

                {/* Tech logos we actually ship with */}
                <div className="flex items-center gap-2.5">
                  {techLogos.map((tech) => (
                    <img
                      key={tech.name}
                      src={tech.src}
                      alt={tech.name}
                      title={tech.name}
                      loading="lazy"
                      className="w-3.5 h-3.5 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Metric chips row — mobile only (inline instead of floating) */}
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

            {/* Floating metric chips — desktop only.
                Outer node owns the entrance, inner node owns the idle float, so the
                two animations don't fight over the same `y`. */}
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

export default HeroSection;
