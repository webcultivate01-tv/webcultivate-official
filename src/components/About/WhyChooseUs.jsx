import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Layers,
  HeartHandshake,
  CalendarCheck,
  Wallet,
  LifeBuoy,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

// Each reason pairs the claim with a concrete proof point — the visitor is
// choosing an agency, so every card answers "why should I believe that?"
const reasons = [
  {
    number: "01",
    Icon: Users,
    title: "Expert Team",
    description:
      "A skilled senior team with strong experience in modern web development and UI/UX design — no work handed off to juniors.",
    proof: "50+ projects shipped",
  },
  {
    number: "02",
    Icon: Layers,
    title: "Modern Technology",
    description:
      "We build on the latest frameworks and best practices, so your site is fast, secure and scalable from day one.",
    proof: "React · Node · Tailwind stack",
  },
  {
    number: "03",
    Icon: HeartHandshake,
    title: "Client-Focused Approach",
    description:
      "We listen first, understand your goals, and deliver solutions aligned with your business — not our portfolio.",
    proof: "Rated 5.0 by 25+ clients",
  },
  {
    number: "04",
    Icon: CalendarCheck,
    title: "On-Time Delivery",
    description:
      "A written scope and delivery date before we start, with weekly builds you can review as we go.",
    proof: "Fixed scope, fixed timeline",
  },
  {
    number: "05",
    Icon: Wallet,
    title: "Transparent Pricing",
    description:
      "High-quality work at prices built for startups and growing businesses — quoted up front, no surprise invoices.",
    proof: "Fixed quote before kickoff",
  },
  {
    number: "06",
    Icon: LifeBuoy,
    title: "Ongoing Support",
    description:
      "Launch day is the start, not the exit. We stay on to help your business scale smoothly.",
    proof: "30 days free post-launch support",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Static background glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Six reasons businesses{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              stay with us
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Anyone can promise a great website. Here's what working with
            WebCultivate actually gets you — and the proof behind each claim.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map(({ number, Icon, title, description, proof }) => (
            <motion.div
              key={number}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Accent rail — sweeps across on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

              {/* Oversized number, sits behind the content */}
              <span className="absolute top-4 right-5 font-mono text-5xl font-bold text-slate-100 dark:text-slate-700/40 select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/10">
                {number}
              </span>

              <div className="relative flex flex-col h-full p-6 sm:p-7">
                {/* Icon tile */}
                <span className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {description}
                </p>

                {/* Proof point */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <p className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <BadgeCheck className="w-4 h-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {proof}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing link — the page's single CTA lives at the bottom. */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link
            to="/testimonials"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-primary-light hover:gap-2.5 transition-all duration-300"
          >
            Hear it from our clients
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
