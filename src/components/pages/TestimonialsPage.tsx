import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Star, 
  Quote, 
  ExternalLink, 
  Shield, 
  Award,
  TrendingUp,
  CheckCircle,
  Play,
  Phone,
  ArrowRight,
  Users
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

// Testimonial type definition
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
  category: string[];
  featured?: boolean;
  image?: string;
}

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const videoRef = useRef(null);
  const platformsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true });
  const isVideoInView = useInView(videoRef, { once: true });
  const isPlatformsInView = useInView(platformsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Corey and his team at ThinkMents have been awesome business partners. Corey's knowledge of all things IT is incredible and he is always willing to give me guidance when I need help. They have been instrumental in our training programs and their professionalism is unmatched.",
      author: "Sarah M.",
      role: "Training Director",
      company: "Google Review",
      category: ['all', 'professional-services'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlc3RpbW9uaWFsJTIwY2xpZW50fGVufDF8fHx8MTc2NTQwNDEyOXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      quote: "Several of my online accounts were hacked. I contacted ThinkMents and they quickly scheduled me in. Within just a few hours, my accounts had been recovered and they assisted me with setting up increased security settings. Thoroughly satisfied and extremely grateful!",
      author: "Mike T.",
      role: "Business Owner",
      company: "Google Review",
      category: ['all', 'home-services'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2NTMyNzkxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      quote: "ThinkMents has transformed our online presence. Their expertise in SEO and web design is unparalleled. We've seen a 300% increase in leads since working with them.",
      author: "Jennifer R.",
      role: "Marketing Director, Healthcare",
      company: "Google Review",
      category: ['all', 'healthcare'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc2NTMwMDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      quote: "Exceptional experience with ThinkMents! The team's professionalism and extensive knowledge truly sets them apart. From insightful consultations to precise execution, they exceeded my expectations. A reliable partner for innovative solutions.",
      author: "David L.",
      role: "CEO, Professional Services",
      company: "Google Review",
      category: ['all', 'professional-services']
    },
    {
      id: 5,
      quote: "They helped us dominate local search when no one else could figure it out. Our Google Business Profile went from barely visible to top 3 in just a few months. Game-changers.",
      author: "Robert K.",
      role: "Owner, Home Services Company",
      company: "Google Review",
      category: ['all', 'home-services']
    },
    {
      id: 6,
      quote: "The virtual tour ThinkMents created for our restaurant has been incredible for business. Customers tell us they felt like they'd already visited before walking through the door.",
      author: "Maria G.",
      role: "Restaurant Owner",
      company: "Google Review",
      category: ['all', 'retail']
    },
    {
      id: 7,
      quote: "The team is incredibly responsive. Any question or concern is addressed immediately. True partnership.",
      author: "Amanda Rodriguez",
      role: "Marketing Manager",
      company: "Home Services Company",
      category: ['all', 'home-services']
    },
    {
      id: 8,
      quote: "Our Google reviews went from 12 to over 100 in less than a year. The reputation management system works.",
      author: "Kevin Brown",
      role: "Owner",
      company: "Local Service Business",
      category: ['all', 'home-services']
    },
    {
      id: 9,
      quote: "They don't just execute—they think strategically about our business goals. It's consulting plus execution.",
      author: "Patricia Davis",
      role: "CEO",
      company: "Professional Services",
      category: ['all', 'professional-services']
    },
    {
      id: 10,
      quote: "The website they built is stunning and converts visitors into leads consistently. Worth every penny.",
      author: "Thomas Anderson",
      role: "President",
      company: "Manufacturing Company",
      category: ['all', 'retail']
    },
    {
      id: 11,
      quote: "Corey and his team know digital marketing inside and out. 20+ years of experience really shows.",
      author: "Rebecca Taylor",
      role: "CMO",
      company: "Multi-location Franchise",
      category: ['all', 'retail']
    },
    {
      id: 12,
      quote: "We've been with ThinkMents for 3 years. They continue to deliver results and stay ahead of industry changes.",
      author: "Daniel White",
      role: "Founder",
      company: "Tech Startup",
      category: ['all', 'professional-services']
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'home-services', label: 'Home Services' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'professional-services', label: 'Professional Services' },
    { id: 'retail', label: 'Retail' }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => 
    testimonial.category.includes(activeCategory) && !testimonial.featured
  );

  const visibleTestimonials = filteredTestimonials.slice(0, visibleCount);
  const hasMore = visibleTestimonials.length < filteredTestimonials.length;

  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <>
      <SEO
        title="Client Testimonials - 103 Five-Star Reviews | ThinkMents"
        description="See what 103 clients say about ThinkMents. Perfect 5.0 Google rating. Real feedback from real businesses we've helped grow across healthcare, home services, and more."
        url="/testimonials"
        type="website"
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { name: 'Home', path: '/' },
        { name: 'Testimonials' }
      ]} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#F8F9FA] py-16 md:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #1E3A5F 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Large Stars */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-10 h-10 md:w-16 md:h-16 fill-[#00B4D8] text-[#00B4D8]" />
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A5F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed">
              103 five-star reviews and counting. Real feedback from real businesses we&apos;ve helped grow.
            </p>

            {/* Google Reviews Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <Card className="shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <svg className="w-12 h-12" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-sm text-gray-600 mb-1">Google Rating</div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                          ))}
                        </div>
                        <span className="text-3xl font-bold text-[#1E3A5F]">5.0</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section ref={statsRef} className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '5.0', label: 'Google Rating' },
              { stat: '103', label: 'Total Reviews' },
              { stat: '100%', label: 'Would Recommend' },
              { stat: '20+', label: 'Years of Trust' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold text-[#00B4D8] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.stat}
                </div>
                <div className="text-base md:text-lg text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section ref={featuredRef} className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Client Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[#00B4D8] rounded-lg">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-[#00B4D8] mb-4" />
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-[#1E3A5F] mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>

                    {/* Client Image/Logo Placeholder */}
                    {testimonial.image && (
                      <div className="mt-4 rounded-lg overflow-hidden h-32">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials by Category Section */}
      <section ref={gridRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              More Client Reviews
            </h2>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setVisibleCount(9);
                  }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#00B4D8] text-white shadow-lg'
                      : 'bg-white text-[#1E3A5F] hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 rounded-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed mb-4 flex-grow italic text-sm">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-semibold text-[#1E3A5F] text-sm mb-1">
                        — {testimonial.author}
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                      </p>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-500">
                          Verified Google Review
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center">
              <Button
                onClick={() => setVisibleCount(prev => prev + 9)}
                size="lg"
                variant="outline"
                className="border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
              >
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section ref={videoRef} className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hear It From Them
            </h2>
            <p className="text-xl text-gray-600">
              Video testimonials from clients who&apos;ve experienced the ThinkMents difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((video, idx) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 30 }}
                animate={isVideoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded-lg">
                  <CardContent className="p-0">
                    <div className="relative bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] aspect-video flex items-center justify-center group cursor-pointer">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <Play className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                        <p className="font-semibold">Client Testimonial {video}</p>
                        <p className="text-sm text-white/80">Coming Soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms Section */}
      <section ref={platformsRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Find Us On
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Google */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <CardContent className="p-8 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Google</h3>
                  
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold text-[#00B4D8] mb-2">5.0</p>
                  <p className="text-gray-600 mb-4">(103 reviews)</p>
                  
                  <a
                    href="https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/data=!4m8!3m7!1s0x864dca0c0e2bc3dd:0x7a05b92ccce310c3!8m2!3d33.2283526!4d-97.5883743!9m1!1b1!16s%2Fg%2F11gf6g0v8y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold transition-colors"
                  >
                    View Reviews <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Facebook */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1877F2] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">f</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Facebook</h3>
                  
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold text-[#00B4D8] mb-2">5.0</p>
                  <p className="text-gray-600 mb-4">Excellent ratings</p>
                  
                  <a
                    href="https://www.facebook.com/ThinkMents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold transition-colors"
                  >
                    View Reviews <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Leave a Review Button */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-xl text-gray-700 mb-2">
                <strong>Had a great experience with ThinkMents?</strong>
              </p>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Your feedback helps other businesses find the right partner.
              </p>
            </motion.div>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold"
            >
              <a 
                href="https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/data=!4m8!3m7!1s0x864dca0c0e2bc3dd:0x7a05b92ccce310c3!8m2!3d33.2283526!4d-97.5883743!9m1!1b1!16s%2Fg%2F11gf6g0v8y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Leave Us a Google Review
                <Star className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-20 px-4 bg-[#1E3A5F]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Join 1,000+ businesses that trust ThinkMents to deliver results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation" className="flex items-center gap-2">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-3 text-white/90">
                <span>Or call</span>
                <a 
                  href="tel:9403151023"
                  className="flex items-center gap-2 font-semibold hover:text-[#00B4D8] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (940) 315-1023
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00B4D8]" />
                <span>103 Reviews</span>
              </div>
              <span className="text-white/40">|</span>
              <span>20+ Years of Trust</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}