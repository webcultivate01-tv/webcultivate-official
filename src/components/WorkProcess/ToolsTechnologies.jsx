import React from 'react';

const ToolsTechnologies = () => {
  const categories = [
    {
      name: 'Design',
      color: 'from-pink-500 to-pink-600',
      tools: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch']
    }
    ,{
      name: 'Frontend',
      color: 'from-blue-500 to-blue-600',
      tools: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    {
      name: 'Backend',
      color: 'from-green-500 to-green-600',
      tools: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      name: 'DevOps',
      color: 'from-purple-500 to-purple-600',
      tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx']
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build modern, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-center`}>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.tools.map((tool, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
