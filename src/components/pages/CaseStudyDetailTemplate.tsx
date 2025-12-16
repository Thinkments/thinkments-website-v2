import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Quote,
  ChevronRight,
  Phone,
  Mail,
  TrendingUp,
  Target,
  Zap,
  Award,
  Globe,
  Users,
  BarChart
} from 'lucide-react';
import SEO from '../SEO';

interface QuickStat {
  number: string;
  label: string;
  context?: string;
}

interface Challenge {
  description: string;
  bulletPoints?: string[];
}

interface Service {
  name: string;
  icon?: React.ReactNode;
}

interface ProcessPhase {
  title: string;
  description: string;
}

interface Result {
  number: string;
  label: string;
  context: string;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating?: number;
}

interface KeyTakeaway {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface RelatedCaseStudy {
  title: string;
  company: string;
  stat: string;
  statLabel: string;
  link: string;
}

interface CaseStudyData {
  // Hero Section
  clientName: string;
  headline: string;
  industry: string;
  location: string;
  duration: string;
  heroImage?: string;
  clientLogo?: string;
  
  // Quick Stats
  quickStats: QuickStat[];
  
  // Challenge
  challenge: Challenge;
  
  // Solution
  solution: {
    description: string;
    services: Service[];
    process?: ProcessPhase[];
  };
  
  // Results
  results: Result[];
  
  // Testimonial
  testimonial?: Testimonial;
  fallbackTestimonial?: string;
  
  // Gallery
  gallery?: string[];
  
  // Key Takeaways
  keyTakeaways: KeyTakeaway[];
  
  // Services
  servicesUsed: Array<{ name: string; link: string; icon?: React.ReactNode }>;
  
  // Related Case Studies
  relatedCaseStudies: RelatedCaseStudy[];
  
  // SEO
  metaDescription: string;
  slug: string;
}

interface CaseStudyDetailTemplateProps {
  data: CaseStudyData;
}

export default function CaseStudyDetailTemplate({ data }: CaseStudyDetailTemplateProps) {
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const resultsRef = useRef(null);
  const testimonialRef = useRef(null);
  const galleryRef = useRef(null);
  const takeawaysRef = useRef(null);
  const servicesRef = useRef(null);
  const relatedRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isChallengeInView = useInView(challengeRef, { once: true });
  const isSolutionInView = useInView(solutionRef, { once: true });
  const isResultsInView = useInView(resultsRef, { once: true });
  const isTestimonialInView = useInView(testimonialRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });
  const isTakeawaysInView = useInView(takeawaysRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isRelatedInView = useInView(relatedRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  return (
    <>
      <SEO
        title={`${data.clientName} Case Study - ${data.headline} | ThinkMents`}
        description={data.metaDescription}
        url={`/case-studies/${data.slug}`}
        type="article"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#00B4D8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/case-studies" className="hover:text-[#00B4D8]">Case Studies</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1E3A5F] font-medium">{data.clientName}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F9FA] to-white py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-[#00B4D8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/case-studies" className="hover:text-[#00B4D8] transition-colors">
              Case Studies
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1E3A5F] font-medium">{data.clientName}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Client Logo */}
              {data.clientLogo && (
                <div className="mb-8 bg-white rounded-lg p-6 inline-block shadow-md">
                  <img 
                    src={data.clientLogo} 
                    alt={`${data.clientName} logo`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              )}

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
                {data.headline}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-[#00B4D8] text-white px-4 py-2">
                  {data.industry}
                </Badge>
                <Badge variant="outline" className="border-[#1E3A5F] text-[#1E3A5F] px-4 py-2">
                  {data.location}
                </Badge>
                <Badge variant="outline" className="border-[#FF6B35] text-[#FF6B35] px-4 py-2">
                  {data.duration}
                </Badge>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {data.heroImage ? (
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={data.heroImage} 
                    alt={data.clientName}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg h-80 flex items-center justify-center">
                  <Award className="w-32 h-32 text-white/20" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[#00B4D8] py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`grid ${data.quickStats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-8 text-center text-white`}>
            {data.quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
                {stat.context && (
                  <div className="text-sm text-white/70 mt-1">{stat.context}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section ref={challengeRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isChallengeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-8">
              The Challenge
            </h2>

            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {data.challenge.description}
                </p>

                {data.challenge.bulletPoints && data.challenge.bulletPoints.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-[#1E3A5F] mb-3">Specific Challenges:</h3>
                    {data.challenge.bulletPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#FF6B35]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                        </div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section ref={solutionRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSolutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-8">
              Our Approach
            </h2>

            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {data.solution.description}
                </p>

                {/* Services Provided */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Services Provided:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.solution.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-[#00B4D8] flex-shrink-0" />
                        <span className="text-gray-700">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Timeline */}
                {data.solution.process && data.solution.process.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Our Process:</h3>
                    <div className="space-y-4">
                      {data.solution.process.map((phase, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-[#00B4D8] text-white rounded-full flex items-center justify-center font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#1E3A5F] mb-1">{phase.title}</h4>
                            <p className="text-gray-600">{phase.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Results Section */}
      <section ref={resultsRef} className="py-20 px-4 bg-[#1E3A5F] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              The Results
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isResultsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-[#00B4D8] mb-3">
                    {result.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">
                    {result.label}
                  </div>
                  <div className="text-white/70">
                    {result.context}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section ref={testimonialRef} className="py-20 px-4 bg-[#E8F8FC]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-[#00B4D8]/20 mx-auto mb-6" />

            {data.testimonial ? (
              <>
                <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 italic">
                  &quot;{data.testimonial.quote}&quot;
                </blockquote>

                {/* Stars */}
                {data.testimonial.rating && (
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(data.testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                )}

                <div className="text-lg">
                  <p className="font-semibold text-[#1E3A5F]">{data.testimonial.author}</p>
                  <p className="text-gray-600">{data.testimonial.title}</p>
                  <p className="text-gray-600">{data.testimonial.company}</p>
                </div>
              </>
            ) : (
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed italic">
                {data.fallbackTestimonial || `Results speak louder than words. This project generated ${data.results[0]?.number} for ${data.clientName}.`}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Gallery Section */}
      {data.gallery && data.gallery.length > 0 && (
        <section ref={galleryRef} className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-12 text-center">
                The Work
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {data.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img 
                      src={image} 
                      alt={`${data.clientName} project ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Takeaways Section */}
      <section ref={takeawaysRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTakeawaysInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-12 text-center">
              Why This Worked
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {data.keyTakeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTakeawaysInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-[#00B4D8]">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mb-6">
                        {takeaway.icon || <Target className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                        {takeaway.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {takeaway.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Used Section */}
      <section ref={servicesRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-12 text-center">
              Services Provided
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.servicesUsed.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isServicesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={service.link}>
                    <Card className="h-full hover:shadow-xl hover:border-[#00B4D8] transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          {service.icon || <BarChart className="w-6 h-6 text-white" />}
                        </div>
                        <h3 className="font-bold text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                          {service.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Case Studies Section */}
      <section ref={relatedRef} className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-12 text-center">
              More Success Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {data.relatedCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                        {caseStudy.company}
                      </h3>
                      <p className="text-gray-600 mb-6">{caseStudy.title}</p>
                      
                      <div className="bg-[#F8F9FA] rounded-lg p-4 mb-6">
                        <div className="text-4xl font-bold text-[#00B4D8] mb-1">
                          {caseStudy.stat}
                        </div>
                        <div className="text-sm text-gray-600">{caseStudy.statLabel}</div>
                      </div>

                      <Link
                        to={caseStudy.link}
                        className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold transition-colors"
                      >
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/case-studies"
                className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold text-lg transition-colors"
              >
                View All Case Studies <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want Results Like These?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              Let&apos;s talk about what ThinkMents can do for your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 min-w-[220px]"
              >
                <Link to="/free-consultation">Get Similar Results</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 min-w-[220px]"
              >
                <Link to="/testimonials">Read More Reviews</Link>
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="font-semibold">5.0 (103 Reviews)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">No obligation consultation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Response within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}