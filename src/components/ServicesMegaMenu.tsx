import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Code,
  ShoppingCart,
  Search,
  MousePointer,
  Share2,
  Camera,
  Video,
  Box,
  Cpu,
  TrendingUp,
  Target,
  FileText,
  Award,
  Users,
  Smartphone,
} from 'lucide-react';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceItem = ({ item, onClose }: { item: any; onClose: () => void }) => (
  <Link
    to={item.path}
    onClick={onClose}
    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
  >
    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient} flex-shrink-0`}>
      <item.icon className="w-4 h-4 text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-sm font-semibold text-white group-hover:text-[#00B4D8] transition-colors">
        {item.name}
      </div>
      <p className="text-xs text-gray-400 truncate">{item.desc}</p>
    </div>
  </Link>
);

export default function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  if (!isOpen) return null;

  const services = {
    development: [
      {
        name: 'Web Development',
        path: '/services/web',
        icon: Code,
        gradient: 'from-blue-500 to-cyan-500',
        desc: 'Custom websites & web apps',
      },
      {
        name: 'E-Commerce',
        path: '/services/web/ecommerce',
        icon: ShoppingCart,
        gradient: 'from-purple-500 to-pink-500',
        desc: 'Online stores that sell',
      },
      {
        name: 'Mobile Apps',
        path: '/services/web/apps',
        icon: Smartphone,
        gradient: 'from-orange-500 to-red-500',
        desc: 'iOS & Android solutions',
      },
    ],
    marketing: [
      {
        name: 'SEO Services',
        path: '/services/marketing/seo',
        icon: Search,
        gradient: 'from-green-500 to-emerald-500',
        desc: 'Rank #1 on Google',
      },
      {
        name: 'PPC Advertising',
        path: '/services/marketing/paid',
        icon: MousePointer,
        gradient: 'from-blue-600 to-indigo-600',
        desc: 'Google & Facebook Ads',
      },
      {
        name: 'Social Media',
        path: '/services/marketing/social',
        icon: Share2,
        gradient: 'from-pink-500 to-rose-500',
        desc: 'Build your community',
      },
    ],
    creative: [
      {
        name: 'Brand Strategy',
        path: '/services/marketing/brand',
        icon: Target,
        gradient: 'from-amber-500 to-yellow-500',
        desc: 'Logos & brand identity',
      },
      {
        name: 'Content Marketing',
        path: '/services/marketing/content',
        icon: FileText,
        gradient: 'from-teal-500 to-cyan-500',
        desc: 'Engaging blogs & copy',
      },
      {
        name: 'Video Production',
        path: '/services/media/video',
        icon: Video,
        gradient: 'from-red-600 to-orange-600',
        desc: 'Professional videography',
      },
    ],
    innovation: [
      {
        name: 'AI Solutions',
        path: '/services/tech/ai',
        icon: Cpu,
        gradient: 'from-violet-600 to-purple-600',
        desc: 'Automation & chatbots',
      },
      {
        name: 'Virtual Tours',
        path: '/services/media/virtual-tours',
        icon: Box,
        gradient: 'from-blue-400 to-indigo-400',
        desc: 'Immersive 3D experiences',
      },
      {
        name: 'Analytics',
        path: '/services/marketing/analytics',
        icon: TrendingUp,
        gradient: 'from-emerald-400 to-green-400',
        desc: 'Data-driven insights',
      },
    ],
  };

  const allServices = [
    ...services.development,
    ...services.marketing,
    ...services.creative,
    ...services.innovation,
  ];

  return (
    <div className="w-[90vw] max-w-[900px] mx-auto bg-[#1a1f2e]">
      {/* Desktop: Grid Layout */}
      <div className="hidden md:grid gap-6 p-8 grid-cols-3">
        {allServices.map((service) => (
          <div key={service.path} className="min-w-0">
            <ServiceItem item={service} onClose={onClose} />
          </div>
        ))}
      </div>

      {/* Mobile: Single Column */}
      <div className="md:hidden p-4 space-y-2 max-h-[70vh] overflow-y-auto">
        {allServices.map((service) => (
          <ServiceItem key={service.path} item={service} onClose={onClose} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-white/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4" /> Award Winning
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-600" />
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4" /> 500+ Clients
          </span>
        </div>
        <a
          href="https://website.thinkments.com"
          className="text-sm font-semibold text-[#00B4D8] hover:text-white transition-colors flex items-center gap-1 group"
          onClick={onClose}
        >
          View All Services
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}

// Mobile Version
export const ServicesMegaMenuMobile = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  const categories = [
    {
      title: 'Development',
      items: [
        { name: 'Web Development', path: '/services/web' },
        { name: 'E-Commerce', path: '/services/web/ecommerce' },
        { name: 'Custom Apps', path: '/services/web/apps' },
      ],
    },
    {
      title: 'Marketing',
      items: [
        { name: 'SEO Optimization', path: '/services/marketing/seo' },
        { name: 'PPC Advertising', path: '/services/marketing/paid' },
        { name: 'Social Media', path: '/services/marketing/social' },
      ],
    },
    {
      title: 'Innovation',
      items: [
        { name: 'AI Solutions', path: '/services/tech/ai' },
        { name: 'Virtual Tours', path: '/services/media/virtual-tours' },
      ],
    },
  ];

  return (
    <div className="pl-4 py-2 space-y-6">
      {categories.map((category) => (
        <div key={category.title}>
          <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">
            {category.title}
          </h4>
          <div className="space-y-2">
            {category.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-lg text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <a href="https://website.thinkments.com" className="block mt-4 text-[#00B4D8] font-medium">
        View All Services →
      </a>
    </div>
  );
};
