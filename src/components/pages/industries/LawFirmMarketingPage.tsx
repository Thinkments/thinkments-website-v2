import React from 'react';
import IndustryTemplate from './IndustryTemplate';
import { industryData } from '../../../data/industryData';

export default function LawFirmMarketingPage() {
    return <IndustryTemplate industry={industryData.law} />;
}
