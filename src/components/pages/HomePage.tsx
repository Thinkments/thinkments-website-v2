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
  BarChart3,
  Quote
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
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isPathwaysInView = useInView(pathwaysRef, { once: true });
  const isProblemsInView = useInView(problemsRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ThinkMents Digital Marketing Agency",
    "url": "https://thinkments.com",
    "telephone": "(940) 315-1023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Decatur",
      "addressRegion": "TX",
    }
  };

  // --- CONTENT COMPONENTS ---

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
          <Button asChild size="lg" className="bg-[#F7B928] hover:bg-[#D4960F] text-black font-semibold text-lg px-10">
            <Link to="/contact-us">Book My Clarity Call</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-10">
            <Link to="/contact-us">See The Framework</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );

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
      <div className="space-y-6">
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
            className="flex items-start gap-4 p-6 bg-white shadow-sm rounded-lg border-l-4 border-[#F7B928]"
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
        For companies in the "messy middle," growth stalls not from a lack of effort, but from a lack of a single, unifying strategy. We created The North Star Framework to fix this giving you one source of strategic truth.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Radical Alignment", icon: TrendingUp, desc: "Get your entire sales and marketing team rowing in the same direction." },
          { title: "Unshakeable Clarity", icon: Target, desc: "Make confident decisions and say 'no' to distractions." },
          { title: "Predictable Growth", icon: CheckCircle, desc: "Turn chaos into a repeatable system that drives revenue." }
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
            <p className="text-white/80 text-sm">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const TestimonialsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          What Our Clients Say
        </h2>
        <div className="flex justify-center items-center gap-2 mb-4">
           <div className="flex gap-1">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />)}
           </div>
           <span className="text-gray-600 font-semibold">5.0 Average Rating</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
         {[
           { name: "Sarah M.", role: "Marketing Director", text: "ThinkMents didn't just build a website; they gave us a roadmap for the next 5 years. Our leads have doubled in 6 months." },
           { name: "James R.", role: "CEO, TechStart", text: "Finally, an agency that speaks data, not fluff. The North Star framework clarified our entire go-to-market strategy." },
           { name: "Elena K.", role: "Local Business Owner", text: "We were invisible on Google. Now we dominate our local area. The team is responsive, strategic, and effective." }
         ].map((t, i) => (
           <Card key={i} className="bg-white hover:shadow-lg transition-shadow">
             <CardContent className="p-6">
               <Quote className="w-8 h-8 text-[#00B4D8]/20 mb-4" />
               <p className="text-gray-700 italic mb-4">"{t.text}"</p>
               <div>
                 <p className="font-bold text-[#1E3A5F]">{t.name}</p>
                 <p className="text-sm text-gray-500">{t.role}</p>
               </div>
             </CardContent>
           </Card>
         ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Stop Guessing. Start Growing. | Thinkments"
        description="Thinkments aligns your entire organization around one clear 'North Star,' giving you the clarity to scale without the chaos."
        url="/"
        type="website"
        structuredData={localBusinessSchema}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <HeroContent />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted by Leaders in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Replace these divs with real logos when available */}
             <div className="text-xl font-bold text-gray-400">Healthcare</div>
             <div className="text-xl font-bold text-gray-400">Real Estate</div>
             <div className="text-xl font-bold text-gray-400">Technology</div>
             <div className="text-xl font-bold text-gray-400">Retail</div>
             <div className="text-xl font-bold text-gray-400">Manufacturing</div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section ref={problemsRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <ProblemContent />
        </div>
      </section>

      {/* The Solution */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2844]">
        <div className="container mx-auto px-4">
          <SolutionContent />
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <TestimonialsContent />
        </div>
      </section>

      {/* About/Founder Mini-Section */}
      <section ref={aboutRef} className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
              <div className="relative">
                 <div className="absolute -inset-4 bg-[#00B4D8] rounded-2xl opacity-20 transform -rotate-3"></div>
                 <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="relative rounded-xl shadow-lg w-full" />
              </div>
           </div>
           <div className="w-full md:w-1/2">
              <h2 className="text-3xl text-[#1E3A5F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                We've Been Navigating the Digital Landscape Since 2002
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ThinkMents isn't a startup figuring things out on your dime. We are a veteran team based in Decatur, Texas, serving clients across 31 states. We believe that clarity beats complexity, and strategy must always precede tactics.
              </p>
              <Button asChild variant="outline" className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white">
                <Link to="/about-us">Read Our Story</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to find your North Star?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Stop running on the marketing hamster wheel. Book a free strategy call and let's map out your path to predictable growth.
          </p>
          <Button asChild size="lg" className="bg-[#F7B928] hover:bg-[#D4960F] text-black font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <Link to="/contact-us">Book My Free Strategy Call</Link>
          </Button>
        </div>
      </section>
    </>
  );
}