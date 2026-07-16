import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const contactDetails = [
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'info@webcultivate.com',
    sub: 'For general & project inquiries',
    link: 'mailto:info@webcultivate.com',
  },
  {
    Icon: Phone,
    label: 'Call Us',
    value: '+91 78210 96438',
    sub: 'Mon – Sat, 9 AM – 8 PM',
    link: 'tel:+917821096438',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 78210 96438',
    sub: 'Chat with us instantly',
    link: 'https://wa.me/917821096438',
  },
  {
    Icon: MapPin,
    label: 'Visit Us',
    value: 'Sai Nagar, Amravati',
    sub: 'Maharashtra, India',
    link: 'https://maps.google.com/?q=Sai+Nagar+Amravati',
  },
];

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/1EJnUKMCmb/', Icon: FaFacebookF },
  { name: 'Instagram', url: 'https://www.instagram.com/webcultivate?igsh=dHY4MzV0a3k3NHRy', Icon: FaInstagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/webcultivate/?viewAsMember=true', Icon: FaLinkedinIn },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="mb-8">
        <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold border border-primary/20">
          Contact Information
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-3">
          Get in Touch{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            With Us
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Have a project in mind or just want to say hello? We are always happy to
          hear from you and typically respond within 24 hours.
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {contactDetails.map(({ Icon, label, value, sub, link }, i) => (
          <motion.a
            key={label}
            href={link}
            target={link.startsWith('http') ? '_blank' : '_self'}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm hover:ring-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Icon className="w-[18px] h-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-medium uppercase tracking-[0.07em] text-slate-500 dark:text-slate-400 mb-0.5">{label}</span>
              <span className="block text-sm font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors truncate">
                {value}
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-500 mt-0.5">{sub}</span>
            </span>
          </motion.a>
        ))}
      </div>

      {/* Working hours banner */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 ring-1 ring-primary/15 dark:ring-primary/20 mb-8">
        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary">
          <Clock className="w-[18px] h-[18px]" />
        </span>
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.07em] text-primary dark:text-primary-light">Working Hours</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5">Monday – Saturday &nbsp;·&nbsp; 9:00 AM – 8:00 PM</p>
        </div>
      </div>

      {/* Social links */}
      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Follow Us</p>
        <div className="flex gap-3">
          {socialLinks.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 dark:bg-slate-800/70 ring-1 ring-slate-900/[0.07] dark:ring-white/10 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white hover:ring-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
