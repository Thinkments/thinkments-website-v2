import React from 'react';
import IndustryTemplate from './IndustryTemplate';
import { industryData } from '../../../data/industryData';

export default function HomeServicesMarketingPage() {
    return <IndustryTemplate industry={industryData.homeServices} />;
}
