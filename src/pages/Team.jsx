import React from 'react';
import { PageHeader } from '../components/shared';
import { TeamIntro, TeamGrid, TeamCTA } from '../components/Team';

const Team = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="Meet Our Team"
        subtitle="The talented people behind WebCultivate"
      />
      <TeamIntro />
      {/* <TeamGrid /> */}
      <TeamCTA />
    </div>
  );
};

export default Team;
