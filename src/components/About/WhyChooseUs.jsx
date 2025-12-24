import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in web development and design.'
    },
    {
      number: '02',
      title: 'Modern Technology',
      description: 'We use the latest frameworks and tools to build future-proof solutions.'
    },
    {
      number: '03',
      title: 'Client-Focused',
      description: 'Your success is our priority. We listen, understand, and deliver.'
    },
    {
      number: '04',
      title: 'On-Time Delivery',
      description: 'We respect deadlines and ensure timely project completion.'
    },
    {
      number: '05',
      title: 'Affordable Pricing',
      description: 'Quality services at competitive prices that fit your budget.'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'Dedicated support even after project completion.'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Why Choose WebCultivate?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            What sets us apart from the rest
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-5xl text-center font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-3 block">
                {reason.number}
              </span>
              <h3 className="text-xl text-center font-bold text-gray-800 dark:text-gray-100 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
