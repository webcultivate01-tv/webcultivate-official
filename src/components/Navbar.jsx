import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     setIsDarkMode(true);
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = !isDarkMode;
  //   setIsDarkMode(newTheme);

  //   if (newTheme) {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.removeAttribute("data-theme");
  //     localStorage.setItem("theme", "light");
  //   }
  // };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work Process", path: "/work-process" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Plans", path: "/pricing" },
    // { name: 'Team', path: '/team' },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out backdrop-blur-xl border-b ${
        isScrolled
          ? "bg-white/90 shadow-lg border-gray-200 dark:bg-slate-900 dark:border-slate-700"
          : "bg-white/70 shadow-md border-gray-100 dark:bg-slate-900/80 dark:border-slate-800"
      }`}
    >
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between py-2.5 sm:py-3 md:py-3.5 lg:py-4">
          <Link
            to="/"
            className="flex flex-row items-center gap-2 hover:scale-105 transition-transform duration-300 z-50 flex-shrink-0"
          >
            {/* Logo Image */}
            <img
              src="/wlogo.png"
              alt="WebCultivate Logo"
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10"
            />

            {/* Title + Subtitle */}
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-600">
                WebCultivate
              </span>
              <span className="text-sm sm:text-base md:text-lg lg:text-sm font-normal text-black">
                Software Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm xl:text-base transition-all duration-300 hover:text-primary dark:hover:text-primary-light whitespace-nowrap ${
                  location.pathname === link.path
                    ? "text-primary dark:text-primary-light"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary dark:bg-primary-light"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile/Tablet Navigation Menu */}
          <div
            className={`lg:hidden fixed left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl border-t border-gray-200 dark:border-slate-700 transition-all duration-300 ease-in-out z-40 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 visible top-[48px] sm:top-[52px] md:top-[56px]"
                : "opacity-0 -translate-y-4 invisible top-[48px] sm:top-[52px] md:top-[56px]"
            }`}
          >
            <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 space-y-1 max-h-[calc(100vh-48px)] sm:max-h-[calc(100vh-52px)] md:max-h-[calc(100vh-56px)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile-only Get Started button */}
              <Link
                to="/contact"
                className="block w-full text-center px-4 sm:px-6 py-2.5 sm:py-3 mt-3 sm:mt-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 transition-all duration-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
            {/* Theme Toggle */}
            {/* <button
              className="group p-0 bg-transparent border-none cursor-pointer hover:scale-105 transition-transform duration-300 flex-shrink-0"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <div
                className={`relative w-10 h-5 sm:w-11 sm:h-6 md:w-12 md:h-6 lg:w-14 lg:h-7 rounded-full transition-all duration-400 ease-in-out border-2 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/25 shadow-[inset_0_2px_8px_rgba(37,99,235,0.1),0_4px_15px_rgba(37,99,235,0.12)]"
                    : "bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/25 shadow-[inset_0_2px_8px_rgba(37,99,235,0.1),0_4px_15px_rgba(37,99,235,0.12)]"
                } group-hover:bg-gradient-to-br group-hover:from-primary/25 group-hover:to-primary-dark/25 group-hover:shadow-[inset_0_2px_8px_rgba(37,99,235,0.15),0_6px_20px_rgba(37,99,235,0.2)]`}
              >
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] rounded-full flex items-center justify-center shadow-[0_3px_10px_rgba(37,99,235,0.3),0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                    isDarkMode
                      ? "left-[calc(100%-18px)] sm:left-[calc(100%-20px)] md:left-[calc(100%-22px)] lg:left-[calc(100%-24px)] bg-gradient-to-br from-gray-600 to-gray-700 shadow-[0_3px_10px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.2)]"
                      : "left-0.5 bg-gradient-to-br from-primary to-primary-dark"
                  }`}
                >
                  {isDarkMode ? (
                    <i className="fas fa-moon text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] animate-moon-glow group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-300"></i>
                  ) : (
                    <i className="fas fa-sun text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] animate-sun-rotate group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-300"></i>
                  )}
                </div>
              </div>
            </button> */}

            {/* Desktop Get Started Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-block px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-gray-300 shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400 ease-in-out relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-full whitespace-nowrap flex-shrink-0"
            >
              Get Started
            </Link>

            {/* Mobile/Tablet Menu Toggle */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-[3px] sm:gap-1 p-1.5 sm:p-2 bg-transparent border-none cursor-pointer z-50 w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-[18px] sm:w-5 md:w-6 h-[2px] sm:h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-[5px] sm:translate-y-[6px] md:translate-y-2"
                    : ""
                }`}
              ></span>
              <span
                className={`block w-[18px] sm:w-5 md:w-6 h-[2px] sm:h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-[18px] sm:w-5 md:w-6 h-[2px] sm:h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-[5px] sm:-translate-y-[6px] md:-translate-y-2"
                    : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
