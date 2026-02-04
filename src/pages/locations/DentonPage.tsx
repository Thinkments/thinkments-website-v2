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
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function DentonPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'SEO for Denton Businesses',
      description: 'Boost your rankings in Denton local searches and connect with more customers.',
      link: '/marketing-seo',
    },
    {
      title: 'Web Design & Development',
      description:
        "Modern, mobile-friendly websites that capture Denton's creative and innovative spirit.",
      link: '/web-development',
    },
    {
      title: 'Google Business Management',
      description:
        'Optimize your local listings to appear when Denton customers search for your services.',
      link: '/google-business-profile',
    },
    {
      title: 'PPC Advertising',
      description: 'Reach Denton audiences at the perfect moment with targeted paid advertising.',
      link: '/paid-advertising',
    },
    {
      title: 'Social Media Strategy',
      description: "Build connections with Denton's engaged online community across all platforms.",
      link: '/social-media',
    },
    {
      title: 'Content Marketing',
      description:
        'Create valuable content that resonates with Denton residents and business clients.',
      link: '/content-marketing',
    },
  ];

  const whyChoose = [
    {
      title: "Understanding Denton's Market",
      description:
        "Denton's unique blend of university culture, local businesses, and growing tech scene requires specialized marketing approaches we've perfected over 15+ years.",
    },
    {
      title: 'Regional Connection',
      description:
        "Based in nearby Wise County, we understand North Texas communities like Denton and provide responsive, personalized service that larger agencies can't match.",
    },
    {
      title: 'Decades of Proven Results',
      description:
        "Since 2002, we've helped Denton-area businesses grow through data-driven strategies and creative solutions that generate real ROI.",
    },
    {
      title: 'Exceptional Client Service',
      description:
        'Our 5.0 Google rating and 103+ reviews reflect our commitment to transparency, communication, and delivering outstanding results for every client.',
    },
  ];

  const faqs = [
    {
      question: 'What digital marketing services do you offer in Denton?',
      answer:
        "We offer Denton businesses a full suite of digital marketing services: local SEO to improve search visibility, custom web design and development, Google Business Profile optimization, strategic PPC campaigns, social media management, content marketing, video production, and comprehensive analytics. We tailor each service to align with Denton's unique market characteristics and your specific business goals.",
    },
    {
      question: 'How much does SEO cost for Denton businesses?',
      answer:
        "SEO pricing for Denton businesses typically ranges from $1,500 to $4,500 monthly, based on your industry competitiveness, target geographic area, and objectives. Denton offers great opportunities for local businesses, and we design affordable strategies that deliver results. We'll provide transparent pricing during your complimentary consultation based on your specific situation.",
    },
    {
      question: 'Do you work with small businesses in Denton?',
      answer:
        "Definitely! We love working with Denton small businesses - from shops around the Square to service providers throughout Denton County. We recognize that small businesses operate with tight budgets and need marketing that pays for itself. Our strategies are designed to be cost-effective while delivering measurable growth for Denton's entrepreneurial community.",
    },
    {
      question: 'How long does it take to see digital marketing results?',
      answer:
        'Results timing depends on the service. PPC advertising can bring Denton leads within days of launch. SEO typically shows meaningful progress in 3-6 months as we improve your Denton search rankings. Social media and content marketing build momentum over 2-4 months. We establish clear expectations upfront and deliver detailed monthly reports showing your measurable progress.',
    },
    {
      question: 'Do you offer free consultations for Denton businesses?',
      answer:
        "Yes, we provide free consultations to all Denton businesses! We'll review your current digital presence, discuss your growth goals, analyze Denton market competition, and recommend proven strategies tailored to your needs. There's zero obligation - just honest advice from experienced professionals who want to see Denton businesses succeed.",
    },
    {
      question: 'What industries do you serve in Denton?',
      answer:
        "We serve Denton businesses across all sectors: restaurants and entertainment venues, professional services, retail and boutique shops, healthcare practices, real estate agencies, home services and contractors, technology companies, education-related businesses, and more. Denton's diverse economy provides unique opportunities, and we create industry-specific strategies that work for your target market.",
    },
  ];

  const localStats = [
    { number: '15+', label: 'Years in Denton Area' },
    { number: '35+', label: 'Denton Clients' },
    { number: '275%', label: 'Avg. Visibility Increase' },
    { number: '5.0', label: 'Google Rating' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ThinkMents - Digital Marketing Agency',
    description:
      'Digital marketing agency serving Denton, TX with SEO, web design, and comprehensive marketing solutions.',
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
    url: 'https://thinkments.com/locations/denton',
    areaServed: {
      '@type': 'City',
      name: 'Denton',
      '@id': 'https://en.wikipedia.org/wiki/Denton,_Texas',
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
        <title>Professional Digital Marketing Agency in Denton, TX | 5.0★ Rated</title>
        <meta
          name="description"
          content="Proven digital marketing for Denton businesses. Get higher rankings, more leads & guaranteed ROI. SEO, web design & more. Free consultation! Call (940) 315-1023"
        />
        <meta property="og:title" content="Professional Digital Marketing Agency in Denton, TX | 5.0★ Rated" />
        <meta
          property="og:description"
          content="Proven digital marketing for Denton businesses. Get higher rankings, more leads & guaranteed ROI. SEO, web design & more. Free consultation! Call (940) 315-1023"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/locations/denton" />
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
                <span className="text-sm font-semibold">Serving Denton, Texas</span>
              </div>

              <h1 className="mb-6">Digital Marketing Agency in Denton, Texas</h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                ThinkMents delivers SEO, web design, and results-driven marketing to businesses in
                Denton and surrounding areas.
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
                <h2 className="mb-6">Your Denton Digital Marketing Partner</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Denton is a vibrant community that blends university innovation with local
                  entrepreneurship and small-town charm. From the historic Downtown Square to the
                  UNT and TWU campuses, Rayzor Ranch's retail hub, and the growing residential
                  areas, Denton offers diverse opportunities for businesses ready to grow.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For over 15 years, ThinkMents has partnered with Denton County businesses to
                  increase online visibility, attract more customers, and drive sustainable growth.
                  Based just 30 minutes away, we combine local market knowledge with cutting-edge
                  digital marketing expertise. Whether you're targeting Denton residents, UNT/TWU
                  students, or expanding throughout North Texas, we create customized strategies
                  that deliver measurable results.
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
                <h2 className="mb-4">Digital Marketing Services for Denton</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive solutions designed to help Denton businesses succeed online.
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
                <h2 className="mb-4">Why Choose ThinkMents for Denton</h2>
                <p className="text-xl text-gray-600">
                  Regional expertise with a commitment to Denton business success.
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
                  Get answers to common questions from Denton business owners.
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
                        className={`w-5 h-5 text-[#00B4D8] flex-shrink-0 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''
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
              <h2 className="text-white mb-6">Ready to Grow Your Denton Business?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how digital marketing can help you reach more Denton customers and
                achieve your business goals.
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
