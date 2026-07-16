import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const BusinessEmail = () => <ServicePageLayout service={getServiceBySlug('business-email')} />;

export default BusinessEmail;
