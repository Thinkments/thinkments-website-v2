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
  Shield,
  Heart,
  Clock,
  MapPin,
} from 'lucide-react';
import SEO from '../SEO';

export default function FoursquareHealthcareCaseStudyPage() {
  const heroRef = useRef(null);
  const summaryRef = useRef(null);
  const contextRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const resultsRef = useRef(null);
  const testimonialRef = useRef(null);
  const insightsRef = useRef(null);
  const servicesRef = useRef(null);
  const relatedRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isSummaryInView = useInView(summaryRef, { once: true });
  const isContextInView = useInView(contextRef, { once: true });
  const isChallengeInView = useInView(challengeRef, { once: true });
  const isSolutionInView = useInView(solutionRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isTestimonialInView = useInView(testimonialRef, { once: true });
  const isInsightsInView = useInView(insightsRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isRelatedInView = useInView(relatedRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  return (
    <>
      <SEO
        title="Foursquare Healthcare Case Study | 150% Patient Increase | ThinkMents"
        description="See how ThinkMents helped Foursquare Healthcare achieve 150% increase in new patients, 280% traffic growth, and 4.8 star rating. HIPAA-compliant healthcare marketing success."
        url="/case-studies/foursquare-healthcare"
        type="article"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1080&fit=crop)',
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
                <span className="text-white">Foursquare Healthcare</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Foursquare Healthcare: Transforming Patient Acquisition
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                How a healthcare organization achieved 150% increase in new patients through
                HIPAA-compliant digital marketing
              </p>

              {/* Case Study Header Info */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div>
                  <div className="text-white/70 text-sm mb-1">Client</div>
                  <div className="text-white">Foursquare Healthcare</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Industry</div>
                  <div className="text-white">Healthcare / Medical Services</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Location</div>
                  <div className="text-white">Texas</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Services</div>
                  <div className="text-white text-sm">
                    Digital Marketing, SEO, Google Business Profile, Reputation Management
                  </div>
                </div>
              </div>

              {/* Key Result Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-[#FF6B35] text-white rounded-lg p-6 text-center"
              >
                <div className="text-5xl mb-2">150%</div>
                <div className="text-xl">Increase in New Patient Appointments</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section ref={summaryRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSummaryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-[#00B4D8]" />
              <h2
                className="text-3xl md:text-4xl text-[#1E3A5F]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Executive Summary
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#00B4D8]">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Foursquare Healthcare partnered with ThinkMents to overcome the unique challenges of
                marketing in the healthcare industry. Facing stiff competition from larger
                healthcare systems, strict compliance requirements, and difficulty reaching patients
                searching online, they needed a strategic partner who understood both digital
                marketing and healthcare.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Within the first year, ThinkMents helped Foursquare Healthcare dramatically increase
                their online visibility, build a stellar reputation, and generate a consistent flow
                of new patient appointments—all while maintaining full HIPAA compliance. This case
                study explores the specific challenges healthcare organizations face, the tailored
                strategies we implemented, and the measurable impact on patient acquisition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Industry Context */}
      <section ref={contextRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-[#00B4D8]" />
              <h2
                className="text-3xl md:text-4xl text-[#1E3A5F]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Marketing in Healthcare: Unique Challenges
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Healthcare marketing isn't like marketing any other business. Providers face obstacles
              that most industries never encounter:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl text-[#1E3A5F] mb-2">Regulatory Compliance</h3>
                      <p className="text-gray-700">
                        HIPAA regulations strictly govern how patient information can be used,
                        limiting traditional marketing tactics like testimonials and case studies.
                        One misstep can result in significant fines and reputation damage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Star className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl text-[#1E3A5F] mb-2">Trust is Everything</h3>
                      <p className="text-gray-700">
                        Patients aren't buying a product—they're trusting you with their health and
                        wellbeing. Marketing must build credibility and trust before anything else.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl text-[#1E3A5F] mb-2">Complex Decision Journey</h3>
                      <p className="text-gray-700">
                        Choosing a healthcare provider involves research, insurance verification,
                        location considerations, and often referrals. The path from awareness to
                        appointment is longer and more complex than typical consumer decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Target className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl text-[#1E3A5F] mb-2">Competitive Landscape</h3>
                      <p className="text-gray-700">
                        Large hospital systems with massive marketing budgets dominate online
                        visibility, making it difficult for independent practices and smaller
                        healthcare organizations to compete.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MessageSquare className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl text-[#1E3A5F] mb-2">Review Sensitivity</h3>
                      <p className="text-gray-700">
                        A single negative review carries enormous weight in healthcare. Patients
                        read reviews carefully, and managing online reputation is critical.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-[#1E3A5F] text-white rounded-lg p-6">
              <p className="text-lg leading-relaxed">
                <strong>ThinkMents understands these challenges intimately.</strong> We've worked
                with healthcare organizations across Texas, developing compliant, effective
                marketing strategies that respect the unique nature of patient relationships.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section ref={challengeRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isChallengeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#00B4D8]" />
              <h2
                className="text-3xl md:text-4xl text-[#1E3A5F]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Challenge
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When Foursquare Healthcare approached ThinkMents, they were struggling on multiple
              fronts:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FF6B35]">
                <h3 className="text-xl text-[#1E3A5F] mb-3">
                  Losing Patients to Larger Competitors
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Major healthcare systems in their area dominated Google search results and had
                  extensive advertising budgets. When patients searched for services Foursquare
                  offered, they found competitors first. Despite offering excellent care, Foursquare
                  was invisible to patients actively searching online.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FF6B35]">
                <h3 className="text-xl text-[#1E3A5F] mb-3">Outdated Digital Presence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Their website was several years old, not mobile-friendly, and didn't reflect the
                  quality of care they provided. Load times exceeded 6 seconds, frustrating
                  visitors. The site lacked clear information about services, providers, and how to
                  schedule appointments.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FF6B35]">
                <h3 className="text-xl text-[#1E3A5F] mb-3">Minimal Online Reviews</h3>
                <p className="text-gray-700 leading-relaxed">
                  While patients loved their care, very few left online reviews. Their Google
                  Business Profile had only 8 reviews compared to competitors with 100+. This lack
                  of social proof made potential patients hesitant to choose Foursquare over more
                  established-looking alternatives.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FF6B35]">
                <h3 className="text-xl text-[#1E3A5F] mb-3">No Patient Acquisition Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Marketing efforts were sporadic and unmeasured. They had no way to track where new
                  patients came from or calculate return on marketing investment. Budget was being
                  spent without understanding what was actually working.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FF6B35]">
                <h3 className="text-xl text-[#1E3A5F] mb-3">HIPAA Compliance Concerns</h3>
                <p className="text-gray-700 leading-relaxed">
                  Previous marketing attempts had raised compliance concerns. They needed a partner
                  who understood healthcare regulations and could implement effective marketing
                  without risking violations.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FF6B35]">
                <h3 className="text-xl text-[#1E3A5F] mb-3">Staff Capacity Limitations</h3>
                <p className="text-gray-700 leading-relaxed">
                  The administrative team was already stretched thin with patient care
                  responsibilities. They needed a marketing solution that didn't add significant
                  burden to existing staff.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FF6B35]">
                <h3 className="text-xl text-[#1E3A5F] mb-3">Appointment Scheduling Friction</h3>
                <p className="text-gray-700 leading-relaxed">
                  The process for new patients to schedule appointments was cumbersome, requiring
                  phone calls during business hours. Many potential patients abandoned the process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution */}
      <section ref={solutionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-[#00B4D8]" />
              <h2
                className="text-3xl md:text-4xl text-[#1E3A5F]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Solution
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ThinkMents developed a comprehensive, HIPAA-compliant digital marketing strategy:
            </p>

            {/* Phase 1 */}
            <div className="mb-10">
              <div className="bg-[#00B4D8] text-white rounded-t-lg p-4">
                <h3 className="text-2xl">Phase 1: Foundation & Compliance (Months 1-2)</h3>
              </div>
              <div className="bg-white border-2 border-[#00B4D8] rounded-b-lg p-6 space-y-6">
                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">
                    Healthcare-Focused Website Redesign
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We built a new website specifically designed for healthcare patient acquisition.
                    Features included:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Provider profiles with credentials and photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Detailed service pages answering common patient questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Online appointment request forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Insurance information and patient resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>ADA-compliant design</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    All content was reviewed for HIPAA compliance before publishing.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">
                    Google Business Profile Optimization
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    We optimized their GBP with accurate service categories, comprehensive business
                    information, professional photos of the facility and providers, and regular
                    posts about health topics. We implemented a compliant review generation system
                    that encourages satisfied patients to share their experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-10">
              <div className="bg-[#00B4D8] text-white rounded-t-lg p-4">
                <h3 className="text-2xl">Phase 2: Visibility Building (Months 2-6)</h3>
              </div>
              <div className="bg-white border-2 border-[#00B4D8] rounded-b-lg p-6 space-y-6">
                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">Healthcare SEO Strategy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our SEO approach targeted condition-specific and service-specific keywords
                    patients actually search for. We created educational content about health
                    conditions, treatment options, and what to expect—positioning Foursquare as a
                    trusted resource. Local SEO ensured visibility in "near me" searches and Google
                    Maps.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">Reputation Management System</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We implemented a systematic, compliant approach to generating patient reviews.
                    This included post-visit follow-up sequences, easy review links, and staff
                    training on asking for reviews appropriately. We also established monitoring and
                    response protocols for all online reviews.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">Content Marketing</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Educational blog content addressed common patient questions and concerns. Topics
                    were selected based on keyword research and patient feedback. All content was
                    medically reviewed and HIPAA-compliant while being accessible to general
                    audiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mb-10">
              <div className="bg-[#00B4D8] text-white rounded-t-lg p-4">
                <h3 className="text-2xl">Phase 3: Growth & Optimization (Months 6-12)</h3>
              </div>
              <div className="bg-white border-2 border-[#00B4D8] rounded-b-lg p-6 space-y-6">
                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">Conversion Optimization</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We continuously improved the website's ability to convert visitors into
                    appointment requests. This included A/B testing of calls-to-action, simplifying
                    the appointment request process, and adding live chat for immediate patient
                    questions.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">Provider Reputation Building</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Individual provider profiles were optimized for search, helping patients find
                    specific doctors and building trust before the first appointment.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">Performance Analytics</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive tracking connected marketing efforts to actual appointments.
                    Monthly reports showed exactly how many new patients came from each channel,
                    allowing strategic budget allocation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl text-[#1E3A5F] mb-3">Ongoing Compliance Review</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All marketing materials and patient communications were regularly reviewed to
                    ensure continued HIPAA compliance as regulations evolved.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Results */}
      <section
        ref={resultsRef}
        className="py-16 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Results
              </h2>
              <p className="text-xl text-white/90">
                The partnership delivered exceptional results for Foursquare Healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Patient Acquisition */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-[#FF6B35]" />
                    <h3 className="text-2xl text-white">Patient Acquisition</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>150% increase</strong> in new patient appointments from online
                        sources
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Online appointment requests grew from <strong>15/month to 60+/month</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Phone inquiries from website increased <strong>120%</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Patient acquisition cost decreased by <strong>45%</strong>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Search Visibility */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-8 h-8 text-[#FF6B35]" />
                    <h3 className="text-2xl text-white">Search Visibility</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Page 1 rankings for <strong>25+ healthcare service keywords</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>280% increase</strong> in organic search traffic
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Featured in <strong>Google's Local 3-Pack</strong> for primary services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>400% increase</strong> in Google Business Profile views and actions
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Online Reputation */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-8 h-8 text-[#FF6B35]" />
                    <h3 className="text-2xl text-white">Online Reputation</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Google rating improved from <strong>4.1 to 4.8 stars</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Review count grew from <strong>8 to 95+ reviews</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>100% response rate</strong> to all patient reviews
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Became <strong>highest-rated provider</strong> in their category locally
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Website Performance */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="w-8 h-8 text-[#FF6B35]" />
                    <h3 className="text-2xl text-white">Website Performance</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Page load time reduced from <strong>6+ seconds to 1.5 seconds</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Mobile traffic increased <strong>190%</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Appointment request form completions up <strong>340%</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Average time on site increased <strong>75%</strong>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Results */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-[#FF6B35]" />
                    <h3 className="text-2xl text-white">Competitive Position</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        Now outranks <strong>2 of 3 major competitors</strong> for primary keywords
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Increased market share in service area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Recognized as a leading provider in online searches</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-[#FF6B35]" />
                    <h3 className="text-2xl text-white">Revenue Impact</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>40% increase in revenue</strong> attributed to digital marketing
                        efforts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        ROI of <strong>6:1</strong> on marketing investment
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Predictable patient flow enabling capacity planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Reduced dependence on physician referrals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Compliance Callout */}
            <div className="mt-8 bg-[#00B4D8] rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Shield className="w-8 h-8 text-white" />
                <h3 className="text-2xl text-white">Compliance Achievement</h3>
              </div>
              <p className="text-xl text-white">
                <strong>Zero HIPAA violations or concerns</strong> • All marketing materials
                audit-ready • Established repeatable, compliant processes
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section ref={testimonialRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 border-[#00B4D8]">
              <div className="flex items-center justify-center mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-[#FF6B35] text-[#FF6B35]" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 text-center italic">
                "As a healthcare organization, we were nervous about digital marketing and the
                compliance implications. ThinkMents understood our concerns from day one. They built
                a strategy that's not only effective but completely HIPAA-compliant. Our online
                presence has transformed—we're now the first result when patients search for our
                services, and our reviews speak for themselves. Most importantly, we're helping more
                patients than ever before. ThinkMents feels like an extension of our team."
              </blockquote>

              <div className="text-center">
                <div className="text-[#1E3A5F] mb-1">Healthcare Administrator</div>
                <div className="text-[#00B4D8]">Foursquare Healthcare</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Marketing Insights */}
      <section ref={insightsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInsightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-[#00B4D8]" />
              <h2
                className="text-3xl md:text-4xl text-[#1E3A5F]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Healthcare Marketing Insights
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Key Lessons for Healthcare Organizations:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="pt-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">
                    Compliance and Results Aren't Mutually Exclusive
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    With the right approach, healthcare organizations can implement aggressive
                    digital marketing while maintaining full regulatory compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="pt-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Reviews Matter More in Healthcare</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Patients research healthcare providers more thoroughly than almost any other
                    purchase. A strong review profile directly impacts patient acquisition.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="pt-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Educational Content Builds Trust</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Healthcare content that genuinely helps patients understand their conditions and
                    options builds the trust necessary for them to choose your organization.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="pt-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Mobile Experience is Critical</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Patients often search for healthcare on mobile devices, especially in urgent
                    situations. A fast, mobile-friendly website is non-negotiable.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] md:col-span-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">
                    Local Visibility Drives Appointments
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For most healthcare organizations, local SEO and Google Business Profile
                    optimization deliver the fastest path to new patients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Used */}
      <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl text-[#1E3A5F] mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Services Used in This Project
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                to="/web-development"
                className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                    Healthcare Website Design
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00B4D8] ml-auto" />
              </Link>

              <Link
                to="/marketing-seo"
                className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                    Medical SEO
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00B4D8] ml-auto" />
              </Link>

              <Link
                to="/google-business-profile"
                className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                    Google Business Profile
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00B4D8] ml-auto" />
              </Link>

              <Link
                to="/reputation-management"
                className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                    Reputation Management
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00B4D8] ml-auto" />
              </Link>

              <Link
                to="/content-marketing"
                className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                    Content Marketing
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00B4D8] ml-auto" />
              </Link>

              <Link
                to="/analytics-reporting"
                className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                    Analytics & Reporting
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#00B4D8] ml-auto" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section ref={relatedRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl text-[#1E3A5F] mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              See More Success Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Link
                to="/case-studies/chenevert"
                className="group bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-2 group-hover:text-[#00B4D8] transition-colors">
                    Chenevert's Home & Hardware
                  </h3>
                  <p className="text-gray-600 mb-4">200% lead increase for local hardware store</p>
                  <div className="flex items-center text-[#00B4D8] group-hover:gap-2 transition-all">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link
                to="/case-studies/decatur-chamber"
                className="group bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-2 group-hover:text-[#00B4D8] transition-colors">
                    Decatur Chamber of Commerce
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Top 3 local rankings for chamber organization
                  </p>
                  <div className="flex items-center text-[#00B4D8] group-hover:gap-2 transition-all">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link
                to="/case-studies/casa"
                className="group bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] flex items-center justify-center">
                  <Heart className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-2 group-hover:text-[#00B4D8] transition-colors">
                    CASA of North Texas
                  </h3>
                  <p className="text-gray-600 mb-4">250% traffic increase for non-profit</p>
                  <div className="flex items-center text-[#00B4D8] group-hover:gap-2 transition-all">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/case-studies">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8 py-6 text-lg">
                  View All Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
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
            <div className="mb-6">
              <Shield className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ready to Grow Your Healthcare Practice?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                We understand the unique challenges of healthcare marketing. Let's discuss how we
                can help you reach more patients while maintaining full compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/free-consultation">
                <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-6 text-lg">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:9403151023">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8 py-6 text-lg"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call (940) 315-1023
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>HIPAA-Compliant Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Healthcare Specialists</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
