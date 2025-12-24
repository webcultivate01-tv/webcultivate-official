import React from 'react';
import { PageHeader } from '../components/shared';
import { TestimonialsGrid, StatsSection } from '../components/Testimonials';

const Testimonials = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="Client Testimonials"
        subtitle="What our satisfied clients have to say about working with us"
      />
      <TestimonialsGrid />
      <StatsSection />
    </div>
  );
};

export default Testimonials;
