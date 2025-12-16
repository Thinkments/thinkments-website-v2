import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Star, Phone, Briefcase, Award, Users, FileText, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import ServicesMegaMenu, { ServicesMegaMenuMobile } from './ServicesMegaMenu';
import thinkMentsLogo from 'figma:asset/23dd1a5ded9cf69ce18288f1632f0a531713cb93.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileWorkOpen(false);
    setMobileAboutOpen(false);
    setMobileResourcesOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsServicesOpen(false);
      setIsWorkOpen(false);
      setIsAboutOpen(false);
      setIsResourcesOpen(false);
    };

    if (isServicesOpen || isWorkOpen || isAboutOpen || isResourcesOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isServicesOpen, isWorkOpen, isAboutOpen, isResourcesOpen]);

  const workPages = [
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'Testimonials', href: '/testimonials', icon: Star },
    { name: 'Industries', href: '/industries', icon: Users }
  ];

  const aboutPages = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Story', href: '/our-story' }
  ];

  const resourcePages = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Locations', href: '/locations', icon: MapPin }
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const isActiveDropdown = (paths: string[]) => {
    return paths.some(path => location.pathname === path || location.pathname.startsWith(path));
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1E3A5F]/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-r from-[#1E3A5F] via-[#234B70] to-[#1E3A5F]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left Section */}
          <Link to="/" className="flex-shrink-0 mr-10">
            <motion.img
              src={thinkMentsLogo}
              alt="ThinkMents"
              className="h-12 w-auto object-contain"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.15)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation - Center Section */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services - Mega Menu */}
            <div 
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`flex items-center gap-1 py-2 font-medium text-lg transition-colors duration-200 ${
                  isActiveDropdown(['/services', '/marketing', '/web', '/paid', '/content', '/social', '/google', '/reputation', '/analytics', '/immersive', '/video', '/artificial', '/technical', '/widgets', '/recruitment', '/business', '/strategic'])
                    ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' 
                    : 'text-white hover:text-[#00B4D8]'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </motion.div>
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <ServicesMegaMenu isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
                )}
              </AnimatePresence>
            </div>

            {/* Work Dropdown */}
            <div 
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`flex items-center gap-1 py-2 font-medium text-lg transition-colors duration-200 ${
                  isActiveDropdown(['/portfolio', '/case-studies', '/testimonials', '/industries'])
                    ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' 
                    : 'text-white hover:text-[#00B4D8]'
                }`}
                onClick={() => setIsWorkOpen(!isWorkOpen)}
              >
                <span>Work</span>
                <motion.div
                  animate={{ rotate: isWorkOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isWorkOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {workPages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                          isActiveLink(page.href)
                            ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                            : 'text-[#2D3748] hover:bg-gray-50 hover:text-[#00B4D8]'
                        }`}
                      >
                        <page.icon className="w-4 h-4" />
                        {page.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`flex items-center gap-1 py-2 font-medium text-lg transition-colors duration-200 ${
                  isActiveDropdown(['/about-us', '/our-story'])
                    ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' 
                    : 'text-white hover:text-[#00B4D8]'
                }`}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <span>About</span>
                <motion.div
                  animate={{ rotate: isAboutOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {aboutPages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className={`block px-4 py-3 transition-colors ${
                          isActiveLink(page.href)
                            ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                            : 'text-[#2D3748] hover:bg-gray-50 hover:text-[#00B4D8]'
                        }`}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`flex items-center gap-1 py-2 font-medium text-lg transition-colors duration-200 ${
                  isActiveDropdown(['/blog', '/resources', '/faqs', '/knowledge-base', '/locations'])
                    ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' 
                    : 'text-white hover:text-[#00B4D8]'
                }`}
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                <span>Resources</span>
                <motion.div
                  animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {resourcePages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                          isActiveLink(page.href)
                            ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                            : 'text-[#2D3748] hover:bg-gray-50 hover:text-[#00B4D8]'
                        }`}
                      >
                        <page.icon className="w-4 h-4" />
                        {page.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Phone Number */}
            <a 
              href="tel:9403151023" 
              className="text-base text-white/70 flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>(940) 315-1023</span>
            </a>

            {/* CTA Button */}
            <Button 
              asChild 
              className="bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              <Link to="/free-consultation">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Right Section - Phone Icon + Hamburger */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Mobile Phone Icon Only */}
            <a 
              href="tel:9403151023" 
              className="text-white hover:text-[#00B4D8] transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-white hover:text-[#00B4D8] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mx-auto px-4 py-6 space-y-1">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActiveDropdown(['/services', '/marketing', '/web', '/paid', '/content', '/social', '/google', '/reputation', '/analytics', '/immersive', '/video', '/artificial', '/technical', '/widgets', '/recruitment', '/business', '/strategic'])
                      ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                      : 'text-[#2D3748] hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <ServicesMegaMenuMobile isOpen={mobileServicesOpen} />
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Work Accordion */}
              <div>
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActiveDropdown(['/portfolio', '/case-studies', '/testimonials', '/industries'])
                      ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                      : 'text-[#2D3748] hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                >
                  <span>Work</span>
                  <motion.div
                    animate={{ rotate: mobileWorkOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {mobileWorkOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {workPages.map((page) => (
                          <Link
                            key={page.href}
                            to={page.href}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                              isActiveLink(page.href)
                                ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-[#00B4D8]'
                            }`}
                          >
                            <page.icon className="w-4 h-4" />
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile About Accordion */}
              <div>
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActiveDropdown(['/about-us', '/our-story'])
                      ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                      : 'text-[#2D3748] hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                >
                  <span>About</span>
                  <motion.div
                    animate={{ rotate: mobileAboutOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {aboutPages.map((page) => (
                          <Link
                            key={page.href}
                            to={page.href}
                            className={`block px-4 py-2 rounded-lg transition-colors ${
                              isActiveLink(page.href)
                                ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-[#00B4D8]'
                            }`}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Resources Accordion */}
              <div>
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActiveDropdown(['/blog', '/resources', '/faqs', '/knowledge-base', '/locations'])
                      ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                      : 'text-[#2D3748] hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                >
                  <span>Resources</span>
                  <motion.div
                    animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {resourcePages.map((page) => (
                          <Link
                            key={page.href}
                            to={page.href}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                              isActiveLink(page.href)
                                ? 'bg-[#00B4D8]/10 text-[#1E3A5F] font-semibold'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-[#00B4D8]'
                            }`}
                          >
                            <page.icon className="w-4 h-4" />
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Bottom Section */}
              <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
                {/* Mobile Phone with Icon */}
                <a 
                  href="tel:9403151023" 
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-lg text-[#1E3A5F] hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(940) 315-1023</span>
                </a>

                {/* Mobile CTA Button - Full Width */}
                <Button 
                  asChild 
                  className="w-full bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-bold py-4 rounded-full"
                  size="lg"
                >
                  <Link to="/free-consultation">Free Consultation</Link>
                </Button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-base text-gray-600">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <span className="font-semibold text-[#1E3A5F]">5.0</span>
                  <span className="text-gray-500">(103 Reviews)</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}