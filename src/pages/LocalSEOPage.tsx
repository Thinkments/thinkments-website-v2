import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, CheckCircle, Star, TrendingUp, Award, Users, Search, Target, FileText, Link2, MessageSquare, Code, BarChart, Building2, Wrench, UtensilsCrossed, Stethoscope, Scale, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function LocalSEOPage() {
  const stats = [
    { icon: Award, label: '20+ Years Experience', value: '20+' },
    { icon: Star, label: '5.0 Google Rating', value: '5.0' },
    { icon: TrendingUp, label: 'Proven Local Results', value: '100+' }
  ];

  const localSEOFacts = [
    {
      stat: '46%',
      description: 'of all Google searches have local intent'
    },
    {
      stat: '88%',
      description: 'of local searches result in a call or visit within 24 hours'
    },
    {
      stat: '76%',
      description: 'of people who search for something nearby visit a business within 24 hours'
    }
  ];

  const services = [
    {
      icon: Building2,
      title: 'Google Business Profile Optimization',
      description: 'Your Google Business Profile is the foundation of local SEO success. We optimize every element—business information, categories, photos, posts, and Q&A—to maximize your visibility in Google Maps and local search results. A fully optimized profile increases your chances of appearing in the coveted "Map Pack" for local searches.',
      linkTo: '/google-business-profile'
    },
    {
      icon: Search,
      title: 'Local Keyword Research & Strategy',
      description: 'Identifying the right local keywords is critical to attracting nearby customers. We research high-intent local search terms your target audience uses, including "near me" searches, city-specific queries, and neighborhood terms. Our strategy ensures you rank for searches that drive real business results in your service area.',
      linkTo: null
    },
    {
      icon: FileText,
      title: 'Citation Building & NAP Consistency',
      description: 'Citations are online mentions of your business name, address, and phone number (NAP) across directories, websites, and platforms. Consistent NAP information across the web builds trust with search engines and improves local rankings. We build and manage citations on high-authority local directories and platforms relevant to your industry.',
      linkTo: null
    },
    {
      icon: Link2,
      title: 'Local Link Building',
      description: 'Quality local backlinks from community organizations, chambers of commerce, local news sites, and industry partners signal authority to search engines. We develop strategic local link-building campaigns that connect you with relevant local sources, strengthening your domain authority and local search presence.',
      linkTo: null
    },
    {
      icon: MessageSquare,
      title: 'Review Generation & Management',
      description: 'Online reviews are a critical ranking factor for local SEO and influence customer decisions. We implement proven review generation strategies to encourage satisfied customers to leave positive feedback, monitor and respond to reviews professionally, and address negative feedback strategically to protect and enhance your reputation.',
      linkTo: null
    },
    {
      icon: FileText,
      title: 'Local Content Creation',
      description: 'Location-specific content helps you rank for local searches and establishes you as a trusted local authority. We create blog posts, service pages, and location pages targeting local keywords, addressing local customer concerns, and highlighting your community involvement. This content attracts local traffic and builds trust with potential customers.',
      linkTo: null
    },
    {
      icon: MapPin,
      title: 'Google Maps Optimization',
      description: 'Appearing prominently in Google Maps results drives foot traffic and local awareness. We optimize your Google Maps presence through strategic keyword placement, compelling business descriptions, high-quality photos, regular posts, and accurate service area definitions. Strong Maps visibility puts you in front of ready-to-buy local customers.',
      linkTo: null
    },
    {
      icon: Code,
      title: 'Local Schema Markup',
      description: 'Schema markup is structured data code that helps search engines understand your business information better. We implement LocalBusiness schema, service area schema, and review schema to enhance your search listings with rich snippets—star ratings, business hours, and location information—making your results more visible and clickable in search.',
      linkTo: null
    }
  ];

  const targetAudiences = [
    {
      icon: Building2,
      title: 'Small Businesses',
      description: 'Retail stores, restaurants, professional offices, and local service providers serving a specific city or region'
    },
    {
      icon: Wrench,
      title: 'Service-Area Businesses',
      description: 'Plumbers, electricians, HVAC contractors, landscapers, and other businesses serving customers at their locations'
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurants & Retail',
      description: 'Establishments that depend on foot traffic and local customers finding them through search'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Practices',
      description: 'Dental offices, medical practices, chiropractors, therapists, and healthcare providers serving local patients'
    },
    {
      icon: Scale,
      title: 'Professional Services',
      description: 'Lawyers, accountants, financial advisors, and consultants attracting clients from their local area'
    },
    {
      icon: Target,
      title: 'Any Local Business',
      description: 'If you want customers from your local area to find you when they search, local SEO is essential'
    }
  ];

  const process = [
    {
      phase: '1',
      title: 'Local SEO Audit',
      description: 'We analyze your current local search presence, Google Business Profile, citations, online reviews, local rankings, and competitors. This comprehensive audit identifies gaps and opportunities to improve your local visibility and create a strategic roadmap.',
      duration: '1-2 weeks'
    },
    {
      phase: '2',
      title: 'Google Business Profile Optimization',
      description: 'We optimize or create your Google Business Profile with accurate information, compelling descriptions, strategic categories, high-quality photos, service areas, business hours, and all relevant details. This is the foundation of local SEO success.',
      duration: '1 week'
    },
    {
      phase: '3',
      title: 'Citation Building',
      description: 'We build and optimize citations across major directories (Yelp, Facebook, Apple Maps, Bing Places) and industry-specific platforms. We ensure NAP consistency across all listings and fix any incorrect or duplicate listings that hurt your rankings.',
      duration: '2-4 weeks'
    },
    {
      phase: '4',
      title: 'Content & On-Page Optimization',
      description: 'We optimize your website for local search with location-specific keywords, local landing pages, schema markup, internal linking, and mobile optimization. Content is created or enhanced to target local search intent and establish local authority.',
      duration: '3-4 weeks'
    },
    {
      phase: '5',
      title: 'Review Strategy',
      description: 'We implement a systematic review generation process, set up review monitoring, and develop response strategies. Positive reviews are encouraged through follow-up campaigns, while negative reviews are addressed professionally to protect your reputation.',
      duration: 'Ongoing'
    },
    {
      phase: '6',
      title: 'Ongoing Monitoring & Reporting',
      description: 'Local SEO requires continuous attention. We monitor local rankings, track leads and calls, analyze Google Business Profile insights, maintain citations, generate content, and provide detailed monthly reports showing progress toward your local visibility goals.',
      duration: 'Ongoing'
    }
  ];

  const results = [
    {
      metric: 'Map Pack Rankings',
      description: 'Appearing in the top 3 Google Map Pack results for primary keywords',
      icon: MapPin,
      color: 'text-[#00B4D8]'
    },
    {
      metric: 'Local Traffic Increase',
      description: 'Significant growth in website traffic from local searches and Google Maps',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      metric: 'Calls & Leads Generated',
      description: 'Measurable increase in phone calls, direction requests, and contact form submissions',
      icon: Phone,
      color: 'text-[#F7B928]'
    },
    {
      metric: 'Review Growth',
      description: 'Steady stream of new positive reviews improving reputation and rankings',
      icon: Star,
      color: 'text-orange-600'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Local SEO Services for Texas Businesses | ThinkMents</title>
        <meta name="description" content="Get found by local customers. ThinkMents provides expert Local SEO services for Decatur and North Texas businesses. Google Maps optimization, citations, reviews & more." />
        <meta property="og:title" content="Local SEO Services for Texas Businesses | ThinkMents" />
        <meta property="og:description" content="Get found by local customers. ThinkMents provides expert Local SEO services for Decatur and North Texas businesses. Google Maps optimization, citations, reviews & more." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/local-seo" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#234B70] to-[#2C5282] text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-[#F7B928]" />
                <span className="text-sm font-semibold">Local SEO Services</span>
              </div>

              <h1 className="mb-6">
                Local SEO Services for Texas Businesses
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get found by customers in your area. We help Decatur and North Texas businesses dominate local search results.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <stat.icon className="w-5 h-5 text-[#F7B928]" />
                    <span className="text-sm font-semibold">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/free-consultation">Get Free Local SEO Audit</Link>
                </Button>

                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-6 rounded-full transition-all duration-300"
                >
                  <a href="tel:9403151023">
                    <Phone className="w-5 h-5 mr-2" />
                    (940) 315-1023
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Local SEO Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="mb-6">What is Local SEO?</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Local SEO (Search Engine Optimization) is the practice of optimizing your online presence to attract customers from local searches. Unlike traditional SEO that targets a broad national or international audience, local SEO focuses on ranking for searches in specific geographic areas—your city, region, or service area.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When someone searches for "plumber near me," "best restaurant in Decatur," or "accountant in North Texas," local SEO determines which businesses appear. It combines Google Business Profile optimization, local content, online reviews, citations, and technical optimizations to improve your visibility where it matters most—in front of nearby customers ready to buy.
                </p>

                <div className="bg-gradient-to-br from-[#00B4D8]/10 to-white rounded-xl p-8 border border-[#00B4D8]/20">
                  <h3 className="font-bold text-[#1E3A5F] mb-6">Why Local SEO Matters</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {localSEOFacts.map((fact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-4xl font-bold text-[#00B4D8] mb-2">{fact.stat}</div>
                        <p className="text-gray-700">{fact.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Local SEO Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Local SEO Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive local SEO solutions designed to increase your visibility, attract local customers, and drive real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00B4D8] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1E3A5F] mb-2">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {service.linkTo && (
                    <Link 
                      to={service.linkTo}
                      className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Who Local SEO Is For</h2>
                <p className="text-xl text-gray-600">
                  If you serve customers in a specific geographic area, local SEO is essential to your marketing strategy.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {targetAudiences.map((audience, index) => (
                  <motion.div
                    key={audience.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mb-4">
                      <audience.icon className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                    <h3 className="font-bold text-[#1E3A5F] mb-3">{audience.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{audience.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Local SEO Process */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Our Proven Local SEO Process</h2>
                <p className="text-xl text-gray-600">
                  A systematic approach to improving your local search visibility and attracting nearby customers.
                </p>
              </div>

              <div className="space-y-6">
                {process.map((step, index) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00B4D8] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.phase}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-[#1E3A5F]">{step.title}</h3>
                          <span className="text-sm font-semibold text-[#00B4D8] whitespace-nowrap ml-4">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Results Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Results We've Delivered</h2>
                <p className="text-xl text-gray-600">
                  Local SEO success is measured by real business outcomes—rankings, traffic, and leads from local customers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {results.map((result, index) => (
                  <motion.div
                    key={result.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-white shadow-md flex items-center justify-center flex-shrink-0">
                        <result.icon className={`w-7 h-7 ${result.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E3A5F] mb-2">{result.metric}</h3>
                        <p className="text-gray-700 leading-relaxed">{result.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-br from-[#00B4D8]/10 to-white rounded-xl p-8 border border-[#00B4D8]/20 text-center"
              >
                <h3 className="font-bold text-[#1E3A5F] mb-4">Real Results for Real Businesses</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  From small local shops to multi-location service businesses, we've helped North Texas companies dominate local search results. Our data-driven approach focuses on metrics that matter: visibility, traffic, and revenue from local customers.
                </p>
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00B4D8]">150+</div>
                    <div className="text-gray-600">Local Businesses Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00B4D8]">89%</div>
                    <div className="text-gray-600">First Page Rankings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00B4D8]">3.2x</div>
                    <div className="text-gray-600">Avg Traffic Increase</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#234B70] to-[#2C5282] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-white mb-6">Ready to Dominate Local Search?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Get found by customers in Decatur, North Texas, and beyond. Let's create a local SEO strategy that drives real results for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/free-consultation">Get Your Free Local SEO Audit</Link>
                </Button>

                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-6 rounded-full transition-all duration-300"
                >
                  <a href="tel:9403151023">
                    <Phone className="w-5 h-5 mr-2" />
                    (940) 315-1023
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/80 flex-wrap">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F7B928]" />
                  <span>5.0 Google Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#F7B928]" />
                  <span>103+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#F7B928]" />
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
