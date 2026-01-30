import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  ArrowRight,
  Users,
  FileText,
  Layers,
  Building2,
  MapPin,
  Camera,
  Calendar,
  Briefcase,
  Globe,
  Search,
  Star,
  Heart,
  Target,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Landmark,
  Store,
  Utensils,
  Hotel,
  TreePine,
  Award,
  Wrench,
  Shield,
  Rocket,
  DollarSign,
  ChevronRight,
} from 'lucide-react@0.487.0';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

export default function DecaturChamberCaseStudyPage() {
  const solutions = [
    {
      title: 'Business Hub',
      icon: Building2,
      description: "The central resource for Decatur's business community:",
      items: [
        'Comprehensive member directory with search and filter functionality',
        'Business profiles with contact info, descriptions, and links',
        'Member spotlight features showcasing local success stories',
        'Business resources, guides, and how-to content',
        'Networking event calendar and registration',
        'New business welcome information',
        'Relocation resources for businesses considering Decatur',
        'Chamber membership benefits and signup',
        'Local economic data and market information',
        'Job board connecting employers with talent',
      ],
    },
    {
      title: 'Tourism Gateway',
      icon: MapPin,
      description: 'The digital welcome center for visitors to Wise County:',
      items: [
        'Visitor information center online with trip planning tools',
        'Local attractions guide with descriptions and directions',
        'Restaurant and dining guide organized by cuisine and location',
        'Shopping guide featuring local boutiques and stores',
        'Accommodation options for overnight visitors',
        'Event calendar highlighting festivals, markets, and community events',
        'Outdoor recreation information (parks, trails, lakes)',
        'Day trip itineraries and suggested routes',
        "Photo galleries showcasing Decatur's charm",
        'Directions and maps for easy navigation',
      ],
    },
    {
      title: 'Historical Archive',
      icon: BookOpen,
      description: "Preserving and sharing Decatur's rich past:",
      items: [
        'Digitized local history documents and records',
        'Historical photo galleries with context and stories',
        "Timeline of Decatur's development from founding to present",
        'Notable figures and families in local history',
        'Historic buildings and landmarks guide',
        'Community stories and oral histories preserved',
        'Historical society information and resources',
        'Educational resources for schools and researchers',
        'Preservation efforts and how to contribute',
        'Connection between past and present Decatur',
      ],
    },
    {
      title: 'SEO & Content Strategy',
      icon: Search,
      description: 'Making Decatur discoverable online:',
      items: [
        '80+ pages of optimized content covering every aspect of Decatur',
        'Local SEO targeting "Decatur Texas" and related searches',
        'Content organized for both users and search engines',
        'Regular updates keeping content fresh and relevant',
        'Blog posts highlighting events, businesses, and community news',
        'Meta optimization for search visibility',
        'Mobile-responsive design for on-the-go access',
        'Fast load times for better user experience',
        'Analytics tracking to understand visitor behavior',
        'Ongoing optimization based on performance data',
      ],
    },
    {
      title: 'Event Promotion & Calendar',
      icon: Calendar,
      description: 'Keeping the community connected:',
      items: [
        'Comprehensive event calendar with easy filtering',
        'Event submission system for members and community',
        'Featured events highlighting major happenings',
        "Integration with business directory (who's hosting what)",
        'Social sharing capabilities for event promotion',
        'Email newsletter integration',
        'Seasonal event guides (holidays, festivals, etc.)',
        'Recurring event management',
        'Event category organization',
        'Past event archives with photos and recaps',
      ],
    },
    {
      title: 'Member Value & Engagement',
      icon: Award,
      description: 'Making Chamber membership worth it:',
      items: [
        'Member directory giving businesses visibility',
        'Enhanced listings for premium members',
        'Member news and announcement features',
        'Networking event promotion',
        'Member-only resources and content',
        'Testimonials and success story features',
        'Referral system between members',
        'Analytics showing members their profile views',
        'Easy profile update system',
        'Integration with Chamber communications',
      ],
    },
  ];

  const contentArchitecture = [
    {
      category: 'FOR BUSINESSES',
      count: '25+',
      icon: Briefcase,
      pages: [
        'Member Directory',
        'Join the Chamber',
        'Membership Benefits',
        'Business Resources',
        'Starting a Business in Decatur',
        'Relocating Your Business',
        'Economic Development',
        'Networking Events',
        'Business Spotlights',
        'Job Board',
        'And more...',
      ],
    },
    {
      category: 'FOR TOURISTS',
      count: '25+',
      icon: MapPin,
      pages: [
        'Plan Your Visit',
        'Things to Do',
        'Where to Eat',
        'Where to Shop',
        'Where to Stay',
        'Events Calendar',
        'Outdoor Recreation',
        'Day Trip Ideas',
        'Getting Here',
        'Visitor FAQ',
        'And more...',
      ],
    },
    {
      category: 'FOR HISTORY & COMMUNITY',
      count: '20+',
      icon: BookOpen,
      pages: [
        'Our History',
        'Historic Timeline',
        'Photo Archives',
        'Notable Figures',
        'Historic Buildings',
        'Community Stories',
        'About Decatur',
        'About Wise County',
        'Local Government',
        'Community Resources',
        'And more...',
      ],
    },
    {
      category: 'SUPPORTING PAGES',
      count: '10+',
      icon: FileText,
      pages: [
        'About the Chamber',
        'Chamber Leadership',
        'Contact Us',
        'News & Updates',
        'Newsletter Signup',
        'Sponsors & Partners',
        'And more...',
      ],
    },
  ];

  const servicesUsed = [
    { name: 'Custom Website Design', icon: Globe },
    { name: 'Content Strategy & Writing', icon: FileText },
    { name: 'Information Architecture', icon: Layers },
    { name: 'Local SEO', icon: Search },
    { name: 'Mobile Optimization', icon: Target },
    { name: 'Directory Functionality', icon: Building2 },
    { name: 'Event Calendar System', icon: Calendar },
    { name: 'Historical Digitization', icon: BookOpen },
    { name: 'Photography', icon: Camera },
    { name: 'Ongoing Maintenance', icon: TrendingUp },
  ];

  const relatedCaseStudies = [
    {
      title: 'Foursquare Healthcare: Digital Empire',
      industry: 'Healthcare',
      metric: '$400M+',
      description: 'Revenue Generated',
      link: '/case-studies/foursquare-healthcare',
      icon: Heart,
    },
    {
      title: "Chenevert's Plumbing: Transformation",
      industry: 'Home Services',
      metric: '83%',
      description: 'Revenue Growth',
      link: '/case-studies/chenevert',
      icon: Wrench,
    },
    {
      title: 'CASA: Digital Rescue',
      industry: 'Nonprofit',
      metric: '100%',
      description: 'Mission Restored',
      link: '/case-studies',
      icon: Heart,
    },
  ];

  return (
    <>
      <SEO
        title="Decatur Chamber of Commerce Case Study | Website & Digital Hub | ThinkMents"
        description="How ThinkMents created a comprehensive digital hub for Decatur Chamber of Commerce, connecting businesses and growing community engagement."
        url="/case-studies/decatur-chamber"
        type="article"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#00B4D8]">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/case-studies" className="hover:text-[#00B4D8]">
              Case Studies
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1E3A5F] font-medium">Decatur Chamber of Commerce</span>
          </nav>
        </div>
      </div>

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative py-40 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
              alt="Downtown Decatur Texas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Badge className="bg-gradient-to-r from-primary to-accent text-white text-lg px-6 py-2">
                  Nonprofit / Economic Development
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Building the Digital Hub for an{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Entire City's Business Community
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                How we created a single platform that serves local businesses, attracts tourists,
                and preserves Decatur's rich history
              </motion.p>

              <motion.div
                className="text-lg md:text-xl text-white/80 drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                80+ Pages | 1,650 Monthly Users | 3 Functions in 1 Platform
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { stat: '80+', label: 'Optimized Content Pages', icon: FileText },
                { stat: '1,650', label: 'Average Monthly Users', icon: Users },
                { stat: '3-in-1', label: 'Business Hub, Tourism, History', icon: Layers },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl mb-2">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {item.stat}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-lg">{item.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Paragraph */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl leading-relaxed text-center text-muted-foreground">
                  The Decatur Chamber of Commerce is more than a business organization—it's the
                  heartbeat of commerce in Wise County, Texas. But their digital presence wasn't
                  keeping pace with the community's growth. They didn't just need a website; they
                  needed a platform that could serve multiple audiences simultaneously: local
                  businesses seeking resources, tourists planning visits, residents exploring their
                  community, and history enthusiasts preserving the past. ThinkMents built exactly
                  that—a{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    comprehensive digital hub
                  </span>{' '}
                  that has become the go-to resource for everything Decatur.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl mb-8">
                  The Challenge:{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    One Website, Many Audiences
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="bg-gradient-to-br from-muted/30 to-background border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-lg mb-6 leading-relaxed">
                      The Decatur Chamber of Commerce faced a unique challenge: they needed to serve
                      vastly different audiences with completely different needs, all through a
                      single digital platform.
                    </p>

                    <p className="text-lg mb-4 leading-relaxed">Their audiences included:</p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Local business owners seeking resources, networking, and support',
                        'Prospective businesses researching the area for potential relocation',
                        'Chamber members wanting visibility and connection',
                        'Tourists planning visits to Wise County',
                        'Residents looking for local events and information',
                        "History enthusiasts interested in Decatur's rich past",
                        'Job seekers exploring opportunities in the area',
                        'Event planners looking for venues and services',
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <p className="text-lg mb-4 leading-relaxed">The existing problems:</p>
                    <ul className="space-y-4">
                      {[
                        "Outdated website that didn't reflect the community's growth and vitality",
                        'No central hub for business resources and member directory',
                        'Tourist information scattered across multiple sources (or nonexistent)',
                        'Rich local history with no digital archive or preservation',
                        'Chamber members not getting the visibility they deserved for their dues',
                        'Difficult to update, leading to stale content',
                        'Poor mobile experience for visitors researching on the go',
                        'No SEO strategy, making Decatur invisible in searches',
                        'Event information hard to find and poorly promoted',
                        'No integration between business directory, events, and community info',
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-full flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-lg text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-lg italic leading-relaxed">
                        "The Chamber needed to answer the question: 'What is Decatur?' for business
                        owners, tourists, and residents alike—all in one place."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-muted/30 to-background border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-lg leading-relaxed">
                      The stakes were real: an ineffective Chamber website meant businesses didn't
                      see value in membership, tourists went elsewhere, and{' '}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Decatur's story wasn't being told
                      </span>
                      .
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  The Solution:{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    A Three-in-One Digital Platform
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  ThinkMents built a comprehensive website that serves as three platforms in one: a
                  Business Hub, a Tourism Gateway, and a Historical Archive. Each section serves its
                  audience while contributing to a unified picture of Decatur.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group border-primary/20">
                      <CardHeader>
                        <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {solution.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{solution.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {solution.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <div className="bg-gradient-to-r from-primary to-accent p-0.5 rounded-full flex-shrink-0 mt-1.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                              </div>
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Content Architecture */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    80+ Pages of Purpose-Built Content
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  The website structure organized by audience
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contentArchitecture.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                            <section.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {section.category}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">{section.count} pages</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {section.pages.map((page, pageIndex) => (
                            <li key={pageIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{page}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    How We Built a Community Platform
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    phase: 'Phase 1',
                    title: 'Discovery & Strategy',
                    icon: Lightbulb,
                    items: [
                      'Stakeholder interviews with Chamber leadership and board',
                      'Member surveys understanding business needs',
                      'Audience research identifying all user groups',
                      'Competitive analysis of other Chamber websites',
                      'Content audit of existing materials',
                      'Information architecture planning',
                      'SEO keyword research for Decatur-related searches',
                    ],
                  },
                  {
                    phase: 'Phase 2',
                    title: 'Design & Structure',
                    icon: Layers,
                    items: [
                      'Wireframes for all major page types',
                      "Visual design matching Decatur's character",
                      'Navigation system serving multiple audiences',
                      'Mobile-first responsive design',
                      'Member directory functionality planning',
                      'Event calendar system selection',
                      'Content management system setup',
                    ],
                  },
                  {
                    phase: 'Phase 3',
                    title: 'Content Development',
                    icon: FileText,
                    items: [
                      '80+ pages of original content created',
                      'Historical research and fact-checking',
                      'Photo collection and optimization',
                      'Business directory population',
                      'Event calendar setup',
                      'SEO optimization for all pages',
                      'Internal linking strategy',
                    ],
                  },
                  {
                    phase: 'Phase 4',
                    title: 'Launch & Training',
                    icon: Rocket,
                    items: [
                      'Website launch and promotion',
                      'Staff training on content updates',
                      'Member onboarding for directory',
                      'Analytics setup and baseline establishment',
                      'Initial performance monitoring',
                      'Feedback collection and quick fixes',
                    ],
                  },
                  {
                    phase: 'Phase 5',
                    title: 'Ongoing Optimization',
                    icon: TrendingUp,
                    items: [
                      'Regular content updates and additions',
                      'SEO refinement based on performance',
                      'New feature additions as needed',
                      'Event promotion support',
                      'Analytics review and reporting',
                      'Continuous improvement',
                    ],
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-lg">
                            <phase.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{phase.phase}</p>
                            <CardTitle className="text-2xl">{phase.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Results Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  The Results:{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    A Community Connected
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  { stat: '1,650', label: 'Average monthly users engaging with content' },
                  { stat: '80+', label: 'Content pages serving multiple audiences' },
                  { stat: '3', label: 'Major functions unified (business, tourism, history)' },
                  { stat: '100%', label: 'Active Chamber members showcased in directory' },
                  { stat: 'Years', label: 'Of historical archive preserved digitally' },
                  { stat: '24/7', label: 'Access to community information and resources' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center hover:shadow-xl transition-all duration-300 border-primary/20">
                      <CardContent className="p-6">
                        <div className="text-4xl mb-2">
                          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {item.stat}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl mb-6 text-center">Impact breakdown:</h3>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    title: 'FOR BUSINESSES',
                    icon: Briefcase,
                    items: [
                      'Every Chamber member now has online visibility',
                      'Business resources centralized and accessible',
                      'Networking events better promoted and attended',
                      'New businesses can research Decatur before relocating',
                      'Job seekers can find local opportunities',
                    ],
                  },
                  {
                    title: 'FOR TOURISM',
                    icon: MapPin,
                    items: [
                      'Visitors can plan complete trips online',
                      'Local restaurants and shops get free promotion',
                      'Events reach wider audiences',
                      'Decatur competes with larger cities for tourism dollars',
                      'Positive first impression for potential visitors',
                    ],
                  },
                  {
                    title: 'FOR THE COMMUNITY',
                    icon: Heart,
                    items: [
                      'Local history preserved for future generations',
                      "Residents discover events and businesses they didn't know existed",
                      'Community pride strengthened through storytelling',
                      'Central source of truth for all things Decatur',
                      'Foundation for future growth and development',
                    ],
                  },
                ].map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                            <impact.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{impact.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {impact.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Used Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Services Used
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {servicesUsed.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm leading-tight">{service.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why It Worked Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Why This Platform Succeeded
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: '1',
                    title: 'One platform, multiple purposes',
                    description:
                      'Instead of building separate websites for business, tourism, and history, we created an integrated platform where each section reinforces the others. A tourist exploring "things to do" might discover a Chamber member\'s business. A business owner researching Decatur finds the historical context that makes the city special.',
                    icon: Layers,
                  },
                  {
                    number: '2',
                    title: 'Content depth that builds authority',
                    description:
                      "With 80+ pages of quality content, the website became the definitive resource for all things Decatur. This depth isn't just good for SEO—it serves real users with real questions and establishes the Chamber as the authority on the community.",
                    icon: FileText,
                  },
                  {
                    number: '3',
                    title: 'Built for sustainability',
                    description:
                      'The content management system makes updates easy for Chamber staff. The structure is flexible enough to grow. The foundation supports whatever Decatur becomes in the future.',
                    icon: Shield,
                  },
                ].map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group border-primary/20">
                      <CardContent className="p-8">
                        <div className="relative mb-6">
                          <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <factor.icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                            {factor.number}
                          </div>
                        </div>
                        <h3 className="text-xl mb-4 text-center">{factor.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-center text-sm">
                          {factor.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Community Impact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  More Than a Website:{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    A Community Asset
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  What this platform means for Decatur
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: 'For Chamber Members',
                    quote:
                      "Before, our membership was about networking events and a decal for the window. Now, every member has real online visibility. That's tangible value that justifies their dues.",
                  },
                  {
                    icon: Store,
                    title: 'For Local Businesses',
                    quote:
                      "When someone searches for restaurants in Decatur or shops in Wise County, our members show up. We're helping local businesses compete with chains and online retailers.",
                  },
                  {
                    icon: MapPin,
                    title: 'For Tourism',
                    quote:
                      "Decatur used to be a drive-through town on the way to somewhere else. Now visitors can see we're a destination worth stopping for—or planning a whole trip around.",
                  },
                  {
                    icon: BookOpen,
                    title: 'For History',
                    quote:
                      "We have stories and photos that would have been lost forever. Now they're preserved digitally, accessible to anyone, and connected to the living community.",
                  },
                  {
                    icon: TrendingUp,
                    title: 'For Economic Development',
                    quote:
                      "When a business considers relocating to Decatur, the website tells our story better than any brochure. It shows we're a real, vibrant community that supports businesses.",
                  },
                ].map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg flex-shrink-0">
                            <impact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg mb-3 group-hover:text-primary transition-colors">
                              {impact.title}
                            </h3>
                            <p className="text-sm text-muted-foreground italic leading-relaxed">
                              "{impact.quote}"
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/30">
                  <CardContent className="p-12">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                        <Landmark className="w-10 h-10 text-white" />
                      </div>

                      <blockquote className="text-2xl md:text-3xl mb-8 italic leading-relaxed">
                        "ThinkMents understood that we weren't just building a website—we were
                        building a digital home for our entire community. The platform has exceeded
                        our expectations and become essential to how we serve our members and
                        promote Decatur."
                      </blockquote>

                      <div className="flex items-center justify-center space-x-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                        <div className="text-center">
                          <p className="text-lg">Decatur Chamber of Commerce Leadership</p>
                        </div>
                        <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Looking Forward Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Growing with Decatur
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-lg mb-6 leading-relaxed">The platform is built to evolve:</p>
                    <ul className="space-y-3">
                      {[
                        'New businesses added to directory as they join',
                        'Events updated as the calendar fills',
                        'Historical content expanded as archives are digitized',
                        'New features added as community needs emerge',
                        'SEO refined as search patterns evolve',
                        'Design refreshed as trends change',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg mt-6 leading-relaxed text-center">
                      The website isn't a finished product—it's a{' '}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        living platform that grows with Decatur
                      </span>
                      .
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Case Studies Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    More Success Stories
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedCaseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={study.link} className="block h-full">
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-lg w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <study.icon className="w-8 h-8 text-white" />
                          </div>
                          <Badge className="mb-3">{study.industry}</Badge>
                          <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                            {study.title}
                          </h3>
                          <div className="text-center pt-4 border-t">
                            <div className="text-3xl mb-1">
                              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {study.metric}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Need a Platform That Serves Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Whole Community?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're a Chamber of Commerce, economic development organization, or
                community group, we can build a digital hub that brings everyone together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent text-white"
                  >
                    <Link to="/get-a-quote" className="flex items-center space-x-2">
                      <span>Start Your Project</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/case-studies">View More Case Studies</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Callout */}
        <section className="py-12 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground">
                ThinkMents is based in Decatur, Texas—and we're proud to serve the community we call
                home. We bring the same dedication to every client, whether they're down the street
                or across the state.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
