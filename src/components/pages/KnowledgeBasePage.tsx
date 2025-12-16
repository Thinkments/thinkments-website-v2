import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Search,
  MapPin,
  Globe,
  Megaphone,
  Share2,
  Star,
  Camera,
  Brain,
  Phone,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react';
import SEO from '../SEO';

export default function KnowledgeBasePage() {
  const heroRef = useRef(null);
  const categoryRef = useRef(null);
  const popularRef = useRef(null);
  const quickRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isCategoryInView = useInView(categoryRef, { once: true });
  const isPopularInView = useInView(popularRef, { once: true });
  const isQuickInView = useInView(quickRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categoryCards = [
    {
      icon: Search,
      title: 'SEO Basics',
      description: 'Learn how search engines work and how to improve your rankings.',
      linkText: 'Explore SEO',
      linkUrl: '/blog'
    },
    {
      icon: MapPin,
      title: 'Google Business Profile',
      description: 'Set up and optimize your GBP for local search success.',
      linkText: 'Explore GBP',
      linkUrl: '/blog'
    },
    {
      icon: Globe,
      title: 'Website Fundamentals',
      description: 'What makes a good website and how to improve yours.',
      linkText: 'Explore Websites',
      linkUrl: '/blog'
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Understand Google Ads, Facebook Ads, and paid media.',
      linkText: 'Explore Ads',
      linkUrl: '/blog'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Build your presence on social platforms that matter.',
      linkText: 'Explore Social',
      linkUrl: '/blog'
    },
    {
      icon: Star,
      title: 'Reviews & Reputation',
      description: 'Get more reviews and manage your online reputation.',
      linkText: 'Explore Reviews',
      linkUrl: '/blog'
    },
    {
      icon: Camera,
      title: 'Visual Content',
      description: 'Photography, video, and virtual tours for your business.',
      linkText: 'Explore Visual',
      linkUrl: '/blog'
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'How AI is changing marketing and how to use it.',
      linkText: 'Explore AI',
      linkUrl: '/blog'
    }
  ];

  const popularArticles = [
    {
      title: 'The Complete Guide to Local SEO in 2025',
      url: '/blog'
    },
    {
      title: 'How to Optimize Your Google Business Profile',
      url: '/blog'
    },
    {
      title: 'What to Do When Your GBP Gets Suspended',
      url: '/blog'
    },
    {
      title: 'Website Speed: Why It Matters for SEO',
      url: '/blog'
    },
    {
      title: 'Getting Started with Google Ads',
      url: '/blog'
    }
  ];

  const quickAnswers = [
    {
      question: 'How long does SEO take to work?',
      answer: 'SEO typically takes 3-6 months to show meaningful results. This timeline depends on factors like your current website state, competition level, and the comprehensiveness of your SEO strategy. Local SEO may show results faster, while competitive national keywords can take longer.'
    },
    {
      question: 'How much should I spend on Google Ads?',
      answer: 'Your Google Ads budget depends on your industry, competition, and goals. Most small businesses start with $1,000-$3,000 per month. The key is to start with a test budget, measure results, and scale up what works. Focus on ROI rather than a specific dollar amount.'
    },
    {
      question: 'Do I need a website if I have social media?',
      answer: 'Yes, absolutely. While social media is valuable, you don\'t own those platforms—they can change algorithms, suspend accounts, or even shut down. Your website is your digital property that you fully control. It\'s also essential for SEO, credibility, and converting visitors into customers.'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Knowledge Base - Learn Digital Marketing | ThinkMents"
        description="Free digital marketing resources, guides, and tutorials. Learn SEO, Google Business Profile, web design, paid advertising, social media, and more from ThinkMents."
        url="/knowledge-base"
        type="website"
      />

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
            {/* Small Text */}
            <p className="text-[#00B4D8] font-semibold tracking-wider uppercase mb-4">
              KNOWLEDGE BASE
            </p>

            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Learn Digital Marketing
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Free resources, guides, and tutorials to help you understand digital marketing and grow your business. Whether you're a DIYer or want to make informed decisions, start here.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search the knowledge base..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-300 focus:border-[#00B4D8] focus:outline-none text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section ref={categoryRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCategoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Browse by Topic
              </h2>
            </motion.div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCategoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#00B4D8] transition-all duration-300 hover:shadow-lg group">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center mb-4">
                        <card.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-xl font-bold text-[#1E3A5F] mb-3"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                        {card.description}
                      </p>

                      {/* Link */}
                      <Link 
                        to={card.linkUrl}
                        className="text-[#00B4D8] hover:text-[#1E3A5F] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        {card.linkText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section ref={popularRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPopularInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Popular Articles
              </h2>
            </motion.div>

            {/* Articles List */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4 mb-8">
                {popularArticles.map((article, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isPopularInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  >
                    <Link
                      to={article.url}
                      className="flex items-center gap-3 text-lg text-gray-700 hover:text-[#00B4D8] transition-colors group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00B4D8]"></div>
                      <span className="flex-grow">{article.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* View All Button */}
              <div className="text-center">
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white font-semibold"
                >
                  <Link to="/blog" className="inline-flex items-center gap-2">
                    View All Articles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers Section */}
      <section ref={quickRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isQuickInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Quick Answers
              </h2>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-8">
              {quickAnswers.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isQuickInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="bg-[#F8F9FA] rounded-lg border-2 border-gray-200 hover:border-[#00B4D8] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-semibold text-[#1E3A5F] pr-4">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* See All FAQs Link */}
            <div className="text-center">
              <Link
                to="/faqs"
                className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold text-lg transition-colors"
              >
                See All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Need Personalized Help?
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our knowledge base is great for learning, but sometimes you need expert guidance. Let's talk.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
              >
                <Link to="/free-consultation">
                  Get Free Consultation
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
