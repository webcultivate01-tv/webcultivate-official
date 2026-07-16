import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { getServiceBySlug } from '../../data/servicesData';

const GraphicDesign = () => <ServicePageLayout service={getServiceBySlug('graphic-design')} />;

export default GraphicDesign;
