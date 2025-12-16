import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Users,
  Target,
  Award,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Heart,
  Lightbulb,
  TrendingUp,
  MessageSquare,
  Clock,
  Shield,
  BookOpen,
  Briefcase,
  BarChart3,
  Code,
  Megaphone,
  Share2,
  FileText,
  MapPin,
  Zap,
  HelpCircle
} from 'lucide-react';
import SEO from '../SEO';

export default function TeamPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const leadershipRef = useRef(null);
  const philosophyRef = useRef(null);
  const expertiseRef = useRef(null);
  const valuesRef = useRef(null);
  const workingWithRef = useRef(null);
  const tenureRef = useRef(null);
  const certificationsRef = useRef(null);
  const joinRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isLeadershipInView = useInView(leadershipRef, { once: true });
  const isPhilosophyInView = useInView(philosophyRef, { once: true });
  const isExpertiseInView = useInView(expertiseRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });
  const isWorkingWithInView = useInView(workingWithRef, { once: true });
  const isTenureInView = useInView(tenureRef, { once: true });
  const isCertificationsInView = useInView(certificationsRef, { once: true });
  const isJoinInView = useInView(joinRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const faqs = [
    {
      question: 'Will I have a dedicated account manager?',
      answer: 'Yes. Every client has a dedicated primary contact who knows your business and serves as your main point of communication. You\'ll also have access to specialists as needed.'
    },
    {
      question: 'How quickly can I expect responses?',
      answer: 'We respond to emails within 24 business hours, often much faster. Urgent matters can be addressed via phone for immediate response.'
    },
    {
      question: 'What if my main contact is on vacation?',
      answer: 'Our collaborative approach means multiple team members are familiar with your account. Coverage is always arranged so you\'re never left without support.'
    },
    {
      question: 'Can I meet the team working on my account?',
      answer: 'Absolutely. We introduce you to everyone working on your projects and encourage direct communication with specialists when helpful.'
    },
    {
      question: 'How do you stay current with industry changes?',
      answer: 'Ongoing training, industry conferences, certifications, and internal knowledge sharing. When something changes in digital marketing, our team knows about it.'
    }
  ];

  return (
    <>
      <SEO
        title="Our Team - Meet the ThinkMents Digital Marketing Team"
        description="Meet the dedicated professionals behind ThinkMents. 20+ years experience, hands-on leadership, and a team that treats your business like their own. Based in Decatur, Texas."
        url="/team"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&fit=crop)',
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
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Team</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                MEET OUR TEAM
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                The People Behind ThinkMents
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Dedicated professionals who care deeply about your success
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '31', label: 'States Served' },
                  { stat: '5.0', label: 'Google Rating' },
                  { stat: 'Dedicated', label: 'Account Teams' }
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
                  <Link to="/free-consultation">Meet Your Team</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
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
                Behind every successful marketing campaign is a team of dedicated professionals who care deeply about client success. At ThinkMents, we've assembled a group of experienced marketers, creative thinkers, and technical experts who bring diverse skills and perspectives to every project. <strong>Our team has been working together to help businesses grow since 2002</strong>—and many of our team members have been with us for years, building deep expertise and lasting client relationships. When you work with ThinkMents, you're not just hiring an agency—you're gaining a dedicated team that treats your business like their own.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Leadership */}
      <section ref={leadershipRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLeadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Leadership That's Hands-On
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unlike large agencies where leadership is disconnected from day-to-day work, ThinkMents' leadership remains actively involved in client success. <strong>Our founder has over 20 years of digital marketing experience and still personally oversees strategy for key accounts.</strong>
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl text-[#1E3A5F] mb-4">This hands-on approach means:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Direct access to senior expertise on your account</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Strategic decisions made by people who understand your business</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Accountability at the highest levels</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Quick responses when you need them</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                We believe leadership should lead by example—not just manage from a distance. <strong>When you call ThinkMents, you'll talk to people who can actually make decisions and solve problems</strong>, not layers of account coordinators reading from scripts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section ref={philosophyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                How Our Team Works
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#00B4D8]" />
                    Dedicated Account Teams
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You won't be passed around from person to person. Each client works with a dedicated team that knows your business, your goals, and your history. Your team members become true partners who understand your industry and remember your preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-[#00B4D8]" />
                    Collaborative Approach
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    While you have dedicated contacts, your projects benefit from our entire team's expertise. SEO specialists consult with content creators. Designers collaborate with developers. This cross-functional collaboration produces better results than siloed work.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[#00B4D8]" />
                    Continuous Training
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Digital marketing evolves constantly, and so does our team. We invest heavily in ongoing education—certifications, conferences, courses, and internal knowledge sharing. When Google updates its algorithm or a platform introduces new features, our team is prepared.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-[#00B4D8]" />
                    Communication First
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe in proactive, transparent communication. You'll always know what we're working on, what's coming next, and how your campaigns are performing. No surprises, no mysteries, no waiting weeks for responses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#00B4D8]" />
                    Results-Oriented
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every team member is focused on driving measurable results for clients. We celebrate rankings and traffic, but we really celebrate leads, sales, and revenue growth. Your success metrics are our success metrics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section ref={expertiseRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Briefcase className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Team's Expertise
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Search Engine Optimization
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Certified SEO professionals with experience across local, national, and e-commerce SEO. Technical audits, content optimization, link building, and strategy development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3 flex items-center gap-2">
                    <Megaphone className="w-6 h-6" />
                    Paid Advertising
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Google Ads certified specialists managing campaigns across search, display, shopping, and video. Facebook, Instagram, and LinkedIn advertising expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Content & Creative
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Writers, designers, and videographers who create compelling content that engages audiences and ranks in search. From blog posts to brand videos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3 flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    Web Development
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Developers building fast, mobile-friendly, conversion-optimized websites. Experience with React, WordPress, custom solutions, and e-commerce platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3 flex items-center gap-2">
                    <Share2 className="w-6 h-6" />
                    Social Media
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Strategists and content creators managing presence across all major platforms. Organic content, paid social, and community management.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6" />
                    Analytics & Reporting
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Data analysts who translate numbers into actionable insights. Google Analytics certified with experience in attribution, conversion tracking, and ROI analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3 flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    Local Marketing
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Google Business Profile experts and local SEO specialists helping businesses dominate their geographic markets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                What Drives Our Team
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Client Obsession</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We genuinely care about our clients' success. Late nights before a big launch, extra research to solve a tricky problem, celebratory messages when results exceed expectations—our team goes above and beyond because we're invested in outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Integrity Always</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We tell clients the truth, even when it's not what they want to hear. We don't oversell, overpromise, or hide problems. This honesty builds trust and produces better long-term results.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Continuous Improvement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're never satisfied with 'good enough.' Our team constantly looks for ways to improve—better processes, better results, better communication. This drive for excellence benefits every client we serve.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Team Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We help each other succeed. Knowledge sharing, covering during vacations, celebrating wins together—our collaborative culture makes us stronger as individuals and as an agency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working With Our Team */}
      <section ref={workingWithRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWorkingWithInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Zap className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                What to Expect When You Work With Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#00B4D8]" />
                    Responsive Communication
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Emails answered within 24 hours. Phone calls returned promptly. Questions addressed thoroughly. You'll never feel like you're chasing us for updates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#00B4D8]" />
                    Regular Check-Ins
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Scheduled calls and meetings keep you informed and give you opportunities to provide feedback, ask questions, and adjust priorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#00B4D8]" />
                    Clear Reporting
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Monthly reports that actually make sense—not data dumps that require a PhD to interpret. We explain what the numbers mean and what we're doing about them.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-[#00B4D8]" />
                    Strategic Partnership
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't just execute tasks—we think strategically about your business and proactively suggest improvements and opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#00B4D8]" />
                    Accessibility
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Need to reach us urgently? You can. We provide direct contact information for your team members, not generic support queues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Tenure & Stability */}
      <section ref={tenureRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTenureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                A Stable, Experienced Team
              </h2>
            </div>

            <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#00B4D8]">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Agency turnover is notoriously high, but ThinkMents is different. <strong>Our team members stay because they love what they do and where they work.</strong> This stability means:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Consistent contacts who know your business history</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Deep expertise built over years</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Long-term strategic thinking (not just short-term tactics)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Relationships that strengthen over time</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    When you partner with ThinkMents, you're not constantly training new account managers on your business. You're working with experienced professionals who remember what you discussed last month and last year.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section ref={certificationsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCertificationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Professional Credentials
              </h2>
              <p className="text-xl text-gray-600">
                Our team maintains current certifications and credentials
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Google Ads Certified',
                  'Google Analytics Certified',
                  'Google Business Profile Certified',
                  'HubSpot Inbound Marketing Certified',
                  'Facebook Blueprint Certified',
                  'SEMrush SEO Certified',
                  'Matterport Certified (Virtual Tours)',
                  'FAA Part 107 Licensed (Drone Operations)'
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed text-center">
                  <strong>We invest in these certifications not just for the badges, but because the training makes us better at serving clients.</strong> Continuous learning is part of our culture.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Callout */}
      <section ref={joinRef} className="py-20 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isJoinInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Interested in Joining Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always looking for talented people who share our passion for digital marketing and client success. If you're a skilled marketer, developer, designer, or creative professional looking for a team that values your contributions and invests in your growth, we'd love to hear from you.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
            >
              <Link to="/careers">
                View Career Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
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
              <p className="text-gray-600 mb-4">Learn more about us:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about-us" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  About Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/our-story" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/testimonials" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Testimonials <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/case-studies" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact-us" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Contact Us <ArrowRight className="w-4 h-4" />
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
              Ready to Meet Your Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your goals and introduce you to the people who'll help you achieve them.
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
                <span>Dedicated Account Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
