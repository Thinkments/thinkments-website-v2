export interface IndustryData {
    slug: string;
    name: string;
    title: string;
    description: string;
    heroImage: string;
    keywords: string[];
    challenges: Array<{
        title: string;
        description: string;
    }>;
    services: Array<{
        title: string;
        description: string;
        features: string[];
    }>;
    caseStudy: {
        stat1: { value: string; label: string };
        stat2: { value: string; label: string };
        stat3: { value: string; label: string };
        challenge: string;
        strategy: string;
        results: string;
    };
}

export const industryData: Record<string, IndustryData> = {
    hvac: {
        slug: 'hvac-marketing',
        name: 'HVAC',
        title: 'HVAC Marketing That Fills Your Schedule',
        description: 'Generate more qualified leads for your heating, cooling, and refrigeration business with proven digital marketing strategies',
        heroImage: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=1080&fit=crop',
        keywords: ['HVAC marketing', 'HVAC SEO', 'HVAC social media marketing', 'HVAC lead generation'],
        challenges: [
            {
                title: 'Seasonal Demand Fluctuations',
                description: 'HVAC demand spikes in summer and winter. Your marketing must ramp up before peak seasons and maintain presence during slower months. We adjust campaigns based on seasonal patterns, ensuring maximum ROI when customers need you most.',
            },
            {
                title: 'Emergency vs Planned Services',
                description: 'Some customers need AC repair NOW. Others research HVAC replacement for months. Your marketing must capture both emergency service calls and educate long-term prospects about maintenance plans and system upgrades.',
            },
            {
                title: 'Local Service Area Focus',
                description: 'HVAC is hyperlocal. Customers search "HVAC repair near me" or "AC installation in [city]". Local SEO, Google Business Profile optimization, and location-specific landing pages drive the majority of qualified leads.',
            },
            {
                title: 'High Competition & Ad Costs',
                description: 'HVAC keywords like "AC repair" cost $15-50+ per click in Google Ads. Competition is fierce. Effective HVAC marketing combines paid advertising with strong SEO to reduce cost per acquisition while maintaining lead volume.',
            },
        ],
        services: [
            {
                title: 'HVAC SEO',
                description: 'Rank #1 for high-intent keywords like "AC repair [city]", "HVAC installation near me", and "emergency furnace repair".',
                features: [
                    'Local SEO optimization for your service area cities',
                    'Google Business Profile management (Map Pack rankings)',
                    'Service-specific landing pages (AC repair, furnace installation, etc.)',
                    'Review generation and reputation management',
                    'Content marketing (seasonal tips, maintenance guides)',
                ],
            },
            {
                title: 'HVAC Google Ads & PPC',
                description: 'Get immediate visibility for emergency and seasonal services. We manage HVAC PPC campaigns that generate 3-5x return on ad spend.',
                features: [
                    'Emergency service campaigns (AC/furnace repair)',
                    'Seasonal campaigns (AC in summer, heating in winter)',
                    'Local Service Ads (Google Screened & Guaranteed)',
                    'Remarketing to previous website visitors',
                    'Call tracking and conversion optimization',
                ],
            },
            {
                title: 'HVAC Social Media Marketing',
                description: 'Build brand awareness and stay top-of-mind for when customers need HVAC services.',
                features: [
                    'Facebook & Instagram ads targeting homeowners in your area',
                    'Seasonal content (tune-up reminders, energy-saving tips)',
                    'Before/after installations and customer testimonials',
                    'Promotion of maintenance plans and special offers',
                ],
            },
            {
                title: 'HVAC Lead Generation',
                description: 'Our strategies are designed to generate qualified leads that convert into booked service calls.',
                features: [
                    'Click-to-call optimization for mobile searchers',
                    'Online booking and estimate request forms',
                    'Live chat and chatbot lead capture',
                    'Email marketing for maintenance reminders and seasonal promotions',
                ],
            },
        ],
        caseStudy: {
            stat1: { value: '257%', label: 'Increase in Organic Traffic' },
            stat2: { value: '83%', label: 'More Service Call Requests' },
            stat3: { value: '4.2x', label: 'Return on Ad Spend' },
            challenge: 'A growing HVAC company in the Dallas-Fort Worth area was struggling to compete with established competitors. Their website generated minimal traffic, and Google Ads costs were eating into margins without delivering consistent leads.',
            strategy: 'We implemented a comprehensive HVAC marketing strategy combining local SEO, Google Business Profile optimization, seasonal PPC campaigns, and conversion rate optimization.',
            results: 'Within 12 months, organic traffic increased 257%, service call requests increased 83%, and Google Ads ROAS improved from 1.8x to 4.2x. The company added 3 new trucks and hired 5 additional technicians to handle increased demand.',
        },
    },
    dental: {
        slug: 'dental-marketing',
        name: 'Dental',
        title: 'Dental Marketing That Fills Your Appointment Book',
        description: 'Attract more new patients and grow your dental practice with proven digital marketing strategies',
        heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1080&fit=crop',
        keywords: ['dental marketing', 'dentist SEO', 'dental practice marketing', 'dental patient acquisition'],
        challenges: [
            {
                title: 'New Patient Acquisition Costs',
                description: 'Acquiring new dental patients is expensive. PPC costs for "dentist near me" can exceed $20-40 per click. You need a balanced approach combining SEO, reputation management, and strategic advertising to maintain healthy patient acquisition costs.',
            },
            {
                title: 'Insurance vs Cosmetic Services',
                description: 'Marketing general dentistry (insurance-covered) requires different strategies than cosmetic dentistry (Invisalign, veneers, whitening). We create campaigns that attract both patient types based on your practice focus.',
            },
            {
                title: 'Patient Trust & Reviews',
                description: 'Dental anxiety is real. Potential patients heavily research reviews and testimonials before booking. A strong online reputation, video testimonials, and educational content build the trust needed to convert website visitors into appointments.',
            },
            {
                title: 'Local Competition',
                description: 'Multiple dental practices compete in every city. Standing out requires excellent local SEO, Google Business Profile optimization, and compelling differentiation (technology, sedation options, family-friendly, etc.).',
            },
        ],
        services: [
            {
                title: 'Dental SEO',
                description: 'Rank #1 for "dentist near me", "cosmetic dentist [city]", "emergency dental care", and specialty services.',
                features: [
                    'Local SEO for all cities in your service area',
                    'Google Business Profile optimization and review generation',
                    'Service-specific pages (Invisalign, implants, cosmetic dentistry)',
                    'Educational blog content (dental health tips, procedure guides)',
                    'Schema markup for dental practices',
                ],
            },
            {
                title: 'Dental Google Ads & PPC',
                description: 'Generate immediate appointment bookings with targeted PPC campaigns for high-value services.',
                features: [
                    'Emergency dental campaigns for immediate appointments',
                    'Cosmetic dentistry ads (Invisalign, veneers, whitening)',
                    'New patient offers and promotions',
                    'Remarketing to website visitors who didn\'t book',
                    'Call and form tracking for ROI measurement',
                ],
            },
            {
                title: 'Dental Social Media Marketing',
                description: 'Build brand awareness and showcase your practice culture, technology, and patient results.',
                features: [
                    'Before/after photos (with patient consent)',
                    'Educational content about dental procedures',
                    'Team introductions and office tour videos',
                    'Patient testimonials and success stories',
                ],
            },
            {
                title: 'Dental Practice Branding',
                description: 'Differentiate your practice with professional branding that builds trust and attracts ideal patients.',
                features: [
                    'Professional website design optimized for conversions',
                    'Online appointment booking systems',
                    'Patient education resources and videos',
                    'Email marketing for appointment reminders and recalls',
                ],
            },
        ],
        caseStudy: {
            stat1: { value: '193%', label: 'Increase in New Patient Calls' },
            stat2: { value: '67%', label: 'More Cosmetic Consultations' },
            stat3: { value: '5.1x', label: 'Return on Ad Spend' },
            challenge: 'A family dental practice wanted to grow beyond insurance-only patients and attract more high-value cosmetic dentistry cases. Their website wasn\'t converting visitors, and they had minimal online reviews.',
            strategy: 'We implemented a dual-focused strategy: local SEO for general dentistry and targeted PPC for cosmetic services. We also launched a review generation campaign and created educational content about Invisalign and veneers.',
            results: 'Within 9 months, new patient calls increased 193%, cosmetic consultations increased 67%, and the practice achieved a 5.1x return on ad spend. They expanded to a second location within 18 months.',
        },
    },
    law: {
        slug: 'law-firm-marketing',
        name: 'Law Firm',
        title: 'Law Firm Marketing That Wins More Cases',
        description: 'Generate high-quality legal leads for your law firm with proven attorney marketing strategies',
        heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1080&fit=crop',
        keywords: ['law firm marketing', 'attorney SEO', 'legal marketing services', 'lawyer lead generation'],
        challenges: [
            {
                title: 'Extremely Competitive Keywords',
                description: 'Legal keywords are among the most expensive in Google Ads. "Personal injury lawyer" can exceed $100+ per click in major markets. You need exceptional SEO and conversion optimization to compete profitably.',
            },
            {
                title: 'Practice Area Specialization',
                description: 'Different practice areas (personal injury, family law, criminal defense, estate planning) attract different clients with different search patterns. Effective legal marketing requires practice area-specific strategies.',
            },
            {
                title: 'Trust and Credibility',
                description: 'Legal clients are making high-stakes decisions. Your marketing must establish expertise, showcase case results, highlight credentials, and build trust before clients will reach out for consultation.',
            },
            {
                title: 'Bar Association Advertising Rules',
                description: 'Legal advertising is regulated. Your marketing must comply with state bar rules while still being persuasive and results-focused. We ensure all campaigns meet ethical guidelines.',
            },
        ],
        services: [
            {
                title: 'Attorney SEO',
                description: 'Dominate organic search for your practice areas in your target markets.',
                features: [
                    'Practice area-specific SEO (personal injury, family law, etc.)',
                    'Local SEO for multiple office locations',
                    'Legal directory optimization (Avvo, Justia, FindLaw)',
                    'Content marketing (legal guides, FAQ pages)',
                    'Backlink building from legal industry sites',
                ],
            },
            {
                title: 'Legal PPC & LSA',
                description: 'Generate immediate case inquiries with Google Ads and Local Service Ads for attorneys.',
                features: [
                    'Practice area-specific PPC campaigns',
                    'Google Local Service Ads (Google Screened)',
                    'Geographic targeting for your service areas',
                    'Landing page optimization for consultation requests',
                    'Qualified lead filtering and tracking',
                ],
            },
            {
                title: 'Law Firm Content Marketing',
                description: 'Establish thought leadership and attract clients researching legal issues.',
                features: [
                    'Legal blog content and case law analysis',
                    'Practice area guides and resources',
                    'Video content explaining legal processes',
                    'Case results and testimonials (compliant)',
                ],
            },
            {
                title: 'Legal Lead Generation',
                description: 'Convert website visitors into qualified case consultations.',
                features: [
                    'Online case evaluation forms',
                    'Live chat for immediate consultation scheduling',
                    'Email nurture campaigns for potential clients',
                    'CRM integration for intake management',
                ],
            },
        ],
        caseStudy: {
            stat1: { value: '342%', label: 'Increase in Case Inquiries' },
            stat2: { value: '$2.1M', label: 'Additional Annual Revenue' },
            stat3: { value: '8.7x', label: 'Return on Marketing Investment' },
            challenge: 'A personal injury law firm was spending heavily on lead generation services that delivered low-quality leads with poor conversion rates. They wanted to build their own client acquisition channel.',
            strategy: 'We built a comprehensive SEO and content marketing strategy focused on high-intent personal injury keywords, optimized their Google Business Profiles across 3 locations, and launched targeted PPC campaigns for case types with highest settlement values.',
            results: 'Within 14 months, case inquiries increased 342%, lead quality improved dramatically (45% consultation-to-retention rate), and the firm generated an additional $2.1M in annual revenue with 8.7x ROI on marketing investment.',
        },
    },
    realEstate: {
        slug: 'real-estate-marketing',
        name: 'Real Estate',
        title: 'Real Estate Marketing That Sells More Properties',
        description: 'Generate more qualified buyer and seller leads for your real estate business with proven digital marketing strategies',
        heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1080&fit=crop',
        keywords: ['real estate marketing', 'realtor SEO', 'real estate lead generation', 'real estate agent marketing'],
        challenges: [
            {
                title: 'Hyper-Competitive Market',
                description: 'Real estate is one of the most competitive industries online. Every area has dozens of agents competing for the same buyers and sellers. Standing out requires exceptional branding, local SEO dominance, and compelling listing presentations.',
            },
            {
                title: 'Long Sales Cycles',
                description: 'Home buyers research for months before making a purchase. Your marketing must nurture leads over extended periods through email campaigns, market updates, and educational content that keeps you top-of-mind.',
            },
            {
                title: 'Mobile-First Buyers',
                description: 'Over 80% of homebuyers search on mobile devices. Virtual tours, mobile-optimized property pages, and fast-loading websites are essential. Poor mobile experience means lost leads to competitors.',
            },
            {
                title: 'Seller vs Buyer Marketing',
                description: 'Marketing to home sellers requires different strategies than attracting buyers. Sellers want market data and recent sales; buyers want property listings and neighborhood information. Effective real estate marketing addresses both audiences.',
            },
        ],
        services: [
            {
                title: 'Real Estate SEO',
                description: 'Dominate local search for "homes for sale in [city]", "best realtor in [area]", and neighborhood-specific queries.',
                features: [
                    'IDX property listing integration and optimization',
                    'Neighborhood and community landing pages',
                    'Blog content (market reports, buying/selling guides)',
                    'Google Business Profile optimization',
                    'Backlinks from local business directories',
                ],
            },
            {
                title: 'Real Estate PPC & Ads',
                description: 'Generate immediate leads from buyers and sellers ready to transact.',
                features: [
                    'Facebook & Instagram ads with property showcases',
                    'Google Ads for high-intent buyer keywords',
                    'Zillow Premier Agent optimization',
                    'Remarketing campaigns for property viewers',
                    'Lead magnet campaigns (home valuations, buyer guides)',
                ],
            },
            {
                title: 'Real Estate Social Media',
                description: 'Build your personal brand and showcase your listings to potential buyers.',
                features: [
                    'Property listing videos and virtual tours',
                    'Market updates and sold property announcements',
                    'Community spotlights and local events',
                    'Client testimonials and transaction stories',
                ],
            },
            {
                title: 'Real Estate Lead Generation',
                description: 'Convert website visitors into qualified buyer and seller leads.',
                features: [
                    'Home valuation tools for seller lead capture',
                    'Saved search and property alerts for buyers',
                    'Open house promotion and registration',
                    'Email drip campaigns for lead nurturing',
                ],
            },
        ],
        caseStudy: {
            stat1: { value: '412%', label: 'Increase in Website Leads' },
            stat2: { value: '$8.3M', label: 'Closed Volume in 12 Months' },
            stat3: { value: '6.1x', label: 'Return on Marketing Investment' },
            challenge: 'A solo real estate agent wanted to break into the top 5% of agents in their market but couldn\'t compete with large teams\' marketing budgets.',
            strategy: 'We built a hyper-local SEO strategy targeting specific neighborhoods, created neighborhood landing pages with market data, launched targeted Facebook ads for listing promotions, and implemented an automated email nurture system.',
            results: 'Within 12 months, website leads increased 412%, the agent closed $8.3M in volume (up from $2.1M the previous year), and achieved 6.1x ROI on marketing spend.',
        },
    },
    restaurant: {
        slug: 'restaurant-marketing',
        name: 'Restaurant',
        title: 'Restaurant Marketing That Fills Tables',
        description: 'Attract more hungry customers to your restaurant with proven digital marketing strategies',
        heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1080&fit=crop',
        keywords: ['restaurant marketing', 'restaurant SEO', 'restaurant social media marketing', 'restaurant advertising'],
        challenges: [
            {
                title: 'Local Discovery & Map Pack',
                description: 'Most diners search "restaurants near me" or "[cuisine] restaurant in [city]". Ranking in Google\'s Map Pack requires optimized Google Business Profile, consistent NAP, reviews, photos, and local SEO signals.',
            },
            {
                title: 'Online Reviews Make or Break You',
                description: 'Restaurants live and die by reviews. One bad review can cost dozens of customers. Proactive review generation, response management, and reputation monitoring are essential for sustained growth.',
            },
            {
                title: 'Visual Content is Everything',
                description: 'Food must look delicious online. High-quality photos, videos, and virtual tours of your restaurant environment drive engagement and reservations. Poor photography immediately communicates poor quality.',
            },
            {
                title: 'Delivery & Takeout Competition',
                description: 'Third-party delivery apps take 15-30% commissions. Building your own online ordering system and promoting direct ordering through your website and social media protects margins while building customer relationships.',
            },
        ],
        services: [
            {
                title: 'Restaurant SEO',
                description: 'Rank #1 for local food searches and attract more diners organically.',
                features: [
                    'Google Business Profile optimization and management',
                    'Local SEO for restaurant location(s)',
                    'Menu optimization for search engines',
                    'Blog content (chef stories, special events, recipes)',
                    'Citation building in restaurant directories',
                ],
            },
            {
                title: 'Restaurant Social Media',
                description: 'Build a mouth-watering social presence that drives reservations and takeout orders.',
                features: [
                    'Professional food photography and videography',
                    'Instagram and Facebook content calendars',
                    'Influencer partnerships and collaborations',
                    'User-generated content campaigns',
                ],
            },
            {
                title: 'Restaurant Advertising',
                description: 'Drive immediate table reservations and online orders with targeted ads.',
                features: [
                    'Facebook & Instagram ads with food visuals',
                    'Google Ads for high-intent local searches',
                    'Retargeting campaigns for website visitors',
                    'Special event and promotion campaigns',
                ],
            },
            {
                title: 'Online Ordering & Loyalty',
                description: 'Build direct customer relationships and reduce third-party app dependence.',
                features: [
                    'Online ordering system integration',
                    'Email marketing for promotions and events',
                    'Loyalty program implementation',
                    'SMS marketing for special offers',
                ],
            },
        ],
        caseStudy: {
            stat1: { value: '187%', label: 'Increase in Reservations' },
            stat2: { value: '94%', label: 'More Online Orders' },
            stat3: { value: '$127K', label: 'Added Monthly Revenue' },
            challenge: 'A farm-to-table restaurant was struggling to compete with chain restaurants in their area. They had amazing food but minimal online presence and relied heavily on expensive delivery apps.',
            strategy: 'We implemented comprehensive restaurant marketing: Google Business optimization, professional food photography, Instagram content strategy, online ordering system, and email marketing to build a direct customer base.',
            results: 'Within 8 months, reservations increased 187%, direct online orders increased 94% (reducing delivery app dependence), and the restaurant added $127K in monthly revenue.',
        },
    },
    healthcare: {
        slug: 'healthcare-marketing',
        name: 'Healthcare',
        title: 'Healthcare Marketing That Attracts More Patients',
        description: 'HIPAA-compliant digital marketing strategies that generate qualified patient leads for healthcare providers',
        heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080&fit=crop',
        keywords: ['healthcare marketing', 'medical practice marketing', 'healthcare SEO', 'HIPAA compliant marketing'],
        challenges: [
            {
                title: 'HIPAA Compliance Requirements',
                description: 'Healthcare marketing must comply with HIPAA regulations. This affects email marketing, form submissions, patient testimonials, and data tracking. We ensure all campaigns maintain patient privacy and regulatory compliance.',
            },
            {
                title: 'Building Patient Trust',
                description: 'Patients research healthcare providers extensively before booking appointments. Credentials, patient reviews, educational content, and transparent communication build the trust needed to convert website visitors into patients.',
            },
            {
                title: 'Insurance vs Self-Pay Services',
                description: 'Different marketing strategies are needed for insurance-covered services versus elective/cash-pay procedures. We create segmented campaigns that attract both patient types based on your practice focus.',
            },
            {
                title: 'Specialty-Specific Strategies',
                description: 'Marketing for primary care differs from orthopedics, cardiology, or urgent care. Each specialty requires unique keyword strategies, content approaches, and conversion funnels tailored to patient search behavior.',
            },
        ],
        services: [
            {
                title: 'Healthcare SEO',
                description: 'Rank #1 for healthcare searches and attract more qualified patients.',
                features: [
                    'Local SEO for medical practice locations',
                    'Specialty-specific SEO strategies',
                    'Google Business Profile management',
                    'Medical directory optimization (Healthgrades, Vitals, Zocdoc)',
                    'Educational blog content (HIPAA-compliant)',
                ],
            },
            {
                title: 'Medical Practice PPC',
                description: 'Generate immediate patient appointments with compliant advertising campaigns.',
                features: [
                    'Google Ads for high-intent healthcare searches',
                    'Service-specific landing pages',
                    'Geographic targeting for service areas',
                    'HIPAA-compliant conversion tracking',
                    'ROI measurement and optimization',
                ],
            },
            {
                title: 'Healthcare Content Marketing',
                description: 'Establish medical expertise and educate patients.',
                features: [
                    'Patient education resources',
                    'Provider credentials and bio pages',
                    'Video content (procedure explanations, patient testimonials)',
                    'Email newsletters (HIPAA-compliant)',
                ],
            },
            {
                title: 'Patient Acquisition & Retention',
                description: 'Convert website visitors and retain existing patients.',
                features: [
                    'Online appointment scheduling integration',
                    'Patient portal promotion',
                    'Review generation (HIPAA-compliant)',
                    'Automated appointment reminders',
                ],
            },
        ],
        caseStudy: {
            stat1: { value: '228%', label: 'Increase in New Patient Appointments' },
            stat2: { value: '91%', label: 'Growth in Elective Procedures' },
            stat3: { value: '7.3x', label: 'Return on Marketing Investment' },
            challenge: 'A multi-specialty medical clinic wanted to grow their patient base while reducing dependence on insurance referrals. They needed compliant marketing that attracted both insurance and cash-pay patients.',
            strategy: 'We implemented HIPAA-compliant healthcare marketing including local SEO for all specialties, targeted PPC for elective procedures, educational content marketing, and review generation campaigns across medical directories.',
            results: 'Within 11 months, new patient appointments increased 228%, elective procedures grew 91%, and the practice achieved 7.3x ROI while maintaining full HIPAA compliance.',
        },
    },
    homeServices: {
        slug: 'home-services-marketing',
        name: 'Home Services',
        title: 'Home Services Marketing That Keeps You Booked',
        description: 'Generate consistent leads for your plumbing, electrical, landscaping, or home improvement business',
        heroImage: 'https://images.unsplash.com/photo-1581578731248-0d0f6e4faa8c?w=1080&fit=crop',
        keywords: ['home services marketing', 'plumber marketing', 'contractor SEO', 'home improvement marketing'],
        challenges: [
            {
                title: 'Emergency vs Scheduled Services',
                description: 'Some customers need emergency plumber NOW, others plan landscaping for next month. Your marketing must capture both immediate service calls and nurture longer-term projects with different messaging and urgency levels.',
            },
            {
                title: 'Seasonal Service Demands',
                description: 'Many home services are seasonal (landscaping in spring, snow removal in winter, pool maintenance in summer). Marketing budgets and strategies must adjust to maximize ROI during peak demand periods.',
            },
            {
                title: 'High CPC in Local Markets',
                description: 'Home service keywords like "emergency plumber" or "roof repair" cost $15-60+ per click. Combining SEO, Local Service Ads, and reputation marketing reduces dependence on expensive PPC.',
            },
            {
                title: 'Trust and Credibility Barriers',
                description: 'Homeowners are inviting you into their homes. Reviews, credentials (licensed/insured), before/after photos, and transparent pricing build the trust needed to convert website visitors into service calls.',
            },
        ],
        services: [
            {
                title: 'Home Services SEO',
                description: 'Rank #1 for local home service searches and fill your calendar organically.',
                features: [
                    'Local SEO for all service area cities',
                    'Service-specific landing pages',
                    'Google Business Profile optimization',
                    'Review generation and reputation management',
                    'Blog content (seasonal tips, DIY vs professional guides)',
                ],
            },
            {
                title: 'Local Service Ads (LSA)',
                description: 'Get Google Screened and appear at the top of search results.',
                features: [
                    'Google Local Service Ads setup and management',
                    'Background check and licensing verification',
                    'Pay-per-lead bidding optimization',
                    'Dispute management for invalid leads',
                    'Performance tracking and ROI reporting',
                ],
            },
            {
                title: 'Home Services PPC',
                description: 'Generate immediate service calls with targeted advertising.',
                features: [
                    'Emergency service campaigns',
                    'Seasonal service promotions',
                    'Geographic targeting for service areas',
                    'Call tracking and lead attribution',
                    'Landing page conversion optimization',
                ],
            },
            {
                title: 'Home Services Marketing',
                description: 'Build brand awareness and customer loyalty.',
                features: [
                    'Social media content (before/after photos, project highlights)',
                    'Email marketing for seasonal promotions',
                    'Maintenance reminder campaigns',
                    'Customer referral programs',
                ],
            },
        ],
        caseStudy: {
            stat1: { value: '319%', label: 'Increase in Service Calls' },
            stat2: { value: '$487K', label: 'Additional Annual Revenue' },
            stat3: { value: '9.2x', label: 'Return on Ad Spend' },
            challenge: 'A plumbing and HVAC company was over-reliant on expensive lead generation services that delivered inconsistent quality. They wanted to build owned marketing channels.',
            strategy: 'We built comprehensive home services marketing: local SEO for 8 service area cities, Google Local Service Ads, seasonal PPC campaigns, review generation, and email marketing for existing customer base.',
            results: 'Within 10 months, service calls increased 319%, the company generated an additional $487K in annual revenue, achieved 9.2x ROAS, and reduced lead generation costs by 64%.',
        },
    },
};
