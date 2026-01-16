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
  Camera,
  Maximize2,
  MapPin,
  Video,
  Plane,
  TrendingUp,
  Eye,
  Building,
  HelpCircle,
  Briefcase,
  BarChart3,
  Image as ImageIcon
} from 'lucide-react';
import SEO from '../SEO';

export default function VirtualToursPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyConvertsRef = useRef(null);
  const typesRef = useRef(null);
  const industriesRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyConvertsInView = useInView(whyConvertsRef, { once: true });
  const isTypesInView = useInView(typesRef, { once: true });
  const isIndustriesInView = useInView(industriesRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const types = [
    {
      icon: Maximize2,
      title: '360° Virtual Tours',
      description: 'Immersive, navigable experiences that let viewers explore every angle of your space. Viewers can look up, down, and all around, moving through your location as if they were there. Perfect for showcasing the complete environment and spatial relationships within your business.'
    },
    {
      icon: Building,
      title: 'Matterport 3D Tours',
      description: 'Digital twin technology that creates dimensionally accurate 3D models. Viewers can explore in walkthrough mode, dollhouse view, or floor plan view. Includes automatic measurements—ideal for real estate, construction, and any application requiring precise spatial documentation.'
    },
    {
      icon: MapPin,
      title: 'Google Street View Tours',
      description: 'Interior tours published directly to Google Maps and Search. When customers find your business on Google, they can explore inside before visiting. As Google Street View trusted photographers, we capture and publish tours that appear in the world\'s most-used mapping platform.'
    },
    {
      icon: Video,
      title: 'Guided Video Tours',
      description: 'Narrated video walkthroughs that tell a story while showcasing your space. Combine the engagement of video with the exploration of virtual tours. Perfect for properties or venues where context and storytelling enhance the experience.'
    },
    {
      icon: Plane,
      title: 'Aerial Virtual Tours',
      description: '360° panoramas captured from above with FAA-licensed drones. Showcase properties, campuses, and surroundings from stunning aerial perspectives. Ideal for real estate, resorts, golf courses, and locations where the surrounding environment matters.'
    }
  ];

  const faqs = [
    {
      question: 'How much do virtual tours cost?',
      answer: 'Basic 360° tours start around $300-500 for small spaces. Matterport 3D tours and larger properties range from $500-2,000+. We provide custom quotes based on your space and requirements.'
    },
    {
      question: 'How long does a virtual tour last?',
      answer: 'Tours remain accessible as long as you maintain hosting. We offer affordable annual hosting, and Google Street View tours are permanently free once published.'
    },
    {
      question: 'Can virtual tours be updated?',
      answer: 'Yes. If your space changes significantly, we can recapture and update. Minor updates may not require a full reshoot.'
    },
    {
      question: 'Do virtual tours work on mobile devices?',
      answer: 'Absolutely. Our tours work on smartphones, tablets, and desktops with no special apps required. VR headset viewing is also supported.'
    },
    {
      question: 'How do customers find my virtual tour?',
      answer: 'Tours embed on your website, appear on Google Maps (Street View tours), and can be shared via links on social media, email, and listing platforms.'
    }
  ];

  return (
    <>
      <SEO
        title="Virtual Tours & 360° Photography | Google Street View Trusted | ThinkMents"
        description="Professional virtual tours since 2002. Pioneers of North Texas virtual tours. 360°, Matterport, Google Street View. 87% more views, 31% faster sales."
        url="/virtual-tours"
        type="website"
      />

      {/* Hero */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Virtual Tours</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                VIRTUAL TOUR PIONEERS SINCE 2002
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Virtual Tours That Drive Real Results
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                First in North Texas. Google Street View Trusted. 87% more views.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '2002', label: 'Pioneers' },
                  { stat: '87%', label: 'More Views' },
                  { stat: '31%', label: 'Faster Sales' },
                  { stat: 'Google', label: 'Trusted' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">
                      {item.stat}
                    </div>
                    <div className="text-white/80 text-sm">
                      {item.label}
                    </div>
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
                  <Link to="/free-consultation">Get Free Quote</Link>
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

      {/* Introduction */}
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
                Virtual tours have transformed how customers explore spaces before visiting in person. From real estate to hospitality to retail, businesses that offer virtual tours capture more attention, build more trust, and convert more customers than those relying on static photos alone. <strong>ThinkMents pioneered virtual tour technology in North Texas—we created the region's first virtual real estate tour and built the first arena seat preview system with Mark Cuban's American Airlines Center.</strong> With over 20 years of immersive content experience, we create virtual tours that don't just showcase your space—they drive real business results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Virtual Tours Convert */}
      <section ref={whyConvertsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyConvertsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                The Business Case for Virtual Tours
              </h2>
              <p className="text-xl text-gray-600">
                Virtual tours aren't just impressive—they deliver measurable ROI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { stat: '87%', label: 'more views for properties with virtual tours' },
                { stat: '5-10x', label: 'increase in website engagement time' },
                { stat: '67%', label: 'of consumers want more businesses to offer virtual tours' },
                { stat: '31%', label: 'faster sales for listings with 3D tours' },
                { stat: '40%', label: 'reduction in wasted site visits' },
                { stat: '16-67%', label: 'higher conversion rates with virtual tours' }
              ].map((stat, idx) => (
                <Card key={idx} className="border-t-4 border-t-[#00B4D8] text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl text-[#00B4D8] mb-2">{stat.stat}</div>
                    <p className="text-gray-700 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Customers today expect to explore before they commit.</strong> Whether choosing a hotel room, previewing a wedding venue, touring a home, or evaluating a senior living facility, they want to experience the space virtually first.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Virtual tours also extend your geographic reach indefinitely. Customers from anywhere in the world can "visit" your location, breaking down distance barriers that limit traditional marketing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour Types */}
      <section ref={typesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Virtual Tour Types
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {types.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl text-[#1E3A5F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section ref={industriesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Briefcase className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Virtual Tours for Every Industry
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Real Estate', description: 'Residential and commercial property tours that let buyers explore homes remotely, qualify interest, and schedule viewings only for properties they love.' },
                { title: 'Hotels & Resorts', description: 'Room tours, amenity showcases, and property overviews that increase booking confidence and reduce "surprise" complaints upon arrival.' },
                { title: 'Event Venues', description: 'Wedding venues, conference centers, and event spaces that let planners explore options virtually before site visits.' },
                { title: 'Restaurants & Bars', description: 'Atmosphere showcases that give diners a feel for your space before they reserve.' },
                { title: 'Senior Living', description: 'Facility tours that help families research options without the stress of multiple in-person visits.' },
                { title: 'Retail & Showrooms', description: 'Virtual store experiences that let customers browse your showroom from anywhere.' },
                { title: 'Educational Institutions', description: 'Campus tours that reach prospective students worldwide.' }
              ].map((industry, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#00B4D8]">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{industry.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <BarChart3 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                How We Create Your Virtual Tour
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Pre-Production',
                  items: ['Site assessment and capture planning', 'Optimal scheduling for lighting', 'Staging coordination']
                },
                {
                  title: 'Capture Day',
                  items: ['Professional 360° equipment', 'Multiple positions for complete coverage', 'Quality review on-site']
                },
                {
                  title: 'Post-Production',
                  items: ['Professional stitching and processing', 'Navigation and hotspot creation', 'Branding and customization']
                },
                {
                  title: 'Delivery',
                  items: ['Web hosting and embedding', 'Google Street View publishing', 'Training on sharing and promotion']
                }
              ].map((phase, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl text-[#00B4D8] mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                          <span className="text-white/90 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-[#FF6B35] rounded-lg p-6">
              <p className="text-white text-lg text-center">
                <strong>Most projects complete within 1-2 weeks from capture to delivery.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <HelpCircle className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
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

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Explore related services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/immersive-experiences" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Immersive Experiences <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/video-photography" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Video & Photography <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/google-business-profile" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Google Business Profile <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/portfolio" className="text-[#00B4D8] hover:underline flex items-center gap-1">
                  Portfolio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6F] to-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Let Customers Explore Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a virtual tour that showcases your business and drives results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Virtual Tour Consultation
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
                <span>Pioneers Since 2002</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Google Street View Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Fast Turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}