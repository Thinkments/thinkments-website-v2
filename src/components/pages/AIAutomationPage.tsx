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
  PenLine,
  Brain,
  BarChart3,
  MessageSquare,
  Settings,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  FileText,
  Search,
  Code,
  Lightbulb,
  Users
} from 'lucide-react';
import SEO from '../SEO';
import RelatedServices from '../RelatedServices';

export default function AIAutomationPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyAIRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isWhyAIInView = useInView(whyAIRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: PenLine,
      title: 'AI Content Generation',
      description: 'High-quality content created with AI assistance. Blog posts, social content, and more.',
      price: 'From $100/piece',
      badge: null
    },
    {
      icon: Brain,
      title: 'AI Search Optimization',
      description: 'Get found in ChatGPT, Perplexity, and AI answer engines. The new SEO frontier.',
      price: 'Custom Quote',
      badge: 'CUTTING EDGE'
    },
    {
      icon: BarChart3,
      title: 'Automated Reporting',
      description: 'Set it and forget it. Automated reports delivered to your inbox on schedule.',
      price: 'From $200/mo',
      badge: null
    },
    {
      icon: MessageSquare,
      title: 'Custom Chatbots',
      description: 'AI chatbots that answer customer questions, capture leads, and book appointments 24/7.',
      price: 'From $500',
      badge: null
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks. Lead routing, email sequences, data entry, and more.',
      price: 'From $300 setup',
      badge: null
    },
    {
      icon: BookOpen,
      title: 'AI Knowledge Bases',
      description: 'Create searchable knowledge bases from your documents using Google\'s NotebookLM.',
      price: 'From $250',
      badge: null
    },
    {
      icon: Briefcase,
      title: 'JobCraft AI',
      description: 'AI-powered job descriptions that attract qualified candidates.',
      price: 'From $50/job',
      badge: null
    },
    {
      icon: GraduationCap,
      title: 'Education & Training Bots',
      description: 'AI assistants for training, onboarding, and customer education.',
      price: 'Custom Quote',
      badge: null
    }
  ];

  const aiStats = [
    {
      stat: '30%',
      description: 'of Google searches now trigger AI Overviews'
    },
    {
      stat: '100M+',
      description: 'weekly active users on ChatGPT'
    },
    {
      stat: '40%',
      description: 'productivity gains for businesses using AI'
    }
  ];

  return (
    <>
      <SEO
        title="AI & Automation Services | ChatGPT Integration | AI Marketing | ThinkMents"
        description="Transform your marketing with AI and automation. AI content generation, ChatGPT integration, custom chatbots, workflow automation, and AI search optimization. The future of marketing is here."
        url="/services/ai-automation"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjUzODgyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/90 to-[#00B4D8]/70"></div>
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00B4D8] rounded-full opacity-20"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
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
                <span className="text-white">AI & Automation</span>
              </div>

              {/* Badge */}
              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1 animate-pulse">
                <Sparkles className="w-4 h-4 mr-1 inline" />
                NEW CAPABILITIES
              </Badge>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                AI & Automation for Smarter Marketing
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                The future of marketing is here. We&apos;re integrating AI tools to automate tedious tasks, generate better content, and optimize for the next generation of search engines.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: 'ChatGPT', label: 'Integration' },
                  { stat: 'Claude', label: 'Integration' },
                  { stat: '24/7', label: 'Automation' },
                  { stat: '10x', label: 'Efficiency Gains' }
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
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold"
                >
                  <Link to="/free-consultation" className="flex items-center gap-2">
                    Explore AI Solutions
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/portfolio">See Demo</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Credential Section */}
      <section className="py-12 bg-gradient-to-r from-[#1E3A5F]/5 to-[#00B4D8]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#1E3A5F]">ThinkMents has been at the forefront of digital innovation since 2002.</span> 
              We started exploring AI and automation tools years before ChatGPT made headlines, applying cutting-edge technology to solve real business problems. 
              Our 20+ years of experience means we know how to implement AI that actually works for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Process/Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our AI Implementation Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Search, title: "Assessment", desc: "Identify automation opportunities" },
              { icon: Lightbulb, title: "Solution Design", desc: "Custom AI strategy for your needs" },
              { icon: Code, title: "Development", desc: "Build and integrate solutions" },
              { icon: CheckCircle, title: "Testing", desc: "Ensure accuracy and reliability" },
              { icon: Users, title: "Training", desc: "Empower your team" },
              { icon: TrendingUp, title: "Optimization", desc: "Continuous improvement" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-[#1E3A5F] text-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#00B4D8]/10 text-[#00B4D8] px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Powered by Latest AI Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              AI & Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your marketing with cutting-edge AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg group relative overflow-hidden">
                  {/* Gradient shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 via-transparent to-[#1E3A5F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      {service.badge && (
                        <Badge className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white border-none text-xs">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-[#1E3A5F] text-lg mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-[#00B4D8] font-semibold text-sm">
                        {service.price}
                      </p>
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
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold"
            >
              <Link to="/free-consultation" className="flex items-center gap-2">
                Explore AI Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why AI Now Section */}
      <section ref={whyAIRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyAIInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              The AI Revolution is Here
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The marketing landscape is changing rapidly. Here&apos;s why AI matters now.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aiStats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyAIInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-lg bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-8">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.stat}
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Visual Examples */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isWhyAIInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12"
          >
            <Card className="overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1759395162739-84190996783c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3klMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NTQwMTc1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Technology Automation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-[#00B4D8]" />
                      <h3 className="font-semibold text-xl">
                        Automation in Action
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      Watch AI transform your workflow and save hours every week
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NTM1NjUzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Chatbot Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-[#00B4D8]" />
                      <h3 className="font-semibold text-xl">
                        24/7 AI Support
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      Custom chatbots that never sleep and always deliver
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-8 text-white">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <blockquote className="text-xl italic mb-6">
                "ThinkMents implemented AI automation that saves us 20+ hours per week. They didn't just set it up - they trained our team and made sure it actually worked for our specific needs. The ROI has been incredible."
              </blockquote>
              <div>
                <p className="font-semibold">David L.</p>
                <p className="text-white/80 text-sm">CEO, Professional Services Firm</p>
              </div>
              <Link to="/testimonials" className="inline-flex items-center gap-2 mt-4 text-white/90 hover:text-white">
                Read all 103 reviews <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            AI & Automation FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What types of tasks can AI automate for my business?",
                a: "AI can automate content creation, customer service responses, data entry, report generation, social media posting, email marketing, appointment scheduling, and much more. We'll identify the highest-impact opportunities for your specific business."
              },
              {
                q: "Is AI automation expensive to implement?",
                a: "Costs vary based on complexity, but most AI automations pay for themselves within 2-3 months through time savings. We offer solutions for businesses of all sizes, starting with simple automations that deliver quick wins."
              },
              {
                q: "How long does AI implementation take?",
                a: "Simple automations can be live within 1-2 weeks. More complex integrations typically take 4-8 weeks. We always start with a quick-win project so you see value fast."
              },
              {
                q: "Will AI replace my employees?",
                a: "AI is designed to augment your team, not replace them. It handles repetitive tasks so your people can focus on high-value work that requires human creativity and judgment."
              },
              {
                q: "How do you ensure AI quality and accuracy?",
                a: "We implement quality checks, human review processes, and continuous monitoring. AI systems are trained on your specific data and refined over time to improve accuracy."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="font-semibold text-[#1E3A5F] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
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
            <div className="inline-flex items-center gap-2 bg-[#00B4D8]/20 text-[#00B4D8] px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">The Future is Now</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let&apos;s discuss how AI can transform your marketing without losing the human touch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Schedule AI Consultation</Link>
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
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#00B4D8]" />
                <span>Early AI Adopters</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Certified Integrations</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00B4D8]" />
                <span>Human Oversight Always</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices 
        services={[
          {
            icon: BarChart3,
            title: 'Analytics & Reporting',
            description: 'Track performance with comprehensive analytics dashboards and automated reporting.',
            href: '/analytics-reporting'
          },
          {
            icon: FileText,
            title: 'Content Marketing',
            description: 'Strategic content creation including blogs, guides, and resources that educate and convert.',
            href: '/content-marketing'
          },
          {
            icon: Code,
            title: 'Technical Services',
            description: 'Technical support including DNS, email configuration, SSL, security, and server management.',
            href: '/technical-services'
          }
        ]}
      />
    </>
  );
}