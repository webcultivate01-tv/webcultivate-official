import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/shared';
import { AboutSection, MissionVisionValues, WhyChooseUs } from '../components/About';
import TrustedClient from '../components/About/TrustedClient';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About WebCultivate - Premier Web Development Company in Amravati | Digital Solutions</title>
        <meta name="description" content="WebCultivate is Amravati's leading web development company offering expert digital solutions, modern web design, and innovative software development services. Trusted by 5+ clients with 10+ successful projects." />
        <meta name="keywords" content="about WebCultivate, web development company Amravati, digital solutions Amravati, software development Amravati, web design services, IT company Amravati" />
        <meta property="og:title" content="About WebCultivate - Premier Web Development Company in Amravati" />
        <meta property="og:description" content="Discover WebCultivate's journey as Amravati's trusted digital partner. Expert team, proven results, and comprehensive web development services for growing businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/about" />
        <meta property="og:image" content="https://www.webcultivate.com/src/assets/webcultivate-logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About WebCultivate - Premier Web Development Company in Amravati" />
        <meta name="twitter:description" content="Learn about WebCultivate's mission to transform businesses in Amravati through innovative web development and digital solutions." />
        <link rel="canonical" href="https://www.webcultivate.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "WebCultivate",
              "description": "Premier web development company in Amravati specializing in modern digital solutions",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amravati",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 7821096438",
                "contactType": "Customer Service",
                "email": "info@webcultivate.com"
              },
              "foundingDate": "2022",
              "numberOfEmployees": "5-10",
              "serviceArea": "Amravati, Maharashtra, India"
            }
          })}
        </script>
      </Helmet>
      <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <PageHeader
          title="About WebCultivate"
          subtitle="Your Trusted Partner in Digital Transformation"
        />
        <AboutSection />
        <MissionVisionValues />
        <TrustedClient/>
        <WhyChooseUs />
      </div>
    </>
  );
};

export default About;

