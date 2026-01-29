import React, { useState, useRef } from "react";

let emailjs;
try {
  emailjs = await import("@emailjs/browser");
} catch (error) {
  console.warn("EmailJS not installed. Contact form will show installation message.");
}

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailjs) {
      setError("❌ Email service not configured. Please run: npm install @emailjs/browser");
      return;
    }
    
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      
      setSuccess("✅ Message sent successfully! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "website-design",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 max-w-3xl w-full mx-auto transition-all duration-500 hover:shadow-primary/30">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
            Let's Build Something Amazing 🚀
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            Fill out the form and we'll get back to you shortly.
          </p>
        </div>

        {/* Success / Error */}
        {success && (
          <div className="text-green-600 text-sm bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
            {success}
          </div>
        )}
        {error && (
          <div className="text-red-600 text-sm bg-red-100 dark:bg-red-900/30 p-3 rounded-xl">
            {error}
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="WebCultivate"
            className="w-full px-3 py-2.5 rounded-xl border bg-gray-50 dark:bg-slate-800/70 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="info@webcultivate.com"
            className="w-full px-3 py-2.5 rounded-xl border bg-gray-50 dark:bg-slate-800/70 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 7821096438"
            className="w-full px-3 py-2.5 rounded-xl border bg-gray-50 dark:bg-slate-800/70 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Service Interested In *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 rounded-xl border bg-gray-50 dark:bg-slate-800/70 focus:ring-2 focus:ring-primary"
          >
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
          <label className="block text-sm font-medium mb-1">
            Your Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Tell us about your project..."
            className="w-full px-3 py-2.5 rounded-xl border bg-gray-50 dark:bg-slate-800/70 resize-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message ✉️"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;