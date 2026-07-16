import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const WebsiteDesign = () => <ServicePageLayout service={getServiceBySlug('website-design')} />;

export default WebsiteDesign;
