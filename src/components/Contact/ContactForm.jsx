import React, { useState, useRef } from "react";

let emailjs;
try {
  emailjs = require("@emailjs/browser");
} catch (error) {
  console.warn("EmailJS not installed.");
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "website-design",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess("Message sent! We will get back to you within 24 hours.");
          setFormData({ name: "", email: "", phone: "", service: "website-design", message: "" });
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setError("Failed to send. Please try again or call us directly.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-white dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-3xl shadow-xl p-8">

      {/* Form header */}
      <div className="mb-7">
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1.5">
          Send Us a Message
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Fill in the details below and we will respond within 24 hours.
        </p>
      </div>

      {/* Alerts */}
      {success && (
        <div className="flex items-start gap-3 mb-5 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40 rounded-xl">
          <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm text-green-700 dark:text-green-400">{success}</p>
        </div>
      )}
      {error && (
        <div className="flex items-start gap-3 mb-5 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/40 rounded-xl">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
              Full Name <span className="text-blue-500">*</span>
            </label>
            <input
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
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
              Email Address <span className="text-blue-500">*</span>
            </label>
            <input
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
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9999999999"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
              Service Needed <span className="text-blue-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="website-design">Website Design</option>
              <option value="website-development">Website Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="social-media">Social Media Management</option>
              <option value="ai-automation">AI Automation</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="domain-registration">Domain Registration</option>
              <option value="business-email">Business Email</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
            Your Message <span className="text-blue-500">*</span>
          </label>
          <textarea
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
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-center text-slate-400 dark:text-slate-500">
          By submitting, you agree to our{' '}
          <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
          We never share your data.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
