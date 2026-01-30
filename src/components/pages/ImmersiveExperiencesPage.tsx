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
  Camera,
  Box,
  MapPin,
  Video,
  Globe,
  Code,
  Award,
  Headphones,
  TrendingUp,
  Users,
  BarChart3,
  Home,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Briefcase,
  DollarSign,
} from 'lucide-react';
import SEO from '../SEO';

export default function ImmersiveExperiencesPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyImmersiveRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const processRef = useRef(null);
  const technologyRef = useRef(null);
  const legacyRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyImmersiveInView = useInView(whyImmersiveRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isIndustriesInView = useInView(industriesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isTechnologyInView = useInView(technologyRef, { once: true });
  const isLegacyInView = useInView(legacyRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: MapPin,
      title: 'Virtual Tours',
      description:
        'Transport viewers directly into your space with interactive virtual tours. Our virtual tour production creates seamless, navigable experiences that let customers explore every corner of your business from their phone, tablet, or computer. We capture high-resolution imagery, stitch it into smooth 360° environments, and build intuitive navigation that guides visitors through your space. Virtual tours integrate with Google Street View, your website, social media, and listing platforms for maximum exposure.',
    },
    {
      icon: Camera,
      title: '360° Photography',
      description:
        'Capture complete environments with professional 360° photography. Unlike traditional photos that show only one angle, 360° images let viewers look in every direction—up, down, and all around. Perfect for showcasing spaces where context matters: hotel rooms, event venues, restaurants, retail stores, and real estate. Our 360° images are optimized for web delivery and VR headset viewing.',
    },
    {
      icon: Box,
      title: 'Matterport 3D Tours',
      description:
        "Create 'digital twin' replicas of your space with Matterport technology. Matterport scans produce dimensionally accurate 3D models that viewers can navigate in 'dollhouse' view, floor plan view, or immersive walkthrough mode. These tours include automatic measurements, making them ideal for real estate, construction, insurance, and any application requiring precise spatial documentation. Matterport tours also enhance Google visibility and can be embedded anywhere.",
    },
    {
      icon: Code,
      title: 'Interactive Floor Plans',
      description:
        'Help visitors understand your space layout with interactive floor plans. We create clickable floor plans that connect to 360° views of each room or area. Users can see the overall layout, then dive into detailed views of specific spaces. Interactive floor plans are perfect for large venues, multi-room properties, office spaces, and anywhere spatial orientation matters.',
    },
    {
      icon: Video,
      title: 'Aerial/Drone Immersive Content',
      description:
        'Capture stunning aerial perspectives with FAA-licensed drone operators. We produce 360° aerial panoramas that showcase properties, land, and surroundings from above. Aerial immersive content is perfect for real estate, resorts, golf courses, campuses, and any location where the surrounding environment matters. Our pilots are fully licensed and insured for commercial drone operations.',
    },
    {
      icon: Headphones,
      title: 'Virtual Reality (VR) Experiences',
      description:
        'Take immersion to the next level with VR-ready content. Our virtual tours are compatible with VR headsets including Oculus Quest, HTC Vive, and smartphone-based viewers. VR experiences are perfect for trade shows, sales presentations, and situations where maximum immersion creates competitive advantage. We can also develop custom VR applications for specialized needs.',
    },
    {
      icon: Globe,
      title: 'Google Street View Integration',
      description:
        "Put your business interior on Google Maps with Street View integration. We're Google Street View trusted photographers, authorized to capture and publish interior imagery that appears directly in Google Search and Maps. When customers search for your business, they can explore inside before visiting. This integration is free once captured and provides permanent visibility on the world's most-used mapping platform.",
    },
    {
      icon: MapPin,
      title: 'Embedded Virtual Tour Solutions',
      description:
        'Integrate virtual tours seamlessly into your existing digital presence. We embed tours on your website, listing platforms, social media, and email campaigns. Our embedding solutions are responsive across devices, load quickly, and include analytics tracking. We also provide standalone tour links for sharing via text, email, or QR codes.',
    },
  ];

  const faqs = [
    {
      question: 'How much do virtual tours cost?',
      answer:
        'Pricing depends on property size and complexity. Basic virtual tours start around $300-500 for small spaces, with larger or more complex projects ranging from $800-2,500+. We provide custom quotes after understanding your specific needs.',
    },
    {
      question: 'How long does production take?',
      answer:
        'Most virtual tours are completed within 1-2 weeks from the capture date. Larger projects or those requiring extensive post-production may take longer.',
    },
    {
      question: 'Do I own the virtual tour?',
      answer:
        'Yes. You receive full usage rights for all content we produce. Tours remain accessible as long as you maintain hosting (we offer affordable annual hosting plans).',
    },
    {
      question: 'Can virtual tours be updated?',
      answer:
        'Yes. If your space changes significantly, we can recapture and update the tour. Minor changes can sometimes be addressed without a full reshoot.',
    },
    {
      question: 'How do customers view the tour?',
      answer:
        'Tours work on any device—smartphones, tablets, laptops, and desktops. No special software or app is required. VR headset viewing is also supported for maximum immersion.',
    },
    {
      question: 'Will the tour work on my website?',
      answer:
        'Absolutely. We provide embed codes that work with any website platform. Tours are responsive and mobile-friendly.',
    },
    {
      question: 'Do you travel for captures?',
      answer:
        "Yes. While we're based in Texas, we travel for projects throughout the region and can accommodate projects nationwide for larger engagements.",
    },
  ];

  return (
    <>
      <SEO
        title="Immersive Experiences & Virtual Tours | Google Street View Trusted | ThinkMents"
        description="Pioneers in virtual tours since 2002. Google Street View Trusted photographers. Created first virtual tour in North Texas, first arena seat preview with Mark Cuban. 20+ years innovation."
        url="/immersive-experiences"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1634814251396-479adacfc527?w=1080&fit=crop)',
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
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Immersive Experiences</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                PIONEERS SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Immersive Experiences & Virtual Tours
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Step into the future of visual marketing with immersive experiences that captivate
                your audience and set your business apart
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '2002', label: 'Started Innovation' },
                  { stat: '87%', label: 'More Views' },
                  { stat: '1,000+', label: 'Tours Created' },
                  { stat: 'Google', label: 'Trusted' },
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
                  <Link to="/free-consultation">Schedule Your Shoot</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
                >
                  <Link to="/portfolio">View Tour Examples</Link>
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
                Step into the future of visual marketing with immersive experiences that captivate
                your audience and set your business apart.{' '}
                <strong>
                  ThinkMents has been pioneering immersive technology since the early days of
                  virtual tours—we created the first virtual real estate tour in North Texas and
                  built the first arena seat preview system with Mark Cuban's American Airlines
                  Center.
                </strong>{' '}
                With over 20 years of innovation in visual technology, we understand how to leverage
                virtual tours, 360° photography, and interactive experiences to engage customers,
                showcase properties, and drive real business results. While competitors are just
                discovering these technologies, we've been perfecting them for decades.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Immersive Experiences Matter */}
      <section ref={whyImmersiveRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyImmersiveInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Business Impact of Immersive Content
              </h2>
              <p className="text-xl text-gray-600">
                Immersive experiences aren't just impressive—they deliver measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">87%</div>
                  <p className="text-gray-700">
                    Listings with virtual tours receive more views than those without
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">5-10x</div>
                  <p className="text-gray-700">
                    Virtual tours increase time on website compared to static images
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">67%</div>
                  <p className="text-gray-700">
                    of people want more businesses to offer virtual tours
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">31%</div>
                  <p className="text-gray-700">
                    Properties with 3D tours sell faster and for higher prices
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">40%</div>
                  <p className="text-gray-700">Virtual tours reduce unnecessary in-person visits</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] text-center">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">300%</div>
                  <p className="text-gray-700">
                    360° content generates more engagement on social media
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Today's customers expect to explore before they visit.</strong> Whether
                they're choosing a restaurant, previewing a hotel room, touring a home, or
                evaluating a venue, they want to experience it virtually first. Businesses without
                immersive content are losing customers to competitors who offer this modern
                experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Immersive experiences also dramatically extend your geographic reach—
                <strong>customers from anywhere in the world can 'visit' your location</strong>,
                breaking down distance barriers that limit traditional marketing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services */}
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
              Comprehensive Immersive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple 360° photography to complex virtual reality experiences
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/video-photography">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  Video & Photography Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/google-business-profile">
                <Button
                  variant="outline"
                  className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8"
                >
                  Google Business Profile
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Applications */}
      <section
        ref={industriesRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Briefcase className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Immersive Experiences by Industry
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Real Estate</h3>
                  <p className="text-white/90 leading-relaxed">
                    Virtual tours have become essential for property marketing. Buyers tour homes
                    remotely, filtering before in-person visits. Sellers attract more qualified
                    buyers and sell faster with 3D tours.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Hotels & Hospitality</h3>
                  <p className="text-white/90 leading-relaxed">
                    Let guests explore rooms, amenities, and common areas before booking. Hotels
                    with virtual tours see higher booking conversion rates and reduced 'surprise'
                    complaints.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Restaurants & Venues</h3>
                  <p className="text-white/90 leading-relaxed">
                    Showcase your atmosphere, seating options, and event spaces. Customers choosing
                    venues for weddings, parties, and corporate events want to see the space before
                    committing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Retail Stores</h3>
                  <p className="text-white/90 leading-relaxed">
                    Let customers browse your showroom virtually. Perfect for furniture stores,
                    boutiques, and specialty retailers where the in-store experience matters.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Senior Living & Healthcare</h3>
                  <p className="text-white/90 leading-relaxed">
                    Families researching senior living facilities or healthcare providers appreciate
                    virtual tours that reduce the stress of in-person facility visits.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Education</h3>
                  <p className="text-white/90 leading-relaxed">
                    Campus tours reach prospective students worldwide. Universities and private
                    schools use virtual tours as recruiting tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Museums & Attractions</h3>
                  <p className="text-white/90 leading-relaxed">
                    Extend your reach beyond physical visitors. Virtual tours can also serve as
                    accessibility accommodations for those unable to visit in person.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#00B4D8] mb-3">Construction & Development</h3>
                  <p className="text-white/90 leading-relaxed">
                    Document project progress with regular 360° captures. Create 'before and after'
                    comparisons and pre-sell spaces before completion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Process */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <BarChart3 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                How We Create Your Immersive Experience
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-4">Pre-Production Planning</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">
                        Site assessment to plan capture strategy
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Determine tour flow and navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Schedule shoot for optimal lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Coordinate staging and preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">
                        Define hotspots and interactive elements
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-4">Capture Day</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Professional 360° camera equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">HDR imaging for perfect exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">
                        Multiple heights and angles for completeness
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Drone capture if aerial views included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Quality control review on-site</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-4">Post-Production</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Professional stitching and processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Color correction and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Navigation structure development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Hotspot and information point creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Floor plan integration if applicable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Multiple format export</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-4">Delivery & Integration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Tour hosting and delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Website embedding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Google Street View publishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Social media optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Analytics setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Training on sharing and promotion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-[#FF6B35]">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Most projects complete within 1-2 weeks from capture to delivery</strong>,
                depending on complexity and property size.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section ref={technologyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTechnologyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Camera className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Professional-Grade Technology
              </h2>
              <p className="text-xl text-gray-600">
                We invest in the best equipment to ensure professional results
              </p>
            </div>

            <Card className="bg-gradient-to-br from-[#F8F9FA] to-white border-2 border-[#00B4D8]">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">
                      Insta360 Pro 2 and Ricoh Theta Z1 for 360° capture
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">
                      Matterport Pro2 and Pro3 cameras for 3D scanning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">
                      Professional lighting for interior shoots
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">
                      DJI commercial drones for aerial capture
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">
                      High-performance processing workstations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">
                      Enterprise hosting for reliable delivery
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>
                      Our technology investment means your virtual tours match the quality of your
                      business
                    </strong>
                    —not amateur-looking captures that undermine your brand.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ThinkMents' Immersive Legacy */}
      <section ref={legacyRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLegacyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Pioneering Immersive Experiences Since 2002
              </h2>
              <p className="text-xl text-gray-600">
                ThinkMents isn't new to immersive technology—we've been creating virtual experiences
                since before the technology went mainstream
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">
                    First Virtual Real Estate Tour in North Texas
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We produced the region's first virtual property tour, revolutionizing how real
                    estate was marketed locally.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">
                    American Airlines Center Seat Preview System
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Working with Mark Cuban's team, we created the first arena seat preview system,
                    allowing fans to see their view before purchasing tickets.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Early Google Street View Partner</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We became Google Street View trusted photographers when interior capture was
                    first introduced.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Two Decades of Innovation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While other agencies are just discovering virtual tours, we've been refining our
                    techniques, testing new technologies, and perfecting the customer experience for
                    over 20 years.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white rounded-lg shadow-lg p-8">
              <p className="text-xl leading-relaxed text-center">
                <strong>
                  This experience translates into better results for you—we've already learned the
                  lessons that newer providers are still figuring out.
                </strong>
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
              <p className="text-gray-600 mb-4">Related services:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/web-development">
                  <Button
                    variant="outline"
                    className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                  >
                    Web Development
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    variant="outline"
                    className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                  >
                    View Portfolio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button
                    variant="outline"
                    className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                  >
                    Case Studies
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
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
            <h2
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Give Customers an Immersive Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's showcase your space with cutting-edge virtual tour technology.
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
                <span>Pioneers Since 2002</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Google Street View Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Fast Turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
