import React from 'react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      info: 'info@webcultivate.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      info: '+91 7821096438'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      info: 'Sai Nagar Amravati'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Working Hours',
      info: 'Mon - sat: 9:00 AM - 8:00 PM'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1EJnUKMCmb/',
      icon: 'fab fa-facebook-f'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/webcultivate?igsh=dHY4MzV0a3k3NHRy',
      icon: 'fab fa-instagram'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/webcultivate/?viewAsMember=true',
      icon: 'fab fa-linkedin-in'
    }
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Let's Start a Conversation</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
        Have a project in mind? Want to discuss your digital needs? We would love to hear 
        from you. Fill out the form and our team will get back to you within 24 hours.
      </p>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-primary dark:text-primary-light flex-shrink-0">
              {detail.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{detail.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{detail.info}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.name}
              className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
