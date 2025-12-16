import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube,
  Star,
  Globe,
  Clock,
  ChevronDown,
  Heart,
  Send,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import NewsletterSignup from './NewsletterSignup';
import thinkMentsLogo from 'figma:asset/23dd1a5ded9cf69ce18288f1632f0a531713cb93.png';

export default function Footer() {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileServiceAreasOpen, setMobileServiceAreasOpen] = useState(false);

  const servicesLinks = [
    { name: 'SEO & Search Marketing', href: '/marketing-seo' },
    { name: 'Google Business Profile Management', href: '/google-business-profile' },
    { name: 'Website Design & Development', href: '/web-development' },
    { name: 'Social Media Marketing', href: '/social-media' },
    { name: 'PPC & Paid Advertising', href: '/paid-advertising' },
    { name: 'Content Marketing', href: '/content-marketing' },
    { name: 'Analytics & Reporting', href: '/analytics-reporting' },
    { name: 'Video & Photography', href: '/video-photography' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact-us' }
  ];

  const resourcesLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Free Consultation', href: '/free-consultation' }
  ];

  const serviceAreas = [
    { name: 'Dallas', href: '/locations/dallas' },
    { name: 'Fort Worth', href: '/locations/fort-worth' },
    { name: 'Denton', href: '/locations/denton' },
    { name: 'Decatur', href: '/locations/decatur' },
    { name: 'Wise County', href: '/locations/decatur' },
    { name: 'North Texas', href: '/locations/north-texas' },
    { name: 'Texas', href: '/locations' },
    { name: 'Nationwide', href: '/locations' }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/ThinkMents/', 
      label: 'Facebook',
      hoverColor: 'hover:text-[#00B4D8]'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/thinkments', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#00B4D8]'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/thinkments/', 
      label: 'Instagram',
      hoverColor: 'hover:text-[#00B4D8]'
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@ThinkMents', 
      label: 'YouTube',
      hoverColor: 'hover:text-[#00B4D8]'
    },
    { 
      icon: Globe, 
      href: 'https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/data=!4m8!3m7!1s0x864dca0c0e2bc3dd:0x7a05b92ccce310c3!8m2!3d33.2283526!4d-97.5883743!9m1!1b1!16s%2Fg%2F11gf6g0v8y', 
      label: 'Google Business Profile',
      hoverColor: 'hover:text-[#00B4D8]'
    }
  ];

  return (
    <footer className="bg-[#1E3A5F] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Desktop 5-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-12">
          {/* Column 1 - Company Info (Wider - 3 columns) */}
          <div className="col-span-3">
            <Link to="/" className="inline-block mb-4">
              <img
                src={thinkMentsLogo}
                alt="ThinkMents Digital Marketing Agency"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            
            <p className="text-base text-white/90 mb-2 font-semibold">
              ThinkMents Digital Marketing Agency
            </p>
            
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              Decatur, Texas | Serving Dallas-Fort Worth Metroplex & 31 States Nationwide
            </p>

            <p className="text-sm text-white/70 mb-6 leading-relaxed italic">
              Trusted experience + Digital innovation = Golden results
            </p>

            {/* Brief Description */}
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              ThinkMents is a Texas-based digital marketing agency delivering SEO, web design, and results-driven marketing solutions since 2002. We help local businesses and national brands achieve measurable growth through strategic digital marketing.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.hoverColor} hover:bg-white/20`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 Google Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Globe className="w-4 h-4" />
                <span>Google Partner</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="col-span-2">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-[#00B4D8] transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-[#00B4D8] transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Service Areas Section in Company Column */}
            <div className="mt-6">
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2 text-xs text-white/80">
                {serviceAreas.map((area, index) => (
                  <React.Fragment key={area.href}>
                    <Link
                      to={area.href}
                      className="hover:text-[#00B4D8] transition-colors duration-200"
                    >
                      {area.name}
                    </Link>
                    {index < serviceAreas.length - 1 && (
                      <span className="text-white/40">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4 - Resources */}
          <div className="col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 hover:text-[#00B4D8] transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact (Wider - 3 columns) */}
          <div className="col-span-3">
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-6">
              <a 
                href="tel:9403151023"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-[#00B4D8] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(940) 315-1023</span>
              </a>
              
              <a 
                href="mailto:info@thinkments.com"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-[#00B4D8] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@thinkments.com</span>
              </a>
              
              <a
                href="https://maps.google.com/?q=301+South+Washburn+St+Suite+D+Decatur+Texas+76234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/80 hover:text-[#00B4D8] transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>301 South Washburn St, Suite D<br />Decatur, TX 76234</span>
              </a>
              
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mon-Fri 8am-6pm CST</span>
              </div>
            </div>

            <Button 
              asChild 
              className="w-full bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold"
            >
              <Link to="/free-consultation">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout - Accordion Style */}
        <div className="lg:hidden space-y-4 mb-8">
          {/* Mobile Logo & Social */}
          <div className="text-center pb-6 border-b border-white/10">
            <Link to="/" className="inline-block mb-4">
              <img
                src={thinkMentsLogo}
                alt="ThinkMents Digital Marketing Agency"
                className="h-10 w-auto brightness-0 invert mx-auto"
              />
            </Link>
            
            <p className="text-sm font-semibold text-white/90 mb-2">
              ThinkMents Digital Marketing Agency
            </p>
            
            <p className="text-xs text-white/80 mb-3">
              Decatur, Texas | Serving Dallas-Fort Worth Metroplex & 31 States Nationwide
            </p>

            <p className="text-xs text-white/70 mb-4 italic">
              Trusted experience + Digital innovation = Golden results
            </p>

            {/* Brief Description - Mobile */}
            <p className="text-xs text-white/80 mb-4 leading-relaxed">
              ThinkMents is a Texas-based digital marketing agency delivering SEO, web design, and results-driven marketing solutions since 2002.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.hoverColor} hover:bg-white/20`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="font-semibold">5.0 (103 Reviews)</span>
            </div>
          </div>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-3 border-b border-white/10"
            >
              <span className="font-semibold">Services</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ul className="py-3 space-y-2">
                    {servicesLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-sm text-white/80 hover:text-[#00B4D8] transition-colors block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Company Accordion */}
          <div>
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="w-full flex items-center justify-between py-3 border-b border-white/10"
            >
              <span className="font-semibold">Company</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileCompanyOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <AnimatePresence>
              {mobileCompanyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ul className="py-3 space-y-2">
                    {companyLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-sm text-white/80 hover:text-[#00B4D8] transition-colors block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Service Areas Accordion */}
          <div>
            <button
              onClick={() => setMobileServiceAreasOpen(!mobileServiceAreasOpen)}
              className="w-full flex items-center justify-between py-3 border-b border-white/10"
            >
              <span className="font-semibold">Service Areas</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileServiceAreasOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <AnimatePresence>
              {mobileServiceAreasOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="py-3">
                    <div className="flex flex-wrap gap-2 text-xs text-white/80">
                      {serviceAreas.map((area, index) => (
                        <React.Fragment key={area.href}>
                          <Link
                            to={area.href}
                            className="hover:text-[#00B4D8] transition-colors duration-200"
                          >
                            {area.name}
                          </Link>
                          {index < serviceAreas.length - 1 && (
                            <span className="text-white/40">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Resources Accordion */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="w-full flex items-center justify-between py-3 border-b border-white/10"
            >
              <span className="font-semibold">Resources</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileResourcesOpen ? 'rotate-180' : ''
                }`} 
              />
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
                  <ul className="py-3 space-y-2">
                    {resourcesLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-sm text-white/80 hover:text-[#00B4D8] transition-colors block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Contact - Always Visible */}
          <div className="pt-4 border-t border-white/10">
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-6">
              <a 
                href="tel:9403151023"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-[#00B4D8] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(940) 315-1023</span>
              </a>
              
              <a 
                href="mailto:info@thinkments.com"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-[#00B4D8] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@thinkments.com</span>
              </a>
              
              <div className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>301 South Washburn St, Suite D<br />Decatur, TX 76234</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mon-Fri 8am-6pm CST</span>
              </div>
            </div>

            <Button 
              asChild 
              className="w-full bg-[#F7B928] hover:bg-[#D4960F] text-[#1E3A5F] font-semibold"
              size="lg"
            >
              <Link to="/free-consultation">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <NewsletterSignup />
        </div>
      </div>

      {/* Bottom Legal Section - Darker Stripe */}
      <div className="bg-[#152943] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            {/* Left - Copyright */}
            <p className="text-center md:text-left">
              © 2025 ThinkMents Digital Marketing Agency. All rights reserved. | Digital Marketing Agency in Decatur, Texas
            </p>

            {/* Center - Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/privacy-policy" 
                className="hover:text-[#00B4D8] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link 
                to="/terms-of-service" 
                className="hover:text-[#00B4D8] transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-white/30">|</span>
              <Link 
                to="/sitemap" 
                className="hover:text-[#00B4D8] transition-colors"
              >
                Sitemap
              </Link>
            </div>

            {/* Right - Made with Love */}
            <p className="flex items-center gap-1 text-center md:text-right">
              Made with <Heart className="w-4 h-4 fill-[#F7B928] text-[#F7B928]" /> in Decatur, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}