import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  ArrowRight,
  Building2,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Globe,
  Map,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Helmet } from 'react-helmet-async';

export default function LocationsPage() {
  const primaryLocations = [
    {
      city: 'Dallas',
      tagline: 'Competitive metropolitan marketing for Dallas businesses',
      slug: 'dallas',
    },
    {
      city: 'Fort Worth',
      tagline: 'Western heritage meets digital innovation',
      slug: 'fort-worth',
    },
    {
      city: 'Denton',
      tagline: 'University town meets entrepreneurial spirit',
      slug: 'denton',
    },
    {
      city: 'Decatur',
      tagline: 'Our hometown - where it all began',
      slug: 'decatur',
    },
    {
      city: 'North Texas',
      tagline: 'Regional coverage across the DFW metroplex',
      slug: 'north-texas',
    },
  ];

  const additionalAreas = [
    'Wise County',
    'Tarrant County',
    'Denton County',
    'Arlington',
    'Plano',
    'Frisco',
    'McKinney',
    'Irving',
    'Grapevine',
    'Lewisville',
    'Flower Mound',
    'Southlake',
    'Colleyville',
    'Keller',
    'Coppell',
  ];

  const services = [
    { name: 'SEO & Search Marketing', href: '/marketing-seo' },
    { name: 'Google Business Profile Management', href: '/google-business-profile' },
    { name: 'Web Design & Development', href: '/web-development' },
    { name: 'PPC & Paid Advertising', href: '/paid-advertising' },
    { name: 'Social Media Marketing', href: '/social-media' },
    { name: 'Content Marketing', href: '/content-marketing' },
  ];

  const stats = [
    { number: '20+', label: 'Years Experience', icon: Award },
    { number: '31', label: 'States Served', icon: MapPin },
    { number: '5.0', label: 'Google Rating', icon: TrendingUp },
    { number: '103+', label: 'Client Reviews', icon: Users },
  ];

  const whyLocationMatters = [
    {
      title: 'Texas Business Culture',
      description:
        "We understand the values, work ethic, and relationship-driven approach that defines Texas business. This isn't just marketing knowledge - it's cultural fluency.",
    },
    {
      title: 'Local Market Expertise',
      description:
        "From Dallas' competitive corporate landscape to small-town community businesses, we know how to position your brand for success in diverse Texas markets.",
    },
    {
      title: 'National Experience',
      description:
        'While rooted in Texas, our work spans 31 states. We bring big-market strategies with local market understanding to every client relationship.',
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Service Areas: Texas & 31 States | Expert Digital Marketing | ThinkMents</title>
        <meta
          name="description"
          content="Full-service digital marketing across Texas & nationwide. Serving Dallas, Fort Worth, Denton, Decatur & 31 states. Free consultation! Call (940) 315-1023"
        />
        <meta
          property="og:title"
          content="Service Areas: Texas & 31 States | Expert Digital Marketing | ThinkMents"
        />
        <meta
          property="og:description"
          content="Full-service digital marketing across Texas & nationwide. Serving Dallas, Fort Worth, Denton, Decatur & 31 states. Free consultation! Call (940) 315-1023"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkments.com/locations" />
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
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Map className="w-4 h-4 text-[#F7B928]" />
                <span className="text-sm font-semibold">Service Areas</span>
              </div>

              <h1 className="mb-6">Digital Marketing Services Across Texas & Nationwide</h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From our headquarters in Decatur, Texas, ThinkMents delivers results-driven digital
                marketing to businesses in 31 states. Whether you're local to North Texas or across
                the country, we bring 20+ years of experience to help your business grow.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/free-consultation">Get Free Consultation</Link>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#1E3A5F] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Headquarters Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 bg-[#00B4D8]/10 px-4 py-2 rounded-full mb-4">
                  <Building2 className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-semibold text-[#1E3A5F]">
                    Headquartered in Texas
                  </span>
                </div>

                <h2 className="mb-6">Our Home Base: Decatur, Texas</h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  ThinkMents is proudly headquartered in Decatur, Texas - a thriving small-town
                  community in the heart of North Texas. Since 2002, we've called Decatur home,
                  building deep roots in the local business community while serving clients across
                  Texas and the nation. Our Texas heritage shapes everything we do, from our work
                  ethic to our commitment to building lasting client relationships.
                </p>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-left">
                      <h3 className="font-bold text-[#1E3A5F] mb-4">Visit Our Office</h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Address:</p>
                            <p>301 South Washburn St, Suite D</p>
                            <p>Decatur, TX 76234</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Phone:</p>
                            <a href="tel:9403151023" className="text-[#00B4D8] hover:underline">
                              (940) 315-1023
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-left">
                      <h3 className="font-bold text-[#1E3A5F] mb-4">Schedule a Meeting</h3>
                      <p className="text-gray-700 mb-4">
                        We welcome in-person meetings at our Decatur office or can meet at your
                        location throughout North Texas. Remote consultations are available for
                        clients nationwide.
                      </p>
                      <Button asChild className="bg-[#00B4D8] hover:bg-[#0090B0] text-white">
                        <Link to="/free-consultation">Schedule Consultation</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Texas Service Areas Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Texas Service Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our dedicated digital marketing services for businesses across Texas. Each
                location page features information tailored to your local market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {primaryLocations.map((location, index) => (
                <motion.div
                  key={location.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/locations/${location.slug}`}
                    className="group block h-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#00B4D8] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-[#00B4D8]" />
                          <h3 className="text-xl font-bold text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                            {location.city}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">{location.tagline}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#00B4D8] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-sm font-semibold text-[#00B4D8] group-hover:underline">
                        View {location.city} Services →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Coverage Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="mb-4">North Texas & DFW Metroplex</h2>
                <p className="text-xl text-gray-600">
                  Beyond our primary service areas, we serve businesses throughout the entire DFW
                  metroplex and surrounding communities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="font-bold text-[#1E3A5F] mb-6 text-center">
                  Additional Cities & Counties We Serve:
                </h3>

                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {additionalAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <p className="text-center text-gray-600 italic">
                  And all surrounding communities throughout North Texas
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nationwide Section */}
        <section className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2C5282] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Globe className="w-4 h-4 text-[#F7B928]" />
                  <span className="text-sm font-semibold">Nationwide Service</span>
                </div>

                <h2 className="text-white mb-6">Serving Businesses in 31 States</h2>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  While we're proudly Texas-based, our digital marketing expertise extends
                  nationwide. We work with clients from coast to coast, delivering the same
                  results-driven strategies remotely. Distance doesn't limit our ability to
                  understand your market, collaborate effectively, and drive measurable results for
                  your business.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#F7B928] mb-2">31</div>
                    <div className="text-white/80">States Served</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#F7B928] mb-2">Remote</div>
                    <div className="text-white/80">Collaboration Tools</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#F7B928] mb-2">Same</div>
                    <div className="text-white/80">Quality Service</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Available Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Services Available in All Locations</h2>
                <p className="text-xl text-gray-600">
                  Whether you're local to Texas or across the country, we provide comprehensive
                  digital marketing solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.href}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={service.href}
                      className="group block h-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#00B4D8] hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                          {service.name}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-[#00B4D8] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-sm text-gray-600">Available for all locations</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Location Matters Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Local Expertise, National Reach</h2>
                <p className="text-xl text-gray-600">
                  Understanding your market - whether it's local, regional, or national - is
                  critical to digital marketing success.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {whyLocationMatters.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                    <h3 className="font-bold text-[#1E3A5F] mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              <h2 className="text-white mb-6">Let's Grow Your Business</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you're in Dallas, Decatur, or anywhere in between, we're ready to help you
                achieve your digital marketing goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
