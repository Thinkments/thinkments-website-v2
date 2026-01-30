import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  ArrowRight,
  MapPin,
  Users,
  TrendingUp,
  Target,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle,
  Globe,
  Building2,
  Star,
  Award,
  Zap,
  Clock,
} from 'lucide-react';
import SEO from '../SEO';

export default function DigitalMarketingAreasPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const texasAreasRef = useRef(null);
  const statewideRef = useRef(null);
  const nationwideRef = useRef(null);
  const industriesRef = useRef(null);
  const whyLocationRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isTexasAreasInView = useInView(texasAreasRef, { once: true });
  const isStatewideInView = useInView(statewideRef, { once: true });
  const isNationwideInView = useInView(nationwideRef, { once: true });
  const isIndustriesInView = useInView(industriesRef, { once: true });
  const isWhyLocationInView = useInView(whyLocationRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const faqs = [
    {
      question: 'Do I need to be in Texas to work with ThinkMents?',
      answer:
        "Not at all. While we're based in Decatur, Texas, we serve clients in 31 states. Our digital-first approach means we deliver the same exceptional service regardless of your location.",
    },
    {
      question: 'How do you handle communication with remote clients?',
      answer:
        "We use video conferencing, phone calls, email, and project management tools to stay in constant communication. Many remote clients say they feel more connected to us than agencies they've worked with locally.",
    },
    {
      question: 'Can you help with multi-location businesses?',
      answer:
        'Absolutely. We specialize in multi-location digital marketing, creating location-specific strategies while maintaining brand consistency across all markets.',
    },
    {
      question: "Do you understand my local market if you're not here?",
      answer:
        'We conduct thorough market research for every client, analyzing local competition, search trends, and customer behavior. Our strategies are always tailored to your specific market reality.',
    },
    {
      question: 'Is pricing different for clients outside Texas?',
      answer:
        'No. Our pricing is based on scope of work and services needed, not geographic location.',
    },
    {
      question: 'Can we meet in person?',
      answer:
        "For Texas clients, absolutely—we're happy to meet face-to-face. For clients outside Texas, we can arrange visits for major strategy sessions or conduct everything virtually based on your preference.",
    },
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Service Areas | Texas & Nationwide | ThinkMents"
        description="Digital marketing services across Texas and 31 states. Serving Dallas-Fort Worth, Denton County, Houston, Austin, San Antonio, and nationwide. Local SEO, PPC, and comprehensive digital strategy."
        url="/service-areas"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/75"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Service Areas</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                SERVING 31 STATES
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Digital Marketing Across Texas & Nationwide
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                From Decatur to Dallas, Houston to Los Angeles—we help businesses dominate their
                local markets with strategic digital marketing.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '31', label: 'States Served' },
                  { stat: '20+', label: 'Years Experience' },
                  { stat: '77', label: 'Texas Cities' },
                  { stat: '5.0', label: 'Google Rating' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">{item.stat}</div>
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
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
                >
                  <Link to="/free-consultation">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
                >
                  <a href="tel:9403151023">
                    <Phone className="mr-2 w-5 h-5" />
                    (940) 315-1023
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white rounded-lg shadow-lg p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed">
                ThinkMents provides comprehensive digital marketing services to businesses across
                Texas and throughout the United States. While we're headquartered in Decatur, Texas,
                our digital-first approach allows us to serve clients in 31 states with the same
                level of attention and results as our local neighbors. Whether you're down the
                street or across the country, you get a dedicated team committed to growing your
                business online. <strong>With over 20 years of experience since 2002</strong>, we've
                helped hundreds of businesses in diverse markets achieve measurable results through
                strategic digital marketing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Texas Service Areas */}
      <section ref={texasAreasRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTexasAreasInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Local Texas Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep roots in North Texas communities with expertise serving businesses statewide
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Dallas-Fort Worth Metroplex */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTexasAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-8 h-8 text-[#00B4D8]" />
                    <h3
                      className="text-2xl text-[#1E3A5F]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Dallas-Fort Worth Metroplex
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    As one of the fastest-growing metropolitan areas in the country, DFW presents
                    both tremendous opportunity and fierce competition. ThinkMents helps Dallas-Fort
                    Worth businesses stand out in this crowded market with targeted local SEO,
                    Google Business Profile optimization, and strategic digital advertising. We
                    understand the unique characteristics of DFW's diverse neighborhoods and
                    suburbs—from the corporate corridors of Downtown Dallas and Las Colinas to the
                    family-oriented communities of Frisco, Plano, and Southlake. Our proximity to
                    the Metroplex means we can meet in person when needed while providing the
                    digital expertise that drives results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Denton County */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTexasAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-8 h-8 text-[#00B4D8]" />
                    <h3
                      className="text-2xl text-[#1E3A5F]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Denton County
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our home base in Decatur gives us deep roots in the North Texas community. We
                    serve businesses throughout Denton County including Denton, Lewisville, Flower
                    Mound, Highland Village, Corinth, Lake Dallas, and the rapidly growing areas
                    along I-35. We understand the unique dynamics of serving both longtime residents
                    and the constant influx of new families relocating to the area. Our local
                    knowledge combined with digital marketing expertise helps Denton County
                    businesses capture both local loyalty and newcomer attention.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Wise County */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTexasAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-[#00B4D8]" />
                    <h3
                      className="text-2xl text-[#1E3A5F]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Wise County
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Decatur and the surrounding Wise County communities are home to ThinkMents.
                    We're proud to help local businesses in Decatur, Bridgeport, Boyd, Alvord,
                    Chico, Rhome, Aurora, and Paradise compete effectively online. Small-town
                    businesses face unique challenges—limited local search volume but tight-knit
                    communities where reputation is everything. We develop strategies that maximize
                    local visibility while building the online reputation that reflects the quality
                    service these businesses provide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Fort Worth & Tarrant County */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTexasAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-8 h-8 text-[#00B4D8]" />
                    <h3
                      className="text-2xl text-[#1E3A5F]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Fort Worth & Tarrant County
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Fort Worth's blend of Western heritage and modern growth creates a distinctive
                    market. We help businesses in Fort Worth, Arlington, Keller, Grapevine,
                    Colleyville, Southlake, Bedford, Euless, and Hurst reach customers across
                    Tarrant County. From the Stockyards to the Cultural District to the booming
                    Alliance corridor, we develop location-specific strategies that resonate with
                    Fort Worth's unique character.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* North Texas Region */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTexasAreasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-8 h-8 text-[#00B4D8]" />
                    <h3
                      className="text-2xl text-[#1E3A5F]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      North Texas Region
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Beyond the major metros, we serve businesses throughout North Texas including
                    Sherman, Denison, Gainesville, Wichita Falls, Weatherford, Mineral Wells,
                    Graham, and surrounding communities. Rural and smaller-market businesses benefit
                    enormously from digital marketing—often facing less online competition while
                    reaching customers who increasingly search online first.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statewide Texas Coverage */}
      <section ref={statewideRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatewideInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Serving Businesses Across the Lone Star State
              </h2>
              <p className="text-xl text-gray-600">Texas is big, and so is our reach</p>
            </div>

            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                ThinkMents serves clients in major Texas markets including:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl text-[#00B4D8] mb-3">Major Markets:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>Houston Metro:</strong> Energy sector, healthcare, professional
                        services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>San Antonio:</strong> Tourism, healthcare, military-adjacent
                        businesses
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>Austin:</strong> Tech companies, startups, creative industries
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>El Paso:</strong> Border commerce, bilingual marketing needs
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-[#00B4D8] mb-3">Additional Markets:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>Corpus Christi:</strong> Coastal tourism, energy industry
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>Lubbock & Amarillo:</strong> Agricultural businesses, regional
                        services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                      <span>
                        <strong>Rio Grande Valley:</strong> Bilingual marketing, cross-border
                        commerce
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Card className="border-l-4 border-l-[#FF6B35]">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Each Texas market has unique characteristics, competitive landscapes, and customer
                  behaviors. We research your specific market thoroughly before developing
                  strategies, ensuring our approach fits your local reality—not generic tactics that
                  ignore regional differences.{' '}
                  <strong>
                    Our Texas clients benefit from working with an agency that understands Texas
                    business culture, values, and communication styles. We speak your language and
                    understand your customers because we're Texans too.
                  </strong>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Nationwide Service */}
      <section ref={nationwideRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isNationwideInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <Globe className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Digital Marketing Services Across 31 States
              </h2>
              <p className="text-xl text-gray-600">
                Digital marketing knows no geographic boundaries
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ThinkMents serves clients from coast to coast, delivering the same exceptional
                results regardless of location. Our current client base spans 31 states including:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg text-[#1E3A5F] mb-3">West & Mountain:</h3>
                  <p className="text-gray-700">
                    California, Oregon, Washington, Arizona, Nevada, Colorado, Utah, New Mexico
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Midwest:</h3>
                  <p className="text-gray-700">
                    Illinois, Ohio, Michigan, Minnesota, Wisconsin, Missouri, Kansas
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-[#1E3A5F] mb-3">South:</h3>
                  <p className="text-gray-700">
                    Florida, Georgia, North Carolina, Tennessee, Alabama, Louisiana
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-[#1E3A5F] mb-3">Northeast:</h3>
                  <p className="text-gray-700">
                    New York, Pennsylvania, New Jersey, Massachusetts, Connecticut
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-lg p-6">
                <h3 className="text-xl text-[#1E3A5F] mb-4">How We Serve Remote Clients:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Video conferencing for face-to-face strategy sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Screen sharing for real-time collaboration and training
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Cloud-based project management for transparency
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Regular phone and email communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Detailed monthly reporting and analytics access
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="border-t-4 border-t-[#00B4D8]">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Distance doesn't diminish our commitment or results. Many of our longest-standing
                  clients are located outside Texas. They choose ThinkMents for our expertise,
                  communication, and results—not our zip code.{' '}
                  <strong>
                    Whether you're in Los Angeles or Louisville, you get a dedicated team that
                    treats your business like it's right next door.
                  </strong>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section ref={industriesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Industry Expertise Across Markets
              </h2>
              <p className="text-xl text-gray-600">
                Our geographic reach is matched by industry depth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Healthcare & Medical</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Medical practices, dental offices, veterinary clinics, healthcare systems,
                    mental health providers, and medical device companies across Texas and
                    nationwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Legal & Professional Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Law firms, accounting practices, consulting firms, financial advisors, and
                    professional service providers in competitive urban markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Home Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    HVAC, plumbing, electrical, roofing, landscaping, pest control, and home
                    improvement companies serving local service areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Restaurants & Hospitality</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Restaurants, hotels, event venues, catering companies, and tourism-related
                    businesses in markets from small towns to major metros.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Real Estate</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Realtors, brokerages, property management companies, and real estate investors
                    in markets across the country.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">Automotive</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dealerships, auto repair shops, body shops, and automotive service providers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8] hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#1E3A5F] mb-3">E-Commerce & Retail</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Online stores and brick-and-mortar retailers reaching local and national
                    customers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-[#F8F9FA] border-l-4 border-l-[#FF6B35]">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Each industry has unique marketing requirements.</strong> Our experience
                  across these sectors means faster strategy development and proven tactics that
                  work.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Location-Based Marketing Matters */}
      <section
        ref={whyLocationRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyLocationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <Target className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Power of Local + Digital
              </h2>
              <p className="text-xl text-white/90">
                Even in our connected world, location matters enormously for marketing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">46%</div>
                  <p className="text-white/90">of all Google searches have local intent</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">500%+</div>
                  <p className="text-white/90">'Near me' searches have grown in recent years</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">78%</div>
                  <p className="text-white/90">
                    of local mobile searches result in offline purchases
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00B4D8] mb-2">Trust</div>
                  <p className="text-white/90">
                    Customers trust local businesses more than distant alternatives
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Whether you serve a single neighborhood or ship nationwide, geographic targeting
                improves results. We help you:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <span className="text-white/90">
                    Dominate local search results in your service areas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <span className="text-white/90">
                    Target advertising to specific cities, zip codes, or radius
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <span className="text-white/90">
                    Build location-specific landing pages that convert
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <span className="text-white/90">
                    Optimize Google Business Profile for each location
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <span className="text-white/90">
                    Create locally-relevant content that resonates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <span className="text-white/90">
                    Develop market-specific messaging that connects
                  </span>
                </li>
              </ul>
              <p className="text-lg text-white/90 leading-relaxed mt-6">
                <strong>
                  ThinkMents combines local marketing expertise with the ability to scale strategies
                  across multiple markets—perfect for growing businesses expanding their geographic
                  footprint.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg text-[#1E3A5F] mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Lists */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="p-6">
                  <h3
                    className="text-2xl text-[#1E3A5F] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Texas Cities We Serve
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dallas, Fort Worth, Arlington, Plano, Frisco, McKinney, Denton, Lewisville,
                    Flower Mound, Decatur, Bridgeport, Weatherford, Keller, Grapevine, Southlake,
                    Colleyville, Houston, San Antonio, Austin, El Paso, and communities throughout
                    the state.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/marketing-seo"
                      className="text-[#00B4D8] hover:text-[#1E3A5F] flex items-center gap-2"
                    >
                      Learn About Our SEO Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#00B4D8]">
                <CardContent className="p-6">
                  <h3
                    className="text-2xl text-[#1E3A5F] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    States We Serve
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Texas, California, Florida, New York, Illinois, Pennsylvania, Ohio, Georgia,
                    North Carolina, Michigan, Arizona, Colorado, and 19 additional states across the
                    country.
                  </p>
                  <div className="mt-4 space-y-2">
                    <Link
                      to="/google-business-profile"
                      className="text-[#00B4D8] hover:text-[#1E3A5F] flex items-center gap-2"
                    >
                      Google Business Profile Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/services"
                      className="text-[#00B4D8] hover:text-[#1E3A5F] flex items-center gap-2"
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Grow Your Business—Wherever You Are?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're in Decatur or Denver, Dallas or Detroit, we're ready to help you
              achieve your digital marketing goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <a
                href="tel:9403151023"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">(940) 315-1023</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Serving 31 States</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/70 mb-4">Explore our services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/marketing-seo"
                  className="text-[#00B4D8] hover:text-white transition-colors"
                >
                  Marketing & SEO
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  to="/google-business-profile"
                  className="text-[#00B4D8] hover:text-white transition-colors"
                >
                  Google Business Profile
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  to="/case-studies"
                  className="text-[#00B4D8] hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  to="/testimonials"
                  className="text-[#00B4D8] hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
