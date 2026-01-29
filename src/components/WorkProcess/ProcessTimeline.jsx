import React from "react";

const ProcessTimeline = () => {
  const processes = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We understand your vision, goals, and requirements to define a clear roadmap.",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Design",
      description:
        "We design intuitive UI/UX and visual concepts aligned with your brand.",
      icon: "🎨",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We build scalable, secure, and high-performance solutions using modern tech.",
      icon: "💻",
    },
    {
      step: "04",
      title: "Testing",
      description:
        "Every feature is tested for performance, security, and usability.",
      icon: "✔",
    },
    {
      step: "05",
      title: "Launch",
      description:
        "We deploy your project with optimized performance and zero downtime.",
      icon: "🚀",
    },
    {
      step: "06",
      title: "Support",
      description:
        "Continuous support, updates, and improvements after launch.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full
            text-sm font-semibold text-blue-600 bg-blue-100/70
            dark:text-blue-300 dark:bg-blue-900/40"
          >
            Our Process
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold
            text-slate-900 dark:text-white mb-4"
          >
            A Simple & Transparent Workflow
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our structured process ensures clarity, efficiency, and quality
            delivery at every stage.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-blue-300 dark:bg-blue-700" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {processes.map((process, index) => (
              <div
                key={index}
                className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur
                  border border-slate-200 dark:border-slate-700
                  rounded-2xl p-6 text-center shadow-lg
                  hover:shadow-2xl transition-all duration-300"
              >
                {/* Step Circle */}
                <div
                  className="relative z-10 mx-auto mb-4 w-14 h-14 rounded-full
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  flex items-center justify-center text-white
                  font-bold text-lg shadow-lg"
                >
                  {process.step}
                </div>

                {/* Icon */}
                <div className="text-3xl mb-3">{process.icon}</div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
