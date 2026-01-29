import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DomainRegistration = () => {
  const features = [
    {
      title: "Domain Search & Registration",
      description: "Find and register the perfect domain for your business",
      icon: "🔍"
    },
    {
      title: "Domain Transfer",
      description: "Seamlessly transfer your existing domains to our platform",
      icon: "🔄"
    },
    {
      title: "DNS Management",
      description: "Complete control over your domain's DNS settings",
      icon: "⚙️"
    },
    {
      title: "Domain Protection",
      description: "Protect your domain with privacy and security features",
      icon: "🛡️"
    },
    {
      title: "SSL Certificates",
      description: "Secure your website with SSL encryption",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support for all domain issues",
      icon: "🎧"
    }
  ];

  const extensions = [
    { ext: ".com", price: "₹999", popular: true },
    { ext: ".in", price: "₹799", popular: true },
    { ext: ".org", price: "₹1299", popular: false },
    { ext: ".net", price: "₹1199", popular: false },
    { ext: ".co.in", price: "₹699", popular: true },
    { ext: ".info", price: "₹1499", popular: false }
  ];

  return (
    <>
      <Helmet>
        <title>Domain Registration Services in Amravati | WebCultivate</title>
        <meta name="description" content="Professional domain registration services in Amravati. Register .com, .in, .org domains with DNS management, SSL certificates, and 24/7 support." />
        <meta name="keywords" content="domain registration Amravati, buy domain name, DNS management, SSL certificates, domain transfer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/20">
                Domain Registration
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-4">
                Secure Your{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Perfect Domain
                </span>{" "}
                Today
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Register your ideal domain name and establish your online presence with our reliable domain registration services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register Domain
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Pricing
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=center"
                alt="Domain Registration Services"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
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
                Popular Domain Extensions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose from a wide range of domain extensions at competitive prices.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {extensions.map((domain, index) => (
                <motion.div
                  key={index}
                  className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition-all duration-300 ${
                    domain.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-gray-200 dark:border-slate-700'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {domain.popular && (
                    <span className="inline-block px-2 py-1 bg-cyan-500 text-white text-xs rounded-full mb-2">
                      Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {domain.ext}
                  </h3>
                  <p className="text-xl font-semibold text-cyan-600 dark:text-cyan-400">
                    {domain.price}/year
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Claim Your Domain?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait - secure your perfect domain name before someone else does.
              </p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Register Your Domain Now
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DomainRegistration;