import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Star, Phone, Briefcase, Award, Users, FileText, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import ServicesMegaMenu, { ServicesMegaMenuMobile } from './ServicesMegaMenu';
import thinkMentsLogo from 'figma:asset/23dd1a5ded9cf69ce18288f1632f0a531713cb93.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    setMobileAboutOpen(false);
    setMobileResourcesOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsServicesOpen(false);
      setIsAboutOpen(false);
      setIsResourcesOpen(false);
    };

    if (isServicesOpen || isAboutOpen || isResourcesOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isServicesOpen, isAboutOpen, isResourcesOpen]);

  const aboutPages = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Story', href: '/our-story' }
  ];

  const resourcePages = [
    { name: 'Blog', href: '/blog', icon: FileText }
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const isActiveDropdown = (paths: string[]) => {
    return paths.some(path => location.pathname === path || location.pathname.startsWith(path));
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div
          className={`
            w-[95%] max-w-7xl mx-auto px-6 py-3 rounded-full
            flex items-center justify-between
            transition-all duration-300
            bg-gray-900/80 backdrop-blur-md shadow-lg border border-white/10
          `}
        >
          {/* Logo - Left Section */}
          <Link to="/" className="flex-shrink-0 mr-8">
            <motion.img
              src={thinkMentsLogo}
              alt="ThinkMents"
              className="h-10 w-auto object-contain"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.15)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation - Center Section */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services - Mega Menu */}
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`flex items-center gap-1.5 py-2 px-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActiveDropdown(['/services', '/marketing', '/web', '/paid', '/content', '/social', '/google', '/reputation', '/analytics', '/immersive', '/video', '/artificial', '/technical', '/widgets', '/recruitment', '/business', '/strategic'])
                    ? 'bg-white/10 text-[#00B4D8]'
                    : 'text-white hover:bg-white/10 hover:text-[#00B4D8]'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </motion.div>
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 pt-2">
                    <ServicesMegaMenu isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`flex items-center gap-1.5 py-2 px-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActiveDropdown(['/about-us', '/our-story'])
                    ? 'bg-white/10 text-[#00B4D8]'
                    : 'text-white hover:bg-white/10 hover:text-[#00B4D8]'
                }`}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <span>About</span>
                <motion.div
                  animate={{ rotate: isAboutOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-1"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {aboutPages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
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
                className={`flex items-center gap-1.5 py-2 px-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActiveDropdown(['/blog', '/resources', '/faqs', '/knowledge-base'])
                    ? 'bg-white/10 text-[#00B4D8]'
                    : 'text-white hover:bg-white/10 hover:text-[#00B4D8]'
                }`}
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                <span>Resources</span>
                <motion.div
                  animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-1"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {resourcePages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
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

            {/* Virtual Tours Link */}
            <a
              href="https://virtualtours.thinkments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-2 px-3 rounded-full text-sm font-medium text-white hover:bg-white/10 hover:text-[#00B4D8] transition-all duration-300"
            >
              <span>Virtual Tours</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone Number */}
            <a
              href="tel:9403151023"
              className="text-sm text-white/90 flex items-center gap-1.5 hover:text-[#F7B928] transition-colors duration-200 font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(940) 315-1023</span>
            </a>

            {/* Contact Us Button - Desktop */}
            <motion.button
              asChild
              className="bg-[#F7B928] hover:bg-[#D4960F] text-black font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap h-auto text-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/contact-us">Contact Us</Link>
            </motion.button>
          </div>

          {/* Mobile Right Section - Phone Icon + Hamburger */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Mobile Phone Only */}
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
      </motion.header>

      {/* Mobile Menu - Full Screen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-0 bg-[#1E3A5F] z-40 overflow-y-auto pt-24"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-6 py-6 space-y-2">
              {/* Mobile Services Accordion */}
              <div className="border-b border-white/10 pb-2">
                <button
                  className={`w-full flex items-center justify-between py-4 text-lg font-medium transition-colors ${
                    isActiveDropdown(['/services', '/marketing', '/web', '/paid', '/content', '/social', '/google', '/reputation', '/analytics', '/immersive', '/video', '/artificial', '/technical', '/widgets', '/recruitment', '/business', '/strategic'])
                      ? 'text-[#00B4D8]'
                      : 'text-white'
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

              {/* Mobile About Accordion */}
              <div className="border-b border-white/10 pb-2">
                <button
                  className={`w-full flex items-center justify-between py-4 text-lg font-medium transition-colors ${
                    isActiveDropdown(['/about-us', '/our-story'])
                      ? 'text-[#00B4D8]'
                      : 'text-white'
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
                      <div className="pl-4 py-2 space-y-2">
                        {aboutPages.map((page) => (
                          <Link
                            key={page.href}
                            to={page.href}
                            className={`block py-2 text-base text-white/70 hover:text-white transition-colors`}
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
              <div className="border-b border-white/10 pb-2">
                <button
                  className={`w-full flex items-center justify-between py-4 text-lg font-medium transition-colors ${
                    isActiveDropdown(['/blog', '/resources', '/faqs', '/knowledge-base'])
                      ? 'text-[#00B4D8]'
                      : 'text-white'
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
                      <div className="pl-4 py-2 space-y-2">
                        {resourcePages.map((page) => (
                          <Link
                            key={page.href}
                            to={page.href}
                            className={`flex items-center gap-3 py-2 text-base text-white/70 hover:text-white transition-colors`}
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

              {/* Mobile Virtual Tours Link */}
              <div className="border-b border-white/10 pb-2">
                <a
                  href="https://virtualtours.thinkments.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between py-4 text-lg font-medium text-white hover:text-[#00B4D8] transition-colors"
                >
                  <span>Virtual Tours</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Mobile Bottom Section */}
              <div className="pt-8 mt-4 space-y-6">
                {/* Mobile Phone with Icon */}
                <a 
                  href="tel:9403151023" 
                  className="flex items-center justify-center gap-2 py-3 text-white hover:text-[#F7B928] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold text-lg">(940) 315-1023</span>
                </a>

                {/* Mobile Contact Us Button - Full Width */}
                <Button 
                  asChild 
                  className="w-full bg-[#F7B928] hover:bg-[#D4960F] text-black font-bold py-6 rounded-full text-lg shadow-lg"
                  size="lg"
                >
                  <Link to="/contact-us">Contact Us</Link>
                </Button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-base text-white/60">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">5.0</span>
                  <span>(103 Reviews)</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}