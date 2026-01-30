import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Phone,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ChevronDown,
  Star,
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function FortWorthPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Local SEO for Fort Worth',
      description:
        'Increase your visibility in Fort Worth local search and attract nearby customers.',
      link: '/marketing-seo',
    },
    {
      title: 'Professional Web Design',
      description:
        "Custom websites that reflect Fort Worth's blend of Western heritage and modern innovation.",
      link: '/web-development',
    },
    {
      title: 'Google Business Optimization',
      description: 'Maximize your local presence and appear prominently in Fort Worth searches.',
      link: '/google-business-profile',
    },
    {
      title: 'Targeted PPC Campaigns',
      description: 'Connect with Fort Worth customers actively searching for your services.',
      link: '/paid-advertising',
    },
    {
      title: 'Social Media Management',
      description: 'Engage the Fort Worth community and build lasting customer relationships.',
      link: '/social-media',
    },
    {
      title: 'Strategic Content Creation',
      description: 'Content that speaks to Fort Worth audiences and drives business growth.',
      link: '/content-marketing',
    },
  ];

  const whyChoose = [
    {
      title: 'Fort Worth Market Knowledge',
      description:
        "We appreciate Fort Worth's unique business culture - from Sundance Square's vibrant downtown to the Stockyards' historic charm and growing tech sector.",
    },
    {
      title: 'Texas Roots & Values',
      description:
        "As a fellow Texas company, we share Fort Worth's commitment to quality, integrity, and building genuine business relationships that last.",
    },
    {
      title: 'Accessible Expertise',
      description:
        'Located just an hour away in Decatur, we provide the local attention Fort Worth businesses deserve with the expertise of a seasoned agency.',
    },
    {
      title: 'Track Record of Success',
      description:
        'Our 5.0 Google rating reflects our dedication to delivering exceptional results for Fort Worth and DFW-area clients.',
    },
  ];

  const faqs = [
    {
      question: 'What digital marketing services do you offer in Fort Worth?',
      answer:
        "We provide Fort Worth businesses with complete digital marketing solutions including local SEO to rank higher in Fort Worth searches, professional web design and development, Google Business Profile optimization, PPC advertising, social media management, content marketing, video production, and detailed analytics. Each service is customized to meet the specific needs of Fort Worth's diverse business community.",
    },
    {
      question: 'How much does SEO cost for Fort Worth businesses?',
      answer:
        'SEO services for Fort Worth businesses generally range from $1,500 to $5,000 per month, depending on your industry competition, target market size, and specific goals. Fort Worth has a strong business environment, so we create tailored strategies that fit your budget while delivering real results. Contact us for a free consultation and custom quote for your Fort Worth business.',
    },
    {
      question: 'Do you work with small businesses in Fort Worth?',
      answer:
        'Yes! We proudly serve Fort Worth small businesses, from family-owned shops in the Stockyards to startups in the Near Southside. We understand the challenges small businesses face and create affordable, effective digital marketing strategies that help you compete and grow in the Fort Worth market without requiring massive marketing budgets.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Results timelines vary by strategy. PPC campaigns can start generating Fort Worth leads immediately, often within the first week. SEO results typically become noticeable in 3-6 months as your Fort Worth rankings improve. Social media and content marketing gain traction over 2-4 months. We set realistic expectations and provide transparent monthly reports tracking your progress.',
    },
    {
      question: 'Do you offer free consultations for Fort Worth businesses?',
      answer:
        "Absolutely! We provide free, no-obligation consultations for all Fort Worth businesses. We'll discuss your objectives, evaluate your current online presence, analyze Fort Worth market competition, and recommend strategies tailored to your needs. It's a great opportunity to learn how digital marketing can grow your Fort Worth business.",
    },
    {
      question: 'What industries do you serve in Fort Worth?',
      answer:
        "We work with Fort Worth businesses across every industry - healthcare providers, professional services, restaurants and hospitality, retail shops, real estate agencies, home services contractors, manufacturing companies, technology firms, and more. Our experience spans Fort Worth's diverse economy, and we develop marketing strategies specific to your industry's unique characteristics and customer base.",
    },
  ];

  const localStats = [
    { number: '15+', label: 'Years in Fort Worth' },
    { number: '40+', label: 'Fort Worth Clients' },
    { number: '300%', label: 'Avg. Lead Increase' },
    { number: '103+', label: 'Client Reviews' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ThinkMents - Digital Marketing Agency',
    description:
      'Digital marketing agency serving Fort Worth, TX with SEO, web design, and comprehensive marketing solutions.',
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
    url: 'https://thinkments.com/locations/fort-worth',
    areaServed: {
      '@type': 'City',
      name: 'Fort Worth',
      '@id': 'https://en.wikipedia.org/wiki/Fort_Worth,_Texas',
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
        <title>Digital Marketing Agency in Fort Worth, TX | ThinkMents</title>
        <meta
          name="description"
          content="ThinkMents provides SEO, web design & digital marketing services to businesses in Fort Worth, Texas. 20+ years experience. Free consultation."
        />
        <meta
          property="og:title"
          content="Digital Marketing Agency in Fort Worth, TX | ThinkMents"
        />
        <meta
          property="og:description"
          content="ThinkMents provides SEO, web design & digital marketing services to businesses in Fort Worth, Texas. 20+ years experience. Free consultation."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/locations/fort-worth" />
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
                <MapPin className="w-4 h-4 text-[#F7B928]" />
                <span className="text-sm font-semibold">Serving Fort Worth, Texas</span>
              </div>

              <h1 className="mb-6">Digital Marketing Agency in Fort Worth, Texas</h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                ThinkMents delivers SEO, web design, and results-driven marketing to businesses in
                Fort Worth and surrounding areas.
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
                <h2 className="mb-6">Digital Marketing Excellence for Fort Worth</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Fort Worth combines Western heritage with modern innovation, creating a
                  distinctive business environment. From the historic Stockyards to Sundance
                  Square's bustling downtown, the Cultural District's world-class museums, and the
                  Near Southside's entrepreneurial energy, Fort Worth neighborhoods each have their
                  own character and opportunities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ThinkMents has worked with Fort Worth businesses across Tarrant County for over 15
                  years. We understand what makes Fort Worth special and how to connect your
                  business with local customers and beyond. Whether you serve Fort Worth
                  neighborhoods exclusively or market throughout the DFW metroplex, we develop
                  targeted strategies that deliver real, measurable results for your business.
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
                <h2 className="mb-4">Complete Digital Marketing for Fort Worth</h2>
                <p className="text-xl text-gray-600">
                  Strategic solutions that help Fort Worth businesses grow and compete effectively.
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
                <h2 className="mb-4">Why Fort Worth Businesses Choose ThinkMents</h2>
                <p className="text-xl text-gray-600">
                  Texas-based expertise with a proven track record of Fort Worth success stories.
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
                <h2 className="mb-4">Fort Worth Business FAQs</h2>
                <p className="text-xl text-gray-600">
                  Answers to common questions from Fort Worth business owners.
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
              <h2 className="text-white mb-6">Ready to Grow Your Fort Worth Business?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Discover how strategic digital marketing can help your Fort Worth business reach
                more customers and increase revenue.
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
                  5.0 Rating | 103+ Reviews | 20+ Years Experience
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
