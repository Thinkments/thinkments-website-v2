import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { 
  Search, 
  ChevronDown, 
  ChevronRight,
  Phone, 
  Mail, 
  HelpCircle,
  CheckCircle,
  Star
} from 'lucide-react';
import SEO from '../SEO';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  icon: React.ElementType;
  faqs: FAQ[];
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const heroRef = useRef(null);
  const faqsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFaqsInView = useInView(faqsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const faqCategories: FAQCategory[] = [
    {
      name: 'Getting Started',
      icon: HelpCircle,
      faqs: [
        {
          question: 'How do I get started with ThinkMents?',
          answer: "It's easy! Schedule a free consultation where we'll discuss your business goals, challenges, and budget. From there, we'll create a custom proposal tailored to your needs. No pressure, no obligation."
        },
        {
          question: 'Do you offer free consultations?',
          answer: "Yes! We offer a complimentary 30-minute discovery call to learn about your business and discuss how we can help. Schedule yours at thinkments.com/free-consultation."
        },
        {
          question: 'What information do I need to provide to get started?',
          answer: "Just bring your business goals and challenges. It helps to have access to your website, Google Business Profile, and any existing marketing materials, but we can work with whatever you have."
        }
      ]
    },
    {
      name: 'Services & Pricing',
      icon: Star,
      faqs: [
        {
          question: 'How much do your services cost?',
          answer: "Our pricing varies based on your needs. Local SEO starts at $350/month, websites range from $1,500-$8,000+, and Google Business Profile management starts at $250. We'll provide a detailed quote after understanding your specific requirements."
        },
        {
          question: 'Do you require long-term contracts?',
          answer: "No! We don't believe in locking clients into lengthy contracts. Most services are month-to-month. We earn your business every month through results, not contracts."
        },
        {
          question: 'What services do you offer?',
          answer: "We offer 16 service categories including Marketing & SEO, Web Development, Google Business Profile, Paid Advertising, Video & Photography, Virtual Tours, AI & Automation, Social Media, and more. Visit our Services page for the complete list."
        },
        {
          question: 'Do you offer package deals?',
          answer: "Yes! We offer bundled packages for common needs like website + SEO, or GBP + Local SEO. Ask us about package pricing during your consultation."
        }
      ]
    },
    {
      name: 'Process & Timeline',
      icon: CheckCircle,
      faqs: [
        {
          question: 'How long does it take to build a website?',
          answer: "A typical 5-10 page website takes 2-4 weeks. Larger sites (80+ pages) may take 6-8 weeks. Timeline depends on content readiness and feedback speed."
        },
        {
          question: 'How long before I see SEO results?',
          answer: "SEO is a long-term strategy. Most clients see initial improvements in 3-4 months, with significant results in 6-12 months. We provide monthly reports so you can track progress."
        },
        {
          question: "What's your process like?",
          answer: "Our process has 4 steps: 1) Discovery - we learn your business and goals, 2) Strategy - we develop a custom plan, 3) Implementation - we execute with precision, 4) Optimization - we continuously improve based on data."
        },
        {
          question: 'How often will we communicate?',
          answer: "We provide monthly reports and are available via phone and email for questions. For active projects, we typically have weekly check-ins. You'll never be left wondering what's happening."
        }
      ]
    },
    {
      name: 'Google Business Profile',
      icon: Star,
      faqs: [
        {
          question: 'Can you help if my Google Business Profile is suspended?',
          answer: "Yes! We specialize in GBP suspension recovery. Our success rate is over 90%. We'll identify the issue, prepare the appeal, and work with Google to get you reinstated."
        },
        {
          question: 'Do I need a physical address for Google Business Profile?',
          answer: "It depends on your business type. Service-area businesses can hide their address. We'll help you determine the right setup and ensure compliance with Google's guidelines."
        },
        {
          question: 'How do you help get more Google reviews?',
          answer: "We implement ethical review generation strategies including automated follow-up sequences, review request cards, and staff training. We never buy fake reviews - that violates Google's terms."
        }
      ]
    },
    {
      name: 'Virtual Tours & Photography',
      icon: CheckCircle,
      faqs: [
        {
          question: 'What is a Google Street View virtual tour?',
          answer: "It's an interactive 360° tour of your business that appears directly on Google Maps and your Google Business Profile. Customers can virtually walk through your space before visiting."
        },
        {
          question: 'How long does a virtual tour take to create?',
          answer: "Photography takes 1-3 hours depending on size. Tours are typically live on Google within 1-2 weeks after shooting."
        },
        {
          question: 'Do you travel for photography and virtual tours?',
          answer: "Yes! We serve clients across Texas and can travel for larger projects. Travel fees may apply outside the DFW metroplex."
        }
      ]
    },
    {
      name: 'Technical & Support',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Do you provide website hosting?',
          answer: "Yes! We offer reliable hosting starting at $50/month including security monitoring, daily backups, and technical support."
        },
        {
          question: 'What if I need help after my project is complete?',
          answer: "We offer ongoing maintenance and support plans. We're also available for one-off requests. Your success is our priority long after the project launches."
        },
        {
          question: 'Can you work with my existing website?',
          answer: "Absolutely! We can optimize, redesign, or enhance existing websites. We'll assess what you have and recommend the best path forward."
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  const isExpanded = (categoryIndex: number, faqIndex: number) => {
    return expandedItems.has(`${categoryIndex}-${faqIndex}`);
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions - ThinkMents Digital Marketing"
        description="Get answers to common questions about ThinkMents' services, pricing, process, and timelines. Learn about SEO, web development, Google Business Profile, virtual tours, and more."
        url="/faqs"
        type="website"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#00B4D8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1E3A5F] font-medium">FAQs</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 bg-[#F8F9FA]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Frequently Asked Questions
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Get answers to the most common questions about our services, pricing, and process. Can't find what you're looking for? Contact us directly.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-6 text-lg border-2 border-gray-200 focus:border-[#00B4D8] transition-colors rounded-lg"
                  />
                </div>
                <Button 
                  className="bg-[#00B4D8] hover:bg-[#00B4D8]/90 text-white px-8 py-6"
                >
                  Search
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section ref={faqsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length > 0 ? (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isFaqsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 
                        className="text-3xl font-bold text-[#1E3A5F]" 
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {category.name}
                      </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const itemExpanded = isExpanded(categoryIndex, faqIndex);
                        
                        return (
                          <motion.div
                            key={faqIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                            className={`border-2 rounded-lg transition-all duration-300 ${
                              itemExpanded 
                                ? 'border-[#00B4D8] bg-[#00B4D8]/5' 
                                : 'border-gray-200 hover:border-[#00B4D8]/50'
                            }`}
                          >
                            {/* Question Button */}
                            <button
                              onClick={() => toggleItem(categoryIndex, faqIndex)}
                              className="w-full flex items-start justify-between gap-4 p-6 text-left"
                            >
                              <span 
                                className={`text-lg font-semibold transition-colors ${
                                  itemExpanded ? 'text-[#00B4D8]' : 'text-[#1E3A5F]'
                                }`}
                              >
                                {faq.question}
                              </span>
                              <motion.div
                                animate={{ rotate: itemExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                              >
                                <ChevronDown 
                                  className={`w-6 h-6 transition-colors ${
                                    itemExpanded ? 'text-[#00B4D8]' : 'text-gray-400'
                                  }`} 
                                />
                              </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                              {itemExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No results found</h3>
                <p className="text-gray-500">
                  Try a different search term or{' '}
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-[#00B4D8] hover:underline"
                  >
                    clear your search
                  </button>
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA Section */}
      <section ref={ctaRef} className="py-20 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            {/* Headline */}
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Still Have Questions?
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're here to help. Reach out anytime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/contact-us" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                <a href="tel:9403151023" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (940) 315-1023
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#00B4D8] fill-[#00B4D8]" />
                <span>★★★★★ 5.0 Rating</span>
              </div>
              <span className="text-white/40">|</span>
              <span>103 Reviews</span>
              <span className="text-white/40">|</span>
              <span>20+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}