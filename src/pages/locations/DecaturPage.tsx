import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Phone,
  MapPin,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  Star,
  Heart,
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function DecaturPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Local SEO & Search Marketing',
      description: 'Put your Decatur business on the map with powerful local SEO strategies.',
      link: '/marketing-seo',
    },
    {
      title: 'Custom Website Development',
      description:
        'Beautiful, functional websites that showcase what makes your Decatur business special.',
      link: '/web-development',
    },
    {
      title: 'Google Business Profile',
      description: 'Dominate local Decatur searches and attract more walk-in customers.',
      link: '/google-business-profile',
    },
    {
      title: 'Paid Advertising Campaigns',
      description: 'Targeted ads that reach Decatur and Wise County customers ready to buy.',
      link: '/paid-advertising',
    },
    {
      title: 'Social Media Marketing',
      description: 'Connect with the Decatur community and build loyal customer relationships.',
      link: '/social-media',
    },
    {
      title: 'Content & Video Marketing',
      description: 'Tell your story in ways that resonate with Decatur residents and beyond.',
      link: '/content-marketing',
    },
  ];

  const whyChoose = [
    {
      title: 'Hometown Advantage',
      description:
        "We're based right here in Decatur at 301 South Washburn St. We know this community because we're part of it - shopping at the same stores, supporting local events, and investing in Wise County's future.",
    },
    {
      title: 'Small-Town Values, Big Results',
      description:
        "We bring sophisticated digital marketing expertise while maintaining the personal service and integrity Decatur businesses expect. You'll never be just a number with us.",
    },
    {
      title: 'Proven Local Success',
      description:
        "We've helped Decatur and Wise County businesses thrive for two decades. From Main Street shops to service providers across the region, we understand what works here.",
    },
    {
      title: 'Community Investment',
      description:
        "When Decatur businesses succeed, our community prospers. We're committed to helping local entrepreneurs and established companies achieve their goals and create jobs.",
    },
  ];

  const faqs = [
    {
      question: 'What digital marketing services do you offer in Decatur?',
      answer:
        'As your hometown digital marketing agency, we provide Decatur businesses with everything needed to succeed online: local SEO to rank higher in Decatur and Wise County searches, professional web design, Google Business Profile optimization, PPC advertising, social media management, content marketing, video production, and comprehensive analytics. We create personalized strategies for each Decatur client based on your goals and budget.',
    },
    {
      question: 'How much does SEO cost for Decatur businesses?',
      answer:
        "SEO services for Decatur businesses typically start around $1,500 to $3,500 monthly, depending on your competition level and target market. Decatur offers great opportunities for local businesses to dominate search results without competing against huge metropolitan markets. We'll create an affordable strategy during your free consultation that fits your budget while delivering real growth.",
    },
    {
      question: 'Do you work with small businesses in Decatur?',
      answer:
        'Absolutely - small businesses are the backbone of Decatur! We work with local shops, restaurants, service providers, healthcare practices, and entrepreneurs throughout Wise County. We understand the challenges small business owners face and design cost-effective marketing solutions that generate results without requiring Fortune 500 budgets. Your success is our success.',
    },
    {
      question: 'How long does it take to see digital marketing results?',
      answer:
        "Timeline varies by service. PPC campaigns can bring Decatur leads within days. Local SEO typically shows significant improvement in 3-6 months as we build your presence in Decatur searches. Social media grows steadily over 2-4 months. We establish clear timelines upfront and provide monthly reports so you always know how your investment is performing and what results we're achieving.",
    },
    {
      question: 'Do you offer free consultations for Decatur businesses?',
      answer:
        "Yes! We offer complimentary consultations to all Decatur and Wise County businesses. Stop by our office at 301 South Washburn St Suite D, or we can meet at your location. We'll review your current marketing, discuss your goals, and provide honest recommendations - no pressure, no obligation. Just neighborly advice from folks who want to see your business thrive.",
    },
    {
      question: 'What industries do you serve in Decatur?',
      answer:
        'We serve all Decatur industries: retail shops on the Square, restaurants and hospitality, professional services (lawyers, accountants, insurance), healthcare providers, real estate agencies, home services and contractors, automotive businesses, agriculture-related companies, and more. Every industry has unique needs, and we tailor strategies to your specific market, whether you serve Decatur exclusively or the broader DFW region.',
    },
  ];

  const localStats = [
    { number: '20+', label: 'Years in Decatur' },
    { number: '25+', label: 'Decatur Clients' },
    { number: '320%', label: 'Avg. Growth Rate' },
    { number: '100%', label: 'Local Ownership' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ThinkMents - Digital Marketing Agency',
    description:
      'Digital marketing agency based in Decatur, TX providing SEO, web design, and comprehensive marketing solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '301 South Washburn St, Suite D',
      addressLocality: 'Decatur',
      addressRegion: 'TX',
      postalCode: '76234',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.2283526',
      longitude: '-97.5883743',
    },
    telephone: '+19403151023',
    email: 'info@thinkments.com',
    url: 'https://thinkments.com/locations/decatur',
    areaServed: {
      '@type': 'City',
      name: 'Decatur',
      '@id': 'https://en.wikipedia.org/wiki/Decatur,_Texas',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '103',
    },
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Decatur, TX | ThinkMents</title>
        <meta
          name="description"
          content="ThinkMents provides SEO, web design & digital marketing services to businesses in Decatur, Texas. 20+ years experience. Free consultation."
        />
        <meta property="og:title" content="Digital Marketing Agency in Decatur, TX | ThinkMents" />
        <meta
          property="og:description"
          content="ThinkMents provides SEO, web design & digital marketing services to businesses in Decatur, Texas. 20+ years experience. Free consultation."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/locations/decatur" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#234B70] to-[#2C5282] text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#F7B928] fill-[#F7B928]" />
                <span className="text-sm font-semibold">Proudly Serving Our Hometown</span>
              </div>

              <h1 className="mb-6">Digital Marketing Agency in Decatur, Texas</h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Your hometown digital marketing partner. ThinkMents delivers SEO, web design, and
                results-driven marketing to Decatur businesses and beyond.
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
                <h2 className="mb-6">Decatur's Digital Marketing Partner Since 2002</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Decatur is more than our business location - it's our home. For over 20 years,
                  ThinkMents has been proud to serve the businesses and community of Decatur and
                  Wise County. From the historic courthouse square to growing residential
                  neighborhoods, we've watched this town evolve and helped local businesses thrive
                  through every change.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're a third-generation family business on the Square, a service
                  provider serving Wise County, or a growing company ready to expand beyond Decatur,
                  we provide the digital marketing expertise you need with the hometown service you
                  deserve. We're invested in this community's success because when Decatur
                  businesses prosper, we all benefit. Let's grow together.
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
                <h2 className="mb-4">Digital Marketing Services for Decatur</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive solutions designed for Decatur's unique business community.
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
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
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
                <h2 className="mb-4">Why Decatur Businesses Choose ThinkMents</h2>
                <p className="text-xl text-gray-600">
                  Hometown expertise, personal service, and a genuine commitment to your success.
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
                  Common questions from Decatur business owners about digital marketing.
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
              <h2 className="text-white mb-6">Ready to Grow Your Decatur Business?</h2>
              <p className="text-xl text-white/90 mb-4 leading-relaxed max-w-2xl mx-auto">
                Stop by our office at 301 South Washburn St Suite D, give us a call, or schedule
                your free consultation online.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Let's discuss how we can help your business thrive in Decatur and beyond.
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
                <span className="text-white/90">
                  5.0 Rating | 103+ Reviews | Proudly Serving Decatur Since 2002
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
