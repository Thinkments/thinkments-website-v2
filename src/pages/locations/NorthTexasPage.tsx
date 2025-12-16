import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, MapPin, Award, Users, TrendingUp, CheckCircle, ChevronDown, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function NorthTexasPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Regional SEO Strategy',
      description: 'Dominate search results across North Texas markets from Dallas to rural communities.',
      link: '/marketing-seo'
    },
    {
      title: 'Enterprise Web Solutions',
      description: 'Scalable websites that serve multiple North Texas locations seamlessly.',
      link: '/web-development'
    },
    {
      title: 'Multi-Location Marketing',
      description: 'Coordinate consistent branding across all your North Texas business locations.',
      link: '/google-business-profile'
    },
    {
      title: 'Regional PPC Campaigns',
      description: 'Target customers across the DFW metroplex and broader North Texas region.',
      link: '/paid-advertising'
    },
    {
      title: 'Social Media Management',
      description: 'Build brand awareness throughout North Texas communities and online.',
      link: '/social-media'
    },
    {
      title: 'Content Strategy',
      description: 'Content that resonates with diverse North Texas audiences and demographics.',
      link: '/content-marketing'
    }
  ];

  const whyChoose = [
    {
      title: 'Regional Market Expertise',
      description: 'We understand North Texas\' diverse markets - from major metropolitan areas to small rural communities. Each region has unique characteristics, and we tailor strategies accordingly.'
    },
    {
      title: 'DFW Metroplex Knowledge',
      description: 'With deep experience across Dallas, Fort Worth, Denton, Collin, and surrounding counties, we know how to navigate competitive urban markets and underserved suburban/rural areas.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Whether you operate one location or dozens across North Texas, we provide marketing solutions that scale with your business while maintaining local relevance in each market.'
    },
    {
      title: 'Texas-Based Partnership',
      description: 'As a Texas agency since 2002, we share your values and understand North Texas business culture. You\'ll work with experienced professionals who know this region inside and out.'
    }
  ];

  const faqs = [
    {
      question: 'What digital marketing services do you offer in North Texas?',
      answer: 'We provide comprehensive digital marketing services throughout North Texas including regional and local SEO, professional web design and development, Google Business Profile management for single or multiple locations, PPC advertising across DFW markets, social media marketing, content strategy, video production, and detailed analytics. Our services work equally well for businesses with one location or enterprises operating across the entire North Texas region.'
    },
    {
      question: 'How much does SEO cost for North Texas businesses?',
      answer: 'SEO investment for North Texas businesses ranges from $2,000 to $7,500+ monthly depending on your geographic scope, competition level, and goals. Regional campaigns targeting multiple North Texas cities require more extensive strategies than single-location efforts. We design customized solutions that balance your budget with your growth objectives and provide transparent pricing during free consultations.'
    },
    {
      question: 'Do you work with businesses across all of North Texas?',
      answer: 'Yes! We serve businesses throughout North Texas - from major cities like Dallas, Fort Worth, Plano, and Denton to smaller communities like Decatur, Weatherford, Granbury, and Gainesville. Whether you\'re in the heart of DFW or a rural North Texas county, we have the expertise to help your business succeed with strategic digital marketing.'
    },
    {
      question: 'How long does it take to see marketing results in competitive North Texas markets?',
      answer: 'Results vary by service and competition level. PPC campaigns can generate North Texas leads immediately. SEO for competitive DFW markets typically takes 4-8 months to show significant results, while less competitive areas may improve faster. Social media and content marketing build momentum over 3-6 months. We set realistic expectations based on your specific market conditions and provide regular progress reports.'
    },
    {
      question: 'Do you offer free consultations for North Texas businesses?',
      answer: 'Absolutely! We provide complimentary consultations to businesses throughout North Texas. Whether you\'re in downtown Dallas or a small town an hour away, we\'ll discuss your goals, analyze your current digital presence, review regional competition, and recommend proven strategies. No obligation - just expert advice tailored to your North Texas market.'
    },
    {
      question: 'What industries do you serve across North Texas?',
      answer: 'We serve North Texas businesses in every industry: healthcare systems and medical practices, professional services, retail and e-commerce, restaurants and hospitality, real estate and property management, home services and contractors, manufacturing and distribution, technology companies, automotive dealers, financial services, and more. Our regional experience spans urban, suburban, and rural North Texas markets across all business sectors.'
    }
  ];

  const localStats = [
    { number: '15+', label: 'Counties Served' },
    { number: '100+', label: 'North TX Clients' },
    { number: '20+', label: 'Years Experience' },
    { number: '31', label: 'States Nationwide' }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ThinkMents - Digital Marketing Agency',
    description: 'Digital marketing agency serving North Texas with SEO, web design, and comprehensive marketing solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '301 South Washburn St, Suite D',
      addressLocality: 'Decatur',
      addressRegion: 'TX',
      postalCode: '76234',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.2283526',
      longitude: '-97.5883743'
    },
    telephone: '+19403151023',
    email: 'info@thinkments.com',
    url: 'https://thinkments.com/locations/north-texas',
    areaServed: {
      '@type': 'State',
      name: 'North Texas Region'
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '103'
    }
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in North Texas | ThinkMents</title>
        <meta name="description" content="ThinkMents provides SEO, web design & digital marketing services to businesses across North Texas. 20+ years experience. Free consultation." />
        <meta property="og:title" content="Digital Marketing Agency in North Texas | ThinkMents" />
        <meta property="og:description" content="ThinkMents provides SEO, web design & digital marketing services to businesses across North Texas. 20+ years experience. Free consultation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/locations/north-texas" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-[#F7B928]" />
                <span className="text-sm font-semibold">Serving All of North Texas</span>
              </div>

              <h1 className="mb-6">
                Digital Marketing Agency in North Texas
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                ThinkMents delivers SEO, web design, and results-driven marketing to businesses across the North Texas region and DFW metroplex.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/free-consultation">Free Consultation</Link>
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

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {localStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#1E3A5F] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="mb-6">Your North Texas Digital Marketing Partner</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  North Texas encompasses one of America's most diverse and dynamic business regions. From the towering Dallas skyline to Fort Worth's cultural institutions, from bustling suburban growth corridors in Collin and Denton counties to thriving small-town communities in rural areas, North Texas offers opportunities for every type of business.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For two decades, ThinkMents has helped North Texas businesses navigate this complex landscape. Based in Decatur with clients throughout the region, we understand what makes each North Texas market unique. Whether you're targeting downtown Dallas professionals, suburban families, rural communities, or the entire DFW metroplex, we create data-driven strategies that connect your business with the right customers in the right places.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Digital Marketing Across North Texas</h2>
                <p className="text-xl text-gray-600">
                  Regional strategies that work for single locations or multi-market operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={service.link}
                      className="group block h-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#00B4D8] hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3 group-hover:text-[#00B4D8] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="text-sm font-semibold text-[#00B4D8] group-hover:underline">
                        Learn More →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ThinkMents */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Why Choose ThinkMents for North Texas</h2>
                <p className="text-xl text-gray-600">
                  Regional expertise with proven results across diverse North Texas markets.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 flex items-center justify-center gap-8 flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F7B928]" />
                  <span className="font-semibold text-[#1E3A5F]">5.0 Google Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#F7B928]" />
                  <span className="font-semibold text-[#1E3A5F]">103+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#F7B928]" />
                  <span className="font-semibold text-[#1E3A5F]">20+ Years Experience</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">North Texas Business FAQs</h2>
                <p className="text-xl text-gray-600">
                  Answers to common questions from North Texas business owners.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-bold text-[#1E3A5F] pr-8">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#00B4D8] flex-shrink-0 transition-transform duration-200 ${
                          openFaqIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
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
              <h2 className="text-white mb-6">Ready to Grow Across North Texas?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you operate in one city or across the entire region, we're ready to help you achieve your digital marketing goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/free-consultation">Schedule Free Consultation</Link>
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

              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <span className="text-white/90">5.0 Rating | 103+ Reviews | 20+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
