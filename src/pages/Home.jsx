import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>WebCultivate - Best Web Development Company in Amravati | Digital Solutions</title>
        <meta name="description" content="WebCultivate is Amravati's leading web development company offering website design, app development, digital marketing, and branding services. Get modern web solutions for growing brands." />
        <meta name="keywords" content="web development Amravati, website design Amravati, digital marketing Amravati, app development, software company Amravati, WebCultivate" />
        <meta property="og:title" content="WebCultivate - Best Web Development Company in Amravati" />
        <meta property="og:description" content="Transform your business with WebCultivate's expert web development, design, and digital marketing services in Amravati. Modern solutions for growing brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com" />
        <link rel="canonical" href="https://www.webcultivate.com" />
      </Helmet>
      <div>
        <HeroSection />
        <ServicesSection />
        <GrowthSection />
        {/* <ProjectsSection /> */}
        <TechnologyStack />
        <WorkProcessPreview />
        <CTASection />
      </div>
    </>
  );
};

export default Home;

