import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HeroSection,
  ServicesSection,
  GrowthSection,
  ProjectsSection,
  WorkProcessPreview,
  CTASection,
  TechnologyStack,
  GlobalReach
} from '../components/Home';
import FAQSection from '../components/Home/FAQ';
import TestimonialsCarousel from '../components/Home/Testimonial';


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
        {/* Reach band sits right under the hero — it reads as credibility before the pitch. */}
        <GlobalReach />
        <ServicesSection />
        <GrowthSection />
        {/* <ProjectsSection /> */}
        <TechnologyStack />
        <WorkProcessPreview />
        <TestimonialsCarousel />
        <FAQSection />
        {/* Single closing CTA — also carries the contact channels and newsletter. */}
        <CTASection />
      </div>
    </>
  );
};

export default Home;

