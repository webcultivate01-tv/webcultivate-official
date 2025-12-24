import React, { useState, useRef, useEffect } from 'react';

// Single Service Card Component
const ServiceCard = ({ service, isExpanded, onClick }) => {
  const descriptionRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isExpanded && descriptionRef.current) {
      setMaxHeight(descriptionRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isExpanded]);

  return (
    <div
      onClick={onClick}
      className="relative bg-white dark:bg-slate-800 p-8 sm:p-9 md:p-10 lg:p-11 rounded-2xl border border-gray-200 dark:border-slate-700 
                 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer"
    >
      <div className="text-primary dark:text-primary-light mb-4 sm:mb-5 flex justify-center">
        {service.icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <div
        ref={descriptionRef}
        className="overflow-hidden transition-all duration-500 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <p>{service.description}</p>
      </div>
    </div>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Website Designing',
      description: 'Design stunning, responsive, and user-friendly websites tailored to your brand.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Website Development',
      description: 'We build fast, secure, and scalable websites using modern web technologies.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Graphic Designing',
      description: "Creative designs that visually communicate your brand's story and identity.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: 'Domain Registration',
      description: 'Register your perfect domain name and secure your online presence instantly.',
    },
    {
  icon: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8" />
    </svg>
  ),
  title: 'Business Email',
  description: 'Professional business email setup to enhance your brand credibility and communication.',
},

    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18" />
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Boost your online presence, drive traffic, and increase sales with our marketing solutions.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-9">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isExpanded={expandedIndex === index}
              onClick={() => toggleExpand(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
