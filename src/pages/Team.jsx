import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/shared';
import { TeamIntro, TeamGrid, TeamCTA } from '../components/Team';

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - WebCultivate Amravati | Expert Web Developers</title>
        <meta name="description" content="Meet the talented team behind WebCultivate Amravati. Expert web developers, designers, and digital marketing professionals dedicated to your success." />
        <meta name="keywords" content="WebCultivate team, web developers Amravati, expert team, web development professionals, digital marketing team Amravati, software developers" />
        <meta property="og:title" content="Our Expert Team - WebCultivate Amravati" />
        <meta property="og:description" content="Discover the skilled professionals at WebCultivate who bring your digital vision to life in Amravati." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/team" />
        <link rel="canonical" href="https://www.webcultivate.com/team" />
      </Helmet>
      <div className="pt-20">
        <PageHeader
          title="Meet Our Team"
          subtitle="The talented people behind WebCultivate"
        />
        <TeamIntro />
        {/* <TeamGrid /> */}
        <TeamCTA />
      </div>
    </>
  );
};

export default Team;
