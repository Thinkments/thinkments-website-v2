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
  Gauge,
  Shield,
  Code,
  Search,
  Globe,
  Plug,
  Server,
  Settings,
  TrendingUp,
  Lock,
  Zap,
  AlertTriangle,
  HelpCircle,
  Award,
  BarChart3,
  FileText,
} from 'lucide-react';
import SEO from '../SEO';

export default function TechnicalServicesPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyMattersRef = useRef(null);
  const servicesRef = useRef(null);
  const auditRef = useRef(null);
  const coreWebRef = useRef(null);
  const securityRef = useRef(null);
  const problemsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyMattersInView = useInView(whyMattersRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isAuditInView = useInView(auditRef, { once: true });
  const isCoreWebInView = useInView(coreWebRef, { once: true });
  const isSecurityInView = useInView(securityRef, { once: true });
  const isProblemsInView = useInView(problemsRef, { once: true });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Gauge,
      title: 'Website Performance Optimization',
      description:
        "Speed is money. We analyze and optimize every element affecting your website's load time—server response, image compression, code efficiency, caching strategies, CDN implementation, and Core Web Vitals. Our performance optimization typically improves load times by 40-70%, directly impacting user experience, conversion rates, and search rankings. We provide before/after metrics and ongoing monitoring to ensure improvements stick.",
    },
    {
      icon: Shield,
      title: 'Website Security Services',
      description:
        'Protect your business and customers from cyber threats. Our security services include vulnerability assessments, malware scanning and removal, SSL implementation, firewall configuration, security hardening, and ongoing monitoring. We implement security best practices that protect your website without impacting performance or user experience. When breaches occur, we provide rapid incident response and recovery.',
    },
    {
      icon: Search,
      title: 'Technical SEO',
      description:
        "Search engines can't rank what they can't crawl. Our technical SEO services ensure search engines can properly discover, crawl, index, and rank your content. We address site architecture, URL structure, canonical tags, redirects, structured data, XML sitemaps, robots.txt configuration, and crawl budget optimization. Technical SEO creates the foundation for all other SEO efforts.",
    },
    {
      icon: Globe,
      title: 'Website Migrations',
      description:
        "Changing domains, platforms, or hosts is risky—but sometimes necessary. We manage website migrations that preserve your SEO equity, maintain functionality, and minimize downtime. Our migration process includes comprehensive redirect mapping, content verification, technical testing, and post-migration monitoring. We've successfully migrated sites without traffic loss when others predicted disaster.",
    },
    {
      icon: Plug,
      title: 'API Integrations & Development',
      description:
        'Connect your website with the tools and platforms that power your business. We develop custom API integrations linking your website to CRMs, marketing automation platforms, payment processors, inventory systems, and third-party services. Our integrations automate workflows, eliminate manual data entry, and create seamless experiences for your customers and team.',
    },
    {
      icon: Code,
      title: 'Custom Development & Functionality',
      description:
        "When off-the-shelf solutions don't fit your needs, we build custom functionality. Our development team creates calculators, configurators, booking systems, member portals, custom forms, and specialized features that differentiate your business. We develop solutions that work within your existing platform or as standalone applications.",
    },
    {
      icon: Settings,
      title: 'Website Maintenance & Support',
      description:
        'Keep your website secure, updated, and performing optimally without the hassle. Our maintenance services include software updates, security monitoring, daily backups, uptime monitoring, performance optimization, and priority support. We handle the technical details so you can focus on running your business.',
    },
    {
      icon: Server,
      title: 'Hosting & Infrastructure',
      description:
        'Your hosting environment directly impacts performance, security, and reliability. We evaluate your hosting needs, recommend appropriate solutions, and manage hosting environments for optimal results. From shared hosting for small sites to dedicated servers and cloud infrastructure for high-traffic applications, we match infrastructure to requirements.',
    },
  ];

  const faqs = [
    {
      question: 'How much do technical services cost?',
      answer:
        'Technical audits typically range from $500-2,000. Ongoing maintenance plans start at $200/month. Custom development and complex projects are quoted based on scope.',
    },
    {
      question: 'How quickly can you respond to emergencies?',
      answer:
        'For maintenance clients, we provide same-day response for critical issues. Non-emergency requests are typically addressed within 24-48 hours.',
    },
    {
      question: 'Do you work with all website platforms?',
      answer:
        "We have deep expertise in WordPress and React-based sites. We also work with Shopify, Webflow, and custom platforms. We'll let you know if a platform is outside our expertise.",
    },
    {
      question: 'Can you help if our site has been hacked?',
      answer:
        'Yes. We provide emergency malware removal and site recovery services. We clean the infection, identify how it happened, and implement protections to prevent recurrence.',
    },
    {
      question: 'Do you offer website hosting?',
      answer:
        "We recommend and help configure hosting but don't operate our own data centers. We can manage your hosting environment regardless of provider.",
    },
    {
      question: "What's included in maintenance plans?",
      answer:
        "Core inclusions are software updates, security monitoring, daily backups, uptime monitoring, and support hours. Plans are customized based on your site's complexity and needs.",
    },
    {
      question: 'Can you improve our page speed?',
      answer:
        "Almost always. We consistently achieve 40-70% improvements in load times. We'll assess your site and provide realistic expectations before starting.",
    },
  ];

  return (
    <>
      <SEO
        title="Technical Services | Performance, Security & Technical SEO | ThinkMents"
        description="Technical excellence since 2002. Performance optimization, security hardening, technical SEO, migrations, integrations. 40-70% faster load times. Same-day emergency support."
        url="/technical-services"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080&fit=crop)',
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
                <span className="text-white">Technical Services</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                TECHNICAL EXCELLENCE SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Technical Services That Power Performance
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Fast, secure, reliable—the technical foundation your marketing deserves
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '40-70%', label: 'Faster Load Times' },
                  { stat: 'Same Day', label: 'Emergency Response' },
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '100%', label: 'Security Focused' },
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
                  <Link to="/free-consultation">Get Technical Audit</Link>
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
                Behind every great website and digital marketing campaign is a solid technical
                foundation.{' '}
                <strong>
                  ThinkMents' Technical Services ensure your digital infrastructure performs
                  flawlessly—fast, secure, reliable, and optimized for both users and search
                  engines.
                </strong>{' '}
                Since 2002, we've been solving complex technical challenges that other agencies
                can't handle. Our team combines deep technical expertise with marketing knowledge,
                understanding that technical decisions directly impact business results. Whether you
                need a performance audit, security hardening, complex integrations, or ongoing
                technical support, we have the skills to keep your digital presence running
                smoothly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Technical Excellence Matters */}
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
                The Business Impact of Technical Performance
              </h2>
              <p className="text-xl text-gray-600">
                Technical issues silently kill your marketing results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { stat: '7%', label: 'conversion reduction per 1-second delay' },
                { stat: '53%', label: 'abandon sites taking over 3 seconds' },
                { stat: '$200K', label: 'average cost of security breach' },
                { stat: '$5.6K', label: 'per minute of website downtime' },
                { stat: '88%', label: "won't return after bad experience" },
                { stat: 'Google', label: 'uses speed as ranking factor' },
              ].map((item, idx) => (
                <Card key={idx} className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">{item.stat}</div>
                    <p className="text-gray-700">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                You can have the best marketing strategy in the world, but if your website is slow,
                insecure, or unreliable, you're throwing money away.{' '}
                <strong>
                  Technical problems frustrate users, hurt search rankings, and undermine trust.
                </strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Most agencies focus only on surface-level marketing. ThinkMents goes deeper—ensuring
                the technical foundation supports and amplifies your marketing investment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  Our technical services aren't just about fixing problems. They're about creating
                  competitive advantage through superior digital infrastructure that loads faster,
                  converts better, and ranks higher than your competitors.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Due to length, I'll continue in the same file */}
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
              Comprehensive Technical Services
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/web-development">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  Web Development Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/widgets-integrations">
                <Button
                  variant="outline"
                  className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8"
                >
                  Widgets & Integrations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Audit Process, Core Web Vitals, Security, Problems, Why Choose, FAQ, CTA - continuing... */}
      <section
        ref={auditRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAuditInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <FileText className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Technical Audit Process
              </h2>
              <p className="text-xl text-white/90">
                We begin most engagements with a comprehensive audit
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Performance Analysis',
                  items: [
                    'Page speed testing across devices',
                    'Core Web Vitals assessment (LCP, FID, CLS)',
                    'Server response time analysis',
                    'Resource loading optimization',
                    'Third-party script impact',
                  ],
                },
                {
                  title: 'Security Assessment',
                  items: [
                    'Vulnerability scanning',
                    'SSL/TLS configuration review',
                    'Authentication and access controls',
                    'Data protection practices',
                    'Plugin and software currency',
                  ],
                },
                {
                  title: 'Technical SEO Review',
                  items: [
                    'Crawlability and indexation',
                    'Site architecture evaluation',
                    'URL structure assessment',
                    'Redirect chain identification',
                    'Structured data validation',
                    'Mobile usability testing',
                  ],
                },
                {
                  title: 'Infrastructure Evaluation',
                  items: [
                    'Hosting environment assessment',
                    'Backup and recovery capabilities',
                    'Uptime history review',
                    'Scalability considerations',
                  ],
                },
              ].map((section, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl text-[#00B4D8] mb-4">{section.title}</h3>
                    <ul className="space-y-2 text-white/90">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-[#FF6B35] rounded-lg p-6">
              <p className="text-white text-lg leading-relaxed text-center">
                <strong>
                  You receive a detailed report with prioritized recommendations, expected impact,
                  and implementation guidance.
                </strong>{' '}
                We can then implement fixes ourselves or guide your team through the process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Web Vitals, Security, Problems sections - continuing...*/}
      <section ref={coreWebRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCoreWebInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <BarChart3 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Meeting Google's Technical Standards
              </h2>
              <p className="text-xl text-gray-600">
                Core Web Vitals have become essential ranking factors
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Largest Contentful Paint (LCP)',
                  description: 'How quickly the main content loads. Target: under 2.5 seconds.',
                },
                {
                  title: 'First Input Delay (FID)',
                  description:
                    'How quickly the page responds to user interaction. Target: under 100 milliseconds.',
                },
                {
                  title: 'Cumulative Layout Shift (CLS)',
                  description: 'How much the page layout shifts during loading. Target: under 0.1.',
                },
              ].map((metric, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-2">{metric.title}</h3>
                    <p className="text-gray-700">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Many websites fail these benchmarks—and pay the price in search rankings and user
                experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  Passing Core Web Vitals isn't just about pleasing Google—it's about providing the
                  fast, stable experience users expect.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={securityRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSecurityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Lock className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Comprehensive Website Security
              </h2>
              <p className="text-xl text-gray-600">Cyber threats are constant and evolving</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Prevention',
                  items: [
                    'SSL/TLS encryption',
                    'Web application firewall (WAF)',
                    'Brute force protection',
                    'File integrity monitoring',
                    'Security headers',
                    'Regular updates',
                  ],
                },
                {
                  title: 'Detection',
                  items: [
                    '24/7 malware scanning',
                    'Suspicious activity monitoring',
                    'Unauthorized change detection',
                    'Vulnerability identification',
                  ],
                },
                {
                  title: 'Response',
                  items: [
                    'Rapid incident response',
                    'Malware removal and cleanup',
                    'Blacklist removal assistance',
                    'Post-incident hardening',
                  ],
                },
              ].map((category, idx) => (
                <Card key={idx} className="border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-1" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                For businesses handling sensitive data—healthcare, legal, financial—we ensure
                compliance with relevant security standards.{' '}
                <strong>
                  Security isn't a one-time project. Our ongoing monitoring keeps your defenses
                  current against evolving threats.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={problemsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <AlertTriangle className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Technical Issues We Fix Every Day
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Slow Loading Websites',
                  description:
                    'Bloated images, inefficient code, poor hosting, unoptimized databases—we identify and eliminate speed bottlenecks.',
                },
                {
                  title: 'Hacked Websites',
                  description:
                    'Malware infections, defacements, spam injections—we clean compromised sites and prevent reinfection.',
                },
                {
                  title: 'SEO Visibility Problems',
                  description:
                    'Crawl errors, indexation issues, broken redirects, duplicate content—we fix technical SEO problems that tank rankings.',
                },
                {
                  title: 'Broken Functionality',
                  description:
                    "Forms that don't submit, integrations that stopped working, features that broke after updates—we diagnose and repair.",
                },
                {
                  title: 'Mobile Problems',
                  description:
                    "Sites that don't work on phones, responsive design failures, mobile speed issues—we make your site work everywhere.",
                },
                {
                  title: 'Migration Disasters',
                  description:
                    'Traffic drops after redesigns, lost pages, broken links—we recover from failed migrations and prevent future problems.',
                },
                {
                  title: 'Plugin/Theme Conflicts',
                  description:
                    'WordPress sites with mysterious errors caused by incompatible components—we untangle the mess.',
                },
              ].map((problem, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{problem.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg text-gray-700">
                <strong>
                  If you have a technical problem, chances are we've solved it before.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={whyChooseRef} className="py-20 bg-white">
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
                Why ThinkMents for Technical Services
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: '20+ Years Technical Experience',
                  description:
                    "We've been solving technical problems since dial-up internet. There's no challenge we haven't encountered.",
                },
                {
                  title: 'Marketing-Aware Technical Team',
                  description:
                    'We understand how technical decisions impact marketing results—a rare combination.',
                },
                {
                  title: 'Responsive Support',
                  description:
                    "When technical emergencies arise, we respond quickly. Your business can't wait days for help.",
                },
                {
                  title: 'Transparent Communication',
                  description:
                    'We explain technical issues in plain English and keep you informed throughout the process.',
                },
                {
                  title: 'Long-Term Partnership',
                  description: "We're here for ongoing support, not just one-time fixes.",
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
          </motion.div>
        </div>
      </section>

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
                  to="/analytics-reporting"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Analytics & Reporting <ArrowRight className="w-4 h-4" />
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
              Ready to Fix Your Technical Foundation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's identify and resolve the technical issues holding your website back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Technical Consultation
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
                <span>20+ Years Technical Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Same-Day Emergency Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Marketing-Aware Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
