import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t 
      border-slate-200 dark:border-slate-800 
      bg-gradient-to-b from-slate-50 via-white to-sky-50
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Soft background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5 justify-center sm:justify-start">
              <img
                src="/wlogo.png"
                alt="WebCultivate Logo"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  WebCultivate
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Software Solutions
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-sm text-center sm:text-left">
              We design and develop high-quality websites that help businesses
              grow, scale, and stand out in the digital world.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center sm:justify-start">
              {[
                {
                  href: "https://www.facebook.com/share/1EJnUKMCmb/",
                  icon: "fab fa-facebook-f",
                },
                {
                  href: "https://www.instagram.com/webcultivate",
                  icon: "fab fa-instagram",
                },
                {
                  href: "https://www.linkedin.com/company/webcultivate",
                  icon: "fab fa-linkedin-in",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                    bg-white/70 dark:bg-white/10
                    border border-slate-200 dark:border-white/10
                    text-slate-700 dark:text-white
                    hover:bg-blue-500 hover:text-white
                    hover:border-transparent
                    transition-all duration-300"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Process", path: "/work-process" },
                { name: "Pricing Plans", path: "/pricing" },
                { name: "Blog", path: "/blog" },
                { name: "Careers", path: "/careers" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="text-blue-500 text-xs transition-transform group-hover:translate-x-0.5">&#8250;</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Website Design", path: "/services/website-design" },
                { name: "Web Development", path: "/services/website-development" },
                { name: "Digital Marketing", path: "/services/digital-marketing" },
                { name: "Social Media", path: "/services/social-media" },
                { name: "AI Automation", path: "/services/ai-automation" },
                { name: "Graphic Design", path: "/services/graphic-design" },
                { name: "Domain Registration", path: "/services/domain-registration" },
                { name: "Business Email", path: "/services/business-email" },
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="text-blue-500 text-xs transition-transform group-hover:translate-x-0.5">&#8250;</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-slate-900 dark:text-white">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <i className="fas fa-envelope text-blue-500 mt-1"></i>
                <span className="text-slate-600 dark:text-slate-300">
                  info@webcultivate.com
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fas fa-phone text-blue-500 mt-1"></i>
                <span className="text-slate-600 dark:text-slate-300">
                  +91 7821096438
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
                <span className="text-slate-600 dark:text-slate-300">
                  Sai Nagar, Amravati
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-14 pt-6 border-t border-slate-200 dark:border-slate-800
          flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <p className="text-slate-500 dark:text-slate-400">
            © {currentYear} WebCultivate. All rights reserved.
          </p>

          <div className="flex gap-3">
            <Link
              to="/privacy-policy"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-400">|</span>
            <Link
              to="/terms-conditions"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
