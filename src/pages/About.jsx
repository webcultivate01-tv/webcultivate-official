import React from 'react';
import { PageHeader } from '../components/shared';
import { AboutSection, MissionVisionValues, WhyChooseUs } from '../components/About';
import TrustedClient from '../components/About/TrustedClient';

const About = () => {
  return (
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
  );
};

export default About;

