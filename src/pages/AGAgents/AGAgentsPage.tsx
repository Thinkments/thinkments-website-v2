import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
    Brain,
    TrendingUp,
    UserCheck,
    DollarSign,
    Lightbulb,
    ShieldCheck,
    Clock,
    BarChart3,
    MessageSquare,
    Sparkles,
    ChevronRight,
    Check,
    Zap,
    Target,
    Users,
    Activity,
    ArrowRight
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';

// Brand Colors
const AGENT_COLORS = {
    strategy: '#7C3AED', // Purple
    creative: '#F59E0B', // Amber
    client: '#10B981', // Emerald
    antigravity: '#3B82F6', // Blue
};

// LAYER 1: Growth & Strategy
const STRATEGY_AGENTS = [
    {
        id: 'trend-hunter',
        name: 'Trend Hunter',
        subtitle: 'Market Intelligence',
        icon: TrendingUp,
        description: 'Monitors social sentiment, competitor ad spend, and emerging keywords in real-time.',
        benefits: ['Real-time opportunity alerts', 'Competitor tracking', 'Keyword discovery'],
        color: AGENT_COLORS.strategy
    },
    {
        id: 'lead-scorer',
        name: 'Lead Scorer',
        subtitle: 'Sales Ops',
        icon: UserCheck,
        description: 'Enriches leads with LinkedIn/Web data and prioritizes your sales pipeline automatically.',
        benefits: ['Lead enrichment', 'Smart prioritization', 'Sales automation'],
        color: AGENT_COLORS.strategy
    },
    {
        id: 'budget-optimizer',
        name: 'Budget Optimizer',
        subtitle: 'ROAS Maximizer',
        icon: DollarSign,
        description: 'Autonomously shifts budget between campaigns (Meta, Google, etc.) based on performance.',
        benefits: ['Auto-budget allocation', 'ROAS optimization', 'Platform balancing'],
        color: AGENT_COLORS.strategy
    },
];

// LAYER 2: Content & Creative
const CREATIVE_AGENTS = [
    {
        id: 'content-architect',
        name: 'Content Architect',
        subtitle: 'Content Factory',
        icon: Lightbulb,
        description: 'Transforms one piece of content into 20+ LinkedIn posts, 50 tweets, and 5 newsletters.',
        benefits: ['Content multiplication', 'Multi-platform output', 'Time savings'],
        color: AGENT_COLORS.creative
    },
    {
        id: 'brand-guardian',
        name: 'Brand Guardian',
        subtitle: 'QA Agent',
        icon: ShieldCheck,
        description: 'Ensures all content matches your brand voice, colors, and compliance rules.',
        benefits: ['Brand consistency', 'Compliance checking', 'Quality assurance'],
        color: AGENT_COLORS.creative
    },
    {
        id: 'media-scheduler',
        name: 'Media Scheduler',
        subtitle: 'Perfect Timing',
        icon: Clock,
        description: 'Posts content at optimal times and monitors initial engagement metrics.',
        benefits: ['Optimal posting times', 'API automation', 'Engagement tracking'],
        color: AGENT_COLORS.creative
    },
];

// LAYER 3: Client Management
const CLIENT_AGENTS = [
    {
        id: 'reporting-liaison',
        name: 'Reporting Liaison',
        subtitle: 'Auto Reports',
        icon: BarChart3,
        description: 'Generates natural-language reports for clients with insights and recommendations.',
        benefits: ['Automated reporting', 'Plain-English insights', 'Time reclaimed'],
        color: AGENT_COLORS.client
    },
    {
        id: 'sentiment-monitor',
        name: 'Sentiment Monitor',
        subtitle: 'Churn Prevention',
        icon: MessageSquare,
        description: 'Monitors client communications and alerts you before satisfaction issues escalate.',
        benefits: ['Early warning system', 'Client retention', 'Proactive support'],
        color: AGENT_COLORS.client
    },
];

// ANTIGRAVITY ARCHITECTURE
const ARCHITECTURE_ROLES = [
    { role: 'Generator', task: 'Drafts ad copy/creative', verification: 'Proof of Work / Creative Score', color: '#3B82F6' },
    { role: 'Validator', task: 'Checks for brand alignment', verification: 'Cross-references Style Guide', color: '#8B5CF6' },
    { role: 'Executor', task: 'Deploys to ad platforms', verification: 'API success & transaction logs', color: '#10B981' },
];

export default function AGAgentsPage() {
    const [selectedLayer, setSelectedLayer] = useState<'strategy' | 'creative' | 'client' | null>(null);
    const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

    const allAgents = [...STRATEGY_AGENTS, ...CREATIVE_AGENTS, ...CLIENT_AGENTS];

    const filteredAgents = selectedLayer
        ? selectedLayer === 'strategy'
            ? STRATEGY_AGENTS
            : selectedLayer === 'creative'
                ? CREATIVE_AGENTS
                : CLIENT_AGENTS
        : allAgents;

    return (
        <>
            <Helmet>
                <title>AI Agents for Digital Marketing | Automate Your Agency | ThinkMents</title>
                <meta
                    name="description"
                    content="Deploy 8 specialized AI agents to automate your digital marketing firm. From strategy to content creation to client management - all powered by Antigravity."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 font-sans text-white">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-purple-300">Powered by Antigravity</span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        >
                            Your Digital Marketing Firm,
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
                                Running on Autopilot.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
                        >
                            Deploy 8 specialized AI agents to handle strategy, content creation, and client management.
                            Reclaim 80% of your time. Scale without hiring. Verified results through Antigravity's proof-of-work system.
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button
                                asChild
                                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6 h-auto shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all"
                            >
                                <Link to="/contact-us">
                                    <Zap className="w-5 h-5 mr-2" />
                                    Deploy Your Agents
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 text-lg px-8 py-6 h-auto"
                            >
                                <a href="#architecture">
                                    How It Works
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl"
                        >
                            {[
                                { label: '8 Agents', value: 'Specialized' },
                                { label: '80% Time Saved', value: 'On Average' },
                                { label: '24/7', value: 'Always On' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.value}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Layer Selector */}
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Three Layers of <span className="text-purple-400">Automation</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4 mb-12">
                            {[
                                { id: 'strategy' as const, label: 'Strategy Layer', icon: Brain, color: AGENT_COLORS.strategy, count: STRATEGY_AGENTS.length },
                                { id: 'creative' as const, label: 'Creative Layer', icon: Lightbulb, color: AGENT_COLORS.creative, count: CREATIVE_AGENTS.length },
                                { id: 'client' as const, label: 'Client Layer', icon: Users, color: AGENT_COLORS.client, count: CLIENT_AGENTS.length },
                            ].map((layer) => {
                                const Icon = layer.icon;
                                const isSelected = selectedLayer === layer.id;

                                return (
                                    <motion.button
                                        key={layer.id}
                                        onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
                                        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                            ? 'bg-white/10 border-white/30 shadow-lg'
                                            : 'bg-white/5 border-white/10 hover:border-white/20'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: `${layer.color}20`, color: layer.color }}
                                            >
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <div className="text-left flex-1">
                                                <h3 className="font-bold text-lg">{layer.label}</h3>
                                                <p className="text-sm text-gray-400">{layer.count} Agents</p>
                                            </div>
                                        </div>
                                        {isSelected && (
                                            <motion.div
                                                layoutId="selected-layer"
                                                className="absolute inset-0 rounded-2xl border-2"
                                                style={{ borderColor: layer.color }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Agent Cards */}
                <section className="pb-20 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedLayer || 'all'}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filteredAgents.map((agent, index) => {
                                    const Icon = agent.icon;
                                    const isHovered = hoveredAgent === agent.id;

                                    return (
                                        <motion.div
                                            key={agent.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onHoverStart={() => setHoveredAgent(agent.id)}
                                            onHoverEnd={() => setHoveredAgent(null)}
                                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                                        >
                                            {/* Gradient Glow */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                                                style={{ background: `radial-gradient(circle at center, ${agent.color}, transparent)` }}
                                            />

                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div
                                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                                    style={{ backgroundColor: `${agent.color}20`, color: agent.color }}
                                                >
                                                    <Icon className="w-8 h-8" />
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                                                <p className="text-sm text-gray-400 mb-4">{agent.subtitle}</p>

                                                {/* Description */}
                                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                    {agent.description}
                                                </p>

                                                {/* Benefits */}
                                                <ul className="space-y-2">
                                                    {agent.benefits.map((benefit, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: agent.color }} />
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* Antigravity Architecture */}
                <section id="architecture" className="py-20 px-4 bg-black/30">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Antigravity</span> Architecture
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Every agent operates with incentivized verification. This ensures quality, transparency, and trustless execution.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {ARCHITECTURE_ROLES.map((role, index) => (
                                <motion.div
                                    key={role.role}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: role.color }}
                                        />
                                        <h3 className="text-xl font-bold">{role.role}</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-3">{role.task}</p>
                                    <div className="bg-black/30 rounded-lg p-3 border border-white/5">
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Verification Method</p>
                                        <p className="text-sm font-medium" style={{ color: role.color }}>
                                            {role.verification}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/30 text-center"
                        >
                            <Activity className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                            <h3 className="text-2xl font-bold mb-3">Proof of Work = Trust</h3>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Unlike traditional automation, Antigravity agents can't "fake it." Every action is verified,
                                logged, and traceable. You get real results, not hollow promises.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-4xl font-bold text-center mb-12">
                            Perfect For
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Digital Marketing Agencies',
                                    description: 'Scale your client roster without hiring. Let agents handle the repetitive work while you focus on strategy and relationships.',
                                    icon: Target
                                },
                                {
                                    title: 'In-House Marketing Teams',
                                    description: 'Do more with less. Automate reporting, content distribution, and campaign optimization so your team can focus on creative work.',
                                    icon: Users
                                },
                                {
                                    title: 'Growth-Stage Startups',
                                    description: 'Get enterprise-level marketing infrastructure without the enterprise budget. Deploy agents as you grow.',
                                    icon: TrendingUp
                                },
                                {
                                    title: 'Solo Founders',
                                    description: 'You don\'t need a marketing team when you have 8 agents working 24/7. Build your growth engine without sacrificing equity.',
                                    icon: Zap
                                },
                            ].map((useCase, index) => {
                                const Icon = useCase.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
                                    >
                                        <Icon className="w-12 h-12 mb-4 text-purple-400" />
                                        <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 relative overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl" />

                    <div className="container mx-auto max-w-4xl relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Deploy Your Agent Team?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Join the next generation of marketing automation. Get a custom agent deployment plan
                                tailored to your business in 24 hours.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-10 py-7 h-auto shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all"
                                >
                                    <Link to="/contact-us">
                                        <Sparkles className="w-5 h-5 mr-2" />
                                        Get Your Custom Plan
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-full border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 text-lg px-10 py-7 h-auto"
                                >
                                    <Link to="/services">
                                        View All Services
                                    </Link>
                                </Button>
                            </div>

                            <p className="text-sm text-gray-400 mt-8">
                                🚀 First 10 clients get priority onboarding + 2 weeks of optimization included
                            </p>
                        </motion.div>
                    </div>
                </section>

            </div>
        </>
    );
}
