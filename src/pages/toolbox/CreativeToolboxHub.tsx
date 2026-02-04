import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    ArrowLeft,
    ExternalLink,
    Play,
    Map as MapIcon,
    Camera,
    Glasses,
    Maximize2,
    Layers,
    Sun,
    Image as ImageIcon,
    Sparkles
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';
import { creativeToolsData } from '../../data/creativeTools';

// --- Feature Components ---

const VeoPreviewCard = () => (
    <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800 relative group aspect-video">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-10" />
        <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop"
            alt="Veo AI Preview"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:bg-white/20 transition-all"
            >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
            </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black via-black/60 to-transparent">
            <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-[#4285F4] text-white text-xs font-bold rounded-full uppercase tracking-wider">New</span>
                <span className="text-gray-300 text-sm font-medium">Generative Video Model</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Veo 3.1 Preview</h2>
            <p className="text-gray-300 max-w-xl">
                Generate high-fidelity 1080p+ video clips with consistent physics and realistic lighting.
                The future of AI-native filmmaking starts here.
            </p>
        </div>
    </div>
);

const InteractiveMap3D = () => (
    <div className="bg-[#202124] rounded-3xl overflow-hidden shadow-2xl border border-gray-700 relative aspect-video group">
        {/* Fake UI Overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            <div className="bg-[#303134] p-2 rounded-lg shadow-lg border border-gray-600">
                <Layers className="w-5 h-5 text-gray-300" />
            </div>
            <div className="bg-[#303134] p-2 rounded-lg shadow-lg border border-gray-600">
                <Sun className="w-5 h-5 text-gray-300" />
            </div>
        </div>
        <div className="absolute bottom-4 right-4 z-20 bg-[#303134] px-4 py-2 rounded-full shadow-lg border border-gray-600 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-300 font-mono">LIVE: TOKYO 3D TILES</span>
        </div>

        <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop"
            alt="3D Map View"
            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[20s] ease-linear"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202124] via-transparent to-transparent z-10" />
    </div>
);

const PhotoGalleryHeader = () => (
    <div className="grid grid-cols-4 gap-4 aspect-[21/9]">
        <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
            <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop"
                alt="Photography 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">Magic Editor</div>
        </div>
        <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
            <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop"
                alt="Photography 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
        <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
            <img
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
                alt="Photography 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
        </div>
        <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
            <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop"
                alt="Photography 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">SynthID</div>
        </div>
    </div>
);

const SpatialHero = () => (
    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-3xl">
        {/* Glassmorphism Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-[100px] opacity-40 animate-pulse" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
                animate={{ y: [0, -20, 0], rotateX: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-[80%] h-[60%] bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center justify-center overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <Glasses className="w-24 h-24 text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                <div className="absolute bottom-6 left-6">
                    <h2 className="text-2xl font-bold text-white tracking-wide">Spatial UI</h2>
                    <p className="text-white/60 text-sm">Glassmorphism & Depth</p>
                </div>
            </motion.div>
        </div>

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-12 h-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl"
                style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`
                }}
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 45, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2
                }}
            />
        ))}
    </div>
);

// --- Main Hub Component ---

export default function CreativeToolboxHub() {
    const { persona } = useParams<{ persona: string }>();

    // Find data for this persona
    const data = creativeToolsData.find(p => p.persona === persona);

    if (!data) {
        return <Navigate to="/google-toolbox" replace />;
    }

    // Persona Configuration
    const getConfig = (type: string) => {
        switch (type) {
            case 'videographers':
                return {
                    title: 'Videographers Hub',
                    icon: Play,
                    color: '#EA4335', // Google Red
                    bg: 'bg-black',
                    textColor: 'text-white',
                    Feature: VeoPreviewCard
                };
            case 'map-makers':
                return {
                    title: 'Map Makers Hub',
                    icon: MapIcon,
                    color: '#34A853', // Google Green
                    bg: 'bg-[#202124]', // Dark Map Theme
                    textColor: 'text-gray-100',
                    Feature: InteractiveMap3D
                };
            case 'photographers':
                return {
                    title: 'Photographers Hub',
                    icon: Camera,
                    color: '#4285F4', // Google Blue
                    bg: 'bg-white',
                    textColor: 'text-gray-900',
                    Feature: PhotoGalleryHeader
                };
            case 'vr-enthusiasts':
                return {
                    title: 'VR Enthusiasts Hub',
                    icon: Glasses,
                    color: '#FBBC05', // Google Yellow
                    bg: 'bg-slate-900',
                    textColor: 'text-white',
                    Feature: SpatialHero,
                    glassEffect: true
                };
            default:
                return {
                    title: 'Creative Hub',
                    icon: Sparkles,
                    color: '#4285F4',
                    bg: 'bg-white',
                    textColor: 'text-gray-900',
                    Feature: () => null
                };
        }
    };

    const config = getConfig(persona || '');
    const Icon = config.icon;
    const FeatureComponent = config.Feature;

    return (
        <>
            <Helmet>
                <title>{config.title} | Google Toolbox | ThinkMents</title>
                <meta name="description" content={`Discover curated Google tools for ${data.persona.replace('-', ' ')}.`} />
            </Helmet>

            <div className={`min-h-screen ${config.bg} ${config.textColor} transition-colors duration-500`}>
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
                    <div className="container mx-auto flex justify-between items-center pointer-events-auto">
                        <Link to="/google-toolbox">
                            <Button variant="outline" className={`rounded-full backdrop-blur-md border-white/20 ${config.bg === 'bg-white' ? 'bg-white/80 text-gray-900 hover:bg-gray-100' : 'bg-black/20 text-white hover:bg-white/10'}`}>
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Toolbox
                            </Button>
                        </Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-12 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${config.glassEffect ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white shadow-lg'}`}
                                style={{ color: config.color }}
                            >
                                <Icon className="w-6 h-6" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{config.title}</h1>
                        </motion.div>

                        {/* Feature Component */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-20"
                        >
                            <FeatureComponent />
                        </motion.div>

                        {/* Tool Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.tools.map((tool, index) => (
                                <motion.a
                                    key={tool.name}
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className={`
                    group relative rounded-2xl p-6 transition-all duration-300 border
                    ${config.glassEffect
                                            ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                                            : `${config.bg === 'bg-white' ? 'bg-gray-50 border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:bg-white' : 'bg-[#303134] border-gray-700 hover:bg-[#3c4043] hover:border-gray-500'}`
                                        }
                  `}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${config.glassEffect ? 'bg-white/10' : 'bg-white/10'}`}
                                            style={{ color: config.color }}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <h3 className={`text-xl font-bold mb-2 ${config.glassEffect ? 'text-white' : ''} group-hover:text-[${config.color}] transition-colors`}>
                                        {tool.name}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${config.glassEffect ? 'text-white/60' : 'opacity-80'}`}>
                                        {tool.description}
                                    </p>
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`mt-24 rounded-3xl p-12 text-center relative overflow-hidden ${config.glassEffect ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-gray-100'}`}
                        >
                            <div className="relative z-10">
                                <h2 className={`text-3xl font-bold mb-6 ${config.glassEffect ? 'text-white' : 'text-gray-900'}`}>
                                    Need help mastering these {data.persona.replace('-', ' ')} tools?
                                </h2>
                                <p className={`text-lg mb-8 max-w-2xl mx-auto ${config.glassEffect ? 'text-white/80' : 'text-gray-600'}`}>
                                    Our team specializes in integrating Google's advanced creative stack into professional workflows.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <Button asChild className={`rounded-full px-8 py-6 h-auto text-lg ${config.glassEffect ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-[#4285F4] text-white hover:bg-[#3367D6]'}`}>
                                        <Link to="/contact-us">
                                            Book a Consultation
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Background Decoration */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-10">
                                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-current blur-3xl" style={{ color: config.color }} />
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-current blur-3xl" style={{ color: config.color }} />
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* Floating Action Button (Mobile/Standard) */}
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Link to="/google-toolbox">
                        <Button className={`rounded-full h-14 w-14 shadow-2xl p-0 flex items-center justify-center ${config.bg === 'bg-white' ? 'bg-[#1E3A5F] text-white hover:bg-[#152a45]' : 'bg-white text-black hover:bg-gray-200'}`}>
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                </motion.div>

            </div>
        </>
    );
}
