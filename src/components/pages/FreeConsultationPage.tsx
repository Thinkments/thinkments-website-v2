import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Lock,
  Search,
  BarChart,
  MessageCircle,
  Phone,
  Star,
  ChevronDown,
  Calendar,
  Clock,
  Users,
  Award,
  Target,
  DollarSign,
  ArrowRight,
  Globe,
  Video,
  Bot,
  Eye,
  Briefcase
} from 'lucide-react';
import SEO from '../SEO';

export default function FreeConsultationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef(null);
  const schedulingRef = useRef(null);
  const socialProofRef = useRef(null);
  const agendaRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isSchedulingInView = useInView(schedulingRef, { once: true });
  const isSocialProofInView = useInView(socialProofRef, { once: true });
  const isAgendaInView = useInView(agendaRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const faqs = [
    {
      question: "Is this really free?",
      answer: "Yes, completely free. No credit card, no commitment, no catch. We believe in providing value upfront to show you what working with us would be like."
    },
    {
      question: "Will I get a sales pitch?",
      answer: "No. We'll share recommendations and, if it makes sense, explain how we could help. But zero pressure. Our goal is to provide genuine value whether you become a client or not."
    },
    {
      question: "What should I prepare?",
      answer: "Nothing required! But access to Google Analytics or specific questions about your marketing can help us provide more targeted insights during the session."
    },
    {
      question: "Can I bring my business partner?",
      answer: "Absolutely. The more decision-makers involved, the better. We encourage you to bring anyone who's part of your marketing decisions."
    },
    {
      question: "What happens after the call?",
      answer: "You'll receive a summary via email. If you want to work together, great—we'll discuss next steps. If not, no hard feelings. The insights are yours to keep regardless."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Free Marketing Strategy Session - No Obligation | ThinkMents"
        description="Get a free 30-minute marketing consultation. Custom strategy, competitive analysis, actionable recommendations—whether you hire us or not. 100% free, zero pressure."
        url="/free-consultation"
        type="website"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#1E3A5F] py-16 md:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="bg-[#00B4D8] text-white px-6 py-3 text-lg">
                100% Free · No Obligation · No Sales Pressure
              </Badge>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get a Free Marketing Strategy Session
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
              In just 30 minutes, we&apos;ll analyze your current marketing, identify opportunities, and give you actionable recommendations—whether you hire us or not.
            </p>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-4"
            >
              <Button asChild variant="outline" className="border-2 border-white/30 bg-white text-black hover:bg-gray-100">
                <Link to="/services" className="flex items-center gap-2">
                  View Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white/30 bg-white text-black hover:bg-gray-100">
                <Link to="/portfolio" className="flex items-center gap-2">
                  See Our Work
                  <Eye className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Value Proposition Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Lightbulb,
                  title: "Custom Strategy",
                  subtitle: "Tailored to your business"
                },
                {
                  icon: BarChart,
                  title: "Competitive Analysis",
                  subtitle: "See how you stack up"
                },
                {
                  icon: CheckCircle,
                  title: "Action Items",
                  subtitle: "Walk away with a plan"
                },
                {
                  icon: Lock,
                  title: "No Strings",
                  subtitle: "Zero obligation"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <item.icon className="w-10 h-10 text-[#00B4D8] mx-auto mb-3" />
                  <div className="text-xl font-bold text-white mb-1">{item.title}</div>
                  <div className="text-sm text-white/80">{item.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Columns - Scheduling & What to Expect */}
      <section ref={schedulingRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Scheduling */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSchedulingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-8 h-8 text-[#00B4D8]" />
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Pick a Time That Works
                    </h2>
                  </div>

                  {/* Calendly Embed Placeholder */}
                  <div className="bg-[#F8F9FA] rounded-lg p-8 mb-6 border-2 border-dashed border-gray-300 min-h-[400px] flex flex-col items-center justify-center">
                    <Calendar className="w-16 h-16 text-[#00B4D8] mb-4" />
                    <p className="text-lg text-gray-600 mb-4 text-center">
                      Calendar scheduling widget
                    </p>
                    <p className="text-sm text-gray-500 text-center max-w-md">
                      Integration with Calendly or other scheduling tool would go here for seamless appointment booking
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#F7B928] hover:bg-[#D4960F] text-black mt-6"
                    >
                      <a href="https://calendly.com/spicer-thinkments/30min" target="_blank" rel="noopener noreferrer">
                        Schedule on Calendly
                      </a>
                    </Button>
                  </div>

                  {/* Helper Info */}
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#00B4D8]" />
                      <span>30-minute video or phone call</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#00B4D8]" />
                      <span>Bring team members or partners</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                      <span>Available Mon-Fri, 8am-6pm CST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isSchedulingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lg:pt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                  What You&apos;ll Get
                </h2>

                <div className="space-y-6">
                  {[
                    "A complete review of your current online presence",
                    "Competitor analysis for your local market",
                    "Specific, actionable recommendations",
                    "Honest assessment—even if we're not the right fit",
                    "No high-pressure sales tactics, ever"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isSchedulingInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00B4D8] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="pt-1.5">
                        <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional CTA */}
                <div className="mt-10 p-6 bg-[#E8F8FC] rounded-lg border-l-4 border-[#00B4D8]">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong className="text-[#1E3A5F]">Still not sure?</strong> That&apos;s okay. This consultation is designed to help you make an informed decision—not pressure you into one.
                  </p>
                  <div className="flex items-center gap-2 text-[#00B4D8]">
                    <Lock className="w-5 h-5" />
                    <span className="font-semibold">100% Risk-Free Consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section ref={socialProofRef} className="py-16 md:py-20 px-4 bg-white border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSocialProofInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join 1,000+ Businesses Who Started Here
            </h2>
          </motion.div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { stat: '1,000+', label: 'Free Consultations Given', icon: Users },
              { stat: '85%', label: 'Become Clients', icon: TrendingUp },
              { stat: '5.0', label: 'Average Rating', icon: Star },
              { stat: '$500M+', label: 'Client Value Generated', icon: DollarSign }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isSocialProofInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#00B4D8] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.stat}
                    </div>
                    <div className="text-gray-600">{item.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isSocialProofInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-2xl border-t-4 border-t-[#00B4D8]">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-1 mb-6 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 italic text-center">
                  &quot;I was skeptical about &apos;free consultations&apos;—usually they&apos;re just sales pitches. But ThinkMents actually delivered value before asking for anything. That&apos;s when I knew they were different.&quot;
                </blockquote>

                <p className="text-center text-lg text-gray-600 mb-6">
                  — Business Owner, Healthcare Industry
                </p>

                <div className="text-center">
                  <Button asChild variant="outline" className="border-2 border-white bg-[#1E3A5F] text-white hover:bg-[#0F2844]">
                    <Link to="/testimonials" className="flex items-center gap-2">
                      Read All Reviews
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Trust Badges with Case Studies Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSocialProofInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-lg"
          >
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              {[
                { label: 'Google Certified', icon: Award },
                { label: 'Proven Results', icon: TrendingUp },
                { label: 'ROI Focused', icon: DollarSign },
                { label: 'Data-Driven', icon: BarChart }
              ].map((badge, idx) => (
                <div key={idx} className="text-center text-white">
                  <badge.icon className="w-10 h-10 mx-auto mb-2 opacity-90" />
                  <p className="font-semibold">{badge.label}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" className="border-2 border-white bg-[#1E3A5F] text-white hover:bg-[#0F2844]">
                <Link to="/case-studies" className="flex items-center gap-2">
                  See Our Results
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Can Help With Section */}
      <section className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What We Can Help With
            </h2>
            <p className="text-xl text-gray-600">
              Discover the services we&apos;ll discuss during your consultation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: 'Marketing & SEO',
                description: 'Get found on Google with comprehensive SEO strategies and local search optimization.',
                href: '/marketing-seo'
              },
              {
                icon: Globe,
                title: 'Web Development',
                description: 'Custom website design and development built with performance, SEO, and conversions in mind.',
                href: '/web-development'
              },
              {
                icon: Target,
                title: 'Google Business Profile',
                description: 'Dominate local search with optimized Google Business Profile management and local SEO.',
                href: '/google-business-profile'
              },
              {
                icon: Target,
                title: 'Paid Advertising',
                description: 'Drive immediate results with Google Ads, Facebook Ads, and retargeting campaigns.',
                href: '/paid-advertising'
              },
              {
                icon: Video,
                title: 'Video & Photography',
                description: 'Professional content creation including photography, videography, and 360° virtual tours.',
                href: '/video-photography'
              },
              {
                icon: Bot,
                title: 'AI & Automation',
                description: 'Leverage AI for efficiency with chatbots, workflow automation, and AI-assisted content.',
                href: '/artificial-intelligence-automation'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={service.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg group">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#1E3A5F] text-lg mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-black font-semibold text-sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We'll Cover - Agenda Section */}
      <section ref={agendaRef} className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAgendaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Your Consultation Agenda
            </h2>
            <p className="text-xl text-gray-600">
              Here&apos;s exactly how we&apos;ll spend our 30 minutes together
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                step: "Step 1",
                title: "Discovery",
                time: "5 min",
                icon: Search,
                description: "We'll learn about your business, goals, and challenges",
                color: "from-[#00B4D8] to-[#1E3A5F]"
              },
              {
                step: "Step 2",
                title: "Analysis",
                time: "10 min",
                icon: BarChart,
                description: "Live review of your website, Google presence, and competitors",
                color: "from-[#1E3A5F] to-[#00B4D8]"
              },
              {
                step: "Step 3",
                title: "Strategy",
                time: "10 min",
                icon: Lightbulb,
                description: "Specific recommendations tailored to your situation",
                color: "from-[#00B4D8] to-[#FF6B35]"
              },
              {
                step: "Step 4",
                title: "Q&A",
                time: "5 min",
                icon: MessageCircle,
                description: "Your questions answered—no topic off limits",
                color: "from-[#FF6B35] to-[#00B4D8]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isAgendaInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="text-sm text-[#00B4D8] font-semibold">{item.step}</span>
                            <h3 className="text-2xl font-bold text-[#1E3A5F]">{item.title}</h3>
                          </div>
                          <Badge className="bg-[#E8F8FC] text-[#00B4D8] border-[#00B4D8]">
                            {item.time}
                          </Badge>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isAgendaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#FF6B35]">
              <p className="text-lg text-gray-700">
                <strong className="text-[#1E3A5F]">Important:</strong> You&apos;ll leave with clear next steps, whether that includes working with us or not.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-[#1E3A5F] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#00B4D8] flex-shrink-0 transition-transform duration-300 ${
                          openFaq === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* More FAQs Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-10"
          >
            <Button asChild variant="outline" className="border-2 border-[#1E3A5F] bg-white text-black hover:bg-gray-100">
              <Link to="/faqs" className="flex items-center gap-2">
                More FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-20 px-4 bg-[#FF6B35] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Stop Guessing. Start Growing.
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed">
              Your free strategy session is waiting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-[#F7B928] hover:bg-[#D4960F] text-black font-semibold text-lg px-10 py-6"
              >
                <Link to="#schedule">Book Your Free Consultation</Link>
              </Button>
              <div className="flex items-center gap-3 text-white">
                <span className="text-lg">Or call</span>
                <a
                  href="tel:9403151023"
                  className="flex items-center gap-2 font-bold text-xl hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (940) 315-1023
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-white text-white" />
                ))}
                <span className="font-semibold ml-1">5.0 Rating</span>
              </div>
              <span className="text-white/60">|</span>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>20+ Years</span>
              </div>
              <span className="text-white/60">|</span>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>103 Reviews</span>
              </div>
              <span className="text-white/60">|</span>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>31 States Served</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}