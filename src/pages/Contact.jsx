import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ContactInfo, ContactForm } from '../components/Contact';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact WebCultivate Amravati | Get Free Quote for Web Development</title>
        <meta name="description" content="Contact WebCultivate for professional web development services in Amravati. Call +91 7821096438 or email info@webcultivate.com for free consultation and quotes." />
        <meta name="keywords" content="contact WebCultivate, web development quote Amravati, website design consultation, digital marketing services Amravati, free web development quote" />
        <meta property="og:title" content="Contact WebCultivate - Web Development Company in Amravati" />
        <meta property="og:description" content="Get in touch with WebCultivate for expert web development services in Amravati. Free consultation and competitive quotes available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/contact" />
        <link rel="canonical" href="https://www.webcultivate.com/contact" />
      </Helmet>
      
      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
                    Get In Touch
                  </span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight">
                  Let's Bring Your{" "}
                  <motion.span 
                    className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Vision to Life
                  </motion.span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Ready to transform your business with cutting-edge web solutions? 
                  Our team in Amravati is here to help you succeed in the digital world.
                </p>

                {/* Quick Contact Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="text-center lg:text-left"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-2xl sm:text-3xl font-bold text-primary mb-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      24hrs
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
                  </motion.div>
                  <motion.div 
                    className="text-center lg:text-left"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-2xl sm:text-3xl font-bold text-primary mb-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      Free
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Consultation</div>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="tel:+917821096438"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                    >
                      <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Now</span>
                    </a>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#contact-form"
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary dark:text-primary-light font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Send Message
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop&crop=center"
                    alt="Contact us"
                    className="w-full max-w-lg mx-auto h-80 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
                </motion.div>

                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

