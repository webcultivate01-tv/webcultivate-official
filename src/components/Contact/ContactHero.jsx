import React, { useState } from 'react';

const ContactHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-lg transition-colors duration-300 md:px-10 lg:px-10">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              className="w-10"
              height={100}
              width={100}
              src="https://tailwindflex.com/images/logo.svg"
              alt="Talwindflex logo"
            />
            <span className="hidden md:flex text-2xl mt-0.5 font-bold text-primary-600 text-white">
              TailwindFlex Studio
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center md:gap-8 text-white">
            <a href="/" className="text-sm font-medium hover:text-purple-400 transition">Home</a>
            <a href="#about" className="text-sm font-medium hover:text-purple-400 transition">About</a>
            <a href="#services" className="text-sm font-medium hover:text-purple-400 transition">Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-purple-400 transition">Portfolio</a>
            <a href="#contact" className="text-sm font-medium hover:text-purple-400 transition">Contact</a>
            <a
              href="#contact"
              className="cursor-pointer rounded-full border-2 py-2 px-6 border-white bg-white text-purple-900 hover:bg-purple-900 hover:text-white hover:shadow-lg transition duration-300 ease-in-out"
            >
              Contact Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-2xl text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg text-white py-4 flex flex-col items-center space-y-4">
            <a href="/" className="hover:text-purple-400">Home</a>
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#services" className="hover:text-purple-400">Services</a>
            <a href="#portfolio" className="hover:text-purple-400">Portfolio</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
            <a href="#contact" className="rounded-full border-2 py-2 px-6 border-white bg-white text-purple-900 hover:bg-purple-900 hover:text-white">Contact Now</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="w-full flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#121212] to-purple-800 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style={{ lineHeight: 1.2 }}>
            Catching Life's <span className="relative whitespace-nowrap text-purple-400">Beautiful</span> Stories
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Professional photography services for weddings, events, portraits, and commercial shoots. Let us tell your story through our lens.
          </p>

          <a
            href="#pricing"
            className="relative flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <span className="absolute inset-0 rounded-full bg-purple-600 opacity-50 animate-ping"></span>
            <span className="relative z-10 pr-2">Book Now</span>
          </a>
        </div>

        <div className="absolute sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactHero;
