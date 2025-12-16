import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Heart,
  Building2,
  Home,
  Hotel,
  Car,
  Scale,
  Wrench,
  Construction,
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  DollarSign,
  Factory,
  Theater,
  Users,
  Laptop,
  Droplet,
  Phone,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';
import SEO from '../SEO';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);
  
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const whyRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true });
  const isWhyInView = useInView(whyRef, { once: true });
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const featuredIndustries = [
    {
      tag: "FEATURED",
      tagColor: "bg-[#FF6B35]",
      icon: Heart,
      title: "Healthcare & Medical",
      description: "HIPAA-compliant marketing, patient acquisition, and reputation management for practices, clinics, and networks.",
      stat: "$400M+ Revenue Generated",
      image: "https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY1MzUyNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      services: ["Patient Acquisition", "Medical SEO", "Reputation Management", "HIPAA-Compliant Content"],
      ctaText: "Healthcare Marketing Solutions"
    },
    {
      tag: "PIONEER",
      tagColor: "bg-[#00B4D8]",
      icon: Home,
      title: "Real Estate",
      description: "We created the first virtual real estate tour in North Texas (2008). Complete marketing for agents, brokers, and developers.",
      stat: "First Virtual Tour 2008",
      image: "https://images.unsplash.com/photo-1664849131123-7e47af8cb399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0ZXhhcyUyMGhvbWV8ZW58MXx8fHwxNzY1NDA1MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      services: ["Matterport Tours", "Photography", "Agent Websites", "Listing SEO"],
      ctaText: "Real Estate Marketing"
    },
    {
      tag: "HIGH DEMAND",
      tagColor: "bg-[#1E3A5F]",
      icon: Wrench,
      title: "Home Services",
      description: "HVAC, plumbing, electrical—we generate leads and build reputations for service companies across Texas.",
      stat: "500+ Clients",
      image: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NjUzNTAxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      services: ["Local SEO", "Lead Generation", "Review Management", "Emergency Ads"],
      ctaText: "Home Services Marketing"
    }
  ];

  const allIndustries = [
    {
      id: 1,
      icon: Heart,
      name: "Healthcare & Medical",
      description: "Patient acquisition, reputation, HIPAA-compliant",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      icon: Phone,
      name: "Telecommunications",
      description: "B2B marketing, technical content, enterprise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      icon: Home,
      name: "Real Estate",
      description: "Virtual tours, agent branding, listings",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: Hotel,
      name: "Hospitality & Hotels",
      description: "Booking optimization, event promotion",
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 5,
      icon: Car,
      name: "Automotive",
      description: "Dealership marketing, service centers",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      icon: Scale,
      name: "Legal Services",
      description: "Attorney marketing, case acquisition",
      color: "from-gray-600 to-gray-800"
    },
    {
      id: 7,
      icon: Wrench,
      name: "Home Services",
      description: "Lead generation, local SEO, emergency ads",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 8,
      icon: Construction,
      name: "Roofing & Construction",
      description: "Storm response, project showcases",
      color: "from-yellow-600 to-orange-600"
    },
    {
      id: 9,
      icon: UtensilsCrossed,
      name: "Restaurants & Food",
      description: "Menu optimization, delivery apps",
      color: "from-red-600 to-pink-600"
    },
    {
      id: 10,
      icon: ShoppingBag,
      name: "Retail & E-Commerce",
      description: "Online stores, product marketing",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 11,
      icon: Briefcase,
      name: "Professional Services",
      description: "B2B marketing, thought leadership",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 12,
      icon: GraduationCap,
      name: "Education & Training",
      description: "Enrollment, course promotion",
      color: "from-blue-500 to-sky-500"
    },
    {
      id: 13,
      icon: DollarSign,
      name: "Financial Services",
      description: "Compliance-aware marketing, trust",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 14,
      icon: Factory,
      name: "Manufacturing",
      description: "B2B lead gen, technical SEO",
      color: "from-gray-500 to-slate-600"
    },
    {
      id: 15,
      icon: Theater,
      name: "Entertainment & Venues",
      description: "Events, tickets, virtual previews",
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      id: 16,
      icon: Heart,
      name: "Non-Profit",
      description: "Donor acquisition, awareness campaigns",
      color: "from-rose-500 to-red-500"
    },
    {
      id: 17,
      icon: Laptop,
      name: "Technology & SaaS",
      description: "Product marketing, user acquisition",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 18,
      icon: Droplet,
      name: "Oil & Gas / Energy",
      description: "B2B marketing, safety, recruiting",
      color: "from-amber-600 to-orange-700"
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      company: "Foursquare Healthcare",
      result: "$400M+ Revenue",
      description: "Complete digital transformation for multi-facility healthcare network"
    },
    {
      industry: "Telecommunications",
      company: "2020 Companies / Verizon FiOS",
      result: "$500M+ Valuation",
      description: "Strategic marketing through acquisition by Frontier Communications"
    },
    {
      industry: "Entertainment",
      company: "American Airlines Center",
      result: "Industry First",
      description: "Created first-ever arena seat preview technology"
    },
    {
      industry: "Non-Profit",
      company: "Wise County CASA",
      result: "300% Increase",
      description: "Complete digital presence and volunteer recruitment"
    },
    {
      industry: "Home Services",
      company: "Chenevert Heating & Air",
      result: "5x Lead Growth",
      description: "Dominating local HVAC market through strategic SEO"
    }
  ];

  return (
    <>
      <SEO
        title="Industries We Serve - 18 Specializations | ThinkMents"
        description="ThinkMents serves 18 industries with specialized digital marketing expertise. From healthcare to technology, we understand your unique challenges. 20+ years, $500M+ value generated."
        url="/industries"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 md:py-32 px-4 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543273984-c84d0cc090a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGV4YXMlMjBidXNpbmVzc2VzfGVufDF8fHx8MTc2NTQwNTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/90 to-[#1E3A5F]/85"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Your Industry. Our Expertise.
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
              From healthcare giants to local restaurants, we&apos;ve spent 20+ years mastering the unique challenges of 18 different industries. We don&apos;t do cookie-cutter marketing.
            </p>
          </motion.div>

          {/* Stats Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { stat: "18", label: "Industries Served", icon: Building2 },
              { stat: "1,000+", label: "Projects Completed", icon: CheckCircle },
              { stat: "31", label: "States", icon: Target },
              { stat: "$500M+", label: "Value Generated", icon: TrendingUp }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.stat}
                    </div>
                    <div className="text-sm text-white/90">{item.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section ref={featuredRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most in-demand specializations with proven track records
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className={`absolute top-4 right-4 ${industry.tagColor} text-white border-0`}>
                      {industry.tag}
                    </Badge>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-[#00B4D8]" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Key Stat */}
                    <div className="bg-[#E8F8FC] rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#00B4D8]" />
                        <span className="font-bold text-[#1E3A5F]">{industry.stat}</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Key Services:</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white group/btn"
                    >
                      <Link to="/contact-us" className="flex items-center justify-center gap-2">
                        {industry.ctaText}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Industries Grid */}
      <section ref={gridRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              All Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Click any industry to learn how we help
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allIndustries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setSelectedIndustry(industry.id)}
                onMouseLeave={() => setSelectedIndustry(null)}
              >
                <Card className={`h-full cursor-pointer transition-all duration-300 ${
                  selectedIndustry === industry.id 
                    ? 'shadow-2xl scale-105 border-[#00B4D8]' 
                    : 'hover:shadow-lg hover:scale-102'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <industry.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-[#00B4D8] flex-shrink-0 transition-transform ${
                        selectedIndustry === industry.id ? 'translate-x-1' : ''
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section ref={whyRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isWhyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why Industry Expertise Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A generic marketing agency might know marketing, but they don&apos;t know YOUR business. We&apos;ve spent 20+ years diving deep into regulations, customer behaviors, and competitive landscapes of each industry.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "We understand your compliance requirements",
                    description: "From HIPAA to financial regulations, we navigate complex industry rules so your marketing stays compliant."
                  },
                  {
                    icon: Users,
                    title: "We know your customers",
                    description: "We've studied buying patterns, pain points, and decision-making processes specific to your industry."
                  },
                  {
                    icon: Award,
                    title: "We've done this before",
                    description: "Our proven strategies are built on real results from businesses just like yours—not generic best practices."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isWhyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isWhyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTM5NzQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team meeting with industry materials"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/40 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-4xl font-bold text-[#00B4D8] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  20+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-4xl font-bold text-[#FF6B35] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  18
                </div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies by Industry */}
      <section ref={caseStudiesRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Case Studies by Industry
            </h2>
            <p className="text-xl text-gray-600">
              Real results from businesses across diverse sectors
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-6 -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isCaseStudiesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-80"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#00B4D8]">
                    <CardContent className="p-6">
                      <Badge className="bg-[#E8F8FC] text-[#00B4D8] border-[#00B4D8] mb-4">
                        {study.industry}
                      </Badge>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">
                        {study.company}
                      </h3>
                      <div className="text-3xl font-bold text-[#FF6B35] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {study.result}
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {study.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                      >
                        <Link to="/case-studies">
                          View Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-[#00B4D8] hover:bg-[#00B4D8]/90 text-white">
              <Link to="/case-studies" className="flex items-center gap-2">
                View All Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 bg-[#1E3A5F] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
              We&apos;ve helped businesses in virtually every sector. If you have a unique challenge, we love a good puzzle.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-10 py-6 mb-12"
            >
              <Link to="/contact-us" className="flex items-center gap-2">
                Tell Us About Your Business
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>20+ Years Experience</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>1,000+ Projects</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>$500M+ Value Created</span>
              </div>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>31 States Served</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
