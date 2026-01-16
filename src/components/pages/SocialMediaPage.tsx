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
  Compass,
  Pencil,
  Grid3x3,
  Megaphone,
  Users,
  TrendingUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  FileText,
  Video,
  Search
} from 'lucide-react';
import SEO from '../SEO';
import RelatedServices from '../RelatedServices';

export default function SocialMediaPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const platformsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isPlatformsInView = useInView(platformsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: Compass,
      title: 'Social Media Strategy',
      description: 'Custom strategy based on your goals, audience, and industry. Not cookie-cutter plans.',
      price: 'From $500',
      badge: null
    },
    {
      icon: Pencil,
      title: 'Content Creation',
      description: 'Engaging posts, graphics, and captions that reflect your brand voice.',
      price: 'From $400/mo',
      badge: null
    },
    {
      icon: Grid3x3,
      title: 'Account Management',
      description: 'Full-service management of your social accounts. Posting, engagement, and growth.',
      price: 'From $600/mo',
      badge: null
    },
    {
      icon: Megaphone,
      title: 'Social Advertising',
      description: 'Paid campaigns on Facebook, Instagram, and LinkedIn that reach your ideal customers.',
      price: 'From $400/mo + ad spend',
      badge: null
    },
    {
      icon: Users,
      title: 'Influencer Outreach',
      description: 'Connect with influencers who can authentically promote your brand.',
      price: 'Custom Quote',
      badge: null
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Monthly reports showing what\'s working, what\'s not, and what\'s next.',
      price: 'Included with management',
      badge: 'Included'
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: '#0A66C2'
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      color: '#1DA1F2'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: '#FF0000'
    },
    {
      name: 'TikTok',
      icon: MapPin,
      color: '#000000'
    },
    {
      name: 'Google Business',
      icon: MapPin,
      color: '#4285F4'
    }
  ];

  return (
    <>
      <SEO
        title="Social Media Management Services | Facebook, Instagram, LinkedIn | ThinkMents"
        description="Strategic social media management that builds real connections. Content creation, account management, social advertising, and analytics. 10M+ reach generated across 50+ active accounts."
        url="/services/social-media"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70dvh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjUyOTcwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080)',
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
                <span className="text-white">Social Media</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Social Media That Builds Real Connections
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Strategic social media management that grows your following, engages your audience, and drives real business results—not just vanity metrics.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '10M+', label: 'Reach Generated' },
                  { stat: '50+', label: 'Active Accounts' },
                  { stat: '5', label: 'Platforms Managed' },
                  { stat: 'Daily', label: 'Monitoring' }
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
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
                >
                  <Link to="/free-consultation">Get Free Social Audit</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/portfolio">See Examples</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Credential Section */}
      <section className="py-12 bg-gradient-to-r from-[#1E3A5F]/5 to-[#00B4D8]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#1E3A5F]">With 20+ years of digital marketing experience since 2002</span>, 
              we've managed social media campaigns that have generated over 10 million impressions for our clients. 
              We were doing social media marketing before most platforms even existed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Social Media Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media management tailored to your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00B4D8] rounded-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      {service.badge && (
                        <Badge className="bg-[#00B4D8] text-white border-none text-xs">
                          {service.badge}
                        </Badge>
                      )}
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
            animate={isServicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button 
              asChild 
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold"
            >
              <Link to="/free-consultation" className="flex items-center gap-2">
                Get Your Free Social Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Social Media Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A proven methodology refined over 20+ years of digital marketing
          </p>
          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Social Audit", desc: "Analyze your current presence and competitors" },
              { step: "2", title: "Strategy", desc: "Custom plan aligned with your business goals" },
              { step: "3", title: "Content", desc: "Create engaging posts that reflect your brand" },
              { step: "4", title: "Engage", desc: "Daily monitoring and community management" },
              { step: "5", title: "Report", desc: "Monthly insights showing what's working" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-[#00B4D8] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section ref={platformsRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Platforms We Manage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across all major social media platforms
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {platforms.map((platform, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isPlatformsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Card className="w-full h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-lg group cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${platform.color}15` }}
                      >
                        <platform.icon 
                          className="w-8 h-8" 
                          style={{ color: platform.color }}
                        />
                      </div>
                      <p className="text-sm font-semibold text-[#1E3A5F] text-center">
                        {platform.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Visual Examples */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isPlatformsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-2 gap-8 mt-12"
            >
              <Card className="overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjUyNzgzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Social Media Content Creation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-semibold text-xl mb-1">
                        Content That Engages
                      </h3>
                      <p className="text-white/90 text-sm">
                        Custom graphics and posts designed for your brand
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1620794511798-d7ba5299a087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHNvY2lhbCUyMGFwcHN8ZW58MXx8fHwxNzY1NDAxNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mobile Social Media Apps"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-semibold text-xl mb-1">
                        Multi-Platform Strategy
                      </h3>
                      <p className="text-white/90 text-sm">
                        Coordinated campaigns across all your channels
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-8 text-white relative">
              <div className="absolute top-4 right-4 flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <blockquote className="text-xl italic mb-6">
                "ThinkMents transformed our social media presence. Our engagement increased by 200% and we're now getting quality leads directly from Instagram and Facebook. They truly understand how to make social media work for business."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">SM</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-white/80 text-sm">Marketing Director, Healthcare Industry</p>
                </div>
              </div>
              <Link to="/testimonials" className="inline-flex items-center gap-2 mt-6 text-white/90 hover:text-white">
                Read all 103 reviews <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Real Social Media Results
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-[#00B4D8] mb-2">156%</div>
              <p className="text-gray-600">Engagement increase for restaurant client</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-[#00B4D8] mb-2">3x</div>
              <p className="text-gray-600">Follower growth in 6 months</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-[#00B4D8] mb-2">45+</div>
              <p className="text-gray-600">Leads per month from social</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold">
              See more case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Social Media FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How often should my business post on social media?",
                a: "It depends on the platform and your audience. Generally, we recommend 3-5 posts per week on Facebook/LinkedIn, 1-2 posts daily on Instagram, and 3-5 tweets daily on Twitter. Quality always beats quantity."
              },
              {
                q: "Which social media platforms should my business be on?",
                a: "We help you choose platforms based on where your customers spend time. B2B companies often do best on LinkedIn, while B2C businesses thrive on Instagram and Facebook. We'll audit your industry and competitors to recommend the right mix."
              },
              {
                q: "How long before we see results from social media?",
                a: "Organic social media is a long-term strategy. You'll typically see engagement improvements within 30-60 days, but meaningful business results usually take 3-6 months of consistent effort."
              },
              {
                q: "Do you handle negative comments and reviews?",
                a: "Yes! Our daily monitoring includes responding to all comments and messages. For negative feedback, we follow a proven response protocol that protects your reputation while addressing concerns professionally."
              },
              {
                q: "What's included in your social media management?",
                a: "Our management packages include strategy development, content creation, posting and scheduling, community management (responding to comments/messages), monthly analytics reporting, and ongoing optimization."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-[#1E3A5F] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faqs" className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold">
              View all FAQs →
            </Link>
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
              Ready to Get Social?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let&apos;s audit your current social media presence and show you what&apos;s possible.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">Get Free Social Audit</Link>
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
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>10M+ Reach Generated</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>50+ Active Accounts</span>
              </div>
              <span className="text-white/40">|</span>
              <span>Daily Monitoring</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices 
        services={[
          {
            icon: FileText,
            title: 'Content Marketing',
            description: 'Strategic content creation including blogs, guides, and resources that educate and convert.',
            href: '/content-marketing'
          },
          {
            icon: Video,
            title: 'Video & Photography',
            description: 'Professional video production and photography services that tell your brand story.',
            href: '/video-photography'
          },
          {
            icon: Search,
            title: 'Paid Advertising',
            description: 'Strategic ad campaigns across Google, YouTube, and job boards with measurable ROI.',
            href: '/paid-advertising'
          }
        ]}
      />
    </>
  );
}