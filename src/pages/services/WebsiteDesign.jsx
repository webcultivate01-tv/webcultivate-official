import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const WebsiteDesign = () => {
  const features = [
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Unique designs tailored to your brand identity and business goals"
    },
    {
      icon: "📱",
      title: "Responsive Layout",
      description: "Perfect viewing experience across all devices and screen sizes"
    },
    {
      icon: "⚡",
      title: "Fast Loading",
      description: "Optimized for speed and performance to enhance user experience"
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: "Built with SEO best practices to improve search engine rankings"
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Industry-standard security measures and reliable hosting solutions"
    },
    {
      icon: "🎯",
      title: "User-Focused",
      description: "Intuitive navigation and user-friendly interface design"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your business goals, target audience, and design preferences"
    },
    {
      step: "02",
      title: "Design & Wireframing",
      description: "Creating wireframes and visual designs that align with your brand"
    },
    {
      step: "03",
      title: "Development",
      description: "Converting designs into responsive, functional websites"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing across devices and browsers before going live"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Website Design Services in Amravati | WebCultivate</title>
        <meta name="description" content="Professional website design services in Amravati. Custom, responsive, and SEO-optimized designs that drive results. Get a stunning website for your business." />
        <meta name="keywords" content="website design Amravati, web design services, responsive design, custom website design, UI UX design" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold border border-primary/20">
                  Website Design
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Stunning{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent">
                  Website Designs
                </span>{" "}
                That Convert
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your online presence with custom website designs that captivate your audience and drive business growth in Amravati and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-primary text-primary dark:text-primary-light font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop&crop=center"
                alt="Website Design Services"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                Why Choose Our Website Design Services?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We create websites that not only look amazing but also deliver exceptional user experiences and drive business results.
              </p>
            </motion.div>

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

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Our Design Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A systematic approach to creating websites that exceed expectations and deliver measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Our Design Portfolio
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore some of our recent website design projects that showcase our creativity and expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=${item}`}
                    alt={`Design Portfolio ${item}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-1">Project {item}</h3>
                    <p className="text-sm">Modern website design</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="  py-20 px-4 sm:px-6 lg:px-8
  bg-gradient-to-br
  from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's create a stunning website that represents your brand and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-primary transition-all duration-300"
                >
                  View Our Packages
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebsiteDesign;