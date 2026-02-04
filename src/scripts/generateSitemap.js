const fs = require('fs');
const path = require('path');

const baseUrl = 'https://thinkments.com';
const currentDate = new Date().toISOString();

// Core pages with priority
const corePages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/our-story', changefreq: 'monthly', priority: 0.7 },
    { url: '/services', changefreq: 'weekly', priority: 0.9 },
    { url: '/web-design', changefreq: 'weekly', priority: 0.9 },
    { url: '/digital-marketing', changefreq: 'weekly', priority: 0.9 },
    { url: '/strategic-seo', changefreq: 'weekly', priority: 0.9 },
    { url: '/marketing-seo', changefreq: 'weekly', priority: 0.9 },
    { url: '/virtual-tours', changefreq: 'weekly', priority: 0.8 },
    { url: '/videography', changefreq: 'weekly', priority: 0.8 },
    { url: '/social-media', changefreq: 'weekly', priority: 0.8 },
    { url: '/paid-advertising', changefreq: 'weekly', priority: 0.8 },
    { url: '/artificial-intelligence-optimization', changefreq: 'weekly', priority: 0.8 },
    { url: '/case-studies', changefreq: 'weekly', priority: 0.8 },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.7 },
    { url: '/testimonials', changefreq: 'monthly', priority: 0.7 },
    { url: '/team', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog', changefreq: 'daily', priority: 0.8 },
    { url: '/industries', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/free-consultation', changefreq: 'weekly', priority: 0.9 },
    { url: '/get-a-quote', changefreq: 'weekly', priority: 0.9 },
    { url: '/locations', changefreq: 'monthly', priority: 0.7 },
    { url: '/local-seo', changefreq: 'weekly', priority: 0.8 },
];

// NEW INDUSTRY PAGES - CRITICAL FOR SEO
const industryPages = [
    '/industries/hvac-marketing',
    '/industries/dental-marketing',
    '/industries/law-firm-marketing',
    '/industries/real-estate-marketing',
    '/industries/restaurant-marketing',
    '/industries/healthcare-marketing',
    '/industries/home-services-marketing',
].map(url => ({ url, changefreq: 'weekly', priority: 0.9 }));

// Texas Location Pages (PRIMARY SERVICE AREA - DECATUR, TX)
const texasLocations = [
    'decatur',
    'fort-worth',
    'dallas',
    'denton',
    'north-texas',
    'alvord',
    'boyd',
    'bridgeport',
    'bowie',
    'azle',
    'rhome',
    'paradise',
    'aurora',
    'haslet',
].map(location => ({
    url: `/locations/${location}`,
    changefreq: 'monthly',
    priority: location === 'decatur' ? 0.9 : 0.7,
}));

// Service detail pages
const servicePages = [
    '/web-development',
    '/google-business-profile',
    '/immersive-experiences',
    '/video-photography',
    '/recruitment-marketing',
    '/business-solutions',
    '/reputation-management',
    '/analytics-reporting',
    '/content-marketing',
    '/technical-services',
    '/widgets-integrations',
    '/strategic-consulting',
].map(url => ({ url, changefreq: 'weekly', priority: 0.8 }));

// Legal pages (low priority, but indexable)
const legalPages = [
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
    { url: '/design-transfer-agreement', changefreq: 'yearly', priority: 0.3 },
    { url: '/accessibility', changefreq: 'yearly', priority: 0.3 },
];

// Combine all pages
const allPages = [
    ...corePages,
    ...industryPages,
    ...texasLocations,
    ...servicePages,
    ...legalPages,
];

// Generate sitemap XML
const generateSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    allPages.forEach((page) => {
        xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

    xml += `</urlset>`;

    return xml;
};

// Write sitemap to file
const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '../..', 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Location: ${sitemapPath}`);
console.log(`🌐 Total URLs: ${allPages.length}`);
console.log(`   - Core pages: ${corePages.length}`);
console.log(`   - Industry pages: ${industryPages.length}`);
console.log(`   - Texas locations: ${texasLocations.length}`);
console.log(`   - Service pages: ${servicePages.length}`);
console.log(`   - Legal pages: ${legalPages.length}`);
console.log(`\n🎯 PRIMARY SERVICE AREA: Decatur, Texas`);
console.log(`📅 Last modified: ${currentDate}`);
