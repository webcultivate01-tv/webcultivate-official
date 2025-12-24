import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-white pt-12 sm:pt-16 md:pt-20 mt-16 sm:mt-20 md:mt-24 relative border-t border-gray-200 dark:border-slate-700 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10 text-center sm:text-left">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-4 sm:mb-5 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              <span className="font-extrabold">Web</span>
              <span className="font-semibold">Cultivate</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
              Modern web solutions for growing brands. We specialize in crafting
              powerful, user-friendly websites tailored to your business
              objectives.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/share/1EJnUKMCmb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/60 dark:bg-white/10 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-gray-300 dark:border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent text-gray-700 dark:text-white"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/webcultivate?igsh=dHY4MzV0a3k3NHRy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/60 dark:bg-white/10 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-gray-300 dark:border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent text-gray-700 dark:text-white"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/webcultivate/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/60 dark:bg-white/10 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-gray-300 dark:border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent text-gray-700 dark:text-white"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 sm:mb-5 font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start">
              <li>
                <Link
                  to="/"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/work-process"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  Work Process
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 sm:mb-5 font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start">
              <li>
                <a
                  href="#services"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  Website Designing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  Graphic Designing
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-primary hover:pl-1.5"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 sm:mb-5 font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3 sm:gap-4 items-center sm:items-start">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-primary mt-1 flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all">
                  info@webcultivate.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-primary mt-1 flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  <span className="block sm:inline">+91 7821096438</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1 flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Sai Nagar Amravati
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-5 sm:py-6 border-t border-gray-300 dark:border-slate-700 gap-3 text-center md:text-left">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            &copy; {currentYear} WebCultivate. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <a
              href="#privacy"
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <a
              href="#terms"
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
