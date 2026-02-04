import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
    Search,
    Sparkles,
    Store,
    GraduationCap,
    Heart,
    Briefcase,
    FlaskConical,
    Phone,
    ArrowRight,
    X,
    Check,
    Play,
    Map as MapIcon,
    Camera,
    Glasses
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { googleToolsData, type ToolCategory } from '../data/googleTools';

// Google Brand Colors & Assets
const GOOGLE_COLORS = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC05',
    green: '#34A853',
    grey: '#F1F3F4',
    text: '#202124',
};

const PERSONAS = [
    {
        id: 'Small Business',
        label: 'Small Business',
        icon: Store,
        theme: 'blue',
        hex: GOOGLE_COLORS.blue,
        description: 'Grow your business',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'Teachers & Educators',
        label: 'Educators',
        icon: GraduationCap,
        theme: 'green',
        hex: GOOGLE_COLORS.green,
        description: 'Inspire the future',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'Non-Profits',
        label: 'Non-Profits',
        icon: Heart,
        theme: 'red',
        hex: GOOGLE_COLORS.red,
        description: 'Make an impact',
        image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'Veterans & Job Seekers',
        label: 'Job Seekers',
        icon: Briefcase,
        theme: 'yellow',
        hex: '#F9AB00', // Adjusted specifically for text visibility on white
        description: 'Find your path',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'The Lab',
        label: 'The Lab',
        icon: FlaskConical,
        theme: 'purple',
        hex: '#9334E6',
        description: 'Build the future',
        image: 'https://images.unsplash.com/photo-1581093458891-2f308909bee5?auto=format&fit=crop&q=80&w=600'
    },
];

const CREATIVE_HUBS = [
    {
        id: 'videographers',
        label: 'Videographers',
        icon: Play,
        hex: '#EA4335',
        description: 'Filmmaking & AI Video',
        image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'map-makers',
        label: 'Map Makers',
        icon: MapIcon,
        hex: '#34A853',
        description: 'Geospatial & 3D',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'photographers',
        label: 'Photographers',
        icon: Camera,
        hex: '#4285F4',
        description: 'Editing & Vision AI',
        image: 'https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'vr-enthusiasts',
        label: 'VR Enthusiasts',
        icon: Glasses,
        hex: '#FBBC05',
        description: 'XR, AR & 3D Worlds',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600'
    }
];

export default function GoogleToolboxPage() {
    const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // Animation Refs & State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate normalized mouse position (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // Parallax Springs
    const springConfig = { damping: 25, stiffness: 150 };

    // Background Blob 1 (Blue)
    const blob1X = useSpring(useTransform(mouseX, [-1, 1], [-50, 50]), springConfig);
    const blob1Y = useSpring(useTransform(mouseY, [-1, 1], [-50, 50]), springConfig);

    // Background Blob 2 (Yellow)
    const blob2X = useSpring(useTransform(mouseX, [-1, 1], [50, -50]), springConfig);
    const blob2Y = useSpring(useTransform(mouseY, [-1, 1], [50, -50]), springConfig);

    // Background Blob 3 (Red)
    const blob3X = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), springConfig);
    const blob3Y = useSpring(useTransform(mouseY, [-1, 1], [30, -30]), springConfig);

    // Content Parallax (Subtle)
    const contentX = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), springConfig);
    const contentY = useSpring(useTransform(mouseY, [-1, 1], [-10, 10]), springConfig);

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

    // Calculate stats
    const totalToolsCount = googleToolsData.reduce((sum, cat) => sum + cat.tools.length, 0);

    return (
        <>
            <Helmet>
                <title>Google Toolbox | 100+ Free Tools for Growth | ThinkMents</title>
                <meta
                    name="description"
                    content="Explore the ultimate directory of 100+ free Google tools. Curated resources for businesses, educators, non-profits, and job seekers."
                />
            </Helmet>

            <div className="min-h-screen bg-[#FFFFFF] font-sans selection:bg-blue-100 selection:text-blue-900">

                {/* Google-Style Hero with Interactive Animation */}
                <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                    <div className="container mx-auto max-w-6xl relative z-10 text-center">

                        {/* Logo/Badge */}
                        <motion.div
                            style={{ x: contentX, y: contentY }}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm px-4 py-1.5 rounded-full mb-8 relative z-20"
                        >
                            <div className="flex gap-1">
                                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                                <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                                <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">The Ultimate Google Toolbox</span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            style={{ x: contentX, y: contentY }}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 relative z-20"
                        >
                            Everything you need.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]">
                                All in one place.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ x: contentX, y: contentY }}
                            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed relative z-20"
                        >
                            Access {totalToolsCount}+ free tools from Google's ecosystem.
                            Organized by persona to help you find exactly what you need.
                        </motion.p>

                        {/* Google-Style Search */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className={`max-w-2xl mx-auto mb-16 relative group transition-all duration-300 z-30 ${isSearchFocused ? 'scale-105' : ''}`}
                        >
                            <div className={`relative flex items-center bg-white rounded-full border transition-all duration-300 shadow-sm hover:shadow-md ${isSearchFocused ? 'border-[#4285F4] shadow-md ring-4 ring-blue-50/50' : 'border-gray-200'}`}>
                                <Search className="absolute left-6 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for 'analytics', 'classroom', or 'ads'..."
                                    value={searchQuery}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-14 pr-6 py-4 rounded-full text-lg text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-6 p-1 rounded-full hover:bg-gray-100 text-gray-400"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </motion.div>

                    </div>

                    {/* Animated Background Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                        {/* Blue Blob - Top Left */}
                        <motion.div
                            style={{ x: blob1X, y: blob1Y }}
                            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-50/60 blur-3xl opacity-60 mix-blend-multiply"
                        />

                        {/* Yellow Blob - Bottom Right */}
                        <motion.div
                            style={{ x: blob2X, y: blob2Y }}
                            className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-yellow-50/60 blur-3xl opacity-60 mix-blend-multiply"
                        />

                        {/* Red Blob - Top Right */}
                        <motion.div
                            style={{ x: blob3X, y: blob3Y }}
                            className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-red-50/60 blur-3xl opacity-40 mix-blend-multiply"
                        />

                        {/* Green Blob - Bottom Left (Subtle) */}
                        <motion.div
                            style={{ x: blob2X, y: blob1Y }}
                            className="absolute bottom-[20%] left-[10%] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] rounded-full bg-green-50/40 blur-3xl opacity-30 mix-blend-multiply"
                        />
                    </div>
                </section>

                {/* Persona Filters (Gravity Wells) */}
                <section className="pb-12 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 pl-2 border-l-4 border-[#4285F4]">Browse by Need</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {PERSONAS.map((persona, index) => {
                                const Icon = persona.icon;
                                const isSelected = selectedPersona === persona.id;

                                return (
                                    <motion.button
                                        key={persona.id}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        onClick={() => setSelectedPersona(isSelected ? null : persona.id)}
                                        className={`relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 group
                      ${isSelected ? 'ring-2 ring-offset-2' : 'hover:-translate-y-1 hover:shadow-xl'}
                    `}
                                        style={{
                                            backgroundColor: isSelected ? '#F8FAFF' : 'white',
                                            borderColor: isSelected ? persona.hex : 'transparent',
                                            '--theme-color': persona.hex
                                        } as React.CSSProperties}
                                    >
                                        {/* Background Image with Overlay */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                            <img src={persona.image} alt="" className="w-full h-full object-cover" />
                                        </div>

                                        {/* Card Content */}
                                        <div className="relative z-10 flex flex-col h-full items-center text-center">
                                            <div
                                                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-sm"
                                                style={{ backgroundColor: `${persona.hex}15`, color: persona.hex }}
                                            >
                                                <Icon className="w-7 h-7" />
                                            </div>

                                            <h3 className="font-bold text-gray-900 mb-1">{persona.label}</h3>
                                            <p className="text-xs text-gray-500 font-medium">{persona.description}</p>

                                            {/* Active Indicator */}
                                            <AnimatePresence>
                                                {isSelected && (
                                                    <motion.div
                                                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                                        className="absolute top-3 right-3 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm"
                                                    >
                                                        <Check className="w-3 h-3" style={{ color: persona.hex }} />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Border & Shadow */}
                                        <div className={`absolute inset-0 border-2 rounded-2xl transition-colors duration-300 pointer-events-none ${isSelected ? 'border-transparent' : 'border-gray-100 group-hover:border-transparent'}`} />
                                        <div className="absolute inset-0 shadow-sm group-hover:shadow-lg rounded-2xl pointer-events-none transition-shadow duration-300" />
                                    </motion.button>
                                );
                            })}
                        </div>

                        {selectedPersona && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                className="text-center mt-8"
                            >
                                <button
                                    onClick={() => setSelectedPersona(null)}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4285F4] transition-colors bg-gray-50 px-4 py-2 rounded-full hover:bg-blue-50"
                                >
                                    <X className="w-3.5 h-3.5" />
                                    Clear Filter
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Creative Studios (Sub-Hub Triggers) */}
                <section className="pb-20 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 pl-2 border-l-4 border-[#FBBC05]">Creative Studios</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {CREATIVE_HUBS.map((hub, index) => {
                                const Icon = hub.icon;
                                return (
                                    <Link key={hub.id} to={`/google-toolbox/${hub.id}`}>
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.6 + (index * 0.1) }}
                                            className="relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 group bg-white hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            {/* Background Image with Overlay */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                                <img src={hub.image} alt="" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/40 group-hover:backdrop-blur-[2px] transition-all" />
                                            </div>

                                            {/* Card Content */}
                                            <div className="relative z-10 flex flex-col h-full items-center text-center">
                                                <div
                                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-sm group-hover:bg-white/20 group-hover:text-white"
                                                    style={{ backgroundColor: `${hub.hex}15`, color: hub.hex }}
                                                >
                                                    <Icon className="w-7 h-7" />
                                                </div>

                                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-white transition-colors">{hub.label}</h3>
                                                <p className="text-xs text-gray-500 font-medium group-hover:text-white/80 transition-colors">{hub.description}</p>
                                            </div>

                                            {/* Border & Shadow */}
                                            <div className="absolute inset-0 border-2 border-gray-100 rounded-2xl transition-colors duration-300 pointer-events-none group-hover:border-transparent" />
                                            <div className="absolute inset-0 shadow-sm group-hover:shadow-lg rounded-2xl pointer-events-none transition-shadow duration-300" />
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="pb-32 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 pl-2 border-l-4 border-[#34A853]">All Tools</h2>
                        <AnimatePresence mode='wait'>
                            {filteredTools.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="text-center py-20 bg-gray-50 rounded-3xl"
                                >
                                    <div className="inline-block p-4 rounded-full bg-white shadow-sm mb-4">
                                        <Search className="w-8 h-8 text-gray-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">No tools found</h3>
                                    <p className="text-gray-500">Try adjusting your search or filter</p>
                                </motion.div>
                            ) : (
                                <div className="space-y-16">
                                    {filteredTools.map((category) => {
                                        const personaConfig = PERSONAS.find(p => p.id === category.category);
                                        const themeColor = personaConfig?.hex || GOOGLE_COLORS.blue;

                                        return (
                                            <div key={category.category}>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-4 mb-8"
                                                >
                                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                                                    <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
                                                        <h2 className="text-lg font-bold text-gray-900">{category.category}</h2>
                                                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                                                            {category.tools.length}
                                                        </span>
                                                    </div>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                                                </motion.div>

                                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {category.tools.map((tool, index) => (
                                                        <motion.a
                                                            key={tool.name}
                                                            href={tool.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: index * 0.05 }}
                                                            className="group relative bg-white rounded-2xl overflow-hidden hover:z-10 transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                                                        >
                                                            {/* Card Header (Photo Placeholder) */}
                                                            <div className="h-32 bg-gray-50 relative overflow-hidden">
                                                                {personaConfig?.image && (
                                                                    <>
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
                                                                        <img
                                                                            src={personaConfig.image}
                                                                            alt=""
                                                                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                                                        />
                                                                    </>
                                                                )}
                                                                {/* Badge */}
                                                                {tool.isLab && (
                                                                    <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-purple-100 flex items-center gap-1">
                                                                        <Sparkles className="w-3 h-3 text-purple-600" />
                                                                        <span className="text-[10px] uppercase font-bold tracking-wider text-purple-700">Lab</span>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="p-6 pt-2 flex flex-col flex-grow relative">
                                                                {/* Icon Overlap */}
                                                                <div className="w-12 h-12 -mt-8 mb-4 relative z-20 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center text-gray-700 group-hover:text-white group-hover:bg-gray-900 transition-colors duration-300">
                                                                    {/* Simple letter icon if no specific icon */}
                                                                    <span className="text-xl font-bold">{tool.name.charAt(0)}</span>
                                                                </div>

                                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors flex items-center gap-2">
                                                                    {tool.name}
                                                                </h3>

                                                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                                                    {tool.description}
                                                                </p>

                                                                <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-[#4285F4] transition-colors mt-auto">
                                                                    <span>Open Tool</span>
                                                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                                </div>
                                                            </div>
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 bg-[#F8FAFF]">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Overwhelmed by the options?
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            We help businesses implement these Google tools to streamline operations and drive growth.
                            Let's find the right stack for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="rounded-full bg-[#4285F4] hover:bg-[#3367D6] text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                                <Link to="/contact-us">
                                    Schedule a Free Strategy Call
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6 h-auto">
                                <Link to="/services">
                                    View Our Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Floating CTA */}
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    className="fixed bottom-6 right-6 z-40 hidden md:block"
                >
                    <Button
                        asChild
                        className="rounded-full bg-[#1E3A5F] hover:bg-[#152a45] text-white shadow-lg pr-6 pl-4 py-6 border-none"
                    >
                        <Link to="/free-consultation" className="flex items-center gap-2">
                            <Phone className="w-5 h-5 fill-current" />
                            <span className="font-medium">Get Expert Help</span>
                        </Link>
                    </Button>
                </motion.div>

            </div>
        </>
    );
}
