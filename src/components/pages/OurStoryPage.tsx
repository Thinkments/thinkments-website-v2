import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  ArrowRight, 
  Rocket,
  Building,
  Home,
  Landmark,
  ShoppingCart,
  Cloud,
  Star,
  DollarSign,
  Heart,
  Bot,
  Globe,
  Infinity,
  MapPin,
  Phone,
  Mail,
  Quote,
  Award,
  TrendingUp,
  Lightbulb,
  Handshake,
  ChevronRight
} from 'lucide-react';
import SEO from '../SEO';

export default function OurStoryPage() {
  const originRef = useRef(null);
  const timelineRef = useRef(null);
  const growthRef = useRef(null);
  const philosophyRef = useRef(null);
  const impactRef = useRef(null);
  const clientLoveRef = useRef(null);
  const truthRef = useRef(null);
  const drivesRef = useRef(null);
  
  const isOriginInView = useInView(originRef, { once: true });
  const isTimelineInView = useInView(timelineRef, { once: true });
  const isGrowthInView = useInView(growthRef, { once: true });
  const isPhilosophyInView = useInView(philosophyRef, { once: true });
  const isImpactInView = useInView(impactRef, { once: true });
  const isClientLoveInView = useInView(clientLoveRef, { once: true });
  const isTruthInView = useInView(truthRef, { once: true });
  const isDrivesInView = useInView(drivesRef, { once: true });

  const timelineEvents = [
    {
      year: '2002',
      title: 'The Beginning',
      icon: Rocket,
      description: 'Started pioneering digital experiences while still in real estate. Began asking "what if?" and building the answers.',
      color: 'from-[#00B4D8] to-[#1E3A5F]'
    },
    {
      year: '2004-2008',
      title: 'The Verizon Era',
      icon: Building,
      description: 'Joined 2020 Companies and helped build the infrastructure for Verizon FiOS\'s national rollout. The company grew to over $500 million in valuation.',
      color: 'from-[#1E3A5F] to-[#00B4D8]'
    },
    {
      year: '2008',
      title: 'First Virtual Home Tour',
      icon: Home,
      description: 'Created the first-ever virtual real estate tour. But that wasn\'t enough—also built a rudimentary chatbot that could answer questions about the house, and used NFC stickers so in-person visitors could scan and learn about unique features. This was cutting-edge technology that wouldn\'t become mainstream for another decade.',
      color: 'from-[#00B4D8] to-[#FF6B35]'
    }
  ];

  const timelineEvents2 = [
    {
      year: '2010',
      title: 'First Arena Seat Preview',
      icon: Star,
      description: 'Partnered with the American Airlines Center in Dallas to create the first arena seat preview system. Fans could see their exact view before buying tickets. Yes, that project involved Mark Cuban.',
      color: 'from-[#FF6B35] to-[#00B4D8]'
    },
    {
      year: '2011',
      title: 'First Museum Virtual Tour',
      icon: Landmark,
      description: 'Created one of the first interactive museum virtual tours, pioneering how cultural institutions could share their collections with the world.',
      color: 'from-[#00B4D8] to-[#1E3A5F]'
    },
    {
      year: '2012',
      title: 'First Virtual E-Commerce Store',
      icon: ShoppingCart,
      description: 'Built a virtual storefront where customers could walk through a store, click on products, watch videos about them, and purchase—all from a virtual tour. This was 7 years before COVID made virtual shopping mainstream, and 11 years before Apple Vision Pro.',
      color: 'from-[#1E3A5F] to-[#FF6B35]'
    },
    {
      year: '2014',
      title: 'First Cloud Real Estate Brokerage',
      icon: Cloud,
      description: 'Helped create Ready Real Estate, the first virtual cloud-based real estate brokerage.',
      color: 'from-[#FF6B35] to-[#00B4D8]'
    }
  ];

  const timelineEvents3 = [
    {
      year: '2015',
      title: 'ThinkMents Is Born',
      icon: Star,
      description: 'Officially launched ThinkMents Digital Marketing Agency to bring enterprise-level innovation to businesses of all sizes.',
      color: 'from-[#00B4D8] to-[#1E3A5F]'
    },
    {
      year: '2015-2022',
      title: 'The Foursquare Healthcare Partnership',
      icon: DollarSign,
      description: 'Over a 5-7 year partnership, helped Foursquare Healthcare generate over $400 million in revenue through strategic digital marketing and innovation.',
      color: 'from-[#1E3A5F] to-[#00B4D8]'
    },
    {
      year: '2018',
      title: 'First NFC Pet Tracker',
      icon: Heart,
      description: 'Created the first NFC/BLE pet tracker program, helping reunite lost pets with their families.',
      color: 'from-[#00B4D8] to-[#FF6B35]'
    },
    {
      year: '2020',
      title: 'AI Marketing Pioneer',
      icon: Bot,
      description: 'Became one of the first to create AI marketing influencer programs, staying ahead of the AI revolution.',
      color: 'from-[#FF6B35] to-[#00B4D8]'
    },
    {
      year: '2023',
      title: 'Going National & International',
      icon: Globe,
      description: 'Expanded to serve clients across 31+ states and 3 countries while maintaining headquarters in Decatur, Texas.',
      color: 'from-[#00B4D8] to-[#1E3A5F]'
    },
    {
      year: '2024',
      title: '103 Five-Star Reviews',
      icon: Award,
      description: 'Reached 103 five-star Google reviews while continuing to create solutions that don\'t exist yet. 3D avatars, immersive storefronts, AI-powered tools, and whatever comes next.',
      color: 'from-[#1E3A5F] to-[#00B4D8]'
    }
  ];

  const impactStats = [
    { value: '$500M+', label: 'Total value generated for clients' },
    { value: '5.0 ★', label: 'Perfect Google rating' },
    { value: '$400M', label: 'Generated for a single healthcare client' },
    { value: '103', label: 'Five-star reviews' },
    { value: '31+', label: 'U.S. states served' },
    { value: '3', label: 'Countries with active clients' },
    { value: '77', label: 'Texas cities with dedicated pages' },
    { value: '20+', label: 'Years of innovation' }
  ];

  const clientTestimonials = [
    {
      rating: 5,
      text: 'Several of my online accounts were hacked. I contacted ThinkMents and they quickly scheduled me in. Within just a few hours, my accounts had been recovered and they assisted me with setting up increased security settings. Thoroughly satisfied and extremely grateful! Highly recommend!!!',
      author: 'Mike'
    },
    {
      rating: 5,
      text: 'Corey and his team at ThinkMents have been awesome business partners. Corey\'s knowledge of all things IT is incredible and he is always willing to give me guidance when I need help. They have been instrumental in our training programs and their professionalism is unmatched.',
      author: 'Business Partner'
    },
    {
      rating: 5,
      text: 'A reliable partner for innovative solutions. 5 stars for their expertise and commitment to excellence. I can\'t thank Corey, Jeremy and the rest of the team for all their help over the past couple of years!',
      author: 'Long-term Client'
    }
  ];

  const coreBeliefs = [
    {
      title: 'Results Over Activity',
      description: 'We don\'t measure success by how busy we are. We measure it by the impact we create for your business.',
      miniTestimonial: 'Exceeded my expectations'
    },
    {
      title: 'Innovation Over Imitation',
      description: 'Anyone can copy what\'s already been done. We\'d rather build what hasn\'t been built yet.',
      miniTestimonial: 'A reliable partner for innovative solutions'
    },
    {
      title: 'Partnership Over Transactions',
      description: 'We\'re not vendors. We\'re partners invested in your success. When you win, we win.',
      miniTestimonial: 'Awesome business partners'
    }
  ];

  return (
    <>
      <SEO
        title="Our Story - Building the Future Since 2002 | ThinkMents"
        description="From small town Texas to 31+ states and 3 countries—the story of creating industry firsts and generating $500M+ in client value. 5.0 Google rating with 103 reviews."
        url="/our-story"
        type="website"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#00B4D8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/about" className="hover:text-[#00B4D8]">About</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1E3A5F] font-medium">Our Story</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2a4d73] to-[#00B4D8] py-24 md:py-40 px-4 overflow-hidden">
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              We&apos;ve Been Building the Future Since 2002
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              From a small town in Texas to clients across 31 states and 3 countries—this is the story of building things that didn&apos;t exist and changing industries in the process.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 md:px-8 md:py-4 border border-white/20">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="text-white text-base md:text-lg font-semibold">5.0 on Google | 103 Reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Origin Story Section */}
      <section ref={originRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isOriginInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-8 md:mb-12 text-center">
              Where It All Began
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                In 2002, Corey Spicer was working in real estate when he had a simple question:
              </p>
              <p className="text-xl md:text-2xl text-[#00B4D8] italic font-semibold pl-6 border-l-4 border-[#00B4D8]">
                &quot;What if someone could tour a house without ever leaving their couch?&quot;
              </p>
              <p>
                This was years before smartphones. Years before virtual reality headsets. Years before anyone was talking about &quot;immersive experiences.&quot;
              </p>
              <p>
                But Corey didn&apos;t wait for the technology to catch up. He built it himself.
              </p>
              <p>
                That first virtual home tour wasn&apos;t just a cool experiment. It was the first of its kind—ever. And it was just the beginning of a journey that would eventually reach clients across 31+ states and 3 countries.
              </p>
            </div>

            {/* Pull Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isOriginInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-8 md:p-12 text-center mb-8"
            >
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-white/20 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-4xl font-bold text-white mb-6">
                &quot;I don&apos;t wait for someone else to build what I need. I build it myself.&quot;
              </blockquote>
              <p className="text-lg md:text-xl text-white/90">
                — Corey Spicer, Founder
              </p>
            </motion.div>

            {/* Testimonial Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isOriginInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#E8F8FC] rounded-lg p-6 border-l-4 border-[#00B4D8]"
            >
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-2">
                &quot;The CEO Corey Spicer is a self-starter with a passion to help others.&quot;
              </p>
              <p className="text-sm text-gray-600">— Team Member Review</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline of Firsts Section */}
      <section ref={timelineRef} className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              A History of Industry Firsts
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Over 20 years of innovation and pioneering
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00B4D8] via-[#1E3A5F] to-[#00B4D8]"></div>

            {/* First set of timeline events */}
            <div className="space-y-8 md:space-y-12 mb-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mb-4`}>
                          <event.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-[#00B4D8] font-bold text-lg mb-2">{event.year}</div>
                        <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#00B4D8] rounded-full z-10"></div>
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial Break 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isTimelineInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-[#E8F8FC] rounded-2xl p-8 md:p-12 mb-12 max-w-3xl mx-auto border-l-4 border-[#00B4D8]"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-3">
                &quot;Corey&apos;s knowledge of all things IT is incredible and he is always willing to give me guidance when I need help.&quot;
              </p>
              <p className="text-gray-600">— Verified Google Review</p>
            </motion.div>

            {/* Second set of timeline events */}
            <div className="space-y-8 md:space-y-12 mb-12">
              {timelineEvents2.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mb-4`}>
                          <event.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-[#00B4D8] font-bold text-lg mb-2">{event.year}</div>
                        <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#00B4D8] rounded-full z-10"></div>
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial Break 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isTimelineInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="relative bg-[#E8F8FC] rounded-2xl p-8 md:p-12 mb-12 max-w-3xl mx-auto border-l-4 border-[#00B4D8]"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-3">
                &quot;They have been instrumental in our training programs and their professionalism is unmatched. Go see them, you won&apos;t regret it.&quot;
              </p>
              <p className="text-gray-600">— Verified Google Review</p>
            </motion.div>

            {/* Third set of timeline events */}
            <div className="space-y-8 md:space-y-12">
              {timelineEvents3.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + 0.1 * index }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mb-4`}>
                          <event.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-[#00B4D8] font-bold text-lg mb-2">{event.year}</div>
                        <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#00B4D8] rounded-full z-10"></div>
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Growth Section */}
      <section ref={growthRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGrowthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-8 md:mb-12 text-center">
              From Small Town Texas to the World
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                ThinkMents started in Decatur, Texas—a small town where handshakes still mean something and your word is your bond.
              </p>
              <p>
                We never planned to go national. We just kept solving problems and delivering results. Word spread. Referrals came. Before we knew it, we were serving clients across the country and beyond.
              </p>
              <p className="font-semibold text-[#1E3A5F]">
                Today, we work with businesses in:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00B4D8] rounded-full mr-3"></div>
                  <span>77 cities across Texas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00B4D8] rounded-full mr-3"></div>
                  <span>31+ states across the U.S.</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00B4D8] rounded-full mr-3"></div>
                  <span>3 countries worldwide</span>
                </li>
              </ul>
              <p>
                But no matter how far we&apos;ve grown, we&apos;ve never forgotten where we came from. We still answer our phones. We still treat every client like a neighbor. We still believe that results matter more than promises.
              </p>
            </div>

            {/* Visual Map Representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isGrowthInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#00B4D8]/10 to-[#1E3A5F]/10 rounded-2xl p-8 md:p-12 mb-8"
            >
              <div className="flex items-center justify-center mb-8">
                <Globe className="w-24 h-24 md:w-32 md:h-32 text-[#00B4D8]" strokeWidth={1} />
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-4xl font-bold text-[#00B4D8] mb-2">77</div>
                  <div className="text-gray-600">Texas Cities</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-4xl font-bold text-[#1E3A5F] mb-2">31+</div>
                  <div className="text-gray-600">U.S. States</div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="text-4xl font-bold text-[#FF6B35] mb-2">3</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </motion.div>

            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isGrowthInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#E8F8FC] rounded-lg p-8 border-l-4 border-[#00B4D8]"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-3">
                &quot;Exceptional experience with ThinkMents! The team&apos;s professionalism and extensive knowledge truly sets them apart. From insightful consultations to precise execution, they exceeded my expectations.&quot;
              </p>
              <p className="text-gray-600">— Verified Google Review</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section ref={philosophyRef} className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-8 md:mb-12 text-center">
              Why We Do This
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p>
                    Most agencies follow playbooks. They see what&apos;s working for someone else and copy it.
                  </p>
                  <p className="text-2xl font-bold text-[#1E3A5F]">
                    That&apos;s not how we work.
                  </p>
                  <p>
                    We believe every business deserves solutions built for THEM—not recycled templates from someone else&apos;s success story.
                  </p>
                  <p>
                    Sometimes that means implementing proven strategies with precision.
                  </p>
                  <p>
                    Sometimes that means building something that&apos;s never been built before.
                  </p>
                  <p>
                    Either way, we start with one question: <span className="font-semibold text-[#00B4D8]">What does THIS business actually need?</span>
                  </p>
                  <p>
                    Then we build it.
                  </p>
                </div>
              </div>

              {/* Side Testimonial */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isPhilosophyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-lg p-6 border-l-4 border-[#00B4D8] h-full flex flex-col justify-center"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    &quot;Willing to go above and beyond, he&apos;s answered every question I&apos;ve thrown his way and given great advice for future projects.&quot;
                  </p>
                  <p className="text-sm text-gray-600">— Verified Google Review</p>
                </motion.div>
              </div>
            </div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isPhilosophyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-8 md:p-12 text-center"
            >
              <p className="text-xl md:text-3xl text-white font-semibold leading-relaxed">
                We don&apos;t compete on price. We compete on results. And our results speak for themselves: over $500 million in value created for clients across 31+ states and 3 countries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Impact Section */}
      <section ref={impactRef} className="py-16 md:py-20 px-4 bg-[#1E3A5F] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              By The Numbers
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isImpactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl md:text-6xl font-bold text-[#00B4D8] mb-3">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Love Section */}
      <section ref={clientLoveRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isClientLoveInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              What People Are Saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isClientLoveInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">— {testimonial.author}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/data=!4m8!3m7!1s0x864dca0c0e2bc3dd:0x7a05b92ccce310c3!8m2!3d33.2283526!4d-97.5883743!9m1!1b1!16s%2Fg%2F11gf6g0v8y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-colors px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Read all 103 reviews <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* The Hard Truth Section */}
      <section ref={truthRef} className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTruthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-8 md:mb-12 text-center">
              What We&apos;ve Learned
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold text-[#1E3A5F]">
                We&apos;re going to be honest about something.
              </p>
              <p>
                For years, we were so focused on delivering incredible results that we forgot to show our clients what we were doing for them.
              </p>
              <p>
                We&apos;d generate millions in value, but we wouldn&apos;t send the reports. We&apos;d hit major milestones, but we wouldn&apos;t celebrate the wins. We&apos;d work behind the scenes, and our clients sometimes didn&apos;t even know what was happening.
              </p>
              <p className="text-xl font-bold text-[#00B4D8]">
                That&apos;s changed.
              </p>
              <p>
                Today, we&apos;re building systems to make sure every client—whether they&apos;re in Texas, California, or another country—sees exactly what we&apos;re doing, what results we&apos;re generating, and what wins we&apos;re achieving together.
              </p>
              <p className="text-xl italic">
                Because the best results in the world don&apos;t matter if you don&apos;t know about them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section ref={drivesRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDrivesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              Our Core Beliefs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isDrivesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                      {index === 0 && <TrendingUp className="w-8 h-8 text-white" />}
                      {index === 1 && <Lightbulb className="w-8 h-8 text-white" />}
                      {index === 2 && <Handshake className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{belief.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{belief.description}</p>
                    
                    {/* Mini Testimonial */}
                    <div className="bg-[#E8F8FC] rounded-lg p-4 mt-6">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-[#FBBC04] text-[#FBBC04]" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 italic">&quot;{belief.miniTestimonial}&quot;</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Invitation Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Google Rating Display */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="text-white text-2xl font-bold">5.0 (103 Reviews)</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Build Something New?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Join the businesses across 31 states and 3 countries who trust ThinkMents to build their future.
            </p>
            <p className="text-xl text-white/80 mb-12">
              We&apos;ve spent 20+ years building the future. Let&apos;s build yours.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 min-w-[220px]"
              >
                <Link to="/get-a-quote">Start a Conversation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 min-w-[220px]"
              >
                <Link to="/case-studies">See Our Work</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:9403151023" className="hover:text-white transition-colors text-lg">
                  (940) 315-1023
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@thinkments.com" className="hover:text-white transition-colors text-lg">
                  info@thinkments.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Headquarters: Decatur, Texas</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="text-lg">Serving: 31+ States & 3 Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-[#00B4D8]/20 mx-auto mb-6" />
            <blockquote className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
              &quot;We don&apos;t follow trends. We build the future.&quot;
            </blockquote>
            
            {/* Google Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="text-[#1E3A5F] text-xl font-bold">5.0 on Google | 103 Reviews</span>
            </div>

            <div className="text-gray-600">
              <p className="font-semibold text-xl mb-2">ThinkMents Digital Marketing Agency</p>
              <p>Since 2002 | Decatur, Texas | Serving 31+ States & 3 Countries</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}