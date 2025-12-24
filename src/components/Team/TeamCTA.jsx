import React from 'react';

const TeamCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white flex items-center justify-center">
      {/* Soft radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)] pointer-events-none" />

      {/* Light blurred accent circles */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-gray-400/30 dark:bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-500/20 dark:bg-blue-600/10 blur-3xl rounded-full" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent tracking-tight">
          Join Our Growing Team
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          We are always looking for talented individuals to join our team. If you are
          passionate about web development and design, we would love to hear from you!
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-xl font-semibold bg-gray-900 dark:bg-blue-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          View Open Positions
        </a>

        {/* Decorative bottom line */}
        <div className="mt-10 w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-blue-500 dark:to-blue-600 mx-auto rounded-full" />
      </div>

      {/* Fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-300 dark:to-slate-900 pointer-events-none" />
    </section>
  );
};

export default TeamCTA;
