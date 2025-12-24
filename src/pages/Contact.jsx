import React from 'react';
import { PageHeader } from '../components/shared';
import { ContactInfo, ContactForm } from '../components/Contact';

const Contact = () => {
  return (
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
  );
};

export default Contact;

