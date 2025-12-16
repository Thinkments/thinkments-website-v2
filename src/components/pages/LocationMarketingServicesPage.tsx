import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Phone,
  MapPin,
  Star,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Building2,
  Search,
  Award,
  Zap,
  Users,
  TrendingUp,
  FileText,
  Shield,
  Link2,
  MessageSquare
} from 'lucide-react';
import SEO from '../SEO';

export default function LocationMarketingServicesPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyLocationRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceAreaRef = useRef(null);
  const multiLocationRef = useRef(null);
  const industriesRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyLocationInView = useInView(whyLocationRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isServiceAreaInView = useInView(serviceAreaRef, { once: true });
  const isMultiLocationInView = useInView(multiLocationRef, { once: true });
  const isIndustriesInView = useInView(industriesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Dominate local search results for your service area. Our local SEO strategies optimize your online presence to appear when customers search for your services in specific cities, neighborhoods, or \'near me\' queries. This includes on-page optimization with local keywords, location-specific landing pages, local schema markup, and building local authority through citations, reviews, and community engagement. We track rankings for geo-modified keywords and local pack positions across all your target locations.'
    },
    {
      icon: MapPin,
      title: 'Google Business Profile Optimization',
      description: 'Your Google Business Profile is the cornerstone of location marketing. We optimize every element—categories, descriptions, services, photos, attributes, and more—to maximize visibility in Google\'s Local 3-Pack and Maps. Our ongoing management includes weekly posts, review monitoring and response, Q&A management, and performance tracking. We\'ve helped businesses go from invisible to #1 in their local market through strategic GBP optimization.'
    },
    {
      icon: Building2,
      title: 'Multi-Location Marketing',
      description: 'Managing marketing for multiple locations requires balancing brand consistency with local relevance. We develop location-specific strategies that resonate with each market while maintaining your overall brand identity. This includes individual Google Business Profiles, location-specific landing pages, market-customized content, and location-level performance tracking. Whether you have 2 locations or 200, we scale strategies that work.'
    },
    {
      icon: Target,
      title: 'Geotargeted Advertising',
      description: 'Reach customers in specific locations with precision-targeted advertising. Our geotargeting strategies use radius targeting, zip code targeting, city targeting, and even custom geographic boundaries to ensure your ads reach only relevant audiences. We implement geotargeted campaigns across Google Ads, Facebook, Instagram, and other platforms—maximizing your budget by eliminating wasted spend on audiences outside your service area.'
    },
    {
      icon: FileText,
      title: 'Local Content Marketing',
      description: 'Build local authority with content that resonates with your community. We create location-specific blog posts, local guides, neighborhood spotlights, community event coverage, and locally-relevant resources. This content attracts local search traffic, establishes your business as a community member, and provides shareable material that builds local awareness. Local content also earns backlinks from community organizations and local news sources.'
    },
    {
      icon: Globe,
      title: 'Citation Building & Management',
      description: 'Consistent business information across the web reinforces your local search authority. We build and manage citations on major directories (Yelp, Yellow Pages, BBB), industry-specific directories, and local business listings. We ensure your Name, Address, and Phone (NAP) are identical everywhere, fixing inconsistencies that confuse search engines and customers. Our citation management prevents duplicate listings and keeps information current.'
    },
    {
      icon: MessageSquare,
      title: 'Reputation Management',
      description: 'Online reviews directly impact local search rankings and customer decisions. We implement systematic review generation strategies that encourage satisfied customers to share their experiences on Google, Facebook, Yelp, and industry-specific platforms. We monitor all reviews across platforms, craft professional responses, and help you maintain the stellar reputation that drives local business.'
    },
    {
      icon: Link2,
      title: 'Local Link Building',
      description: 'Build location-specific authority through strategic local link building. We identify opportunities with local chambers of commerce, business associations, community organizations, local news sites, and complementary local businesses. These locally-relevant backlinks strengthen your geographic authority and improve local search rankings. We also pursue local sponsorship and partnership opportunities that generate both links and community goodwill.'
    }
  ];

  const faqs = [
    {
      question: 'How long until I see results from location marketing?',
      answer: 'Google Business Profile optimizations often show impact within 2-4 weeks. Local SEO typically demonstrates meaningful ranking improvements in 2-4 months, with compounding results over 6-12 months.'
    },
    {
      question: 'We serve a large geographic area—can you help?',
      answer: 'Absolutely. We specialize in marketing for businesses serving multiple cities or large service territories. We\'ll create targeted strategies for priority markets and scale as results justify expansion.'
    },
    {
      question: 'Do I need a physical address for local SEO?',
      answer: 'Service-area businesses can rank locally without displaying an address. We optimize for SAB (service-area business) requirements while maximizing your visibility in the areas you serve.'
    },
    {
      question: 'How is location marketing different from regular SEO?',
      answer: 'Location marketing emphasizes geographic relevance—local keywords, Google Business Profile, citations, local links, and proximity signals. It\'s SEO with a hyperlocal focus.'
    },
    {
      question: 'Can you help with just one location?',
      answer: 'Yes! Whether you have one location or one hundred, we tailor strategies to your specific situation and goals.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We help businesses across Texas and in 31 states nationwide with location marketing strategies.'
    }
  ];

  return (
    <>
      <SEO
        title="Location Marketing Services | Local SEO & Multi-Location Strategy | ThinkMents"
        description="Dominate your local market with expert location-based marketing. Local SEO, Google Business Profile optimization, multi-location management, and geotargeted advertising. 20+ years experience."
        url="/location-marketing"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/75"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Location Marketing</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                LOCAL MARKETING EXPERTS
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Location-Based Marketing That Drives Local Customers
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Put your business in front of customers exactly when and where they're searching for your services
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '76%', label: 'Visit Within 24hrs' },
                  { stat: '500%', label: 'Near Me Growth' },
                  { stat: '31', label: 'States Served' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">
                      {item.stat}
                    </div>
                    <div className="text-white/80 text-sm">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
                >
                  <Link to="/free-consultation">Get Free Local Marketing Audit</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
                >
                  <a href="tel:9403151023">
                    <Phone className="mr-2 w-5 h-5" />
                    (940) 315-1023
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white rounded-lg shadow-lg p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed">
                Location-based marketing puts your business in front of customers exactly when and where they're searching for your services. Whether someone is looking for 'plumber near me' on their phone or searching for the best restaurant in a specific neighborhood, location marketing ensures your business appears at the moment of highest intent. <strong>ThinkMents has specialized in local and location-based marketing since 2002—long before smartphones made 'near me' searches a daily occurrence.</strong> With over 20 years of experience helping businesses dominate their local markets, we understand how to leverage location data, local search algorithms, and geographic targeting to drive real customers through your doors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Location Marketing Matters */}
      <section ref={whyLocationRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyLocationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                The Power of Location-Based Marketing
              </h2>
              <p className="text-xl text-gray-600">
                Consumer behavior has fundamentally shifted toward local, mobile search
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">76%</div>
                    <p className="text-gray-700">of people who search for something nearby visit a business within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">28%</div>
                    <p className="text-gray-700">of local searches result in a purchase</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">500%+</div>
                    <p className="text-gray-700">'Near me' searches have increased in recent years</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">61%</div>
                    <p className="text-gray-700">of mobile searchers are more likely to contact a local business with a mobile-friendly site</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">88%</div>
                    <p className="text-gray-700">of consumers trust online reviews as much as personal recommendations</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">50%</div>
                    <p className="text-gray-700">Local searches lead mobile users to visit stores within one day</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-[#F8F9FA] rounded-lg p-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This isn't just about being found—<strong>it's about being found at the exact moment someone is ready to buy.</strong> A person searching 'emergency plumber near me' at 10 PM has immediate intent. A tourist searching 'best tacos downtown' is ready to walk in your door. Location marketing captures these high-intent moments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For service-area businesses, local retailers, restaurants, healthcare providers, and professional services, <strong>location marketing isn't optional—it's essential for survival and growth.</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive Location Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate your local market
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl text-[#1E3A5F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/google-business-profile">
              <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                Learn More About Google Business Profile
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service-Area Businesses */}
      <section ref={serviceAreaRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServiceAreaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <MapPin className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Special Strategies for Service-Area Businesses
              </h2>
              <p className="text-xl text-white/90">
                If your business travels to customers, location marketing requires specialized approaches
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-2xl text-[#00B4D8] mb-3">Service Area Definition</h3>
                <p className="text-white/90 leading-relaxed">
                  We help you define and communicate your service area effectively. This includes setting appropriate service areas in Google Business Profile, creating service area pages on your website, and targeting advertising to your actual coverage zones.
                </p>
              </div>

              <div>
                <h3 className="text-2xl text-[#00B4D8] mb-3">City-Specific Landing Pages</h3>
                <p className="text-white/90 leading-relaxed">
                  For businesses serving multiple cities without physical locations in each, we create optimized landing pages for every city in your service area. Each page targets local keywords, addresses city-specific needs, and includes local trust signals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl text-[#00B4D8] mb-3">'Near Me' Optimization</h3>
                <p className="text-white/90 leading-relaxed">
                  We optimize for the increasingly common 'near me' searches that don't specify a location. This involves mobile optimization, local schema markup, and proximity signals that help you appear when customers search generically.
                </p>
              </div>

              <div>
                <h3 className="text-2xl text-[#00B4D8] mb-3">Service Area Advertising</h3>
                <p className="text-white/90 leading-relaxed">
                  Geotargeted ad campaigns reach customers throughout your service territory. We can target specific cities, radius from your base, or custom-drawn boundaries matching your actual service area.
                </p>
              </div>

              <div className="bg-[#FF6B35] rounded-lg p-6 mt-6">
                <p className="text-white text-lg leading-relaxed">
                  <strong>We understand the unique challenges of marketing a business without a storefront in every location you serve.</strong> Plumbers, HVAC technicians, landscapers, mobile services, home healthcare—we've got you covered.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Multi-Location Businesses */}
      <section ref={multiLocationRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMultiLocationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <Building2 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Scaling Location Marketing Across Multiple Sites
              </h2>
              <p className="text-xl text-gray-600">
                Multi-location businesses face unique challenges
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div>
                <h3 className="text-2xl text-[#1E3A5F] mb-3">Centralized Strategy, Local Execution</h3>
                <p className="text-gray-700 leading-relaxed">
                  We develop overarching strategies that maintain brand standards while allowing location-specific customization. Each market gets attention tailored to its competitive landscape and customer base.
                </p>
              </div>

              <div>
                <h3 className="text-2xl text-[#1E3A5F] mb-3">Bulk GBP Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  Efficiently manage Google Business Profiles across all locations with consistent information, regular posts, and review monitoring. We use enterprise tools to scale what would otherwise require individual attention to each listing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl text-[#1E3A5F] mb-3">Location Performance Dashboards</h3>
                <p className="text-gray-700 leading-relaxed">
                  Track key metrics for every location in unified dashboards. Compare performance across markets, identify underperforming locations, and allocate resources based on data.
                </p>
              </div>

              <div>
                <h3 className="text-2xl text-[#1E3A5F] mb-3">Local Manager Enablement</h3>
                <p className="text-gray-700 leading-relaxed">
                  We can train and support local managers to handle day-to-day marketing tasks while maintaining brand standards and reporting into central systems.
                </p>
              </div>

              <div className="bg-[#F8F9FA] rounded-lg p-6 border-l-4 border-[#00B4D8]">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Whether you're a regional chain or a national franchise, we build scalable location marketing systems that grow with you.</strong> Maintaining brand consistency while adapting to local markets, managing dozens or hundreds of Google Business Profiles, and tracking performance across locations—ThinkMents brings order to multi-location marketing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section ref={industriesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Location Marketing by Industry
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Healthcare & Medical',
                  description: 'Patient acquisition for practices serving defined geographic areas. HIPAA-compliant strategies that drive appointments.'
                },
                {
                  title: 'Home Services',
                  description: 'Service-area optimization for contractors, HVAC, plumbing, electrical, and home improvement businesses.'
                },
                {
                  title: 'Restaurants & Hospitality',
                  description: 'Driving foot traffic through local search, review management, and location-based social media.'
                },
                {
                  title: 'Retail',
                  description: 'Combining online visibility with in-store traffic generation. Local inventory ads and store locator optimization.'
                },
                {
                  title: 'Professional Services',
                  description: 'Building local authority for attorneys, accountants, consultants, and agencies serving geographic markets.'
                },
                {
                  title: 'Real Estate',
                  description: 'Hyperlocal marketing for agents and brokerages targeting specific neighborhoods and communities.'
                },
                {
                  title: 'Automotive',
                  description: 'Dealership and service center marketing reaching customers in defined market areas.'
                }
              ].map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIndustriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-[#1E3A5F] mb-3">{industry.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Location Marketing Process
              </h2>
              <p className="text-xl text-gray-600">
                How we build your location marketing strategy
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1: Local Market Analysis',
                  items: [
                    'Audit current local search presence',
                    'Analyze local competition',
                    'Research location-specific keywords',
                    'Identify market opportunities'
                  ]
                },
                {
                  phase: 'Phase 2: Foundation Building',
                  items: [
                    'Optimize Google Business Profile(s)',
                    'Build/fix citations across directories',
                    'Create location-specific website content',
                    'Implement local schema markup'
                  ]
                },
                {
                  phase: 'Phase 3: Visibility Building',
                  items: [
                    'Execute local SEO strategies',
                    'Launch geotargeted advertising',
                    'Build local backlinks',
                    'Generate reviews systematically'
                  ]
                },
                {
                  phase: 'Phase 4: Ongoing Optimization',
                  items: [
                    'Monitor rankings and visibility',
                    'Track calls, visits, and conversions',
                    'Refine strategies based on data',
                    'Expand into new target areas'
                  ]
                }
              ].map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-2xl text-[#1E3A5F] mb-4">{phase.phase}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-[#FF6B35]">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Monthly reporting shows exactly how location marketing is impacting your business</strong>—local rankings, GBP metrics, leads by location, and ROI.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg text-[#1E3A5F] mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">More questions about location marketing?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/marketing-seo">
                  <Button variant="outline" className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white">
                    Explore SEO Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/reputation-management">
                  <Button variant="outline" className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white">
                    Review Management
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Dominate Your Local Market?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's put your business in front of customers searching in your area right now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Local Marketing Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <a 
                href="tel:9403151023"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">(940) 315-1023</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Local Marketing Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Serving 31 States</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-white/70 mb-4">Related Services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/google-business-profile" className="text-[#00B4D8] hover:text-white transition-colors">
                  Google Business Profile
                </Link>
                <span className="text-white/40">•</span>
                <Link to="/marketing-seo" className="text-[#00B4D8] hover:text-white transition-colors">
                  Marketing & SEO
                </Link>
                <span className="text-white/40">•</span>
                <Link to="/paid-advertising" className="text-[#00B4D8] hover:text-white transition-colors">
                  Paid Advertising
                </Link>
                <span className="text-white/40">•</span>
                <Link to="/reputation-management" className="text-[#00B4D8] hover:text-white transition-colors">
                  Reputation Management
                </Link>
                <span className="text-white/40">•</span>
                <Link to="/digital-marketing-areas" className="text-[#00B4D8] hover:text-white transition-colors">
                  Service Areas
                </Link>
                <span className="text-white/40">•</span>
                <Link to="/case-studies" className="text-[#00B4D8] hover:text-white transition-colors">
                  Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
