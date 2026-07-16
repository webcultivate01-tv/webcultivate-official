import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 ring-1 ring-slate-900/10 dark:ring-white/10 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm outline-none focus:ring-2 focus:ring-primary transition-all duration-200';

const labelClass =
  'block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wide';

const services = [
  { value: 'website-design', label: 'Website Design' },
  { value: 'website-development', label: 'Website Development' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'social-media', label: 'Social Media Management' },
  { value: 'ai-automation', label: 'AI Automation' },
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'domain-registration', label: 'Domain Registration' },
  { value: 'business-email', label: 'Business Email' },
  { value: 'other', label: 'Other' },
];

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'website-design',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess('Message sent! We will get back to you within 24 hours.');
          setFormData({ name: '', email: '', phone: '', service: 'website-design', message: '' });
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setError('Failed to send. Please try again or call us directly.');
          setLoading(false);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl bg-white/90 dark:bg-slate-800/80 backdrop-blur ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-xl shadow-slate-900/5 p-6 sm:p-8 overflow-hidden"
    >
      {/* Top accent line ties the card to the brand gradient */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Form header */}
      <div className="mb-7">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-1.5">
          Send Us a{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Message
          </span>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Fill in the details below and we will respond within 24 hours.
        </p>
      </div>

      {/* Alerts */}
      {success && (
        <div className="flex items-start gap-3 mb-5 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 ring-1 ring-emerald-200 dark:ring-emerald-700/40">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-emerald-700 dark:text-emerald-400">{success}</p>
        </div>
      )}
      {error && (
        <div className="flex items-start gap-3 mb-5 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 ring-1 ring-red-200 dark:ring-red-700/40">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone + Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9999999999"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-service" className={labelClass}>
              Service Needed <span className="text-primary">*</span>
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={inputClass}
            >
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Your Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your project, goals, or any questions you have..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>

        <p className="text-xs text-center text-slate-400 dark:text-slate-500">
          By submitting, you agree to our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
          We never share your data.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;
