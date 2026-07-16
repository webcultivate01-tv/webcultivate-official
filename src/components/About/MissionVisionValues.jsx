import React from "react";
import { motion } from "framer-motion";
import { Target, Telescope, HeartHandshake, Check } from "lucide-react";

// Each pillar ends with "what this means for you" — the section sells the
// visitor on how we work, not just what we believe.
const pillars = [
  {
    Icon: Target,
    title: "Our Mission",
    accent: "text-primary bg-primary/10 dark:bg-primary/20",
    description:
      "To empower businesses with high-quality digital solutions that drive growth, improve user experience, and build long-term online success.",
    forYou: "Every decision on your project is measured against your growth.",
  },
  {
    Icon: Telescope,
    title: "Our Vision",
    accent: "text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/20",
    description:
      "To become a trusted digital partner for businesses worldwide, known for innovation, performance, and reliable technology solutions.",
    forYou: "We win by keeping you long-term — not by one-off invoices.",
  },
  {
    Icon: HeartHandshake,
    title: "Our Values",
    accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20",
    description:
      "Quality, transparency, innovation, and client satisfaction — the values that guide every project at WebCultivate.",
    forYou: "Honest scopes, honest timelines, and work we're proud to sign.",
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

const MissionVisionValues = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Static background glows — no animation loop, keeps the section calm */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/20">
            What Drives Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Built on a mission,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              run on values
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            These aren't wall posters. They're the standards your project is
            held to from the first call to launch day — and after.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {pillars.map(({ Icon, title, accent, description, forYou }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Accent rail — sweeps across on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />

              <div className="relative flex flex-col h-full p-6 sm:p-7">
                {/* Icon tile */}
                <span className={`flex items-center justify-center w-12 h-12 mb-5 rounded-xl ${accent} group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-105 transition-all duration-300`}>
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {description}
                </p>

                {/* What this means for the client */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="flex items-center justify-center w-4 h-4 mt-px shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                      <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" strokeWidth={3.5} />
                    </span>
                    <span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">For you: </span>
                      {forYou}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
