import React from 'react';
import { Link } from 'react-router-dom';

const WorkProcessPreview = () => {
  const workProcess = [
    { step: '01', title: 'Get Ideas', description: 'Understanding your vision and goals through comprehensive discovery sessions.' },
    { step: '02', title: 'Sketch Up', description: 'Creating initial designs and wireframes to visualize the concept.' },
    { step: '03', title: 'Discuss', description: 'Collaborating with stakeholders to refine requirements and approach.' },
    { step: '04', title: 'Revise', description: 'Iterating based on feedback to perfect every detail.' },
    { step: '05', title: 'Approve', description: 'Final review and sign-off before moving to production.' },
    { step: '06', title: 'Launch', description: 'Deploying your solution and ensuring a smooth go-live.' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Work Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Our proven methodology ensures seamless project delivery from initial concept to successful launch.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workProcess.map((process, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">{process.step}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{process.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/work-process" className="inline-block px-8 py-3.5 rounded-xl font-semibold text-primary dark:text-primary-light bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-lg hover:shadow-primary/35">
            View Full Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessPreview;
