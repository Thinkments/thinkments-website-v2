import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  ArrowRight,
  Shield,
  Mail,
  MapPin,
  CheckCircle,
  Heart,
  Users,
  AlertTriangle,
  Clock,
  Wrench,
  Building2,
  Lock,
  Server,
  DollarSign,
  FileText,
  Globe,
  Zap,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  UserPlus,
  HeartHandshake,
  Scale,
  ChevronRight,
} from 'lucide-react@0.487.0';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SEO from '../SEO';

export default function CASACaseStudyPage() {
  const solutions = [
    {
      title: 'Complete Website Rebuild',
      icon: Globe,
      description: 'Starting fresh with a site that actually works:',
      items: [
        'Modern, fast-loading architecture built for reliability',
        'Mobile-responsive design for users on any device',
        'Clear volunteer recruitment pathway with easy signup',
        'Prominent donation functionality that actually works',
        'Staff-friendly content management system for easy updates',
        'Professional design reflecting the seriousness of the mission',
        "Compelling content explaining CASA's work and impact",
        'Volunteer stories and testimonials building trust',
        'Event calendar for training sessions and fundraisers',
        'Resource pages for families, volunteers, and supporters',
      ],
    },
    {
      title: 'Secure Email Migration',
      icon: Mail,
      description: 'Protecting critical communications:',
      items: [
        'Full migration from unreliable server to Google Workspace',
        'All historical emails preserved and transferred',
        'Professional email addresses maintained (name@casawise.org)',
        "Enhanced security with Google's protection",
        'Reliable delivery - emails actually reach recipients',
        'Mobile access for staff on the go',
        'Collaboration tools (Drive, Calendar, Meet) included',
        'Admin controls for organization management',
        'Spam and malware protection',
        '99.9% uptime guarantee from Google',
      ],
    },
    {
      title: 'Local Texas Support',
      icon: MapPin,
      description: 'A partner they can actually reach:',
      items: [
        'Based in Decatur, not California - same time zone, same community',
        'Phone calls answered, emails returned promptly',
        'Quick response for urgent issues',
        'Face-to-face meetings when needed',
        'Understanding of local community and context',
        'Proactive communication, not reactive silence',
        'Training for staff on website updates',
        'Ongoing relationship, not transactional vendor',
      ],
    },
    {
      title: 'Security & Reliability',
      icon: Shield,
      description: 'Peace of mind for critical operations:',
      items: [
        'Modern, secure hosting infrastructure',
        'SSL certificate for encrypted connections',
        'Regular security updates and monitoring',
        'Automated backups CASA controls',
        'Uptime monitoring with alerts',
        'Fast load times for better user experience',
        'Protection against common vulnerabilities',
        'Disaster recovery capability',
      ],
    },
    {
      title: 'Volunteer Recruitment Optimization',
      icon: UserPlus,
      description: 'Making it easy to say "yes":',
      items: [
        'Clear explanation of what volunteers do',
        'Step-by-step process for becoming an advocate',
        'Online application and inquiry forms that work',
        'FAQ addressing common questions and concerns',
        'Training information and schedule',
        'Current volunteer stories and testimonials',
        'Time commitment clearly explained',
        'Impact stories showing the difference volunteers make',
      ],
    },
    {
      title: 'Donor Experience',
      icon: DollarSign,
      description: 'Removing friction from giving:',
      items: [
        'Prominent, visible donation buttons',
        'Simple, secure donation process',
        'Multiple giving options (one-time, recurring, memorial)',
        'Clear explanation of how funds are used',
        'Impact statements connecting dollars to outcomes',
        'Donor recognition (with permission)',
        'Easy access to tax receipt information',
        'Event and campaign donation pages',
      ],
    },
  ];

  const servicesUsed = [
    { name: 'Website Design & Development', icon: Globe },
    { name: 'Website Hosting', icon: Server },
    { name: 'Email Migration', icon: Mail },
    { name: 'Google Workspace Setup', icon: Mail },
    { name: 'Security Implementation', icon: Shield },
    { name: 'Content Migration', icon: FileText },
    { name: 'Form Development', icon: Target },
    { name: 'Ongoing Support & Maintenance', icon: Wrench },
    { name: 'Staff Training', icon: Users },
    { name: 'Domain Management', icon: Globe },
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
      title: 'Decatur Chamber: Community Hub',
      industry: 'Nonprofit',
      metric: '80+',
      description: 'Pages Built',
      link: '/case-studies/decatur-chamber',
      icon: Building2,
    },
  ];

  return (
    <>
      <SEO
        title="CASA of Wise County Case Study | Website Rebuild Success | ThinkMents"
        description="How ThinkMents rebuilt CASA of Wise County's website and email system, transforming their digital presence and volunteer recruitment."
        url="/case-studies/casa-wise-county"
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
            <span className="text-[#1E3A5F] font-medium">CASA of Wise County</span>
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
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=1080&fit=crop"
              alt="Child Advocacy and Support"
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
                  Nonprofit / Child Advocacy
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Saving a Child Advocacy Nonprofit from{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Digital Disaster
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                When an unresponsive web company left CASA stranded with a broken website and
                at-risk email, ThinkMents stepped in to rebuild their digital presence and protect
                their mission
              </motion.p>

              <motion.div
                className="text-lg md:text-xl text-white/80 drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Complete Rebuild | Secure Migration | Local Support | Mission Protected
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { stat: '100%', label: 'Uptime Restored', icon: CheckCircle },
                { stat: 'Secure', label: 'Email Migration', icon: Shield },
                { stat: 'Local', label: 'Texas-Based Support', icon: MapPin },
                { stat: 'Zero', label: 'Downtime Since Launch', icon: Zap },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl mb-2">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {item.stat}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
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
                  CASA—Court Appointed Special Advocates—fights for the most vulnerable children in
                  our community: those who have been abused, neglected, or abandoned. Their
                  volunteer advocates become the voice for children in court who have no one else.
                  But when CASA's California-based web company became unresponsive and left them
                  with a slow, broken website and at-risk email system, their ability to recruit
                  volunteers and connect with donors was in jeopardy. Every day the website was down
                  or broken,{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    children who needed advocates weren't getting them
                  </span>
                  . ThinkMents executed a complete digital rescue—rebuilding their web presence,
                  migrating their email to a secure platform, and providing the local support they
                  should have had all along.
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
                    Stranded by a Distant Vendor
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
                      CASA of Wise and Jack Counties had trusted a California-based web company to
                      manage their digital presence. That trust was broken.
                    </p>

                    <p className="text-lg mb-4 leading-relaxed">The problems they faced:</p>
                    <ul className="space-y-4">
                      {[
                        {
                          title: 'Unresponsive vendor',
                          desc: 'Emails and calls went unanswered for weeks',
                        },
                        {
                          title: 'Slow, broken website',
                          desc: "Pages took forever to load, forms didn't work, content was outdated",
                        },
                        {
                          title: 'No local support',
                          desc: 'When issues arose, there was no one to call who could help quickly',
                        },
                        {
                          title: 'Email at risk',
                          desc: 'Their email system was hosted on the same unreliable server',
                        },
                        {
                          title: 'Security concerns',
                          desc: 'Outdated platform with unknown vulnerabilities',
                        },
                        {
                          title: 'No backups they controlled',
                          desc: 'If something went wrong, they had no safety net',
                        },
                        {
                          title: 'Difficult to update',
                          desc: "Staff couldn't make simple changes without vendor help (who wouldn't respond)",
                        },
                        {
                          title: 'Unprofessional appearance',
                          desc: 'The broken site reflected poorly on the organization',
                        },
                        {
                          title: 'Lost opportunities',
                          desc: 'Potential volunteers and donors left the site frustrated',
                        },
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
                          <div>
                            <span className="text-lg">
                              <strong>{item.title}</strong> - {item.desc}
                            </span>
                          </div>
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
                <Card className="bg-gradient-to-br from-muted/30 to-background border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">The human cost was real:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Volunteers couldn't sign up easily - fewer advocates for children",
                        "Donors couldn't give easily - less funding for the mission",
                        "Families couldn't find resources - people in crisis hitting dead ends",
                        'Staff wasting hours - trying to reach unresponsive vendor instead of serving children',
                        'Credibility damaged - professional organizations saw a broken website',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-lg italic leading-relaxed">
                        "Every minute the website was slow or broken, potential volunteers and
                        donors went elsewhere—and children who needed advocates didn't get them."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-muted/30 to-background border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-xl leading-relaxed text-center">
                      CASA couldn't wait for the California company to maybe respond someday.{' '}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        They needed help now.
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Stakes Section */}
        <section className="py-20">
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
                  Why This Mattered:{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Children Were Counting on Them
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
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Understanding CASA's mission</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl mb-4">What CASA does:</h3>
                      <p className="text-lg mb-4 leading-relaxed text-muted-foreground">
                        CASA volunteers are appointed by judges to advocate for abused and neglected
                        children in the court system. These children have been removed from their
                        homes and are navigating a confusing, frightening process. CASA volunteers:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Get to know the child personally',
                          "Research the child's situation thoroughly",
                          "Advocate for the child's best interests in court",
                          "Stay with the case until it's resolved (often years)",
                          'Provide consistency when everything else is chaos',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl mb-4">Why digital presence matters:</h3>
                      <ul className="space-y-2">
                        {[
                          {
                            title: 'Volunteer recruitment',
                            desc: 'Most volunteers discover CASA online',
                          },
                          {
                            title: 'Donor engagement',
                            desc: 'Fundraising increasingly happens digitally',
                          },
                          {
                            title: 'Community awareness',
                            desc: "People can't support what they don't know exists",
                          },
                          {
                            title: 'Resource access',
                            desc: 'Families in crisis search online for help',
                          },
                          {
                            title: 'Professional credibility',
                            desc: 'Courts, schools, and agencies check the website',
                          },
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="bg-gradient-to-r from-primary to-accent p-0.5 rounded-full flex-shrink-0 mt-1.5">
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                            <span className="text-muted-foreground">
                              <strong>{item.title}</strong> - {item.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
                  <CardContent className="p-8">
                    <div className="text-center space-y-4">
                      <p className="text-2xl leading-relaxed">The equation was simple:</p>
                      <p className="text-xl leading-relaxed">
                        Broken website = Fewer volunteers = Fewer advocates ={' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          Children without a voice
                        </span>
                      </p>
                      <p className="text-lg text-muted-foreground italic">
                        This wasn't about marketing metrics. It was about children.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
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
                  The Solution:{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Complete Digital Rescue
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  ThinkMents treated this as the emergency it was. We executed a full digital rescue
                  covering every aspect of CASA's online presence.
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

        {/* The Migration Process */}
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
                    How We Executed the Rescue
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  This wasn't a leisurely website redesign. It was a rescue operation.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    week: 'Week 1',
                    title: 'Emergency Assessment',
                    icon: AlertTriangle,
                    items: [
                      'Full audit of existing website and hosting',
                      'Email system evaluation and risk assessment',
                      'Inventory of all content that needed to be preserved',
                      'Identification of critical functionality (donations, forms, etc.)',
                      'Communication with unresponsive vendor (documented attempts)',
                      'Emergency plan development',
                    ],
                  },
                  {
                    week: 'Week 2',
                    title: 'Foundation',
                    icon: Server,
                    items: [
                      'New hosting environment established',
                      'Google Workspace account created',
                      'Domain transfer initiated',
                      'Email migration planned and tested',
                      'Website architecture designed',
                      'Content migration begun',
                    ],
                  },
                  {
                    week: 'Week 3',
                    title: 'Build & Migrate',
                    icon: Wrench,
                    items: [
                      'New website built with all critical pages',
                      'Content transferred and updated',
                      'Forms created and tested',
                      'Email migration executed (weekend to minimize disruption)',
                      'Staff email setup on new system',
                      'DNS cutover planned',
                    ],
                  },
                  {
                    week: 'Week 4',
                    title: 'Launch & Stabilize',
                    icon: Zap,
                    items: [
                      'New website goes live',
                      'Email fully operational on Google Workspace',
                      'Staff training on new systems',
                      'Testing and bug fixes',
                      'Old hosting terminated',
                      'Monitoring systems active',
                    ],
                  },
                  {
                    week: 'Ongoing',
                    title: 'Support & Optimization',
                    icon: TrendingUp,
                    items: [
                      'Quick response to any issues',
                      'Content updates as needed',
                      'Security monitoring continues',
                      'Relationship maintained',
                      'Site improvements over time',
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
                            <p className="text-sm text-muted-foreground">{phase.week}</p>
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
                    Mission Protected
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
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-primary to-accent text-white">
                            <th className="text-left p-6 text-lg">Aspect</th>
                            <th className="text-center p-6 text-lg">Before ThinkMents</th>
                            <th className="text-center p-6 text-lg">After ThinkMents</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              aspect: 'Website Speed',
                              before: 'Extremely slow',
                              after: 'Fast, modern',
                            },
                            {
                              aspect: 'Uptime',
                              before: 'Unreliable, frequent issues',
                              after: '100% uptime',
                            },
                            {
                              aspect: 'Email Reliability',
                              before: 'At-risk, same bad server',
                              after: 'Google Workspace secure',
                            },
                            {
                              aspect: 'Vendor Response',
                              before: 'Weeks or never',
                              after: 'Same day',
                            },
                            {
                              aspect: 'Location',
                              before: 'California (different time zone)',
                              after: 'Decatur, Texas (local)',
                            },
                            {
                              aspect: 'Updates',
                              before: 'Nearly impossible',
                              after: 'Staff can do themselves',
                            },
                            {
                              aspect: 'Security',
                              before: 'Unknown, outdated',
                              after: 'Modern, monitored',
                            },
                            {
                              aspect: 'Backups',
                              before: 'None they controlled',
                              after: 'Automated, accessible',
                            },
                            {
                              aspect: 'Volunteer Signups',
                              before: 'Broken forms',
                              after: 'Smooth process',
                            },
                            {
                              aspect: 'Donations',
                              before: 'Friction-filled',
                              after: 'Simple and working',
                            },
                          ].map((row, index) => (
                            <motion.tr
                              key={index}
                              className="border-b border-border hover:bg-muted/50 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <td className="p-6 text-lg">{row.aspect}</td>
                              <td className="p-6 text-center text-muted-foreground">
                                {row.before}
                              </td>
                              <td className="p-6 text-center">
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                  {row.after}
                                </span>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">The real results:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        'Zero downtime since migration',
                        '100% email delivery reliability',
                        'Local support available when needed',
                        'Staff empowered to update content',
                        'Professional appearance restored',
                        'Volunteer pipeline functioning',
                        'Donation process working smoothly',
                        'Peace of mind for leadership',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
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
                    Why This Rescue Succeeded
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: '1',
                    title: 'Urgency matched the situation',
                    description:
                      "We didn't treat this as a normal project with a leisurely timeline. CASA's mission was being compromised every day. We moved fast because children were counting on it.",
                    icon: Zap,
                  },
                  {
                    number: '2',
                    title: 'Complete solution, not a band-aid',
                    description:
                      "We didn't just fix the website and leave the vulnerable email system in place. We addressed everything—web, email, hosting, security, support—so CASA wouldn't face this situation again.",
                    icon: Shield,
                  },
                  {
                    number: '3',
                    title: 'Local partnership over distant vendor',
                    description:
                      "The California company saw CASA as one small account among many. We see them as neighbors serving our community's children. That difference matters in how we respond, how we communicate, and how we care about the outcome.",
                    icon: MapPin,
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

        {/* The Bigger Picture Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Why Nonprofits Deserve Better
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/30">
                    <CardHeader>
                      <CardTitle className="text-xl">CASA's situation isn't unique</CardTitle>
                      <p className="text-sm text-muted-foreground">Too many nonprofits are:</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          'Sold cheap websites by distant vendors who disappear',
                          'Left with no support when things break',
                          'Stuck with outdated, insecure systems',
                          'Unable to update their own content',
                          "Paying for services they're not receiving",
                          'Damaging their mission with poor digital presence',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-xl">Nonprofits deserve partners who:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          'Understand their mission matters',
                          'Respond when called',
                          'Build systems that actually work',
                          'Provide training and empowerment',
                          'Stay engaged for the long term',
                          'Treat their work as important (because it is)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-muted/30 to-background border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-xl leading-relaxed text-center">
                      Nonprofits exist to serve communities, not to manage IT nightmares.{' '}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        This is why ThinkMents prioritizes nonprofit clients. The work they do
                        matters too much to be undermined by bad technology.
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Mission Impact Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    What This Rescue Means for Children
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">Connecting the dots</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: UserPlus,
                    flow: 'Working website → More visitors → More volunteer signups → More trained advocates → More children with someone fighting for them',
                  },
                  {
                    icon: DollarSign,
                    flow: 'Working donation system → Easier giving → More funds raised → More resources for training and support → Stronger advocacy program',
                  },
                  {
                    icon: Award,
                    flow: 'Professional appearance → Greater credibility → Better partnerships with courts and agencies → More effective advocacy → Better outcomes for children',
                  },
                  {
                    icon: Mail,
                    flow: "Reliable email → Staff communication works → Volunteers stay informed → Cases managed effectively → Children's needs addressed",
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
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {impact.flow}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-lg leading-relaxed text-center">
                      Every technical fix we made connects back to a child in the court system who
                      now has a better chance at a{' '}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        safe, permanent home
                      </span>
                      .
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Volunteer Impact Story */}
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
                    What CASA Volunteers Do
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  To understand why this mattered, understand what CASA volunteers do
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl mb-4">Meet Sarah (composite story):</h3>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p>
                        Sarah is 8 years old. She was removed from her home after neighbors reported
                        suspected abuse. She's confused, scared, and has been moved to a foster home
                        with strangers. She doesn't understand why she can't go home or what's going
                        to happen to her.
                      </p>
                      <p>
                        Her CASA volunteer, appointed by the judge, visits her regularly. Talks to
                        her teachers, her foster parents, her therapist. Reviews her case file.
                        Attends every court hearing. Speaks up for what Sarah needs—not what's
                        convenient for the system, but what's actually best for this specific child.
                      </p>
                      <p>
                        Over 18 months, the CASA volunteer is the one consistent adult in Sarah's
                        life. When Sarah is finally placed with a loving adoptive family, her CASA
                        volunteer is there to celebrate.
                      </p>
                      <p className="text-xl text-center pt-4">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          That's what CASA does. And that's why their website and email needed to
                          work.
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                        <Scale className="w-10 h-10 text-white" />
                      </div>

                      <blockquote className="text-2xl md:text-3xl mb-8 italic leading-relaxed">
                        "When our previous web company stopped responding, we didn't know what to
                        do. ThinkMents stepped in, moved quickly, and gave us a website and email
                        system we can actually rely on. More importantly, they're here when we need
                        them. That peace of mind is priceless for a small nonprofit trying to serve
                        vulnerable children."
                      </blockquote>

                      <div className="flex items-center justify-center space-x-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                        <div className="text-center">
                          <p className="text-lg">CASA of Wise and Jack Counties Leadership</p>
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

        {/* For Other Nonprofits Section */}
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
                    Is Your Nonprofit Struggling with Its Digital Presence?
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Warning signs you might need a rescue:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Your web company takes weeks to respond (or doesn't respond at all)",
                        'Your website is slow, broken, or embarrassingly outdated',
                        "You can't update your own content without begging for help",
                        "You're not sure if your site is secure or backed up",
                        'Your email is unreliable or at risk',
                        "You're paying for services you're not receiving",
                        'You dread needing to contact your vendor',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xl text-center mt-6">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        You don't have to stay stuck. There are better options.
                      </span>
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
                Is Your Nonprofit{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Being Underserved?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your mission is too important to be undermined by bad technology. Let's talk about
                building a digital presence that actually works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent text-white"
                  >
                    <Link to="/get-a-quote" className="flex items-center space-x-2">
                      <span>Get Help Today</span>
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
                ThinkMents believes nonprofits deserve partners who care as much about their mission
                as they do. We provide honest, responsive, local support to organizations making a
                difference in our community.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
