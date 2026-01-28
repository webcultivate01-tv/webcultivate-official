import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/shared';
import { TestimonialsGrid, StatsSection } from '../components/Testimonials';

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Client Testimonials - WebCultivate Amravati | Customer Reviews</title>
        <meta name="description" content="Read genuine client testimonials and reviews for WebCultivate's web development services in Amravati. See why businesses trust us for their digital solutions." />
        <meta name="keywords" content="WebCultivate testimonials, client reviews Amravati, web development feedback, customer testimonials Amravati, satisfied clients WebCultivate" />
        <meta property="og:title" content="Client Testimonials - WebCultivate Amravati" />
        <meta property="og:description" content="Discover what our satisfied clients say about WebCultivate's web development services in Amravati. Real testimonials from real businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/testimonials" />
        <link rel="canonical" href="https://www.webcultivate.com/testimonials" />
      </Helmet>
      <div className="pt-20">
        <PageHeader
          title="Client Testimonials"
          subtitle="What our satisfied clients have to say about working with us"
        />
        <TestimonialsGrid />
        <StatsSection />
      </div>
    </>
  );
};

export default Testimonials;
