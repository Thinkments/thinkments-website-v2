import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Phone,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Calendar,
  FileText,
  CreditCard,
  Star,
  Share2,
  MapPin,
  Video,
  Database,
  Mail,
  DollarSign,
  Package,
  Clock,
  Code,
  Settings,
  HelpCircle,
  Zap,
  Award,
  TrendingUp,
  Link2,
} from 'lucide-react';
import SEO from '../SEO';

export default function WidgetsIntegrationsPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyMattersRef = useRef(null);
  const widgetsRef = useRef(null);
  const integrationsRef = useRef(null);
  const platformsRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isWhyMattersInView = useInView(whyMattersRef, { once: true });
  const isWidgetsInView = useInView(widgetsRef, { once: true });
  const isIntegrationsInView = useInView(integrationsRef, { once: true });
  const isPlatformsInView = useInView(platformsRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const widgets = [
    {
      icon: MessageCircle,
      title: 'Live Chat & Chatbots',
      description:
        'Engage website visitors instantly with live chat and AI-powered chatbots. We implement chat solutions that answer common questions, qualify leads, book appointments, and connect visitors with your team when needed. Chat widgets increase engagement and conversions by providing immediate assistance. We configure chatbots with your FAQs and business rules to handle routine inquiries 24/7.',
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description:
        'Let customers book appointments directly on your website. We integrate scheduling tools like Calendly, Acuity, and custom solutions that sync with your calendar, collect intake information, send confirmations, and automate reminders. Online scheduling reduces phone tag, fills your calendar, and provides better customer experience. No more back-and-forth emails to find available times.',
    },
    {
      icon: FileText,
      title: 'Contact Forms & Lead Capture',
      description:
        'Capture leads effectively with forms that do more than collect information. We build smart forms with conditional logic, multi-step flows, file uploads, and validation. Form submissions automatically route to your CRM, trigger email sequences, notify your team, and integrate with your marketing automation. Every lead is captured, organized, and actionable.',
    },
    {
      icon: CreditCard,
      title: 'Payment & E-Commerce Widgets',
      description:
        'Accept payments directly on your website with secure payment integrations. We implement Stripe, PayPal, Square, and other processors for one-time payments, subscriptions, deposits, and full e-commerce. Payment widgets are PCI compliant and optimized for conversion with minimal friction checkout experiences.',
    },
    {
      icon: Star,
      title: 'Review & Testimonial Widgets',
      description:
        'Display social proof that builds trust and drives conversions. We integrate review widgets that pull ratings from Google, Facebook, Yelp, and industry platforms. Dynamic testimonial displays showcase customer feedback throughout your site. Review widgets can also encourage new reviews by making the process easy for satisfied customers.',
    },
    {
      icon: Share2,
      title: 'Social Media Integration',
      description:
        'Connect your website with your social presence. We implement social feeds, share buttons, follow widgets, and social login options. Social integrations increase engagement, extend content reach, and make it easy for visitors to connect with your brand across platforms.',
    },
    {
      icon: MapPin,
      title: 'Maps & Location Widgets',
      description:
        'Help customers find you with embedded maps, store locators, and location-based features. We implement Google Maps integrations, multi-location directories, driving directions, and service area displays. Location widgets are especially important for businesses with physical locations or defined service territories.',
    },
    {
      icon: Video,
      title: 'Video & Media Widgets',
      description:
        'Enhance your website with embedded video players, galleries, and interactive media. We integrate YouTube, Vimeo, and self-hosted video with optimized performance. Lightbox galleries, before/after sliders, and interactive portfolios showcase your work effectively.',
    },
  ];

  const integrations = [
    {
      icon: Database,
      title: 'CRM Integration',
      description:
        'Connect your website with your customer relationship management system. We integrate with HubSpot, Salesforce, Zoho, Pipedrive, and dozens of other CRMs. Lead data flows automatically from web forms to your CRM with proper field mapping, lead scoring, and workflow triggers. No more manual entry or lost leads.',
    },
    {
      icon: Mail,
      title: 'Marketing Automation',
      description:
        'Link your website with email marketing and automation platforms. We integrate Mailchimp, Constant Contact, ActiveCampaign, HubSpot, and other tools. Newsletter signups, lead magnets, abandoned cart sequences, and nurture campaigns all connect seamlessly with your website activity.',
    },
    {
      icon: DollarSign,
      title: 'Accounting & Invoicing',
      description:
        'Connect your website with financial systems. We integrate QuickBooks, Xero, FreshBooks, and other accounting platforms. E-commerce sales, payment data, and customer information sync automatically, reducing manual bookkeeping and improving accuracy.',
    },
    {
      icon: Package,
      title: 'Inventory & Order Management',
      description:
        'Keep inventory accurate across channels with real-time integrations. We connect your website with inventory management systems, point-of-sale systems, and fulfillment platforms. Stock levels update automatically, preventing overselling and ensuring accurate availability display.',
    },
    {
      icon: Clock,
      title: 'Calendar & Scheduling Systems',
      description:
        'Sync website scheduling with your existing calendar infrastructure. We integrate with Google Calendar, Outlook, and scheduling platforms to ensure appointments appear where your team works. Two-way sync prevents double-booking and keeps everyone informed.',
    },
    {
      icon: Code,
      title: 'Custom API Development',
      description:
        "When off-the-shelf integrations don't exist, we build them. Our developers create custom API connections between your website and proprietary systems, legacy software, or specialized platforms. If data needs to flow between systems, we can make it happen.",
    },
  ];

  const faqs = [
    {
      question: 'How much do integrations cost?',
      answer:
        'Simple widget implementations start at $200-500. Standard integrations range from $500-2,000. Complex custom integrations are quoted based on requirements. We provide detailed estimates after understanding your needs.',
    },
    {
      question: 'How long does integration take?',
      answer:
        'Simple widgets can be implemented same-day. Standard integrations typically take 1-2 weeks. Complex custom development may take 4-8 weeks depending on scope.',
    },
    {
      question: "What if the platforms I use don't have native integrations?",
      answer:
        "We can build custom integrations using APIs. If platforms have APIs (most modern platforms do), we can connect them. We'll assess feasibility during our discovery process.",
    },
    {
      question: 'Will integrations slow down my website?',
      answer:
        'Properly implemented integrations have minimal performance impact. We optimize for speed and use asynchronous loading where appropriate to prevent slowdowns.',
    },
    {
      question: 'What happens when platforms update their systems?',
      answer:
        'Updates occasionally break integrations. Our maintenance clients receive priority support to fix issues quickly. We monitor for problems and proactively address changes when possible.',
    },
    {
      question: 'Can you integrate with legacy or custom systems?',
      answer:
        "Usually yes. If your system has an API or database access, we can likely build a connection. We'll evaluate technical feasibility during discovery.",
    },
    {
      question: 'Do I need ongoing support for integrations?',
      answer:
        'We recommend it. Integrations require occasional maintenance as platforms evolve. Our support plans include integration monitoring and updates.',
    },
  ];

  return (
    <>
      <SEO
        title="Widgets & Integrations | Connect Your Digital Ecosystem | ThinkMents"
        description="Widget & integration services since 2002. Chat, scheduling, payments, CRM, marketing automation. Connect your tools seamlessly. Custom API development available."
        url="/widgets-integrations"
        type="website"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&fit=crop)',
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
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Widgets & Integrations</span>
              </div>

              <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                CONNECTING SYSTEMS SINCE 2002
              </Badge>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Widgets & Integrations That Connect Everything
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transform your website into a business automation hub
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { stat: '100s', label: 'Platforms Integrated' },
                  { stat: 'Real-Time', label: 'Data Sync' },
                  { stat: '20+', label: 'Years Experience' },
                  { stat: 'Custom', label: 'API Development' },
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
                  <Link to="/free-consultation">Explore Integrations</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
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
                In today's connected digital landscape, your website shouldn't be an island—it
                should be the hub that connects all your business tools and enhances customer
                experience.{' '}
                <strong>
                  ThinkMents' Widgets & Integrations services add powerful functionality to your
                  website, connecting it with the platforms and tools that power your business.
                </strong>{' '}
                Since 2002, we've been implementing custom integrations that automate workflows,
                improve user experience, and eliminate manual data headaches. From simple chat
                widgets to complex API integrations with enterprise systems, we have the technical
                expertise to make your digital ecosystem work seamlessly together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Integrations Matter */}
      <section ref={whyMattersRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyMattersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Link2 className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Power of Connected Systems
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl text-[#1E3A5F] mb-4">
                Disconnected tools create inefficiency, errors, and frustration:
              </h3>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  'Manual data entry wastes hours and introduces errors',
                  'Customers expect seamless experiences across touchpoints',
                  'Siloed systems mean incomplete customer insights',
                  "Repetitive tasks drain your team's capacity for valuable work",
                  'Disconnected tools create friction that loses customers',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl text-[#1E3A5F] mb-4">
                The right integrations transform your operations:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Lead data flows automatically from forms to your CRM',
                  'Appointments sync between your website and calendar',
                  'Customer purchases update inventory in real-time',
                  'Reviews aggregate into a single dashboard',
                  'Marketing data connects for complete attribution',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                Modern customers expect Amazon-level convenience. They want to book appointments
                online, get instant confirmations, receive automated updates, and interact with your
                business 24/7.{' '}
                <strong>Widgets and integrations make this possible without adding staff.</strong>
              </p>
              <p className="text-lg leading-relaxed">
                ThinkMents builds the connections that turn your website into a business automation
                hub—reducing manual work, improving customer experience, and giving you better data
                for decision-making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Widget Services */}
      <section ref={widgetsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWidgetsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Widget Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add powerful functionality directly to your website
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {widgets.map((widget, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isWidgetsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <widget.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="text-xl text-[#1E3A5F]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {widget.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{widget.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section ref={integrationsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Integration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your website with the platforms that power your business
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntegrationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#00B4D8]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <integration.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="text-lg text-[#1E3A5F]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {integration.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{integration.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isIntegrationsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/web-development">
                <Button className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                  Web Development Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/technical-services">
                <Button
                  variant="outline"
                  className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-8"
                >
                  Technical Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Integration Platforms */}
      <section ref={platformsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPlatformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Settings className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Platforms We Integrate
              </h2>
              <p className="text-xl text-gray-600">
                We have experience integrating hundreds of platforms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'CRM Systems',
                  platforms: [
                    'HubSpot',
                    'Salesforce',
                    'Zoho CRM',
                    'Pipedrive',
                    'Monday.com',
                    'Keap',
                  ],
                },
                {
                  category: 'Marketing Automation',
                  platforms: [
                    'Mailchimp',
                    'Constant Contact',
                    'ActiveCampaign',
                    'Klaviyo',
                    'ConvertKit',
                  ],
                },
                {
                  category: 'Scheduling',
                  platforms: ['Calendly', 'Acuity Scheduling', 'Square Appointments', 'SimplyBook'],
                },
                {
                  category: 'Payment Processing',
                  platforms: ['Stripe', 'PayPal', 'Square', 'Authorize.net', 'Braintree'],
                },
                {
                  category: 'Live Chat',
                  platforms: ['Intercom', 'Drift', 'LiveChat', 'Zendesk Chat', 'Tidio'],
                },
                {
                  category: 'Reviews',
                  platforms: ['Google Business Profile', 'Yelp', 'Birdeye', 'Podium', 'Grade.us'],
                },
                {
                  category: 'Analytics',
                  platforms: ['Google Analytics', 'Google Tag Manager', 'Hotjar', 'Mixpanel'],
                },
                {
                  category: 'E-Commerce',
                  platforms: ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento'],
                },
                {
                  category: 'Communication',
                  platforms: ['Slack', 'Microsoft Teams', 'Twilio', 'SendGrid'],
                },
              ].map((group, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg text-[#1E3A5F] mb-3">{group.category}</h3>
                    <ul className="space-y-1">
                      {group.platforms.map((platform, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{platform}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700">
                <strong>Don't see your platform? Ask us.</strong> If it has an API, we can likely
                integrate it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Integration Process */}
      <section
        ref={processRef}
        className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#2A4A6F] text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Zap className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                How We Implement Widgets & Integrations
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Discovery & Planning',
                  items: [
                    'Understand your workflow and business requirements',
                    'Map data flows between systems',
                    'Identify integration points and triggers',
                    'Define success criteria and testing plan',
                  ],
                },
                {
                  title: 'Configuration & Development',
                  items: [
                    'Set up accounts and API connections',
                    'Configure field mapping and data transformation',
                    'Build custom code when needed',
                    'Implement error handling and logging',
                  ],
                },
                {
                  title: 'Testing & Validation',
                  items: [
                    'Test all integration scenarios',
                    'Verify data accuracy across systems',
                    'Stress test for reliability',
                    'Document edge cases and handling',
                  ],
                },
                {
                  title: 'Launch & Training',
                  items: [
                    'Deploy to production environment',
                    'Train your team on new workflows',
                    'Provide documentation and support resources',
                    'Monitor for issues during initial period',
                  ],
                },
                {
                  title: 'Ongoing Support',
                  items: [
                    'Monitor integration health',
                    'Address issues as they arise',
                    'Update connections when platforms change',
                    'Optimize based on usage patterns',
                  ],
                },
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
          </motion.div>
        </div>
      </section>

      {/* Benefits of Professional Integration */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why Professional Integration Matters
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#FF6B35]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#FF6B35] mb-4">
                    DIY integrations often fail because:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Incorrect configuration causes data errors',
                      'Security vulnerabilities expose customer data',
                      'Updates break connections without warning',
                      'Edge cases create silent failures',
                      'Poor error handling loses critical data',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#00B4D8] mb-4">Professional integration ensures:</h3>
                  <ul className="space-y-2">
                    {[
                      'Correct setup from the start',
                      'Secure data handling and transmission',
                      'Robust error handling and monitoring',
                      'Documentation for future maintenance',
                      'Ongoing support when issues arise',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700">
                <strong>
                  The cost of professional integration is far less than cleaning up data messes,
                  recovering from security breaches, or losing customers to broken functionality.
                </strong>
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
              <h2
                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
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
                <Link
                  to="/web-development"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Web Development <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/technical-services"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Technical Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/marketing-seo"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Marketing & SEO <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/analytics-reporting"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  Analytics & Reporting <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="text-[#00B4D8] hover:underline flex items-center gap-1"
                >
                  All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Connect Your Digital Ecosystem?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss integrations that automate your workflows and improve customer
              experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8"
              >
                <Link to="/free-consultation">
                  Schedule a Free Integration Consultation
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
                <span>20+ Years Technical Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Hundreds of Platforms Integrated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                <span>Custom Development Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
