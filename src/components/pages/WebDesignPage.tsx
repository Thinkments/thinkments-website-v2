import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  Search, 
  ShoppingCart, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  ChevronRight,
  Award,
  Target,
  Eye,
  Palette,
  Gauge,
  Accessibility,
  Layout,
  MousePointer,
  ShoppingBag,
  FileEdit,
  RefreshCw,
  Sparkles,
  Code,
  Shield,
  BarChart3,
  FolderOpen,
  Headphones
} from 'lucide-react';
import SEO from '../SEO';

export default function WebDesignPage() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const philosophyRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const includedRef = useRef(null);
  const portfolioRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });
  const isPhilosophyInView = useInView(philosophyRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isIncludedInView = useInView(includedRef, { once: true });
  const isPortfolioInView = useInView(portfolioRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const philosophyPrinciples = [
    {
      icon: Users,
      title: 'User-First Design',
      description: 'Every design decision starts with your customer. We research how your target audience browses, what they\'re looking for, and what motivates them to take action. Beautiful design means nothing if users can\'t find what they need.'
    },
    {
      icon: Target,
      title: 'Conversion-Focused',
      description: 'Pretty websites that don\'t generate leads are just expensive digital brochures. We design with conversion in mind—strategic placement of calls-to-action, trust signals, and user flows that guide visitors toward contact forms, phone calls, and purchases.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Approach',
      description: 'Over 60% of web traffic now comes from mobile devices. We design for smartphones first, then scale up to tablets and desktops. Your site will look and function perfectly on every screen size.'
    },
    {
      icon: Palette,
      title: 'Brand Alignment',
      description: 'Your website should feel like a natural extension of your brand. We ensure colors, typography, imagery, and messaging all work together to create a cohesive brand experience that builds recognition and trust.'
    },
    {
      icon: Gauge,
      title: 'Speed & Performance',
      description: 'Slow websites kill conversions. We optimize every element for fast loading times—compressing images, minimizing code, and using modern techniques to ensure your site loads in under 3 seconds.'
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      description: 'We design websites that everyone can use, including people with disabilities. This isn\'t just good ethics—it\'s good business and helps with SEO.'
    }
  ];

  const designServices = [
    {
      icon: Layout,
      title: 'Custom Website Design',
      description: 'Stand out from competitors with a website designed specifically for your business. Unlike template-based solutions, our custom designs are built from scratch to match your brand, serve your audience, and achieve your goals. We start with discovery and research, create wireframes and mockups for your approval, and then build a pixel-perfect final product. Every element is intentional—from color choices to button placement to imagery selection.',
      link: null
    },
    {
      icon: Monitor,
      title: 'Responsive Web Design',
      description: 'Your website must work flawlessly on every device—smartphones, tablets, laptops, and desktops. Our responsive designs automatically adapt to any screen size, providing an optimal experience whether someone visits from an iPhone or a 27-inch monitor. We test extensively across devices and browsers to ensure consistent functionality and appearance everywhere.',
      link: null
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Website Design',
      description: 'Sell products online with a professionally designed e-commerce website. We create online stores that make browsing enjoyable and checkout frictionless. Our e-commerce designs include product showcases, filtering and search functionality, secure payment integration, inventory management, and shipping calculations. We work with platforms like Shopify, WooCommerce, and custom solutions based on your needs.',
      link: null
    },
    {
      icon: FileEdit,
      title: 'Landing Page Design',
      description: 'Convert advertising traffic with high-performance landing pages. We design focused, single-purpose pages that align with your ad campaigns and drive specific actions—form submissions, phone calls, or purchases. Our landing pages consistently outperform industry benchmarks for conversion rates because we apply proven design principles and A/B testing.',
      link: null
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Is your current website outdated, slow, or not generating leads? We redesign existing websites to meet modern standards while preserving your SEO equity and brand recognition. Our redesign process includes a thorough audit of what\'s working, what isn\'t, and opportunities for improvement. We migrate your content, implement redirects, and launch a site that performs better in every measurable way.',
      link: null
    },
    {
      icon: MousePointer,
      title: 'UI/UX Design',
      description: 'Create intuitive, enjoyable user experiences that keep visitors engaged. Our UI/UX design services include user research, journey mapping, wireframing, prototyping, and usability testing. We identify friction points in your current experience and design solutions that make your website easier and more pleasant to use.',
      link: null
    }
  ];

  const processPhases = [
    {
      phase: 'Phase 1: Discovery',
      timeline: 'Week 1',
      items: [
        'Kickoff meeting to understand your business, goals, and audience',
        'Competitor analysis and industry research',
        'Content inventory and sitemap planning',
        'Technical requirements gathering'
      ]
    },
    {
      phase: 'Phase 2: Wireframing',
      timeline: 'Week 2',
      items: [
        'Create page layouts and user flow diagrams',
        'Plan content placement and navigation structure',
        'Review and refine with your feedback',
        'Finalize site architecture'
      ]
    },
    {
      phase: 'Phase 3: Visual Design',
      timeline: 'Weeks 3-4',
      items: [
        'Develop design concepts based on your brand',
        'Create homepage and key page mockups',
        'Select typography, colors, and imagery',
        'Revision rounds until you love it'
      ]
    },
    {
      phase: 'Phase 4: Development',
      timeline: 'Weeks 4-6',
      items: [
        'Build your site with clean, modern code',
        'Implement responsive design for all devices',
        'Add functionality and integrations',
        'Internal quality assurance testing'
      ]
    },
    {
      phase: 'Phase 5: Launch & Training',
      timeline: 'Week 6-7',
      items: [
        'Final review and approval',
        'Website launch and monitoring',
        'Team training on content management',
        'Post-launch support and optimization'
      ]
    }
  ];

  const includedFeatures = [
    { icon: Layout, text: 'Custom design tailored to your brand (no templates)' },
    { icon: Smartphone, text: 'Mobile-responsive design for all devices' },
    { icon: Search, text: 'Search engine optimization (SEO) foundation' },
    { icon: Zap, text: 'Fast loading speeds (under 3 seconds)' },
    { icon: Shield, text: 'SSL security certificate' },
    { icon: FileEdit, text: 'Contact forms with spam protection' },
    { icon: BarChart3, text: 'Google Analytics integration' },
    { icon: FolderOpen, text: 'Content management system training' },
    { icon: Headphones, text: '30 days of post-launch support' },
    { icon: Code, text: 'Hosting setup assistance' }
  ];

  const faqs = [
    {
      question: 'How much does a website cost?',
      answer: 'Custom websites typically range from $3,000 for small business sites to $15,000+ for complex e-commerce or custom functionality. We provide detailed quotes based on your specific requirements.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Most websites launch within 4-8 weeks depending on complexity and how quickly content and feedback are provided. We\'ll give you a specific timeline during our discovery process.'
    },
    {
      question: 'Do I need to provide content?',
      answer: 'We can work with content you provide, or we offer copywriting services to create compelling website copy. Professional photography and stock images are also available.'
    },
    {
      question: 'Will I be able to update the website myself?',
      answer: 'Yes! We build on user-friendly content management systems and provide training so you can make text and image updates easily. We\'re also available for ongoing support if you prefer hands-off management.'
    },
    {
      question: 'What about hosting and maintenance?',
      answer: 'We can recommend hosting providers or set up hosting for you. We also offer ongoing maintenance packages that include updates, security monitoring, backups, and technical support.'
    },
    {
      question: 'Do you redesign existing websites?',
      answer: 'Absolutely. We specialize in website redesigns that modernize your look while preserving SEO rankings and improving conversion rates.'
    }
  ];

  return (
    <>
      <SEO
        title="Professional Web Design Services | Custom Websites Since 2002 | ThinkMents"
        description="Expert web design in Texas since 2002. Custom, responsive websites that convert visitors into customers. 4-8 week delivery. Mobile-first, SEO-optimized design."
        url="/web-design"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1080&fit=crop)',
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
                <span className="text-white">Web Design</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Professional Web Design Services
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transform your business with stunning, conversion-focused websites that captivate visitors and drive results. Custom designs tailored to your brand and goals.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '20+ Years', label: 'Design Experience' },
                  { stat: '300+', label: 'Websites Built' },
                  { stat: '31 States', label: 'Clients Served' },
                  { stat: '<3 Sec', label: 'Load Time' }
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
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/free-consultation">Get Free Quote</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/portfolio">View Our Work</Link>
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
                  Your Website: The First Impression That Counts
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your website is often the first impression potential customers have of your business—and you only get one chance to make it count. Since 2002, ThinkMents has designed websites that don't just look beautiful, but convert visitors into customers. We were creating websites before WordPress existed, before responsive design was a term, and before mobile browsing overtook desktop. This 20+ years of experience means we've seen what works, what fails, and how to build sites that stand the test of time. We've designed hundreds of websites for businesses across 31 states, from simple landing pages to complex e-commerce platforms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section ref={philosophyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Web Design Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six principles that guide every design decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophyPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4">
                      <principle.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1E3A5F] text-xl mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section ref={servicesRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Web Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {designServices.map((service, idx) => (
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
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we design your website from concept to launch
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processPhases.map((phase, idx) => (
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
                            {phase.phase}
                          </h3>
                          <span className="text-sm text-white bg-[#00B4D8] px-3 py-1 rounded-full">
                            {phase.timeline}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-1" />
                              <span className="text-gray-600 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section ref={includedRef} className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIncludedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Every Website Design Includes
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Professional features that come standard with every project
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isIncludedInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <feature.icon className="w-6 h-6 text-[#F7B928] flex-shrink-0" />
                  <span className="text-white/90 text-left leading-relaxed">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section ref={portfolioRef} className="py-16 bg-gradient-to-r from-[#00B4D8]/10 to-[#1E3A5F]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-16 h-16 text-[#00B4D8] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Design Work
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We've designed websites for healthcare practices, law firms, restaurants, home service companies, e-commerce stores, and professional service firms. Each project is unique, reflecting the client's brand and serving their specific audience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              View our portfolio to see examples of our web design work across industries.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
            >
              <Link to="/portfolio" className="flex items-center gap-2">
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about web design
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
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Related services that complement web design:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/web-development" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline">
                Web Development
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/marketing-seo" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline">
                SEO Services
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/content-marketing" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline">
                Content Marketing
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/technical-services" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline">
                Technical Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose ThinkMents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-[#1E3A5F] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Choose ThinkMents for Web Design
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">20+ Years of Design Experience</h3>
                  <p className="text-gray-700 leading-relaxed">We've designed hundreds of websites since 2002. We understand what works, what doesn't, and how to create designs that achieve business goals.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Conversion-Focused Design</h3>
                  <p className="text-gray-700 leading-relaxed">Beautiful design is worthless if it doesn't convert. We design with strategic CTAs, clear messaging, and user flows that guide visitors toward action.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Mobile-First Approach</h3>
                  <p className="text-gray-700 leading-relaxed">With 60%+ of traffic from mobile, we design mobile-first to ensure flawless experiences on every device size.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Brand-Aligned Custom Design</h3>
                  <p className="text-gray-700 leading-relaxed">No templates. Every design is custom-crafted to reflect your brand personality and stand out from competitors.</p>
                </CardContent>
              </Card>
            </div>
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
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready for a Website That Works as Hard as You Do?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your project and create a website that attracts visitors and converts them into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button asChild size="lg" className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8">
                <Link to="/free-consultation">Schedule Free Consultation</Link>
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
                <Award className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>103+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}