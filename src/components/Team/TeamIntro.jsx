import React from 'react';
import TeamGrid from './TeamGrid';

const TeamIntro = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            A Team of Passionate Professionals
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Our diverse team brings together expertise in design, development, marketing, and 
            strategy to deliver exceptional digital solutions. We are united by our passion for 
            innovation and commitment to client success.
          </p>
        </div>
      </div>
        <TeamGrid />
    </section>
  );
};

export default TeamIntro;
