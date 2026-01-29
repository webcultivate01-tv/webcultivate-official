import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
  const services = [
    {
      title: "Logo Design",
      description: "Memorable logos that represent your brand identity",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop"
    },
    {
      title: "Brand Identity",
      description: "Complete branding packages with consistent visual elements",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "Marketing Materials",
      description: "Brochures, flyers, and promotional design materials",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      title: "Social Media Graphics",
      description: "Eye-catching graphics for all social media platforms",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
    },
    {
      title: "Packaging Design",
      description: "Product packaging that stands out on shelves",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      title: "Digital Illustrations",
      description: "Custom illustrations for web and print media",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Services in Amravati | WebCultivate</title>
        <meta name="description" content="Professional graphic design services in Amravati. Logo design, branding, marketing materials, and digital graphics that make your business stand out." />
        <meta name="keywords" content="graphic design Amravati, logo design, branding services, marketing materials, social media graphics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold border border-purple-500/20">
                Graphic Design
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 mt-4">
                Creative{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Visual Solutions
                </span>{" "}
                That Inspire
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your brand with stunning graphic designs that capture attention and communicate your message effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Design Project
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-purple-500 text-purple-600 dark:text-purple-400 font-semibold rounded-2xl hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Design Packages
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop&crop=center"
                alt="Graphic Design Services"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Our Design Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From logos to complete brand identities, we create designs that make your business memorable.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's create stunning visual designs that make your brand unforgettable.
              </p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Design Project
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GraphicDesign;