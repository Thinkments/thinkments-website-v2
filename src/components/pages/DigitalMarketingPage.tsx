import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Search, 
  BarChart3, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Phone,
  ChevronRight,
  Mail,
  FileText,
  Share2,
  DollarSign,
  Award,
  Building,
  Stethoscope,
  Scale,
  Home,
  Utensils,
  Building2,
  ShoppingCart,
  Briefcase,
  Clock,
  Star
} from 'lucide-react';
import SEO from '../SEO';

export default function DigitalMarketingPage() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const industryRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isIndustryInView = useInView(industryRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate search results and attract customers actively looking for your services. Our SEO strategies combine technical optimization, content creation, and authority building to improve your rankings on Google. We focus on keywords that drive real business results—not just traffic. From local SEO for service-area businesses to national campaigns for e-commerce, we develop custom strategies based on your market, competition, and goals. Our clients typically see 50-200% increases in organic traffic within 6-12 months.',
      link: '/marketing-seo'
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Get immediate visibility with strategic paid advertising on Google, Bing, Facebook, Instagram, and LinkedIn. We manage your ad spend like it\'s our own money—focusing on ROI, not just clicks. Our PPC management includes keyword research, ad copywriting, landing page optimization, A/B testing, and detailed reporting. We continuously optimize campaigns to reduce cost-per-click and increase conversion rates. Most clients see positive ROI within the first 30 days.',
      link: '/paid-advertising'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand awareness, engage your audience, and drive leads through strategic social media marketing. We create and manage content for Facebook, Instagram, LinkedIn, Twitter, and TikTok—choosing platforms based on where your customers actually spend time. Our services include content creation, community management, paid social advertising, and influencer outreach. We focus on metrics that matter: engagement, leads, and sales—not just followers.',
      link: '/social-media'
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Attract and convert customers with valuable content that establishes your expertise. We create blog posts, articles, guides, videos, infographics, and downloadable resources that answer your customers\' questions and solve their problems. Great content improves SEO, generates leads, and nurtures prospects through the sales funnel. Our content strategies are built on keyword research and customer insights to ensure every piece serves a purpose.',
      link: '/content-marketing'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with targeted email campaigns. We design, write, and automate email sequences for welcome series, abandoned carts, promotions, newsletters, and re-engagement campaigns. Our email marketing delivers average open rates of 25-35% and click rates of 3-5%—well above industry benchmarks. We also ensure deliverability and compliance with spam regulations.',
      link: '/content-marketing'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and reporting. We track every campaign, channel, and conversion to show exactly what\'s working and what needs improvement. Monthly reports include traffic analysis, conversion tracking, ROI calculations, and actionable recommendations. We use Google Analytics, Google Search Console, call tracking, and custom dashboards to give you complete visibility into your marketing performance.',
      link: '/analytics-reporting'
    }
  ];

  const industries = [
    {
      icon: Stethoscope,
      title: 'Healthcare & Medical Practices',
      description: 'HIPAA-compliant marketing that attracts patients'
    },
    {
      icon: Scale,
      title: 'Legal & Professional Services',
      description: 'Lead generation for attorneys, accountants, and consultants'
    },
    {
      icon: Home,
      title: 'Home Services',
      description: 'Local SEO and PPC for plumbers, HVAC, roofers, and contractors'
    },
    {
      icon: Utensils,
      title: 'Restaurants & Hospitality',
      description: 'Social media, reputation management, and local marketing'
    },
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Agent branding, listing promotion, and lead generation'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Product marketing, shopping campaigns, and conversion optimization'
    },
    {
      icon: Briefcase,
      title: 'B2B Companies',
      description: 'LinkedIn marketing, content strategy, and lead nurturing'
    }
  ];

  const processSteps = [
    {
      title: 'Discovery & Audit',
      timeline: 'Week 1-2',
      description: 'We analyze your current marketing, website, competitors, and market opportunity. This includes a technical SEO audit, content gap analysis, and competitive research.'
    },
    {
      title: 'Strategy Development',
      timeline: 'Week 2-3',
      description: 'Based on our findings, we create a custom digital marketing strategy with clear goals, KPIs, timelines, and budget allocation across channels.'
    },
    {
      title: 'Implementation',
      timeline: 'Week 3-4',
      description: 'We launch campaigns, optimize your website, create content, and set up tracking. You\'ll see activity immediately.'
    },
    {
      title: 'Optimization',
      timeline: 'Ongoing',
      description: 'We continuously monitor performance, test new approaches, and refine campaigns to improve results month over month.'
    },
    {
      title: 'Reporting & Strategy Reviews',
      timeline: 'Monthly',
      description: 'You receive detailed reports showing exactly what we did, what happened, and what we\'re doing next. We meet regularly to review results and adjust strategy.'
    }
  ];

  const faqs = [
    {
      question: 'How much should I budget for digital marketing?',
      answer: 'Most small businesses invest $2,000-$10,000/month depending on goals and competition. We\'ll recommend a budget based on your market opportunity and growth targets.'
    },
    {
      question: 'How long until I see results?',
      answer: 'PPC delivers immediate traffic. SEO typically shows meaningful results in 3-6 months. We set realistic expectations upfront and provide monthly progress reports.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'We offer month-to-month services after an initial 3-month commitment. We earn your business through results, not contracts.'
    },
    {
      question: 'Can you work with my existing website?',
      answer: 'Yes. We optimize what you have or can recommend improvements. We also offer web development if you need a new site.'
    },
    {
      question: 'How do you know if it\'s working?',
      answer: 'We set up comprehensive tracking from day one. You\'ll see exactly how many leads, calls, and sales come from each marketing channel.'
    }
  ];

  const digitalMarketingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Comprehensive digital marketing strategies that drive growth and maximize ROI. From SEO to social media, help businesses dominate their online presence and attract more customers.",
    "provider": {
      "@type": "Organization",
      "name": "ThinkMents",
      "url": "https://thinkments.com"
    },
    "serviceType": "Digital Marketing"
  };

  return (
    <>
      <SEO
        title="Digital Marketing Services | SEO, PPC & Social Media | ThinkMents"
        description="Drive growth with comprehensive digital marketing since 2002. SEO, PPC, social media, content marketing & analytics. 156% avg traffic increase. Serving 31 states."
        url="/digital-marketing"
        type="website"
        structuredData={digitalMarketingStructuredData}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/75"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
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
                <span className="text-white">Digital Marketing</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Digital Marketing Services
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Drive growth and maximize ROI with comprehensive digital marketing strategies. From SEO to social media, we help businesses dominate their online presence and attract more customers.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '156%', label: 'Avg Traffic Increase' },
                  { stat: '3.5x', label: 'Return on Ad Spend' },
                  { stat: '20+ Years', label: 'Experience' },
                  { stat: '31 States', label: 'Clients Served' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#00B4D8] mb-2">
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
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
                >
                  <Link to="/free-consultation">Get Free Marketing Audit</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Introduction Section */}
      <section ref={experienceRef} className="py-16 bg-gradient-to-r from-[#1E3A5F]/5 to-[#00B4D8]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Digital Marketing Experts Since 2002
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ThinkMents has been delivering results-driven digital marketing since 2002—long before "digital marketing" was even a common term. With over two decades of experience, we've helped hundreds of businesses across 31 states grow their online presence, generate qualified leads, and increase revenue. We've seen trends come and go, algorithms change, and platforms rise and fall. This experience means we know what actually works and what's just hype.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section ref={servicesRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Digital Marketing Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to grow your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1E3A5F] text-xl mb-3">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section ref={industryRef} className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Industry Expertise
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in digital marketing for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isIndustryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E3A5F] mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Digital Marketing Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers measurable results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center text-white font-bold text-lg">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-[#1E3A5F] text-xl">
                            {step.title}
                          </h3>
                          <span className="text-sm text-white bg-[#00B4D8] px-3 py-1 rounded-full">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-16 md:py-20 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Clients Achieve
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
              Real results from businesses like yours
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { stat: '156%', label: 'Average increase in organic traffic within 12 months' },
                { stat: '3.5x', label: 'Return on ad spend for PPC campaigns' },
                { stat: '40%', label: 'Reduction in cost-per-lead' },
                { stat: '200%', label: 'Increase in qualified leads' },
                { stat: 'Top 3', label: 'Rankings for primary keywords' },
                { stat: '$50M+', label: 'In trackable revenue generated for clients' }
              ].map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isResultsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-3">
                    {result.stat}
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {result.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-white/90 italic">
              "We've generated over $50 million in trackable revenue for our clients through digital marketing campaigns."
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about digital marketing
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#1E3A5F] text-lg mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isFaqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Need help with a specific aspect of digital marketing?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/web-development" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline">
                Web Development
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/strategic-consulting" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline">
                Strategic Consulting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free digital marketing consultation to discuss your goals and discover how we can help you achieve them.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8">
                <Link to="/free-consultation">Get Free Marketing Audit</Link>
              </Button>
              <div className="flex items-center gap-3 text-white/90">
                <span>Or call</span>
                <a href="tel:9403151023" className="flex items-center gap-2 font-semibold hover:text-[#00B4D8] transition-colors">
                  <Phone className="w-5 h-5" />
                  (940) 315-1023
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>103+ Reviews</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}