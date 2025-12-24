import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${centered ? 'max-w-3xl mx-auto' : ''}`}>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
