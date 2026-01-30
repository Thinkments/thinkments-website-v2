import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Phone,
  Star,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Layout,
  Code,
  ShoppingCart,
  Target,
  Wrench,
  Zap,
  TrendingUp,
  Award,
  BarChart3,
  Clock,
  Shield,
  Palette,
  Smartphone,
  Globe,
  FileText,
  Settings,
  HelpCircle,
  Briefcase,
} from 'lucide-react';
import SEO from '../SEO';

export default function WebDevelopmentPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyQualityRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const technologyRef = useRef(null);
  const includedRef = useRef(null);
  const whyChooseRef = useRef(null);
  const resultsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyQualityInView = useInView(whyQualityRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isTechnologyInView = useInView(technologyRef, { once: true });
  const isIncludedInView = useInView(includedRef, { once: true });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Layout,
      title: 'Custom Website Development',
      description:
        'Stand out from competitors with a website built specifically for your business. Unlike template-based solutions, our custom development creates unique experiences tailored to your brand, audience, and goals. We architect sites from the ground up—custom layouts, custom functionality, custom everything. The result is a website that perfectly represents your business and converts visitors into customers. No cookie-cutter templates, no limitations from pre-built themes.',
    },
    {
      icon: Code,
      title: 'WordPress Development',
      description:
        "Leverage the world's most popular content management system with professional WordPress development. We build custom WordPress themes, implement advanced functionality through plugins and custom code, and optimize for speed and security. WordPress powers over 40% of all websites because it's flexible, user-friendly, and scalable. Our WordPress sites give you easy content management without sacrificing design or performance.",
    },
    {
      icon: Zap,
      title: 'React & Modern Web Applications',
      description:
        'Build lightning-fast, interactive web experiences with React and modern JavaScript frameworks. For applications requiring dynamic interfaces, real-time updates, or complex functionality, we develop using cutting-edge technologies. Our React development creates smooth, app-like experiences that engage users and outperform traditional websites in speed and interactivity.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      description:
        'Sell online with an e-commerce website built for conversions. We develop online stores using Shopify, WooCommerce, and custom solutions—choosing the platform that best fits your products, volume, and technical needs. Our e-commerce sites include optimized product pages, streamlined checkout, payment integration, inventory management, and shipping calculation. We build stores that make buying easy.',
    },
    {
      icon: Target,
      title: 'Landing Page Development',
      description:
        'Convert advertising traffic with high-performance landing pages. We build focused, single-purpose pages designed to drive specific actions—form submissions, phone calls, purchases. Our landing pages consistently outperform industry conversion benchmarks because we apply proven design principles, clear messaging, and strategic calls-to-action.',
    },
    {
      icon: Palette,
      title: 'Website Redesign',
      description:
        "Transform your outdated website into a modern, high-performing asset. Our redesign process preserves what's working while fixing what isn't. We migrate your content, maintain your SEO equity through proper redirects, and launch a site that looks better, loads faster, and converts more visitors. Most redesign clients see immediate improvements in leads and engagement.",
    },
    {
      icon: Wrench,
      title: 'Website Maintenance & Support',
      description:
        'Keep your website secure, updated, and performing optimally with ongoing maintenance. We handle software updates, security monitoring, backups, performance optimization, and content updates so you can focus on running your business. Our maintenance plans provide peace of mind and ensure your website investment continues to deliver.',
    },
  ];

  const faqs = [
    {
      question: 'How much does a website cost?',
      answer:
        'Custom websites typically range from $3,500 for small business sites to $15,000+ for complex e-commerce or custom functionality. We provide detailed quotes after understanding your specific needs.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        "Most websites launch within 6-10 weeks depending on complexity and how quickly content and feedback are provided. We'll give you a specific timeline during discovery.",
    },
    {
      question: 'Do I need to provide content?',
      answer:
        'We can work with content you provide, or we offer copywriting services to create compelling website content. Stock images and professional photography coordination available.',
    },
    {
      question: 'Will I be able to update the website myself?',
      answer:
        "Yes. We build on user-friendly content management systems and provide training. You'll be able to update text, images, and basic content easily.",
    },
    {
      question: 'What about hosting?',
      answer:
        'We recommend reliable hosting providers and can set up hosting for you. We also offer managed hosting with our maintenance plans.',
    },
    {
      question: 'Do you redesign existing websites?',
      answer:
        'Absolutely. Website redesigns are a significant part of our work. We preserve your SEO equity while dramatically improving design and performance.',
    },
    {
      question: 'What if I need changes after launch?',
      answer:
        '30 days of post-launch support is included. Beyond that, we offer hourly support or monthly maintenance plans for ongoing needs.',
    },
    {
      question: 'Do you build mobile apps?',
      answer:
        'We build mobile-friendly websites and progressive web apps (PWAs). For native iOS/Android apps, we can recommend trusted partners.',
    },
  ];

  return (
    <>
      <SEO
        title="Web Development Services | Custom Websites & E-Commerce | ThinkMents"
        description="Professional web development since 2002. Custom websites, WordPress, React apps, e-commerce. 500+ websites built. Fast, mobile-responsive, conversion-optimized."
        url="/web-development"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1080&fit=crop)',
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
                <span className="text-white">Web Development</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                BUILDING WEBSITES SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Websites That Work as Hard as You Do
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                The foundation of your digital presence—built for results
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '500+', label: 'Websites Built' },
                  { stat: '<3 sec', label: 'Load Times' },
                  { stat: '100%', label: 'Mobile Responsive' },
                  { stat: '20+', label: 'Years Experience' },
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
                  <Link to="/free-consultation">Get Free Website Audit</Link>
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
                Your website is the foundation of your digital presence—and often the first
                impression potential customers have of your business.{' '}
                <strong>
                  At ThinkMents, we've been building websites since 2002, long before WordPress
                  became mainstream or mobile-responsive design was even a concept.
                </strong>{' '}
                Over two decades, we've developed hundreds of websites for businesses across 31
                states, from simple brochure sites to complex e-commerce platforms. Our approach
                combines stunning design with technical excellence and marketing strategy—because a
                beautiful website that doesn't generate leads is just an expensive digital brochure.
                We build websites that work as hard as you do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Website Quality Matters */}
      <section ref={whyQualityRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyQualityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Your Website's Impact on Business Success
              </h2>
              <p className="text-xl text-gray-600">
                Your website isn't just a digital business card—it's your most powerful marketing
                asset
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">75%</div>
                  <p className="text-gray-700">
                    of consumers judge credibility based on website design
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">88%</div>
                  <p className="text-gray-700">won't return after a bad experience</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">15%</div>
                  <p className="text-gray-700">higher conversion with under 2-second load times</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">94%</div>
                  <p className="text-gray-700">of first impressions are design-related</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">3x</div>
                  <p className="text-gray-700">more leads with clear CTAs</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">50-200%</div>
                  <p className="text-gray-700">increase in leads after launch</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A poorly designed, slow, or outdated website actively costs you customers.{' '}
                <strong>
                  Every day with a subpar website is a day you're losing business to competitors
                  with better online presence.
                </strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The good news? A professionally built website pays for itself through increased
                leads, improved credibility, and better search visibility.{' '}
                <strong>
                  We don't just build websites—we build revenue-generating digital assets.
                </strong>
              </p>
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
            <h2
              className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Comprehensive Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom sites to e-commerce platforms—built for your success
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
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/web-design">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  Web Design Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Development Process - Continued in next message due to length */}
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
              <Briefcase className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                How We Build Your Website
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1: Discovery & Planning (Week 1-2)',
                  items: [
                    'Kickoff meeting to understand your business and goals',
                    'Target audience and competitor research',
                    'Content inventory and sitemap development',
                    'Technical requirements definition',
                    'Timeline and milestone planning',
                  ],
                },
                {
                  phase: 'Phase 2: Design (Weeks 2-4)',
                  items: [
                    'Wireframes showing page structure and layout',
                    'Visual design concepts based on your brand',
                    'Homepage and key page mockups',
                    'Revision rounds until you love it',
                    'Final design approval',
                  ],
                },
                {
                  phase: 'Phase 3: Development (Weeks 4-7)',
                  items: [
                    'Front-end development (what visitors see)',
                    'Back-end development (functionality and CMS)',
                    'Mobile responsiveness across all devices',
                    'Forms, integrations, and features',
                    'Content population',
                  ],
                },
                {
                  phase: 'Phase 4: Testing & QA (Week 7-8)',
                  items: [
                    'Cross-browser testing (Chrome, Safari, Firefox, Edge)',
                    'Mobile device testing (iOS, Android)',
                    'Form and functionality testing',
                    'Speed optimization',
                    'SEO technical checklist',
                    'Accessibility review',
                  ],
                },
                {
                  phase: 'Phase 5: Launch & Training (Week 8-9)',
                  items: [
                    'Final client review and approval',
                    'Domain and hosting configuration',
                    'Website launch',
                    'CMS training for your team',
                    'Post-launch monitoring',
                    'Handoff documentation',
                  ],
                },
                {
                  phase: 'Phase 6: Ongoing Support',
                  items: [
                    '30 days of post-launch support included',
                    'Available maintenance plans for ongoing needs',
                    'Always here when you need us',
                  ],
                },
              ].map((phase, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-2xl text-[#00B4D8] mb-4">{phase.phase}</h3>
                    <ul className="space-y-2 text-white/90">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology & Platforms */}
      <section ref={technologyRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Settings className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-600">
                We're technology-agnostic—we use tools that best fit your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Content Management Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• WordPress (custom themes and plugins)</li>
                    <li>• Webflow</li>
                    <li>• Custom CMS solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">E-Commerce Platforms</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Shopify</li>
                    <li>• WooCommerce</li>
                    <li>• Custom e-commerce solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Front-End Technologies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• React / Next.js</li>
                    <li>• HTML5 / CSS3</li>
                    <li>• JavaScript / TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Integrations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• CRM systems (HubSpot, Salesforce)</li>
                    <li>• Email marketing platforms</li>
                    <li>• Payment processors (Stripe, PayPal)</li>
                    <li>• Analytics & scheduling tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section ref={includedRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIncludedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <CheckCircle className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Every Website Includes
              </h2>
              <p className="text-xl text-gray-600">
                No nickel-and-diming—what you need is included
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-4">Design & User Experience</h3>
                  <ul className="space-y-2">
                    {[
                      'Custom design (no templates)',
                      'Mobile-responsive across all devices',
                      'Intuitive navigation and user flow',
                      'Conversion-optimized layouts',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-4">Technical Excellence</h3>
                  <ul className="space-y-2">
                    {[
                      'Fast loading speeds (under 3 seconds)',
                      'SSL security certificate setup',
                      'SEO-friendly architecture',
                      'Schema markup for search engines',
                      'XML sitemap and robots.txt',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-4">Functionality</h3>
                  <ul className="space-y-2">
                    {[
                      'Contact forms with spam protection',
                      'Google Analytics integration',
                      'Google Search Console setup',
                      'Social media integration',
                      'Newsletter signup integration (if needed)',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-4">Post-Launch</h3>
                  <ul className="space-y-2">
                    {[
                      'CMS training for your team',
                      '30 days of included support',
                      'Documentation and login credentials',
                      'Hosting recommendations and setup assistance',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
                Why Choose ThinkMents for Web Development
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: '20+ Years Building Websites',
                  description:
                    "We've built websites since before CSS was widely supported. This experience means we've solved every problem, adapted to every technology shift, and know what actually works.",
                },
                {
                  title: 'Marketing-Focused Development',
                  description:
                    "We're marketers who build websites, not just developers. Every site we create is built to generate leads and support your marketing goals—not just look pretty.",
                },
                {
                  title: 'No Outsourcing',
                  description:
                    "Your website is built by our team, not shipped overseas to anonymous contractors. You know who's working on your project.",
                },
                {
                  title: 'Long-Term Partnership',
                  description:
                    "We're here after launch for support, updates, and improvements. Many clients have worked with us for 10+ years.",
                },
                {
                  title: 'Transparent Process',
                  description:
                    "You're involved at every stage. No surprises, no scope creep, no mystery about what's happening with your project.",
                },
              ].map((reason, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{reason.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/case-studies">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Portfolio */}
      <section ref={resultsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <BarChart3 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Websites That Deliver Results
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { stat: '50-200%', label: 'increase in website leads' },
                { stat: '40-60%', label: 'improvement in page load times' },
                { stat: '30-50%', label: 'reduction in bounce rates' },
                { stat: '60 days', label: 'improved search rankings within' },
                { stat: 'Higher', label: 'conversion rates across all traffic' },
                { stat: 'Dozens', label: 'of industries served' },
              ].map((result, idx) => (
                <Card key={idx} className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl text-[#00B4D8] mb-2">{result.stat}</div>
                    <p className="text-gray-700">{result.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We've built websites for healthcare practices, law firms, home service companies,
                restaurants, e-commerce stores, and businesses across dozens of industries.
              </p>
              <Link to="/portfolio" className="text-[#00B4D8] hover:underline text-lg">
                See examples of our work →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl text-[#1E3A5F] mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Who Web Development Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">New Businesses</h3>
                  <p className="text-gray-700">
                    Startups and new companies needing professional online presence from day one.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Businesses with Outdated Websites</h3>
                  <p className="text-gray-700">
                    Companies losing customers to competitors because of slow, non-mobile, or
                    unprofessional sites.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">E-commerce Businesses</h3>
                  <p className="text-gray-700">
                    Online retailers needing robust platforms that handle products, payments, and
                    customers seamlessly.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Service Businesses</h3>
                  <p className="text-gray-700">
                    HVAC, plumbers, lawyers, dentists, and local services converting website
                    visitors into customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Growing Companies</h3>
                  <p className="text-gray-700">
                    Businesses outgrowing their current website's capabilities and needing
                    enterprise-level solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Multi-Location Businesses</h3>
                  <p className="text-gray-700">
                    Franchises and businesses with multiple locations needing coordinated web
                    presence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
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
              <HelpCircle className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
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
              <p className="text-gray-600 mb-4">Explore related services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/marketing-seo"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Marketing & SEO <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/technical-services"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Technical Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/widgets-integrations"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Widgets & Integrations <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready for a Website That Drives Results?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and build a website that attracts visitors and converts
              them into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Web Consultation
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

            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Marketing-Focused Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
