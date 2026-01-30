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
  Pencil,
  FileText,
  Target,
  Share2,
  Mail,
  Video,
  TrendingUp,
  BarChart3,
  Award,
  Search,
  HelpCircle,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import SEO from '../SEO';

export default function ContentMarketingPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyMattersRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const typesRef = useRef(null);
  const seoRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyMattersInView = useInView(whyMattersRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isTypesInView = useInView(typesRef, { once: true });
  const isSeoInView = useInView(seoRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Target,
      title: 'Content Strategy',
      description:
        'Develop a roadmap for content that achieves your business goals. Our content strategy services include audience research, topic ideation, keyword analysis, content gap identification, and editorial calendar development. We identify what content your audience needs at each stage of their journey and how to deliver it effectively. Strategy ensures every piece of content serves a purpose.',
    },
    {
      icon: Pencil,
      title: 'Blog Writing',
      description:
        'Attract organic traffic and establish expertise with professional blog content. We research, write, and optimize blog posts that rank in search results and engage your target audience. Topics are selected based on keyword opportunity, audience interest, and business relevance. Every post is optimized for SEO while remaining valuable and readable.',
    },
    {
      icon: FileText,
      title: 'Website Copywriting',
      description:
        'Convert visitors with website copy that communicates your value and drives action. We write homepage copy, service pages, about pages, and landing pages that clearly articulate what you offer and why customers should choose you. Our copywriting balances SEO optimization with persuasive messaging.',
    },
    {
      icon: Share2,
      title: 'Social Media Content',
      description:
        "Engage your audience with social content that builds community and drives business results. We create platform-specific content for Facebook, Instagram, LinkedIn, Twitter, and other networks. Our social content includes posts, graphics, videos, and stories designed for each platform's unique format and audience expectations.",
    },
    {
      icon: Mail,
      title: 'Email Content',
      description:
        'Nurture leads and retain customers with email content that gets opened and acted upon. We write email sequences, newsletters, promotional campaigns, and automated workflows. Our email content is designed for deliverability, engagement, and conversion.',
    },
    {
      icon: Video,
      title: 'Video Scripts & Content',
      description:
        'Create compelling video content with professional scripts and planning. We develop concepts, write scripts, and plan video content for testimonials, explainers, social media, and marketing campaigns. Video content engages audiences more effectively than text alone.',
    },
  ];

  const faqs = [
    {
      question: 'How much does content marketing cost?',
      answer:
        'Blog posts typically range from $200-500 each depending on length and complexity. Monthly content retainers start at $1,000 for ongoing content production. We provide custom quotes based on your content needs.',
    },
    {
      question: 'How often should we publish new content?',
      answer:
        "Consistency matters more than volume. For most businesses, 2-4 quality blog posts per month is sustainable and effective. We'll recommend frequency based on your resources and competitive landscape.",
    },
    {
      question: 'How long until content marketing shows results?',
      answer:
        'Content marketing is a long-term strategy. Individual posts may rank within weeks, but building significant organic traffic typically takes 6-12 months of consistent effort. The results compound over time.',
    },
    {
      question: 'Do you write content for any industry?',
      answer:
        "We've written content across dozens of industries. For technical topics, we research thoroughly and can work with your subject matter experts to ensure accuracy. We'll tell you upfront if a topic is outside our capabilities.",
    },
    {
      question: 'Can you write in our brand voice?',
      answer:
        'Absolutely. We develop brand voice guidelines and adapt our writing to match your existing tone and style. Consistency across all content is essential.',
    },
    {
      question: 'Who owns the content you create?',
      answer:
        'You do. All content we create belongs to you completely. We never retain rights or republish client content elsewhere.',
    },
  ];

  return (
    <>
      <SEO
        title="Content Marketing Services | SEO Blog Writing & Strategy | ThinkMents"
        description="Strategic content that ranks and converts since 2002. Blog writing, content strategy, email campaigns, video scripts. 1,000+ articles with top 10 rankings."
        url="/content-marketing"
        type="website"
      />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1080&fit=crop)',
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
                <span className="text-white">Content Marketing</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                CONTENT EXPERTS SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Content That Ranks, Engages & Converts
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Strategic content marketing that drives organic traffic and builds authority
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '1,000+', label: 'Articles Written' },
                  { stat: 'Top 10', label: 'Average Rankings' },
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '3x', label: 'More Leads' },
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
                  <Link to="/free-consultation">Get Content Strategy</Link>
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
                Content is the fuel that powers modern digital marketing. Every search result,
                social post, email campaign, and advertisement depends on compelling content that
                attracts, engages, and converts your audience.{' '}
                <strong>
                  ThinkMents has been creating strategic content for businesses since 2002—long
                  before "content marketing" became a buzzword.
                </strong>{' '}
                With over 20 years of experience, we understand that effective content isn't just
                well-written—it's strategically designed to achieve specific business goals. Whether
                you need blog posts that rank in search, social content that engages, or sales copy
                that converts, our content marketing services deliver measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Content Marketing Matters */}
      <section ref={whyMattersRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyMattersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Power of Strategic Content
              </h2>
              <p className="text-xl text-gray-600">
                Content marketing delivers results that traditional advertising can't match
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  stat: '62%',
                  label: 'less cost than traditional marketing while generating 3x more leads',
                },
                { stat: '67%', label: 'more leads produced by companies with blogs' },
                {
                  stat: '70%',
                  label: 'of consumers prefer learning about products through content vs ads',
                },
                { stat: '97%', label: 'more links to websites that blog regularly' },
                { stat: '6x', label: 'higher conversion rate for content marketing' },
                {
                  stat: '60%',
                  label: 'feel more positive about a company after reading custom content',
                },
              ].map((stat, idx) => (
                <Card key={idx} className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">{stat.stat}</div>
                    <p className="text-gray-700 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>
                  Unlike advertising that stops working when you stop paying, content continues
                  generating traffic, leads, and sales long after it's published.
                </strong>{' '}
                A blog post written today can drive leads for years.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Content also builds trust and authority. When you consistently provide valuable
                information, you position your business as the expert in your field. Customers
                prefer buying from companies they trust—and content builds that trust before you
                ever speak to a prospect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  Strategic content marketing creates a compounding asset that appreciates over
                  time, delivering increasing returns on your initial investment.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Comprehensive Content Services
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#00B4D8]">
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
        </div>
      </section>

      {/* Process */}
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
                How We Create Content That Performs
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Research & Strategy',
                  items: [
                    'Audience analysis and persona development',
                    'Keyword and topic research',
                    'Competitive content analysis',
                    'Content gap identification',
                    'Editorial calendar creation',
                  ],
                },
                {
                  title: 'Creation',
                  items: [
                    'Expert research and fact-checking',
                    'Professional writing and editing',
                    'SEO optimization throughout',
                    'Visual asset coordination',
                    'Multiple revision rounds',
                  ],
                },
                {
                  title: 'Optimization',
                  items: [
                    'Search engine optimization',
                    'Readability enhancement',
                    'Call-to-action placement',
                    'Internal linking strategy',
                    'Meta data optimization',
                  ],
                },
                {
                  title: 'Publication & Promotion',
                  items: [
                    'Strategic timing and scheduling',
                    'Social media distribution',
                    'Email promotion',
                    'Outreach for amplification',
                  ],
                },
                {
                  title: 'Analysis & Refinement',
                  items: [
                    'Performance tracking',
                    'Engagement analysis',
                    'Conversion attribution',
                    'Content updates and refreshes',
                    'Strategy refinement based on results',
                  ],
                },
              ].map((phase, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl text-[#00B4D8] mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                          <span className="text-white/90 text-sm">{item}</span>
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

      {/* Content Types */}
      <section ref={typesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Lightbulb className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Content for Every Purpose
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                <strong>We create a full range of content types:</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Blog posts and articles',
                  'Website pages and landing pages',
                  'Case studies and success stories',
                  'White papers and ebooks',
                  'Email campaigns and newsletters',
                  'Social media posts and campaigns',
                  'Video scripts and storyboards',
                  'Infographics and visual content',
                  'Press releases and announcements',
                  'Product descriptions',
                  'Sales collateral and brochures',
                  'FAQ content',
                  'How-to guides and tutorials',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mt-6">
                Each content type serves different purposes in your marketing funnel. We help you
                determine which types will be most effective for your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content for SEO */}
      <section ref={seoRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSeoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Search className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Content That Ranks
              </h2>
              <p className="text-xl text-gray-600">Great content is essential for SEO success</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Our SEO content approach includes:</strong>
              </p>
              <div className="space-y-3">
                {[
                  'Keyword research to identify opportunities',
                  'Search intent analysis to match content to queries',
                  'Comprehensive coverage that satisfies user needs',
                  'Strategic internal linking',
                  'Optimized titles, headers, and meta descriptions',
                  'Regular content refreshes to maintain rankings',
                  'Pillar content and topic cluster strategies',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mt-6">
                <strong>
                  We create content that ranks in search results by focusing on what users actually
                  want to know, then optimizing for how search engines evaluate quality and
                  relevance.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 bg-gray-50">
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
                  to="/social-media"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Social Media <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/blog" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Blog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/strategic-consulting"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Strategic Consulting <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  All Services <ArrowRight className="w-4 h-4" />
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
              Ready to Fuel Your Marketing with Great Content?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's develop a content strategy that attracts, engages, and converts your target
              audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Content Consultation
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
                <span>20+ Years Content Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>SEO-Optimized Writing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Results-Focused Strategy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
