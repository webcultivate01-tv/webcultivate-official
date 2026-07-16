// src/components/Home/Testimonial.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Archana Pawar",
    company: "Founder, Pioneer's Hub IT Consultant",
    text: "WebCultivate transformed our online presence. The site loads fast, ranks well and finally looks like the company we are. Excellent work throughout.",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Kartikesh Ganoskar",
    company: "Founder, Cloud Graphics Studio",
    text: "Professional team that delivered exactly what we needed, on the date they promised. Communication was direct with the people actually building it.",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Sanchit Pardhekar",
    company: "Founder, WedClicks Photography",
    text: "My portfolio finally does the photos justice. Bookings through the website have gone up noticeably since launch.",
    rating: 5,
    date: "4 months ago",
  },
  {
    name: "Prarthana Tolmare",
    company: "US Technical Recruiter",
    text: "Clear scope, clear timeline, no surprises on the invoice. That alone made the whole process worth it.",
    rating: 5,
    date: "5 months ago",
  },
  {
    name: "Nilesh Gade",
    company: "Founder, ShubMilan Films Photography & Films",
    text: "They handed over every account in my name and stayed on after launch to fix the small things. Great experience working with the team.",
    rating: 5,
    date: "6 months ago",
  },
  {
    name: "Arpit Pawar",
    company: "Chartered Accountant",
    text: "Clients now find me online instead of only by referral. Simple, fast and exactly what a practice like mine needed.",
    rating: 5,
    date: "7 months ago",
  },
  {
    name: "Anand Mehar",
    company: "Founder, VARelators",
    text: "Responsive, patient with revisions and genuinely invested in the outcome. Great experience working with WebCultivate.",
    rating: 5,
    date: "8 months ago",
  },
];

// Avatar tint is derived from the name so a given reviewer always gets the same
// colour, the way Google's review avatars behave.
const avatarTints = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-cyan-600",
];
const tintFor = (name) =>
  avatarTints[name.charCodeAt(0) % avatarTints.length];

const GoogleGlyph = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h11.8c-.5 2.7-2 5.1-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.3z" />
    <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.2l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7C8.1 41.3 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.8 28.4c-.4-1.3-.7-2.7-.7-4.4s.3-3.1.7-4.4v-5.7H4.5C2.9 17.1 2 20.4 2 24s.9 6.9 2.5 10.1l7.3-5.7z" />
    <path fill="#EA4335" d="M24 10.6c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8.1 6.7 4.5 13.9l7.3 5.7c1.7-5.2 6.5-9 12.2-9z" />
  </svg>
);

const Stars = ({ rating }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
        }`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <article className="flex h-full flex-col rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6">
    {/* Reviewer */}
    <header className="flex items-start gap-3">
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold flex-shrink-0 ${tintFor(review.name)}`}
        aria-hidden="true"
      >
        {review.name.charAt(0)}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-slate-900 dark:text-white truncate">
          {review.name}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {review.company}
        </p>
      </div>
      <GoogleGlyph className="w-5 h-5 flex-shrink-0" />
    </header>

    {/* Rating */}
    <div className="mt-4 flex items-center gap-2">
      <Stars rating={review.rating} />
      <span className="text-xs text-slate-400 dark:text-slate-500">{review.date}</span>
    </div>

    {/* Body */}
    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      {review.text}
    </p>
  </article>
);

const TestimonialsCarousel = () => {
  // Three cards per page on desktop, one on mobile.
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setPerPage(mobile.matches ? 1 : 3);
      setPage(0);
    };
    sync();
    mobile.addEventListener("change", sync);
    return () => mobile.removeEventListener("change", sync);
  }, []);

  const pageCount = Math.ceil(testimonials.length / perPage);
  // A short list can leave `page` past the end after a resize.
  const safePage = Math.min(page, pageCount - 1);
  const visible = testimonials.slice(safePage * perPage, safePage * perPage + perPage);

  const paginate = (step) => {
    setDirection(step);
    setPage((p) => (p + step + pageCount) % pageCount);
  };

  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold border border-amber-500/20">
            Client Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            What our clients{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              actually say
            </span>
          </h2>

          {/* Rating summary — mirrors a Google business profile */}
          <div className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <GoogleGlyph className="w-5 h-5" />
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              {averageRating}
            </span>
            <Stars rating={5} />
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {testimonials.length} reviews
            </span>
          </div>
        </motion.div>

        {/* Reviews */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={safePage}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
            >
              {visible.map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous reviews"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm hover:bg-primary hover:border-primary hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page dots */}
          <div className="flex items-center gap-2">
            {[...Array(pageCount)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > safePage ? 1 : -1);
                  setPage(i);
                }}
                aria-label={`Go to review page ${i + 1}`}
                aria-current={i === safePage}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === safePage
                    ? "w-7 bg-primary"
                    : "w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next reviews"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm hover:bg-primary hover:border-primary hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
