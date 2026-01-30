import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import {
  Phone,
  Star,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Video,
  Plane,
  Package,
  Play,
  Smartphone,
  Users,
  Calendar,
  Camera,
  Lightbulb,
  Radio,
  Building2,
  Share2,
  Globe,
  FileText,
  Award,
  TrendingUp,
  Film,
  Mic,
  Palette,
  Monitor,
  Briefcase,
  ShoppingBag,
  MessageSquare,
  Target,
  Sparkles,
  Wind,
  Activity,
} from 'lucide-react';
import SEO from '../SEO';
import RelatedServices from '../RelatedServices';

export default function VideoPhotographyPage() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const statsRef = useRef(null);
  const equipmentRef = useRef(null);
  const faqRef = useRef(null);
  const portfolioRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isEquipmentInView = useInView(equipmentRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isPortfolioInView = useInView(portfolioRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const videoServices = [
    {
      icon: Film,
      title: 'Commercial Video Production',
      description:
        'Create broadcast-quality commercials that capture attention and drive action. Our commercial production services include concept development, scriptwriting, storyboarding, filming, and professional editing. Whether you need a 15-second social media ad or a 60-second TV spot, we produce polished content that represents your brand professionally. We handle everything from casting and location scouting to music licensing and final delivery in all required formats.',
      link: null,
    },
    {
      icon: Building2,
      title: 'Corporate Videos',
      description:
        "Communicate your company's story, values, and culture through professional corporate videos. We produce company overviews, investor presentations, training videos, internal communications, and executive messages. Our corporate videos help you connect with stakeholders, attract talent, and build trust with customers. We work efficiently to minimize disruption to your operations while capturing authentic footage of your team and facilities.",
      link: null,
    },
    {
      icon: MessageSquare,
      title: 'Testimonial & Case Study Videos',
      description:
        'Nothing sells like a satisfied customer. We produce compelling testimonial videos that showcase real results and build trust with prospects. Our interview-style approach puts customers at ease, capturing authentic stories that resonate with your target audience. We handle scheduling, filming, editing, and can even help identify which customers to feature.',
      link: null,
    },
    {
      icon: Package,
      title: 'Product & Service Videos',
      description:
        "Show your products in action with professional demonstration and explainer videos. We create content that highlights features, benefits, and use cases—helping customers understand exactly what they're buying. From detailed how-to videos to quick product showcases for social media, we produce content that educates and converts.",
      link: null,
    },
    {
      icon: Calendar,
      title: 'Event Coverage',
      description:
        "Capture conferences, trade shows, grand openings, and corporate events with professional video coverage. We provide single or multi-camera setups, live streaming capabilities, and quick-turnaround highlight reels. Our event videos extend the life of your investment, allowing you to share key moments with those who couldn't attend and create content for future marketing.",
      link: null,
    },
    {
      icon: Plane,
      title: 'Drone & Aerial Videography',
      description:
        'Add stunning aerial perspectives to your video content with FAA-licensed drone operators. Aerial footage is perfect for real estate, construction progress, property tours, outdoor events, and establishing shots that showcase your location. We capture smooth, cinematic footage that elevates your production value.',
      link: null,
    },
    {
      icon: Smartphone,
      title: 'Social Media Video Content',
      description:
        'Create scroll-stopping video content optimized for each social platform. We produce short-form videos for Instagram Reels, TikTok, YouTube Shorts, and Facebook. Our team understands the unique requirements and best practices for each platform—from aspect ratios to optimal lengths to trending formats.',
      link: '/social-media',
    },
  ];

  const processPhases = [
    {
      phase: 'Pre-Production',
      subtitle: 'Planning',
      items: [
        'Discovery call to understand your goals and audience',
        'Concept development and creative direction',
        'Scriptwriting and storyboard creation',
        'Location scouting and scheduling',
        'Talent coordination if needed',
      ],
    },
    {
      phase: 'Production',
      subtitle: 'Filming',
      items: [
        'Professional camera equipment and lighting',
        'Experienced videographers and directors',
        'Multiple camera angles for dynamic content',
        'On-site direction to capture the best footage',
        'Audio recording with professional microphones',
      ],
    },
    {
      phase: 'Post-Production',
      subtitle: 'Editing',
      items: [
        'Professional editing and color correction',
        'Motion graphics and text overlays',
        'Music selection and sound design',
        'Multiple revision rounds',
        'Final delivery in all required formats',
      ],
    },
  ];

  const videoStats = [
    { stat: '86%', label: 'Of businesses use video as a marketing tool' },
    { stat: '95%', label: 'Retention rate when watching video vs. 10% when reading' },
    { stat: '80%', label: 'Increase in conversions with video on landing pages' },
    { stat: '48%', label: 'More engagement on social posts with video' },
    { stat: '64%', label: 'Of consumers make a purchase after watching branded videos' },
  ];

  const equipment = [
    {
      icon: Camera,
      title: '4K Cinema Cameras',
      description: 'Professional-grade cameras for broadcast-quality footage',
    },
    {
      icon: Lightbulb,
      title: 'Professional Lighting Kits',
      description: 'Complete lighting setups for any environment',
    },
    {
      icon: Mic,
      title: 'Wireless Microphones',
      description: 'Professional audio recording equipment',
    },
    {
      icon: Activity,
      title: 'Stabilizers & Gimbals',
      description: 'Smooth motion shots and tracking',
    },
    {
      icon: Plane,
      title: 'FAA-Licensed Drones',
      description: 'Certified pilots for aerial footage',
    },
    {
      icon: Palette,
      title: 'Green Screen Studio',
      description: 'Controlled environment capabilities',
    },
    {
      icon: Monitor,
      title: 'Professional Editing Software',
      description: 'Industry-standard color grading tools',
    },
    {
      icon: Wind,
      title: 'Audio & Sound Design',
      description: 'Professional sound mixing equipment',
    },
  ];

  const faqs = [
    {
      question: 'How much does video production cost?',
      answer:
        'Projects range from $1,500 for simple testimonial videos to $15,000+ for complex commercial productions. We provide detailed quotes based on your specific needs and can work within most budgets.',
    },
    {
      question: 'How long does production take?',
      answer:
        'Simple projects can be completed in 1-2 weeks. Larger productions typically take 3-4 weeks from concept to final delivery. Rush turnaround is available for an additional fee.',
    },
    {
      question: 'Do you provide scripts?',
      answer:
        'Yes! Our team includes experienced scriptwriters who can develop concepts and scripts based on your goals. We can also work from scripts you provide.',
    },
    {
      question: 'What if we need actors or voiceover?',
      answer:
        'We have a network of local talent and can coordinate casting, or we can use your team members for authentic content. Professional voiceover is available for any project.',
    },
    {
      question: 'How do we use the final video?',
      answer:
        'You receive full usage rights for all content we produce. We deliver files optimized for your website, social media, presentations, and any other platforms you need.',
    },
    {
      question: 'Can you help with video strategy?',
      answer:
        'Absolutely. We help you determine what types of videos will have the most impact, how to distribute them, and how to measure results.',
    },
  ];

  return (
    <>
      <SEO
        title="Professional Video Production & Photography | Commercial Video | ThinkMents"
        description="Professional video production and photography since 2002. Commercial videos, drone footage, testimonials, events, social media content. 500+ projects with 4K quality in Texas."
        url="/services/video-photography"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1634812932028-3baa37d90b52?w=1080&fit=crop)',
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
                <span className="text-white">Video & Photography</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Video & Photography That Sells
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                From drone footage to product photography, brand videos to social media reels—we
                create visual content that captures attention and drives action.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '500+', label: 'Projects Shot' },
                  { stat: '4K', label: 'Video Quality' },
                  { stat: 'FAA Licensed', label: 'Drone Pilots' },
                  { stat: '20+ Years', label: 'Experience' },
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
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
                >
                  <Link to="/free-consultation">Book a Shoot</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Introduction Section */}
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
                  Visual Storytelling Since Before YouTube
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ThinkMents has been producing professional video content since before YouTube
                  existed. With over 20 years of visual storytelling experience, we understand that
                  video is the most powerful medium for connecting with your audience. Our team has
                  produced hundreds of videos for businesses across Texas and beyond—from simple
                  testimonial videos to complex commercial productions. We combine creative vision
                  with marketing strategy to create videos that don't just look great, but drive
                  real business results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Video Services Section */}
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
              Our Video Production Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive video solutions for every marketing need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videoServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1E3A5F] text-xl mb-3">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    {service.link && (
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-[#F8F9FA]">
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
              Our Video Production Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we create your video from concept to final delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processPhases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E3A5F] text-xl">{phase.phase}</h3>
                        <p className="text-sm text-gray-500">{phase.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Video Matters - Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Why Video Matters
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Video Marketing by the Numbers
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {videoStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-3">
                    {stat.stat}
                  </div>
                  <p className="text-white/90 leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: videoStats.length * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 md:col-span-2 lg:col-span-3"
              >
                <p className="text-xl text-white/90 italic leading-relaxed">
                  Video isn't optional anymore—it's essential for competing in today's market.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment & Capabilities Section */}
      <section ref={equipmentRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isEquipmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Professional Equipment for Professional Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the best tools to deliver exceptional quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {equipment.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isEquipmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-[#F8F9FA]">
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
              Get answers to common questions about video production
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={isFaqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Related services that complement video production:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/social-media"
                className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline"
              >
                Social Media Marketing
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
                to="/immersive-experiences"
                className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold underline"
              >
                Immersive Experiences
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Callout Section */}
      <section
        ref={portfolioRef}
        className="py-16 bg-gradient-to-r from-[#00B4D8]/10 to-[#1E3A5F]/10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-16 h-16 text-[#00B4D8] mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              See Our Work
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              View examples of our video production, photography, and virtual tours in our
              portfolio.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
            >
              <Link to="/portfolio" className="flex items-center gap-2">
                View Portfolio
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
              Ready to Tell Your Story Through Video?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your video project and create content that connects with your audience.
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
                <Star className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>103+ Reviews</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices
        services={[
          {
            icon: Share2,
            title: 'Social Media',
            description:
              'Build your brand and engage your audience with strategic social media management and content.',
            href: '/social-media',
          },
          {
            icon: Globe,
            title: 'Immersive Experiences',
            description:
              'Engage customers with 360° tours, interactive maps, and immersive virtual experiences.',
            href: '/immersive-experiences',
          },
          {
            icon: FileText,
            title: 'Content Marketing',
            description:
              'Strategic content creation including blogs, guides, and resources that educate and convert.',
            href: '/content-marketing',
          },
        ]}
      />
    </>
  );
}
