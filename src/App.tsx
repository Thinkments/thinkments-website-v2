import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
import SEOPreloader from './components/SEOPreloader';
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Route Configurations
import { LOCATION_ROUTES, SERVICE_ROUTES, REDIRECT_ROUTES } from './config/routes';

// Lazy Loaded Page Components
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const OurStoryPage = lazy(() => import('./components/pages/OurStoryPage'));
const ServicesHubPage = lazy(() => import('./components/pages/ServicesHubPage'));
const ServiceDetailPage = lazy(() => import('./components/pages/ServiceDetailPage'));
const WebDesignPage = lazy(() => import('./components/pages/WebDesignPage'));
const VirtualToursPage = lazy(() => import('./components/pages/VirtualToursPage'));
const DigitalMarketingPage = lazy(() => import('./components/pages/DigitalMarketingPage'));
const VideographyPage = lazy(() => import('./components/pages/VideographyPage'));
const StrategicSEOPage = lazy(() => import('./components/pages/StrategicSEOPage'));
const MarketingSEOPage = lazy(() => import('./components/pages/MarketingSEOPage'));
const PaidAdvertisingPage = lazy(() => import('./components/pages/PaidAdvertisingPage'));
const WebDevelopmentPage = lazy(() => import('./components/pages/WebDevelopmentPage'));
const GoogleBusinessProfilePage = lazy(() => import('./components/pages/GoogleBusinessProfilePage'));
const ImmersiveExperiencesPage = lazy(() => import('./components/pages/ImmersiveExperiencesPage'));
const VideoPhotographyPage = lazy(() => import('./components/pages/VideoPhotographyPage'));
const SocialMediaPage = lazy(() => import('./components/pages/SocialMediaPage'));
const AIAutomationPage = lazy(() => import('./components/pages/AIAutomationPage'));
const RecruitmentMarketingPage = lazy(() => import('./components/pages/RecruitmentMarketingPage'));
const BusinessSolutionsPage = lazy(() => import('./components/pages/BusinessSolutionsPage'));
const ReputationManagementPage = lazy(() => import('./components/pages/ReputationManagementPage'));
const AnalyticsReportingPage = lazy(() => import('./components/pages/AnalyticsReportingPage'));
const ContentMarketingPage = lazy(() => import('./components/pages/ContentMarketingPage'));
const TechnicalServicesPage = lazy(() => import('./components/pages/TechnicalServicesPage'));
const WidgetsIntegrationsPage = lazy(() => import('./components/pages/WidgetsIntegrationsPage'));
const StrategicConsultingPage = lazy(() => import('./components/pages/StrategicConsultingPage'));
const AIOptimizationPage = lazy(() => import('./components/pages/AIOptimizationPage'));
const DigitalMarketingAreasPage = lazy(() => import('./components/pages/DigitalMarketingAreasPage'));
const LocationMarketingPage = lazy(() => import('./pages/LocationMarketingPage'));
const LocationMarketingServicesPage = lazy(() => import('./pages/LocationMarketingServicesPage'));
const CaseStudiesPage = lazy(() => import('./components/pages/CaseStudiesPage'));
const ChenevertCaseStudyPage = lazy(() => import('./components/pages/ChenevertCaseStudyPage'));
const FoursquareHealthcareCaseStudyPage = lazy(() => import('./components/pages/FoursquareHealthcareCaseStudyPage'));
const DecaturChamberCaseStudyPage = lazy(() => import('./components/pages/DecaturChamberCaseStudyPage'));
const CASACaseStudyPage = lazy(() => import('./components/pages/CASACaseStudyPage'));
const TestimonialsPage = lazy(() => import('./components/pages/TestimonialsPage'));
const PortfolioPage = lazy(() => import('./components/pages/PortfolioPage'));
const TeamPage = lazy(() => import('./components/pages/TeamPage'));
const CareersPage = lazy(() => import('./components/pages/CareersPage'));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));
const BlogPage = lazy(() => import('./components/pages/BlogPage'));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage'));
const QuotePage = lazy(() => import('./components/pages/QuotePage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const FreeConsultationPage = lazy(() => import('./components/pages/FreeConsultationPage'));
const IndustriesPage = lazy(() => import('./components/pages/IndustriesPage'));
const ResourcesPage = lazy(() => import('./components/pages/ResourcesPage'));
const KnowledgeBasePage = lazy(() => import('./components/pages/KnowledgeBasePage'));
const FAQPage = lazy(() => import('./components/pages/FAQPage'));
const StorePage = lazy(() => import('./components/pages/StorePage'));
const ProductPage = lazy(() => import('./components/pages/ProductPage'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./components/pages/TermsOfServicePage'));
const DesignTransferAgreementPage = lazy(() => import('./components/pages/DesignTransferAgreementPage'));
const AccessibilityPage = lazy(() => import('./components/pages/AccessibilityPage'));
const SitemapPage = lazy(() => import('./components/pages/SitemapPage'));
const SitemapXmlPage = lazy(() => import('./components/pages/SitemapXmlPage'));
const SitemapRawXmlPage = lazy(() => import('./components/pages/SitemapRawXmlPage'));
const RobotsPage = lazy(() => import('./components/pages/RobotsPage'));
const RobotsTxtPlain = lazy(() => import('./components/pages/RobotsTxtPlain'));
const RobotsTestPage = lazy(() => import('./components/pages/RobotsTestPage'));
const LlmPage = lazy(() => import('./components/pages/LlmPage'));
const NewAdminDashboard = lazy(() => import('./components/pages/NewAdminDashboard'));
const TestReactCssPage = lazy(() => import('./components/pages/TestReactCssPage'));

// Corrected Lazy Loaded Location Pages
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const LocalSEOPage = lazy(() => import('./pages/LocalSEOPage'));
const ConversionRateOptimizationPage = lazy(() => import('./pages/ConversionRateOptimizationPage'));
const DallasPage = lazy(() => import('./pages/locations/DallasPage'));
const FortWorthPage = lazy(() => import('./pages/locations/FortWorthPage'));
const DentonPage = lazy(() => import('./pages/locations/DentonPage'));
const DecaturPage = lazy(() => import('./pages/locations/DecaturPage'));
const NorthTexasPage = lazy(() => import('./pages/locations/NorthTexasPage'));

// Layout component that conditionally renders Header and Footer
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const noLayoutRoutes = ['/sitemap-xml', '/sitemap.xml', '/sitemap-raw', '/robots-txt', '/llm-txt'];
  const isAdmin = location.pathname.startsWith('/admin');
  const shouldHideLayout = noLayoutRoutes.includes(location.pathname) || isAdmin;

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden m-0 p-0">
      <Header />
      <div className="mt-16"></div> {/* Global spacer for fixed header (h-16) */}
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#1E3A5F] text-white">Loading...</div>}>
      <Routes>
        {/* Homepage and Redirect routes */}
        <Route path="/" element={<HomePage />} />
        {REDIRECT_ROUTES.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}

        {/* About routes */}
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />

        {/* Service routes */}
        <Route path="/services" element={<ServicesHubPage />} />
        {SERVICE_ROUTES.map(({ path, service }) => (
          <Route key={path} path={`/services/${path}`} element={<ServiceDetailPage service={service} />} />
        ))}

        {/* Main service pages */}
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/virtual-tours" element={<VirtualToursPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />

        {/* Specialized service pages */}
        <Route path="/videography" element={<VideographyPage />} />
        <Route path="/strategic-seo" element={<StrategicSEOPage />} />
        <Route path="/marketing-seo" element={<MarketingSEOPage />} />
        <Route path="/paid-advertising" element={<PaidAdvertisingPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/google-business-profile" element={<GoogleBusinessProfilePage />} />
        <Route path="/immersive-experiences" element={<ImmersiveExperiencesPage />} />
        <Route path="/video-photography" element={<VideoPhotographyPage />} />
        <Route path="/social-media" element={<SocialMediaPage />} />
        <Route path="/artificial-intelligence-automation" element={<AIAutomationPage />} />
        <Route path="/recruitment-marketing" element={<RecruitmentMarketingPage />} />
        <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
        <Route path="/reputation-management" element={<ReputationManagementPage />} />
        <Route path="/analytics-reporting" element={<AnalyticsReportingPage />} />
        <Route path="/content-marketing" element={<ContentMarketingPage />} />
        <Route path="/technical-services" element={<TechnicalServicesPage />} />
        <Route path="/widgets-integrations" element={<WidgetsIntegrationsPage />} />
        <Route path="/strategic-consulting" element={<StrategicConsultingPage />} />
        <Route path="/artificial-intelligence-optimization" element={<AIOptimizationPage />} />
        <Route path="/digital-marketing-areas" element={<DigitalMarketingAreasPage />} />
        <Route path="/location-marketing" element={<LocationMarketingServicesPage />} />
        <Route path="/Google-Business-Profile-Managed-Essentials" element={<GoogleBusinessProfilePage />} />

        {/* Location-specific digital marketing pages */}
        {LOCATION_ROUTES.map((loc) => (
          <Route
            key={loc}
            path={`/digital-marketing-${loc}`}
            element={<LocationMarketingPage location={loc} />}
          />
        ))}

        {/* Store routes */}
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/p/:productSlug" element={<ProductPage />} />

        {/* Content routes */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/chenevert" element={<ChenevertCaseStudyPage />} />
        <Route path="/case-studies/foursquare-healthcare" element={<FoursquareHealthcareCaseStudyPage />} />
        <Route path="/case-studies/decatur-chamber" element={<DecaturChamberCaseStudyPage />} />
        <Route path="/case-studies/casa" element={<CASACaseStudyPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/faqs" element={<FAQPage />} />

        {/* Location pages */}
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/local-seo" element={<LocalSEOPage />} />
        <Route path="/conversion-rate-optimization" element={<ConversionRateOptimizationPage />} />
        <Route path="/locations/dallas" element={<DallasPage />} />
        <Route path="/locations/fort-worth" element={<FortWorthPage />} />
        <Route path="/locations/denton" element={<DentonPage />} />
        <Route path="/locations/decatur" element={<DecaturPage />} />
        <Route path="/locations/north-texas" element={<NorthTexasPage />} />

        {/* Contact routes */}
        <Route path="/get-a-quote" element={<QuotePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/free-consultation" element={<FreeConsultationPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />

        {/* Legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/design-transfer-agreement" element={<DesignTransferAgreementPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />

        {/* SEO and Technical pages - extensionless URLs for Figma Make compatibility */}
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/sitemap.xml" element={<SitemapXmlPage />} />
        <Route path="/sitemap-xml" element={<SitemapRawXmlPage />} />
        <Route path="/sitemap-raw" element={<SitemapRawXmlPage />} />
        <Route path="/robots-txt" element={<RobotsTxtPlain />} />
        <Route path="/robots" element={<RobotsPage />} />
        <Route path="/llm-txt" element={<LlmPage />} />

        {/* Admin - Single unified dashboard */}
        <Route path="/admin/*" element={<NewAdminDashboard />} />

        {/* Test Page */}
        <Route path="/test-react-css" element={<TestReactCssPage />} />

        {/* 404 - Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Analytics />
        <SEOPreloader />
        <PerformanceOptimizer />
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}