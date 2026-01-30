import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  Globe,
  BarChart3,
  CheckCircle,
  Users,
  Phone,
  ChevronRight,
  FileText,
  Code,
  Link2,
  ShoppingCart,
  Building2,
  Zap,
  Award,
  Clock,
  DollarSign,
} from 'lucide-react';
import SEO from '../SEO';

export default function StrategicSEOPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const strategicRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const timelineRef = useRef(null);
  const whySEORef = useRef(null);
  const whatSetsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isStrategicInView = useInView(strategicRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isTimelineInView = useInView(timelineRef, { once: true });
  const isWhySEOInView = useInView(whySEORef, { once: true });
  const isWhatSetsInView = useInView(whatSetsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Target,
      title: 'SEO Strategy Development',
      description:
        "Every successful SEO campaign starts with a comprehensive strategy. We conduct thorough market research, competitive analysis, and keyword opportunity assessment to build a roadmap for organic growth. Our strategies identify quick wins for early momentum, medium-term priorities for sustained growth, and long-term investments that build lasting competitive advantages. You receive a clear plan with timelines, priorities, and expected outcomes—not a black box of mysterious 'SEO work.'",
    },
    {
      icon: Code,
      title: 'Technical SEO',
      description:
        "Your website's technical foundation determines whether search engines can properly crawl, index, and rank your content. Our technical SEO audits examine site architecture, page speed, mobile usability, crawlability, indexation, structured data, and Core Web Vitals. We identify and fix issues that prevent your site from achieving its ranking potential—from broken links and redirect chains to duplicate content and thin pages. Technical excellence creates the foundation for all other SEO efforts.",
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      description:
        'Optimize every page to communicate relevance and value to search engines. Our on-page optimization includes title tags, meta descriptions, header structure, content optimization, internal linking, image optimization, and schema markup. We ensure each page targets appropriate keywords while maintaining natural readability for human visitors. On-page optimization transforms good content into content that ranks.',
    },
    {
      icon: Users,
      title: 'Content Strategy & Creation',
      description:
        'Content fuels SEO success. We develop content strategies that fill gaps in your current coverage, target high-opportunity keywords, and establish topical authority in your space. Our content creation includes blog posts, service pages, resource guides, FAQs, and pillar content that attracts links and establishes expertise. Every piece serves a strategic purpose in your overall SEO plan—no filler content that wastes resources.',
    },
    {
      icon: Link2,
      title: 'Link Building',
      description:
        'Quality backlinks remain one of the strongest ranking factors. Our link building focuses on earning relevant, authoritative links through digital PR, content marketing, resource link building, and strategic outreach. We pursue links that drive both rankings and referral traffic—not spammy links that risk penalties. Our white-hat approach builds sustainable authority that strengthens over time.',
    },
    {
      icon: Globe,
      title: 'Local SEO',
      description:
        'For businesses serving geographic markets, local SEO captures customers searching with local intent. We optimize Google Business Profiles, build local citations, create location-specific content, and build local authority. Our local SEO strategies ensure you appear in the Local 3-Pack and local organic results when customers search for your services in your area.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce SEO',
      description:
        'Online stores face unique SEO challenges: product page optimization, category structure, faceted navigation, inventory changes, and competition from major retailers. Our e-commerce SEO strategies address these challenges with optimized product pages, strategic category targeting, technical solutions for large catalogs, and content strategies that compete with Amazon and big-box retailers.',
    },
    {
      icon: Building2,
      title: 'Enterprise SEO',
      description:
        'Large websites with thousands or millions of pages require scalable SEO approaches. We develop enterprise SEO strategies that prioritize high-impact pages, implement templated optimizations, manage technical complexity, and coordinate across teams. Our enterprise experience includes working with sites across multiple domains, languages, and markets.',
    },
  ];

  const faqs = [
    {
      question: 'How much does SEO cost?',
      answer:
        'Our SEO services typically range from $1,500-$5,000+ per month depending on competition level, website size, and goals. We provide custom quotes based on your specific situation.',
    },
    {
      question: 'How long until we see results?',
      answer:
        'Most clients see meaningful ranking improvements within 3-4 months, with significant traffic and lead growth by months 6-9. SEO is a long-term investment that compounds over time.',
    },
    {
      question: 'Do you guarantee rankings?',
      answer:
        "No ethical SEO provider can guarantee specific rankings—Google's algorithm considers hundreds of factors outside anyone's control. We guarantee our effort, expertise, and proven processes that consistently deliver results.",
    },
    {
      question: "What if we've been penalized by Google?",
      answer:
        'We conduct penalty assessments and recovery services. If your site has been penalized, we identify the cause, fix the issues, and submit reconsideration requests to restore your rankings.',
    },
    {
      question: 'Do you work with any industry?',
      answer:
        "We've delivered SEO results across dozens of industries including healthcare, legal, home services, e-commerce, professional services, and more. We research your specific industry before developing strategies.",
    },
    {
      question: 'Can we do SEO ourselves?',
      answer:
        'Basic SEO is possible to DIY, but strategic SEO requires significant expertise and time investment. Most businesses find that professional SEO delivers better ROI than internal efforts.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'We track rankings, organic traffic, conversions, leads, and revenue attributed to organic search. Monthly reports show exactly how SEO is impacting your business.',
    },
  ];

  return (
    <>
      <SEO
        title="Strategic SEO Services | Organic Growth Strategy | ThinkMents"
        description="Dominate search results with comprehensive SEO strategies. 20+ years experience delivering sustainable rankings, qualified traffic, and measurable ROI through proven optimization."
        url="/strategic-seo"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1080&fit=crop)',
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
                <span className="text-white">Strategic SEO</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                20+ YEARS SEO EXPERIENCE
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Strategic SEO That Dominates Search Results
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Build a sustainable competitive advantage that delivers qualified leads month after
                month, year after year
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '53%', label: 'Traffic from Organic' },
                  { stat: '14.6%', label: 'SEO Lead Close Rate' },
                  { stat: '95%', label: 'Traffic on Page 1' },
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
                  <Link to="/free-consultation">Get Free SEO Audit</Link>
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
                Search Engine Optimization isn't just about rankings—it's about building a
                sustainable competitive advantage that delivers qualified leads month after month,
                year after year. Strategic SEO goes beyond basic optimization tactics to create
                comprehensive search visibility that dominates your market.{' '}
                <strong>
                  ThinkMents has been delivering strategic SEO results since 2002, long before
                  Google became the dominant search engine it is today.
                </strong>{' '}
                With over two decades of experience navigating algorithm updates, industry shifts,
                and evolving best practices, we develop SEO strategies that stand the test of time.
                Our clients don't just rank—they dominate their markets with sustainable organic
                visibility that compounds over time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes SEO Strategic */}
      <section ref={strategicRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStrategicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Difference Between Tactical and Strategic SEO
              </h2>
              <p className="text-xl text-gray-600">
                Many agencies focus on tactics—strategic SEO is fundamentally different
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-l-red-500">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Tactical SEO Asks:</h3>
                  <p className="text-gray-700 text-lg italic">"How do we rank for this keyword?"</p>
                </div>
                <div className="bg-gradient-to-br from-[#00B4D8]/10 to-[#1E3A5F]/10 rounded-lg p-6 border-l-4 border-l-[#00B4D8]">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Strategic SEO Asks:</h3>
                  <p className="text-gray-700 text-lg italic">
                    "How do we capture maximum market share from organic search?"
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                    Market Analysis
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    Understanding your total addressable market in search—every keyword, question,
                    and query your potential customers use throughout their buying journey.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                    Competitive Positioning
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    Analyzing where competitors are strong, where they're weak, and where
                    opportunities exist to capture market share.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                    Resource Allocation
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    Prioritizing efforts based on opportunity size, competition level, and business
                    impact—not just search volume.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                    Long-Term Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    Building SEO roadmaps that compound results over 12, 24, and 36 months rather
                    than chasing quick wins that fade.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                    Integration
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    Connecting SEO with content marketing, paid advertising, social media, and
                    overall business strategy for maximum impact.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white border-none">
              <CardContent className="p-8">
                <p className="text-xl leading-relaxed text-center">
                  <strong>
                    Strategic SEO transforms search from a marketing tactic into a business growth
                    engine.
                  </strong>
                </p>
              </CardContent>
            </Card>
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
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of SEO covered to ensure sustainable organic growth
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketing-seo">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  Learn More About Marketing & SEO
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/content-marketing">
                <Button
                  variant="outline"
                  className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8"
                >
                  Content Marketing Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Process */}
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
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Strategic SEO Process
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 1: Discovery & Analysis (Weeks 1-3)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Comprehensive technical SEO audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Keyword opportunity research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Competitive analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Content gap assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Backlink profile analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Current performance baseline</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 2: Strategy Development (Weeks 3-4)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Prioritized opportunity identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>12-month SEO roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Content strategy and calendar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Technical fix prioritization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Link building strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>KPI and goal setting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 3: Foundation Building (Months 1-3)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Technical issue resolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>On-page optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Site architecture improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Quick-win content creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Initial link building</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 4: Growth & Expansion (Months 4-8)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Ongoing content creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Sustained link building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>New keyword targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Conversion optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Performance monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-3">
                    Phase 5: Domination & Defense (Months 9-12+)
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Market share expansion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Competitive response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Algorithm update adaptation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Authority consolidation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Strategic refinement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-[#FF6B35] rounded-lg p-6">
              <p className="text-white text-lg leading-relaxed">
                <strong>
                  Throughout this process, you receive monthly reports showing rankings, traffic,
                  conversions, and ROI.
                </strong>{' '}
                We meet regularly to review progress and adjust strategies based on results and
                market changes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline & Expectations */}
      <section ref={timelineRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Clock className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Realistic SEO Expectations
              </h2>
              <p className="text-xl text-gray-600">
                SEO is a long-term investment, not instant gratification
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-gray-400">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Month 1-2: Foundation Work</h3>
                  <p className="text-gray-700">
                    Audits, fixes, strategy development. Traffic changes minimal.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-400">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Month 3-4: Early Movements</h3>
                  <p className="text-gray-700">
                    Early ranking movements for lower-competition keywords. Traffic beginning to
                    increase.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">
                    Month 5-6: Meaningful Improvements
                  </h3>
                  <p className="text-gray-700">
                    Meaningful ranking improvements for primary keywords. Noticeable traffic growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Month 7-9: Compounding Results</h3>
                  <p className="text-gray-700">
                    Compounding results as authority builds. Significant traffic and lead increases.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#FF6B35]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Month 10-12: Strong Rankings</h3>
                  <p className="text-gray-700">
                    Strong rankings for competitive keywords. Substantial organic traffic and
                    conversions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Year 2+: Market Domination</h3>
                  <p className="text-gray-700">
                    Market domination. Defending positions while expanding into new opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-red-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>We set realistic expectations from day one.</strong> Agencies promising
                page-one rankings in 30 days are either lying or using tactics that will eventually
                backfire. Sustainable SEO success requires patience and consistent effort—but the
                results are worth waiting for.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section ref={whySEORef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhySEOInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <BarChart3 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Business Case for Strategic SEO
              </h2>
              <p className="text-xl text-gray-600">
                Organic search drives results that other channels can't match
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">53%</div>
                  <p className="text-gray-700">of all website traffic comes from organic search</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">14.6%</div>
                  <p className="text-gray-700">SEO leads have a close rate vs. 1.7% for outbound</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">70-80%</div>
                  <p className="text-gray-700">
                    of users ignore paid ads, focusing on organic results
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">95%</div>
                  <p className="text-gray-700">First-page results capture of search traffic</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center md:col-span-2">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">27.6%</div>
                  <p className="text-gray-700">Position #1 gets of all clicks</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                The ROI of SEO typically exceeds other marketing channels because you're capturing
                demand that already exists—people actively searching for what you offer. Unlike
                interruption-based marketing, SEO connects you with customers at the moment of
                intent.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>
                  Strategic SEO builds an asset that appreciates over time, delivering increasing
                  returns on your initial investment.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section ref={whatSetsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhatSetsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why Choose ThinkMents for Strategic SEO
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">20+ Years of SEO Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We've practiced SEO since before Google was dominant—through every algorithm
                    update, industry shift, and best practice evolution. This experience means we
                    know what works long-term.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Transparent Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No black boxes or mysterious tactics. You understand exactly what we're doing
                    and why. Full access to data, regular communication, and clear reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Business-Focused Strategy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We care about leads and revenue, not just rankings. Our strategies prioritize
                    keywords and content that drive actual business results.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">White-Hat Only</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No shortcuts, no risky tactics, no purchased links. Our methods build
                    sustainable rankings that don't disappear with the next algorithm update.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Proven Results</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Case studies and testimonials from businesses across industries demonstrate our
                    ability to deliver measurable SEO results.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link to="/case-studies">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  View Our SEO Case Studies
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
              <p className="text-gray-600 mb-4">More questions about SEO?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/google-business-profile">
                  <Button
                    variant="outline"
                    className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                  >
                    Google Business Profile
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/analytics-reporting">
                  <Button
                    variant="outline"
                    className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                  >
                    Analytics & Reporting
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/technical-services">
                  <Button
                    variant="outline"
                    className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                  >
                    Technical Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
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
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Build Your Organic Growth Engine?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's develop an SEO strategy that dominates your market and delivers sustainable
              results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free SEO Consultation
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
                <span>20+ Years SEO Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>White-Hat Strategies Only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Proven Results Across Industries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
