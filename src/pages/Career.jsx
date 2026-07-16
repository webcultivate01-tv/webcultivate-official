import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Users,
  GraduationCap,
  Wallet,
  ArrowRight,
  Briefcase,
  Check,
  Code2,
  Server,
  Palette,
  TrendingUp,
  Rocket,
  Award,
  HeartHandshake,
  FileText,
  PhoneCall,
  UserPlus,
} from 'lucide-react';

// One application form covers every role.
const APPLY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdOia4HCPImItBJIfZrB9iTf2Ps7GuPkkQhiCprpD0qWdonIQ/viewform?usp=publish-editor';

const jobOpenings = [
  {
    Icon: Code2,
    title: 'Frontend Developer Intern',
    type: 'Internship',
    location: 'Amravati, Maharashtra',
    experience: '0 years (Freshers Welcome)',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    description: 'Join our team to learn and build amazing user interfaces and experiences.',
  },
  {
    Icon: Server,
    title: 'Backend Developer Intern',
    type: 'Internship',
    location: 'Amravati, Maharashtra',
    experience: '0 years (Freshers Welcome)',
    skills: ['Node.js', 'Python', 'MongoDB', 'Express.js'],
    description: 'Learn to develop robust server-side applications and APIs.',
  },
  {
    Icon: Palette,
    title: 'UI/UX Designer Intern',
    type: 'Internship',
    location: 'Amravati, Maharashtra',
    experience: '0 years (Freshers Welcome)',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'User Research'],
    description: 'Learn to create beautiful and intuitive designs for web and mobile.',
  },
  {
    Icon: TrendingUp,
    title: 'Digital Marketing Intern',
    type: 'Internship',
    location: 'Remote/Amravati',
    experience: '0 years (Freshers Welcome)',
    skills: ['SEO', 'Social Media', 'Google Ads', 'Content Marketing'],
    description: 'Learn to drive growth through strategic digital marketing campaigns.',
  },
];

const benefits = [
  {
    Icon: Wallet,
    title: 'Competitive Salary',
    description: 'Market-competitive compensation packages',
  },
  {
    Icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and skill development',
  },
  {
    Icon: Clock,
    title: 'Flexible Hours',
    description: 'Work-life balance with flexible working hours',
  },
  {
    Icon: Users,
    title: 'Great Team',
    description: 'Work with passionate and talented professionals',
  },
];

// What a fresher actually gets out of the internship — shown as hero bullets.
const heroPoints = ['Real client projects', '1-on-1 mentorship', 'Certificate on completion'];

// Floating trust chips around the hiring-board mockup — desktop only.
const chips = [
  {
    Icon: Rocket,
    label: 'You Work On',
    value: 'Live Projects',
    tone: 'text-primary bg-primary/10 dark:bg-primary/20',
    pos: 'top-[8%] -left-[14%]',
  },
  {
    Icon: HeartHandshake,
    label: 'Mentorship',
    value: '1-on-1',
    tone: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20',
    pos: 'top-[8%] -right-[12%]',
  },
  {
    Icon: Award,
    label: 'On Completion',
    value: 'Certificate',
    tone: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20',
    pos: 'bottom-[10%] -right-[12%]',
  },
  {
    Icon: Clock,
    label: 'Working Hours',
    value: 'Flexible',
    tone: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/20',
    pos: 'bottom-[10%] -left-[14%]',
  },
];

// The four steps from application to shipping real work — shown as the hero visual.
const journeySteps = [
  {
    Icon: FileText,
    title: 'Apply Online',
    sub: 'Takes just 2 minutes',
  },
  {
    Icon: PhoneCall,
    title: 'Interview Call',
    sub: 'A friendly chat — no pressure',
  },
  {
    Icon: UserPlus,
    title: 'Get Onboarded',
    sub: 'Mentor assigned from day one',
  },
  {
    Icon: Rocket,
    title: 'Build Real Projects',
    sub: 'Ship work clients actually use',
  },
];

// Hero entrances run on mount (`animate`) — same convention as the Home hero.
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

const rise = { initial: 'hidden', animate: 'visible', variants: itemVariants };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Fades the blueprint grid out toward the edges so it never competes with the copy.
const GRID_FADE = 'radial-gradient(ellipse 75% 60% at 50% 0%, #000 55%, transparent 100%)';

const Career = () => {
  const reduceMotion = useReducedMotion();

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

      <div className="bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">

          {/* Ambient background — grid + glows, purely decorative */}
          <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgb(100 116 139 / 0.10) 1px, transparent 1px), linear-gradient(to bottom, rgb(100 116 139 / 0.10) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
                maskImage: GRID_FADE,
                WebkitMaskImage: GRID_FADE,
              }}
            />
            <motion.div
              className="absolute -top-1/3 -right-10 w-[400px] h-[400px] md:w-[560px] md:h-[560px] bg-primary/10 rounded-full blur-3xl"
              animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-1/3 -left-10 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl"
              animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

              {/* ── LEFT: the pitch ── */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Live-status badge */}
                <motion.span
                  custom={0} {...rise}
                  className="inline-flex items-center gap-2.5 pl-2.5 pr-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/70 backdrop-blur text-slate-700 dark:text-slate-200 text-[13px] font-medium tracking-tight ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm mb-5"
                >
                  <span className="relative flex h-2 w-2">
                    {!reduceMotion && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    )}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  We&apos;re hiring — {jobOpenings.length} internships open
                </motion.span>

                <motion.h1
                  custom={1} {...rise}
                  className="max-w-2xl text-[2.1rem] sm:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold leading-[1.12] tracking-[-0.03em] text-slate-900 dark:text-white [text-wrap:balance]"
                >
                  Build Your{' '}
                  <span className="relative inline-block">
                    {/* Highlighter sweep sits behind the words */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-x-0 bottom-[0.08em] h-[0.34em] origin-left rounded-[3px] bg-gradient-to-r from-primary/20 via-secondary/20 to-secondary/5 dark:from-primary/35 dark:via-secondary/30 dark:to-secondary/10"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="relative bg-gradient-to-r from-primary to-secondary-light bg-clip-text text-transparent">
                      Career
                    </span>
                  </span>{' '}
                  With Us
                </motion.h1>

                <motion.p
                  custom={2} {...rise}
                  className="mt-5 text-base sm:text-[1.0625rem] leading-[1.7] text-slate-600 dark:text-slate-400 max-w-xl"
                >
                  Join WebCultivate and be part of Amravati&apos;s fastest-growing web
                  development company. Work on real client projects, learn cutting-edge
                  technologies and grow your career with a team that invests in you.
                </motion.p>

                {/* Value bullets */}
                <motion.ul
                  custom={3} {...rise}
                  className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2.5 mt-5"
                >
                  {heroPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                        <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" strokeWidth={3.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </motion.ul>

                {/* CTA buttons */}
                <motion.div
                  custom={4} {...rise}
                  className="flex flex-wrap gap-3.5 mt-7 justify-center lg:justify-start"
                >
                  <a
                    href="#openings"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
                  >
                    View Open Positions
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/10 dark:ring-white/10 text-slate-800 dark:text-white hover:ring-primary/60 hover:text-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
                  >
                    Contact HR
                  </Link>
                </motion.div>

                <motion.p
                  custom={5} {...rise}
                  className="mt-4 text-xs text-slate-500 dark:text-slate-500"
                >
                  Freshers welcome · Application takes 2 minutes
                </motion.p>
              </div>

              {/* ── RIGHT: open-positions board mockup ── */}
              <motion.div
                className="relative flex items-center justify-center lg:py-10 lg:px-8 xl:px-12"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                {/* Rotating ring — desktop only (chips need space) */}
                <motion.div
                  className="hidden lg:block absolute w-[380px] h-[380px] xl:w-[440px] xl:h-[440px] rounded-full border border-dashed border-primary/20 dark:border-primary/15"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                {/* Inner glow */}
                <div aria-hidden className="absolute w-[280px] h-[280px] bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-[80px]" />

                {/* Internship-journey card — from application to shipping real work */}
                <div className="relative z-10 w-full max-w-sm lg:max-w-[360px] xl:max-w-[400px]">
                  <div className="rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-2xl shadow-primary/20 overflow-hidden">

                    {/* Card header */}
                    <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-900/[0.06] dark:border-white/10 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold shadow-md shadow-primary/25">
                          WC
                        </div>
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.07em] text-slate-500 dark:text-slate-400">Your Journey</p>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">From Apply to Launch</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {jobOpenings.length} roles open
                      </span>
                    </div>

                    {/* Timeline steps */}
                    <div className="px-5 py-5">
                      {journeySteps.map(({ Icon, title, sub }, i) => (
                        <motion.div
                          key={title}
                          className="relative flex items-start gap-4 pb-5 last:pb-0"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, delay: 0.5 + i * 0.18, ease: 'easeOut' }}
                        >
                          {/* Connector line links this step to the next */}
                          {i < journeySteps.length - 1 && (
                            <span
                              aria-hidden
                              className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-primary/30 to-primary/5 dark:from-primary/40 dark:to-primary/10"
                            />
                          )}
                          <span className="relative flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary ring-1 ring-primary/15">
                            <Icon className="w-4 h-4" />
                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary text-[8px] font-bold text-white ring-2 ring-white dark:ring-slate-800">
                              {i + 1}
                            </span>
                          </span>
                          <span className="pt-0.5">
                            <span className="block text-sm font-bold text-slate-900 dark:text-white">{title}</span>
                            <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">{sub}</span>
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Card footer */}
                    <motion.div
                      className="px-5 py-3.5 border-t border-slate-900/[0.06] dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      <a
                        href="#openings"
                        className="group/link flex items-center justify-between text-xs font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        Start with step one — view open roles
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Trust chips row — mobile only (inline instead of floating) */}
                  <div className="grid grid-cols-2 gap-2 mt-3 lg:hidden">
                    {chips.map(({ Icon, label, value, tone }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-800/80 ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm"
                      >
                        <span className={`flex items-center justify-center w-7 h-7 shrink-0 rounded-lg ${tone}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-none mb-1 truncate">{label}</p>
                          <p className="text-xs font-bold tracking-tight text-slate-900 dark:text-white leading-none">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating trust chips — desktop only.
                    Outer node owns the entrance, inner node owns the idle float. */}
                {chips.map(({ Icon, label, value, tone, pos }, i) => (
                  <motion.div
                    key={label}
                    className={`hidden lg:block absolute ${pos} z-20`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: 'backOut' }}
                  >
                    <motion.div
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-800/90 ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-lg shadow-slate-900/5 backdrop-blur-sm"
                      animate={reduceMotion ? undefined : { y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                      transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: 1 + i * 0.2 }}
                    >
                      <span className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-lg ${tone}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-none mb-1">{label}</p>
                        <p className="text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-none">{value}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold border border-primary/20">
                Why Join Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                More Than{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Just a Job
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                We provide a platform for growth and innovation — here&apos;s what working
                with us actually looks like.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {benefits.map(({ Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={cardVariants}
                  className="group p-6 rounded-2xl bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm hover:ring-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── JOB OPENINGS ── */}
        <section id="openings" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
          {/* Soft glow behind the cards */}
          <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm font-semibold border border-primary/20">
                Current Openings
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                Find Your{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Role
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Join our team and help us build amazing digital experiences.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {jobOpenings.map(({ Icon, title, type, location, experience, skills, description }) => (
                <motion.div
                  key={title}
                  variants={cardVariants}
                  className="group flex flex-col p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-900/[0.07] dark:ring-white/10 shadow-sm hover:ring-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {title}
                      </h3>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-xs font-semibold text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                    <p className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {location}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                      {experience}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/15 text-xs font-medium text-primary dark:text-primary-light ring-1 ring-primary/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Apply — mt-auto keeps buttons aligned across cards of unequal height */}
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
          {/* Gradient field + soft glows — same treatment as the Home closing CTA */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
          <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] -translate-y-1/2 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] translate-y-1/2 bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
            }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-blue-100">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-300" />
                Always open to great people
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
                Don&apos;t see{' '}
                <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
                  your role?
                </span>
              </h2>

              <p className="mt-3.5 text-sm sm:text-base text-blue-100/75 leading-relaxed max-w-lg mx-auto">
                We&apos;re always looking for talented individuals. Send us your resume and
                we&apos;ll reach out when the right opening comes up.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-blue-950 bg-gradient-to-r from-sky-300 to-blue-400 shadow-[0_16px_32px_-12px_rgba(56,189,248,0.5)] hover:shadow-[0_20px_40px_-12px_rgba(56,189,248,0.7)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    Send Your Resume
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/35 transition-all duration-300"
                >
                  Talk to Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Career;
