import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const handleToggleProjects = () => {
    if (showAll) {
      // Collapse and scroll to top
      setShowAll(false);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      setShowAll(true);
    }
  };

  const projects = [
    {
      title: 'CodeEfficience',
      category: 'Web Application',
      description:
        'A comprehensive learning platform for students to browse, purchase, and access programming courses with secure payment integration and progress tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      featured: true,
    },
    {
      title: 'Hotel Booking Platform',
      category: 'Web Application',
      description:
        'Full-featured hotel reservation system with real-time availability, secure booking, payment processing, and customer reviews.',
      tags: ['Next.js', 'Express', 'PostgreSQL', 'Redis'],
      link: '#',
      featured: true,
    },
    {
      title: 'AI Chat Assistant',
      category: 'LLM Project',
      description:
        'Advanced AI-powered chatbot using large language models for natural conversations, context awareness, and intelligent responses.',
      tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
      link: '#',
      featured: true,
    },
    // {
    //   title: 'E-Commerce Platform',
    //   category: 'Web Application',
    //   description:
    //     'Modern e-commerce solution with seamless checkout, inventory management, and real-time analytics.',
    //   tags: ['React', 'Node.js', 'MongoDB'],
    //   link: '#',
    //   featured: false,
    // },
  ];

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered to clients across various industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Project Image/Icon Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary dark:text-primary-light p-8 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <span className="text-sm font-semibold text-primary dark:text-primary-light">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-semibold hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally Render Buttons */}
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleToggleProjects}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-primary dark:text-primary-light bg-white dark:bg-slate-900 border-2 border-primary dark:border-primary-light shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              >
                {showAll ? (
                  <>
                    View Less
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 inline-block ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    View More Projects
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 inline-block ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
