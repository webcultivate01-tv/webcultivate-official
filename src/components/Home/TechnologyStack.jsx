import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "React.js",
    description: "Building dynamic and interactive web applications.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    description: "Optimized performance with server-side rendering and SEO.",
    icon: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
  },
  {
    name: "Tailwind CSS",
    description: "Modern, utility-first CSS framework for responsive designs.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Node.js",
    description: "Scalable and high-performance backend solutions.",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "React Native",
    description: "Build mobile apps using React for iOS and Android.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Java",
    description: "Robust backend & Android development.",
    icon: "https://cdn.worldvectorlogo.com/logos/java.svg",
  },
  {
    name: "Python",
    description: "Backend, automation & data science.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "MongoDB",
    description: "Flexible NoSQL database.",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "MySQL",
    description: "Reliable relational database.",
    icon: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg",
  },
  {
    name: "Express.js",
    description: "Minimal Node.js framework.",
    icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
  },
  {
    name: "Flutter",
    description: "One codebase for iOS & Android apps.",
    icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechnologyStack = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies we use to build scalable, secure, and future-ready
            products
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl 
                         rounded-2xl p-5 border border-white/40 dark:border-slate-700
                         shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 
                              opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mb-4 rounded-full bg-white dark:bg-slate-900 
                             flex items-center justify-center ring-2 ring-primary/20"
                  whileHover={{ rotate: 10 }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain grayscale 
                               group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                </motion.div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="hidden sm:block text-xs text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
