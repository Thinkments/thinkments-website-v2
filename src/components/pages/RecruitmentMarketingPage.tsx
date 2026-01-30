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
  Briefcase,
  Target,
  TrendingUp,
  Users,
  UserCheck,
  MessageSquare,
  Shield,
  FileText,
  Award,
  HelpCircle,
  Share2,
  Lightbulb,
  BarChart3,
} from 'lucide-react';
import SEO from '../SEO';

export default function RecruitmentMarketingPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyMattersRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const whoRef = useRef(null);
  const contentRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyMattersInView = useInView(whyMattersRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isWhoInView = useInView(whoRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Briefcase,
      title: 'Employer Brand Development',
      description:
        'Define and communicate what makes your company a great place to work. We develop employer value propositions that resonate with your ideal candidates—articulating culture, benefits, growth opportunities, and what sets you apart. Your employer brand is then consistently communicated across your careers page, job postings, social media, and all recruitment touchpoints.',
    },
    {
      icon: FileText,
      title: 'Careers Page Optimization',
      description:
        'Transform your careers page from a job listing into a recruitment tool. We create compelling careers pages that showcase your culture, introduce your team, highlight benefits, and make applying easy. Optimized careers pages rank in search results for job-related keywords, attracting candidates actively searching for opportunities in your industry and location.',
    },
    {
      icon: Target,
      title: 'Job Posting Optimization',
      description:
        'Write job postings that attract qualified candidates and rank in job search results. We optimize titles, descriptions, and requirements for both human readers and search algorithms. Our job postings clearly communicate opportunities while filtering for candidates who are genuinely good fits.',
    },
    {
      icon: Share2,
      title: 'Social Media Recruiting',
      description:
        'Reach candidates where they spend time—on social media. We develop recruitment-focused social content showcasing your culture, team, and opportunities. Targeted advertising reaches passive candidates based on skills, experience, industry, and location. LinkedIn strategies connect with professionals in your target talent pool.',
    },
    {
      icon: Users,
      title: 'Employee Advocacy Programs',
      description:
        'Turn your employees into recruitment ambassadors. We help you develop employee advocacy programs that encourage team members to share opportunities and company content with their networks. Employee referrals typically result in faster hires, better cultural fit, and longer retention.',
    },
    {
      icon: Shield,
      title: 'Reputation Management for Employers',
      description:
        'Build and protect your employer reputation on review sites. We help you encourage reviews from current employees on Glassdoor, Indeed, and other platforms. We develop response strategies for negative reviews and address legitimate concerns that could hurt recruiting efforts.',
    },
  ];

  const faqs = [
    {
      question: 'How is recruitment marketing different from traditional recruiting?',
      answer:
        'Traditional recruiting is reactive—posting jobs and waiting for applications. Recruitment marketing is proactive—building awareness and interest before positions open so you have a pipeline of interested candidates ready to engage.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Some tactics like job posting optimization show immediate impact. Employer brand building is longer-term, typically showing meaningful results in 3-6 months as content accumulates and reputation improves.',
    },
    {
      question: 'Do you replace our HR team or recruiters?',
      answer:
        'No. We complement your internal team by handling marketing aspects of recruitment—employer branding, content creation, advertising, and optimization. Your team continues to manage the hiring process itself.',
    },
    {
      question: 'Can you help with specific hard-to-fill positions?',
      answer:
        'Yes. We develop targeted campaigns for specific roles, reaching passive candidates with the skills and experience you need through precise targeting on LinkedIn and other platforms.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'We track application volume, applicant quality, source attribution, time-to-fill, and cost-per-hire. We focus on metrics that matter for hiring outcomes, not vanity metrics.',
    },
    {
      question: 'What if we have a bad reputation on Glassdoor?',
      answer:
        'We develop employer reputation recovery strategies including encouraging reviews from satisfied employees, responding professionally to criticism, and addressing legitimate concerns that could be improved.',
    },
  ];

  return (
    <>
      <SEO
        title="Recruitment Marketing Services | Employer Branding & Talent Acquisition | ThinkMents"
        description="Attract top talent with recruitment marketing since 2002. Employer brand development, careers page optimization, social recruiting. Reach passive job seekers across 31 states."
        url="/recruitment-marketing"
        type="website"
      />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&fit=crop)',
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
                <span className="text-white">Recruitment Marketing</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                TALENT ACQUISITION EXPERTS SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Recruitment Marketing That Attracts Top Talent
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Build your employer brand and reach passive candidates before they start looking
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '73%', label: 'Passive Job Seekers' },
                  { stat: '31', label: 'States Served' },
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '50%', label: 'More Applicants' },
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
                  <Link to="/free-consultation">Start Attracting Talent</Link>
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
                Finding and attracting top talent is one of the biggest challenges businesses face
                today.{' '}
                <strong>
                  Recruitment marketing applies the same strategies that attract customers to
                  attract candidates—building your employer brand, reaching passive job seekers, and
                  creating compelling reasons for talented people to choose your company.
                </strong>{' '}
                ThinkMents has been helping businesses with recruitment marketing since 2002,
                understanding that great employees are the foundation of great companies. With over
                20 years of experience in digital marketing across 31 states, we bring proven
                strategies to help you build a talent pipeline that supports your growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Recruitment Marketing Matters */}
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
                The Talent Acquisition Challenge
              </h2>
              <p className="text-xl text-gray-600">
                Traditional hiring methods aren't enough in today's competitive job market
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  stat: '73%',
                  label: "of candidates are passive job seekers who aren't actively looking",
                },
                {
                  stat: '75%',
                  label: 'of job seekers research company reputation before applying',
                },
                { stat: '50%', label: 'more qualified applicants with strong employer brands' },
                {
                  stat: '69%',
                  label: 'would reject an offer from a company with a bad reputation',
                },
                { stat: '30%', label: 'of first-year salary is the average cost of a bad hire' },
                { stat: '62%', label: 'increase in time-to-fill over the past decade' },
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
                  Posting jobs and waiting for applications doesn't reach the best
                  candidates—they're already employed and not browsing job boards.
                </strong>{' '}
                Recruitment marketing reaches passive candidates by building awareness, interest,
                and desire before positions even open.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your employer brand is how potential employees perceive your company as a place to
                work. A strong employer brand attracts better candidates, reduces recruiting costs,
                and improves retention. Every touchpoint matters—your website, social media, reviews
                on Glassdoor and Indeed, and how current employees talk about working for you.
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
              Comprehensive Recruitment Services
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
                How We Build Your Recruitment Marketing Strategy
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Discovery & Assessment',
                  items: [
                    'Understand your hiring needs and challenges',
                    'Audit current employer brand presence',
                    'Analyze competitor employer positioning',
                    'Review current recruitment metrics',
                  ],
                },
                {
                  title: 'Strategy Development',
                  items: [
                    'Define employer value proposition',
                    'Identify target candidate personas',
                    'Select priority channels and tactics',
                    'Create content and campaign plans',
                  ],
                },
                {
                  title: 'Implementation',
                  items: [
                    'Optimize careers page and job postings',
                    'Create recruitment content',
                    'Launch social media recruiting campaigns',
                    'Set up tracking and attribution',
                  ],
                },
                {
                  title: 'Ongoing Optimization',
                  items: [
                    'Monitor application quality and volume',
                    'Refine targeting and messaging',
                    'Generate employer reviews',
                    'Adjust strategy based on hiring results',
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

            <div className="mt-8 bg-[#FF6B35] rounded-lg p-6">
              <p className="text-white text-lg text-center">
                <strong>
                  We measure recruitment marketing by quality of applicants and time-to-fill, not
                  just application volume.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Benefits */}
      <section ref={whoRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <UserCheck className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Recruitment Marketing For Every Hiring Need
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'High-Volume Hiring',
                  description:
                    'Businesses hiring multiple positions benefit from scalable recruitment marketing that builds ongoing candidate pipelines.',
                },
                {
                  title: 'Specialized Roles',
                  description:
                    'Hard-to-fill technical or specialized positions require targeted outreach to passive candidates with specific skills.',
                },
                {
                  title: 'Competitive Markets',
                  description:
                    'Companies in tight labor markets need strong employer brands to win candidates considering multiple offers.',
                },
                {
                  title: 'Growth-Stage Companies',
                  description:
                    'Rapidly growing businesses need recruitment infrastructure that scales with their hiring needs.',
                },
                {
                  title: 'Employer Brand Repair',
                  description:
                    'Organizations with reputation challenges need strategic efforts to rebuild their employer image.',
                },
              ].map((type, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{type.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content We Create */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Lightbulb className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Content That Attracts Talent
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                <strong>We create recruitment-focused content including:</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Employee spotlight stories and interviews',
                  'Day-in-the-life content showing what work is really like',
                  'Behind-the-scenes culture content',
                  'Benefits and perks highlights',
                  'Career growth and development stories',
                  'Company mission and values content',
                  'Team event and celebration coverage',
                  'Industry expertise and thought leadership',
                  'Community involvement and social responsibility',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mt-6">
                This content builds your employer brand across your website, social media, email,
                and advertising—creating multiple touchpoints that influence candidate perception.
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
                  to="/social-media"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Social Media <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/content-marketing"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Content Marketing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/reputation-management"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Reputation Management <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/business-solutions"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Business Solutions <ArrowRight className="w-4 h-4" />
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
              Ready to Attract Top Talent?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build a recruitment marketing strategy that brings the best candidates to your
              door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Recruitment Marketing Consultation
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
                <span>20+ Years Marketing Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Employer Brand Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Results-Focused Strategies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
