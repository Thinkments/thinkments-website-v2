import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight,
  Heart,
  Home,
  ShoppingBag,
  Briefcase,
  Ticket,
  Monitor,
  Factory,
  Landmark,
  GraduationCap,
  Car,
  Scale,
  DollarSign,
  Utensils,
  Wrench,
  PawPrint,
  Users,
  Building,
  Globe,
  Star,
  Phone,
  CheckCircle,
  Award,
  TrendingUp,
  Camera,
  Play,
  ExternalLink,
  ShoppingCart,
  Stethoscope,
  Network
} from 'lucide-react';
import SEO from '../SEO';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PortfolioItem {
  id: number;
  client: string;
  industry: string;
  location: string;
  description: string;
  category: string;
  results: string[];
  services: string[];
  link: string;
  mockupImage?: string;
  featured?: boolean;
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const virtualToursRef = useRef(null);
  const industryStatsRef = useRef(null);
  const numbersRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isPortfolioInView = useInView(portfolioRef, { once: true });
  const isVirtualToursInView = useInView(virtualToursRef, { once: true });
  const isIndustryStatsInView = useInView(industryStatsRef, { once: true });
  const isNumbersInView = useInView(numbersRef, { once: true });
  const isTestimonialInView = useInView(testimonialRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'retail', label: 'Retail' },
    { id: 'professional', label: 'Professional Services' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'museums', label: 'Museums' },
    { id: 'technology', label: 'Technology' },
    { id: 'home-services', label: 'Home Services' },
    { id: 'senior-living', label: 'Senior Living' },
    { id: 'nonprofit', label: 'Non-Profit' },
    { id: 'restaurants', label: 'Restaurants' },
    { id: 'automotive', label: 'Automotive' },
    { id: 'legal', label: 'Legal' },
    { id: 'financial', label: 'Financial' },
    { id: 'education', label: 'Education' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'virtual-tours', label: 'Virtual Tours' }
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      client: 'FOURSQUARE HEALTHCARE',
      industry: 'Healthcare',
      location: 'Multi-State',
      category: 'healthcare',
      description: 'Comprehensive digital marketing and web presence for senior healthcare provider. Built patient acquisition systems, reputation management, and local SEO across multiple states.',
      results: ['$400M+ Revenue Generated', '5-7 Year Partnership', 'Multi-State Reach'],
      services: ['Website Design', 'SEO', 'Google Business Profile', 'Reputation Management'],
      link: '/case-studies/foursquare-healthcare',
      mockupImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
      featured: true
    },
    {
      id: 2,
      client: 'SENIOR CARE FACILITIES',
      industry: 'Healthcare / Senior Living',
      location: 'Texas',
      category: 'senior-living',
      description: 'Created the first-ever virtual tours for senior living facilities, allowing families to explore care options remotely. Pioneering work in healthcare accessibility.',
      results: ['First of Its Kind', 'Virtual Tour Pioneer', 'Increased Inquiries 200%+'],
      services: ['Virtual Tours', 'Website Design', 'SEO'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop'
    },
    {
      id: 3,
      client: 'READY REAL ESTATE',
      industry: 'Real Estate',
      location: 'National',
      category: 'real-estate',
      description: 'Built the first virtual cloud-based real estate brokerage. Agents operate entirely online with virtual office tours, digital transaction management, and cloud-based operations.',
      results: ['First Cloud Brokerage', '100% Virtual Operations', 'National Platform'],
      services: ['Website Development', 'Virtual Tours', 'Cloud Solutions'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop'
    },
    {
      id: 4,
      client: 'VIRTUAL HOME TOURS',
      industry: 'Real Estate',
      location: 'Texas',
      category: 'real-estate',
      description: 'Created the first-ever virtual real estate home tour in 2008—years before virtual tours became standard. Included AI chatbot and NFC stickers for in-person visitors.',
      results: ['Industry First (2008)', 'AI Chatbot Integration', 'NFC Technology'],
      services: ['Virtual Tours', 'AI Integration', 'NFC Technology'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop'
    },
    {
      id: 5,
      client: "CHENEVERT'S HOME & HARDWARE",
      industry: 'Retail',
      location: 'Louisiana',
      category: 'retail',
      description: 'Complete digital presence for local hardware retailer competing against big box stores. 80+ page website with local SEO strategy that drives foot traffic.',
      results: ['634 Monthly Users', '80+ Page Website', 'Top 3 Local Rankings'],
      services: ['Website Design', 'SEO', 'Google Business Profile', 'Content Marketing'],
      link: '/case-studies/chenevert',
      mockupImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&h=800&fit=crop'
    },
    {
      id: 6,
      client: 'VIRTUAL E-COMMERCE STOREFRONT',
      industry: 'Retail / E-Commerce',
      location: 'Texas',
      category: 'retail',
      description: 'Built in 2012—seven years before COVID made virtual shopping mainstream. Customers walk through a virtual store, click products, watch videos, and purchase directly.',
      results: ['Built in 2012', 'First of Its Kind', 'Full E-Commerce Integration'],
      services: ['Virtual Tours', 'E-Commerce', 'Video Production', 'Custom Development'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop'
    },
    {
      id: 7,
      client: 'AMERICAN AIRLINES CENTER',
      industry: 'Entertainment / Sports',
      location: 'Dallas, TX',
      category: 'entertainment',
      description: "Partnered with Mark Cuban's American Airlines Center to create the first arena seat preview system. Fans see their exact view before purchasing tickets.",
      results: ['Mark Cuban Partnership', 'First Arena Seat Preview', 'Industry Pioneer'],
      services: ['Virtual Tours', 'Custom Development', 'UX Design'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?w=1200&h=800&fit=crop'
    },
    {
      id: 8,
      client: 'RESTAURANT & DINING CLIENTS',
      industry: 'Restaurants',
      location: 'Texas & Beyond',
      category: 'restaurants',
      description: 'Websites, virtual tours, and Google Business Profile optimization for restaurants, cafes, and bars. Designed to showcase ambiance, drive reservations, and boost online orders.',
      results: ['Virtual Tour Integration', 'Online Ordering Setup', 'Review Management'],
      services: ['Website Design', 'Virtual Tours', 'Google Business Profile', 'Photography'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop'
    },
    {
      id: 9,
      client: 'AUTOMOTIVE DEALERSHIPS',
      industry: 'Automotive',
      location: 'Texas',
      category: 'automotive',
      description: 'Websites, virtual showroom tours, and digital marketing for car dealerships and auto service centers. Showcase inventory and build trust before customers visit.',
      results: ['Virtual Showroom Tours', 'Inventory Integration', 'Lead Generation Focus'],
      services: ['Website Design', 'Virtual Tours', 'SEO', 'Google Ads'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=1200&h=800&fit=crop'
    },
    {
      id: 10,
      client: 'LAW FIRMS & ATTORNEYS',
      industry: 'Legal',
      location: 'Various',
      category: 'legal',
      description: 'Professional websites and digital marketing for attorneys and law firms. Focus on establishing authority, building trust, and generating qualified case inquiries.',
      results: ['Authority Building', 'Case Inquiry Generation', 'Professional Credibility'],
      services: ['Website Design', 'SEO', 'Content Marketing', 'Reputation Management'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop'
    },
    {
      id: 11,
      client: 'FINANCIAL ADVISORS & SERVICES',
      industry: 'Financial',
      location: 'Various',
      category: 'financial',
      description: 'Websites and digital presence for financial advisors, accountants, insurance agents, and financial service providers. Designed to build trust and generate qualified leads.',
      results: ['Trust-Building Design', 'Compliance Aware', 'Lead Generation'],
      services: ['Website Design', 'SEO', 'Content Marketing'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop'
    },
    {
      id: 12,
      client: 'BRIDGEPORT VETERANS MUSEUM',
      industry: 'Museum / Cultural',
      location: 'Bridgeport, TX',
      category: 'museums',
      description: 'Created one of the first interactive museum virtual tours, allowing visitors worldwide to explore exhibits honoring military veterans and local history.',
      results: ['First Museum Virtual Tour', 'Global Accessibility', 'Interactive Experience'],
      services: ['Virtual Tours', 'Website Design', 'Content Creation'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1566127444979-b3d2b116c1eb?w=1200&h=800&fit=crop'
    },
    {
      id: 13,
      client: 'EDUCATIONAL INSTITUTIONS',
      industry: 'Education',
      location: 'Texas',
      category: 'education',
      description: 'Websites, virtual campus tours, and digital marketing for schools, training centers, and educational organizations. Help families explore campuses and programs remotely.',
      results: ['Virtual Campus Tours', 'Enrollment Focus', 'Parent Communication'],
      services: ['Website Design', 'Virtual Tours', 'Content Marketing'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop'
    },
    {
      id: 14,
      client: '2020 COMPANIES / VERIZON FIOS',
      industry: 'Telecommunications',
      location: 'National',
      category: 'technology',
      description: "Helped build the infrastructure and digital presence for Verizon FiOS's nationwide rollout. 2020 Companies grew to over $500 million valuation during this partnership.",
      results: ['$500M+ Company Valuation', 'National Rollout', '2004-2008 Partnership'],
      services: ['Digital Strategy', 'Web Development', 'Marketing'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop'
    },
    {
      id: 15,
      client: 'HOME SERVICE PROVIDERS',
      industry: 'Home Services',
      location: 'Texas & Beyond',
      category: 'home-services',
      description: 'Websites, SEO, and Google Business Profile optimization for plumbers, electricians, HVAC, roofers, and other home service professionals. Designed to generate calls and bookings.',
      results: ['Top Local Rankings', 'Call Generation Focus', 'Review Management'],
      services: ['Website Design', 'Local SEO', 'Google Business Profile', 'Reputation Management'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop'
    },
    {
      id: 16,
      client: 'MANUFACTURING COMPANIES',
      industry: 'Manufacturing',
      location: 'Texas',
      category: 'manufacturing',
      description: 'Websites and virtual facility tours for manufacturers and industrial companies. Showcase capabilities, equipment, and processes to potential B2B clients and partners.',
      results: ['Virtual Facility Tours', 'B2B Lead Generation', 'Capability Showcasing'],
      services: ['Website Design', 'Virtual Tours', 'Photography', 'SEO'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=800&fit=crop'
    },
    {
      id: 17,
      client: 'NFC PET TRACKER PROGRAM',
      industry: 'Pet Services / Technology',
      location: 'Texas',
      category: 'professional',
      description: 'Created the first NFC/BLE pet tracker program. Pet owners register their pets, attach smart tags, and lost pets can be scanned by anyone with a smartphone to reunite families.',
      results: ['First of Its Kind', 'NFC Technology', 'Reuniting Families'],
      services: ['Custom Development', 'NFC/BLE Technology', 'Mobile App'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=800&fit=crop'
    },
    {
      id: 18,
      client: 'NON-PROFIT ORGANIZATIONS',
      industry: 'Non-Profit',
      location: 'Various',
      category: 'nonprofit',
      description: 'Affordable websites and digital marketing for non-profits, churches, and community organizations. Special pricing to help organizations that help others.',
      results: ['Special Non-Profit Pricing', 'Donation Integration', 'Community Impact'],
      services: ['Website Design', 'SEO', 'Social Media', 'Email Marketing'],
      link: '#',
      mockupImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Stethoscope, count: '50+' },
    { name: 'Real Estate', icon: Home, count: '200+' },
    { name: 'Retail', icon: ShoppingBag, count: '100+' },
    { name: 'E-Commerce', icon: ShoppingCart, count: '75+' },
    { name: 'Entertainment', icon: Ticket, count: '20+' },
    { name: 'Restaurants', icon: Utensils, count: '80+' },
    { name: 'Automotive', icon: Car, count: '40+' },
    { name: 'Legal', icon: Scale, count: '30+' },
    { name: 'Financial', icon: DollarSign, count: '25+' },
    { name: 'Museums', icon: Landmark, count: '15+' },
    { name: 'Education', icon: GraduationCap, count: '35+' },
    { name: 'Technology', icon: Monitor, count: '60+' },
    { name: 'Home Services', icon: Wrench, count: '90+' },
    { name: 'Manufacturing', icon: Factory, count: '45+' },
    { name: 'Pet Services', icon: PawPrint, count: '10+' },
    { name: 'Non-Profit', icon: Heart, count: '55+' },
    { name: 'Senior Living', icon: Users, count: '30+' },
    { name: 'Professional Services', icon: Briefcase, count: '70+' }
  ];

  const virtualTours = [
    { title: 'Real Estate Virtual Tour', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop' },
    { title: 'Retail Store Virtual Tour', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop' },
    { title: 'Restaurant Virtual Tour', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' },
    { title: 'Office/Commercial Virtual Tour', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
    { title: 'Museum Virtual Tour', image: 'https://images.unsplash.com/photo-1566127444979-b3d2b116c1eb?w=600&h=400&fit=crop' },
    { title: 'Senior Living Virtual Tour', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop' },
    { title: 'Automotive Showroom', image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=600&h=400&fit=crop' },
    { title: 'Manufacturing Facility', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop' }
  ];

  const bigNumbers = [
    { stat: '1,000+', label: 'Projects Completed' },
    { stat: '18', label: 'Industries Served' },
    { stat: '31', label: 'States' },
    { stat: '3', label: 'Countries' },
    { stat: '103', label: '5-Star Google Reviews' },
    { stat: '$500M+', label: 'Client Value Generated' },
    { stat: '20+', label: 'Years of Innovation' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <SEO
        title="Portfolio - 1,000+ Projects Across 18 Industries | ThinkMents"
        description="Explore ThinkMents' portfolio of 1,000+ digital projects across 18 industries in 31 states. See our work in responsive design, virtual tours, and digital marketing."
        url="/portfolio"
        type="website"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Work Speaks For Itself
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              20+ years of building websites, virtual experiences, and digital solutions across 18 industries, 31 states, and 3 countries.
            </p>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { stat: '1,000+', label: 'Projects Completed' },
              { stat: '18', label: 'Industries Served' },
              { stat: '31', label: 'States' },
              { stat: '5.0 ★', label: '103 Google Reviews' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-white/90">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  activeFilter === category.id
                    ? 'bg-white text-[#1E3A5F] shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <section ref={portfolioRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isPortfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Multi-Device Mockup - Removed images */}
                  <div className="relative bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] p-8 md:p-12">
                    <div className="relative h-64 md:h-80 flex items-center justify-center">
                      {/* Placeholder for device mockups - images removed */}
                      <div className="text-white/20 text-center">
                        <Monitor className="w-32 h-32 mx-auto mb-4" />
                        <p className="text-lg">Multi-Device Responsive Design</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                        {item.client}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-[#00B4D8] text-white">{item.industry}</Badge>
                        <Badge variant="outline" className="border-[#1E3A5F] text-[#1E3A5F]">
                          {item.location}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Results Badges */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1E3A5F] mb-3 text-sm">Results:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.results.map((result, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="bg-[#E8F8FC] border-[#00B4D8] text-[#1E3A5F]"
                          >
                            {result}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Services Used */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1E3A5F] mb-3 text-sm">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.services.map((service, idx) => (
                          <span 
                            key={idx}
                            className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button asChild className="w-full bg-[#00B4D8] hover:bg-[#00B4D8]/90">
                      <Link to={item.link} className="flex items-center justify-center gap-2">
                        {item.link.includes('case-studies') ? 'View Case Study' : 'View Project'}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No projects found in this category. Please select a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Virtual Tours Showcase Section */}
      <section ref={virtualToursRef} className="py-20 px-4 bg-[#1E3A5F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVirtualToursInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Virtual Tour Specialists Since 2008
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We pioneered virtual tours before they were mainstream. Over 1,000 projects completed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {virtualTours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVirtualToursInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] h-48 flex items-center justify-center">
                  {/* Virtual tour placeholder - images removed */}
                  <div className="text-white/80 text-center p-4">
                    <Camera className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold text-sm">{tour.title}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00B4D8]/80">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVirtualToursInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[#1E3A5F] hover:bg-gray-100 mb-8"
            >
              <Link to="/services/virtual-tours" className="flex items-center gap-2">
                Explore All Virtual Tours <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-4 text-white">
              <Award className="w-8 h-8 text-[#00B4D8]" />
              <div className="text-left">
                <p className="font-semibold">Google Street View Trusted</p>
                <p className="text-sm text-white/80">Official Google Street View Photographer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Stats Section */}
      <section ref={industryStatsRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustryStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              Results Across 18 Industries
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isIndustryStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[#1E3A5F] text-sm mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-[#00B4D8] font-semibold">{industry.count}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers Section */}
      <section ref={numbersRef} className="py-20 px-4 bg-[#1E3A5F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isNumbersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              By The Numbers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bigNumbers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isNumbersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#00B4D8] mb-3">
                  {item.stat}
                </div>
                <div className="text-white/90 text-lg">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section ref={testimonialRef} className="py-20 px-4 bg-[#E8F8FC]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 italic">
              &quot;Corey and his team at ThinkMents have been awesome business partners. Corey&apos;s knowledge of all things IT is incredible and he is always willing to give me guidance when I need help. They have been instrumental in our training programs and their professionalism is unmatched. Go see them, you won&apos;t regret it.&quot;
            </blockquote>

            <p className="text-lg text-gray-600 mb-6">— Verified Google Review</p>

            <a
              href="https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/data=!4m8!3m7!1s0x864dca0c0e2bc3dd:0x7a05b92ccce310c3!8m2!3d33.2283526!4d-97.5883743!9m1!1b1!16s%2Fg%2F11gf6g0v8y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold transition-colors"
            >
              Read all 103 reviews <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See Your Business Here?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Join the 1,000+ projects across 18 industries who trust ThinkMents to build their digital presence.
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                '31 States Served',
                '3 Countries',
                '103 Five-Star Reviews',
                '20+ Years Experience'
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <p className="font-semibold">{stat}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 min-w-[220px]"
              >
                <Link to="/get-a-quote">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 min-w-[220px]"
              >
                <a href="tel:9403151023" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (940) 315-1023
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Footer */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="font-semibold text-[#1E3A5F]">Google 5.0 (103 Reviews)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#00B4D8]" />
              <span className="font-semibold text-[#1E3A5F]">Grow with Google Partner</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#00B4D8]" />
              <span className="font-semibold text-[#1E3A5F]">20+ Years in Business</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#00B4D8]" />
              <span className="font-semibold text-[#1E3A5F]">Google Street View Trusted</span>
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#00B4D8]" />
              <span className="font-semibold text-[#1E3A5F]">1,000+ Projects Completed</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}