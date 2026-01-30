// Script to fix all lucide-react imports by removing version numbers
const fs = require('fs');
const path = require('path');

const files = [
  '/components/pages/AIOptimizationPage.tsx',
  '/components/pages/AIPodcastProductionPage.tsx',
  '/components/pages/AboutPage.tsx',
  '/components/pages/BlogPage.tsx',
  '/components/pages/BlogPostPage.tsx',
  '/components/pages/CaseStudiesPage.tsx',
  '/components/pages/DesignTransferAgreementPage.tsx',
  '/components/pages/DigitalMarketingAreasPage.tsx',
  '/components/pages/DigitalMarketingPage.tsx',
  '/components/pages/GoogleBusinessProfileEinsteinium.tsx',
  '/components/pages/GoogleBusinessProfileFoundationPage.tsx',
  '/components/pages/GoogleBusinessProfileGrowthEnhancedPage.tsx',
  '/components/pages/GoogleBusinessProfileGrowthPage.tsx',
  '/components/pages/GoogleBusinessProfileProfessionalPage.tsx',
  '/components/pages/HomePage.tsx',
  '/components/pages/LlmPage.tsx',
  '/components/pages/LocationMarketingPage.tsx',
  '/components/pages/OurStoryPage.tsx',
  '/components/pages/PrivacyPolicyPage.tsx',
  '/components/pages/ProductPage.tsx',
  '/components/pages/QuotePage.tsx',
  '/components/pages/RobotsPage.tsx',
  '/components/pages/ServiceDetailPage.tsx',
  '/components/pages/ServicesPage.tsx',
  '/components/pages/SitemapPage.tsx',
  '/components/pages/SitemapXmlPage.tsx',
  '/components/pages/StorePage.tsx',
  '/components/pages/StrategicSEOPage.tsx',
  '/components/pages/VideographyPage.tsx',
  '/components/pages/VirtualToursPage.tsx',
  '/components/pages/WebDesignPage.tsx',
  '/components/pages/quote/ContactForm.tsx',
  '/components/pages/quote/QuoteBenefits.tsx',
  '/components/pages/quote/QuoteFormSteps.tsx',
  '/components/pages/quote/QuoteProgress.tsx',
  '/components/BlogContent.tsx',
  '/components/Breadcrumbs.tsx',
  '/components/ContactForm.tsx',
  '/components/Footer.tsx',
  '/components/Header.tsx',
  '/components/ShareButton.tsx',
  '/components/TableOfContents.tsx',
];

files.forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/from 'lucide-react@0\.487\.0'/g, "from 'lucide-react'");
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
  } catch (err) {
    console.error(`Error fixing ${file}:`, err.message);
  }
});

console.log('All files fixed!');
