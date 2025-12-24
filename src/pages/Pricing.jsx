import React from 'react';
import { PageHeader } from '../components/shared';
import { PricingCards, PricingFAQ } from '../components/Pricing';

const Pricing = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Pricing Plans"
        subtitle="Choose the perfect plan for your business needs"
      />
      <PricingCards />
      <PricingFAQ />
    </div>
  );
};

export default Pricing;
