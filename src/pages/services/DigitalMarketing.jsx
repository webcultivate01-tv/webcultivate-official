import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const services = [
    {
      title: "Search Engine Optimization",
      description: "Improve your website's visibility on search engines",
      icon: "🔍",
      features: ["Keyword Research", "On-page SEO", "Link Building", "Technical SEO"]
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across all social platforms",
      icon: "📱",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"]
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Targeted ads that drive immediate results",
      icon: "💰",
      features: ["Google Ads", "Facebook Ads", "Campaign Management", "ROI Optimization"]
    },
    {
      title: "Content Marketing",
      description: "Valuable content that attracts and retains customers",
      icon: "📝",
      features: ["Blog Writing", "Video Content", "Infographics", "Email Marketing"]
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers with email campaigns",
      icon: "📧",
      features: ["Campaign Design", "Automation", "Segmentation", "Performance Tracking"]
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing",
      icon: "📊",
      features: ["Google Analytics", "Performance Reports", "ROI Analysis", "Strategy Optimization"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services in Amravati | WebCultivate</title>
        <meta name="description" content="Comprehensive digital marketing services in Amravati. SEO, social media marketing, PPC advertising, and content marketing to grow your business online." />
        <meta name="keywords" content="digital marketing Amravati, SEO services, social media marketing, PPC advertising, content marketing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold border border-orange-500/20">
                Digital Marketing
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-4">
                Grow Your Business with{" "}
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Reach your target audience, increase brand awareness, and drive sales with our comprehensive digital marketing strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Marketing Campaign
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-orange-500 text-orange-600 dark:text-orange-400 font-semibold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  View Marketing Packages
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center"
                alt="Digital Marketing Services"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Our Digital Marketing Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions to help your business thrive in the digital landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Why Choose Our Digital Marketing?
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Data-Driven Strategies", desc: "Decisions based on analytics and performance metrics" },
                    { title: "Targeted Campaigns", desc: "Reach the right audience at the right time" },
                    { title: "ROI Focused", desc: "Maximize your return on marketing investment" },
                    { title: "Multi-Channel Approach", desc: "Integrated campaigns across all digital platforms" },
                    { title: "Transparent Reporting", desc: "Regular updates on campaign performance" },
                    { title: "Local Expertise", desc: "Deep understanding of Amravati market dynamics" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                  alt="Digital Marketing Analytics"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's create a digital marketing strategy that drives real results for your business.
              </p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Marketing Journey
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalMarketing;