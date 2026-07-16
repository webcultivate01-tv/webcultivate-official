import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const WebsiteDevelopment = () => <ServicePageLayout service={getServiceBySlug('website-development')} />;

export default WebsiteDevelopment;
