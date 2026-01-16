import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Target,
  Megaphone,
  Pencil,
  Share2,
  Code,
  MapPin,
  Star,
  BarChart3,
  Orbit,
  Camera,
  Brain,
  Wrench,
  Puzzle,
  Briefcase,
  Lightbulb,
  Compass,
  Phone,
  ArrowRight
} from 'lucide-react';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const serviceColumns = [
    {
      header: "MARKETING",
      links: [
        { icon: Target, label: "Marketing & SEO", href: "/marketing-seo" },
        { icon: Megaphone, label: "Paid Advertising", href: "/paid-advertising" },
        { icon: Pencil, label: "Content Marketing", href: "/content-marketing" },
        { icon: Share2, label: "Social Media", href: "/social-media" }
      ]
    },
    {
      header: "DIGITAL PRESENCE",
      links: [
        { icon: Code, label: "Web Development", href: "/web-development" },
        { icon: MapPin, label: "Google Business Profile", href: "/google-business-profile" },
        { icon: Star, label: "Reputation Management", href: "/reputation-management" },
        { icon: BarChart3, label: "Analytics & Reporting", href: "/analytics-reporting" }
      ]
    },
    {
      header: "CREATIVE",
      links: [
        { icon: Orbit, label: "Immersive Experiences", href: "/immersive-experiences", badge: "PIONEER", badgeColor: "bg-[#F7B928]" },
        { icon: Camera, label: "Video & Photography", href: "/video-photography" }
      ]
    },
    {
      header: "TECHNOLOGY",
      links: [
        { icon: Brain, label: "AI & Automation", href: "/artificial-intelligence-automation", badge: "NEW", badgeColor: "bg-[#00B4D8]" },
        { icon: Wrench, label: "Technical Services", href: "/technical-services" },
        { icon: Puzzle, label: "Widgets & Integrations", href: "/widgets-integrations" }
      ]
    },
    {
      header: "BUSINESS",
      links: [
        { icon: Briefcase, label: "Recruitment Marketing", href: "/recruitment-marketing" },
        { icon: Lightbulb, label: "Business Solutions", href: "/business-solutions" },
        { icon: Compass, label: "Strategic Consulting", href: "/strategic-consulting" }
      ]
    }
  ];

  return (
    <motion.div
      className="fixed left-0 right-0 mx-auto mt-2 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      style={{ top: '80px', width: 'calc(100vw - 2rem)', maxWidth: '1200px' }}
    >
      {/* Main Content - 6 Columns */}
      <div className="grid grid-cols-6 gap-6 p-6">
        {/* Columns 1-5: Service Links */}
        {serviceColumns.map((column, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-xs font-bold text-gray-500 tracking-wide mb-4">
              {column.header}
            </h3>
            <div className="space-y-2">
              {column.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  to={link.href}
                  onClick={onClose}
                  className="group flex items-start gap-2 py-2 px-2 -mx-2 rounded-md transition-all duration-200 hover:bg-gray-50 hover:pl-3"
                >
                  <link.icon className="w-4 h-4 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#2D3748] group-hover:text-[#00B4D8] transition-colors leading-tight">
                        {link.label}
                      </span>
                      {link.badge && (
                        <Badge className={`${link.badgeColor} text-white text-[9px] px-1.5 py-0 h-4 border-0`}>
                          {link.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Column 6: Featured CTA */}
        <div className="bg-[#1E3A5F] rounded-lg p-6 flex flex-col justify-center items-center text-center h-full">
          <div className="mb-6 w-full">
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Not Sure Where to Start?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Get a free consultation and we&apos;ll help identify the right services for your business.
            </p>
          </div>
          
          <div className="space-y-4 w-full">
            <Link
              to="/free-consultation"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold shadow-sm"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Or call us directly</p>
              <a 
                href="tel:9403151023" 
                className="flex items-center justify-center gap-2 text-white hover:text-[#00B4D8] transition-colors group"
              >
                <span className="font-bold text-lg tracking-wide">(940) 315-1023</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <Link 
          to="/services" 
          onClick={onClose}
          className="text-sm font-semibold text-[#00B4D8] hover:text-[#1E3A5F] transition-colors flex items-center gap-1"
        >
          View All Services
          <ArrowRight className="w-4 h-4" />
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F7B928] text-[#F7B928]" />
            <Star className="w-4 h-4 fill-[#F7B928] text-[#F7B928]" />
            <Star className="w-4 h-4 fill-[#F7B928] text-[#F7B928]" />
            <Star className="w-4 h-4 fill-[#F7B928] text-[#F7B928]" />
            <Star className="w-4 h-4 fill-[#F7B928] text-[#F7B928]" />
            <span className="ml-1 font-semibold">5.0</span>
          </div>
          <span className="text-gray-300">|</span>
          <div className="font-medium">20+ Years</div>
          <span className="text-gray-300">|</span>
          <div className="font-medium">103 Reviews</div>
        </div>
      </div>
    </motion.div>
  );
}

// Mobile version
interface ServicesMegaMenuMobileProps {
  isOpen: boolean;
}

export function ServicesMegaMenuMobile({ isOpen }: ServicesMegaMenuMobileProps) {
  const [openCategory, setOpenCategory] = React.useState<number | null>(null);

  const serviceColumns = [
    {
      header: "MARKETING",
      links: [
        { icon: Target, label: "Marketing & SEO", href: "/marketing-seo" },
        { icon: Megaphone, label: "Paid Advertising", href: "/paid-advertising" },
        { icon: Pencil, label: "Content Marketing", href: "/content-marketing" },
        { icon: Share2, label: "Social Media", href: "/social-media" }
      ]
    },
    {
      header: "DIGITAL PRESENCE",
      links: [
        { icon: Code, label: "Web Development", href: "/web-development" },
        { icon: MapPin, label: "Google Business Profile", href: "/google-business-profile" },
        { icon: Star, label: "Reputation Management", href: "/reputation-management" },
        { icon: BarChart3, label: "Analytics & Reporting", href: "/analytics-reporting" }
      ]
    },
    {
      header: "CREATIVE",
      links: [
        { icon: Orbit, label: "Immersive Experiences", href: "/immersive-experiences", badge: "PIONEER" },
        { icon: Camera, label: "Video & Photography", href: "/video-photography" }
      ]
    },
    {
      header: "TECHNOLOGY",
      links: [
        { icon: Brain, label: "AI & Automation", href: "/artificial-intelligence-automation", badge: "NEW" },
        { icon: Wrench, label: "Technical Services", href: "/technical-services" },
        { icon: Puzzle, label: "Widgets & Integrations", href: "/widgets-integrations" }
      ]
    },
    {
      header: "BUSINESS",
      links: [
        { icon: Briefcase, label: "Recruitment Marketing", href: "/recruitment-marketing" },
        { icon: Lightbulb, label: "Business Solutions", href: "/business-solutions" },
        { icon: Compass, label: "Strategic Consulting", href: "/strategic-consulting" }
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden"
    >
      <div className="pl-4 py-2 space-y-2">
        {/* Category Accordions */}
        {serviceColumns.map((category, idx) => (
          <div key={idx} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => toggleCategory(idx)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#1E3A5F] hover:bg-gray-50 rounded-md transition-colors"
            >
              <span>{category.header}</span>
              <motion.div
                animate={{ rotate: openCategory === idx ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4 transform rotate-90" />
              </motion.div>
            </button>
            
            {openCategory === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pl-4 pb-2 space-y-1">
                  {category.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      to={link.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-[#00B4D8] transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                      {link.badge && (
                        <Badge className="bg-[#00B4D8] text-white text-[9px] px-1.5 py-0 h-4 border-0">
                          {link.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}

        {/* CTA Card at Bottom */}
        <div className="bg-[#1E3A5F] rounded-lg p-6 mx-4 my-4 flex flex-col justify-center items-center text-center">
          <div className="mb-6 w-full">
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Not Sure Where to Start?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Get a free consultation and we&apos;ll help identify the right services for your business.
            </p>
          </div>
          
          <div className="space-y-4 w-full">
            <Link
              to="/free-consultation"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold shadow-sm"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Or call us directly</p>
              <a 
                href="tel:9403151023" 
                className="flex items-center justify-center gap-2 text-white hover:text-[#00B4D8] transition-colors group"
              >
                <span className="font-bold text-lg tracking-wide">(940) 315-1023</span>
              </a>
            </div>
          </div>
        </div>

        {/* View All Services Link */}
        <Link 
          to="/services"
          className="block px-4 py-3 text-sm font-semibold text-[#00B4D8] hover:text-[#1E3A5F]"
        >
          View All Services →
        </Link>
      </div>
    </motion.div>
  );
}