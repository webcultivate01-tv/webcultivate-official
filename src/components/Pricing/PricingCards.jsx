import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingCards = () => {
  const plans = [
    {
      name: 'Business Portfolio',
      price: '₹15,999',
      period: 'one-time',
      description: 'Perfect showcase for your business identity',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center',
      features: [
        '5-7 professional pages',
        'Modern responsive design',
        'Business gallery showcase',
        'Contact & inquiry forms',
        'Google Maps integration',
        'Social media links',
        'Basic SEO optimization',
        'Free domain for 1 year',
        'Business email for 1 year',
        'Web hosting for 1 year',
        '3 months free support'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'E-Commerce Starter',
      price: '₹29,999',
      period: 'one-time',
      description: 'Complete online store solution',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center',
      features: [
        'Up to 50 products',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Order management system',
        'Customer accounts',
        'Inventory management',
        'Mobile-optimized design',
        'Free domain for 1 year',
        'Business email for 1 year',
        'Web hosting for 1 year',
        '6 months support & training'
      ],
      popular: true,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      name: 'Professional Website',
      price: '₹45,999',
      period: 'one-time',
      description: 'Advanced business website with CMS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center',
      features: [
        'Unlimited pages',
        'Custom CMS dashboard',
        'Advanced SEO features',
        'Blog & news section',
        'Analytics integration',
        'Performance optimization',
        'Security features',
        'Free domain for 1 year',
        'Business email for 1 year',
        'Web hosting for 1 year',
        '1 year support & maintenance'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom Quote',
      period: 'project-based',
      description: 'Tailored solutions for large businesses',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop&crop=center',
      features: [
        'Custom web application',
        'Advanced integrations',
        'Multi-user dashboard',
        'API development',
        'Database design',
        'Cloud deployment',
        'Dedicated project manager',
        'Free domain for 1 year',
        'Business email for 1 year',
        'Web hosting for 1 year',
        'Ongoing support & updates'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold border border-primary/20">
              Pricing Plans
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
            Choose Your Perfect{" "}
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
              Package
            </motion.span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden costs. Choose the package that fits your business needs in Amravati.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                plan.popular
                  ? 'ring-2 ring-primary/50 lg:scale-105 z-10'
                  : 'hover:-translate-y-2'
              }`}
              variants={cardVariants}
              whileHover={{ 
                y: plan.popular ? 0 : -10, 
                scale: plan.popular ? 1.05 : 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-semibold z-20"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Package Image */}
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${plan.color} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {plan.name}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <motion.span 
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} text-white flex items-center justify-center mt-0.5`}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-4 text-base rounded-2xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? `text-white bg-gradient-to-r ${plan.color} shadow-lg hover:shadow-xl hover:shadow-primary/25`
                        : `text-gray-700 dark:text-gray-300 bg-gradient-to-r ${plan.color} bg-opacity-10 hover:bg-opacity-20 border-2 border-transparent hover:border-current`
                    }`}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All packages include free consultation and project planning
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No Hidden Costs
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Money Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              24/7 Support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
