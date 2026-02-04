import React from 'react';
import IndustryTemplate from './IndustryTemplate';
import { industryData } from '../../../data/industryData';

export default function HVACMarketingPage() {
    return <IndustryTemplate industry={industryData.hvac} />;
}
