import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const SocialMedia = () => <ServicePageLayout service={getServiceBySlug('social-media')} />;

export default SocialMedia;
