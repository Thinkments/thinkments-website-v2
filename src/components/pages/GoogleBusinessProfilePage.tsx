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
  Video,
  Sliders,
  Calendar,
  Map,
  AlertTriangle,
  GraduationCap,
  TrendingUp,
  Award,
  Shield,
  Search,
  Globe,
  MapPin,
  Camera,
  MessageSquare,
  Users,
  Target,
  Zap,
  Clock,
  FileText
} from 'lucide-react';
import SEO from '../SEO';
import RelatedServices from '../RelatedServices';

export default function GoogleBusinessProfilePage() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const whyGBPRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });
  const isWhyGBPInView = useInView(whyGBPRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: CheckCircle,
      title: 'GBP Setup & Claiming',
      description: 'Don\'t have a Google Business Profile yet, or struggling to claim an existing listing? We handle the entire setup process—creating your profile, verifying your business, and ensuring all information is accurate from day one. For businesses with existing unclaimed listings, we navigate Google\'s verification process to establish your ownership. We\'ve successfully claimed listings that business owners struggled with for months, including handling Google\'s video verification and address verification requirements.',
      price: 'From $250'
    },
    {
      icon: Sliders,
      title: 'Profile Optimization',
      description: 'A complete profile dramatically outperforms a basic one. We optimize every element of your listing: business categories (primary and secondary), service descriptions, attributes, business hours (including special hours for holidays), service areas, appointment links, and more. We craft compelling business descriptions using relevant keywords while maintaining readability. Our optimization ensures Google understands exactly what you offer and shows your listing for relevant searches.',
      price: 'From $350'
    },
    {
      icon: Camera,
      title: 'Photo & Visual Management',
      description: 'Listings with photos receive significantly more engagement. We manage your visual presence with professional cover photos, logo placement, interior and exterior photos, team photos, and product/service images. We ensure photos are properly sized, geotagged, and named for SEO benefit. We also monitor for and remove any inappropriate user-uploaded photos. Regular photo updates signal to Google that your business is active and engaged.',
      price: 'From $200'
    },
    {
      icon: Star,
      title: 'Review Management & Generation',
      description: 'Reviews are the lifeblood of local search success. We implement systematic review generation strategies that encourage satisfied customers to share their experiences. This includes post-service follow-up sequences, easy review links, and staff training on appropriate review requests. We also monitor all reviews and craft professional responses to both positive and negative feedback, showing potential customers you care about customer satisfaction.',
      price: 'From $250/mo'
    },
    {
      icon: Calendar,
      title: 'Google Posts & Updates',
      description: 'Keep your profile active and engaging with regular Google Posts. We create and schedule posts about offers, events, updates, and news. Posts appear directly in your GBP and can include calls-to-action that drive immediate engagement. Regular posting signals to Google that your business is active, which can positively impact your local rankings. We handle all content creation, scheduling, and performance tracking.',
      price: 'From $200/mo'
    },
    {
      icon: Target,
      title: 'Q&A Management',
      description: 'The Questions & Answers section of your GBP is often overlooked but critical. We monitor incoming questions, provide helpful answers, and proactively seed your profile with common questions and optimized answers. This builds trust with potential customers and provides another opportunity to incorporate relevant keywords. We ensure your Q&A section works for you, not against you.',
      price: 'Included in management'
    },
    {
      icon: Map,
      title: 'Multi-Location GBP Management',
      description: 'Managing multiple locations? We handle them all with consistent branding and optimization while customizing each listing for its specific market. Our bulk management tools allow efficient updates across all locations while maintaining local relevance. We ensure consistent NAP (Name, Address, Phone) information, category selection, and photo standards across your entire portfolio. Perfect for franchises, chains, and multi-location service businesses.',
      price: 'From $150/location/mo'
    },
    {
      icon: AlertTriangle,
      title: 'Suspension Recovery',
      description: 'Profile suspended? We\'ve recovered hundreds of suspended profiles with a 95% success rate. We analyze why your profile was suspended, develop a recovery strategy, prepare your reinstatement request, and communicate with Google on your behalf. The suspension recovery process can be frustrating and confusing—we handle it all. Most recoveries are completed within 2-4 weeks, getting your business back online and visible.',
      price: 'From $500'
    },
    {
      icon: Video,
      title: 'Video Verification Assistance',
      description: 'Struggling with Google\'s video verification? We guide you through the entire process with step-by-step instructions, example videos, and best practices. We help you prepare your verification video, ensure it meets Google\'s requirements, and troubleshoot any issues. For businesses that have failed video verification multiple times, we provide specialized consulting to identify and fix the underlying issues.',
      price: 'From $150'
    },
    {
      icon: FileText,
      title: 'GBP Insights & Reporting',
      description: 'Data-driven optimization requires understanding how customers find and interact with your profile. We provide monthly reports showing search queries, customer actions (calls, website visits, direction requests), photo views, and competitive comparisons. We analyze trends, identify opportunities, and adjust strategy based on real performance data. You\'ll know exactly how your GBP is performing and what we\'re doing to improve results.',
      price: 'Included in management'
    },
    {
      icon: Users,
      title: 'Competitor Analysis',
      description: 'Understanding your competitive landscape is crucial. We analyze your top competitors\' GBP profiles, identify what they\'re doing well, find opportunities to differentiate, and develop strategies to outperform them in local search results. We monitor competitors\' review velocity, post frequency, category selections, and rankings to ensure you stay ahead. Knowledge is power in local SEO.',
      price: 'From $300'
    },
    {
      icon: GraduationCap,
      title: 'GBP Training & Consultation',
      description: 'Prefer to manage your own profile? We offer one-on-one training sessions covering profile optimization, review generation, posting strategies, insights interpretation, and ongoing maintenance. You\'ll learn best practices, common mistakes to avoid, and our proven strategies for local search success. Training is customized to your business type and goals. We also offer ongoing consultation for businesses that want strategic guidance without full management.',
      price: 'From $200/hr'
    }
  ];

  const stats = [
    {
      percentage: '46%',
      description: 'of all Google searches have local intent'
    },
    {
      percentage: '88%',
      description: 'of consumers trust online reviews as much as personal recommendations'
    },
    {
      percentage: '70%',
      description: 'more likely to attract visits with a complete GBP listing'
    }
  ];

  return (
    <>
      <SEO
        title="Google Business Profile Services | GBP Setup, Optimization & Recovery | ThinkMents"
        description="Expert Google Business Profile management in Texas. Setup, verification, optimization, review management, and suspension recovery. 500+ profiles managed with 95% recovery rate."
        url="/services/google-business-profile"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559989899-f0743fa80152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBidXNpbmVzcyUyMHByb2ZpbGUlMjBwaG9uZXxlbnwxfHx8fDE3NjU0MDA5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay */}
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
                <span className="text-white">Google Business Profile</span>
              </div>

              {/* Badge */}
              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                GBP SPECIALISTS
              </Badge>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Google Business Profile Experts
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Your GBP is often the first thing customers see. We handle everything—setup, verification, optimization, posting, reviews, and even suspension recovery.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '500+', label: 'Profiles Managed' },
                  { stat: '103', label: '5-Star Reviews' },
                  { stat: '95%', label: 'Suspension Recovery Rate' },
                  { stat: '77', label: 'Texas Cities' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#00B4D8] mb-2">
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
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/free-consultation">Get Free GBP Audit</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/case-studies">See Case Studies</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#00B4D8]">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-[#00B4D8]" />
                <h2 className="text-3xl md:text-4xl text-[#1E3A5F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  20+ Years of GBP Excellence
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your Google Business Profile is often the first thing potential customers see when searching for your business—and it might be the only thing they see before deciding to call or visit. ThinkMents has been managing Google Business Profiles since Google first launched the platform (originally Google Places, then Google My Business, now Google Business Profile). With over 20 years of local marketing experience, we understand exactly how to optimize your profile to appear in the coveted Local 3-Pack, generate more calls, and turn searchers into customers. We've managed hundreds of GBP listings across 31 states, helping businesses dominate local search results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive GBP Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup to suspension recovery, we handle every aspect of your Google Business Profile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
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
            animate={isExperienceInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button 
              asChild 
              size="lg"
              className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold"
            >
              <Link to="/free-consultation" className="flex items-center gap-2">
                Get Your Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why GBP Matters Section */}
      <section ref={whyGBPRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyGBPInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Google Business Profile is Critical for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The numbers don't lie—Google Business Profile directly impacts your bottom line
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isWhyGBPInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white rounded-lg p-8 md:p-10 mb-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00B4D8] mb-2">46%</div>
                  <p className="text-white/90">of all Google searches have local intent</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00B4D8] mb-2">88%</div>
                  <p className="text-white/90">of consumers who search locally on mobile visit or call within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00B4D8] mb-2">70%</div>
                  <p className="text-white/90">more likely to attract location visits with complete GBP</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00B4D8] mb-2">76%</div>
                  <p className="text-white/90">of people who search for something nearby visit within a day</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyGBPInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full border-2 border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-[#00B4D8] mb-3">93%</div>
                    <p className="text-gray-700 leading-relaxed">
                      The Google Local 3-Pack appears in <strong>93% of searches</strong> with local intent
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyGBPInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="h-full border-2 border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-[#00B4D8] mb-3">42%</div>
                    <p className="text-gray-700 leading-relaxed">
                      Listings with photos receive <strong>42% more requests</strong> for directions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyGBPInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="h-full border-2 border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-[#00B4D8] mb-3">35%</div>
                    <p className="text-gray-700 leading-relaxed">
                      Photos also drive <strong>35% more website clicks</strong>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyGBPInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:col-span-3"
              >
                <Card className="border-2 border-[#F7B928]/20 hover:border-[#F7B928] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-[#F7B928] mb-3">25%</div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>5-star rated businesses get 25% more clicks</strong> than 3-star businesses
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isWhyGBPInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#F7B928]"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you're not appearing in Google's local results, <strong>you're invisible to customers actively searching for your services right now.</strong> Your competitors are getting those calls instead.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Google Business Profile is free to use, but optimization requires expertise. <strong>The difference between a basic listing and a fully optimized profile can mean dozens of additional calls and customers every month.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-[#1E3A5F] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Who GBP Management Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Local Service Businesses</h3>
                  <p className="text-gray-700">Plumbers, electricians, HVAC, home services that rely on "near me" searches and local visibility.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Medical & Dental Practices</h3>
                  <p className="text-gray-700">Healthcare providers where GBP visibility directly impacts new patient acquisition.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Multi-Location Businesses</h3>
                  <p className="text-gray-700">Franchises and chains needing coordinated GBP management across dozens or hundreds of locations.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Legal & Professional Services</h3>
                  <p className="text-gray-700">Law firms and professional services where GBP reviews build trust and credibility.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Restaurants & Retail</h3>
                  <p className="text-gray-700">Businesses where location, hours, photos, and reviews directly drive foot traffic.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#1E3A5F] mb-2">Businesses with GBP Problems</h3>
                  <p className="text-gray-700">Companies with suspended profiles, duplicate listings, negative reviews, or incorrect information.</p>
                </CardContent>
              </Card>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Is Your GBP Working for You?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get a free audit and see exactly how your profile stacks up against competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Get Free GBP Audit</Link>
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
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <span>5.0 Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <span>500+ Profiles Managed</span>
              <span className="text-white/40">|</span>
              <span>95% Recovery Rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices 
        services={[
          {
            icon: Shield,
            title: 'Reputation Management',
            description: 'Protect and enhance your online reputation with proactive monitoring and strategic review management.',
            href: '/reputation-management'
          },
          {
            icon: Search,
            title: 'Marketing & SEO',
            description: 'Boost your visibility with comprehensive SEO and digital marketing strategies.',
            href: '/marketing-seo'
          },
          {
            icon: Globe,
            title: 'Immersive Experiences',
            description: 'Engage customers with 360° tours, interactive maps, and immersive virtual experiences.',
            href: '/immersive-experiences'
          }
        ]}
      />
    </>
  );
}