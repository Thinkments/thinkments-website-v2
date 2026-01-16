import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { 
  Search,
  Target,
  Megaphone,
  Code,
  MapPin,
  Eye,
  Camera,
  Share2,
  Brain,
  Briefcase,
  Lightbulb,
  Star,
  BarChart3,
  PenTool,
  Wrench,
  Puzzle,
  Compass,
  Phone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import SEO from '../SEO';

export default function ServicesHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const allServicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isAllServicesInView = useInView(allServicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const featuredServices = [
    {
      image: 'https://images.unsplash.com/photo-1634814251396-479adacfc527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzNjAlMjBjYW1lcmElMjB2aXJ0dWFsJTIwdG91cnxlbnwxfHx8fDE3NjU0MDAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'PIONEER SINCE 2008',
      badgeColor: 'bg-[#FF6B35]',
      title: 'Immersive Experiences & Virtual Tours',
      description: 'We created the first virtual real estate tour in North Texas, the first arena seat preview with Mark Cuban, and the first museum tour. From Google Street View to Matterport, we\'re the immersive experts.',
      services: ['Google Street View', '360° Photography', 'Matterport 3D Tours', 'Virtual Storefronts', 'Interactive Tours'],
      link: '/immersive-experiences'
    },
    {
      image: 'https://images.unsplash.com/photo-1744900647430-965ccc7a6078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NDAwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'NEW CAPABILITIES',
      badgeColor: 'bg-[#00B4D8]',
      title: 'AI & Automation',
      description: 'The future of marketing is here. We\'re integrating AI tools like ChatGPT, Claude, and custom solutions to automate reporting, generate content, build chatbots, and optimize for AI search engines.',
      services: ['AI Content Generation', 'Automated Reporting', 'Custom Chatbots', 'AI Search Optimization', 'Workflow Automation'],
      link: '/ai-podcast-production'
    },
    {
      image: 'https://images.unsplash.com/photo-1559989899-f0743fa80152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBidXNpbmVzcyUyMHByb2ZpbGUlMjBtb2JpbGV8ZW58MXx8fHwxNzY1NDAwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'GBP EXPERTS',
      badgeColor: 'bg-[#00B4D8]',
      title: 'Google Business Profile Management',
      description: 'Your GBP is often the first impression customers have. We handle everything from setup and verification to optimization, posting, review management, and suspension recovery.',
      services: ['Setup & Verification', 'Optimization', 'Google Posts', 'Review Management', 'Suspension Recovery'],
      link: '/google-business-profile'
    }
  ];

  const serviceCategories = [
    {
      icon: Target,
      title: 'Marketing & SEO',
      description: 'Local SEO, technical optimization, content marketing, AI search ranking',
      link: '/marketing-seo',
      badge: null
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Google Ads, YouTube, Indeed/Monster, Local Service Ads, retargeting',
      link: '/paid-advertising',
      badge: null
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites, e-commerce, landing pages, maintenance, hosting',
      link: '/web-development',
      badge: null
    },
    {
      icon: MapPin,
      title: 'Google Business Profile',
      description: 'Setup, verification, optimization, posts, review management',
      link: '/google-business-profile',
      badge: null
    },
    {
      icon: Eye,
      title: 'Immersive Experiences',
      description: 'Virtual tours, 360° photography, Matterport, VR consulting',
      link: '/immersive-experiences',
      badge: 'PIONEER'
    },
    {
      icon: Camera,
      title: 'Video & Photography',
      description: 'Commercial video, drone, product photography, brand videos',
      link: '/video-photography',
      badge: null
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Strategy, content creation, management, advertising, analytics',
      link: '/social-media',
      badge: null
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'AI content, chatbots, automated reporting, workflow automation',
      link: '/ai-podcast-production',
      badge: 'NEW'
    },
    {
      icon: Briefcase,
      title: 'Recruitment Marketing',
      description: 'Job board posting, JobCraft AI, workforce planning, HR support',
      link: '/recruitment-marketing',
      badge: null
    },
    {
      icon: Lightbulb,
      title: 'Business Solutions',
      description: 'LLC formation, branding, logo design, Google Workspace, NFC cards',
      link: '/business-solutions',
      badge: null
    },
    {
      icon: Star,
      title: 'Reputation Management',
      description: 'Review monitoring, response management, generation, recovery',
      link: '/reputation-management',
      badge: null
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'GA4, Tag Manager, Search Console, performance reports, ROI analysis',
      link: '/analytics-reporting',
      badge: null
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Blog writing, content strategy, email marketing, AI-assisted content',
      link: '/content-marketing',
      badge: null
    },
    {
      icon: Wrench,
      title: 'Technical Services',
      description: 'Site speed, Core Web Vitals, schema markup, security, mobile optimization',
      link: '/technical-services',
      badge: null
    },
    {
      icon: Puzzle,
      title: 'Widgets & Integrations',
      description: 'Review widgets, chat widgets, booking systems, Zapier integrations',
      link: '/widgets-integrations',
      badge: null
    },
    {
      icon: Compass,
      title: 'Strategic Consulting',
      description: 'Strategic planning, technology consulting, SWOT analysis, advisory',
      link: '/strategic-consulting',
      badge: null
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We learn your business, analyze competitors, and develop a custom strategy.'
    },
    {
      number: '02',
      title: 'Implementation',
      description: 'Our team executes the strategy with precision and attention to detail.'
    },
    {
      number: '03',
      title: 'Optimization',
      description: 'We continuously monitor, test, and improve for maximum results.'
    },
    {
      number: '04',
      title: 'Reporting & Growth',
      description: 'Transparent reporting shows exactly what\'s working and what\'s next.'
    }
  ];

  return (
    <>
      <SEO
        title="Our Services - 100+ Digital Marketing Solutions | ThinkMents"
        description="Explore our 16 service categories and 100+ individual digital marketing services. From SEO to AI automation, virtual tours to web development—we have everything you need."
        url="/services"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-16 md:py-20 bg-[#1E3A5F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <Badge className="mb-6 bg-[#00B4D8] text-white border-none">
              100+ Services Across 16 Categories
            </Badge>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Digital Marketing Solutions That Actually Work
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              From local SEO to AI automation, virtual tours to video production—we have every tool your business needs to dominate online. And we've been perfecting them for over 20 years.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { stat: '16', label: 'Service Categories' },
                { stat: '100+', label: 'Individual Services' },
                { stat: '20+', label: 'Years Experience' },
                { stat: '1,000+', label: 'Projects Delivered' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-5xl font-bold text-[#00B4D8] mb-2">
                    {item.stat}
                  </div>
                  <div className="text-white/80 text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search our services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg bg-white text-gray-900 border-none rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section ref={featuredRef} className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Flagship Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              These are the services that set us apart—our deepest expertise and biggest differentiators.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-lg group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className={`absolute top-4 left-4 ${service.badgeColor} text-white border-none`}>
                      {service.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-[#1E3A5F] mb-2">Services Include:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.services.map((item, i) => (
                          <Badge key={i} variant="outline" className="border-[#00B4D8] text-[#00B4D8]">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold"
                    >
                      <Link to={service.link} className="flex items-center justify-center gap-2">
                        Explore {service.title.split(' ')[0]} Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section ref={allServicesRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAllServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              All Service Categories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Click any category to explore individual services and pricing.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isAllServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link to={category.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-[#1E3A5F] text-lg">
                          {category.title}
                        </h3>
                        {category.badge && (
                          <Badge className={`${
                            category.badge === 'PIONEER' 
                              ? 'bg-[#FF6B35] text-white' 
                              : 'bg-[#00B4D8] text-white'
                          } text-xs border-none`}>
                            {category.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section ref={processRef} className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Process
            </h2>
          </motion.div>

          {/* Desktop: Horizontal */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-[#00B4D8]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Not Sure Where to Start?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Book a free consultation and we'll help you identify the services that will have the biggest impact on your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Schedule Free Consultation</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                <a href="tel:9403151023" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (940) 315-1023
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B4D8]" />
                <span>★★★★★ 5.0 Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <span>103 Reviews</span>
              <span className="text-white/40">|</span>
              <span>20+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}