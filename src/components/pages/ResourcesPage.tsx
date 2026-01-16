import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  BookOpen,
  FileText,
  Search,
  Calculator,
  CheckSquare,
  Download,
  ArrowRight,
  Gauge,
  TrendingUp,
  ChevronRight,
  Mail,
  FileCheck,
  Award,
  Clock,
  Users,
  Zap,
  HelpCircle,
  Star,
  Phone,
  Lightbulb,
  Target,
  Globe,
  Share2,
  Code,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import SEO from '../SEO';

export default function ResourcesPage() {
  const [email, setEmail] = useState('');
  
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const categoriesRef = useRef(null);
  const featuredRef = useRef(null);
  const toolsRef = useRef(null);
  const educationalRef = useRef(null);
  const faqRef = useRef(null);
  const requestRef = useRef(null);
  const newsletterRef = useRef(null);
  const whyShareRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isCategoriesInView = useInView(categoriesRef, { once: true });
  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isToolsInView = useInView(toolsRef, { once: true });
  const isEducationalInView = useInView(educationalRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isRequestInView = useInView(requestRef, { once: true });
  const isNewsletterInView = useInView(newsletterRef, { once: true });
  const isWhyShareInView = useInView(whyShareRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const categories = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Guides to improving your search rankings, from beginner basics to advanced strategies. Learn keyword research, on-page optimization, link building, local SEO, and technical SEO fundamentals.',
      link: '/marketing-seo'
    },
    {
      icon: Star,
      title: 'Google Business Profile',
      description: 'Everything you need to optimize your Google Business Profile and dominate local search. Setup guides, optimization checklists, review strategies, and posting best practices.',
      link: '/google-business-profile'
    },
    {
      icon: Globe,
      title: 'Website & Development',
      description: 'Resources for building and improving your website. Design principles, development best practices, speed optimization, and user experience guidelines.',
      link: '/web-development'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Guides to running effective ad campaigns on Google, Facebook, Instagram, and other platforms. Budget planning, targeting strategies, ad creation, and optimization tips.',
      link: '/paid-advertising'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategies for building your social presence and engaging your audience. Platform-specific guides, content calendars, and engagement tactics.',
      link: '/social-media'
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Resources for creating content that attracts and converts customers. Blog writing guides, content strategy frameworks, and editorial calendar templates.',
      link: '/content-marketing'
    }
  ];

  const featuredResources = [
    {
      title: 'SEO Starter Guide',
      description: 'A comprehensive introduction to search engine optimization for business owners. Learn the fundamentals of how search works and what you can do to improve visibility.'
    },
    {
      title: 'Google Business Profile Optimization Checklist',
      description: 'Step-by-step checklist to ensure your GBP is fully optimized. Covers every field, setting, and best practice for maximum local visibility.'
    },
    {
      title: 'Website Performance Audit Guide',
      description: 'Learn how to evaluate your website\'s speed, mobile-friendliness, and technical health. Includes tools and benchmarks for assessment.'
    },
    {
      title: 'Content Calendar Template',
      description: 'Downloadable template for planning your content marketing. Organize blog posts, social media, and campaigns in one place.'
    },
    {
      title: 'Local SEO Checklist',
      description: 'Complete checklist for optimizing your business for local search. Covers website optimization, citations, reviews, and local content.'
    }
  ];

  const faqs = [
    {
      question: 'Are all your resources free?',
      answer: 'Yes. All guides, templates, tools, and educational content are completely free. We believe in providing value and building relationships.'
    },
    {
      question: 'How often do you add new resources?',
      answer: 'We regularly add new content based on industry changes, common client questions, and emerging topics. Check back often or subscribe to our newsletter for updates.'
    },
    {
      question: 'Can I share your resources with others?',
      answer: 'Absolutely! We encourage sharing. Just please credit ThinkMents and link back to the original resource.'
    },
    {
      question: 'I have a question that\'s not covered in your resources. Can I ask?',
      answer: 'Of course. Contact us with your question and we\'ll do our best to help—or point you toward resources that can.'
    },
    {
      question: 'Do you offer more in-depth help beyond these resources?',
      answer: 'Yes. If you need personalized guidance or implementation help, our services and consulting can take you further.'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing! We'll send new resources to ${email}`);
    setEmail('');
  };

  return (
    <>
      <SEO
        title="Free Marketing Resources, Tools & Guides | ThinkMents"
        description="Free digital marketing resources since 2002. SEO guides, templates, tools, and educational content. Actionable insights to help your business grow."
        url="/resources"
        type="website"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#00B4D8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1E3A5F]">Resources</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative py-16 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#0F2942]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
              FREE RESOURCES SINCE 2002
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Marketing Resources & Tools
            </h1>

            <p className="text-lg md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-8">
              Actionable guides, templates, and tools to help your business grow online
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { stat: '100+', label: 'Free Resources' },
                { stat: '20+', label: 'Years Experience' },
                { stat: 'Free', label: 'Always' },
                { stat: 'Updated', label: 'Regularly' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">
                    {item.stat}
                  </div>
                  <div className="text-white/80 text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                Knowledge is power—especially when it comes to growing your business online. <strong>ThinkMents' Resource Center is your go-to destination for actionable digital marketing insights, guides, templates, and tools.</strong> We've been helping businesses navigate the digital landscape since 2002, and we believe in sharing what we've learned. Whether you're looking to understand SEO basics, improve your social media strategy, or troubleshoot a technical issue, our resources are designed to help you succeed. Browse our collection of guides, tools, and educational content—all free and created by our team of experienced marketers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section ref={categoriesRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCategoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Explore Our Resources by Topic
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6">
                    <category.icon className="w-10 h-10 text-[#00B4D8] mb-4" />
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{category.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">{category.description}</p>
                    <Link to={category.link} className="text-[#00B4D8] hover:underline text-sm flex items-center gap-1">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section ref={featuredRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Featured Guides & Downloads
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {featuredResources.map((resource, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Download className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <h3 className="text-lg text-[#1E3A5F]">{resource.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 mb-4">
                Check our blog for the latest guides, tips, and industry updates
              </p>
              <Link to="/blog">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  Visit Our Blog
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section ref={toolsRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isToolsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Zap className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Free Tools & Calculators
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: TrendingUp, title: 'ROI Calculator', description: 'Estimate the potential return on your digital marketing investment. Input your numbers and see projected results from SEO, PPC, and other channels.' },
                { icon: Gauge, title: 'Website Speed Test', description: 'Check how fast your website loads and identify performance issues. Speed directly impacts user experience and search rankings.' },
                { icon: Search, title: 'SEO Audit Tool', description: 'Quick assessment of your website\'s basic SEO health. Identifies common issues with titles, meta descriptions, and technical elements.' },
                { icon: Star, title: 'Review Link Generator', description: 'Create a direct link to your Google review page. Make it easy for customers to leave reviews by sharing a simple link.' }
              ].map((tool, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <tool.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg text-[#1E3A5F]">{tool.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl text-[#1E3A5F] mb-4">We recommend these external tools as well:</h3>
              <ul className="space-y-2">
                {[
                  'Google Search Console (free from Google)',
                  'Google Analytics (free from Google)',
                  'Google PageSpeed Insights (free from Google)',
                  'GTmetrix for performance testing',
                  'Screaming Frog for SEO auditing'
                ].map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                    <span className="text-gray-700">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educational Content */}
      <section ref={educationalRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isEducationalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Lightbulb className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Learn Digital Marketing
              </h2>
              <p className="text-xl text-gray-600">
                Whether you're a business owner or marketer, our content helps you grow
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Beginner Guides', description: 'Start here if you\'re new to digital marketing. We explain concepts in plain English without jargon or assumptions about prior knowledge.' },
                { title: 'How-To Tutorials', description: 'Step-by-step instructions for specific tasks. Learn to set up Google Analytics, optimize a page for SEO, create effective ads, and more.' },
                { title: 'Strategy Frameworks', description: 'Conceptual guides that help you think strategically about marketing. Understand how channels work together and how to prioritize efforts.' },
                { title: 'Industry Insights', description: 'Stay current with changes in digital marketing. Algorithm updates, new platform features, and emerging trends explained.' }
              ].map((content, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{content.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{content.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>Learn from real examples.</strong> See how we've solved challenges for businesses like yours.
              </p>
              <Link to="/case-studies">
                <Button variant="outline" className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8">
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <HelpCircle className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/services" className="text-[#00B4D8] hover:underline flex items-center justify-center gap-1">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Request */}
      <section ref={requestRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRequestInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white rounded-lg shadow-lg p-8 md:p-10">
              <MessageCircle className="w-12 h-12 text-[#00B4D8] mb-4" />
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Request a Resource
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Don't see what you're looking for? Let us know what topics, guides, or tools would be helpful for your business. We're constantly creating new resources based on what our community needs.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <p className="text-white/90 mb-3">Common requests we hear:</p>
                <ul className="space-y-2">
                  {[
                    'Industry-specific marketing guides',
                    'Template downloads for specific tasks',
                    'Video tutorials for complex topics',
                    'Comparison guides for tools and platforms'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact-us">
                <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8">
                  Send Us Your Suggestion
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section ref={newsletterRef} className="py-16 md:py-20 bg-[#FF6B35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isNewsletterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Mail className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Stay Updated with Marketing Insights
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Get the latest digital marketing tips, guides, and industry updates delivered to your inbox
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-white/90 mb-4">Our newsletter includes:</p>
              <ul className="space-y-2 text-white/90 text-left">
                {[
                  'New resource announcements',
                  'Quick tips you can implement immediately',
                  'Industry news and algorithm updates',
                  'Exclusive content not published elsewhere',
                  'No spam, just valuable content'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-6 py-4 rounded-lg text-gray-900 text-lg focus:ring-4 focus:ring-white/30 focus:outline-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white px-8 py-4"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            <p className="text-white/80 text-sm mt-4">
              We respect your inbox. Expect 2-4 emails per month. Unsubscribe anytime.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/90">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Thousands of Subscribers</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>2-4 Emails/Month</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Actionable Content</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Share */}
      <section ref={whyShareRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyShareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why We Give Away Knowledge
              </h2>
              <p className="text-xl text-gray-600">
                Some agencies guard their knowledge like trade secrets. We take a different approach.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl text-[#1E3A5F] mb-4">We share resources because:</h3>
              <ul className="space-y-3">
                {[
                  'Informed clients make better partners',
                  'Businesses that understand marketing get better results',
                  'Providing value builds trust and relationships',
                  'We can\'t work with everyone, but we can help everyone learn',
                  'The best clients find us because our content helped them'
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                <strong>Our resources reflect over 20 years of experience helping businesses grow.</strong> We hope they help you—whether you ever become a client or not.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-16 md:py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Need More Than Resources?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              If you're ready for hands-on help implementing what you've learned, we're here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Consultation
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
                <span>Free Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Expert Guidance Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}