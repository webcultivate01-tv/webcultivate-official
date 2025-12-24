import React from 'react';

const ProcessTimeline = () => {
  const processes = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your vision',
      details: 'We conduct in-depth consultations to understand your goals, target audience, and project requirements. Together, we define clear milestones and success metrics for your digital journey.',
      icon: '🔍',
      color: 'blue-500',
      borderColor: 'border-blue-500'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Crafting perfect visuals',
      details: 'Our design team crafts pixel-perfect mockups and interactive prototypes that bring your vision to life with exceptional user experience and stunning aesthetics.',
      icon: '🎨',
      color: 'blue-600',
      borderColor: 'border-blue-600'
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Building with code',
      details: 'Expert developers write clean, scalable code using industry best practices. We seamlessly integrate features, APIs, and third-party services to build robust solutions.',
      icon: '💻',
      color: 'blue-700',
      borderColor: 'border-blue-700'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Quality assurance',
      details: 'Comprehensive testing validates functionality, performance, and security. Every feature is rigorously checked across browsers and devices to ensure flawless operation.',
      icon: '✔',
      color: 'blue-600',
      borderColor: 'border-blue-600'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Going live',
      details: 'We handle domain setup, hosting configuration, SSL certificates, and performance optimization to ensure a successful launch with zero-downtime deployment.',
      icon: '🚀',
      color: 'blue-500',
      borderColor: 'border-blue-500'
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing care',
      details: 'Post-launch support includes monitoring, updates, and optimization. We ensure your solution stays secure, fast, and competitive with continuous improvements.',
      icon: '🛠️',
      color: 'blue-700',
      borderColor: 'border-blue-700'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold border border-blue-200 dark:border-slate-700">
              OUR ROADMAP
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white px-4">
            Journey to Success
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Follow our proven 6-step process from concept to launch
          </p>
        </div>

        {/* Desktop Roadmap - Zigzag Layout */}
        <div className="hidden lg:block relative">

          <div className="relative">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center mb-8 ${index === processes.length - 1 ? 'mb-0' : ''}`}
                >
                  <div className="w-full flex items-center justify-between">
                    {/* Left side (even indices) */}
                    {isEven && (
                      <>
                        <div className="w-5/12">
                          <div className={`group/card bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-xl lg:rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:${process.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden`}>
                            
                            <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                              <div className="text-4xl lg:text-5xl transition-transform  duration-500 group-hover/card:scale-110 filter grayscale">{process.icon}</div>
                              <div>
                                <div className="text-xs lg:text-sm font-semibold text-gray-500 dark:text-gray-400">STEP {process.step}</div>
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{process.title}</h3>
                              </div>
                            </div>
                            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-0 group-hover/card:mb-4 transition-all duration-500">{process.description}</p>
                            
                            {/* Detailed info - shows on hover */}
                            <div className="max-h-0 opacity-0 overflow-hidden group-hover/card:max-h-40 group-hover/card:opacity-100 transition-all duration-500">
                              <div className="pt-3 lg:pt-4 border-t border-gray-300 dark:border-slate-600">
                                <p className="text-xs lg:text-sm text-gray-700 dark:text-gray-400 leading-relaxed">{process.details}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Center Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                            {process.step}
                          </div>
                          {index < processes.length - 1 && (
                            <div className="absolute top-[60px] left-1/2 w-0.5 h-40 -translate-x-1/2 bg-blue-500 dark:bg-blue-600"></div>
                          )}
                        </div>

                        {/* Right side empty */}
                        <div className="w-5/12"></div>
                      </>
                    )}

                    {/* Right side (odd indices) */}
                    {!isEven && (
                      <>
                        {/* Left side empty */}
                        <div className="w-5/12"></div>

                        {/* Center Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                            {process.step}
                          </div>
                          {index < processes.length - 1 && (
                            <div className="absolute top-[60px] left-1/2 w-0.5 h-40 -translate-x-1/2 bg-blue-500 dark:bg-blue-600"></div>
                          )}
                        </div>

                        {/* Right side */}
                        <div className="w-5/12">
                          <div className={`group/card bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-xl lg:rounded-2xl border-2 border-gray-200 dark:border-slate-700 hover:${process.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden`}>
                            
                            <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                              <div className="text-4xl lg:text-5xl transition-transform duration-500 group-hover/card:scale-110">{process.icon}</div>
                              <div>
                                <div className="text-xs lg:text-sm font-semibold text-gray-500 dark:text-gray-400">STEP {process.step}</div>
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{process.title}</h3>
                              </div>
                            </div>
                            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-0 group-hover/card:mb-4 transition-all duration-500">{process.description}</p>
                            
                            {/* Detailed info - shows on hover */}
                            <div className="max-h-0 opacity-0 overflow-hidden group-hover/card:max-h-40 group-hover/card:opacity-100 transition-all duration-500">
                              <div className="pt-3 lg:pt-4 border-t border-gray-300 dark:border-slate-600">
                                <p className="text-xs lg:text-sm text-gray-700 dark:text-gray-400 leading-relaxed">{process.details}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Roadmap - Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-500 dark:bg-blue-600"></div>

          <div className="space-y-6 sm:space-y-8">
            {processes.map((process, index) => (
              <div key={index} className="relative flex items-start gap-4 sm:gap-6">
                {/* Circle on line */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {process.step}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-6 sm:pb-8">
                  <div className={`group/card bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 border-gray-200 dark:border-slate-700 hover:${process.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 active:scale-95 sm:hover:scale-105 relative overflow-hidden`}>
                    
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="text-3xl sm:text-4xl transition-transform duration-500 group-hover/card:scale-110">{process.icon}</div>
                      <div>
                        <div className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400">STEP {process.step}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{process.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-0 leading-relaxed">{process.description}</p>
                    
                    {/* Detailed info - always visible on mobile, hover on tablet */}
                    <div className="sm:max-h-0 sm:opacity-0 sm:overflow-hidden sm:group-hover/card:max-h-32 sm:group-hover/card:opacity-100 transition-all duration-500 mt-3 sm:mt-0">
                      <div className="pt-3 border-t border-gray-300 dark:border-slate-600 sm:border-t-0 sm:pt-3 sm:border-t sm:border-gray-300 sm:dark:border-slate-600">
                        <p className="text-[11px] sm:text-xs text-gray-700 dark:text-gray-400 leading-relaxed">{process.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
