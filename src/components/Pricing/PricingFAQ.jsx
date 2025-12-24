import React, { useState } from 'react';

const PricingFAQ = () => {
  const faqs = [
    {
      question: 'Do you offer custom packages?',
      answer: 'Yes! We can create custom packages tailored to your specific requirements. Contact us to discuss your needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Payment terms can be discussed during consultation.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No hidden fees! The price you see includes everything mentioned in the package features.'
    },
    {
      question: 'What happens after the support period?',
      answer: 'You can purchase extended support or maintenance packages. We are always here to help you grow.'
    },
    {
      question: 'Are there any special discounts or early bird offers?',
      answer: 'Yes! We offer limited-time early bird discounts and bundle packages for group registrations. Be sure to sign up early to grab the best deals.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto p-4">
       <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent tracking-tight">
               Frequently Asked Questions
            </h2>
           <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing and services
           </p>
           <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-gray-100 to-black dark:from-gray-400 dark:to-gray-200 rounded-full shadow-md"></div>
       </div>

        <div className="divide-y divide-gray-300 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="toggle-button cursor-pointer w-full text-base outline-none text-left font-medium py-6 text-slate-900 dark:text-gray-100 hover:text-blue-700 flex items-center"
              >
                <span className="mr-4">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                  <path d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z" />
                </svg>
              </button>
              <div
                className={`content overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] visible' : 'max-h-0 invisible'
                }`}
              >
                <p className="text-[15px] text-slate-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
