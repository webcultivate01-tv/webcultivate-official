// src/components/Home/FAQ.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, MessageCircleQuestion } from "lucide-react";

// The questions prospects actually ask on the first call — money, timeline and
// ownership first, since those are the ones that stall a decision.
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects ship in 2–6 weeks. A focused landing page or portfolio takes around 2 weeks; a larger business site or custom platform runs 4–6. You get a fixed delivery date in writing before we start, not an estimate that drifts.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every quote is fixed and scoped up front, so the number you approve is the number you pay. Pricing depends on what you actually need — pages, integrations and whether design is from scratch. Book a free call and you'll get a written quote with no obligation.",
  },
  {
    question: "What's included in your web development service?",
    answer:
      "Discovery and roadmap, UI/UX design, development, cross-browser and device testing, speed and SEO optimization, deployment, and 30 days of free post-launch support. No hidden line items added later.",
  },
  {
    question: "Do I own the website, code and accounts?",
    answer:
      "Yes — completely. Code, hosting, domain and analytics are all handed over in your name at launch. There's no lock-in and no situation where you need our permission to move on.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "You get 30 days of free support after launch, then optional monthly maintenance covering updates, backups, security patches and content changes. Launch day is the start of the relationship, not the exit.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "Every build ships SEO-ready: clean semantic markup, fast load times, mobile-first layouts, proper meta tags and sitemaps. Ranking also depends on your market and content, so we're honest about the timeline — and we offer ongoing SEO if you want us driving it.",
  },
  {
    question: "Do you work with businesses outside Amravati?",
    answer:
      "Yes. We're based in Amravati and know the local market well, but we work with clients across India and overseas. Most collaboration happens over calls and shared builds you can review as we go.",
  },
  {
    question: "Can you redesign or fix my existing website?",
    answer:
      "Absolutely. We take on redesigns, performance rescues and migrations from Wix, WordPress or Shopify. We'll audit what you have first and tell you honestly whether a rebuild or a fix is the better spend.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-900 overflow-hidden">
      {/* FAQ structured data — lets Google surface these directly in results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }),
        }}
      />

      {/* Static background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold border border-primary/20">
            FAQ
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Questions, answered{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              straight
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The things clients ask before signing — cost, timeline and who owns what.
            No vague answers.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className={`rounded-2xl border bg-white dark:bg-slate-800/60 overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 shadow-lg shadow-primary/5"
                    : "border-slate-200 dark:border-slate-700 hover:border-primary/30"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                  >
                    <span
                      className={`flex-1 font-semibold transition-colors duration-200 ${
                        isOpen
                          ? "text-primary dark:text-primary-light"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? "bg-gradient-to-br from-primary to-secondary text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 pr-14 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Still stuck? */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <MessageCircleQuestion className="w-5 h-5" strokeWidth={1.75} />
          </span>
          <p className="flex-1 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-white">
              Still have a question?
            </span>{" "}
            Ask us directly — you'll get a straight answer, not a sales pitch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
          >
            Ask a Question
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
