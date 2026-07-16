import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Grouped by the role each tool plays on a project, so a non-technical visitor
// can read the section as "what you get" rather than a list of logos.
const stackGroups = [
  {
    Icon: Layout,
    category: "Frontend",
    summary: "Interfaces that load fast and rank well",
    technologies: [
      {
        name: "React.js",
        description: "Dynamic, interactive interfaces",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Next.js",
        description: "Server rendering built for SEO",
        icon: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
      },
      {
        name: "Tailwind CSS",
        description: "Responsive design system",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    Icon: Server,
    category: "Backend",
    summary: "APIs and logic that scale with your traffic",
    technologies: [
      {
        name: "Node.js",
        description: "High-performance backends",
        icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      },
      {
        name: "Express.js",
        description: "Lightweight API layer",
        icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
      },
      {
        name: "Python",
        description: "Automation & data science",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        name: "Java",
        description: "Enterprise-grade services",
        icon: "https://cdn.worldvectorlogo.com/logos/java.svg",
      },
    ],
  },
  {
    Icon: Database,
    category: "Databases",
    summary: "Your data, structured and secure",
    technologies: [
      {
        name: "MongoDB",
        description: "Flexible NoSQL storage",
        icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      },
      {
        name: "MySQL",
        description: "Reliable relational data",
        icon: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg",
      },
    ],
  },
  {
    Icon: Smartphone,
    category: "Mobile",
    summary: "One codebase, both app stores",
    technologies: [
      {
        name: "React Native",
        description: "iOS & Android from one build",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const TechnologyStack = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-slate-50/70 dark:bg-slate-900 overflow-hidden">
      {/* Static background glows */}
      <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary dark:text-primary-light">
            Technology Stack
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-slate-900 dark:text-white [text-wrap:balance]">
            Built on tools that{" "}
            <span className="bg-gradient-to-r from-primary to-secondary-light bg-clip-text text-transparent">
              won't hold you back
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-[1.0625rem] text-slate-600 dark:text-slate-400 leading-[1.75]">
            We pick the stack to fit your project — never the other way around. Every
            technology here is production-proven, well-supported, and easy for any
            developer to pick up if you ever move on.
          </p>
        </motion.div>

        {/* Stack panel — one row per layer, read like a spec sheet */}
        <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/50 ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-xl shadow-slate-900/[0.04] dark:shadow-black/20 overflow-hidden">
          {stackGroups.map(({ Icon, category, summary, technologies }, i) => (
            <motion.div
              key={category}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.06 }}
              className="group/row grid grid-cols-1 lg:grid-cols-[minmax(0,15rem)_1fr] gap-5 lg:gap-8 p-5 sm:p-7 border-t first:border-t-0 border-slate-900/[0.07] dark:border-white/10 hover:bg-slate-50/70 dark:hover:bg-slate-800/70 transition-colors duration-300"
            >
              {/* Layer label */}
              <div className="flex items-start gap-3.5">
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary dark:text-primary-light group-hover/row:bg-gradient-to-br group-hover/row:from-primary group-hover/row:to-secondary group-hover/row:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                      {category}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                    {summary}
                  </p>
                </div>
              </div>

              {/* Tools in this layer */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
                {technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 ring-1 ring-slate-900/[0.06] dark:ring-white/[0.08] hover:ring-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* Tile stays white in dark mode too — Express/Java/Next ship
                        near-black logos that vanish against a dark surface. */}
                    <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-white ring-1 ring-slate-900/[0.06] dark:ring-white/10">
                      <img
                        src={tech.icon}
                        alt=""
                        loading="lazy"
                        className="w-5 h-5 object-contain"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 truncate">
                        {tech.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {tech.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-3 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Not sure which stack your project needs? That's our job — not yours.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-primary-light hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 rounded transition-all duration-300"
          >
            Talk it through with us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
