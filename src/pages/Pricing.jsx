import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PricingCards, PricingTrustSection, PricingFAQ } from '../components/Pricing';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Pricing - WebCultivate Amravati | Affordable Plans</title>
        <meta name="description" content="Explore WebCultivate's affordable web development pricing plans in Amravati. Transparent pricing for website design, development, and digital marketing services." />
        <meta name="keywords" content="web development pricing Amravati, website design cost, affordable web development, pricing plans Amravati, WebCultivate rates, web development packages" />
        <meta property="og:title" content="Web Development Pricing - WebCultivate Amravati" />
        <meta property="og:description" content="Get transparent pricing for professional web development services in Amravati. Choose the perfect plan for your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/pricing" />
        <link rel="canonical" href="https://www.webcultivate.com/pricing" />
      </Helmet>
      <div className="bg-white dark:bg-slate-950">
        <PricingCards />
        <PricingTrustSection />
        <PricingFAQ />
      </div>
    </>
  );
};

export default Pricing;
