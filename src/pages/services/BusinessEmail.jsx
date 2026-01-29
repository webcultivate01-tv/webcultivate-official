import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BusinessEmail = () => {
  const features = [
    {
      title: "Professional Email Addresses",
      description: "Create custom email addresses with your domain name",
      icon: "📧"
    },
    {
      title: "Large Storage Space",
      description: "Generous storage capacity for all your business emails",
      icon: "💾"
    },
    {
      title: "Mobile Access",
      description: "Access your emails from any device, anywhere",
      icon: "📱"
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with spam and virus protection",
      icon: "🔒"
    },
    {
      title: "Calendar Integration",
      description: "Built-in calendar and scheduling features",
      icon: "📅"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support for your email needs",
      icon: "🎧"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹199",
      period: "/month",
      storage: "10 GB",
      accounts: "5 Email Accounts",
      features: ["Custom Domain Email", "Mobile Access", "Basic Security", "Email Support"]
    },
    {
      name: "Business",
      price: "₹399",
      period: "/month",
      storage: "50 GB",
      accounts: "25 Email Accounts",
      features: ["Everything in Starter", "Calendar Integration", "Advanced Security", "Priority Support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹799",
      period: "/month",
      storage: "Unlimited",
      accounts: "Unlimited Accounts",
      features: ["Everything in Business", "Advanced Admin Controls", "API Access", "Dedicated Support"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Email Services in Amravati | WebCultivate</title>
        <meta name="description" content="Professional business email services in Amravati. Custom domain emails with advanced security, mobile access, and 24/7 support for your business." />
        <meta name="keywords" content="business email Amravati, professional email services, custom domain email, email hosting, secure email" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
                Business Email
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-4">
                Professional{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Business Email
                </span>{" "}
                Solutions
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Establish credibility and enhance communication with professional email addresses for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Business Email
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold rounded-2xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  View Email Plans
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
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=600&fit=crop&crop=center"
                alt="Business Email Services"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent" />
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
                Why Choose Our Business Email?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Professional email solutions designed to enhance your business communication and credibility.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Choose Your Email Plan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Flexible email plans to suit businesses of all sizes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20 scale-105' 
                      : 'border-gray-200 dark:border-slate-700 hover:shadow-xl'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: plan.popular ? 0 : -5 }}
                >
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 bg-indigo-500 text-white text-sm rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {plan.storage} Storage
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {plan.accounts}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 font-semibold rounded-2xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-xl'
                        : 'border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 to-purple-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Upgrade Your Business Communication?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get professional email addresses that build trust and enhance your business credibility.
              </p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Setup Business Email Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessEmail;