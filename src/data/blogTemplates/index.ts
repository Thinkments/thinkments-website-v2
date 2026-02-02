// Blog Post Template Interfaces
export interface BlogTemplate {
    id: string;
    name: string;
    description: string;
    category: 'ai-seo' | 'b2b-leadgen' | 'content-strategy' | 'industry-vertical' | 'local-seo';
    structure: TemplateSection[];
    seoGuidelines: SEOGuidelines;
    internalLinkingStrategy: string[];
}

export interface TemplateSection {
    heading: string;
    wordCount: number;
    purpose: string;
    keyPoints: string[];
    keywords?: string[];
}

export interface SEOGuidelines {
    titleLength: { min: number; max: number };
    descriptionLength: { min: number; max: number };
    minWordCount: number;
    keywordDensity: { min: number; max: number };
    headingStructure: string[];
    internalLinks: { min: number; max: number };
    externalLinks: { min: number; max: number };
}

// AI & Modern SEO Template
export const aiSeoTemplate: BlogTemplate = {
    id: 'ai-seo-2026',
    name: 'AI & Modern SEO Template',
    description: 'Template for AI-driven SEO topics, generative engine optimization, and future-proofing strategies',
    category: 'ai-seo',
    structure: [
        {
            heading: 'Introduction: The AI Search Revolution',
            wordCount: 200,
            purpose: 'Hook readers with the paradigm shift in search',
            keyPoints: [
                'How AI is changing search behavior',
                'Why traditional SEO tactics are evolving',
                'What this means for businesses in 2026',
            ],
        },
        {
            heading: 'Understanding [KEYWORD TOPIC]',
            wordCount: 300,
            purpose: 'Define the concept and explain why it matters',
            keyPoints: [
                'What is [main keyword]',
                'How it differs from traditional approaches',
                'Statistics and trends',
                'Industry examples',
            ],
        },
        {
            heading: 'How [KEYWORD] Works in 2026',
            wordCount: 400,
            purpose: 'Deep dive into mechanics and methodology',
            keyPoints: [
                'Technical implementation',
                'Platform-specific strategies (ChatGPT, Gemini, Perplexity)',
                'Algorithm considerations',
                'Real-world applications',
            ],
        },
        {
            heading: 'Step-by-Step Strategy for [KEYWORD]',
            wordCount: 500,
            purpose: 'Actionable implementation guide',
            keyPoints: [
                'Step 1: Research and planning',
                'Step 2: Content optimization',
                'Step 3: Technical setup',
                'Step 4: Testing and refinement',
                'Step 5: Monitoring and iteration',
            ],
        },
        {
            heading: 'Common Mistakes to Avoid',
            wordCount: 250,
            purpose: 'Build authority through problem awareness',
            keyPoints: [
                '3-5 common pitfalls',
                'Why they hurt rankings',
                'How to correct them',
            ],
        },
        {
            heading: 'Tools and Resources',
            wordCount: 200,
            purpose: 'Provide value and support implementation',
            keyPoints: [
                'Recommended software/tools',
                'Free resources',
                'Our services (soft CTA)',
            ],
        },
        {
            heading: 'Measuring Success',
            wordCount: 250,
            purpose: 'Define KPIs and success metrics',
            keyPoints: [
                'Key metrics to track',
                'Benchmarks for success',
                'ROI expectations',
                'Timeline for results',
            ],
        },
        {
            heading: 'Conclusion & Next Steps',
            wordCount: 150,
            purpose: 'Summarize and drive action',
            keyPoints: [
                'Recap key takeaways',
                'Immediate action items',
                'Strong CTA for services',
            ],
        },
    ],
    seoGuidelines: {
        titleLength: { min: 50, max: 60 },
        descriptionLength: { min: 140, max: 160 },
        minWordCount: 1800,
        keywordDensity: { min: 0.5, max: 2.0 },
        headingStructure: ['H1', 'H2', 'H2', 'H2', 'H3', 'H2', 'H2', 'H2'],
        internalLinks: { min: 5, max: 10 },
        externalLinks: { min: 2, max: 5 },
    },
    internalLinkingStrategy: [
        '/strategic-seo',
        '/digital-marketing',
        '/artificial-intelligence-optimization',
        '/case-studies',
        '/blog/[related-ai-topic]',
    ],
};

// B2B Lead Generation Template
export const b2bLeadGenTemplate: BlogTemplate = {
    id: 'b2b-leadgen',
    name: 'B2B Lead Generation Template',
    description: 'Template for B2B marketing, lead gen strategies, and conversion optimization topics',
    category: 'b2b-leadgen',
    structure: [
        {
            heading: 'Introduction: The B2B Lead Gen Challenge',
            wordCount: 200,
            purpose: 'Identify with reader pain points',
            keyPoints: [
                'Common B2B lead gen struggles',
                'Why traditional methods fall short',
                'The opportunity in 2026',
            ],
        },
        {
            heading: 'What is [KEYWORD]',
            wordCount: 300,
            purpose: 'Define and contextualize the topic',
            keyPoints: [
                'Definition and scope',
                'Why it matters for B2B companies',
                'ROI potential',
                'Industry benchmarks',
            ],
        },
        {
            heading: 'The Complete [KEYWORD] Strategy',
            wordCount: 600,
            purpose: 'Comprehensive methodology breakdown',
            keyPoints: [
                'Strategy component 1',
                'Strategy component 2',
                'Strategy component 3',
                'How components work together',
                'Timeline and investment required',
            ],
        },
        {
            heading: 'Implementation Checklist',
            wordCount: 400,
            purpose: 'Actionable step-by-step guide',
            keyPoints: [
                'Phase 1: Foundation (what to do)',
                'Phase 2: Execution (how to do it)',
                'Phase 3: Optimization (improving results)',
                'Quick wins vs long-term plays',
            ],
        },
        {
            heading: 'Real-World Examples & Case Studies',
            wordCount: 350,
            purpose: 'Demonstrate proof and build credibility',
            keyPoints: [
                'Case study 1 summary',
                'Case study 2 summary',
                'Key takeaways from successes',
                'Link to full case studies',
            ],
        },
        {
            heading: 'Pricing & ROI Expectations',
            wordCount: 300,
            purpose: 'Address buying concerns directly',
            keyPoints: [
                'Typical investment ranges',
                'Expected ROI timeline',
                'Cost vs value analysis',
                'DIY vs agency comparison',
            ],
        },
        {
            heading: 'Choosing the Right Partner',
            wordCount: 250,
            purpose: 'Position ThinkMents as ideal solution',
            keyPoints: [
                'What to look for in an agency',
                'Red flags to avoid',
                'Why ThinkMents excels',
                'Our unique approach',
            ],
        },
        {
            heading: 'Get Started Today',
            wordCount: 150,
            purpose: 'Strong conversion-focused CTA',
            keyPoints: [
                'Summary of benefits',
                'Next step options',
                'Clear CTA (consultation/quote)',
            ],
        },
    ],
    seoGuidelines: {
        titleLength: { min: 50, max: 60 },
        descriptionLength: { min: 140, max: 160 },
        minWordCount: 2000,
        keywordDensity: { min: 0.5, max: 2.0 },
        headingStructure: ['H1', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        internalLinks: { min: 6, max: 12 },
        externalLinks: { min: 1, max: 3 },
    },
    internalLinkingStrategy: [
        '/digital-marketing',
        '/strategic-seo',
        '/case-studies',
        '/get-a-quote',
        '/contact-us',
        '/blog/[related-b2b-topic]',
    ],
};

// Content Strategy Template
export const contentStrategyTemplate: BlogTemplate = {
    id: 'content-strategy',
    name: 'Content & Social Media Strategy Template',
    description: 'Template for content marketing, social media, and thought leadership topics',
    category: 'content-strategy',
    structure: [
        {
            heading: 'Introduction: Content Marketing in 2026',
            wordCount: 200,
            purpose: 'Set context for modern content marketing',
            keyPoints: [
                'Evolution of content marketing',
                'Why [keyword] matters now',
                'Who this guide is for',
            ],
        },
        {
            heading: 'The [KEYWORD] Framework',
            wordCount: 400,
            purpose: 'Introduce systematic approach',
            keyPoints: [
                'Framework overview',
                'Core principles',
                'Why it works',
                'Supporting data/research',
            ],
        },
        {
            heading: 'Building Your [KEYWORD] Strategy',
            wordCount: 500,
            purpose: 'Detailed strategy development',
            keyPoints: [
                'Audience research and personas',
                'Content planning and ideation',
                'Channel selection',
                'Content calendar development',
                'Resource allocation',
            ],
        },
        {
            heading: 'Content Creation Best Practices',
            wordCount: 400,
            purpose: 'Tactical execution guidance',
            keyPoints: [
                'Writing for different platforms',
                'Visual content guidelines',
                'Video content tips',
                'Repurposing strategies',
            ],
        },
        {
            heading: 'Distribution & Amplification',
            wordCount: 300,
            purpose: 'Maximize content reach',
            keyPoints: [
                'Organic distribution tactics',
                'Paid amplification strategies',
                'Influencer partnerships',
                'Community building',
            ],
        },
        {
            heading: 'Measuring ROI',
            wordCount: 350,
            purpose: 'Demonstrate value and accountability',
            keyPoints: [
                'Key metrics by channel',
                'Attribution models',
                'Tools for measurement',
                'Reporting frameworks',
            ],
        },
        {
            heading: 'Common Pitfalls',
            wordCount: 200,
            purpose: 'Learn from mistakes',
            keyPoints: [
                'Mistake 1 and solution',
                'Mistake 2 and solution',
                'Mistake 3 and solution',
            ],
        },
        {
            heading: 'Your Action Plan',
            wordCount: 200,
            purpose: 'Drive implementation and conversion',
            keyPoints: [
                '30-day quick start',
                '90-day growth plan',
                'When to get help (CTA)',
            ],
        },
    ],
    seoGuidelines: {
        titleLength: { min: 50, max: 60 },
        descriptionLength: { min: 140, max: 160 },
        minWordCount: 1800,
        keywordDensity: { min: 0.5, max: 2.0 },
        headingStructure: ['H1', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        internalLinks: { min: 5, max: 10 },
        externalLinks: { min: 2, max: 4 },
    },
    internalLinkingStrategy: [
        '/social-media',
        '/digital-marketing',
        '/videography',
        '/case-studies',
        '/blog/[related-content-topic]',
    ],
};

// Industry Vertical Template
export const industryVerticalTemplate: BlogTemplate = {
    id: 'industry-vertical',
    name: 'Industry-Specific Marketing Template',
    description: 'Template for industry-specific marketing topics (HVAC, dental, legal, etc.)',
    category: 'industry-vertical',
    structure: [
        {
            heading: 'Introduction: Marketing Challenges for [INDUSTRY]',
            wordCount: 250,
            purpose: 'Show industry expertise and understanding',
            keyPoints: [
                'Unique challenges in this industry',
                'Why general marketing fails',
                'What success looks like',
            ],
        },
        {
            heading: 'Understanding [INDUSTRY] Customers',
            wordCount: 350,
            purpose: 'Demonstrate customer insight',
            keyPoints: [
                'Customer demographics',
                'Buying journey specifics',
                'Decision-making factors',
                'Pain points and motivations',
            ],
        },
        {
            heading: '[KEYWORD] for [INDUSTRY]: Complete Guide',
            wordCount: 600,
            purpose: 'Industry-specific strategy breakdown',
            keyPoints: [
                'Strategy element 1 (SEO/PPC/Social)',
                'Strategy element 2',
                'Strategy element 3',
                'How strategies integrate',
                'Industry-specific tactics',
            ],
        },
        {
            heading: 'Success Stories',
            wordCount: 400,
            purpose: 'Build trust with proof',
            keyPoints: [
                'Case study 1 (results)',
                'Case study 2 (results)',
                'Common success patterns',
                'What made them work',
            ],
        },
        {
            heading: 'Implementation Roadmap',
            wordCount: 400,
            purpose: 'Actionable steps',
            keyPoints: [
                'Month 1: Foundation',
                'Month 2-3: Growth',
                'Month 4-6: Scale',
                'Quick wins to start',
            ],
        },
        {
            heading: 'Industry-Specific Tools & Resources',
            wordCount: 250,
            purpose: 'Provide value',
            keyPoints: [
                'Recommended platforms',
                'Industry associations',
                'Compliance considerations',
                'Best practices resources',
            ],
        },
        {
            heading: 'ROI & Expectations',
            wordCount: 300,
            purpose: 'Set realistic expectations',
            keyPoints: [
                'Typical investment for [industry]',
                'Timeline to results',
                'Expected ROI ranges',
                'Industry benchmarks',
            ],
        },
        {
            heading: 'Why Partner with ThinkMents',
            wordCount: 200,
            purpose: 'Conversion-focused close',
            keyPoints: [
                'Our [industry] expertise',
                'Specialized approach',
                'Results we deliver',
                'Get started (CTA)',
            ],
        },
    ],
    seoGuidelines: {
        titleLength: { min: 50, max: 60 },
        descriptionLength: { min: 140, max: 160 },
        minWordCount: 2000,
        keywordDensity: { min: 0.5, max: 2.0 },
        headingStructure: ['H1', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        internalLinks: { min: 5, max: 8 },
        externalLinks: { min: 1, max: 3 },
    },
    internalLinkingStrategy: [
        '/industries/[specific-industry]',
        '/digital-marketing',
        '/strategic-seo',
        '/case-studies',
        '/get-a-quote',
    ],
};

// Export all templates
export const blogTemplates = {
    'ai-seo': aiSeoTemplate,
    'b2b-leadgen': b2bLeadGenTemplate,
    'content-strategy': contentStrategyTemplate,
    'industry-vertical': industryVerticalTemplate,
};

// Helper function to get template by ID
export function getTemplateById(id: string): BlogTemplate | undefined {
    return Object.values(blogTemplates).find((template) => template.id === id);
}

// Helper function to get templates by category
export function getTemplatesByCategory(
    category: BlogTemplate['category']
): BlogTemplate[] {
    return Object.values(blogTemplates).filter((template) => template.category === category);
}
