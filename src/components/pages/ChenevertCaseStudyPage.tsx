import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import {
  Search,
  Star,
  TrendingUp,
  Target,
  Monitor,
  BarChart,
  Globe,
  Zap,
  CheckCircle,
  Phone,
  ChevronRight,
  Award,
  ArrowRight,
  FileText,
  Users,
  MessageSquare,
  Building2,
} from 'lucide-react';
import SEO from '../SEO';

export default function ChenevertCaseStudyPage() {
  const heroRef = useRef(null);
  const summaryRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const resultsRef = useRef(null);
  const testimonialRef = useRef(null);
  const takeawaysRef = useRef(null);
  const servicesRef = useRef(null);
  const relatedRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isSummaryInView = useInView(summaryRef, { once: true });
  const isChallengeInView = useInView(challengeRef, { once: true });
  const isSolutionInView = useInView(solutionRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isTestimonialInView = useInView(testimonialRef, { once: true });
  const isTakeawaysInView = useInView(takeawaysRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isRelatedInView = useInView(relatedRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  return (
    <>
      <SEO
        title="Chenevert's Home & Hardware Case Study | 200% Lead Increase | ThinkMents"
        description="See how ThinkMents helped Chenevert's achieve 200% lead increase, 340% traffic growth, and page 1 Google rankings. Retail marketing success story in Texas."
        url="/case-studies/chenevert"
        type="article"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/75"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Chenevert's Home & Hardware</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Chenevert's Home & Hardware: Complete Digital Transformation
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                How a local hardware store achieved 200% lead increase and dominated local search
                results
              </p>

              {/* Case Study Header Info */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div>
                  <div className="text-white/70 text-sm mb-1">Client</div>
                  <div className="text-white font-semibold">Chenevert's Home & Hardware</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Industry</div>
                  <div className="text-white font-semibold">Retail / Hardware Store</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Location</div>
                  <div className="text-white font-semibold">Texas</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Key Result</div>
                  <div className="text-white font-semibold text-[#FF6B35]">200% Lead Increase</div>
                </div>
              </div>

              {/* Services Used */}
              <div className="mt-6">
                <div className="text-white/70 text-sm mb-3">Services Used:</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Marketing & SEO',
                    'Web Development',
                    'Google Business Profile',
                    'Content Marketing',
                  ].map((service, idx) => (
                    <span
                      key={idx}
                      className="bg-[#00B4D8] text-white text-sm px-4 py-2 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section ref={summaryRef} className="py-16 bg-gradient-to-r from-[#1E3A5F]/5 to-[#00B4D8]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSummaryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Executive Summary
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Chenevert came to ThinkMents facing significant challenges with their online
                  visibility and lead generation. Despite offering excellent services, they
                  struggled to compete with larger competitors who dominated local search results.
                  Within 12 months of partnering with ThinkMents, Chenevert experienced a complete
                  transformation in their digital presence—ranking on page one for their primary
                  keywords, generating a consistent flow of qualified leads, and significantly
                  increasing revenue. This case study details the challenges they faced, the
                  strategies we implemented, and the measurable results achieved.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section ref={challengeRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isChallengeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple obstacles preventing growth and visibility
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isChallengeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <p className="mb-6">
                When Chenevert first contacted ThinkMents, they were facing multiple obstacles that
                prevented growth:
              </p>
            </motion.div>

            {[
              {
                title: 'Invisible Online Presence',
                description:
                  'Their website was buried on page 5+ of Google search results for key service terms. Potential customers searching for their services were finding competitors instead. Their Google Business Profile was incomplete and had minimal reviews, making them virtually invisible in local map results.',
              },
              {
                title: 'Outdated Website',
                description:
                  'Their existing website was over 5 years old, not mobile-friendly, and loaded slowly. The design looked dated compared to competitors, undermining credibility with potential customers. There were no clear calls-to-action, and the contact form was buried and rarely used.',
              },
              {
                title: 'No Marketing Strategy',
                description:
                  'Chenevert had tried various marketing tactics over the years—a little social media here, some print ads there—but nothing was coordinated or measurable. They had no way to track what was working and were essentially throwing money at random tactics hoping something would stick.',
              },
              {
                title: 'Inconsistent Lead Flow',
                description:
                  'Business came primarily through word-of-mouth referrals, which was unpredictable. Some months were busy, others were slow. They needed a reliable, consistent source of new customers to plan for growth and hire additional staff.',
              },
              {
                title: 'Competitive Market',
                description:
                  'Their local market included several well-established competitors with strong online presences, bigger marketing budgets, and years of accumulated reviews. Breaking through seemed nearly impossible with their limited resources.',
              },
              {
                title: 'Previous Agency Disappointment',
                description:
                  'Before finding ThinkMents, Chenevert had worked with another marketing agency that overpromised and underdelivered. They were skeptical about whether digital marketing could actually work for their business.',
              },
            ].map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isChallengeInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{challenge.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section ref={solutionRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive digital marketing strategy addressing each challenge
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                ThinkMents developed a comprehensive digital marketing strategy addressing each of
                Chenevert's challenges:
              </p>
            </motion.div>

            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="border-l-4 border-[#00B4D8]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F]">
                      Phase 1: Foundation Building (Months 1-2)
                    </h3>
                  </div>

                  <div className="space-y-6 ml-13">
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Website Redesign:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We designed and built a completely new website focused on conversions. The
                        new site featured modern, professional design that positioned Chenevert as a
                        market leader. We implemented mobile-responsive design, fast loading speeds
                        (under 2 seconds), clear service pages, prominent calls-to-action, and an
                        easy-to-use contact form. Every page was optimized for search engines from
                        the ground up.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Google Business Profile Optimization:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We claimed and completely optimized their Google Business Profile with
                        accurate business information, service descriptions, high-quality photos,
                        and a review generation strategy. We implemented a system to request reviews
                        from satisfied customers, building their reputation over time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <Card className="border-l-4 border-[#00B4D8]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F]">
                      Phase 2: Visibility & Traffic (Months 2-6)
                    </h3>
                  </div>

                  <div className="space-y-6 ml-13">
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Search Engine Optimization:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our SEO strategy targeted high-intent keywords that potential customers
                        actually search for. We conducted thorough keyword research, optimized all
                        website content, built quality backlinks, and created new content addressing
                        common customer questions. Technical SEO improvements ensured Google could
                        properly crawl and index the site.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Local SEO Focus:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We optimized for local search terms and "near me" queries that drive
                        immediate business. This included citation building, local content creation,
                        and ongoing Google Business Profile management with regular posts and
                        updates.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Content Marketing:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We created valuable blog content answering questions their target customers
                        commonly ask. This content attracted organic traffic, established expertise,
                        and provided shareable resources for social media.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-l-4 border-[#00B4D8]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F]">
                      Phase 3: Optimization & Scaling (Months 6-12)
                    </h3>
                  </div>

                  <div className="space-y-6 ml-13">
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Performance Analysis:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Monthly analysis of traffic, rankings, and conversions allowed us to double
                        down on what was working and adjust what wasn't. We tracked every lead
                        source to calculate true ROI.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Conversion Rate Optimization:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        A/B testing of headlines, calls-to-action, and page layouts continuously
                        improved the percentage of visitors who converted into leads.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                        Review Generation:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our systematic approach to requesting reviews built Chenevert's reputation
                        from a handful of reviews to 50+ five-star reviews, significantly impacting
                        local search visibility and customer trust.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section ref={resultsRef} className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-5xl mx-auto mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Results
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              The partnership between Chenevert and ThinkMents delivered transformational results
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { stat: '340%', label: 'Increase in Organic Search Traffic', icon: TrendingUp },
                { stat: '15+', label: 'Page 1 Keywords (up from 0)', icon: Search },
                { stat: '500%', label: 'Google Business Profile Views', icon: Globe },
                { stat: '200%', label: 'Increase in Monthly Leads', icon: Target },
                { stat: '180%', label: 'Phone Calls from Website', icon: Phone },
                { stat: '60%', label: 'Decrease in Cost Per Lead', icon: BarChart },
              ].map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isResultsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"
                >
                  <result.icon className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {result.stat}
                  </div>
                  <p className="text-white/90 leading-relaxed">{result.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Online Reputation</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Google rating improved from 3.8 to 4.9 stars</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Review count grew from 12 to 75+ reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Positive review response rate of 100%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Revenue Impact</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>45% increase in annual revenue attributed to digital marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>ROI of 8:1 on marketing investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Predictable monthly lead flow enabling growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Website Performance</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Page load time reduced from 8 seconds to 1.8 seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Mobile traffic increased 220%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Bounce rate decreased from 65% to 35%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Timeline to Results</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Month 1-2: New website launched, GBP optimized</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Month 3: First page rankings for 3 keywords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Month 6: Leads doubled from baseline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                      <span>Month 12: All primary goals exceeded</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section ref={testimonialRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <MessageSquare className="w-16 h-16 text-[#00B4D8] mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What Our Client Says
            </h2>
            <Card className="border-2 border-[#00B4D8]">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "ThinkMents completely changed our business. Before working with them, we were
                  invisible online and struggling to find new customers. Now we're on the first page
                  of Google, getting calls every day, and have more work than we can handle. They
                  took the time to understand our business and created a strategy that actually
                  works. The team is responsive, transparent, and genuinely cares about our success.
                  I wish we had found them years ago."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[#1E3A5F]">Business Owner</div>
                    <div className="text-gray-600">Chenevert's Home & Hardware</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section ref={takeawaysRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTakeawaysInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Key Takeaways
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Lessons from this project</p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Monitor,
                title: 'Foundation First',
                description:
                  'Before driving traffic, you need a website that converts. Investing in a professional, fast, mobile-friendly website paid dividends throughout the entire campaign.',
              },
              {
                icon: Globe,
                title: 'Local SEO Matters',
                description:
                  'For service-area businesses, Google Business Profile optimization and local SEO are often the fastest path to results. Being visible in map results drives immediate calls and leads.',
              },
              {
                icon: TrendingUp,
                title: 'Patience Pays Off',
                description:
                  'SEO is a long-term investment. While we saw early wins, the compounding effect of consistent optimization delivered the biggest results over 6-12 months.',
              },
              {
                icon: Star,
                title: 'Reviews Build Trust',
                description:
                  "A systematic approach to generating reviews transformed Chenevert's online reputation, directly impacting both search visibility and conversion rates.",
              },
              {
                icon: BarChart,
                title: 'Measure Everything',
                description:
                  'By tracking every lead source, we could prove ROI and make data-driven decisions about where to invest resources.',
              },
              {
                icon: Target,
                title: 'Success is Repeatable',
                description:
                  'The strategies that worked for Chenevert can work for similar businesses facing the same challenges. This success model is proven and repeatable.',
              },
            ].map((takeaway, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isTakeawaysInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4">
                      <takeaway.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1E3A5F] text-xl mb-3">{takeaway.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{takeaway.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Used Section */}
      <section ref={servicesRef} className="py-16 bg-gradient-to-r from-[#1E3A5F]/5 to-[#00B4D8]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Services Used in This Project
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Website Design & Development', link: '/web-development', icon: Monitor },
                { name: 'Search Engine Optimization', link: '/marketing-seo', icon: Search },
                {
                  name: 'Google Business Profile Management',
                  link: '/google-business-profile',
                  icon: Star,
                },
                { name: 'Content Marketing', link: '/content-marketing', icon: FileText },
                {
                  name: 'Reputation Management',
                  link: '/reputation-management',
                  icon: MessageSquare,
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link to={service.link}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#00B4D8] cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-[#1E3A5F]">{service.name}</span>
                          <ArrowRight className="w-4 h-4 text-[#00B4D8] ml-auto" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies Section */}
      <section ref={relatedRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              See More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how we've helped other businesses achieve similar results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Foursquare Healthcare',
                description: 'Healthcare digital marketing success generating $400M+ in revenue',
                stat: '$400M+',
                statLabel: 'Revenue Generated',
                link: '/case-studies/foursquare-healthcare',
                icon: Building2,
              },
              {
                title: 'Decatur Chamber',
                description: 'Chamber of commerce website redesign creating modern web presence',
                stat: 'Modern',
                statLabel: 'Web Presence',
                link: '/case-studies/decatur-chamber',
                icon: Building2,
              },
              {
                title: 'CASA of North Texas',
                description: 'Non-profit digital expansion with 250% traffic increase',
                stat: '250%',
                statLabel: 'Traffic Increase',
                link: '/case-studies/casa',
                icon: Building2,
              },
            ].map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={study.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4">
                        <study.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#1E3A5F] text-xl mb-3">{study.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {study.description}
                      </p>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="text-2xl font-bold text-[#00B4D8] mb-1">{study.stat}</div>
                        <div className="text-gray-600 text-sm">{study.statLabel}</div>
                      </div>
                      <div className="flex items-center gap-2 text-[#00B4D8] mt-4">
                        <span className="font-semibold text-sm">View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isRelatedInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
            >
              <Link to="/case-studies" className="flex items-center gap-2">
                View All Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
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
              Ready to Get Similar Results?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how we can help your business achieve the same transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Schedule Free Consultation</Link>
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
                <span>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
