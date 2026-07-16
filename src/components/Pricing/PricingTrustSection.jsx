import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, LifeBuoy, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kartikesh Ganoskar',
    company: 'Founder of Cloud Graphics',
    text: 'WebCultivate delivered exactly what they promised. Great value for money and excellent support!',
    rating: 5
  },
  {
    name: 'Sanchit Pardhekar',
    company: 'Founder, WedClicks Photography',
    text: 'Professional team, transparent pricing, and delivered on time. Highly recommended!',
    rating: 5
  },
  {
    name: 'Adle Crco',
    company: 'Freelance Content Writer',
    text: 'Best web development company in Amravati. Quality work at reasonable prices.',
    rating: 5
  }
];

const guarantees = [
  {
    Icon: ShieldCheck,
    title: '100% Satisfaction Guarantee',
    description: "Not happy? We'll refund your money within 30 days"
  },
  {
    Icon: Clock,
    title: 'On-Time Delivery',
    description: 'We deliver projects on schedule or provide compensation'
  },
  {
    Icon: LifeBuoy,
    title: 'Free Support & Updates',
    description: 'Ongoing support and updates included in every package'
  }
];

const stats = [
  { number: '25+', label: 'Happy Clients' },
  { number: '50+', label: 'Projects Completed' },
  { number: '24/7', label: 'Support Available' },
  { number: '100%', label: 'Satisfaction Rate' }
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const PricingTrustSection = () => {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...fadeUp} className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-5">
            Trusted by <span className="text-blue-600 dark:text-blue-500">Businesses</span> in Amravati
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Join hundreds of satisfied clients who chose WebCultivate for reliable,
            professional web development services with transparent pricing.
          </p>
        </motion.div>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-950 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center sm:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">{stat.number}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.h3 {...fadeUp} className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-10">
          What Our Clients Say About Our Pricing
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="relative flex flex-col h-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 dark:text-slate-800" fill="currentColor" />

              <div className="flex gap-0.5 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-1">
                “{testimonial.text}”
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-slate-200 dark:border-slate-800">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.company}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-white dark:bg-slate-950 p-7 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-105 transition-transform duration-300">
                <guarantee.Icon className="w-5 h-5" />
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{guarantee.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTrustSection;
