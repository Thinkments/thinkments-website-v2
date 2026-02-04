import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import {
    Wrench,
    CheckCircle,
    ArrowRight,
    Phone,
    Star,
    Award,
    Search,
    Target,
    Share2,
    Users,
} from 'lucide-react';
import SEO from '../../SEO';
import { ServiceSchema } from '../../seo/ServiceSchema';
import { IndustryData } from '../../../data/industryData';

interface IndustryTemplateProps {
    industry: IndustryData;
}

export default function IndustryTemplate({ industry }: IndustryTemplateProps) {
    const heroRef = useRef(null);
    const challengesRef = useRef(null);
    const servicesRef = useRef(null);
    const caseStudyRef = useRef(null);
    const ctaRef = useRef(null);

    const isHeroInView = useInView(heroRef, { once: true });
    const isChallengesInView = useInView(challengesRef, { once: true });
    const isServicesInView = useInView(servicesRef, { once: true });
    const isCaseStudyInView = useInView(caseStudyRef, { once: true });
    const isCtaInView = useInView(ctaRef, { once: true });

    const iconColors = ['#00B4D8', '#FF6B35', '#00B4D8', '#FF6B35'];
    const iconComponents = [Search, Target, Share2, Users];

    return (
        <>
            <SEO
                title={`${industry.title} | ThinkMents`}
                description={industry.description}
                url={`/industries/${industry.slug}`}
                type="website"
            />

            {/* Service Schema for Rich Snippets */}
            <ServiceSchema
                serviceName={`${industry.name} Digital Marketing Services`}
                description={industry.description}
                priceRange="$$-$$$"
                url={`/industries/${industry.slug}`}
                features={industry.services.map(s => s.title)}
            />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${industry.heroImage})`,
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
                            <Badge className="bg-[#00B4D8] text-white border-none mb-6 text-sm px-4 py-1">
                                {industry.name.toUpperCase()} INDUSTRY SPECIALISTS
                            </Badge>

                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                {industry.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                                {industry.description}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">150-300%</div>
                                    <div className="text-white/80 text-sm">More Website Traffic</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">50-100%</div>
                                    <div className="text-white/80 text-sm">More Qualified Leads</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl text-[#00B4D8] mb-2">20+ Years</div>
                                    <div className="text-white/80 text-sm">{industry.name} Marketing Experience</div>
                                </motion.div>
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
                                    className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] px-8"
                                >
                                    <Link to="/free-consultation">Get Free {industry.name} Marketing Audit</Link>
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

            {/* Challenges Section */}
            <section ref={challengesRef} className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isChallengesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <Wrench className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
                            <h2
                                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                Why {industry.name} Marketing Is Different
                            </h2>
                            <p className="text-xl text-gray-600">
                                Unique challenges require specialized digital marketing strategies
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {industry.challenges.map((challenge, idx) => (
                                <Card key={idx}>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl text-[#1E3A5F] mb-3 font-semibold">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-[#00B4D8]/10 to-[#1E3A5F]/10 rounded-lg p-8">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                <strong>The Solution:</strong> ThinkMents specializes in {industry.name.toLowerCase()}{' '}
                                digital marketing. We understand the unique challenges of your industry and build
                                strategies specifically designed to help {industry.name.toLowerCase()} businesses grow.
                                Our proven approach delivers measurable results.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section ref={servicesRef} className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            {industry.name} Marketing Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital marketing designed specifically for {industry.name.toLowerCase()}{' '}
                            businesses
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                        {industry.services.map((service, idx) => {
                            const IconComponent = iconComponents[idx % iconComponents.length];
                            const color = iconColors[idx % iconColors.length];

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                                >
                                    <Card className={`h-full border-t-4 border-t-[${color}]`}>
                                        <CardContent className="p-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <IconComponent className="w-10 h-10" style={{ color }} />
                                                <h3
                                                    className="text-2xl text-[#1E3A5F]"
                                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                                >
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                                            <ul className="space-y-2 text-gray-700">
                                                {service.features.map((feature, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-2">
                                                        <CheckCircle
                                                            className="w-5 h-5 flex-shrink-0 mt-1"
                                                            style={{ color }}
                                                        />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/free-consultation">
                            <Button size="lg" className="bg-[#00B4D8] hover:bg-[#0096B8] text-white px-8">
                                Get Your Free {industry.name} Marketing Strategy
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section ref={caseStudyRef} className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isCaseStudyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <Award className="w-16 h-16 text-[#00B4D8] mx-auto mb-4" />
                            <h2
                                className="text-3xl md:text-5xl text-[#1E3A5F] mb-4"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                {industry.name} Marketing Case Study
                            </h2>
                            <p className="text-xl text-gray-600">Real results from a {industry.name.toLowerCase()} client</p>
                        </div>

                        <Card className="border-t-4 border-t-[#00B4D8]">
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-3 gap-8 mb-8 text-center">
                                    <div>
                                        <div className="text-4xl text-[#00B4D8] mb-2">
                                            {industry.caseStudy.stat1.value}
                                        </div>
                                        <p className="text-gray-700">{industry.caseStudy.stat1.label}</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl text-[#00B4D8] mb-2">
                                            {industry.caseStudy.stat2.value}
                                        </div>
                                        <p className="text-gray-700">{industry.caseStudy.stat2.label}</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl text-[#00B4D8] mb-2">
                                            {industry.caseStudy.stat3.value}
                                        </div>
                                        <p className="text-gray-700">{industry.caseStudy.stat3.label}</p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        <strong>The Challenge:</strong> {industry.caseStudy.challenge}
                                    </p>
                                    <p>
                                        <strong>Our Strategy:</strong> {industry.caseStudy.strategy}
                                    </p>
                                    <p>
                                        <strong>The Results:</strong> {industry.caseStudy.results}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-20 bg-[#1E3A5F]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            Ready to Grow Your {industry.name} Business?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Get a free {industry.name.toLowerCase()} marketing audit and discover how to generate
                            more qualified leads for your business.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8"
                            >
                                <Link to="/free-consultation">Get Free Marketing Audit</Link>
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

                        <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-[#00B4D8]" />
                                <span>5.0 Google Rating</span>
                            </div>
                            <span className="text-white/40">|</span>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-[#00B4D8]" />
                                <span>20+ Years {industry.name} Experience</span>
                            </div>
                            <span className="text-white/40">|</span>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                                <span>103+ Reviews</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
