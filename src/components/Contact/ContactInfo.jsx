import React from 'react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'info@webcultivate.com',
    sub: 'For general & project inquiries',
    link: 'mailto:info@webcultivate.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+91 7821096438',
    sub: 'Mon – Sat, 9 AM – 8 PM',
    link: 'tel:+917821096438',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 7821096438',
    sub: 'Chat with us instantly',
    link: 'https://wa.me/917821096438',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Visit Us',
    value: 'Sai Nagar, Amravati',
    sub: 'Maharashtra, India',
    link: 'https://maps.google.com/?q=Sai+Nagar+Amravati',
  },
];

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/1EJnUKMCmb/', icon: 'fab fa-facebook-f' },
  { name: 'Instagram', url: 'https://www.instagram.com/webcultivate?igsh=dHY4MzV0a3k3NHRy', icon: 'fab fa-instagram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/webcultivate/?viewAsMember=true', icon: 'fab fa-linkedin-in' },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-100/80 border border-blue-200/60 dark:text-blue-300 dark:bg-blue-900/40 dark:border-blue-700/40">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Contact Information
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          Get in Touch{' '}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            With Us
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          Have a project in mind or just want to say hello? We are always happy to hear from you and typically respond within 24 hours.
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {contactDetails.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target={item.link.startsWith('http') ? '_blank' : '_self'}
            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-start gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 transition-colors">
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                {item.value}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">{item.sub}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Working hours banner */}
      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/60 dark:border-blue-700/40 rounded-2xl mb-8">
        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 flex-shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-blue-500 dark:text-blue-400 font-medium">Working Hours</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-white">Monday – Saturday &nbsp;·&nbsp; 9:00 AM – 8:00 PM</p>
        </div>
      </div>

      {/* Social links */}
      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Follow Us</p>
        <div className="flex gap-3">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
            >
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
