import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE_STATS } from "../../constants/stats";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.12 },
  }),
};

// Floating metric chips on the right panel
const chips = [
  {
    icon: "📈",
    label: "Avg. Traffic Growth",
    value: "+340%",
    color: "from-primary/10 to-secondary/10",
    border: "border-primary/20",
    pos: "top-[8%] -left-[14%]",
  },
  {
    icon: "⚡",
    label: "Page Load Speed",
    value: "< 1.2s",
    color: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    border: "border-emerald-200 dark:border-emerald-700/40",
    pos: "top-[8%] -right-[12%]",
  },
  {
    icon: "🎯",
    label: "Conversion Rate",
    value: "+2.8×",
    color: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
    border: "border-amber-200 dark:border-amber-700/40",
    pos: "bottom-[14%] -right-[12%]",
  },
  {
    icon: "🛡️",
    label: "Uptime Guarantee",
    value: "99.9%",
    color: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
    border: "border-violet-200 dark:border-violet-700/40",
    pos: "bottom-[14%] -left-[14%]",
  },
];

const services = [
  "Web Design",
  "SEO",
  "Branding",
  "E-commerce",
  "Mobile Apps",
];

const HeroSection = () => {
  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      {/* Background glows — clipped wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-10 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">

            <motion.span
              custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-5"
            >
              🚀 Trusted by Growing Businesses
            </motion.span>

            <motion.h1
              custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.13] tracking-tight text-slate-900 dark:text-white"
            >
              Helping Businesses{" "}
              <span className="relative">
                <motion.span
                  className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Grow Online
                </motion.span>
              </span>{" "}
              With Smart Digital Solutions
            </motion.h1>

            <motion.p
              custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl"
            >
              We design high-performing websites, develop custom software, and create digital experiences that turn visitors into paying customers.
            </motion.p>

            {/* Stats row */}
            <motion.div
              custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-8"
            >
              {SITE_STATS.map((s, i) => (
                <div key={i} className={i !== SITE_STATS.length - 1 ? "pr-8 border-r border-slate-200 dark:border-slate-700" : ""}>
                  <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-9 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Free Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/work-process"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                View Our Process
              </Link>
            </motion.div>

            {/* Social proof avatars */}
            <motion.div
              custom={5} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex items-center gap-3 mt-8"
            >
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="client"
                    className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-0.5 text-amber-400 text-xs">{"★★★★★"}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Loved by 25+ clients</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <motion.div
            className="order-1 lg:order-2 relative flex items-center justify-center lg:py-12 lg:px-16"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            {/* Rotating ring — desktop only (chips need space) */}
            <motion.div
              className="hidden lg:block absolute w-[480px] h-[480px] rounded-full border border-dashed border-primary/20 dark:border-primary/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner glow */}
            <div className="absolute w-[280px] h-[280px] bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-[80px]" />

            {/* Browser mockup card — full width on mobile, fixed on desktop */}
            <div className="relative z-10 w-full max-w-sm lg:w-[380px] lg:max-w-none bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-primary/15 border border-slate-200 dark:border-slate-700 overflow-hidden">

              {/* Browser chrome bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="ml-3 flex-1 h-5 bg-slate-200 dark:bg-slate-700 rounded-md flex items-center px-2">
                  <span className="text-[9px] text-slate-400 truncate">webcultivate.in</span>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative">
                <img
                  src="./hero-center.png"
                  alt="WebCultivate Dashboard Preview"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "200px" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-slate-800 to-transparent" />
              </div>

              {/* Card content */}
              <div className="px-5 pb-5 pt-2">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Our Services</p>
                <p className="text-sm font-bold text-slate-800 dark:text-white mb-3">
                  Full-stack digital solutions, built to convert.
                </p>

                {/* Service pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {services.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light border border-primary/15"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Mini progress bars */}
                {[
                  { label: "Client Satisfaction", pct: "96%" },
                  { label: "On-Time Delivery", pct: "92%" },
                ].map(({ label, pct }) => (
                  <div key={label} className="mb-2">
                    <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">
                      <span>{label}</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{pct}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: pct }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}

                {/* Metric chips row — mobile only (inline instead of floating) */}
                <div className="grid grid-cols-2 gap-2 mt-4 lg:hidden">
                  {chips.map((chip, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br ${chip.color} border ${chip.border}`}
                    >
                      <span className="text-base leading-none">{chip.icon}</span>
                      <div>
                        <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-none mb-0.5">{chip.label}</p>
                        <p className="text-xs font-extrabold text-slate-800 dark:text-white leading-none">{chip.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating metric chips — desktop only */}
            {chips.map((chip, i) => (
              <motion.div
                key={i}
                className={`hidden lg:flex absolute ${chip.pos} z-20 items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br ${chip.color} border ${chip.border} shadow-lg backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: "backOut" }}
                viewport={{ once: true }}
                animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
              >
                <span className="text-lg leading-none">{chip.icon}</span>
                <div>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-none mb-0.5">{chip.label}</p>
                  <p className="text-sm font-extrabold text-slate-800 dark:text-white leading-none">{chip.value}</p>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
