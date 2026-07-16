import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle, Check } from "lucide-react";

// The single closing CTA for the homepage. Every other section points here, so it
// carries the full set of ways to start a conversation: book a call, the direct
// channels (phone / email / WhatsApp), and the newsletter for visitors who
// aren't ready to talk yet — kept to two compact columns so it stays short.
const PHONE = "+917821096438";
const EMAIL = "info@webcultivate.com";

const contactChannels = [
  {
    Icon: Phone,
    label: "+91 78210 96438",
    href: `tel:${PHONE}`,
    iconClass: "text-emerald-300",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp us",
    href: `https://wa.me/${PHONE.replace("+", "")}`,
    iconClass: "text-green-300",
    external: true,
  },
  {
    Icon: Mail,
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    iconClass: "text-sky-300",
  },
];

const reassurances = ["Free consultation", "Fixed quote", "You own everything"];

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-slate-950">
      {/* Gradient field + soft glows, no imagery */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] -translate-y-1/2 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] translate-y-1/2 bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none" />
      {/* Fine grid — adds texture without competing with the text */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center">
            {/* ── LEFT: the ask ── */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-blue-100">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Taking on new projects this month
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
                Ready to build something{" "}
                <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
                  exceptional?
                </span>
              </h2>

              <p className="mt-3.5 text-sm sm:text-base text-blue-100/75 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Tell us what you're building. You'll get a roadmap, a timeline and a
                fixed quote — free, with no obligation.
              </p>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-blue-950 bg-gradient-to-r from-sky-300 to-blue-400 shadow-[0_16px_32px_-12px_rgba(56,189,248,0.5)] hover:shadow-[0_20px_40px_-12px_rgba(56,189,248,0.7)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Your Free Quote
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  to="/work-process"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/35 transition-all duration-300"
                >
                  See How We Work
                </Link>
              </div>

              {/* Reassurances */}
              <ul className="mt-5 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2">
                {reassurances.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-1.5 text-xs text-blue-100/70"
                  >
                    <Check className="w-3 h-3 text-emerald-300 flex-shrink-0" strokeWidth={3} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── RIGHT: the direct channels + newsletter ── */}
            <div className="lg:border-l lg:border-white/10 lg:pl-12">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-100/50 mb-3 text-center lg:text-left">
                Or reach us directly
              </p>

              <div className="space-y-2">
                {contactChannels.map(({ Icon, label, href, iconClass, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${iconClass}`} strokeWidth={1.75} />
                    <span className="text-sm font-medium text-white truncate">
                      {label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-white/30 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white/60" />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-5 pt-5 border-t border-white/10">
                {subscribed ? (
                  <p className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    <Check className="w-4 h-4" strokeWidth={3} />
                    Thanks — you're subscribed.
                  </p>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <label htmlFor="cta-newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-xl bg-white/10 border border-white/15 text-white placeholder-blue-100/40 outline-none focus:border-sky-300/60 focus:ring-1 focus:ring-sky-300/40 transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 text-sm rounded-xl font-semibold text-blue-950 bg-white hover:bg-blue-50 transition-colors duration-300 flex-shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
                <p className="mt-2 text-[11px] text-blue-100/45">
                  Insights on web, design and growth. No spam — unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
