import React from 'react';
import { Link } from 'react-router-dom';

const PricingCards = () => {
  const plans = [
    {
      name: 'Starter',
      // price: '499',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO',
        'Contact form',
        '1 month support',
        'Social media integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      // price: '999',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced responsive design',
        'Advanced SEO',
        'CMS integration',
        '3 months support',
        'Analytics setup',
        'Custom features',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      // price: 'Custom',
      period: 'per project',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom design & development',
        'Enterprise SEO',
        'Advanced CMS',
        '6 months support',
        'Dedicated project manager',
        'Priority support',
        'Custom integrations',
        'Training sessions'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-primary md:scale-105'
                  : 'border-gray-200 dark:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary-dark text-white px-3 sm:px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs sm:text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
                {plan.name}
              </h3>
              <div className="mb-3 sm:mb-4">
                {/* {plan.price !== 'Custom' ? (
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                )} */}
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">{plan.period}</p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6">{plan.description}</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary text-white flex items-center justify-center mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg hover:shadow-xl hover:-translate-y-1'
                    : 'text-primary border-2 border-primary hover:bg-primary hover:text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
