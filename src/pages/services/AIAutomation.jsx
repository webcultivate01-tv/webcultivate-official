import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const AIAutomation = () => <ServicePageLayout service={getServiceBySlug('ai-automation')} />;

export default AIAutomation;
