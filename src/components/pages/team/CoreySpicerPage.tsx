import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import {
    Mail,
    Linkedin,
    Award,
    Star,
    TrendingUp,
    Users,
    Globe,
    Briefcase,
    GraduationCap,
    Target,
    Rocket,
    DollarSign,
    Building2,
    Heart,
    Phone,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';
import SEO from '../../SEO';

export default function CoreySpicerPage() {
    const heroRef = useRef(null);
    const experienceRef = useRef(null);
    const achievementsRef = useRef(null);
    const expertiseRef = useRef(null);
    const articlesRef = useRef(null);

    const isHeroInView = useInView(heroRef, { once: true });
    const isExperienceInView = useInView(experienceRef, { once: true });
    const isAchievementsInView = useInView(achievementsRef, { once: true });
    const isExpertiseInView = useInView(expertiseRef, { once: true });
    const isArticlesInView = useInView(articlesRef, { once: true });

    const credentials = [
        { icon: Award, text: '20+ Years Digital Marketing Experience' },
        { icon: Star, text: 'Google Partner - 10+ Years' },
        { icon: Rocket, text: 'Industry Pioneer - Multiple Firsts' },
        { icon: DollarSign, text: '$500M+ Client Value Generated' },
        { icon: Users, text: 'Serving 31+ States, 3 Countries' },
        { icon: Building2, text: 'ThinkMents Founder & CEO' },
    ];

    const majorAchievements = [
        {
            year: '2008',
            title: 'First Virtual Real Estate Tour',
            description:
                'Created the first-ever virtual home tour with interactive chatbot and NFC technology - years before the technology went mainstream.',
        },
        {
            year: '2010',
            title: 'First Arena Seat Preview System',
            description:
                'Partnered with American Airlines Center in Dallas to create the first arena seat preview system (yes, involving Mark Cuban).',
        },
        {
            year: '2012',
            title: 'First Virtual E-Commerce Store',
            description:
                'Built a virtual storefront where customers could walk through, click products, and purchase - 7 years before COVID and 11 years before Apple Vision Pro.',
        },
        {
            year: '2015-2022',
            title: 'Foursquare Healthcare Partnership',
            description:
                'Helped generate over $400 million in revenue through strategic digital marketing and innovation over a 5-7 year partnership.',
        },
        {
            year: '2024',
            title: '103 Five-Star Reviews',
            description:
                'Achieved perfect 5.0 Google rating with 103 five-star reviews while continuing to innovate with AI-powered marketing solutions.',
        },
    ];

    const expertiseAreas = [
        {
            category: 'Digital Marketing Strategy',
            skills: [
                'SEO & Local Search Optimization',
                'Paid Advertising (Google, Facebook, LinkedIn)',
                'Content Marketing & Strategy',
                'Marketing Automation',
                'Analytics & Performance Tracking',
            ],
        },
        {
            category: 'Web Development & Design',
            skills: [
                'Custom Website Development',
                'E-Commerce Solutions',
                'Mobile-Responsive Design',
                'User Experience Optimization',
                'Technical SEO Implementation',
            ],
        },
        {
            category: 'Innovation & Technology',
            skills: [
                'AI-Powered Marketing Solutions',
                'Virtual Tours & 360° Photography',
                'Immersive Experiences',
                '3D Avatars & Interactive Content',
                'Emerging Technology Integration',
            ],
        },
    ];

    return (
        <>
            <SEO
                title="Corey Spicer - Founder & CEO | ThinkMents Digital Marketing"
                description="Meet Corey Spicer, ThinkMents founder with 20+ years experience, Google Partner status, and $500M+ in client value generated. Industry pioneer in digital marketing innovation."
                url="/team/corey-spicer"
                type="website"
            />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2a4d73] to-[#00B4D8] py-20 md:py-32 px-4 overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                    ></div>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center gap-12"
                    >
                        {/* Author Photo */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img
                                    src="/team/corey-spicer.jpg"
                                    alt="Corey Spicer - ThinkMents Founder"
                                    className="w-64 h-64 rounded-full object-cover border-8 border-white/20 shadow-2xl"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-[#F7B928] rounded-full p-4 shadow-lg">
                                    <Rocket className="w-8 h-8 text-[#1E3A5F]" />
                                </div>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex-1 text-white">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Corey Spicer
                            </h1>
                            <p className="text-2xl md:text-3xl text-white/90 mb-6">
                                Founder & CEO, ThinkMents
                            </p>

                            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                                Digital marketing innovator with 20+ years of experience pioneering industry-first
                                solutions and generating $500M+ in client value. Google Partner, entrepreneur, and
                                problem solver who builds what doesn't exist yet.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <Badge className="bg-white/20 text-white border-white/40 text-sm px-4 py-2">
                                    <Star className="w-4 h-4 mr-1 fill-[#FBBC04] text-[#FBBC04]" />
                                    5.0 Google Rating (103 Reviews)
                                </Badge>
                                <Badge className="bg-white/20 text-white border-white/40 text-sm px-4 py-2">
                                    <Award className="w-4 h-4 mr-1" />
                                    Google Partner - 10+ Years
                                </Badge>
                                <Badge className="bg-white/20 text-white border-white/40 text-sm px-4 py-2">
                                    <Globe className="w-4 h-4 mr-1" />
                                    Serving 31+ States
                                </Badge>
                            </div>

                            {/* Contact CTAs */}
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F]"
                                >
                                    <Link to="/contact">Schedule a Consultation</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F]"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/coreyspicer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="w-5 h-5 mr-2" />
                                        Connect on LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Credentials Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {credentials.map((credential, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center">
                                            <credential.icon className="w-6 h-6 text-[#00B4D8]" />
                                        </div>
                                        <p className="text-gray-700 font-semibold">{credential.text}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section ref={experienceRef} className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4 text-center">
                            Professional Experience
                        </h2>
                        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Two decades of pioneering digital marketing solutions and driving measurable business
                            results
                        </p>

                        <div className="space-y-6">
                            <Card className="border-l-4 border-l-[#00B4D8]">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Building2 className="w-8 h-8 text-[#00B4D8] flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                                                Founder & CEO - ThinkMents
                                            </h3>
                                            <p className="text-[#00B4D8] font-semibold mb-4">2015 - Present</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Founded full-service digital marketing agency specializing in innovative,
                                                results-driven solutions. Led company growth to serve clients across 31+
                                                states and 3 countries while maintaining perfect 5.0 Google rating.
                                            </p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Generated $500M+ in total client value through strategic digital
                                                        marketing
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Achieved 103 five-star Google reviews with perfect 5.0 rating
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Maintained Google Partner status for 10+ consecutive years
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-[#1E3A5F]">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <DollarSign className="w-8 h-8 text-[#1E3A5F] flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                                                Digital Marketing Consultant
                                            </h3>
                                            <p className="text-[#00B4D8] font-semibold mb-4">2002 - 2015</p>
                                            <p className="text-gray-700 leading-relaxed">
                                                Independent consultant pioneering virtual tours, immersive experiences, and
                                                innovative marketing solutions. Created multiple industry-first technologies
                                                and served clients from real estate to enterprise technology.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Major Achievements */}
            <section ref={achievementsRef} className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4 text-center">
                            Industry-First Achievements
                        </h2>
                        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            A history of building what doesn't exist and pioneering new technologies
                        </p>

                        <div className="space-y-8">
                            {majorAchievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isAchievementsInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                >
                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                                    {achievement.year}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                                                        {achievement.title}
                                                    </h3>
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {achievement.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section ref={expertiseRef} className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4 text-center">
                            Areas of Expertise
                        </h2>
                        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Specialized skills and knowledge built over 20+ years of hands-on experience
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {expertiseAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                >
                                    <Card className="h-full border-t-4 border-t-[#00B4D8]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                                                {area.category}
                                            </h3>
                                            <ul className="space-y-3">
                                                {area.skills.map((skill, skillIndex) => (
                                                    <li key={skillIndex} className="flex items-start gap-2 text-gray-700">
                                                        <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-[#1E3A5F]">
                <div className="container mx-auto px-4 max-w-4xl text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's Build Something Innovative Together
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Whether you need strategic digital marketing, cutting-edge web development, or
                        solutions that don't exist yet — let's talk.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] px-8"
                        >
                            <Link to="/contact">Schedule Free Consultation</Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8"
                        >
                            <a href="mailto:corey@thinkments.com">
                                <Mail className="w-5 h-5 mr-2" />
                                Email Corey
                            </a>
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
                        <a
                            href="tel:9403151023"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            (940) 315-1023
                        </a>
                        <a
                            href="https://www.linkedin.com/in/coreyspicer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
