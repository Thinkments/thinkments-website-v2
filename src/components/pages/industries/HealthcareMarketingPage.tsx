import React from 'react';
import IndustryTemplate from './IndustryTemplate';
import { industryData } from '../../../data/industryData';

export default function HealthcareMarketingPage() {
    return <IndustryTemplate industry={industryData.healthcare} />;
}
