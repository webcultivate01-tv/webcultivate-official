import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Happy Clients' },
    { value: '2+', label: 'Years Experience' },
    { value: '80%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700"
            >
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
