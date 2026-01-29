import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/shared';
import { 
  ProcessTimeline, 
  MethodologySection, 
  ProjectTimeline, 
  ProcessCTA 
} from '../components/WorkProcess';
import Hero from '../components/WorkProcess/Hero';  

const WorkProcess = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Process - WebCultivate Amravati | How We Work</title>
        <meta name="description" content="Discover WebCultivate's proven web development process in Amravati. From concept to launch, our streamlined methodology ensures exceptional digital solutions and timely delivery." />
        <meta name="keywords" content="web development process Amravati, website development methodology, project timeline Amravati, software development process, WebCultivate work process" />
        <meta property="og:title" content="Web Development Process - WebCultivate Amravati" />
        <meta property="og:description" content="Learn about WebCultivate's systematic approach to web development in Amravati. Transparent process from planning to deployment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/work-process" />
        <link rel="canonical" href="https://www.webcultivate.com/work-process" />
      </Helmet>
      <div className="pt-20">
        {/* <PageHeader
          title="Our Work Process"
          subtitle="A streamlined approach to deliver exceptional digital solutions from concept to launch."
        /> */}
        <Hero />
        <ProcessTimeline />
        <MethodologySection />
        <ProjectTimeline />
        <ProcessCTA />
      </div>
    </>
  );
};

export default WorkProcess;
