import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Star, Phone, ExternalLink, ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';
import ServicesMegaMenu, { ServicesMegaMenuMobile } from './ServicesMegaMenu';
import thinkMentsLogo from '../assets/23dd1a5ded9cf69ce18288f1632f0a531713cb93.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    setActiveDropdown(null);
  }, [location.pathname]);

  const aboutPages = [
    { name: 'About Us', href: '/about-us', desc: 'Our mission & values' },
    { name: 'Our Story', href: '/our-story', desc: 'How we started' },
  ];

  const resourcePages = [{ name: 'Blog', href: '/blog', desc: 'Latest insights', icon: Zap }];

  const isActiveLink = (path: string) => location.pathname === path;

  const isActiveDropdown = (paths: string[]) => {
    return paths.some((path) => location.pathname === path || location.pathname.startsWith(path));
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${isScrolled ? 'py-3' : 'py-6'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`
            relative w-[95%] max-w-7xl mx-auto px-6 py-3 rounded-full
            flex items-center justify-between
            transition-all duration-500
            ${isScrolled
              ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
              : 'bg-black/70 backdrop-blur-md border border-white/10 shadow-none'
            }
          `}
        >
          {/* Logo - Left Section */}
          <Link to="/" className="flex-shrink-0 mr-8 group relative z-10">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-full" />
            <motion.img
              src={thinkMentsLogo}
              alt="ThinkMents"
              className="h-10 w-auto object-contain relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation - Center Section */}
          <nav className="hidden lg:flex items-center gap-2">
            {/* Nav Item: Services (Mega Menu) */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="https://website.thinkments.com"
                className={`flex items-center gap-1.5 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group-hover:bg-white/10 ${isActiveDropdown(['/services']) ? 'text-[#00B4D8] bg-white/10' : 'text-white'
                  }`}
              >
                <span className="relative z-10">Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-[#00B4D8]' : 'text-white/60'}`}
                />
              </a>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} // Spring-like ease
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 pt-4 w-auto"
                  >
                    <div
                      className="rounded-2xl border border-gray-600 shadow-2xl bg-[#1a1f2e] backdrop-blur-xl"
                      style={{ backgroundColor: 'rgb(26, 31, 46)' }}
                    >
                      <ServicesMegaMenu isOpen={true} onClose={() => setActiveDropdown(null)} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Item: About */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-white/10 ${isActiveDropdown(['/about-us', '/our-story'])
                    ? 'text-[#00B4D8] bg-white/10'
                    : 'text-white'
                  }`}
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180 text-[#00B4D8]' : 'text-white/60'}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 pt-2"
                  >
                    <div
                      className="rounded-xl border border-gray-600 shadow-2xl p-3 overflow-hidden"
                      style={{ backgroundColor: 'rgb(26, 31, 46)' }}
                    >
                      {aboutPages.map((page) => (
                        <Link
                          key={page.href}
                          to={page.href}
                          className="group/item flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <div>
                            <div className="text-sm font-semibold text-white group-hover/item:text-[#00B4D8] transition-colors">
                              {page.name}
                            </div>
                            <div className="text-xs text-gray-400 group-hover/item:text-gray-300 transition-colors mt-0.5">
                              {page.desc}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/20 group-hover/item:text-[#00B4D8] -translate-x-2 group-hover/item:translate-x-0 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Item: Resources */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-white/10 ${isActiveDropdown(['/blog']) ? 'text-[#00B4D8] bg-white/10' : 'text-white'
                  }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180 text-[#00B4D8]' : 'text-white/60'}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 pt-2"
                  >
                    <div
                      className="rounded-xl border border-gray-600 shadow-2xl p-3 overflow-hidden"
                      style={{ backgroundColor: 'rgb(26, 31, 46)' }}
                    >
                      {resourcePages.map((page) => (
                        <Link
                          key={page.href}
                          to={page.href}
                          className="group/item flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-[#00B4D8]/10 text-[#00B4D8] group-hover/item:bg-[#00B4D8] group-hover/item:text-white transition-colors duration-300">
                            <page.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover/item:text-[#00B4D8] transition-colors">
                              {page.name}
                            </div>
                            <div className="text-xs text-gray-400 group-hover/item:text-gray-300 transition-colors mt-0.5">
                              {page.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Item: Virtual Tours */}
            <a
              href="https://virtualtours.thinkments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-2 px-4 rounded-full text-sm font-medium text-white hover:text-[#00B4D8] hover:bg-white/10 transition-all duration-300"
            >
              <span>Virtual Tours</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
            </a>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9403151023"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>(940) 315-1023</span>
            </a>

            {/* Contact Us Button - Desktop */}
            <Button
              asChild
              className="bg-[#F7B928] hover:bg-[#D4960F] text-black font-bold px-6 py-5 rounded-full shadow-[0_0_20px_rgba(247,185,40,0.3)] hover:shadow-[0_0_30px_rgba(247,185,40,0.5)] transition-all duration-300 text-sm border-0 ring-0"
            >
              <Link to="/contact-us">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Right Section */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:9403151023"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 hover:text-[#F7B928] transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              className="relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
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

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-[#020617]"
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 40px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 h-full flex flex-col pt-28 pb-10 overflow-y-auto relative z-10">
              <div className="flex-1 space-y-6">
                {/* Mobile Services */}
                <div className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between py-5 text-2xl font-light text-white"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span className={mobileServicesOpen ? 'text-[#00B4D8] font-medium' : ''}>
                      Services
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#00B4D8]' : 'text-white/50'}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'circOut' }}
                        className="overflow-hidden"
                      >
                        <ServicesMegaMenuMobile isOpen={true} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile About */}
                <div className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between py-5 text-2xl font-light text-white"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  >
                    <span className={mobileAboutOpen ? 'text-[#00B4D8] font-medium' : ''}>
                      About
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180 text-[#00B4D8]' : 'text-white/50'}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-2 space-y-3">
                          {aboutPages.map((page) => (
                            <Link
                              key={page.href}
                              to={page.href}
                              className="block py-2 text-lg text-white/60 hover:text-white transition-colors"
                            >
                              {page.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Resources */}
                <div className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between py-5 text-2xl font-light text-white"
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  >
                    <span className={mobileResourcesOpen ? 'text-[#00B4D8] font-medium' : ''}>
                      Resources
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180 text-[#00B4D8]' : 'text-white/50'}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-2 space-y-3">
                          {resourcePages.map((page) => (
                            <Link
                              key={page.href}
                              to={page.href}
                              className="block py-2 text-lg text-white/60 hover:text-white transition-colors"
                            >
                              {page.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Virtual Tours */}
                <div className="border-b border-white/10">
                  <a
                    href="https://virtualtours.thinkments.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-5 text-2xl font-light text-white hover:text-[#00B4D8] transition-colors"
                  >
                    <span>Virtual Tours</span>
                    <ExternalLink className="w-5 h-5 opacity-50" />
                  </a>
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="mt-8 space-y-4">
                <Button
                  asChild
                  className="w-full bg-[#F7B928] hover:bg-[#D4960F] text-black font-bold py-7 rounded-2xl text-lg shadow-lg"
                >
                  <Link to="/contact-us">Get Started</Link>
                </Button>

                <div className="flex justify-center gap-6 pt-4 text-white/40">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
