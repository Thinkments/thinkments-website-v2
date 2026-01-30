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
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Play,
  Award,
  Briefcase,
  RefreshCw,
  Share2,
  Grid3x3,
  Image as ImageIcon,
  BarChart3,
} from 'lucide-react';
import SEO from '../SEO';
import RelatedServices from '../RelatedServices';

export default function PaidAdvertisingPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Search,
      title: 'Google Ads Management',
      description:
        'Search, display, shopping, and Performance Max campaigns managed by Google-certified experts. We target high-intent keywords that drive conversions, not just clicks. Through continuous bid optimization, negative keyword refinement, and ad copy testing, we maximize your Google ad budget to deliver qualified leads and sales at profitable cost-per-acquisition targets.',
      price: 'From $500/mo + ad spend',
      badge: null,
    },
    {
      icon: Play,
      title: 'YouTube Advertising',
      description:
        "Video ads that capture attention and drive action across YouTube and Google Display Network. We create compelling video content, target precise audiences, and optimize for view-through conversions. From skippable in-stream ads to discovery ads, we leverage YouTube's massive reach to build brand awareness and generate leads.",
      price: 'From $750/mo + ad spend',
      badge: null,
    },
    {
      icon: Award,
      title: 'Local Service Ads',
      description:
        'Google Guaranteed ads for service businesses in eligible categories. Show up at the very top of Google with the trusted checkmark badge. Pay only for qualified leads, not clicks. We handle verification, profile optimization, and lead management to help you dominate local search results.',
      price: 'From $300/mo + ad spend',
      badge: null,
    },
    {
      icon: Briefcase,
      title: 'Job Board Advertising',
      description:
        'Recruitment advertising across Indeed, ZipRecruiter, LinkedIn, and niche job boards. We write compelling job descriptions, target the right candidates, manage budgets across platforms, and track applicant quality. Perfect for businesses struggling to fill positions in competitive hiring markets.',
      price: 'From $400/mo + ad spend',
      badge: null,
    },
    {
      icon: RefreshCw,
      title: 'Retargeting Campaigns',
      description:
        "Bring back website visitors who didn't convert the first time. Using pixel tracking and audience segmentation, we show relevant ads to previous visitors across Google Display, YouTube, and social platforms. Retargeting typically converts 3-5x better than cold traffic and dramatically improves overall campaign ROI.",
      price: 'From $350/mo + ad spend',
      badge: null,
    },
    {
      icon: Share2,
      title: 'Social Media Advertising',
      description:
        'Facebook, Instagram, LinkedIn, and TikTok ads that reach your ideal audience with laser precision. We leverage platform-specific targeting to reach users based on demographics, interests, behaviors, and custom audiences. From lead generation to e-commerce sales, we optimize campaigns for your specific business goals.',
      price: 'From $450/mo + ad spend',
      badge: null,
    },
    {
      icon: Grid3x3,
      title: 'MCC Management',
      description:
        'Multi-account Google Ads management for agencies, franchises, and businesses with multiple locations. Centralized reporting, shared strategies, and efficient campaign management across dozens or hundreds of accounts. We provide the infrastructure and expertise to scale advertising across your entire organization.',
      price: 'Custom Quote',
      badge: null,
    },
    {
      icon: ImageIcon,
      title: 'Ad Creative & Copy',
      description:
        'Compelling ad copy and eye-catching visuals designed to stop scrollers and drive clicks. We A/B test headlines, descriptions, images, and calls-to-action to identify winning combinations. Professional creative services ensure your ads stand out in crowded feeds and search results.',
      price: 'From $200/ad set',
      badge: null,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit',
      description: 'We analyze your current campaigns, competitors, and opportunities.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Custom campaign strategy tailored to your goals and budget.',
    },
    {
      number: '03',
      title: 'Launch',
      description: 'Professional setup with tracking, targeting, and optimization.',
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Continuous testing and refinement for maximum ROI.',
    },
  ];

  const caseStudies = [
    {
      title: 'Roofing Company',
      metric: '425%',
      label: 'ROI in 6 Months',
      description: 'Google Ads campaign generated $850K in revenue from $200K ad spend.',
    },
    {
      title: 'Healthcare Network',
      metric: '$12',
      label: 'Cost Per Lead',
      description:
        'Reduced cost per qualified lead from $85 to $12 through strategic optimization.',
    },
    {
      title: 'Recruitment Agency',
      metric: '150+',
      label: 'Quality Hires',
      description: 'Indeed and ZipRecruiter campaigns filled 150+ positions in 12 months.',
    },
  ];

  return (
    <>
      <SEO
        title="Paid Advertising Services | Google Ads, YouTube, Job Boards | ThinkMents"
        description="Professional paid advertising management in Texas. Google Ads, YouTube advertising, Local Service Ads, and job board campaigns. $2M+ in ad spend managed."
        url="/services/paid-advertising"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBhZHMlMjBkYXNoYm9hcmQlMjBtZXRyaWNzfGVufDF8fHx8MTc2NTQwMDY1NHww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
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
                <span className="text-white">Paid Advertising</span>
              </div>

              {/* Headline */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Paid Advertising That Pays for Itself
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Strategic ad campaigns across Google, YouTube, and job boards that deliver
                measurable ROI. We manage millions in ad spend—and we treat your budget like it's
                our own.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '$2M+', label: 'Ad Spend Managed' },
                  { stat: '300%', label: 'Average ROI' },
                  { stat: '15+', label: 'Platforms' },
                  { stat: '1,000+', label: 'Campaigns' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#00B4D8] mb-2">
                      {item.stat}
                    </div>
                    <div className="text-white/80 text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/free-consultation">Get Free Ad Audit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/case-studies">See Results</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Paid advertising delivers immediate visibility and measurable results when done
                correctly. At ThinkMents, we've managed over $2M in ad spend across Google Ads,
                YouTube, social media platforms, and job boards—consistently delivering 3-5x return
                on ad spend for our clients. Unlike agencies that profit from spending more of your
                budget, we charge flat management fees aligned with your success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team includes Google-certified professionals with decades of combined experience
                running campaigns across every major advertising platform. We don't just set up
                campaigns and hope for the best—we continuously optimize based on real performance
                data, conduct rigorous A/B testing, and make strategic adjustments to maximize your
                ROI. Whether you're spending $1,000 or $100,000 per month, we treat every dollar
                like it's our own.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From local service businesses in Texas to national e-commerce brands, we've helped
                hundreds of businesses achieve their advertising goals. Our approach combines
                data-driven strategy, compelling creative, precise targeting, and relentless
                optimization to ensure your ads reach the right people at the right time with the
                right message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Paid Advertising Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-[#1E3A5F] text-lg">{service.title}</h3>
                      {service.badge && (
                        <Badge className="bg-[#00B4D8] text-white border-none text-xs">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-[#00B4D8] font-semibold text-sm">{service.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Below Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold"
            >
              <Link to="/free-consultation" className="flex items-center gap-2">
                Get Your Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Advertising Process
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
                <div className="text-6xl font-bold text-[#00B4D8]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Real Advertising Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#1E3A5F] text-lg">{study.title}</h3>
                    </div>
                    <div className="text-5xl font-bold text-[#00B4D8] mb-2">{study.metric}</div>
                    <p className="font-semibold text-[#1E3A5F] mb-4">{study.label}</p>
                    <p className="text-gray-600 leading-relaxed">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isResultsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold text-lg transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Who Paid Advertising Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">
                    Businesses Needing Immediate Results
                  </h3>
                  <p className="text-gray-700">
                    Unlike SEO which takes months, paid ads drive traffic and leads immediately.
                    Perfect for new businesses or seasonal campaigns.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Service Businesses</h3>
                  <p className="text-gray-700">
                    HVAC, plumbing, legal, dental, and home services that need qualified local leads
                    from Google and Local Service Ads.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">E-commerce & Online Retailers</h3>
                  <p className="text-gray-700">
                    Shopping campaigns and retargeting that drive product sales with measurable
                    ROAS.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Businesses Hiring Employees</h3>
                  <p className="text-gray-700">
                    Companies struggling to fill positions can use job board advertising to reach
                    qualified candidates faster.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">B2B Companies</h3>
                  <p className="text-gray-700">
                    LinkedIn and Google Ads targeting decision-makers at specific companies to
                    generate enterprise leads.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Businesses Scaling Growth</h3>
                  <p className="text-gray-700">
                    Companies ready to invest in predictable, scalable lead generation to fuel
                    expansion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ThinkMents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Why Choose ThinkMents for Paid Advertising
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Flat Fee, Not Percentage-Based</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We charge flat management fees, not a percentage of ad spend. This means our
                    incentives align with yours—we focus on efficiency and results, not inflating
                    your budget.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Google-Certified Experts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team holds Google Ads certifications and manages campaigns daily. We stay
                    current with platform changes, new features, and best practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Full Transparency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You own your ad accounts and data. We provide complete access, detailed
                    reporting, and clear explanations of what we're doing and why.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Continuous Optimization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't "set and forget." Daily monitoring, weekly adjustments, and monthly
                    strategy sessions ensure campaigns improve over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-8 text-white">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl italic mb-6">
              "ThinkMents took over our Google Ads and reduced our cost per lead by 60% while
              increasing conversions. They actually know what they're doing, unlike our previous
              agency."
            </blockquote>
            <p className="font-semibold">Mike T.</p>
            <p className="text-white/80 text-sm">Business Owner, Home Services</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center text-[#1E3A5F] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Paid Advertising FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How much should I spend on paid advertising?',
                a: "Budget depends on your goals, industry, and competition. Most small businesses start with $1,000-$3,000/month. We'll help you determine the right budget based on your target cost per acquisition and growth goals.",
              },
              {
                q: 'Which platform is best for my business?',
                a: "Google Ads is great for capturing existing demand (people searching for your services). Facebook/Instagram work well for building awareness and reaching new audiences. LinkedIn is ideal for B2B. We'll recommend the right mix for your specific situation.",
              },
              {
                q: 'How long before I see results?',
                a: "You'll see traffic immediately, but meaningful data takes 2-4 weeks. We recommend at least 90 days to properly test, optimize, and scale campaigns for best results.",
              },
              {
                q: 'Do you charge a percentage of ad spend?',
                a: 'No. We charge a flat management fee so our incentives align with your success—we focus on efficiency, not spending more of your money.',
              },
              {
                q: "What's your approach to campaign optimization?",
                a: "We continuously test ad copy, audiences, and bidding strategies. We analyze data daily, make weekly optimizations, and provide monthly strategy reviews to ensure we're maximizing your ROI.",
              },
              {
                q: "Can I see what you're doing with my campaigns?",
                a: 'Absolutely. You get full transparency with access to your ad accounts, weekly updates, and monthly performance reports. We believe you should own your data and understand exactly where your money goes.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 hover:border-[#00B4D8] transition-colors"
              >
                <h3 className="font-semibold text-[#1E3A5F] mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faqs" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Stop Wasting Ad Budget
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get a free audit of your current campaigns and see where you're leaving money on the
              table.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Get Free Ad Audit</Link>
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

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
              <span>Google Partner</span>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <span>5.0</span>
              </div>
              <span className="text-white/40">|</span>
              <span>$2M+ Managed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices
        services={[
          {
            icon: Share2,
            title: 'Social Media',
            description:
              'Build your brand and engage your audience with strategic social media management and content.',
            href: '/social-media',
          },
          {
            icon: BarChart3,
            title: 'Analytics & Reporting',
            description:
              'Data-driven insights and comprehensive reporting to track performance and optimize marketing ROI.',
            href: '/analytics-reporting',
          },
          {
            icon: Search,
            title: 'Marketing & SEO',
            description:
              'Boost your visibility with comprehensive SEO and digital marketing strategies.',
            href: '/marketing-seo',
          },
        ]}
      />
    </>
  );
}
