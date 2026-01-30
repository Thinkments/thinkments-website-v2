import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Phone,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Rocket,
  TrendingUp,
  Target,
  Users,
  Building2,
  Store,
  RefreshCw,
  Globe,
  Megaphone,
  Heart,
  Shield,
  Briefcase,
  Scale,
  Home,
  Utensils,
  Laptop,
  MapPin,
  ShoppingBag,
  Stethoscope,
  HelpCircle,
  Award,
  BarChart3,
  Star,
} from 'lucide-react';
import SEO from '../SEO';

export default function BusinessSolutionsPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whoWeHelpRef = useRef(null);
  const solutionsRef = useRef(null);
  const industryRef = useRef(null);
  const approachRef = useRef(null);
  const packagesRef = useRef(null);
  const resultsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhoWeHelpInView = useInView(whoWeHelpRef, { once: true });
  const isSolutionsInView = useInView(solutionsRef, { once: true });
  const isIndustryInView = useInView(industryRef, { once: true });
  const isApproachInView = useInView(approachRef, { once: true });
  const isPackagesInView = useInView(packagesRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const solutions = [
    {
      icon: Globe,
      title: 'Complete Digital Presence',
      description:
        'Build everything you need to compete online. For businesses starting from scratch or those with outdated digital assets, we create complete digital presence packages—professional website, Google Business Profile, social media profiles, directory listings, and basic content. This foundation establishes credibility and visibility, giving you a platform for all future marketing efforts. Packages are customized based on your industry and competitive landscape.',
    },
    {
      icon: Megaphone,
      title: 'Lead Generation Systems',
      description:
        "Generate consistent, qualified leads that grow your business. We build lead generation systems combining SEO, paid advertising, landing pages, and conversion optimization. These aren't one-time campaigns—they're sustainable systems that deliver predictable lead flow month after month. We track every lead source and optimize continuously for better results and lower costs.",
    },
    {
      icon: Target,
      title: 'Brand Development',
      description:
        'Define and communicate what makes your business unique. Our brand development services include positioning strategy, messaging frameworks, visual identity guidance, and brand voice development. Strong branding differentiates you from competitors, justifies premium pricing, and creates customer loyalty. We help you discover your authentic brand story and communicate it consistently.',
    },
    {
      icon: MapPin,
      title: 'Market Expansion',
      description:
        "Enter new markets or expand your geographic reach. We develop market entry strategies including competitive research, local SEO campaigns, targeted advertising, and location-specific content. Whether you're opening new locations, expanding service areas, or entering new industries, we create the marketing infrastructure to support successful expansion.",
    },
    {
      icon: Heart,
      title: 'Customer Retention & Loyalty',
      description:
        "Keep the customers you've worked hard to acquire. We develop retention strategies including email marketing, loyalty programs, review generation, and reactivation campaigns. Acquiring new customers costs 5-7x more than retaining existing ones—our retention solutions protect your customer base and increase lifetime value.",
    },
    {
      icon: Shield,
      title: 'Reputation Building',
      description:
        'Build the online reputation that reflects your real-world quality. We implement systematic review generation, reputation monitoring, and response strategies that build trust with potential customers. For businesses recovering from reputation problems, we develop recovery plans that address issues and rebuild credibility over time.',
    },
  ];

  const faqs = [
    {
      question: 'How do I know which solution is right for my business?',
      answer:
        "We start every engagement with a discovery conversation to understand your situation. We'll recommend the solution that makes sense—or tell you honestly if we're not the right fit.",
    },
    {
      question: 'How much do business solutions cost?',
      answer:
        'Packages start at $1,500/month for basic solutions. Custom engagements are quoted based on scope. We work with businesses of all sizes and can usually find an approach that fits your budget.',
    },
    {
      question: 'How long until I see results?',
      answer:
        'It depends on the solution. Some tactics produce results within weeks; others take months to mature. We set realistic expectations upfront and provide regular progress updates.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer:
        'After an initial commitment period (typically 3 months), most services are month-to-month. We earn continued business through results, not contract lock-in.',
    },
    {
      question: 'Can you work with my existing vendors?',
      answer:
        "Yes. We collaborate with web developers, designers, PR firms, and other vendors. We can also take over from vendors who aren't performing.",
    },
    {
      question: 'What if my needs change?',
      answer:
        'We adjust. Business needs evolve, and your marketing should evolve too. We regularly review and refine our approach based on your changing situation.',
    },
    {
      question: 'Do you work with businesses outside Texas?',
      answer:
        'Absolutely. We serve clients across 31 states. Video conferencing makes collaboration easy regardless of location.',
    },
  ];

  return (
    <>
      <SEO
        title="Business Solutions | Custom Marketing Solutions for Every Business | ThinkMents"
        description="Tailored business solutions since 2002. From startups to established companies. Lead generation, brand development, market expansion. 31 states served."
        url="/business-solutions"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&fit=crop)',
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
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Business Solutions</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                SOLVING BUSINESS CHALLENGES SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Custom Business Solutions That Work
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Tailored solutions for your unique business challenges
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '100s', label: 'Businesses Helped' },
                  { stat: '31', label: 'States Served' },
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '5.0', label: 'Google Rating' },
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
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
                >
                  <Link to="/free-consultation">Discuss Your Challenges</Link>
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

      {/* Introduction */}
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
                Every business faces unique challenges that require tailored solutions—not
                cookie-cutter packages.{' '}
                <strong>
                  ThinkMents' Business Solutions go beyond standard marketing services to address
                  the specific problems keeping you up at night.
                </strong>{' '}
                Since 2002, we've helped hundreds of businesses across 31 states solve complex
                challenges, from establishing market presence to scaling operations to recovering
                from setbacks. We combine strategic thinking with practical execution, developing
                custom solutions that fit your budget, timeline, and goals. Whether you're a startup
                finding your footing or an established company ready to grow, we have the experience
                and flexibility to help.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section ref={whoWeHelpRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhoWeHelpInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Business Solutions for Every Stage
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Startups & New Businesses',
                  description:
                    "You need to establish presence quickly with limited budget. We help you prioritize investments, build foundational marketing assets, and generate early traction without wasting money on things that don't matter yet.",
                },
                {
                  title: 'Growing Businesses',
                  description:
                    "You've found product-market fit and need to scale. We develop systems and strategies that support growth—lead generation, brand building, operational efficiency, and marketing infrastructure that scales with you.",
                },
                {
                  title: 'Established Companies',
                  description:
                    'You have a successful business but face new challenges—increased competition, market changes, or plateaued growth. We bring fresh perspective and proven strategies to reignite momentum.',
                },
                {
                  title: 'Businesses in Transition',
                  description:
                    'New ownership, new markets, new products, or recovering from setbacks. We help navigate change with marketing strategies that support your new direction.',
                },
                {
                  title: 'Local Service Businesses',
                  description:
                    'You serve a geographic area and need customers from your community. We specialize in local marketing that drives calls, appointments, and foot traffic.',
                },
                {
                  title: 'Multi-Location Businesses',
                  description:
                    'You need consistent branding with local relevance across multiple locations. We develop scalable systems that maintain quality across your footprint.',
                },
              ].map((type, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#00B4D8]"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{type.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Business Solutions */}
      <section ref={solutionsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Core Business Solutions
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="text-xl text-[#1E3A5F]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section
        ref={industryRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Briefcase className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Solutions Tailored to Your Industry
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Stethoscope,
                  title: 'Healthcare',
                  description:
                    'HIPAA-compliant marketing that attracts patients while respecting privacy regulations. Patient acquisition, reputation management, and provider marketing.',
                },
                {
                  icon: Scale,
                  title: 'Legal',
                  description:
                    'Ethical marketing for law firms that generates qualified leads. Practice area targeting, local visibility, and thought leadership development.',
                },
                {
                  icon: Home,
                  title: 'Home Services',
                  description:
                    'Local marketing that fills your schedule with profitable jobs. Service area optimization, lead generation, and seasonal campaign strategies.',
                },
                {
                  icon: Utensils,
                  title: 'Restaurants & Hospitality',
                  description:
                    'Marketing that drives reservations, orders, and foot traffic. Local SEO, review management, social media, and event promotion.',
                },
                {
                  icon: Laptop,
                  title: 'Professional Services',
                  description:
                    'B2B marketing that establishes expertise and generates opportunities. Content marketing, LinkedIn strategies, and lead nurturing.',
                },
                {
                  icon: Building2,
                  title: 'Real Estate',
                  description:
                    'Agent and brokerage marketing that generates listings and buyers. Personal branding, property marketing, and market positioning.',
                },
                {
                  icon: ShoppingBag,
                  title: 'Retail & E-Commerce',
                  description:
                    'Marketing that drives both online and in-store sales. Product marketing, shopping campaigns, and omnichannel strategies.',
                },
              ].map((industry, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <industry.icon className="w-10 h-10 text-[#00B4D8] mb-4" />
                    <h3 className="text-xl text-white mb-3">{industry.title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg text-white/90">
                <strong>We've worked with businesses in these industries and many others.</strong>{' '}
                This experience means faster strategy development and proven approaches tailored to
                your specific market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                How We Develop Your Solution
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Understand First',
                  description:
                    "We start by understanding your business deeply—goals, challenges, resources, constraints, competitive landscape, and history. Solutions without context don't work.",
                },
                {
                  title: 'Diagnose Accurately',
                  description:
                    'We identify root causes, not just symptoms. If leads are the problem, we determine why—visibility, messaging, website conversion, targeting, or something else entirely.',
                },
                {
                  title: 'Recommend Honestly',
                  description:
                    "We tell you what you need to hear, including if we're not the right fit or if your expectations are unrealistic. Honest advice protects both of us.",
                },
                {
                  title: 'Customize Completely',
                  description:
                    'Your solution is designed for your specific situation. No forcing square pegs into round holes with standardized packages.',
                },
                {
                  title: 'Implement Effectively',
                  description:
                    'Strategy without execution is worthless. We implement solutions properly and monitor results closely.',
                },
                {
                  title: 'Optimize Continuously',
                  description:
                    'Markets change, competitors adapt, and new opportunities emerge. We refine solutions based on results and evolving conditions.',
                },
              ].map((step, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages vs Custom */}
      <section ref={packagesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPackagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Rocket className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Flexible Engagement Options
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Some clients need packaged solutions with predictable pricing. Others need fully
                custom engagements designed from scratch. <strong>We offer both:</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Packaged Solutions',
                    description:
                      'Pre-defined service bundles for common needs—startup packages, local business solutions, growth accelerators. Clear scope and pricing.',
                  },
                  {
                    title: 'Custom Solutions',
                    description:
                      'Tailored engagements designed specifically for your situation. We assess your needs and build a solution that fits—no more, no less.',
                  },
                  {
                    title: 'Hybrid Approaches',
                    description:
                      'Start with a package and customize as needed. Add services as you grow. Adjust based on results.',
                  },
                ].map((option, idx) => (
                  <Card key={idx} className="border-t-4 border-t-[#00B4D8]">
                    <CardContent className="p-6">
                      <h3 className="text-lg text-[#1E3A5F] mb-3">{option.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-700">
                  <strong>We'll recommend the approach that makes sense for your situation.</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Case Examples */}
      <section ref={resultsRef} className="py-20 bg-gray-50">
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
                Business Solution Results
              </h2>
              <p className="text-xl text-gray-600">
                Our business solutions deliver measurable impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Startup to Profitability',
                  description:
                    'Helped new business generate $50K+ revenue in first 6 months through strategic digital presence',
                },
                {
                  title: 'Turnaround Success',
                  description:
                    "Recovered struggling company's online reputation from 2.8 to 4.7 stars in 8 months",
                },
                {
                  title: 'Market Expansion',
                  description:
                    'Supported business expanding from 1 to 5 locations with consistent lead generation across all markets',
                },
                {
                  title: 'Lead Generation System',
                  description:
                    'Built system generating 100+ qualified leads monthly for service business',
                },
              ].map((result, idx) => (
                <Card
                  key={idx}
                  className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{result.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/case-studies">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  See Detailed Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
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
                  to="/services"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  All Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/marketing-seo"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Marketing & SEO <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/web-development"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Web Development <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/strategic-consulting"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Strategic Consulting <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Solve Your Business Challenges?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your situation and develop a solution tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Business Consultation
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
                <span>20+ Years Solving Business Challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Custom Solutions for Every Situation</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>5.0 Google Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
