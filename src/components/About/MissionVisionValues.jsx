import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const MissionVisionValues = () => {
  const cards = [
    {
      title: "Our Mission",
      image: "./mission.jpg",
      description:
        "To empower businesses with high-quality digital solutions that drive growth, improve user experience, and build long-term online success.",
    },
    {
      title: "Our Vision",
      image:
        "./vision.jpg",
      description:
        "To become a trusted digital partner for businesses worldwide, known for innovation, performance, and reliable technology solutions.",
    },
    {
      title: "Our Values",
      image:
        "./values.jpg",
      description:
        "We believe in quality, transparency, innovation, and client satisfaction—values that guide every project at WebCultivate.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Mission, Vision & Values - WebCultivate Amravati</title>
        <meta
          name="description"
          content="Explore WebCultivate Software Solutions’ mission, vision, and values. We empower businesses in Amravati with modern, scalable digital solutions."
        />
        <meta
          name="keywords"
          content="WebCultivate mission, IT company Amravati, web development values, software solutions vision"
        />
      </Helmet>

      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              The principles that define how WebCultivate Software Solutions
              builds trusted, high-impact digital products.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
<motion.div
  key={index}
  custom={index}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="group relative bg-white/70 dark:bg-slate-900/70
    backdrop-blur-xl rounded-3xl border border-slate-200
    dark:border-slate-700 shadow-lg hover:shadow-2xl
    transition-all duration-300 overflow-hidden"
>
  {/* Image Section */}
  <div className="relative h-44">
    <img
      src={card.image}
      alt={card.title}
      className="w-full h-full object-cover transition-transform
        duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

    {/* Floating Badge */}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2
      w-14 h-14 rounded-2xl bg-white dark:bg-slate-800
      flex items-center justify-center shadow-lg border
      border-slate-200 dark:border-slate-700">
      <span className="text-xl font-extrabold
        bg-gradient-to-r from-blue-500 to-indigo-500
        bg-clip-text text-transparent">
        {index + 1}
      </span>
    </div>
  </div>

  {/* Content */}
  <div className="pt-12 px-8 pb-8 text-center">
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
      {card.title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
      {card.description}
    </p>
  </div>
</motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionValues;
