import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Career = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer Intern",
      type: "Internship",
      location: "Amravati, Maharashtra",
      experience: "0 years (Freshers Welcome)",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      description: "Join our team to learn and build amazing user interfaces and experiences."
    },
    {
      title: "Backend Developer Intern",
      type: "Internship", 
      location: "Amravati, Maharashtra",
      experience: "0 years (Freshers Welcome)",
      skills: ["Node.js", "Python", "MongoDB", "Express.js"],
      description: "Learn to develop robust server-side applications and APIs."
    },
    {
      title: "UI/UX Designer Intern",
      type: "Internship",
      location: "Amravati, Maharashtra", 
      experience: "0 years (Freshers Welcome)",
      skills: ["Figma", "Adobe XD", "Photoshop", "User Research"],
      description: "Learn to create beautiful and intuitive designs for web and mobile."
    },
    {
      title: "Digital Marketing Intern",
      type: "Internship",
      location: "Remote/Amravati",
      experience: "0 years (Freshers Welcome)", 
      skills: ["SEO", "Social Media", "Google Ads", "Content Marketing"],
      description: "Learn to drive growth through strategic digital marketing campaigns."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Competitive Salary",
      description: "Market-competitive compensation packages"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Great Team",
      description: "Work with passionate and talented professionals"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers at WebCultivate Amravati | Join Our Team</title>
        <meta name="description" content="Join WebCultivate's growing team in Amravati. Explore exciting career opportunities in web development, design, and digital marketing. Apply now!" />
        <meta name="keywords" content="WebCultivate careers, jobs Amravati, web developer jobs, UI UX designer jobs, digital marketing jobs, software company careers" />
        <meta property="og:title" content="Careers at WebCultivate - Join Our Team in Amravati" />
        <meta property="og:description" content="Build your career with WebCultivate. Exciting opportunities in web development, design, and digital marketing in Amravati." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/careers" />
        <link rel="canonical" href="https://www.webcultivate.com/careers" />
      </Helmet>

      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold border border-purple-500/20">
                    Join Our Team
                  </span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight">
                  Build Your{" "}
                  <motion.span 
                    className="bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Career
                  </motion.span>{" "}
                  with Us
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Join WebCultivate and be part of Amravati's fastest-growing web development company. 
                  Work on exciting projects, learn cutting-edge technologies, and grow your career with us.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#openings"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                    >
                      <span>View Open Positions</span>
                      <motion.svg 
                        className="ml-2 w-5 h-5"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </motion.svg>
                    </a>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary dark:text-primary-light font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Contact HR
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                    alt="Team collaboration"
                    className="w-full max-w-lg mx-auto h-80 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
                </motion.div>

                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Why Work with Us?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We offer more than just a job - we provide a platform for growth and innovation
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join our team and help us build amazing digital experiences
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.experience}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdOia4HCPImItBJIfZrB9iTf2Ps7GuPkkQhiCprpD0qWdonIQ/viewform?usp=publish-editor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    >
                      Apply Now
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We're always looking for talented individuals. Send us your resume!
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdOia4HCPImItBJIfZrB9iTf2Ps7GuPkkQhiCprpD0qWdonIQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  <span>Apply Now</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Career;