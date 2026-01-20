import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
import SEOPreloader from './components/SEOPreloader';
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Page Imports
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import OurStoryPage from './components/pages/OurStoryPage';
import ServicesPage from './components/pages/ServicesPage';
import ServicesHubPage from './components/pages/ServicesHubPage';
import ServiceDetailPage from './components/pages/ServiceDetailPage';
import WebDesignPage from './components/pages/WebDesignPage';
import VirtualToursPage from './components/pages/VirtualToursPage';
import DigitalMarketingPage from './components/pages/DigitalMarketingPage';

import VideographyPage from './components/pages/VideographyPage';
import StrategicSEOPage from './components/pages/StrategicSEOPage';
import MarketingSEOPage from './components/pages/MarketingSEOPage';
import PaidAdvertisingPage from './components/pages/PaidAdvertisingPage';
import WebDevelopmentPage from './components/pages/WebDevelopmentPage';
import GoogleBusinessProfilePage from './components/pages/GoogleBusinessProfilePage';
import ImmersiveExperiencesPage from './components/pages/ImmersiveExperiencesPage';
import VideoPhotographyPage from './components/pages/VideoPhotographyPage';
import SocialMediaPage from './components/pages/SocialMediaPage';
import AIAutomationPage from './components/pages/AIAutomationPage';
import RecruitmentMarketingPage from './components/pages/RecruitmentMarketingPage';
import BusinessSolutionsPage from './components/pages/BusinessSolutionsPage';
import ReputationManagementPage from './components/pages/ReputationManagementPage';
import AnalyticsReportingPage from './components/pages/AnalyticsReportingPage';
import ContentMarketingPage from './components/pages/ContentMarketingPage';
import TechnicalServicesPage from './components/pages/TechnicalServicesPage';
import WidgetsIntegrationsPage from './components/pages/WidgetsIntegrationsPage';
import StrategicConsultingPage from './components/pages/StrategicConsultingPage';
import AIOptimizationPage from './components/pages/AIOptimizationPage';
import DigitalMarketingAreasPage from './components/pages/DigitalMarketingAreasPage';
import LocationMarketingPage from './components/pages/LocationMarketingPage';
import LocationMarketingServicesPage from './components/pages/LocationMarketingServicesPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import ChenevertCaseStudyPage from './components/pages/ChenevertCaseStudyPage';
import FoursquareHealthcareCaseStudyPage from './components/pages/FoursquareHealthcareCaseStudyPage';
import DecaturChamberCaseStudyPage from './components/pages/DecaturChamberCaseStudyPage';
import CASACaseStudyPage from './components/pages/CASACaseStudyPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
import PortfolioPage from './components/pages/PortfolioPage';
import TeamPage from './components/pages/TeamPage';
import CareersPage from './components/pages/CareersPage';
import NotFoundPage from './components/pages/NotFoundPage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import QuotePage from './components/pages/QuotePage';
import ContactPage from './components/pages/ContactPage';
import FreeConsultationPage from './components/pages/FreeConsultationPage';
import IndustriesPage from './components/pages/IndustriesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import KnowledgeBasePage from './components/pages/KnowledgeBasePage';
import FAQPage from './components/pages/FAQPage';
import StorePage from './components/pages/StorePage';
import ProductPage from './components/pages/ProductPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsOfServicePage from './components/pages/TermsOfServicePage';
import DesignTransferAgreementPage from './components/pages/DesignTransferAgreementPage';
import AccessibilityPage from './components/pages/AccessibilityPage';
// Robots and Sitemap routes removed - served as static files
import LlmPage from './components/pages/LlmPage';
import NewAdminDashboard from './components/pages/NewAdminDashboard';

// Location Pages
import LocationsPage from './pages/LocationsPage';
import LocalSEOPage from './pages/LocalSEOPage';
import ConversionRateOptimizationPage from './pages/ConversionRateOptimizationPage';
import DallasPage from './pages/locations/DallasPage';
import FortWorthPage from './pages/locations/FortWorthPage';
import DentonPage from './pages/locations/DentonPage';
import DecaturPage from './pages/locations/DecaturPage';
import NorthTexasPage from './pages/locations/NorthTexasPage';

// Route Configurations
import { LOCATION_ROUTES, SERVICE_ROUTES, REDIRECT_ROUTES } from './config/routes';

// Layout component that conditionally renders Header and Footer
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Routes that should not have Header/Footer (raw XML/text routes and admin pages)
  // Routes that should not have Header/Footer (admin pages)
  const noLayoutRoutes = ['/llm-txt'];
  const isAdmin = location.pathname.startsWith('/admin');
  const shouldHideLayout = noLayoutRoutes.includes(location.pathname) || isAdmin;

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden m-0 p-0">
      <Header />
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<HomePage />} />

      {/* Redirect routes */}
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

      <Route path="/videography" element={<VideographyPage />} />

      {/* Specialized service pages */}
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
      {LOCATION_ROUTES.map(location => (
        <Route
          key={location}
          path={`/digital-marketing-${location}`}
          element={<LocationMarketingPage location={location} />}
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
      <Route path="/llm-txt" element={<LlmPage />} />

      {/* Admin - Single unified dashboard */}
      <Route path="/admin/*" element={<NewAdminDashboard />} />

      {/* 404 - Catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
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