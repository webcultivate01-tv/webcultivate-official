import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/shared';
import { ContactInfo, ContactForm } from '../components/Contact';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact WebCultivate Amravati | Get Free Quote for Web Development</title>
        <meta name="description" content="Contact WebCultivate for professional web development services in Amravati. Call +91 7821096438 or email info@webcultivate.com for free consultation and quotes." />
        <meta name="keywords" content="contact WebCultivate, web development quote Amravati, website design consultation, digital marketing services Amravati, free web development quote" />
        <meta property="og:title" content="Contact WebCultivate - Web Development Company in Amravati" />
        <meta property="og:description" content="Get in touch with WebCultivate for expert web development services in Amravati. Free consultation and competitive quotes available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webcultivate.com/contact" />
        <link rel="canonical" href="https://www.webcultivate.com/contact" />
      </Helmet>
      <div>
        <PageHeader 
          title="Get In Touch" 
          subtitle="Let us help you bring your digital vision to life" 
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

