import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | WebCultivate Software Solutions Amravati</title>
        <meta name="description" content="Privacy Policy for WebCultivate Software Solutions, Amravati. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&crop=center"
              alt="Privacy and Security"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Your Privacy Matters</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Privacy{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <motion.div
                    className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 border border-gray-200 dark:border-slate-700"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center"
                      alt="Data Protection"
                      className="w-full h-48 object-cover rounded-2xl mb-6"
                    />
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Quick Navigation
                    </h3>
                    
                    <nav className="space-y-2">
                      {[
                        'Information We Collect',
                        'How We Use Your Information',
                        'Information Sharing',
                        'Data Security',
                        'Your Rights',
                        'Contact Us'
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={`#section-${index + 1}`}
                          className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </motion.div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-slate-700"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="text-center mb-8">
                    <p className="text-gray-500 dark:text-gray-400">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </div>

                  <div className="space-y-12">
                    <section id="section-1">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Information We Collect
                        </h2>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-6">
                        <img
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&crop=center"
                          alt="Data Collection"
                          className="w-full h-40 object-cover rounded-xl mb-4"
                        />
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          WebCultivate Software Solutions collects information you provide directly to us, such as when you:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Fill out our contact forms',
                            'Request quotes or consultations',
                            'Subscribe to our newsletter',
                            'Communicate with us via email or phone'
                          ].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>

                    <section id="section-2">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          How We Use Your Information
                        </h2>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <img
                              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
                              alt="Data Usage"
                              className="w-full h-32 object-cover rounded-xl mb-4"
                            />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Delivery</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Provide and improve our services</p>
                          </div>
                          <div>
                            <img
                              src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop&crop=center"
                              alt="Communication"
                              className="w-full h-32 object-cover rounded-xl mb-4"
                            />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Communication</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Respond to inquiries and requests</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section id="section-3">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Data Security
                        </h2>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
                        <img
                          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop&crop=center"
                          alt="Security"
                          className="w-full h-40 object-cover rounded-xl mb-4"
                        />
                        <p className="text-gray-700 dark:text-gray-300">
                          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted and stored securely.
                        </p>
                      </div>
                    </section>

                    <section id="section-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                        <div className="text-center">
                          <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop&crop=center"
                            alt="Contact Us"
                            className="w-full h-48 object-cover rounded-2xl mb-6 opacity-90"
                          />
                          <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
                          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            If you have any questions about this Privacy Policy, please don't hesitate to contact us.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="font-semibold">Email</p>
                              <p className="text-blue-100 text-sm">info@webcultivate.com</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                              </div>
                              <p className="font-semibold">Phone</p>
                              <p className="text-blue-100 text-sm">+91 7821096438</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              <p className="font-semibold">Location</p>
                              <p className="text-blue-100 text-sm">Amravati, Maharashtra</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;