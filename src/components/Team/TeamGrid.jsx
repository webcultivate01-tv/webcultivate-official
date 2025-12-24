import React from 'react';
import Tejas from "../../assets/Tejas.webp"
import Vaidehi from "../../assets/vaidehi.webp"
import Om from   "../../assets/OmDhage.webp"
import Vaishnavi  from "../../assets/vaishnavi.webp"

const TeamGrid = () => {
  const team = [
    {
      name: 'Tejas Mehar',
      role: 'Full Stack Developer',
      imageUrl: Tejas,
      bio: 'Creating seamless web experiences as a Full Stack Developer.',
      social: { linkedin: 'https://www.linkedin.com/in/tejas-mehar/', twitter: '#', email: '#' },
    },
    {
      name: 'Vaidahi Kavi',
      role: 'Full Stack Developer',
      imageUrl: Vaidehi,
      bio: 'Building modern and scalable web applications as a Full Stack Developer',
      social: { linkedin: 'https://www.linkedin.com/in/vaidehi-kavi/', twitter: '#', email: '#' },
    },
    {
      name: 'Om Dhage',
      role: 'Frontend Developer',
      imageUrl: Om,
      bio: 'Building seamless and responsive web experiences with React and modern frontend technologies',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
    // {
    // //   name: 'Vaishnavi Gharaat',
    // //   role: 'Digital Marketer & Designer',
    // //   imageUrl: Vaishnavi,
    // //   bio: 'Driving growth through creative digital marketing strategies.',
    // //   social: { linkedin: 'https://www.linkedin.com/in/vaishnavie-gharat-753369249/', twitter: '#', email: '#' },
    // // },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        {/* <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-500 dark:text-gray-300 mb-8 sm:mb-10 md:mb-12">
            Meet the Team
          </h2>
        </div> */}

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8 max-w-6xl mx-auto text-center">
          {team.map((member, index) => (
            <div key={index} className="px-4 sm:px-0">
              <img
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 mx-auto rounded-full object-cover"
                src={member.imageUrl}
                alt={member.name}
              />
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg xl:text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">{member.role}</p>
              <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2 sm:px-0">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                <a
                  href={member.social.linkedin}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* <a
                  href={member.social.twitter}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-blue-400 dark:hover:bg-blue-400 hover:text-white transition"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a> */}
                {/* <a
                  href={member.social.email}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a> */}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamGrid;
