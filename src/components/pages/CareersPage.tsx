import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Rocket,
  Users,
  GraduationCap,
  MapPin,
  Mail,
  Building,
  CheckCircle,
  Heart,
  Target,
  TrendingUp,
  Award,
  Coffee,
  Calendar,
  DollarSign,
  BookOpen,
  Smile,
  Phone,
  ArrowRight,
  ChevronRight,
  Briefcase,
  Code,
  Megaphone,
  Camera,
  UserCheck,
  Quote,
} from 'lucide-react';
import SEO from '../SEO';

export default function CareersPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyWorkRef = useRef(null);
  const cultureRef = useRef(null);
  const benefitsRef = useRef(null);
  const whoWeWantRef = useRef(null);
  const departmentsRef = useRef(null);
  const openingsRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyWorkInView = useInView(whyWorkRef, { once: true });
  const isCultureInView = useInView(cultureRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isWhoWeWantInView = useInView(whoWeWantRef, { once: true });
  const isDepartmentsInView = useInView(departmentsRef, { once: true });
  const isOpeningsInView = useInView(openingsRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const faqs = [
    {
      question: 'Do you hire remote workers?',
      answer:
        "Some roles can be partially or fully remote, while others benefit from in-office collaboration. We'll discuss specifics during the interview process.",
    },
    {
      question: "What's Decatur, Texas like?",
      answer:
        'Decatur is a charming small town about 45 minutes northwest of Fort Worth. It offers affordable living, a tight-knit community, and easy access to the DFW Metroplex. Many team members live in Decatur, while others commute from surrounding areas.',
    },
    {
      question: 'Do I need a marketing degree?',
      answer:
        'No. We value skills, aptitude, and attitude over credentials. Some of our best team members came from non-traditional backgrounds.',
    },
    {
      question: "What's the team size?",
      answer:
        "We're a small, focused team—which means you'll have real impact and won't get lost in corporate bureaucracy.",
    },
    {
      question: 'Do you offer internships?',
      answer:
        "We occasionally offer internships for motivated students or career changers. Reach out if you're interested.",
    },
    {
      question: 'How do you handle professional development?',
      answer:
        'We provide training budgets, access to industry tools, and encourage conference attendance. Learning is part of the job here.',
    },
  ];

  return (
    <>
      <SEO
        title="Careers - Join the ThinkMents Digital Marketing Team"
        description="Build your career at ThinkMents. Join a team pioneering digital marketing since 2002. We value innovation, work-life balance, and real impact. Based in Decatur, Texas."
        url="/careers"
        type="website"
      />

      {/* Hero Section */}
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
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Careers</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                JOIN OUR TEAM
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Build Your Career at ThinkMents
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Join a team that's been pioneering digital marketing since 2002
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '2002', label: 'Founded' },
                  { stat: '31', label: 'States Served' },
                  { stat: 'Small', label: 'Team Size' },
                  { stat: 'Big', label: 'Impact' },
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
                  <a href="mailto:careers@thinkments.com">View Open Positions</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
                >
                  <Link to="/about-us">Learn About Us</Link>
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
                Join a team that's been pioneering digital marketing since before social media
                existed.{' '}
                <strong>
                  ThinkMents Digital Marketing Agency has been helping businesses grow online since
                  2002
                </strong>
                —and we're looking for talented people who share our passion for innovation,
                results, and client success. Based in Decatur, Texas, we serve clients across 31
                states, combining small-town values with big-agency capabilities. If you're looking
                for a career where you can make a real impact, learn constantly, and be part of a
                team that genuinely cares about each other and our clients, you might be exactly who
                we're looking for.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work at ThinkMents */}
      <section ref={whyWorkRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyWorkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why People Love Working Here
              </h2>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#00B4D8]" />
                    Make Real Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    At ThinkMents, you're not a cog in a machine. Your work directly impacts client
                    success—and you'll see those results. When a client ranks #1 for their primary
                    keyword or doubles their leads, you'll know your work made it happen. We
                    celebrate wins together because every team member contributes to success.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-[#00B4D8]" />
                    Constant Learning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Digital marketing never stops evolving, and neither do we. We invest in
                    training, conferences, certifications, and tools that keep our team at the
                    cutting edge. You'll learn something new every week—and we encourage
                    experimentation and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Smile className="w-6 h-6 text-[#00B4D8]" />
                    Work-Life Balance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe great work comes from people who have full lives outside of work. We
                    offer flexible scheduling, respect your personal time, and understand that life
                    happens. Burnout doesn't produce good marketing—happy, rested team members do.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#00B4D8]" />
                    Small Team, Big Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You won't get lost in corporate bureaucracy. Every team member has a voice,
                    contributes to strategy, and has direct access to leadership. Ideas get heard
                    and implemented—not buried in committee meetings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-[#00B4D8]" />
                    Texas Values
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're based in Decatur because we love our community. We believe in hard work,
                    honest communication, and treating people right—clients and team members alike.
                    If big-city agency politics aren't your thing, you'll fit right in.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-[#00B4D8]" />
                    Long-Term Relationships
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our average employee tenure exceeds industry standards because we invest in our
                    people. We want you to build a career here, not just take a job.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Culture */}
      <section ref={cultureRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Culture & Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Client Obsession</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our clients' success is our success. We go the extra mile, answer the phone, and
                    solve problems because we genuinely care about the businesses we serve.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Radical Transparency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No politics, no hidden agendas. We communicate openly—with each other and with
                    clients. If something's not working, we address it directly and fix it.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Continuous Improvement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Good enough isn't good enough. We're always looking for ways to improve our
                    work, our processes, and ourselves. Constructive feedback is welcomed and
                    expected.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Ownership Mentality</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't pass the buck. If you see a problem, you own it until it's solved. This
                    autonomy comes with responsibility—and the satisfaction of truly owning your
                    work.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Collaboration Over Competition</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We win as a team. Knowledge sharing, helping colleagues, and celebrating each
                    other's successes are part of how we work.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Innovation & Experimentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We try new things. Some work brilliantly, some don't—and that's okay. We learn
                    from both and keep pushing forward.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Community Involvement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We give back to the communities we serve through volunteering, sponsorships, and
                    pro-bono work for local nonprofits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section
        ref={benefitsRef}
        className="py-16 md:py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Coffee className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                What We Offer
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    Compensation
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Competitive salaries based on experience and role</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Performance bonuses tied to client and company success</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Annual salary reviews with growth opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    Time Off & Flexibility
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Paid time off that increases with tenure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Flexible scheduling options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Remote work possibilities for appropriate roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Paid holidays including the week between Christmas and New Year</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Professional Development
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Training budget for courses, certifications, and conferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Access to premium marketing tools and software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Industry event attendance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Internal knowledge sharing sessions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#00B4D8] mb-4">Additional Benefits</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Health insurance options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Retirement savings opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Team outings and celebrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>Community volunteer opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-[#FF6B35] rounded-lg p-6">
              <p className="text-white text-lg leading-relaxed text-center">
                <strong>
                  We're always looking for ways to improve our benefits package based on team
                  feedback. What matters to you matters to us.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section ref={whoWeWantRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhoWeWantInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <UserCheck className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The ThinkMents Type
              </h2>
              <p className="text-xl text-gray-600">You might be perfect for ThinkMents if you:</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Get excited about helping businesses grow',
                  'Love learning new things and staying current with industry changes',
                  'Take ownership of your work and see projects through to completion',
                  "Communicate clearly and aren't afraid to speak up",
                  'Thrive in a collaborative environment but can work independently',
                  'Care about quality and sweat the details',
                  'Want to be part of something bigger than yourself',
                  'Value work-life balance and have interests outside of work',
                  'Prefer direct feedback over corporate politeness',
                  'Are looking for a long-term career, not just a job',
                ].map((trait, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{trait}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  <strong>We don't require specific degrees or backgrounds</strong>—we care about
                  aptitude, attitude, and results. Some of our best team members came from
                  unexpected places.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments & Roles */}
      <section ref={departmentsRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDepartmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Briefcase className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Teams & Opportunities
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#00B4D8]" />
                    SEO & Content
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    SEO specialists, content writers, content strategists, and link builders who
                    drive organic growth for our clients. You'll conduct keyword research, create
                    content strategies, write and optimize content, and build authority for client
                    websites.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Megaphone className="w-6 h-6 text-[#00B4D8]" />
                    Paid Media
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    PPC specialists and paid social experts who manage advertising campaigns across
                    Google, Facebook, Instagram, LinkedIn, and more. You'll strategize, build,
                    optimize, and report on campaigns that drive measurable ROI.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Code className="w-6 h-6 text-[#00B4D8]" />
                    Web Development & Design
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Designers and developers who create beautiful, functional websites that convert
                    visitors into customers. Experience with React, WordPress, or modern web
                    technologies is valuable here.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#00B4D8]" />
                    Client Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Account managers and project managers who serve as the connection between our
                    team and our clients. You'll communicate regularly with clients, manage
                    expectations, coordinate deliverables, and ensure client satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3 flex items-center gap-2">
                    <Camera className="w-6 h-6 text-[#00B4D8]" />
                    Creative & Visual
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Videographers, photographers, and graphic designers who create visual content
                    that captures attention and communicates brand messages.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6 border-l-4 border-l-[#FF6B35]">
              <p className="text-gray-700 leading-relaxed">
                While we may not always have open positions in every department,{' '}
                <strong>we're always interested in meeting talented people</strong>. Great
                candidates sometimes inspire us to create new roles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <section ref={openingsRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isOpeningsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Rocket className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Current Opportunities
              </h2>
            </div>

            <Card className="bg-gradient-to-br from-[#00B4D8]/10 to-white border-2 border-[#00B4D8]">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We're always looking for talented people to join our team. Current openings
                  include:
                </p>
                <div className="bg-white rounded-lg p-6 border-l-4 border-l-[#00B4D8] mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    We don't always have posted openings, but we're always interested in meeting
                    exceptional candidates. If you're passionate about digital marketing and think
                    you'd be a great fit for ThinkMents, we'd love to hear from you—even if you
                    don't see your perfect role listed.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Send your resume and tell us why you'd be a great addition to our team.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section ref={processRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                How to Apply
              </h2>
              <p className="text-xl text-gray-600">
                Our hiring process is straightforward and respectful of your time
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Application',
                  description:
                    "Submit your resume and a brief note about why you're interested in ThinkMents. No lengthy cover letters required—just tell us what we should know.",
                },
                {
                  step: '2',
                  title: 'Initial Conversation',
                  description:
                    "If your background looks like a potential fit, we'll schedule a 20-30 minute phone or video call to get to know each other.",
                },
                {
                  step: '3',
                  title: 'Skills Assessment',
                  description:
                    'Depending on the role, you may complete a brief practical assessment. We want to see how you think and work, not trick you with gotcha questions.',
                },
                {
                  step: '4',
                  title: 'Team Interview',
                  description:
                    'Meet with potential teammates and leadership. This is a two-way conversation—we want you to evaluate us too.',
                },
                {
                  step: '5',
                  title: 'Offer',
                  description:
                    "If we're both excited about moving forward, we'll extend an offer and welcome you to the team.",
                },
              ].map((phase, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">{phase.step}</span>
                      </div>
                      <div>
                        <h3 className="text-lg text-[#1E3A5F] mb-2">{phase.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed text-center">
                <strong>Timeline from application to offer is typically 2-3 weeks.</strong>
              </p>
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
          </motion.div>
        </div>
      </section>

      {/* Testimonials from Team */}
      <section ref={testimonialsRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Quote className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                What Our Team Says
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[#00B4D8] mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "I've worked at big agencies where I was just a number. At ThinkMents, my ideas
                    matter and I see the direct impact of my work on client success."
                  </p>
                  <p className="text-sm text-gray-600">— Team Member</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[#00B4D8] mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "The work-life balance here is real, not just lip service. Leadership respects
                    our personal time and trusts us to get the job done."
                  </p>
                  <p className="text-sm text-gray-600">— Team Member</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[#00B4D8] mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "I've learned more in my first year here than in three years at my previous
                    agency. The team is generous with knowledge and genuinely wants everyone to
                    succeed."
                  </p>
                  <p className="text-sm text-gray-600">— Team Member</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-16 md:py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white"
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented people who share our passion for helping businesses
              grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <a href="mailto:careers@thinkments.com">
                  Submit Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <a
                href="tel:9403151023"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">(940) 315-1023</span>
              </a>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <div className="flex flex-col gap-2 text-white/90">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-[#00B4D8]" />
                  <span>
                    Email:{' '}
                    <a href="mailto:careers@thinkments.com" className="text-white hover:underline">
                      careers@thinkments.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-white/80">
              Not ready to apply? Follow us on LinkedIn to stay connected and see what we're up to.
            </p>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/70 mb-4">Learn more about us:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/about-us"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-1"
                >
                  About Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/our-story"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-1"
                >
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-1"
                >
                  Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact-us"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-1"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
