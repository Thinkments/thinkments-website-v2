import React from 'react';
import IndustryTemplate from './IndustryTemplate';
import { industryData } from '../../../data/industryData';

export default function RealEstateMarketingPage() {
    return <IndustryTemplate industry={industryData.realEstate} />;
}
