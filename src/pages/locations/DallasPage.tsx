import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, MapPin, Award, Users, TrendingUp, Clock, CheckCircle, ChevronDown, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function DallasPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'SEO Services for Dallas',
      description: 'Dominate local Dallas search results and attract more qualified customers.',
      link: '/marketing-seo'
    },
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that convert Dallas visitors into customers.',
      link: '/web-development'
    },
    {
      title: 'Google Business Profile',
      description: 'Optimize your Google presence to stand out in Dallas local searches.',
      link: '/google-business-profile'
    },
    {
      title: 'PPC & Paid Advertising',
      description: 'Targeted ad campaigns that reach Dallas customers ready to buy.',
      link: '/paid-advertising'
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your brand and engage with the Dallas community on social platforms.',
      link: '/social-media'
    },
    {
      title: 'Content Marketing',
      description: 'Compelling content that resonates with Dallas audiences and drives action.',
      link: '/content-marketing'
    }
  ];

  const whyChoose = [
    {
      title: 'Dallas Market Expertise',
      description: 'We understand the competitive Dallas business landscape and what it takes to succeed in this dynamic market.'
    },
    {
      title: '20+ Years of Experience',
      description: 'Since 2002, we\'ve helped Dallas-area businesses grow through strategic digital marketing that delivers measurable results.'
    },
    {
      title: 'Local Texas Agency',
      description: 'Based in nearby Decatur, we\'re close enough to understand Dallas while offering personalized service you won\'t get from national firms.'
    },
    {
      title: 'Proven Results',
      description: 'Our 5.0 Google rating and 103+ verified reviews demonstrate our commitment to excellence for every Dallas client.'
    }
  ];

  const faqs = [
    {
      question: 'What digital marketing services do you offer in Dallas?',
      answer: 'We provide comprehensive digital marketing services to Dallas businesses including SEO, web design and development, Google Business Profile management, PPC advertising, social media marketing, content marketing, video production, and analytics reporting. Our services are tailored to help Dallas businesses increase visibility, generate qualified leads, and grow revenue.'
    },
    {
      question: 'How much does SEO cost for Dallas businesses?',
      answer: 'SEO investment for Dallas businesses typically ranges from $1,500 to $5,000+ per month depending on your goals, competition level, and market scope. Dallas is a competitive market, so we develop customized strategies based on your specific industry and objectives. We offer free consultations to provide accurate pricing for your unique situation.'
    },
    {
      question: 'Do you work with small businesses in Dallas?',
      answer: 'Absolutely! We work with Dallas businesses of all sizes, from local startups and small businesses to established enterprises. We understand the unique challenges small businesses face in competitive markets like Dallas and create cost-effective strategies that deliver real results without breaking your budget.'
    },
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Timeline varies by service. PPC campaigns can generate leads within days, while SEO typically shows significant improvement in 3-6 months. Social media and content marketing build momentum over 2-4 months. We provide realistic timelines during your free consultation and deliver monthly reporting so you can track your Dallas market progress.'
    },
    {
      question: 'Do you offer free consultations for Dallas businesses?',
      answer: 'Yes! We offer complimentary consultations for all Dallas-area businesses. During this session, we\'ll discuss your goals, analyze your current digital presence, review your competition in the Dallas market, and provide actionable recommendations. There\'s no obligation - just valuable insights to help your business grow.'
    },
    {
      question: 'What industries do you serve in Dallas?',
      answer: 'We serve Dallas businesses across all industries including healthcare, professional services, retail, restaurants, real estate, home services, technology, manufacturing, and more. Our team has experience with the unique marketing challenges of different sectors in the Dallas metro area and creates industry-specific strategies that work.'
    }
  ];

  const localStats = [
    { number: '15+', label: 'Years Serving Dallas' },
    { number: '50+', label: 'Dallas-Area Clients' },
    { number: '250%', label: 'Avg. Traffic Growth' },
    { number: '5.0', label: 'Google Rating' }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ThinkMents - Digital Marketing Agency',
    description: 'Digital marketing agency serving Dallas, TX with SEO, web design, and comprehensive marketing solutions.',
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
    url: 'https://thinkments.com/locations/dallas',
    areaServed: {
      '@type': 'City',
      name: 'Dallas',
      '@id': 'https://en.wikipedia.org/wiki/Dallas'
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
        <title>Digital Marketing Agency in Dallas, TX | ThinkMents</title>
        <meta name="description" content="ThinkMents provides SEO, web design & digital marketing services to businesses in Dallas, Texas. 20+ years experience. Free consultation." />
        <meta property="og:title" content="Digital Marketing Agency in Dallas, TX | ThinkMents" />
        <meta property="og:description" content="ThinkMents provides SEO, web design & digital marketing services to businesses in Dallas, Texas. 20+ years experience. Free consultation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/locations/dallas" />
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
                <span className="text-sm font-semibold">Serving Dallas, Texas</span>
              </div>

              <h1 className="mb-6">
                Digital Marketing Agency in Dallas, Texas
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                ThinkMents delivers SEO, web design, and results-driven marketing to businesses in Dallas and surrounding areas.
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
                <h2 className="mb-6">Your Dallas Digital Marketing Partner</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Dallas businesses face unique challenges in one of America's most competitive and dynamic markets. From Downtown's corporate headquarters to Deep Ellum's creative businesses and Uptown's thriving retail scene, every Dallas neighborhood has its own character and customer base.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ThinkMents understands the Dallas business ecosystem. We've helped companies throughout Dallas County, Richardson, Plano, and the greater DFW metroplex achieve breakthrough results through strategic digital marketing. Whether you're targeting local Dallas customers or reaching audiences across Texas, we create campaigns that connect with your market and drive measurable growth.
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
                <h2 className="mb-4">Digital Marketing Services for Dallas Businesses</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive solutions designed to help your Dallas business thrive in competitive markets.
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
                <h2 className="mb-4">Why Choose ThinkMents for Dallas</h2>
                <p className="text-xl text-gray-600">
                  Local expertise, proven results, and personalized service for Dallas businesses.
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
                <h2 className="mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">
                  Common questions from Dallas businesses about our digital marketing services.
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
              <h2 className="text-white mb-6">Ready to Grow Your Dallas Business?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how strategic digital marketing can help you dominate the Dallas market and achieve your business goals.
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
