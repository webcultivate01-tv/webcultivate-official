import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const DomainRegistration = () => <ServicePageLayout service={getServiceBySlug('domain-registration')} />;

export default DomainRegistration;
