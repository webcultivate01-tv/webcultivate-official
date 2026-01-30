import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      slug: 'web-development-trends-2025-amravati-businesses',
      title: 'Web Development Trends 2025: Future-Ready Solutions for Amravati Businesses',
      excerpt: 'Explore cutting-edge web development trends for 2025. AI integration, progressive web apps, and next-gen technologies transforming Amravati businesses.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      category: 'Web Development',
      readTime: '8 min read',
      date: '2025-01-15',
      author: 'WebCultivate Team'
    },
    {
      id: 2,
      slug: 'ai-powered-digital-marketing-2025-amravati',
      title: 'AI-Powered Digital Marketing Strategies for 2025: Amravati Business Guide',
      excerpt: 'Revolutionize your marketing with AI-driven strategies in 2025. Machine learning, automation, and personalization for Amravati businesses.',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&crop=center',
      category: 'Digital Marketing',
      readTime: '6 min read',
      date: '2025-01-10',
      author: 'Marketing Expert'
    },
    {
      id: 3,
      slug: 'immersive-web-design-2026-future-experiences',
      title: 'Immersive Web Design 2026: Creating Future Digital Experiences',
      excerpt: 'Step into the future of web design with VR/AR integration, 3D interfaces, and immersive user experiences that will define 2026.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center',
      category: 'Web Design',
      readTime: '5 min read',
      date: '2026-01-08',
      author: 'Design Team'
    },
    {
      id: 4,
      slug: 'blockchain-ecommerce-2025-secure-online-stores',
      title: 'Blockchain E-commerce 2025: Building Ultra-Secure Online Stores',
      excerpt: 'Discover how blockchain technology is revolutionizing e-commerce in 2025. Secure transactions, smart contracts, and decentralized marketplaces.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      category: 'E-commerce',
      readTime: '7 min read',
      date: '2025-01-05',
      author: 'Development Team'
    },
    {
      id: 5,
      slug: 'voice-search-seo-2026-optimization-strategies',
      title: 'Voice Search SEO 2026: Next-Gen Optimization for Smart Devices',
      excerpt: 'Master voice search optimization for 2026. AI assistants, conversational queries, and semantic SEO strategies for the voice-first era.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&crop=center',
      category: 'SEO',
      readTime: '9 min read',
      date: '2026-01-03',
      author: 'SEO Specialist'
    },
    {
      id: 6,
      slug: 'ai-generated-design-2025-creative-revolution',
      title: 'AI-Generated Design 2025: The Creative Revolution in Branding',
      excerpt: 'Explore how AI is transforming graphic design and branding in 2025. Automated creativity, personalized designs, and the future of visual identity.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&crop=center',
      category: 'Graphic Design',
      readTime: '4 min read',
      date: '2025-01-01',
      author: 'Creative Team'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Web Development & Digital Marketing Tips | WebCultivate Amravati</title>
        <meta name="description" content="Latest insights on web development, digital marketing, and business growth in Amravati. Expert tips from WebCultivate's team of professionals." />
        <meta name="keywords" content="web development blog Amravati, digital marketing tips Amravati, SEO guide Maharashtra, website design trends Amravati" />
        <link rel="canonical" href="https://www.webcultivate.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop&crop=center"
              alt="Blog"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Latest Insights</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                WebCultivate{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Future-focused insights on emerging technologies, AI-powered solutions, and next-generation digital strategies for 2025-2026.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.author}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Stay ahead with future-ready insights on 2025-2026 technology trends and digital innovations for forward-thinking businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;