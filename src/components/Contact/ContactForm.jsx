import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'website-design',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'website-design',
      message: ''
    });
  };

  return (
 <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 max-w-3xl w-full mx-auto transition-all duration-500 hover:shadow-primary/30">
  <form onSubmit={handleSubmit} className="space-y-5">
    {/* Heading */}
    <div className="text-center">
      <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
        Let's Build Something Amazing 🚀
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
        Fill out the form and we’ll get back to you shortly.
      </p>
    </div>

    {/* Name */}
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Your Name *
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="WebCultivate"
        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/70 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm shadow-sm hover:shadow-md"
      />
    </div>

    {/* Email */}
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Email Address *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="info@webcultivate.com"
        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/70 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm shadow-sm hover:shadow-md"
      />
    </div>

    {/* Phone */}
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+91 7821096438"
        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/70 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm shadow-sm hover:shadow-md"
      />
    </div>

    {/* Service */}
    <div>
      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Service Interested In *
      </label>
<select
  id="service"
  name="service"
  value={formData.service}
  onChange={handleChange}
  required
  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/70 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm shadow-sm hover:shadow-md"
>
  <option value="">Select a Service</option>
  <option value="website-design">Website Designing</option>
  <option value="website-development">Website Development</option>
  <option value="graphic-design">Graphic Designing</option>
  <option value="domain-registration">Domain Registration</option>
  <option value="business-email">Business Email</option>
  <option value="digital-marketing">Digital Marketing</option>
  <option value="other">Other</option>
</select>

    </div>

    {/* Message */}
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Your Message *
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="4"
        placeholder="Tell us about your project..."
        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/70 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm shadow-sm hover:shadow-md"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 text-sm"
    >
      Send Message ✉️
    </button>
  </form>
</div>

  );
};

export default ContactForm;
