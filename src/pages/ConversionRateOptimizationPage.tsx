import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Phone,
  Award,
  Users,
  TrendingUp,
  BarChart3,
  TestTube2,
  MousePointerClick,
  Eye,
  Smartphone,
  Target,
  FileText,
  ShoppingCart,
  Zap,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function ConversionRateOptimizationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { icon: Award, label: '20+ Years Experience', value: '20+' },
    { icon: BarChart3, label: 'Data-Driven Approach', value: '100%' },
    { icon: TrendingUp, label: 'Proven Results', value: '150+' },
  ];

  const croFacts = [
    {
      stat: '2-3%',
      description: 'Average website conversion rate across industries',
    },
    {
      stat: '10%+',
      description: 'Top-performing websites convert at this rate or higher',
    },
    {
      stat: '223%',
      description: 'Average ROI from CRO programs (ConversionXL study)',
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: 'Conversion Audit & Analysis',
      description:
        'We start with a comprehensive analysis of your current conversion funnel—identifying where visitors drop off, which pages underperform, and what opportunities exist for improvement. Using analytics data, funnel visualization, and conversion tracking, we pinpoint exactly where your website is losing potential customers and quantify the revenue impact of each optimization opportunity.',
      linkTo: '/analytics-reporting',
    },
    {
      icon: TestTube2,
      title: 'A/B Testing & Experimentation',
      description:
        'Data beats opinions every time. We design and execute rigorous A/B tests and multivariate experiments to validate hypotheses and identify what actually drives conversions for your audience. Every change is tested for statistical significance before implementation, ensuring we make decisions based on real user behavior rather than assumptions or industry best practices that may not apply to your specific audience.',
      linkTo: null,
    },
    {
      icon: MousePointerClick,
      title: 'Landing Page Optimization',
      description:
        "Landing pages are conversion powerhouses when optimized correctly. We analyze and improve every element—headlines, copy, images, CTAs, forms, social proof, and layout—to maximize conversion rates. Whether you're running paid ads, email campaigns, or organic traffic, optimized landing pages ensure you get maximum ROI from every visitor who arrives on your site.",
      linkTo: '/web-development',
    },
    {
      icon: Eye,
      title: 'User Experience (UX) Analysis',
      description:
        'Understanding how users actually interact with your site reveals conversion barriers you never knew existed. We conduct UX audits analyzing navigation, information architecture, visual hierarchy, page load speed, and usability issues. By identifying friction points and confusion in the user journey, we create a smoother path to conversion that feels intuitive and effortless for visitors.',
      linkTo: null,
    },
    {
      icon: Target,
      title: 'Heatmap & Session Recording Analysis',
      description:
        'Watch real users navigate your website to uncover why they don\'t convert. Using heatmaps, click tracking, scroll maps, and session recordings, we see exactly where users get stuck, what they ignore, and what distracts them from converting. This qualitative data provides context that analytics alone cannot—revealing the "why" behind the numbers and guiding optimization priorities.',
      linkTo: null,
    },
    {
      icon: FileText,
      title: 'Form Optimization',
      description:
        "Forms are critical conversion points, yet they're often overlooked. We optimize form length, field labels, validation messages, error handling, progress indicators, and submit buttons to reduce form abandonment. Even small improvements—removing one unnecessary field or improving error messages—can dramatically increase completion rates and lead generation from your existing traffic.",
      linkTo: null,
    },
    {
      icon: ShoppingCart,
      title: 'Checkout & Funnel Optimization',
      description:
        'Cart abandonment costs e-commerce businesses billions annually. We analyze and optimize every step of your checkout process—removing friction, simplifying steps, adding trust signals, optimizing payment options, and reducing cognitive load. For non-e-commerce sites, we optimize multi-step funnels (demos, trials, consultations) to maximize completion rates at every stage.',
      linkTo: null,
    },
    {
      icon: Zap,
      title: 'Call-to-Action Optimization',
      description:
        'Your CTA is the tipping point between bouncing and converting. We test and optimize CTA placement, copy, design, color, size, and surrounding elements to maximize click-through rates. Through systematic testing, we identify which CTAs resonate with your audience—whether it\'s "Get Started," "Learn More," "Request Demo," or something entirely different—and optimize for maximum response.',
      linkTo: null,
    },
    {
      icon: Smartphone,
      title: 'Mobile Conversion Optimization',
      description:
        "Mobile traffic continues to grow, but mobile conversion rates typically lag desktop. We optimize mobile experiences specifically—improving page speed, touch targets, form fields, navigation, and mobile-specific user flows. By creating mobile experiences designed for smaller screens and touch interaction, we close the mobile conversion gap and capture revenue you're currently losing.",
      linkTo: null,
    },
    {
      icon: Users,
      title: 'Personalization & Dynamic Content',
      description:
        'Generic experiences convert poorly. We implement personalization based on traffic source, user behavior, location, device, returning vs. new visitors, and other signals. By showing relevant content, offers, and messaging to different audience segments, we increase relevance and conversion rates. Personalized experiences make visitors feel understood and guide them toward actions that match their intent.',
      linkTo: null,
    },
  ];

  const targetAudiences = [
    {
      title: 'High-Traffic, Low Conversions',
      description:
        'Businesses with consistent website traffic but disappointing conversion rates who need to maximize their existing investment',
    },
    {
      title: 'E-commerce Stores',
      description:
        'Online retailers wanting to increase sales, average order value, and reduce cart abandonment',
    },
    {
      title: 'Lead Generation Sites',
      description:
        'B2B companies, professional services, and agencies wanting more form submissions and qualified leads',
    },
    {
      title: 'SaaS Companies',
      description:
        'Software companies wanting to increase trial signups, demo requests, and free-to-paid conversions',
    },
    {
      title: 'Enterprise Businesses',
      description:
        'Established companies wanting to maximize marketing ROI and get more value from current traffic levels',
    },
    {
      title: 'Traffic Investors',
      description:
        'Any business spending money on traffic (ads, SEO, content) that wants better returns from that investment',
    },
  ];

  const process = [
    {
      phase: '1',
      title: 'Conversion Audit',
      description:
        'We analyze your current conversion funnel, identifying where visitors drop off, which pages underperform, and how you compare to industry benchmarks. Using analytics, we quantify the revenue impact of each conversion leak and prioritize opportunities based on potential ROI.',
      duration: '1-2 weeks',
    },
    {
      phase: '2',
      title: 'User Research',
      description:
        "We deploy heatmaps, session recordings, user surveys, and on-site polls to understand how real visitors interact with your site. This qualitative research reveals why visitors don't convert—uncovering objections, confusion, and friction points that analytics alone cannot detect.",
      duration: '2-3 weeks',
    },
    {
      phase: '3',
      title: 'Hypothesis Development',
      description:
        'Based on data and research, we develop testable hypotheses about what changes will improve conversions. Each hypothesis is prioritized using the PIE framework (Potential, Importance, Ease) to focus on high-impact opportunities first.',
      duration: '1 week',
    },
    {
      phase: '4',
      title: 'Test Design & Implementation',
      description:
        'We design A/B tests or multivariate experiments to validate hypotheses, create test variations, implement tracking, and launch tests. All tests are properly configured for statistical validity, ensuring we get reliable results we can act on with confidence.',
      duration: '2-4 weeks per test',
    },
    {
      phase: '5',
      title: 'Analysis & Learning',
      description:
        'When tests reach statistical significance, we analyze results to extract insights. Beyond just "A beat B," we understand why it won, what we learned about your audience, and how those insights apply to other areas of your site.',
      duration: 'Ongoing',
    },
    {
      phase: '6',
      title: 'Implementation & Iteration',
      description:
        "Winning variations are rolled out to all traffic, and learnings inform the next round of tests. CRO is continuous—there's always another test to run, another insight to uncover, and another opportunity to improve conversions and revenue.",
      duration: 'Ongoing',
    },
  ];

  const whyCRO = [
    {
      icon: DollarSign,
      title: 'More Revenue from Existing Traffic',
      description:
        "Increasing conversions doesn't require more ad spend or traffic. A 20% conversion rate improvement means 20% more revenue from the same marketing budget—pure profit improvement.",
    },
    {
      icon: Users,
      title: 'Better Understanding of Customers',
      description:
        'CRO teaches you what your customers actually want, what resonates with them, and what objections prevent purchase. These insights improve marketing, product development, and customer experience.',
    },
    {
      icon: Eye,
      title: 'Improved User Experience',
      description:
        'Conversion optimization naturally improves usability. Removing friction, clarifying messaging, and simplifying processes makes your site better for everyone—converters and non-converters alike.',
    },
    {
      icon: TrendingUp,
      title: 'Compounding Results Over Time',
      description:
        'Unlike one-time projects, CRO compounds. Each improvement builds on previous wins. A 5% monthly improvement compounds to 80% annual growth—transforming your entire business over time.',
    },
    {
      icon: BarChart3,
      title: 'Higher ROI Than New Traffic',
      description:
        'Acquiring traffic is expensive and competitive. Optimizing conversions from existing traffic is more cost-effective and sustainable. Most businesses have more to gain from converting better than from getting more visitors.',
    },
  ];

  const results = [
    {
      metric: 'Conversion Rate Increases',
      description:
        'Average 30-150% improvement in conversion rates across landing pages, forms, and checkout flows',
      icon: TrendingUp,
      color: 'text-green-600',
    },
    {
      metric: 'Revenue Impact',
      description:
        'Millions in additional revenue generated for clients through systematic testing and optimization',
      icon: DollarSign,
      color: 'text-[#F7B928]',
    },
    {
      metric: 'Lead Generation Growth',
      description:
        '2-5x increases in qualified leads from the same traffic levels through form and funnel optimization',
      icon: Users,
      color: 'text-[#00B4D8]',
    },
    {
      metric: 'Long-Term Partnerships',
      description:
        'Enterprise clients stay 7-10 years because we continuously find new optimization opportunities',
      icon: Award,
      color: 'text-purple-600',
    },
  ];

  const faqs = [
    {
      question: 'How long does CRO take to show results?',
      answer:
        'Initial results typically appear within 4-8 weeks as we identify quick wins and run first tests. However, CRO is an ongoing process, not a one-time project. The most significant results come from continuous testing over 6-12 months, as learnings compound and we optimize more of your funnel. Some tests achieve statistical significance in days; others require weeks depending on traffic levels.',
    },
    {
      question: "What's a good conversion rate for my industry?",
      answer:
        'Conversion rates vary dramatically by industry, traffic source, and offer type. E-commerce typically converts at 2-4%, SaaS free trials at 2-5%, and B2B lead forms at 2-4%. However, focusing on industry benchmarks is less important than improving YOUR conversion rate. Top performers in every industry convert at 10%+. Our goal is to systematically improve your baseline, regardless of where you start.',
    },
    {
      question: 'How much traffic do I need for CRO to work?',
      answer:
        'While more traffic enables faster testing, CRO works at any traffic level. With 10,000+ monthly visitors, you can run multiple tests simultaneously. With 1,000-5,000 visitors, tests take longer but are still valuable. Under 1,000 visitors, we focus on qualitative research (heatmaps, recordings, surveys) and implement high-confidence changes rather than extensive A/B testing. Even low-traffic sites benefit from conversion audits and UX improvements.',
    },
    {
      question: 'What tools do you use for CRO?',
      answer:
        "We use industry-leading tools including Google Analytics for funnel analysis, Google Optimize or VWO for A/B testing, Hotjar or Microsoft Clarity for heatmaps and recordings, and Google Tag Manager for tracking implementation. Tool selection depends on your specific needs, budget, and technical environment. We're platform-agnostic and choose tools that best serve your optimization goals.",
    },
    {
      question: 'How is CRO different from website redesign?',
      answer:
        'Website redesigns are based on opinions, aesthetics, and assumptions—and often hurt conversions. CRO is based on data, testing, and user behavior. Rather than wholesale changes, we make incremental improvements validated by real users. This approach is lower risk, faster to implement, and proven to work. Many companies redesign when they should optimize—losing conversions in the process.',
    },
    {
      question: 'How much does CRO cost?',
      answer:
        "CRO investment depends on your traffic levels, business complexity, and program scope. Monthly retainers typically range from $3,000-$15,000+ for comprehensive programs including audits, research, testing, and optimization. However, CRO typically pays for itself many times over. If we increase your conversion rate by 20% and you generate $100,000 in monthly revenue, that's $20,000 in additional monthly revenue—far exceeding program costs. Contact us for a custom proposal based on your specific situation.",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Boost Conversions by 200%+ | Expert CRO Services | ThinkMents</title>
        <meta
          name="description"
          content="Maximize revenue from your traffic! Data-driven CRO services, A/B testing & landing page optimization that deliver proven results. Free audit available. (940) 315-1023"
        />
        <meta
          property="og:title"
          content="Boost Conversions by 200%+ | Expert CRO Services | ThinkMents"
        />
        <meta
          property="og:description"
          content="Maximize revenue from your traffic! Data-driven CRO services, A/B testing & landing page optimization that deliver proven results. Free audit available. (940) 315-1023"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/conversion-rate-optimization" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#234B70] to-[#2C5282] text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-[#F7B928]" />
                <span className="text-sm font-semibold">Conversion Rate Optimization</span>
              </div>

              <h1 className="mb-6">Conversion Rate Optimization Services</h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Turn more visitors into customers. We use data-driven strategies to increase your
                website's conversion rates and maximize ROI from your existing traffic.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <stat.icon className="w-5 h-5 text-[#F7B928]" />
                    <span className="text-sm font-semibold">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/free-consultation">Get Free CRO Audit</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-6 rounded-full transition-all duration-300"
                >
                  <a href="tel:9403151023">
                    <Phone className="w-5 h-5 mr-2" />
                    (940) 315-1023
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is CRO Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="mb-6">What is Conversion Rate Optimization?</h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Conversion Rate Optimization (CRO) is the systematic process of increasing the
                  percentage of website visitors who take a desired action—whether that's making a
                  purchase, filling out a form, signing up for a trial, or any other goal that
                  matters to your business.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Rather than spending more money to get more traffic, CRO focuses on getting more
                  value from the visitors you already have. Through data analysis, user research,
                  A/B testing, and systematic experimentation, we identify what prevents conversions
                  and implement changes that turn more visitors into customers.
                </p>

                <div className="bg-gradient-to-br from-[#F7B928]/10 to-white rounded-xl p-8 border border-[#F7B928]/20 mb-8">
                  <h3 className="font-bold text-[#1E3A5F] mb-4">Why This Matters</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>
                      Increasing conversions by just 1% can mean thousands in additional revenue.
                    </strong>{' '}
                    If you have 10,000 monthly visitors and currently convert at 2%, that's 200
                    conversions. Improve to 3% and you get 300 conversions—a 50% increase in results
                    from the exact same traffic.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {croFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                    >
                      <div className="text-4xl font-bold text-[#00B4D8] mb-2">{fact.stat}</div>
                      <p className="text-gray-700">{fact.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our CRO Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our CRO Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive conversion optimization services designed to maximize revenue from
                your existing traffic through data-driven testing and experimentation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00B4D8] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1E3A5F] mb-2">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>

                  {service.linkTo && (
                    <Link
                      to={service.linkTo}
                      className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Who CRO Is For</h2>
                <p className="text-xl text-gray-600">
                  Conversion rate optimization delivers the highest ROI for businesses with existing
                  traffic who want better results from their current marketing investment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {targetAudiences.map((audience, index) => (
                  <motion.div
                    key={audience.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                    <h3 className="font-bold text-[#1E3A5F] mb-3">{audience.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{audience.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our CRO Process */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Our Data-Driven CRO Process</h2>
                <p className="text-xl text-gray-600">
                  A systematic, proven methodology for continuous conversion improvement based on
                  data, testing, and real user behavior.
                </p>
              </div>

              <div className="space-y-6">
                {process.map((step, index) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00B4D8] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.phase}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-[#1E3A5F]">{step.title}</h3>
                          <span className="text-sm font-semibold text-[#00B4D8] whitespace-nowrap ml-4">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why CRO Matters Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Why Invest in CRO?</h2>
                <p className="text-xl text-gray-600">
                  Conversion rate optimization delivers compounding returns that transform
                  businesses over time.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyCRO.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                    <h3 className="font-bold text-[#1E3A5F] mb-3">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CRO Results Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Results We've Delivered</h2>
                <p className="text-xl text-gray-600">
                  Real conversion improvements and revenue impact from our data-driven optimization
                  programs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {results.map((result, index) => (
                  <motion.div
                    key={result.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 border-2 border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md flex items-center justify-center flex-shrink-0">
                        <result.icon className={`w-7 h-7 ${result.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E3A5F] mb-2">{result.metric}</h3>
                        <p className="text-gray-700 leading-relaxed">{result.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#00B4D8]/10 to-white rounded-xl p-8 border border-[#00B4D8]/20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#00B4D8]" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
                  "Our enterprise clients stay with us 7-10 years because we continuously find ways
                  to improve their results. CRO isn't a one-time project—it's an ongoing partnership
                  that compounds value over time. Every test teaches us something new about your
                  audience, creating a virtuous cycle of continuous improvement."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">
                  Common questions about conversion rate optimization and our services.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white transition-colors"
                    >
                      <h3 className="font-bold text-[#1E3A5F] pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                      )}
                    </button>

                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#234B70] to-[#2C5282] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-white mb-6">Ready to Convert More Visitors?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Stop leaving money on the table. Let's optimize your website for maximum conversions
                and turn your existing traffic into predictable revenue growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/free-consultation">Get Your Free CRO Audit</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-6 rounded-full transition-all duration-300"
                >
                  <a href="tel:9403151023">
                    <Phone className="w-5 h-5 mr-2" />
                    (940) 315-1023
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/80 flex-wrap">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F7B928]" />
                  <span>5.0 Google Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#F7B928]" />
                  <span>103+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#F7B928]" />
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-bold text-[#1E3A5F] text-center mb-6">Related Services</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/analytics-reporting"
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-[#1E3A5F] hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors font-semibold"
                >
                  Analytics & Reporting
                </Link>
                <Link
                  to="/web-development"
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-[#1E3A5F] hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors font-semibold"
                >
                  Web Development
                </Link>
                <Link
                  to="/marketing-seo"
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-[#1E3A5F] hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors font-semibold"
                >
                  Marketing SEO
                </Link>
                <Link
                  to="/strategic-consulting"
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-[#1E3A5F] hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors font-semibold"
                >
                  Strategic Consulting
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
