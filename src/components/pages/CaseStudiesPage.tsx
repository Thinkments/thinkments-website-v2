import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Star,
  Home,
  Building,
  ShoppingBag,
  Briefcase,
  Ticket,
  Monitor,
  Factory,
  Heart,
  Landmark,
  Globe,
  Phone,
  CheckCircle,
  Rocket,
  Award,
  Shield,
  Target,
  Cloud,
  PawPrint,
  Bot,
  ExternalLink,
  Users,
  BarChart
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  category: string;
  keyStat: string;
  description: string;
  link: string;
  featured?: boolean;
  image?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
}

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const resultsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'technology', label: 'Technology' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'home-services', label: 'Home Services' },
    { id: 'retail', label: 'Retail' }
  ];

  const caseStudies: CaseStudy[] = [
    // Featured Case Studies
    {
      id: 1,
      title: 'Foursquare Healthcare',
      company: 'Foursquare Healthcare',
      industry: 'Healthcare',
      category: 'healthcare',
      keyStat: '$400M+',
      description: 'in revenue generated',
      featured: true,
      image: 'https://images.unsplash.com/photo-1764885449418-db6632922a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwZmFjaWxpdHklMjBleHRlcmlvcnxlbnwxfHx8fDE3NjU0MDQzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'A growing healthcare network needed to transform their patient acquisition and brand presence across multiple locations.',
      solution: 'Complete marketing overhaul including SEO, reputation management, and targeted advertising.',
      results: [
        '$400M+ in attributed revenue',
        '300% increase in patient inquiries',
        '#1 rankings for key service terms'
      ],
      link: '/case-studies/foursquare-healthcare'
    },
    {
      id: 2,
      title: '2020 Companies',
      company: '2020 Companies / Verizon FiOS',
      industry: 'Telecommunications',
      category: 'technology',
      keyStat: '$500M+',
      description: 'company valuation',
      featured: true,
      image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwdGVsZWNvbW11bmljYXRpb25zJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY1NDA0MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Building marketing and operations infrastructure for one of the largest telecommunications rollouts in history.',
      solution: 'End-to-end marketing strategy, sales enablement, and operational systems during the Verizon FiOS expansion.',
      results: [
        '$500M+ company valuation achieved',
        'Nationwide operations supported',
        'Scalable systems still in use today'
      ],
      link: '#'
    },
    {
      id: 3,
      title: 'American Airlines Center',
      company: 'American Airlines Center',
      industry: 'Entertainment / Technology',
      category: 'technology',
      keyStat: 'First Ever',
      description: 'arena seat preview',
      featured: true,
      image: 'https://images.unsplash.com/photo-1687216769793-833dcfe4e3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwYXJlbmElMjBpbnRlcmlvciUyMHNlYXRzfGVufDF8fHx8MTc2NTQwNDMwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Create a way for ticket buyers to see their exact view before purchasing—something that had never been done.',
      solution: 'Pioneered the first virtual seat preview system in partnership with Mark Cuban\'s arena.',
      results: [
        'Industry-first technology',
        'Now standard across arenas worldwide',
        'Significantly improved ticket sales conversion'
      ],
      link: '#'
    },
    // Additional Case Studies
    {
      id: 4,
      title: 'Chenevert\'s Home & Hardware',
      company: 'Chenevert\'s Home & Hardware',
      industry: 'Retail',
      category: 'retail',
      keyStat: '634',
      description: 'monthly users',
      link: '/case-studies/chenevert'
    },
    {
      id: 5,
      title: 'Ready Real Estate',
      company: 'Ready Real Estate',
      industry: 'Real Estate',
      category: 'real-estate',
      keyStat: 'First',
      description: 'cloud brokerage',
      link: '#'
    },
    {
      id: 6,
      title: 'Virtual E-Commerce Store',
      company: 'Virtual E-Commerce Storefront',
      industry: 'Retail',
      category: 'retail',
      keyStat: '2012',
      description: '7 years before COVID',
      link: '#'
    },
    {
      id: 7,
      title: 'Bridgeport Veterans Museum',
      company: 'Bridgeport Veterans Museum',
      industry: 'Cultural',
      category: 'technology',
      keyStat: 'First',
      description: 'museum virtual tour',
      link: '#'
    },
    {
      id: 8,
      title: 'Local HVAC Company',
      company: 'Local HVAC Company',
      industry: 'Home Services',
      category: 'home-services',
      keyStat: '400%',
      description: 'increase in leads',
      link: '#'
    },
    {
      id: 9,
      title: 'Multi-Location Dental Practice',
      company: 'Multi-Location Dental Practice',
      industry: 'Healthcare',
      category: 'healthcare',
      keyStat: '250%',
      description: 'new patient growth',
      link: '#'
    },
    {
      id: 10,
      title: 'Luxury Real Estate Agency',
      company: 'Luxury Real Estate Agency',
      industry: 'Real Estate',
      category: 'real-estate',
      keyStat: '$50M+',
      description: 'in property sales',
      link: '#'
    },
    {
      id: 11,
      title: 'Plumbing Services',
      company: 'Plumbing Services',
      industry: 'Home Services',
      category: 'home-services',
      keyStat: '500%',
      description: 'ROI on Google Ads',
      link: '#'
    },
    {
      id: 12,
      title: 'Boutique Retail Store',
      company: 'Boutique Retail Store',
      industry: 'Retail',
      category: 'retail',
      keyStat: '180%',
      description: 'online sales increase',
      link: '#'
    }
  ];

  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);
  const allCaseStudies = caseStudies.filter(cs => !cs.featured);
  const filteredCaseStudies = activeCategory === 'all' 
    ? allCaseStudies 
    : allCaseStudies.filter(cs => cs.category === activeCategory);

  return (
    <>
      <SEO
        title="Case Studies - Real Results, Real Stories | ThinkMents"
        description="See how ThinkMents has helped businesses generate $500M+ in value. Detailed case studies showing measurable success across healthcare, technology, real estate, and more."
        url="/case-studies"
        type="website"
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/case-studies' },
        { name: 'Case Studies' }
      ]} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#F8F9FA] to-white py-24 md:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #1E3A5F 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E3A5F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Real Results. Real Stories.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
              Detailed case studies showing how we&apos;ve helped businesses across industries achieve measurable success.
            </p>

            {/* Stats Row */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: '$500M+', label: 'Total Value Generated' },
                { stat: '1,000+', label: 'Projects Completed' },
                { stat: '18', label: 'Industries Served' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
                >
                  <div className="text-5xl md:text-6xl font-bold text-[#00B4D8] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.stat}
                  </div>
                  <div className="text-lg text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section ref={featuredRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-lg">
                  {/* Image */}
                  {study.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    {/* Category Tag */}
                    <Badge className="bg-[#00B4D8] text-white mb-4">
                      {study.industry}
                    </Badge>

                    {/* Headline */}
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {study.title}
                    </h3>

                    {/* Big Stat */}
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-[#FF6B35] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {study.keyStat}
                      </div>
                      <div className="text-gray-600">{study.description}</div>
                    </div>

                    {/* Challenge */}
                    {study.challenge && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#1E3A5F] mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {study.solution && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#1E3A5F] mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    )}

                    {/* Results */}
                    {study.results && study.results.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#1E3A5F] mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      to={study.link}
                      className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold transition-colors"
                    >
                      Read Full Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-[#F8F9FA] border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
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
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section ref={gridRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              More Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 rounded-lg border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Industry Tag */}
                    <Badge variant="outline" className="mb-3 w-fit text-xs border-[#00B4D8] text-[#00B4D8]">
                      {study.industry}
                    </Badge>

                    {/* Company Name */}
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">
                      {study.title}
                    </h3>

                    {/* Key Stat Highlight */}
                    <div className="mb-4 bg-[#F8F9FA] rounded-lg p-4">
                      <div className="text-3xl font-bold text-[#FF6B35] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {study.keyStat}
                      </div>
                      <div className="text-sm text-gray-600">{study.description}</div>
                    </div>

                    {/* Description */}
                    {study.challenge && (
                      <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                        {study.challenge}
                      </p>
                    )}

                    {/* CTA Link */}
                    <Link
                      to={study.link}
                      className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold transition-colors"
                    >
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary Section */}
      <section ref={resultsRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Aggregate Results Across All Clients
            </h2>
            <p className="text-xl text-gray-600">
              The cumulative impact of our work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '$500M+', label: 'Total value generated', icon: DollarSign },
              { stat: '1,000+', label: 'Projects completed', icon: Rocket },
              { stat: '300%', label: 'Average traffic increase', icon: TrendingUp },
              { stat: '95%', label: 'Client retention rate', icon: Award }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow duration-300 rounded-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#00B4D8] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.stat}
                    </div>
                    <div className="text-gray-600">{item.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 bg-[#1E3A5F]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready for Results Like These?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let&apos;s create your success story together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation" className="flex items-center gap-2">
                  Start Your Success Story
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

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#00B4D8]" />
                <span>5.0 Google Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00B4D8]" />
                <span>1,000+ Projects</span>
              </div>
              <span className="text-white/40">|</span>
              <span>20+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}