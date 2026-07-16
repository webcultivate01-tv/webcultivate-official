import React from "react";
import { motion } from "framer-motion";
import { Globe, CalendarClock, FileText, UserCheck } from "lucide-react";

// Flags come from flagcdn as images rather than emoji: Windows ships no flag
// emoji font, so 🇨🇦 renders as the bare letters "CA" for most desktop visitors.
const countries = [
  { name: "Canada", code: "ca" },
  { name: "United States", code: "us" },
  { name: "Portugal", code: "pt" },
  { name: "United Kingdom", code: "gb" },
  { name: "Nigeria", code: "ng" },
];

// Each card answers one real objection to hiring a remote team abroad — time,
// clarity, control. Nothing here repeats the country chips or the headline.
const commitments = [
  {
    Icon: CalendarClock,
    title: "Calls in your working hours",
    body: "We schedule around your business day, not ours. You never take a meeting at midnight.",
  },
  {
    Icon: FileText,
    title: "Written progress, not status calls",
    body: "Every update is documented, so you read where the project stands whenever you sit down.",
  },
  {
    Icon: UserCheck,
    title: "One point of contact",
    body: "The person you brief is the person building your project. Nothing gets lost in a handoff.",
  },
];

const GlobalReach = () => {
  return (
    <section className="relative py-14 sm:py-16 bg-white dark:bg-slate-900 border-y border-slate-900/[0.06] dark:border-white/[0.07] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary dark:text-primary-light">
            <Globe className="w-3.5 h-3.5" strokeWidth={2.25} />
            Global Reach
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.025em] text-slate-900 dark:text-white [text-wrap:balance]">
            Built in Amravati.{" "}
            <span className="bg-gradient-to-r from-primary to-secondary-light bg-clip-text text-transparent">
              Delivered across five countries.
            </span>
          </h2>

          {/* The chips below list the countries — this line earns its place by
              answering the objection instead of repeating the fact. */}
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-[1.7]">
            Different time zones, the same standard of work: a scope agreed before we
            start, updates you can read while we build, and a direct line to the people
            doing the building.
          </p>
        </motion.div>

        {/* Country row */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
          className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {countries.map(({ name, code }) => (
            <motion.li
              key={code}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              className="group flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800/60 ring-1 ring-slate-900/[0.07] dark:ring-white/10 hover:ring-primary/40 hover:bg-primary/[0.04] dark:hover:bg-primary/10 transition-colors duration-300"
            >
              {/* 2x source for a 24px slot keeps the flag crisp on retina */}
              <img
                src={`https://flagcdn.com/w40/${code}.png`}
                srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
                alt=""
                width={24}
                height={18}
                loading="lazy"
                className="w-6 h-[18px] shrink-0 rounded-[3px] object-cover ring-1 ring-slate-900/10 dark:ring-white/15"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                {name}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* How the distance is actually handled */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
        >
          {commitments.map(({ Icon, title, body }) => (
            <motion.li
              key={title}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="text-left p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 ring-1 ring-slate-900/[0.06] dark:ring-white/[0.08]"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary dark:text-primary-light">
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.9} />
              </span>
              <h3 className="mt-3.5 text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                {body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default GlobalReach;
