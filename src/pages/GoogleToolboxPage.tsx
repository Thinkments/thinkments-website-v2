import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    Search,
    ExternalLink,
    Sparkles,
    Users,
    GraduationCap,
    Heart,
    Briefcase,
    FlaskConical,
    Phone,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { googleToolsData, type GoogleTool, type ToolCategory } from '../data/googleTools';

const PERSONAS = [
    {
        id: 'Small Business',
        label: 'Small Business',
        icon: Users,
        color: 'from-blue-500 to-cyan-500',
        description: 'Tools to grow your local business'
    },
    {
        id: 'Teachers & Educators',
        label: 'Teachers',
        icon: GraduationCap,
        color: 'from-purple-500 to-pink-500',
        description: 'Educational tools and resources'
    },
    {
        id: 'Non-Profits',
        label: 'Non-Profits',
        icon: Heart,
        color: 'from-rose-500 to-red-500',
        description: 'Resources for organizations making impact'
    },
    {
        id: 'Veterans & Job Seekers',
        label: 'Job Seekers',
        icon: Briefcase,
        color: 'from-green-500 to-emerald-500',
        description: 'Career development and job search'
    },
    {
        id: 'The Lab',
        label: 'The Lab',
        icon: FlaskConical,
        color: 'from-amber-500 to-orange-500',
        description: 'Experimental & cutting-edge tools'
    },
];

export default function GoogleToolboxPage() {
    const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter tools based on selected persona and search query
    const filteredTools = useMemo(() => {
        let tools: ToolCategory[] = googleToolsData;

        // Filter by persona
        if (selectedPersona) {
            tools = tools.filter(category => category.category === selectedPersona);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            tools = tools.map(category => ({
                ...category,
                tools: category.tools.filter(tool =>
                    tool.name.toLowerCase().includes(query) ||
                    tool.description.toLowerCase().includes(query)
                )
            })).filter(category => category.tools.length > 0);
        }

        return tools;
    }, [selectedPersona, searchQuery]);

    // Count total tools
    const totalToolsCount = googleToolsData.reduce((sum, cat) => sum + cat.tools.length, 0);

    return (
        <>
            <Helmet>
                <title>Ultimate Google Toolbox | 100+ Free Tools for Your Business | ThinkMents</title>
                <meta
                    name="description"
                    content="Discover 100+ free Google tools for small businesses, educators, non-profits, veterans & job seekers. Expert-curated directory with descriptions and direct links."
                />
                <meta property="og:title" content="Ultimate Google Toolbox | 100+ Free Tools | ThinkMents" />
                <meta
                    property="og:description"
                    content="Discover 100+ free Google tools for small businesses, educators, non-profits, veterans & job seekers. Expert-curated directory with descriptions and direct links."
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://thinkments.com/google-toolbox" />
            </Helmet>

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#234B70] to-[#2C5282] text-white py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '40px 40px',
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-[#F7B928]" />
                                <span className="text-sm font-semibold">Ultimate Google Toolbox</span>
                            </div>

                            <h1 className="mb-6">100+ Free Google Tools to Supercharge Your Success</h1>

                            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Discover hidden gems from Google's massive toolkit. Organized by persona, curated by
                                experts, and 100% free to use.
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto mb-8">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search tools by name or description..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#F7B928] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <Link to="/free-consultation">Get Free Consultation</Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-6 rounded-full transition-all duration-300"
                                >
                                    <a href="tel:9403151023">
                                        <Phone className="w-5 h-5 mr-2" />
                                        (940) 315-1023
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-8 bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-[#1E3A5F]">{totalToolsCount}+</div>
                                <div className="text-sm text-gray-600">Free Tools</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#1E3A5F]">5</div>
                                <div className="text-sm text-gray-600">Personas</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#1E3A5F]">100%</div>
                                <div className="text-sm text-gray-600">Free to Use</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Persona Filters (Gravity Wells) */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="mb-4">Choose Your Path</h2>
                            <p className="text-xl text-gray-600">
                                Select a persona to discover tools tailored to your needs
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                            {PERSONAS.map((persona, index) => {
                                const Icon = persona.icon;
                                const isSelected = selectedPersona === persona.id;

                                return (
                                    <motion.button
                                        key={persona.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setSelectedPersona(isSelected ? null : persona.id)}
                                        className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                                ? 'border-[#00B4D8] bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 shadow-xl scale-105'
                                                : 'border-gray-200 hover:border-[#00B4D8] hover:shadow-lg'
                                            }`}
                                    >
                                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${persona.color} p-4 flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-full h-full text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{persona.label}</h3>
                                        <p className="text-xs text-gray-600">{persona.description}</p>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {selectedPersona && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={() => setSelectedPersona(null)}
                                    className="text-sm text-[#00B4D8] hover:underline"
                                >
                                    Clear filter and show all tools
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            {filteredTools.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-xl text-gray-600">
                                        No tools found matching your criteria. Try different search terms or persona.
                                    </p>
                                </div>
                            ) : (
                                filteredTools.map((category, catIndex) => (
                                    <div key={category.category} className="mb-16">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: catIndex * 0.1 }}
                                        >
                                            <div className="flex items-center gap-3 mb-8">
                                                {(() => {
                                                    const personaConfig = PERSONAS.find(p => p.id === category.category);
                                                    const Icon = personaConfig?.icon || Users;
                                                    const color = personaConfig?.color || 'from-gray-500 to-gray-600';

                                                    return (
                                                        <>
                                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} p-3 flex items-center justify-center`}>
                                                                <Icon className="w-full h-full text-white" />
                                                            </div>
                                                            <div>
                                                                <h2 className="mb-0">{category.category}</h2>
                                                                <p className="text-sm text-gray-600">{category.tools.length} tools available</p>
                                                            </div>
                                                        </>
                                                    );
                                                })()}
                                            </div>

                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {category.tools.map((tool, toolIndex) => (
                                                    <motion.a
                                                        key={tool.name}
                                                        href={tool.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: catIndex * 0.1 + toolIndex * 0.05 }}
                                                        className="group block h-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#00B4D8] hover:shadow-xl transition-all duration-300"
                                                    >
                                                        <div className="flex items-start justify-between mb-3">
                                                            <h3 className="text-xl font-bold text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors flex-1">
                                                                {tool.name}
                                                            </h3>
                                                            <ExternalLink className="w-5 h-5 text-[#00B4D8] flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                                                        </div>

                                                        <p className="text-gray-600 leading-relaxed mb-4">{tool.description}</p>

                                                        {tool.isLab && (
                                                            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                                                                <FlaskConical className="w-3 h-3 text-amber-600" />
                                                                <span className="text-xs font-semibold text-amber-700">Lab / Alpha</span>
                                                            </div>
                                                        )}
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-[#1E3A5F] via-[#234B70] to-[#2C5282] text-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-white mb-6">Need Help Choosing the Right Tools?</h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Our digital marketing experts can help you identify and implement the best Google
                                tools for your specific business needs.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <Link to="/free-consultation">Schedule Free Consultation</Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#1E3A5F] font-semibold px-8 py-6 rounded-full transition-all duration-300"
                                >
                                    <a href="tel:9403151023">
                                        <Phone className="w-5 h-5 mr-2" />
                                        (940) 315-1023
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
