import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | WebCultivate Software Solutions Amravati</title>
        <meta name="description" content="Terms and Conditions for WebCultivate Software Solutions, Amravati. Read our terms of service and usage policies." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&crop=center"
              alt="Legal Documents"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">Legal Terms</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Terms &{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services. By using WebCultivate's services, you agree to these terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
                      alt="Legal Agreement"
                      className="w-full h-48 object-cover rounded-2xl mb-6"
                    />
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Quick Access
                    </h3>
                    
                    <nav className="space-y-2">
                      {[
                        'Services Provided',
                        'Payment Terms',
                        'Project Timeline',
                        'Intellectual Property',
                        'Revisions Policy',
                        'Contact Information'
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={`#section-${index + 1}`}
                          className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </motion.div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Services Section */}
                  <div id="section-1" className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Services We Provide
                      </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: 'Website Design',
                          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center',
                          desc: 'Custom responsive designs'
                        },
                        {
                          title: 'Web Development',
                          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center',
                          desc: 'Modern web applications'
                        },
                        {
                          title: 'Digital Marketing',
                          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
                          desc: 'SEO & social media marketing'
                        }
                      ].map((service, index) => (
                        <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-4">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-32 object-cover rounded-xl mb-3"
                          />
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{service.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Terms */}
                  <div id="section-2" className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Payment Terms
                      </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center"
                          alt="Payment"
                          className="w-full h-48 object-cover rounded-2xl mb-6"
                        />
                        <div className="space-y-4">
                          {[
                            '50% advance payment required',
                            'Remaining 50% due upon completion',
                            'Monthly retainer services billed in advance',
                            'Late payments may include additional charges'
                          ].map((term, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                                <span className="text-green-600 dark:text-green-400 font-bold text-sm">{index + 1}</span>
                              </div>
                              <span className="text-gray-700 dark:text-gray-300">{term}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Accepted Payment Methods</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { name: 'Bank Transfer', icon: '🏦' },
                            { name: 'UPI Payment', icon: '📱' },
                            { name: 'Credit Card', icon: '💳' },
                            { name: 'Digital Wallet', icon: '💰' }
                          ].map((method, index) => (
                            <div key={index} className="bg-white dark:bg-slate-700 rounded-xl p-4 text-center">
                              <div className="text-2xl mb-2">{method.icon}</div>
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{method.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Intellectual Property */}
                  <div id="section-3" className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Intellectual Property
                      </h2>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop&crop=center"
                            alt="Intellectual Property"
                            className="w-full h-48 object-cover rounded-xl"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ownership Rights</h4>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Upon full payment, clients receive complete ownership of the final deliverables. WebCultivate retains the right to showcase completed work in our portfolio for marketing purposes.
                          </p>
                          <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              <strong>Note:</strong> Source code, design files, and all project assets are transferred to the client upon project completion and full payment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
                    <div className="text-center mb-8">
                      <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop&crop=center"
                        alt="Contact Support"
                        className="w-full h-48 object-cover rounded-2xl mb-6 opacity-90"
                      />
                      <h2 className="text-3xl font-bold mb-4">Need Clarification?</h2>
                      <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                        Have questions about our terms? Our team is here to help clarify any concerns you may have.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Email Support</h4>
                        <p className="text-purple-100 text-sm">info@webcultivate.com</p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Phone Support</h4>
                        <p className="text-purple-100 text-sm">+91 7821096438</p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Office Location</h4>
                        <p className="text-purple-100 text-sm">Amravati, Maharashtra</p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Business Hours</h4>
                        <p className="text-purple-100 text-sm">Mon-Sat: 9AM-7PM</p>
                      </div>
                    </div>
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

export default TermsConditions;