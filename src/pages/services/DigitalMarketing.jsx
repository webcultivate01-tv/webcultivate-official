import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const DigitalMarketing = () => <ServicePageLayout service={getServiceBySlug('digital-marketing')} />;

export default DigitalMarketing;
