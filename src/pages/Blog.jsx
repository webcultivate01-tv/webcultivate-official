import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    slug: 'web-development-trends-2025-amravati-businesses',
    title: 'Web Development Trends 2025: Future-Ready Solutions for Amravati Businesses',
    excerpt: 'Explore cutting-edge web development trends for 2025. AI integration, progressive web apps, and next-gen technologies transforming Amravati businesses.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
    category: 'Web Development',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    author: 'WebCultivate Team',
  },
  {
    id: 2,
    slug: 'ai-powered-digital-marketing-2025-amravati',
    title: 'AI-Powered Digital Marketing Strategies for 2025: Amravati Business Guide',
    excerpt: 'Revolutionize your marketing with AI-driven strategies in 2025. Machine learning, automation, and personalization for Amravati businesses.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&crop=center',
    category: 'Digital Marketing',
    readTime: '6 min read',
    date: 'Jan 10, 2025',
    author: 'Marketing Expert',
  },
  {
    id: 3,
    slug: 'immersive-web-design-2026-future-experiences',
    title: 'Immersive Web Design 2026: Creating Future Digital Experiences',
    excerpt: 'Step into the future of web design with VR/AR integration, 3D interfaces, and immersive user experiences that will define 2026.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center',
    category: 'Web Design',
    readTime: '5 min read',
    date: 'Jan 08, 2026',
    author: 'Design Team',
  },
  {
    id: 4,
    slug: 'blockchain-ecommerce-2025-secure-online-stores',
    title: 'Blockchain E-commerce 2025: Building Ultra-Secure Online Stores',
    excerpt: 'Discover how blockchain technology is revolutionizing e-commerce in 2025. Secure transactions, smart contracts, and decentralized marketplaces.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
    category: 'E-commerce',
    readTime: '7 min read',
    date: 'Jan 05, 2025',
    author: 'Development Team',
  },
  {
    id: 5,
    slug: 'voice-search-seo-2026-optimization-strategies',
    title: 'Voice Search SEO 2026: Next-Gen Optimization for Smart Devices',
    excerpt: 'Master voice search optimization for 2026. AI assistants, conversational queries, and semantic SEO strategies for the voice-first era.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&crop=center',
    category: 'SEO',
    readTime: '9 min read',
    date: 'Jan 03, 2026',
    author: 'SEO Specialist',
  },
  {
    id: 6,
    slug: 'ai-generated-design-2025-creative-revolution',
    title: 'AI-Generated Design 2025: The Creative Revolution in Branding',
    excerpt: 'Explore how AI is transforming graphic design and branding in 2025. Automated creativity, personalized designs, and the future of visual identity.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&crop=center',
    category: 'Graphic Design',
    readTime: '4 min read',
    date: 'Jan 01, 2025',
    author: 'Creative Team',
  },
];

const categories = ['All', ...Array.from(new Set(blogs.map((b) => b.category)))];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? blogs : blogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Blog - Web Development & Digital Marketing Tips | WebCultivate Amravati</title>
        <meta name="description" content="Latest insights on web development, digital marketing, and business growth in Amravati. Expert tips from WebCultivate's team of professionals." />
        <meta name="keywords" content="web development blog Amravati, digital marketing tips Amravati, SEO guide Maharashtra, website design trends Amravati" />
        <link rel="canonical" href="https://www.webcultivate.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-[140px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 border border-primary/20">
                📖 Latest Insights
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
                WebCultivate{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Future-focused insights on emerging technologies, AI-powered solutions, and next-generation digital strategies for 2025–2026.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6 }}
                  className="group bg-white dark:bg-slate-800/80 backdrop-blur rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
                      {blog.category}
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 mb-3">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{blog.date}</span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span>{blog.author}</span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </h2>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>

                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-primary-light group/link"
                    >
                      Read Article
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-slate-500 dark:text-slate-400 py-16">No posts in this category yet.</p>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 mx-4 sm:mx-6 lg:mx-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-secondary p-10 text-center shadow-2xl shadow-primary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

              <div className="relative">
                <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold">
                  Stay Ahead
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Get the Latest Insights
                </h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                  Subscribe to receive future-ready insights on technology trends and digital innovations — delivered straight to your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-xl border-0 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-white/60 outline-none text-sm"
                  />
                  <button className="px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg">
                    Subscribe →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Blog;
