import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  ArrowRight,
  Star,
  Target,
  Code,
  MapPin,
  Camera,
  Brain,
  Megaphone,
  Phone,
  CheckCircle,
  TrendingUp,
  Store,
  Building2,
  SearchCheck,
  MousePointerClick,
  Sparkles,
  Award,
  Users,
  Zap,
  Shield,
  FileText,
  BarChart3
} from 'lucide-react';
import SEO from '../SEO';
import heroImage from 'figma:asset/55b25b8461b7b19f287a1f5f306d8eab0c585da5.png';

export default function HomePage() {
  const heroRef = useRef(null);
  const pathwaysRef = useRef(null);
  const problemsRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const trustRef = useRef(null);
  const resourcesRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isPathwaysInView = useInView(pathwaysRef, { once: true });
  const isProblemsInView = useInView(problemsRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true });
  const isTrustInView = useInView(trustRef, { once: true });
  const isResourcesInView = useInView(resourcesRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  // LocalBusiness Structured Data (Kept for SEO)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ThinkMents Digital Marketing Agency",
    "alternateName": "ThinkMents",
    "description": "Texas digital marketing agency since 2002. Local SEO, web design, PPC & AI solutions for SMBs and enterprise. Decatur HQ, serving 31 states.",
    "url": "https://thinkments.com",
    "logo": "https://thinkments.com/logo.png",
    "image": "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjU0NDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "telephone": "(940) 315-1023",
    "email": "info@thinkments.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "301 South Washburn St, Suite D",
      "addressLocality": "Decatur",
      "addressRegion": "TX",
      "postalCode": "76234",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.2283526,
      "longitude": -97.5883743
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "103",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/ThinkMents/",
      "https://www.linkedin.com/company/thinkments",
      "https://www.instagram.com/thinkments/",
      "https://www.youtube.com/@ThinkMents"
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Texas"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "foundingDate": "2002",
    "founder": {
      "@type": "Person",
      "name": "Corey Rumble"
    }
  };

  // ------------------------------------------------------------------
  // INJECTING HOMEPAGE CONTENT BLUEPRINT
  // ------------------------------------------------------------------

  // Section 1: Hero
  const HeroContent = () => (
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Stop Guessing. Start Growing.
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 leading-relaxed">
          Is your marketing strategy based on data, or is it just a list of random tasks? Thinkments aligns your entire organization around one clear 'North Star,' giving you the clarity to scale without the chaos.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#F7B928] hover:bg-[#D4960F] text-black font-semibold text-lg px-10"
          >
            <Link to="/contact-us">Book My Clarity Call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-10"
          >
            <Link to="/contact-us">See The Framework</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );

  // Section 3: The Problem
  const ProblemContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1E3A5F] mb-12 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
        Does any of this sound familiar?
      </h2>

      <div className="space-y-8">
        {[
          {
            title: "The Black Box",
            icon: Zap,
            description: "You're spending a small fortune on marketing, but you can't confidently connect it to revenue. It feels like you're feeding a slot machine."
          },
          {
            title: "The Identity Crisis",
            icon: Users,
            description: "Your team is busy, but not aligned. Your messaging is inconsistent, and your 'random acts of marketing' aren't adding up to a bigger picture."
          },
          {
            title: "Execution Paralysis",
            icon: Shield,
            description: "You're stuck in tactical weeds, debating small details while your big strategic goals gather dust."
          }
        ].map((pain, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isProblemsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            className="flex items-start gap-4 p-6 border-l-4 border-[#F7B928] bg-white shadow-sm rounded-lg"
          >
            <pain.icon className="w-8 h-8 text-[#1E3A5F] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#1E3A5F]">{pain.title}</h3>
              <p className="text-gray-700 mt-1">{pain.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Section 4: The Solution
  const SolutionContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
        The problem isn't your tactics. It's the absence of a North Star.
      </h2>
      <p className="text-lg md:text-xl text-white/90 mb-12 text-center max-w-3xl mx-auto">
        For companies in the "messy middle," growth stalls not from a lack of effort, but from a lack of a single, unifying strategy. Without it, your team is adrift, your budget is wasted, and your message is lost. We created The North Star Framework to fix this. It’s a proprietary system designed to give you one source of strategic truth, aligning every marketing decision to a single, measurable goal.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Radical Alignment",
            icon: TrendingUp,
            description: "Get your entire sales and marketing team rowing in the same direction."
          },
          {
            title: "Unshakeable Clarity",
            icon: Target,
            description: "Make confident decisions and say 'no' to distractions."
          },
          {
            title: "Predictable Growth",
            icon: CheckCircle,
            description: "Turn chaos into a repeatable system that drives revenue."
          }
        ].map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
          >
            <benefit.icon className="w-8 h-8 text-[#00B4D8] mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
            <p className="text-white/80 text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Section 6: Final CTA
  const FinalCtaContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center text-white max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
        Ready to find your North Star?
      </h2>
      <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
        Stop running on the marketing hamster wheel. Book a free, no-obligation strategy call and we'll show you the first steps toward building a marketing engine that finally makes sense.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <Button
          asChild
          size="lg"
          className="bg-[#F7B928] hover:bg-[#D4960F] text-black font-semibold text-lg px-10"
        >
          <Link to="/contact-us">Book My Free Strategy Call</Link>
        </Button>
      </div>

    </motion.div>
  );


  return (
    <>
      <SEO
        title="Stop Guessing. Start Growing. | Thinkments"
        description="Is your marketing strategy based on data, or is it just a list of random tasks? Thinkments aligns your entire organization around one clear 'North Star,' giving you the clarity to scale without the chaos."
        keywords="marketing strategy, north star framework, digital marketing audit, marketing chaos, predictable growth"
        url="/"
        type="website"
        structuredData={localBusinessSchema}
      />

      {/* SECTION 1: Hero Section (Blueprint) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <HeroContent />
        </div>
      </section>

      {/* SECTION 2: Social Proof Bar (Placeholder) */}
      <section className="py-8 md:py-12 bg-white text-center">
          <h2 className="text-lg font-medium text-gray-500 mb-6">
            Helping B2B leaders in the "Messy Middle" find their direction
          </h2>
          <div className="flex items-center justify-center gap-8 md:gap-12 opacity-50">
            {/* Placeholder Logos */}
            <div className="w-16 h-8 bg-gray-200"></div>
            <div className="w-20 h-8 bg-gray-200"></div>
            <div className="w-14 h-8 bg-gray-200"></div>
            <div className="w-16 h-8 bg-gray-200"></div>
          </div>
      </section>


      {/* SECTION 3: The Problem (Blueprint) */}
      <section ref={problemsRef} className="py-12 md:py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <ProblemContent />
        </div>
      </section>

      {/* SECTION 4: The Solution (Blueprint) */}
      <section ref={servicesRef} className="py-12 md:py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2844]">
        <div className="container mx-auto px-4">
          <SolutionContent />
        </div>
      </section>

      {/* SECTION 6: Final CTA (Blueprint) */}
      <section ref={ctaRef} className="py-16 md:py-24 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FinalCtaContent />
        </div>
      </section>
    </>
  );
}