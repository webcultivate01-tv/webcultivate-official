// src/components/Home/NewsletterSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20
                     rounded-3xl p-10 md:p-14 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected with WebCultivate
          </h2>

          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-10">
            Expert insights on web development, UI/UX, and digital growth 
            delivered directly to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-xl bg-white/95
                         text-gray-900 placeholder-gray-500
                         outline-none focus:ring-2 focus:ring-blue-400"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold
                         bg-gradient-to-r from-blue-400 to-sky-400
                         text-blue-950 hover:from-blue-300 hover:to-sky-300
                         transition-all"
            >
              Subscribe
            </motion.button>
          </form>

          <p className="text-sm text-blue-100/60 mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
