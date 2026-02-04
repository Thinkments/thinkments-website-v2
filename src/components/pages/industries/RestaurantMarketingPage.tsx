import React from 'react';
import IndustryTemplate from './IndustryTemplate';
import { industryData } from '../../../data/industryData';

export default function RestaurantMarketingPage() {
    return <IndustryTemplate industry={industryData.restaurant} />;
}
