import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  ArrowRight, 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Rocket,
  Globe,
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
  X,
  Linkedin,
  Star,
  Handshake,
  Search,
  Code,
  Camera,
  ShoppingCart,
  Briefcase,
  Award,
  Quote,
  MapPinned,
  Building2
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

export default function AboutPage() {
  const differenceRef = useRef(null);
  const numbersRef = useRef(null);
  const reachRef = useRef(null);
  const testimonialsRef = useRef(null);
  const approachRef = useRef(null);
  const servicesRef = useRef(null);
  const whoRef = useRef(null);
  const teamRef = useRef(null);
  
  const isDifferenceInView = useInView(differenceRef, { once: true });
  const isNumbersInView = useInView(numbersRef, { once: true });
  const isReachInView = useInView(reachRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isApproachInView = useInView(approachRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isWhoInView = useInView(whoRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true });

  const differenceCards = [
    {
      icon: Rocket,
      title: 'We Pioneer',
      description: 'We created the first virtual real estate tour, the first arena seat preview system, and the first virtual e-commerce store—years before anyone else. Innovation isn\'t a buzzword for us. It\'s what we do.'
    },
    {
      icon: TrendingUp,
      title: 'We Deliver Results',
      description: 'We\'ve helped clients generate over $500 million in real business value. Not vanity metrics. Not impressions. Actual revenue that changed businesses and lives.'
    },
    {
      icon: Handshake,
      title: 'We Solve Problems',
      description: 'Most agencies sell packages. We solve problems. Tell us what you\'re trying to achieve, and we\'ll build the solution—even if it doesn\'t exist yet.'
    }
  ];

  const impactStats = [
    { value: '$500M+', label: 'Total client value generated' },
    { value: '5.0 ★', label: 'Perfect Google rating' },
    { value: '31+', label: 'States with active clients' },
    { value: '3', label: 'Countries served' },
    { value: '103', label: '5-star reviews' },
    { value: '20+', label: 'Years of digital innovation' }
  ];

  const testimonials = [
    {
      rating: 5,
      text: 'Corey and his team at ThinkMents have been awesome business partners. Corey\'s knowledge of all things IT is incredible and he is always willing to give me guidance when I need help. They have been instrumental in our training programs and their professionalism is unmatched.',
      author: 'Verified Google Review'
    },
    {
      rating: 5,
      text: 'Several of my online accounts were hacked. I contacted ThinkMents and they quickly scheduled me in. Within just a few hours, my accounts had been recovered and they assisted me with setting up increased security settings. Thoroughly satisfied and extremely grateful!',
      author: 'Mike, Verified Google Review'
    },
    {
      rating: 5,
      text: 'Exceptional experience with ThinkMents! The team\'s professionalism and extensive knowledge truly sets them apart. From insightful consultations to precise execution, they exceeded my expectations. A reliable partner for innovative solutions.',
      author: 'Verified Google Review'
    }
  ];

  const scrollingReviews = [
    'Exceptional experience! The team\'s professionalism and extensive knowledge truly sets them apart.',
    'Willing to go above and beyond, he\'s answered every question I\'ve thrown his way.',
    'Within just a few hours, my accounts had been recovered. Highly recommend!!!',
    'A reliable partner for innovative solutions. 5 stars for their expertise!'
  ];

  const approachSteps = [
    {
      number: '01',
      title: 'Listen',
      description: 'We start by understanding your business, your goals, and your challenges. No templates. No assumptions.'
    },
    {
      number: '02',
      title: 'Strategize',
      description: 'We develop a custom approach based on what will actually move the needle for YOUR business.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'We create solutions—sometimes things that have never been built before—tailored to your needs.'
    },
    {
      number: '04',
      title: 'Prove',
      description: 'We show you the results. Real numbers. Real impact. No vanity metrics.'
    }
  ];

  const services = [
    {
      icon: Search,
      title: 'Digital Marketing',
      items: ['SEO & Local Search', 'Google Ads Management', 'Social Media Marketing', 'Content Strategy']
    },
    {
      icon: Code,
      title: 'Web Development',
      items: ['Custom Website Design', 'Mobile-First Development', 'E-Commerce Solutions', 'Website Maintenance']
    },
    {
      icon: MapPinned,
      title: 'Google Business Profile',
      items: ['Profile Optimization', 'Review Management', 'Local SEO', 'Multi-Location Management']
    },
    {
      icon: Globe,
      title: 'Immersive Experiences',
      items: ['Virtual Tours', '360° Photography', 'Interactive Storefronts', 'Virtual E-Commerce']
    },
    {
      icon: Camera,
      title: 'Video & Photography',
      items: ['Commercial Videography', 'Drone Photography', 'Product Photography', 'Brand Videos']
    },
    {
      icon: Briefcase,
      title: 'Business Solutions',
      items: ['Brand Identity', 'LLC Formation', 'Google Workspace Setup', 'NFC Smart Cards']
    }
  ];

  const goodFitReasons = [
    'Want results, not just activity',
    'Value innovation and creative solutions',
    'Are ready to invest in real growth',
    'Need something that doesn\'t exist yet',
    'Want a partner, not a vendor',
    'Trust experts to do expert work'
  ];

  const badFitReasons = [
    'Want the cheapest option available',
    'Need hand-holding on every decision',
    'Think marketing is just social media posts',
    'Aren\'t ready to invest in your business',
    'Want a "set it and forget it" vendor'
  ];

  return (
    <>
      <SEO
        title="About ThinkMents - Innovation Leaders Since 2002"
        description="Learn about ThinkMents Digital Marketing Agency. 5.0 Google rating, 103 reviews, serving clients across 31 states and 3 countries."
        url="/about-us"
        type="website"
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { name: 'Home', path: '/' },
        { name: 'About Us' }
      ]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2a4d73] to-[#00B4D8] py-24 md:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              We Build What Hasn&apos;t Been Built Yet
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              ThinkMents has been creating industry firsts since 2002. While other agencies follow trends, we create them.
            </p>

            {/* Trust Badge Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#4285F4] font-bold text-xs">G</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold">5.0</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <div className="text-white/80 text-sm">103 Reviews</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 text-white">
                <Award className="w-6 h-6 inline-block mr-2" />
                <span className="font-semibold">Grow with Google Partner</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 text-white">
                <Star className="w-6 h-6 inline-block mr-2" />
                <span className="font-semibold">20+ Years Experience</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-[#00B4D8] mb-2">$500M+</div>
                <div className="text-white/80">Client Value Generated</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-[#00B4D8] mb-2">31+</div>
                <div className="text-white/80">States Served</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-[#00B4D8] mb-2">3</div>
                <div className="text-white/80">Countries</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold text-[#00B4D8] mb-2">103</div>
                <div className="text-white/80">5-Star Reviews</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#00B4D8] hover:bg-[#0095b3] text-white min-w-[180px]"
              >
                <Link to="/case-studies">See Our Work</Link>
              </Button>
              <Link 
                to="/our-story" 
                className="text-white hover:text-[#00B4D8] transition-colors flex items-center gap-2 text-lg"
              >
                Read Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Banner */}
      <section className="py-12 px-4 bg-[#E8F8FC]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-[#00B4D8]/20 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl text-[#1E3A5F] mb-6 italic">
              &quot;Corey&apos;s knowledge of all things IT is incredible and he is always willing to give me guidance when I need help. They have been instrumental in our training programs and their professionalism is unmatched. Go see them, you won&apos;t regret it.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <p className="text-gray-600">— Verified Google Review</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Differently Section */}
      <section ref={differenceRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              Not Your Typical Agency
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differenceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center mb-6">
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-8 px-4 bg-[#1E3A5F] overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center flex-wrap gap-12"
          >
            {scrollingReviews.map((review, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 min-w-[300px] max-w-[400px]">
                <div className="flex-shrink-0 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-sm italic">{review}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section ref={numbersRef} className="py-20 px-4 bg-[#1E3A5F] relative overflow-hidden">
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
            animate={isNumbersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Impact
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isNumbersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#00B4D8] mb-3">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach Section */}
      <section ref={reachRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isReachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
              Based in Texas. Serving the World.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              What started in Decatur, Texas has grown into a nationwide and international operation. We serve clients across 31+ states and 3 countries—but we never lost our small-town values of honest work and real relationships.
            </p>
          </motion.div>

          {/* Location Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isReachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">77</div>
              <div className="text-gray-600">Texas Cities</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isReachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinned className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">31+</div>
              <div className="text-gray-600">U.S. States</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isReachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">3</div>
              <div className="text-gray-600">Countries</div>
            </motion.div>
          </div>

          {/* Team Member Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isReachInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-[#00B4D8]/10 to-[#1E3A5F]/10 rounded-2xl p-8 md:p-12 border-l-4 border-[#00B4D8]"
          >
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <p className="text-xl text-gray-700 italic mb-4">
              &quot;This place has been very flexible and very supportive. I learned a lot and was treated and compensated fairly. It has made a huge impact in my professional career.&quot;
            </p>
            <p className="text-gray-600 font-semibold">— ThinkMents Team Member</p>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">103 five-star reviews and counting</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
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
                        <p className="text-sm text-gray-600">{testimonial.author}</p>
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
              className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] transition-colors text-lg font-semibold"
            >
              Read All 103 Reviews on Google <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={approachRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              How We Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl font-bold text-[#00B4D8]/20 mb-4">{step.number}</div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Small testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg p-6 max-w-3xl mx-auto text-center border-l-4 border-[#00B4D8]"
          >
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              &quot;Willing to go above and beyond, he&apos;s answered every question I&apos;ve thrown his way and given great advice for future projects.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section ref={servicesRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <Check className="w-5 h-5 text-[#00B4D8] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white">
              <Link to="/services">View All Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section ref={whoRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              Our Ideal Partners
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Good Fit */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isWhoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-t-4 border-t-[#00B4D8]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6">We&apos;re a Great Fit If You:</h3>
                  <ul className="space-y-4">
                    {goodFitReasons.map((reason, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-6 h-6 text-[#00B4D8] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bad Fit */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isWhoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-t-4 border-t-[#FF6B35]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6">We&apos;re Probably Not Right If You:</h3>
                  <ul className="space-y-4">
                    {badFitReasons.map((reason, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-6 h-6 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              The People Behind ThinkMents
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6">
                    CS
                  </div>
                  <h3 className="text-3xl font-bold text-[#1E3A5F] mb-2">Corey Spicer</h3>
                  <p className="text-xl text-[#00B4D8] mb-6">Founder & CEO</p>
                  <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
                    Pioneer. Problem-solver. The guy who asks &quot;what if?&quot; and then builds it. With over 20 years of experience creating industry firsts—from the first virtual real estate tour to arena seat previews with Mark Cuban—Corey brings innovation DNA to every project.
                  </p>

                  {/* Employee Quote Badge */}
                  <div className="bg-[#E8F8FC] rounded-lg p-6 mb-6 max-w-2xl">
                    <div className="flex items-center gap-1 mb-3 justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;The CEO Corey Spicer is a self-starter with a passion to help others.&quot;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">— Team Member</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <a 
                      href="https://www.linkedin.com/company/thinkments"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="mailto:info@thinkments.com"
                      className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 px-4 bg-[#F8F9FA] border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Why Businesses Trust ThinkMents
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="bg-white rounded-lg px-8 py-6 shadow-md flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center border border-gray-200">
                <span className="text-[#4285F4] font-bold">G</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[#1E3A5F]">5.0</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <div className="text-gray-600 text-sm">103 Reviews</div>
              </div>
            </div>

            <div className="bg-white rounded-lg px-8 py-6 shadow-md">
              <Award className="w-8 h-8 text-[#00B4D8] inline-block mr-2" />
              <span className="font-semibold text-[#1E3A5F]">Grow with Google Partner</span>
            </div>

            <div className="bg-white rounded-lg px-8 py-6 shadow-md">
              <Star className="w-8 h-8 text-[#FF6B35] inline-block mr-2" />
              <span className="font-semibold text-[#1E3A5F]">20+ Years in Business</span>
            </div>

            <div className="bg-white rounded-lg px-8 py-6 shadow-md">
              <Globe className="w-8 h-8 text-[#00B4D8] inline-block mr-2" />
              <span className="font-semibold text-[#1E3A5F]">31+ States Served</span>
            </div>

            <div className="bg-white rounded-lg px-8 py-6 shadow-md">
              <Building2 className="w-8 h-8 text-[#00B4D8] inline-block mr-2" />
              <span className="font-semibold text-[#1E3A5F]">Thousands of Businesses Helped</span>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
              Our Home Base
            </h2>
          </motion.div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">ThinkMents Digital Marketing Agency</h3>
                  <p className="text-gray-700">
                    301 South Washburn St, Suite D<br />
                    Decatur, Texas 76234
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Phone className="w-5 h-5 text-[#00B4D8]" />
                    <a href="tel:9403151023" className="text-lg text-[#00B4D8] hover:text-[#1E3A5F] transition-colors">
                      (940) 315-1023
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5 text-[#00B4D8]" />
                    <a href="mailto:info@thinkments.com" className="text-lg text-[#00B4D8] hover:text-[#1E3A5F] transition-colors">
                      info@thinkments.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#00B4D8] mt-1" />
                    <div>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-lg text-[#1E3A5F] font-semibold">
                    Headquartered in Texas. Serving clients across 31+ states and 3 countries.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] relative overflow-hidden">
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join the 103+ businesses who gave us 5 stars. Whether you&apos;re across town or across the globe, we&apos;re here to help.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <a href="tel:9403151023">Call (940) 315-1023</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}