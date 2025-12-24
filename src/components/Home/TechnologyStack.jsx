import React from 'react';
const technologies = [
  {
    name: 'React.js',
    description: 'Building dynamic and interactive web applications.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Next.js',
    description: 'Optimized performance with server-side rendering and SEO.',
    icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp',
  },
  {
    name: 'Tailwind CSS',
    description: 'Modern, utility-first CSS framework for responsive designs.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    name: 'Node.js',
    description: 'Scalable and high-performance backend solutions.',
    icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  },
  {
    name: 'React Native',
    description: 'Build mobile apps using React for both iOS and Android.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Java',
    description: 'Robust, object-oriented programming language for backend and Android.',
    icon: 'https://cdn.worldvectorlogo.com/logos/java.svg',
  },
  {
    name: 'Python',
    description: 'Versatile language for backend, data science, and automation.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database for fast and flexible data storage.',
    icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  },
  {
    name: 'MySQL',
    description: 'Reliable relational database for structured data management.',
    icon: 'https://cdn.worldvectorlogo.com/logos/mysql-3.svg',
  },
  {
    name: 'Express.js',
    description: 'Minimal and flexible Node.js web application framework.',
    icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
  },
  {
    name: 'Salesforce',
    description: 'Platform by Salesforce for building CRM platforms.',
    icon: "data:image/png;base64,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",
  },
  {
    name: 'Flutter',
    description: 'Build beautiful native apps with one codebase for iOS and Android.',
    icon: 'https://cdn.worldvectorlogo.com/logos/flutter.svg',
  },
];

const TechnologyStack = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text  text-black">
              Technology Stack
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            We leverage cutting-edge technologies to build robust, scalable, and modern solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                 <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-3 sm:mb-4 flex items-center justify-center bg-white dark:bg-slate-700/50 rounded-full border-2 border-blue-500">
                   <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-3/4 h-3/4 object-contain filter grayscale group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2">
                  {tech.name}
                </h3>
                
                {/* Description - Hidden on mobile, visible on larger screens */}
                <p className="hidden sm:block text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
