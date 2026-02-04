import React from 'react';
import IndustryTemplate from './IndustryTemplate';
import { industryData } from '../../../data/industryData';

export default function DentalMarketingPage() {
    return <IndustryTemplate industry={industryData.dental} />;
}
