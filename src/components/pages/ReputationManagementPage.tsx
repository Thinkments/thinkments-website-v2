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
  Eye,
  MessageSquare,
  PlusCircle,
  Shield,
  TrendingUp,
  Users,
  Award,
  AlertCircle,
  Target,
  RefreshCw,
  HelpCircle,
  MapPin,
  Share2,
  Search,
  Briefcase,
  BarChart3,
} from 'lucide-react';
import SEO from '../SEO';

export default function ReputationManagementPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyMattersRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const negativeRef = useRef(null);
  const platformsRef = useRef(null);
  const proactiveRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyMattersInView = useInView(whyMattersRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isNegativeInView = useInView(negativeRef, { once: true });
  const isPlatformsInView = useInView(platformsRef, { once: true });
  const isProactiveInView = useInView(proactiveRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: PlusCircle,
      title: 'Review Generation',
      description:
        'Build a steady stream of positive reviews from satisfied customers. Our review generation systems make it easy for happy customers to share their experiences on Google, Facebook, Yelp, and industry-specific platforms. We implement post-service follow-ups, review request sequences, and easy-access review links. Most clients see review volume increase 200-400% within 6 months. More reviews mean better rankings, more trust, and more customers.',
    },
    {
      icon: Eye,
      title: 'Review Monitoring',
      description:
        "Know what's being said about your business across the web. We monitor review platforms, social media mentions, news coverage, and online discussions for your brand name. Real-time alerts ensure you know immediately when new reviews appear or your business is mentioned. Monitoring enables quick response to both positive feedback and potential problems.",
    },
    {
      icon: MessageSquare,
      title: 'Review Response Management',
      description:
        'Respond professionally to every review—positive and negative. Our team crafts thoughtful responses that thank positive reviewers and address concerns from negative reviewers. Professional response shows potential customers you care about feedback. Effective negative review responses often convert complainers into advocates and demonstrate accountability to readers.',
    },
    {
      icon: RefreshCw,
      title: 'Reputation Recovery',
      description:
        "Rebuild damaged reputations strategically. Whether you're dealing with a few negative reviews, a viral complaint, or systemic reputation problems, we develop recovery plans that address root causes and rebuild trust over time. Recovery includes generating new positive reviews, addressing legitimate concerns, and in some cases, pursuing removal of false or policy-violating content.",
    },
    {
      icon: Shield,
      title: 'Online Presence Management',
      description:
        'Control what appears when people search your name. We optimize your owned properties—website, social profiles, directory listings—to dominate search results for your brand name. This pushes down negative content and ensures searchers find the information you want them to see first.',
    },
    {
      icon: Target,
      title: 'Competitor Reputation Analysis',
      description:
        'Understand how your reputation compares to competitors. We analyze competitor reviews, ratings, and reputation strategies to identify opportunities and threats. This intelligence helps you differentiate and understand what customers value in your market.',
    },
  ];

  const faqs = [
    {
      question: 'Can you remove negative reviews?',
      answer:
        'We can pursue removal of reviews that violate platform policies (fake reviews, reviews from non-customers, policy violations). Legitimate negative reviews generally cannot be removed, but we can respond professionally and generate positive reviews to provide balance.',
    },
    {
      question: 'How long does reputation recovery take?',
      answer:
        'It depends on the severity of damage. Minor issues can be addressed in 2-3 months. Significant reputation problems may take 6-12 months of consistent effort to rebuild trust.',
    },
    {
      question: 'How many reviews do I need?',
      answer:
        'More is better, but quality and recency matter too. Generally, aim for at least 20-30 reviews on Google to establish credibility, with consistent new reviews every month.',
    },
    {
      question: 'What if a review is fake or from a competitor?',
      answer:
        "We document evidence and report policy violations to the platform. While removal isn't guaranteed, fake reviews often violate terms of service. We also respond professionally to minimize damage while pursuing removal.",
    },
    {
      question: 'Do you guarantee specific ratings?',
      answer:
        "We don't guarantee ratings because we can't control what customers write. We do guarantee our systematic approach will improve review volume, response rate, and overall reputation trajectory.",
    },
    {
      question: 'How do you get customers to leave reviews?',
      answer:
        "We make it easy. Automated follow-ups at the right time, direct review links, SMS options, and simple processes dramatically increase review rates. We don't offer incentives for reviews (which violates platform policies) but remove friction that prevents satisfied customers from sharing feedback.",
    },
  ];

  return (
    <>
      <SEO
        title="Reputation Management Services | Review Generation & Monitoring | ThinkMents"
        description="Build and protect your online reputation since 2002. Review generation, monitoring, response management, recovery. 5.0 rating with 103+ reviews across 31 states."
        url="/reputation-management"
        type="website"
      />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&fit=crop)',
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
                <span className="text-white">Reputation Management</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                REPUTATION EXPERTS SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Build & Protect Your Online Reputation
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Your most valuable digital asset deserves expert management
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '5.0', label: 'Our Google Rating' },
                  { stat: '103+', label: 'Our Reviews' },
                  { stat: '31', label: 'States Served' },
                  { stat: '20+', label: 'Years Experience' },
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
                  <Link to="/free-consultation">Get Free Reputation Audit</Link>
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
                Your online reputation is your most valuable digital asset—and your most vulnerable.
                In today's connected world, a single negative review can cost you thousands in lost
                business, while a strong reputation drives customers to choose you over competitors.{' '}
                <strong>
                  ThinkMents has been helping businesses build, protect, and recover online
                  reputations since 2002.
                </strong>{' '}
                With over 20 years of experience managing reputations across 31 states, we
                understand what it takes to establish trust online and maintain it over time.
                Whether you're building your reputation from scratch, enhancing an already-good
                reputation, or recovering from reputation damage, we have the expertise and systems
                to help.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Reputation Matters */}
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
                The Business Impact of Online Reputation
              </h2>
              <p className="text-xl text-gray-600">
                Your reputation directly affects your bottom line
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { stat: '93%', label: 'of consumers read online reviews before making a purchase' },
                {
                  stat: '84%',
                  label: 'of people trust online reviews as much as personal recommendations',
                },
                { stat: '5-9%', label: 'revenue increase from a one-star Yelp rating improvement' },
                { stat: '94%', label: 'of clicks captured by businesses with 4+ star ratings' },
                { stat: '72%', label: "of consumers won't take action until they've read reviews" },
                { stat: '40%', label: 'of potential customers driven away by negative reviews' },
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
                <strong>Your reputation also impacts search visibility.</strong> Google considers
                review quantity, quality, and recency when ranking local businesses. A strong
                reputation means better rankings, more visibility, and more customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Beyond search, your reputation is often the deciding factor when customers compare
                options. When similar businesses offer similar services at similar prices,
                reputation tips the scale.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  Reputation isn't just about damage control—it's about building an asset that
                  drives growth.
                </strong>{' '}
                Every positive review is a permanent sales tool working for you 24/7.
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
              Comprehensive Reputation Services
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
                How We Manage Your Reputation
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Assessment & Baseline',
                  items: [
                    'Audit current reputation across all platforms',
                    'Analyze review sentiment and common themes',
                    'Establish baseline metrics',
                    'Identify vulnerabilities and opportunities',
                  ],
                },
                {
                  title: 'Strategy Development',
                  items: [
                    'Create customized reputation plan',
                    'Define review generation targets',
                    'Establish response protocols',
                    'Set monitoring parameters',
                  ],
                },
                {
                  title: 'Implementation',
                  items: [
                    'Deploy review generation systems',
                    'Set up comprehensive monitoring',
                    'Begin response management',
                    'Optimize online profiles',
                  ],
                },
                {
                  title: 'Ongoing Management',
                  items: [
                    'Daily monitoring and alerts',
                    'Timely review responses',
                    'Monthly review generation campaigns',
                    'Quarterly strategy reviews',
                  ],
                },
                {
                  title: 'Reporting & Optimization',
                  items: [
                    'Monthly reputation reports',
                    'Rating and volume tracking',
                    'Sentiment analysis',
                    'Strategy refinement based on results',
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
          </motion.div>
        </div>
      </section>

      {/* Handling Negative Reviews */}
      <section ref={negativeRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isNegativeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <AlertCircle className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Turning Negative Reviews into Opportunities
              </h2>
              <p className="text-xl text-gray-600">
                Negative reviews happen to every business. What matters is how you handle them.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Respond Quickly',
                  description:
                    "Fast response shows you're attentive and care about customer experience. We aim to respond within 24 hours.",
                },
                {
                  title: 'Respond Professionally',
                  description:
                    'Never argue, get defensive, or make excuses. Acknowledge concerns, apologize for disappointment, and offer to make it right.',
                },
                {
                  title: 'Take It Offline',
                  description:
                    'Provide contact information to discuss details privately. Public back-and-forth rarely helps.',
                },
                {
                  title: 'Address Root Causes',
                  description:
                    'Identify patterns in complaints and fix underlying problems. The best reputation management is delivering great service.',
                },
                {
                  title: 'Learn and Improve',
                  description:
                    'Negative feedback is valuable intelligence about customer expectations and operational issues.',
                },
                {
                  title: 'Follow Up',
                  description:
                    "When issues are resolved, some customers will update their reviews. Even when they don't, future readers see your professional response.",
                },
              ].map((strategy, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{strategy.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{strategy.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg text-gray-700">
                <strong>
                  Our response strategies have turned angry reviewers into loyal advocates.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section ref={platformsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Platforms We Monitor and Manage
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: 'General Platforms',
                  platforms: [
                    'Google Business Profile',
                    'Facebook',
                    'Yelp',
                    'Better Business Bureau',
                    'Yellow Pages',
                  ],
                },
                {
                  category: 'Healthcare',
                  platforms: ['Healthgrades', 'Vitals', 'RateMDs', 'WebMD'],
                },
                { category: 'Legal', platforms: ['Avvo', 'Martindale-Hubbell', 'Lawyers.com'] },
                { category: 'Home Services', platforms: ['Angi', 'HomeAdvisor', 'Houzz'] },
                { category: 'Restaurants', platforms: ['TripAdvisor', 'OpenTable', 'DoorDash'] },
                { category: 'Automotive', platforms: ['Cars.com', 'DealerRater', 'Edmunds'] },
              ].map((group, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{group.category}</h3>
                    <ul className="space-y-1">
                      {group.platforms.map((platform, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{platform}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700">
                <strong>
                  We identify which platforms matter most for your industry and focus efforts where
                  they'll have the greatest impact.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proactive vs Reactive */}
      <section ref={proactiveRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProactiveInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Proactive Reputation Building
              </h2>
              <p className="text-xl text-gray-600">
                Most businesses only think about reputation when problems arise
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Proactive reputation management builds strength before you need it:</strong>
              </p>
              <ul className="space-y-3">
                {[
                  'Consistent review generation creates a buffer against occasional negatives',
                  'Strong profiles across platforms establish authority',
                  'Regular positive content pushes down any negative search results',
                  'Monitoring catches small issues before they become big problems',
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed">
                <strong>
                  Businesses with proactive reputation programs recover faster from setbacks and
                  maintain stronger competitive positions.
                </strong>{' '}
                Don't wait for a crisis—build your reputation asset now.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 bg-white">
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
                  to="/google-business-profile"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Google Business Profile <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/marketing-seo"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Marketing & SEO <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/social-media"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Social Media <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/business-solutions"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Business Solutions <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Case Studies <ArrowRight className="w-4 h-4" />
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
              Ready to Build a Reputation That Drives Growth?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's develop a reputation strategy that builds trust and wins customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Reputation Audit
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
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Review Generation Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                  ))}
                </div>
                <span>5.0 Google Rating (We Practice What We Preach)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
