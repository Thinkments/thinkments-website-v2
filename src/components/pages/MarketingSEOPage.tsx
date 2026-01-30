import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  MapPin,
  FileText,
  PenTool,
  Mail,
  Target,
  Phone,
  Star,
  ChevronRight,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Share2,
  DollarSign,
  Code,
  Link2,
  Award,
  Megaphone,
} from 'lucide-react';
import SEO from '../SEO';

export default function MarketingSEOPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const connectionRef = useRef(null);
  const marketingServicesRef = useRef(null);
  const seoServicesRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isConnectionInView = useInView(connectionRef, { once: true });
  const isMarketingServicesInView = useInView(marketingServicesRef, { once: true });
  const isSeoServicesInView = useInView(seoServicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const marketingServices = [
    {
      icon: Target,
      title: 'Search Engine Optimization (SEO)',
      description:
        'Dominate organic search results and capture customers actively looking for your services. Our SEO services include technical optimization, on-page SEO, content strategy, and link building. We target keywords based on business value—not just search volume—ensuring rankings translate to revenue. From local businesses to national e-commerce, our SEO strategies are customized to your market and competition.',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description:
        'Attract, engage, and convert customers with valuable content. We develop content strategies that establish your expertise, answer customer questions, and rank for target keywords. Our content creation includes blog posts, guides, case studies, videos, and downloadable resources. Every piece serves a strategic purpose in your marketing funnel.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description:
        'Build brand awareness and engage your audience on the platforms where they spend time. We create and manage social media content for Facebook, Instagram, LinkedIn, Twitter, and more. Our social strategies include organic content, paid advertising, community management, and influencer outreach.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description:
        'Nurture leads and retain customers with targeted email campaigns. We design, write, and automate email sequences for lead nurturing, customer onboarding, promotions, and re-engagement. Our email marketing consistently outperforms industry benchmarks for open and click rates.',
    },
    {
      icon: DollarSign,
      title: 'Paid Advertising (PPC)',
      description:
        'Generate immediate visibility with strategic paid advertising on Google, Facebook, Instagram, and LinkedIn. We manage your ad spend efficiently, focusing on ROI rather than vanity metrics. Our PPC management includes keyword research, ad creation, landing page optimization, and continuous improvement.',
    },
    {
      icon: Award,
      title: 'Reputation Management',
      description:
        'Build and protect your online reputation. We implement review generation strategies, monitor mentions across the web, and respond professionally to feedback. A strong reputation improves both conversion rates and search rankings.',
    },
  ];

  const seoServices = [
    {
      icon: Code,
      title: 'Technical SEO',
      description:
        "Your website's technical foundation determines ranking potential. We audit and optimize site speed, mobile usability, crawlability, indexation, site architecture, and Core Web Vitals. Technical issues silently kill rankings—we find and fix them so your content can perform.",
    },
    {
      icon: PenTool,
      title: 'On-Page SEO',
      description:
        'Optimize every page to communicate relevance to search engines. We refine title tags, meta descriptions, headers, content, internal links, images, and schema markup. On-page optimization ensures Google understands what each page is about and ranks it accordingly.',
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description:
        'Capture customers searching in your service area. We optimize Google Business Profiles, build citations, create location-specific content, and earn local backlinks. Local SEO puts you in the Map Pack and local organic results.',
    },
    {
      icon: Link2,
      title: 'Link Building',
      description:
        'Build authority with quality backlinks from relevant websites. Our white-hat link building includes digital PR, content marketing, resource link building, and strategic outreach. We pursue links that drive both rankings and referral traffic.',
    },
  ];

  const faqs = [
    {
      question: 'How much should I budget for marketing and SEO?',
      answer:
        "Most small to mid-sized businesses invest $2,000-$7,500/month for comprehensive marketing and SEO. We'll recommend a budget based on your goals, competition, and growth targets.",
    },
    {
      question: 'How long until I see results?',
      answer:
        'Paid advertising delivers immediate traffic. SEO typically shows meaningful results in 3-6 months, with compounding growth over 12+ months. We set realistic expectations from day one.',
    },
    {
      question: 'Do I need both marketing and SEO?',
      answer:
        "They work best together, but we offer standalone services based on your needs and budget. We'll recommend the right approach for your situation.",
    },
    {
      question: 'What industries do you work with?',
      answer:
        "We've delivered results across healthcare, legal, home services, real estate, restaurants, e-commerce, professional services, and more.",
    },
    {
      question: 'How do you measure success?',
      answer:
        'We track rankings, traffic, leads, conversions, and revenue. Monthly reports show exactly how marketing efforts impact your business.',
    },
    {
      question: 'What makes you different from other agencies?',
      answer:
        '20+ years of experience, integrated marketing and SEO under one roof, transparent reporting, and a track record of proven results. We also answer our phones.',
    },
    {
      question: 'Do you offer one-time projects or only monthly services?',
      answer:
        'We offer both. One-time projects include website audits, SEO strategies, and campaign setup. Ongoing services include full management and optimization.',
    },
  ];

  return (
    <>
      <SEO
        title="Marketing & SEO Services | Integrated Digital Marketing Strategy | ThinkMents"
        description="20+ years delivering integrated marketing and SEO results. From local SEO to content marketing, paid advertising to reputation management. Serving businesses across 31 states."
        url="/marketing-seo"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                <span className="text-white">Marketing & SEO</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                INTEGRATED MARKETING SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Marketing & SEO That Drives Real Growth
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Two sides of the same coin—integrated for maximum impact
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '31', label: 'States Served' },
                  { stat: '5.0', label: 'Google Rating' },
                  { stat: '150-300%', label: 'Avg Traffic Growth' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">{item.stat}</div>
                    <div className="text-white/80 text-sm">{item.label}</div>
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
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] px-8"
                >
                  <Link to="/free-consultation">Get Free Marketing Audit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
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
                Marketing and SEO aren't separate disciplines—they're two sides of the same coin.
                Effective marketing drives awareness and interest, while SEO ensures your business
                is found when customers are ready to buy.{' '}
                <strong>
                  ThinkMents has been integrating marketing and search engine optimization since
                  2002, long before 'digital marketing' was a common term.
                </strong>{' '}
                With over 20 years of experience, we've helped hundreds of businesses across 31
                states attract more customers, generate more leads, and grow revenue through
                strategic marketing and SEO. Our approach combines creative marketing with
                data-driven SEO to deliver results that impact your bottom line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Marketing + SEO Connection */}
      <section ref={connectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isConnectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Megaphone className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why Marketing and SEO Work Better Together
              </h2>
              <p className="text-xl text-gray-600">
                Many agencies treat them as separate—we see them as inseparable
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Great content marketing fuels SEO rankings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      SEO research informs smarter marketing targeting
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Brand awareness improves click-through rates in search results
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Social signals and PR support link building efforts
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Paid advertising data reveals high-converting keywords for SEO
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      SEO traffic insights improve marketing messaging
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed">
                <strong>
                  When marketing and SEO work in silos, you waste budget and miss opportunities.
                  When they work together, results compound.
                </strong>{' '}
                Our integrated approach means your marketing dollars work harder, your SEO efforts
                gain traction faster, and your overall digital presence creates a competitive moat
                that's difficult for competitors to overcome.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Marketing Services */}
      <section ref={marketingServicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMarketingServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Comprehensive Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-spectrum marketing to attract, engage, and convert your ideal customers
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isMarketingServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="text-xl text-[#1E3A5F]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isMarketingServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/paid-advertising">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  Paid Advertising Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/social-media">
                <Button
                  variant="outline"
                  className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8"
                >
                  Social Media Marketing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive SEO Services */}
      <section ref={seoServicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSeoServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of SEO covered to ensure sustainable organic growth
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {seoServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isSeoServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#FF6B35]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="text-xl text-[#1E3A5F]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isSeoServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/strategic-seo">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8">
                  Strategic SEO Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/content-marketing">
                <Button
                  variant="outline"
                  className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8"
                >
                  Content Marketing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section
        ref={processRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <BarChart3 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Marketing & SEO Process
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 1: Discovery & Audit (Weeks 1-2)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Business goals and target audience analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Current marketing and SEO performance audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Competitive landscape research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Keyword and content opportunity assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Technical website audit</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 2: Strategy Development (Weeks 2-3)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Integrated marketing and SEO strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Content calendar and topics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Channel prioritization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Budget allocation recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>KPIs and success metrics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 3: Foundation Building (Months 1-2)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Technical SEO fixes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>On-page optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Google Business Profile optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Initial content creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Campaign setup and launch</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 4: Growth Acceleration (Months 3-6)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Ongoing content marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Link building campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Paid advertising optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Social media execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Email marketing automation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 5: Optimization & Scaling (Months 6+)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Performance analysis and refinement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Expand successful tactics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Test new opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Scale what's working</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-[#FF6B35] rounded-lg p-6">
              <p className="text-white text-lg leading-relaxed">
                <strong>Monthly reporting keeps you informed of progress</strong>, with regular
                strategy sessions to review results and adjust plans.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results We Deliver */}
      <section ref={resultsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Measurable Marketing & SEO Results
              </h2>
              <p className="text-xl text-gray-600">
                Our clients consistently achieve exceptional outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">150-300%</div>
                  <p className="text-gray-700">increase in organic traffic within 12 months</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">3-5x</div>
                  <p className="text-gray-700">return on ad spend for paid campaigns</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">Page 1</div>
                  <p className="text-gray-700">rankings for primary business keywords</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">50-100%</div>
                  <p className="text-gray-700">increase in qualified leads</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">40%</div>
                  <p className="text-gray-700">reduction in cost per acquisition</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">200%+</div>
                  <p className="text-gray-700">increase in website conversions</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <h3
                className="text-2xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Real Example Results
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>
                    One client went from 500 to 3,200 monthly organic visitors in 10 months
                  </strong>{' '}
                  while reducing their paid advertising spend by 35%—because organic traffic
                  replaced paid traffic.
                </p>
                <p>
                  <strong>Another client achieved #1 rankings for 12 primary keywords</strong>,
                  generating 45+ new leads per month from SEO alone—leads that previously cost $150+
                  each through advertising.
                </p>
                <p className="pt-4 border-t border-gray-200">
                  We track everything and tie marketing efforts directly to revenue so you always
                  know your ROI.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/case-studies">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  View All Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose ThinkMents */}
      <section ref={whyChooseRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why Businesses Choose ThinkMents
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">20+ Years Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We've practiced digital marketing and SEO since 2002—through every algorithm
                    update and industry evolution. We know what works because we've tested it
                    through two decades of client success. From businesses in Decatur, Texas to
                    enterprise clients across 31 states, we've refined our approach through
                    real-world results.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Integrated Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Marketing and SEO work together under one roof, eliminating silos and maximizing
                    results. Your SEO strategy informs marketing campaigns. Your marketing content
                    strengthens SEO. This integration delivers compound results that separated
                    agencies simply can't match.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Transparent Reporting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You'll always know exactly what we're doing, why we're doing it, and what
                    results it's producing. Monthly reports tie marketing activities directly to
                    business outcomes—rankings, traffic, leads, and revenue. No smoke and mirrors,
                    just clear data.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">No Long-Term Contracts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    After an initial 3-month commitment, we work month-to-month. We earn your
                    business through results, not contracts. This confidence comes from knowing our
                    work consistently delivers measurable ROI.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Local & Available</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Based in Decatur, Texas and serving clients across 31 states from North Texas to
                    nationwide. We're accessible when you need us—no outsourced support, no offshore
                    teams. You work directly with experienced marketing professionals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Proven Track Record</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Case studies, testimonials, and a 5.0 Google rating with 103+ reviews
                    demonstrate our consistent ability to deliver results. Our clients stay with us
                    for years—some for over a decade—because we continuously prove our value.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link to="/testimonials">
                <Button
                  variant="outline"
                  className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8"
                >
                  Read Client Testimonials
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    <h3 className="font-semibold text-[#1E3A5F] text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              <Link
                to="/web-development"
                className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline"
              >
                Web Development
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/strategic-consulting"
                className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline"
              >
                Strategic Consulting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free digital marketing consultation to discuss your goals and discover how
              we can help you achieve them.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Get Free Marketing Audit</Link>
              </Button>
              <div className="flex items-center gap-3 text-white/90">
                <span>Or call</span>
                <a
                  href="tel:9403151023"
                  className="flex items-center gap-2 font-semibold hover:text-[#00B4D8] transition-colors"
                >
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
