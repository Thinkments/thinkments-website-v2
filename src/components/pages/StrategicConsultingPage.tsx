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
  Compass,
  Target,
  Award,
  TrendingUp,
  Briefcase,
  Users,
  Search,
  Settings,
  BarChart3,
  Lightbulb,
  Shield,
  GraduationCap,
  Clock,
  HelpCircle,
  Handshake,
  FileText
} from 'lucide-react';
import SEO from '../SEO';

export default function StrategicConsultingPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whatIsRef = useRef(null);
  const servicesRef = useRef(null);
  const approachRef = useRef(null);
  const engagementRef = useRef(null);
  const whoWeHelpRef = useRef(null);
  const differentRef = useRef(null);
  const resultsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhatIsInView = useInView(whatIsRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isApproachInView = useInView(approachRef, { once: true });
  const isEngagementInView = useInView(engagementRef, { once: true });
  const isWhoWeHelpInView = useInView(whoWeHelpRef, { once: true });
  const isDifferentInView = useInView(differentRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Compass,
      title: 'Digital Marketing Strategy',
      description: 'Develop a comprehensive roadmap for your digital marketing success. We analyze your business goals, target audience, competitive landscape, and current capabilities to create a strategic plan that maximizes results. Our strategies cover channel selection, budget allocation, messaging, timing, and success metrics. You receive a detailed document you can execute internally, with an agency, or with our implementation support.'
    },
    {
      icon: Search,
      title: 'Marketing Audits & Assessments',
      description: 'Get an objective evaluation of your current marketing efforts. Our comprehensive audits examine your website, SEO, paid advertising, social media, content, email marketing, and analytics. We identify what\'s working, what\'s not, and where the biggest opportunities lie. You receive a prioritized list of recommendations with expected impact and implementation guidance.'
    },
    {
      icon: Target,
      title: 'Competitive Analysis',
      description: 'Understand your competitive landscape and identify opportunities to differentiate. We analyze competitor websites, SEO strategies, advertising approaches, content marketing, social media presence, and market positioning. Our analysis reveals gaps you can exploit and strengths you need to match. Armed with this intelligence, you can make strategic decisions with confidence.'
    },
    {
      icon: Settings,
      title: 'Marketing Technology Consulting',
      description: 'Navigate the overwhelming landscape of marketing tools and platforms. We help you evaluate, select, and implement the right technology stack for your needs—CRM systems, marketing automation, analytics tools, advertising platforms, and more. Our vendor-neutral recommendations focus on what\'s best for your business, not what pays us the highest commission.'
    },
    {
      icon: GraduationCap,
      title: 'Team Building & Training',
      description: 'Build internal marketing capabilities that reduce dependence on agencies. We help you define roles, create job descriptions, evaluate candidates, and structure teams for success. Once hired, we provide training and mentorship to accelerate their effectiveness. Our goal is to make your internal team self-sufficient.'
    },
    {
      icon: Handshake,
      title: 'Fractional CMO Services',
      description: 'Access executive-level marketing leadership without the full-time cost. Our fractional CMO services provide strategic oversight, team leadership, and marketing direction on a part-time basis. Ideal for businesses that need senior marketing expertise but can\'t justify or afford a full-time executive.'
    },
    {
      icon: Shield,
      title: 'Agency Selection & Management',
      description: 'Get help choosing and managing agency partners. We help you define requirements, evaluate proposals, negotiate contracts, and establish accountability frameworks. If you\'re already working with agencies, we can assess their performance and help you get better results from those relationships.'
    }
  ];

  const faqs = [
    {
      question: 'How is consulting different from your regular services?',
      answer: 'Regular services involve us doing the marketing work. Consulting involves advising you on strategy while you or others handle implementation. Many clients start with consulting and then engage us for implementation.'
    },
    {
      question: 'How much does strategic consulting cost?',
      answer: 'Strategy sessions start at $500-1,500. Comprehensive strategy projects range from $3,000-10,000 depending on scope. Advisory retainers typically run $1,500-5,000 monthly. We provide custom quotes based on your needs.'
    },
    {
      question: 'Can you help us find and hire marketing staff?',
      answer: 'Yes. We help define roles, write job descriptions, screen candidates, and conduct interviews. We can also provide onboarding training and ongoing mentorship.'
    },
    {
      question: 'What if we want you to implement the strategy?',
      answer: 'We offer that option. Many consulting engagements evolve into implementation partnerships. Having done the strategy work, we can execute efficiently.'
    },
    {
      question: 'Do you work with companies outside Texas?',
      answer: 'Absolutely. Our consulting clients are located across 31 states. Video conferencing makes strategic discussions easy regardless of location.'
    },
    {
      question: 'How long is a typical consulting engagement?',
      answer: 'It varies widely. Some clients need a single 3-hour strategy session. Others engage us for 6-month advisory relationships. We match the engagement to what you actually need.'
    },
    {
      question: 'Will you tell us things we don\'t want to hear?',
      answer: 'Yes. Honest assessment is essential to our value. We won\'t sugarcoat problems or validate bad ideas just to make you feel good.'
    }
  ];

  return (
    <>
      <SEO
        title="Strategic Consulting | Marketing Strategy & Advisory | ThinkMents"
        description="Strategic consulting from 20+ years real-world experience. Marketing strategy, audits, competitive analysis, fractional CMO services. Expert guidance for confident decisions."
        url="/strategic-consulting"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
                <span className="text-white">Strategic Consulting</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                EXPERT GUIDANCE SINCE 2002
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Strategic Consulting That Delivers Results
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Expert guidance grounded in two decades of real-world success
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '31', label: 'States Served' },
                  { stat: '100s', label: 'Businesses Helped' },
                  { stat: 'Dozens', label: 'Industries' }
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
                  <Link to="/free-consultation">Schedule Strategy Call</Link>
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
                Sometimes you don't need another agency to execute tactics—you need a strategic partner who can help you see the bigger picture and chart the right course. <strong>ThinkMents' Strategic Consulting services provide the expert guidance that business owners and marketing leaders need to make confident decisions about their digital future.</strong> With over 20 years of experience since 2002, we've helped hundreds of businesses navigate complex digital challenges, from complete marketing overhauls to specific tactical decisions. Our consulting isn't theoretical—it's grounded in two decades of real-world implementation across dozens of industries and 31 states.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is Strategic Consulting */}
      <section ref={whatIsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhatIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Lightbulb className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                When You Need More Than Execution
              </h2>
              <p className="text-xl text-gray-600">
                Strategic consulting is different from typical agency services
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Instead of doing the work for you, we help you understand what work needs to be done and how to do it effectively.
              </p>

              <h3 className="text-xl text-[#1E3A5F] mb-4">Strategic consulting is ideal when you:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Have internal marketing resources but lack strategic direction',
                  'Need expert validation before making major investments',
                  'Want to understand your options before committing to an approach',
                  'Are building an internal team and need guidance on structure and hiring',
                  'Have been burned by agencies and want to bring marketing in-house',
                  'Need objective assessment of your current marketing efforts',
                  'Face a complex decision and want experienced perspective'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                Our consulting engagements range from one-time strategy sessions to ongoing advisory relationships. <strong>We tailor our involvement to what you actually need—not what generates the most revenue for us.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                The goal is always the same: give you the knowledge, strategy, and confidence to succeed—whether you implement with us, another partner, or your own team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance across all aspects of digital marketing strategy
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
                      <h3 className="text-xl text-[#1E3A5F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consulting Approach */}
      <section ref={approachRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Compass className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                How We Deliver Strategic Value
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Discovery Deep-Dive',
                  description: 'Every engagement starts with understanding your business thoroughly—goals, challenges, resources, constraints, history, and vision. We ask probing questions and listen carefully because strategy without context is useless.'
                },
                {
                  title: 'Data-Driven Analysis',
                  description: 'We gather and analyze relevant data—your analytics, market research, competitive intelligence, industry benchmarks. Our recommendations are grounded in evidence, not opinions or assumptions.'
                },
                {
                  title: 'Honest Assessment',
                  description: 'We tell you what you need to hear, not what you want to hear. If your website is terrible, we\'ll say so. If you\'re wasting money on ineffective tactics, we\'ll call it out. This honesty is why clients trust our recommendations.'
                },
                {
                  title: 'Actionable Recommendations',
                  description: 'Our deliverables aren\'t vague suggestions—they\'re specific, prioritized action items you can actually implement. We include timelines, resource requirements, expected outcomes, and success metrics.'
                },
                {
                  title: 'Implementation Support',
                  description: 'Strategy is worthless without execution. We provide guidance during implementation, answer questions that arise, and help you course-correct when needed. We\'re available as a resource throughout your journey.'
                },
                {
                  title: 'Knowledge Transfer',
                  description: 'We don\'t create dependency. Our goal is to build your capabilities and confidence so you can eventually operate independently. We share our thinking so you learn, not just follow instructions.'
                }
              ].map((approach, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl text-[#00B4D8] mb-3">{approach.title}</h3>
                    <p className="text-white/90 leading-relaxed">{approach.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Models */}
      <section ref={engagementRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isEngagementInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Clock className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Flexible Consulting Options
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Strategy Sessions',
                  description: 'One-time deep-dive sessions focused on specific challenges. 2-4 hours of intensive strategic discussion followed by documented recommendations. Perfect for validating decisions or solving specific problems.'
                },
                {
                  title: 'Strategy Projects',
                  description: 'Comprehensive engagements delivering complete strategic plans. Typically 2-6 weeks including research, analysis, strategy development, and presentation. Includes detailed documentation and implementation roadmap.'
                },
                {
                  title: 'Advisory Retainers',
                  description: 'Ongoing strategic support through monthly consulting hours. Regular check-ins, on-demand guidance, and continuous strategic refinement. Ideal for businesses wanting consistent access to experienced perspective.'
                },
                {
                  title: 'Fractional CMO',
                  description: 'Part-time executive leadership with regular involvement in your marketing operations. Typically 10-20 hours monthly including team management, strategic oversight, and leadership participation.'
                },
                {
                  title: 'Custom Engagements',
                  description: 'We design consulting arrangements that fit your specific needs. If none of our standard models fit, we\'ll create something that does.'
                }
              ].map((model, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{model.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{model.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section ref={whoWeHelpRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhoWeHelpInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Strategic Consulting for Every Situation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Growing Businesses',
                  description: 'Companies ready to invest seriously in marketing but unsure how to allocate resources effectively. We help prioritize initiatives and avoid expensive mistakes.'
                },
                {
                  title: 'Marketing Teams',
                  description: 'Internal teams with execution capability but lacking strategic direction. We provide the strategic framework they need to focus their efforts.'
                },
                {
                  title: 'Executives & Owners',
                  description: 'Leaders who need trusted advisors to pressure-test ideas and provide objective perspective on marketing decisions.'
                },
                {
                  title: 'Startups',
                  description: 'New companies building their marketing function from scratch. We help establish foundations that scale.'
                },
                {
                  title: 'Businesses in Transition',
                  description: 'Organizations changing direction—new markets, new products, new positioning. We help navigate the marketing implications of business changes.'
                },
                {
                  title: 'Frustrated Companies',
                  description: 'Businesses that have struggled with agencies or internal efforts and need help diagnosing what\'s gone wrong and how to fix it.'
                }
              ].map((who, idx) => (
                <Card key={idx} className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{who.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{who.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Consulting Different */}
      <section ref={differentRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDifferentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why ThinkMents for Strategic Consulting
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Practitioner Perspective',
                  description: 'We\'re not just consultants—we\'re practitioners who implement marketing strategies daily. Our advice comes from real-world experience, not textbooks.'
                },
                {
                  title: 'Two Decades of Pattern Recognition',
                  description: 'Having worked with hundreds of businesses since 2002, we\'ve seen what works across industries and situations. This pattern recognition helps us identify solutions faster.'
                },
                {
                  title: 'No Hidden Agenda',
                  description: 'We recommend what\'s best for you, even if that means doing less with us. Our reputation depends on giving honest advice, not maximizing our revenue.'
                },
                {
                  title: 'Implementation Available',
                  description: 'Unlike pure consulting firms, we can help implement recommendations if you want. Strategy and execution under one roof creates seamless continuity.'
                },
                {
                  title: 'Ongoing Relationship',
                  description: 'We\'re here long-term. When questions arise six months after a consulting engagement, we\'re still available and still care about your success.'
                }
              ].map((diff, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{diff.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{diff.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results from Consulting */}
      <section ref={resultsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Strategic Consulting Impact
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                'Clarity on marketing priorities and resource allocation',
                'Confidence in marketing investment decisions',
                '40-60% improvement in marketing ROI through better focus',
                'Successful in-house team development',
                'Improved agency relationships and accountability',
                'Faster growth through strategic alignment'
              ].map((result, idx) => (
                <Card key={idx} className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-[#00B4D8] mx-auto mb-3" />
                    <p className="text-gray-700">{result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-l-4 border-l-[#00B4D8]">
                  <p className="text-gray-700 italic leading-relaxed mb-2">
                    "The strategy session with ThinkMents saved us from making a $50,000 mistake. Their outside perspective identified issues we were too close to see."
                  </p>
                  <p className="text-sm text-gray-600">— Business Owner</p>
                </div>
                <div className="bg-white rounded-lg p-6 border-l-4 border-l-[#00B4D8]">
                  <p className="text-gray-700 italic leading-relaxed mb-2">
                    "They helped us build an internal team that now runs marketing better than any agency we've used."
                  </p>
                  <p className="text-sm text-gray-600">— CEO</p>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
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
                <Link to="/marketing-seo" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Marketing & SEO <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/analytics-reporting" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Analytics & Reporting <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/business-solutions" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Business Solutions <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  All Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/case-studies" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/about-us" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready for Strategic Clarity?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your challenges and explore how strategic consulting can help you make better marketing decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Strategy Call
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
                <span>20+ Years Strategic Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Practitioner Perspective</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>No Hidden Agendas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
