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

// --- Lazy Loaded Page Components ---

// 1. Core Pages (src/components/pages)
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const OurStoryPage = lazy(() => import('./components/pages/OurStoryPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const FreeConsultationPage = lazy(() => import('./components/pages/FreeConsultationPage'));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));
const TestimonialsPage = lazy(() => import('./components/pages/TestimonialsPage'));
const PortfolioPage = lazy(() => import('./components/pages/PortfolioPage'));
const TeamPage = lazy(() => import('./components/pages/TeamPage'));
const CareersPage = lazy(() => import('./components/pages/CareersPage'));
const BlogPage = lazy(() => import('./components/pages/BlogPage'));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage'));
const QuotePage = lazy(() => import('./components/pages/QuotePage'));
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
const NewAdminDashboard = lazy(() => import('./components/pages/NewAdminDashboard'));
const TestReactCssPage = lazy(() => import('./components/pages/TestReactCssPage'));

// 2. Service Pages (src/components/pages)
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
const CaseStudiesPage = lazy(() => import('./components/pages/CaseStudiesPage'));
const ChenevertCaseStudyPage = lazy(() => import('./components/pages/ChenevertCaseStudyPage'));
const FoursquareHealthcareCaseStudyPage = lazy(() => import('./components/pages/FoursquareHealthcareCaseStudyPage'));
const DecaturChamberCaseStudyPage = lazy(() => import('./components/pages/DecaturChamberCaseStudyPage'));
const CASACaseStudyPage = lazy(() => import('./components/pages/CASACaseStudyPage'));

// 3. Location Marketing Pages (src/components/pages) - VERIFIED LOCATION
const LocationMarketingPage = lazy(() => import('./components/pages/LocationMarketingPage'));
const LocationMarketingServicesPage = lazy(() => import('./components/pages/LocationMarketingServicesPage'));

// 4. SEO & Technical Pages (src/components/pages)
const SitemapPage = lazy(() => import('./components/pages/SitemapPage'));
const SitemapXmlPage = lazy(() => import('./components/pages/SitemapXmlPage'));
const SitemapRawXmlPage = lazy(() => import('./components/pages/SitemapRawXmlPage'));
const RobotsPage = lazy(() => import('./components/pages/RobotsPage'));
const RobotsTxtPlain = lazy(() => import('./components/pages/RobotsTxtPlain'));
const RobotsTestPage = lazy(() => import('./components/pages/RobotsTestPage'));
const LlmPage = lazy(() => import('./components/pages/LlmPage'));

// 5. Location Landing Pages (src/pages) - VERIFIED LOCATION
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const LocalSEOPage = lazy(() => import('./pages/LocalSEOPage'));
const ConversionRateOptimizationPage = lazy(() => import('./pages/ConversionRateOptimizationPage'));

// 6. City Specific Pages (src/pages/locations) - VERIFIED LOCATION
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

        {/* ... (rest of the routes remain the same) */}

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