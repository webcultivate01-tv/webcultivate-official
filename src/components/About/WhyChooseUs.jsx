import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Expert Team",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description:
        "A skilled team of professionals with strong experience in modern web development and UI/UX design.",
    },
    {
      number: "02",
      title: "Modern Technology",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      description:
        "We use the latest frameworks, tools, and best practices to build secure and scalable solutions.",
    },
    {
      number: "03",
      title: "Client-Focused Approach",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      description:
        "We listen carefully, understand your goals, and deliver solutions aligned with your business needs.",
    },
    {
      number: "04",
      title: "On-Time Delivery",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
      description:
        "Structured workflows ensure projects are delivered on time without compromising quality.",
    },
    {
      number: "05",
      title: "Affordable Pricing",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      description:
        "High-quality services at competitive prices, tailored for startups and growing businesses.",
    },
    {
      number: "06",
      title: "Ongoing Support",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
      description:
        "Our support continues even after delivery to help your business scale smoothly.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Why Choose WebCultivate Amravati | Expert Web Development Company
        </title>
        <meta
          name="description"
          content="Why choose WebCultivate Software Solutions in Amravati? Expert team, modern technology, on-time delivery, affordable pricing, and reliable ongoing support."
        />
      </Helmet>

      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Why Choose WebCultivate?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              The reasons businesses trust WebCultivate Software Solutions.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur
                  rounded-3xl overflow-hidden border border-slate-200
                  dark:border-slate-700 shadow-lg hover:shadow-2xl
                  transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span
                    className="absolute top-4 left-4 text-4xl font-extrabold
                    text-white/80"
                  >
                    {reason.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reason.description}
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

export default WhyChooseUs;
