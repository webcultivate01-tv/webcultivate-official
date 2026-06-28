import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAutomation = () => {
  const services = [
    { title: "Workflow Automation", description: "Eliminate repetitive tasks and streamline your business operations", icon: "⚙️", features: ["Process Mapping", "Task Automation", "System Integrations", "Error Reduction"] },
    { title: "AI Chatbots", description: "24/7 intelligent chatbots that handle customer queries instantly", icon: "🤖", features: ["Website Chatbots", "WhatsApp Bots", "Lead Qualification", "Appointment Booking"] },
    { title: "Smart CRM Automation", description: "Automate your sales pipeline and customer follow-ups", icon: "📈", features: ["Lead Scoring", "Auto Follow-ups", "Pipeline Management", "Customer Segmentation"] },
    { title: "AI Content Generation", description: "Generate high-quality content at scale with AI assistance", icon: "✍️", features: ["Blog Posts", "Product Descriptions", "Ad Copies", "Email Sequences"] },
    { title: "Data Analytics & AI Insights", description: "Turn your business data into actionable AI-powered insights", icon: "🔍", features: ["Predictive Analytics", "Sales Forecasting", "Customer Behavior", "Custom Dashboards"] },
    { title: "Marketing Automation", description: "Automate email campaigns, social posts, and ad targeting", icon: "🚀", features: ["Email Drip Campaigns", "Social Scheduling", "Retargeting Ads", "Conversion Funnels"] },
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services in Amravati | WebCultivate</title>
        <meta name="description" content="AI-powered automation services in Amravati. Chatbots, workflow automation, smart analytics, and marketing automation to help your business scale faster." />
        <meta name="keywords" content="AI automation Amravati, chatbot development, workflow automation, business automation, AI solutions, marketing automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="px-4 py-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-violet-600 dark:text-violet-400 rounded-full text-sm font-semibold border border-violet-500/20">
                AI Automation
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-4">
                Scale Faster with{' '}
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  AI Automation
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Automate repetitive tasks, deploy intelligent chatbots, and leverage AI-powered insights to grow your business — without growing your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Automating Today
                </Link>
                <Link to="/pricing" className="px-8 py-4 border-2 border-violet-500 text-violet-600 dark:text-violet-400 font-semibold rounded-2xl hover:bg-violet-500 hover:text-white transition-all duration-300">
                  View Packages
                </Link>
              </div>
            </motion.div>

            <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=600&fit=crop&crop=center" alt="AI Automation Services" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Our AI Automation Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Practical AI solutions built for small and medium businesses in Amravati and beyond.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5 }}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Why Choose AI Automation?</h2>
                <div className="space-y-6">
                  {[
                    { title: "Save 10+ Hours Per Week", desc: "Automate repetitive tasks so your team can focus on what matters" },
                    { title: "Reduce Operational Costs", desc: "AI handles tasks at a fraction of the cost of manual work" },
                    { title: "24/7 Customer Support", desc: "Chatbots respond to customers even when you're offline" },
                    { title: "Scale Without Hiring", desc: "Handle more customers and leads without growing headcount" },
                    { title: "Smarter Decisions", desc: "AI insights help you make data-driven business decisions" },
                    { title: "Quick Implementation", desc: "We set up and deploy automation solutions within days, not months" },
                  ].map((item, index) => (
                    <motion.div key={index} className="flex items-start space-x-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                      <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center" alt="AI Technology" className="rounded-3xl shadow-2xl w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's build intelligent automation that saves you time and drives growth.</p>
              <Link to="/contact" className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                Book a Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomation;
