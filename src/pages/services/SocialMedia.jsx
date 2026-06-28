import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  const services = [
    { title: "Content Strategy", description: "Data-driven content plans tailored to your audience", icon: "📋", features: ["Monthly Content Calendar", "Brand Voice Guidelines", "Competitor Analysis", "Trend Research"] },
    { title: "Content Creation", description: "Scroll-stopping visuals and copy for every platform", icon: "🎨", features: ["Graphics & Reels", "Caption Writing", "Story Templates", "Hashtag Strategy"] },
    { title: "Community Management", description: "Build loyal communities and meaningful engagement", icon: "💬", features: ["Comment Responses", "DM Management", "Review Monitoring", "Audience Building"] },
    { title: "Paid Social Ads", description: "Targeted ad campaigns that maximize your ROI", icon: "🎯", features: ["Facebook & Instagram Ads", "Audience Targeting", "A/B Testing", "Budget Optimization"] },
    { title: "Influencer Marketing", description: "Connect with local and national influencers", icon: "⭐", features: ["Influencer Outreach", "Campaign Management", "Performance Tracking", "Contract Negotiation"] },
    { title: "Analytics & Reporting", description: "Clear insights into what's working and why", icon: "📊", features: ["Monthly Reports", "Engagement Metrics", "Growth Tracking", "Strategy Adjustments"] },
  ];

  return (
    <>
      <Helmet>
        <title>Social Media Management Services in Amravati | WebCultivate</title>
        <meta name="description" content="Professional social media management in Amravati. Content creation, community management, paid ads, and growth strategies for Instagram, Facebook & more." />
        <meta name="keywords" content="social media management Amravati, Instagram marketing, Facebook ads, content creation, social media agency" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 text-pink-600 dark:text-pink-400 rounded-full text-sm font-semibold border border-pink-500/20">
                Social Media Management
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-4">
                Grow Your Brand on{' '}
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
                  Social Media
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                From strategy to execution — we manage your social media presence so you can focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Growing Today
                </Link>
                <Link to="/pricing" className="px-8 py-4 border-2 border-pink-500 text-pink-600 dark:text-pink-400 font-semibold rounded-2xl hover:bg-pink-500 hover:text-white transition-all duration-300">
                  View Packages
                </Link>
              </div>
            </motion.div>

            <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=600&fit=crop&crop=center" alt="Social Media Management" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Our Social Media Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to dominate social media and turn followers into loyal customers.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5 }}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
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
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Why Let Us Manage Your Social Media?</h2>
                <div className="space-y-6">
                  {[
                    { title: "Consistent Posting", desc: "Never miss a posting schedule with our managed content calendar" },
                    { title: "Platform Expertise", desc: "Instagram, Facebook, LinkedIn, YouTube — we know each platform inside out" },
                    { title: "Local Market Knowledge", desc: "We understand Amravati's audience and what resonates with them" },
                    { title: "Creative Content", desc: "Professionally designed posts that stop the scroll" },
                    { title: "Real-Time Engagement", desc: "We engage with your community to build trust and loyalty" },
                    { title: "Measurable Growth", desc: "Monthly reports showing follower growth, reach, and conversions" },
                  ].map((item, index) => (
                    <motion.div key={index} className="flex items-start space-x-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                      <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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

              <motion.div className="relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop&crop=center" alt="Social Media Growth" className="rounded-3xl shadow-2xl w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Build Your Social Presence?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's craft a social media strategy that grows your audience and drives real business results.</p>
              <Link to="/contact" className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialMedia;
