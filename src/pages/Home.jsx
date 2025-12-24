import React from 'react';
import {
  HeroSection,
  ServicesSection,
  GrowthSection,
  ProjectsSection,
  WorkProcessPreview,
  CTASection,
  TechnologyStack
} from '../components/Home';


const Home = () => {
  return (
    //  classname="pt-10"
    <div>
      <HeroSection />
      <ServicesSection />
      <GrowthSection />
      {/* <ProjectsSection /> */}
      <TechnologyStack />
      <WorkProcessPreview />
      <CTASection />
    </div>
  );
};

export default Home;

