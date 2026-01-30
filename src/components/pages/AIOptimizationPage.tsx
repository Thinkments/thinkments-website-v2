import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Phone,
  ChevronRight,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Shield,
  Rocket,
  MessageCircle,
  FileText,
  Search,
  Settings,
  Award,
  TrendingDown,
  Star,
} from 'lucide-react';
import SEO from '../SEO';

export default function AIOptimizationPage() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const aiServices = [
    {
      icon: FileText,
      title: 'AI-Powered Content Creation',
      description:
        'Leverage artificial intelligence to generate high-quality blog posts, social media content, email campaigns, and marketing copy. Our AI content tools learn your brand voice and produce consistent, engaging content at scale while your team focuses on strategy. Perfect for businesses needing to maintain a consistent content calendar without overwhelming your marketing team.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description:
        'Eliminate repetitive manual tasks with intelligent automation. We implement systems that handle data entry, report generation, appointment scheduling, email responses, and lead routing automatically, saving your team 20+ hours per week. Free your staff from tedious work and redirect their talents toward high-value activities that grow your business.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description:
        'Use AI to forecast trends, customer behavior, and market changes. Our predictive models analyze your historical data to provide actionable insights for inventory management, demand planning, and marketing spend optimization. Make data-driven decisions with confidence and stay ahead of market shifts before your competitors even notice them.',
    },
    {
      icon: MessageCircle,
      title: 'Chatbot & Virtual Assistant Integration',
      description:
        'Deploy AI-powered chatbots that handle customer inquiries 24/7. Our solutions integrate with your website, social media, and messaging platforms to provide instant responses and qualify leads while you sleep. Improve customer satisfaction with immediate answers and capture opportunities that would otherwise slip through the cracks during off-hours.',
    },
    {
      icon: Search,
      title: 'AI-Enhanced SEO',
      description:
        'Optimize your search rankings with AI-driven keyword research, content optimization, and competitive analysis. Our tools identify opportunities faster and more accurately than manual methods. Discover untapped keywords, optimize existing content, and outmaneuver competitors with insights that would take weeks to uncover manually.',
    },
    {
      icon: Settings,
      title: 'Process Intelligence',
      description:
        'Map and analyze your business processes to identify bottlenecks and optimization opportunities. AI examines your workflows and recommends improvements that increase efficiency and reduce errors. Transform complicated processes into streamlined operations that save time, reduce costs, and improve customer satisfaction through systematic analysis and continuous improvement.',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Dramatic Time Savings',
      description:
        'Automate tasks that previously took hours, freeing your team to focus on high-value strategic work',
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description:
        'Lower operational costs by 30-50% through intelligent automation and reduced manual labor',
    },
    {
      icon: Zap,
      title: '24/7 Operations',
      description:
        'AI systems work around the clock without breaks, ensuring continuous customer service and operations',
    },
    {
      icon: CheckCircle,
      title: 'Improved Accuracy',
      description: 'Eliminate human error in data processing, reporting, and repetitive tasks',
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Handle 10x the workload without proportionally increasing staff or resources',
    },
    {
      icon: Rocket,
      title: 'Competitive Edge',
      description: 'Stay ahead of competitors still relying on manual processes',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery & Assessment',
      description:
        'We analyze your current operations, identify automation opportunities, and calculate potential ROI',
    },
    {
      number: '2',
      title: 'Strategy Development',
      description: 'Custom AI roadmap aligned with your business goals and budget',
    },
    {
      number: '3',
      title: 'Solution Design',
      description: 'Select and configure the right AI tools for your specific needs',
    },
    {
      number: '4',
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
    },
    {
      number: '5',
      title: 'Training & Support',
      description: 'Empower your team to use and manage AI tools effectively',
    },
    {
      number: '6',
      title: 'Optimization',
      description: 'Continuous monitoring and improvement to maximize results',
    },
  ];

  const faqs = [
    {
      question: 'How long does AI implementation take?',
      answer:
        'Simple automations can be live within 1-2 weeks. More complex integrations typically take 4-8 weeks. We always start with quick-win projects so you see value fast.',
    },
    {
      question: 'Is AI optimization expensive?',
      answer:
        'Costs vary based on complexity, but most AI solutions pay for themselves within 2-3 months through time savings and efficiency gains. We offer solutions for businesses of all sizes.',
    },
    {
      question: 'Will AI replace my employees?',
      answer:
        'No. AI is designed to augment your team, not replace them. It handles repetitive tasks so your people can focus on creative, strategic, and relationship-building work that requires human judgment.',
    },
    {
      question: 'What if AI makes mistakes?',
      answer:
        'We implement quality checks, human review processes, and continuous monitoring. AI systems improve over time and we fine-tune them based on your feedback and results.',
    },
    {
      question: 'Do I need technical expertise to use AI tools?',
      answer:
        'No. We handle all the technical setup and provide training so your team can use AI tools confidently. Our solutions are designed to be user-friendly.',
    },
  ];

  return (
    <>
      <SEO
        title="AI Optimization Services | Business Automation & AI Tools | ThinkMents"
        description="Transform your business with AI optimization and automation. Reduce costs by 30-50%, automate workflows, and gain competitive advantages with 20+ years of AI expertise."
        url="/services/ai-optimization"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                <span className="text-white">AI Optimization</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                AI Optimization & Automation Services
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transform your business operations with artificial intelligence and automation.
                Reduce costs, increase efficiency, and gain competitive advantages with proven AI
                solutions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '30-50%', label: 'Cost Reduction' },
                  { stat: '20+ hrs', label: 'Time Saved/Week' },
                  { stat: '24/7', label: 'Operations' },
                  { stat: '20+ Years', label: 'AI Experience' },
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
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/free-consultation">Schedule Your Free AI Assessment</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        className="py-16 bg-gradient-to-r from-[#1E3A5F]/5 to-[#00B4D8]/5"
      >
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
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  20+ Years of Digital Innovation & AI Expertise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over 20 years of digital innovation experience since 2002, ThinkMents has
                  been at the forefront of AI and automation technology. We started exploring
                  machine learning and automation tools years before they became mainstream, giving
                  us deep expertise in implementing AI solutions that deliver real business results.
                  Our team has deployed AI optimization strategies for businesses across 31 states,
                  helping them automate workflows, reduce costs, and gain competitive advantages.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
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
              AI Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {aiServices.map((service, idx) => (
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
                    <h3 className="font-semibold text-[#1E3A5F] text-xl mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
            <p className="text-gray-600 mb-6">
              Interested in learning more about our data-driven approach?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/analytics-reporting"
                className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline"
              >
                Analytics & Reporting
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/content-marketing"
                className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline"
              >
                Content Marketing
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/strategic-consulting"
                className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline"
              >
                Strategic Consulting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Why AI Optimization Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The competitive advantages of implementing AI in your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E3A5F] text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
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
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers results with minimal disruption
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-semibold text-[#1E3A5F] text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-[#00B4D8] to-[#1E3A5F]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Proven Results from AI Optimization
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Our AI optimization clients typically see:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { stat: '40%', label: 'Reduction in time spent on administrative tasks' },
                { stat: '60%', label: 'Faster response times to customer inquiries' },
                { stat: '25%', label: 'Increase in lead conversion rates' },
                { stat: '3x', label: 'Improvement in content production capacity' },
              ].map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isResultsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#F7B928] mb-3">
                    {result.stat}
                  </div>
                  <p className="text-white/90 leading-relaxed">{result.label}</p>
                </motion.div>
              ))}
            </div>
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
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about AI optimization
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
                    <h3 className="font-semibold text-[#1E3A5F] text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
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
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free AI assessment and discover how automation can reduce costs, save time,
              and give you a competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Schedule Your Free AI Assessment</Link>
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

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>103+ Reviews</span>
              </div>
              <span className="text-white/40">|</span>
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
