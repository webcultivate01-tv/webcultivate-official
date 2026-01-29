import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'General Inquiries',
      info: 'info@webcultivate.com',
      link: 'mailto:info@webcultivate.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'HR & Careers',
      info: 'hr@webcultivate.com',
      link: 'mailto:hr@webcultivate.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      info: '+91 7821096438',
      link: 'tel:+917821096438'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      info: 'Sai Nagar, Amravati, Maharashtra',
      link: 'https://maps.google.com/?q=Sai+Nagar+Amravati'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Working Hours',
      info: 'Mon - Sat: 9:00 AM - 8:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1EJnUKMCmb/',
      icon: 'fab fa-facebook-f',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/webcultivate?igsh=dHY4MzV0a3k3NHRy',
      icon: 'fab fa-instagram',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/webcultivate/?viewAsMember=true',
      icon: 'fab fa-linkedin-in',
      color: 'from-blue-700 to-blue-800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Let's Start a{" "}
          <motion.span 
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Conversation
          </motion.span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Have a project in mind? Want to discuss your digital needs? We would love to hear 
          from you. Fill out the form and our team will get back to you within 24 hours.
        </p>
      </motion.div>

      <motion.div className="space-y-6 mb-10" variants={containerVariants}>
        {contactDetails.map((detail, index) => (
          <motion.div 
            key={index} 
            className="group"
            variants={itemVariants}
            whileHover={{ x: 5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {detail.link ? (
              <a 
                href={detail.link}
                target={detail.link.startsWith('http') ? '_blank' : '_self'}
                rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg"
              >
                <motion.div 
                  className="text-primary dark:text-primary-light flex-shrink-0 p-2 rounded-xl bg-primary/10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {detail.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-primary transition-colors">
                    {detail.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {detail.info}
                  </p>
                </div>
              </a>
            ) : (
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50">
                <motion.div 
                  className="text-primary dark:text-primary-light flex-shrink-0 p-2 rounded-xl bg-primary/10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {detail.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">{detail.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{detail.info}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Connect With Us</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.name}
              className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                rotate: [0, -5, 5, 0]
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
