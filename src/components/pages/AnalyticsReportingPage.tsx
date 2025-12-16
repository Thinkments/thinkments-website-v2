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
  BarChart3,
  Tag,
  Search,
  FileText,
  Target,
  DollarSign,
  TrendingUp,
  Users,
  MousePointerClick,
  Mail,
  Trophy,
  Eye,
  Award,
  Code,
  Star
} from 'lucide-react';
import SEO from '../SEO';
import RelatedServices from '../RelatedServices';

export default function AnalyticsReportingPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whatWeTrackRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isWhatWeTrackInView = useInView(whatWeTrackRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const services = [
    {
      icon: BarChart3,
      title: 'Google Analytics GA4',
      description: 'Full GA4 setup, configuration, and migration from Universal Analytics.',
      price: 'From $400',
      badge: null
    },
    {
      icon: Tag,
      title: 'Google Tag Manager',
      description: 'Proper tag implementation for tracking conversions, events, and user behavior.',
      price: 'From $300',
      badge: null
    },
    {
      icon: Search,
      title: 'Search Console Setup',
      description: 'Monitor your search performance, indexing status, and technical issues.',
      price: 'From $150',
      badge: null
    },
    {
      icon: FileText,
      title: 'Monthly Performance Reports',
      description: 'Clear, actionable reports showing what\'s working and recommendations for improvement.',
      price: 'From $200/mo',
      badge: null
    },
    {
      icon: Target,
      title: 'Conversion Tracking',
      description: 'Track form submissions, phone calls, purchases, and other valuable actions.',
      price: 'From $250',
      badge: null
    },
    {
      icon: DollarSign,
      title: 'ROI Analysis',
      description: 'Connect marketing spend to actual revenue. Know your true return on investment.',
      price: 'From $350',
      badge: null
    }
  ];

  const trackingItems = [
    {
      icon: Users,
      title: 'Website Traffic & Behavior',
      description: 'Understand who visits your site and how they interact with your content.'
    },
    {
      icon: Target,
      title: 'Lead Generation & Conversions',
      description: 'Track every lead, conversion, and customer journey milestone.'
    },
    {
      icon: Phone,
      title: 'Phone Calls & Form Submissions',
      description: 'Know exactly which marketing efforts drive phone calls and form fills.'
    },
    {
      icon: Trophy,
      title: 'Ad Campaign Performance',
      description: 'See which ads, keywords, and campaigns generate the best results.'
    },
    {
      icon: TrendingUp,
      title: 'SEO Rankings & Visibility',
      description: 'Monitor your search engine rankings and organic traffic growth.'
    },
    {
      icon: MousePointerClick,
      title: 'Social Media Engagement',
      description: 'Track social media reach, engagement, and conversion impact.'
    },
    {
      icon: Mail,
      title: 'Email Campaign Results',
      description: 'Measure email open rates, click-throughs, and conversion performance.'
    },
    {
      icon: Eye,
      title: 'User Behavior Insights',
      description: 'Understand what pages users visit, how long they stay, and where they drop off.'
    }
  ];

  return (
    <>
      <SEO
        title="Analytics & Reporting Services | Google Analytics GA4 | Data Tracking | ThinkMents"
        description="Data-driven analytics and reporting. Google Analytics GA4 setup, Tag Manager, conversion tracking, ROI analysis, and monthly performance reports. GA4 Certified."
        url="/services/analytics-reporting"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBncmFwaHMlMjBjaGFydHN8ZW58MXx8fHwxNzY1NDAyNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080)',
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
                <span className="text-white">Analytics & Reporting</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Data That Drives Decisions
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Stop guessing and start knowing. We set up proper tracking, build custom dashboards, and deliver reports that actually tell you what&apos;s working and what&apos;s not.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: 'GA4', label: 'Certified' },
                  { stat: '100%', label: 'Data Accuracy' },
                  { stat: 'Real-Time', label: 'Dashboards' },
                  { stat: 'Monthly', label: 'Reports Included' }
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
                  <Link to="/free-consultation">Get Analytics Audit</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-semibold text-lg px-8"
                >
                  <Link to="/portfolio">See Sample Reports</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Credential Section */}
      <section className="py-12 bg-gradient-to-r from-[#1E3A5F]/5 to-[#00B4D8]/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-[#1E3A5F]">For over 20 years</span>, we've helped businesses make data-driven decisions. 
            We've analyzed millions of data points across hundreds of campaigns to uncover insights that drive real growth. 
            Our reporting doesn't just show numbers—it tells you what to do next.
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Analytics Approach
          </h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Collect", desc: "Gather data from all your marketing channels" },
              { title: "Analyze", desc: "Find patterns and insights in your data" },
              { title: "Recommend", desc: "Actionable suggestions based on findings" },
              { title: "Implement", desc: "Help you execute on recommendations" },
              { title: "Optimize", desc: "Continuous improvement based on results" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 bg-[#00B4D8] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
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
              Our Analytics & Reporting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete analytics solutions from setup to ongoing reporting
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
                        <Badge className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white border-none text-xs">
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
                Get Your Analytics Setup
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Track Section */}
      <section ref={whatWeTrackRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhatWeTrackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Complete Visibility Into Your Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track every metric that matters to your business success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trackingItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhatWeTrackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Examples Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Data You Can Actually Use
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NTQwMjU4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Data Visualization"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-semibold text-xl mb-1">
                          Visual Dashboards
                        </h3>
                        <p className="text-white/90 text-sm">
                          See your key metrics at a glance with custom dashboards
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1ldHJpY3MlMjByZXBvcnRpbmd8ZW58MXx8fHwxNzY1NDAyNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Business Metrics"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/80 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-semibold text-xl mb-1">
                          Actionable Insights
                        </h3>
                        <p className="text-white/90 text-sm">
                          Reports that tell you exactly what to do next
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-8 text-white">
            <div className="flex mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <blockquote className="text-xl italic mb-6">
              "Finally, reports I can actually understand and act on! ThinkMents doesn't just dump data on us—they explain what it means and what we should do. Our marketing ROI has improved 340% since we started working with them."
            </blockquote>
            <p className="font-semibold">Jennifer R.</p>
            <p className="text-white/80 text-sm">Operations Manager</p>
            <Link to="/testimonials" className="inline-flex items-center gap-2 mt-4 text-white/90 hover:text-white">
              Read all reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Analytics FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What metrics should I be tracking?",
                a: "It depends on your goals, but we typically track: traffic sources, conversion rates, cost per acquisition, customer lifetime value, engagement metrics, and ROI by channel. We'll help you identify the KPIs that matter most for your business."
              },
              {
                q: "How often do you provide reports?",
                a: "Most clients receive monthly reports with quarterly deep-dives. For active campaigns, we provide weekly updates. You also get access to a real-time dashboard you can check anytime."
              },
              {
                q: "Can you integrate with our existing tools?",
                a: "Yes! We work with Google Analytics, Google Ads, Facebook Ads, HubSpot, Salesforce, and most major marketing platforms. We'll create a unified view of all your data."
              },
              {
                q: "What makes your reporting different?",
                a: "We don't just show you numbers—we tell you what they mean and what to do about it. Every report includes actionable recommendations prioritized by impact."
              },
              {
                q: "Do you provide recommendations with your reports?",
                a: "Absolutely. Every report includes a 'Next Steps' section with specific, prioritized recommendations. We also review reports with you to ensure you understand the insights."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="font-semibold text-[#1E3A5F] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why Choose ThinkMents for Analytics?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'GA4 Certified Experts',
                  description: 'Our team is certified in Google Analytics 4 and stays current with all platform updates.'
                },
                {
                  title: '100% Data Accuracy',
                  description: 'We implement tracking correctly from the start, so you can trust your data.'
                },
                {
                  title: 'Custom Dashboards',
                  description: 'Real-time dashboards built around your specific business goals and KPIs.'
                },
                {
                  title: 'Clear, Actionable Reports',
                  description: 'No jargon. Just clear explanations of what the data means and what to do about it.'
                },
                {
                  title: 'ROI Focused',
                  description: 'We connect your marketing spend directly to revenue so you know what\'s working.'
                },
                {
                  title: 'Ongoing Optimization',
                  description: 'Monthly reports include recommendations for improvement based on data trends.'
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how we can help grow your business. Free consultation, no obligation.
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
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>103+ Reviews</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
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
            icon: Search,
            title: 'Marketing & SEO',
            description: 'Get found on Google with comprehensive SEO strategies and local search optimization.',
            href: '/marketing-seo'
          },
          {
            icon: Target,
            title: 'Paid Advertising',
            description: 'Drive immediate results with Google Ads, Facebook Ads, and retargeting campaigns.',
            href: '/paid-advertising'
          },
          {
            icon: Code,
            title: 'Technical Services',
            description: 'Technical support including DNS, email configuration, SSL, security, and server management.',
            href: '/technical-services'
          }
        ]}
      />
    </>
  );
}