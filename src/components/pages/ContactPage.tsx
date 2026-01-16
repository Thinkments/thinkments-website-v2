import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  Star,
  CheckCircle,
  Calendar,
  MessageCircle,
  Building,
  Shield,
  Send,
  ExternalLink
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    heardAbout: '',
    services: [] as string[],
    message: '',
    contactMethod: 'email'
  });

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const alternativeRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });
  const isAlternativeInView = useInView(alternativeRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const serviceOptions = [
    'Marketing & SEO',
    'Web Development',
    'Google Business Profile',
    'Paid Advertising',
    'Video & Photography',
    'Virtual Tours / 360°',
    'AI & Automation',
    'Social Media',
    'Reputation Management',
    'Other / Not Sure'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  // LocalBusiness Structured Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ThinkMents Digital Marketing Agency",
    "alternateName": "ThinkMents",
    "description": "Full-service digital marketing agency specializing in web design, SEO, Google Business Profile management, virtual tours, and AI automation. Serving businesses across Texas and 31 states since 2002.",
    "url": "https://thinkments.com",
    "logo": "https://thinkments.com/logo.png",
    "image": "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjU0NDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "telephone": "(940) 315-1023",
    "email": "info@thinkments.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "301 South Washburn St, Suite D",
      "addressLocality": "Decatur",
      "addressRegion": "TX",
      "postalCode": "76234",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.2283526,
      "longitude": -97.5883743
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "103",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/ThinkMents/",
      "https://www.linkedin.com/company/thinkments",
      "https://www.instagram.com/thinkments/",
      "https://www.youtube.com/@ThinkMents"
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Texas"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "foundingDate": "2002",
    "founder": {
      "@type": "Person",
      "name": "Corey Rumble"
    }
  };

  return (
    <>
      <SEO
        title="Contact ThinkMents - Let's Start a Conversation"
        description="Contact ThinkMents Digital Marketing Agency. Call (940) 315-1023 or email info@thinkments.com. Free consultation available."
        url="/contact-us"
        type="website"
        structuredData={localBusinessSchema}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[
        { name: 'Home', path: '/' },
        { name: 'Contact' }
      ]} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#F8F9FA] py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #1E3A5F 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A5F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether you have a quick question or want to discuss a complete marketing strategy, we&apos;re here to help. No pressure, no jargon—just honest advice.
            </p>
          </motion.div>

          {/* Quick Contact Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {/* Phone */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <a href="tel:9403151023" className="text-2xl font-bold text-[#1E3A5F] hover:text-[#00B4D8] transition-colors mb-2 block">
                  (940) 315-1023
                </a>
                <p className="text-gray-600">Call or Text</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <a href="mailto:info@thinkments.com" className="text-2xl font-bold text-[#1E3A5F] hover:text-[#00B4D8] transition-colors mb-2 block">
                  info@thinkments.com
                </a>
                <p className="text-gray-600">Email Us</p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F] mb-2">
                  Mon-Fri 8am-6pm CST
                </div>
                <p className="text-gray-600">Business Hours</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Columns */}
      <section ref={formRef} className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Contact Form (60%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="shadow-xl">
                <CardContent className="p-6 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours—usually much sooner.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1 - Name */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2 - Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Row 3 - Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Row 4 - Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Business Name <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Row 5 - How did you hear about us */}
                    <div>
                      <label htmlFor="heardAbout" className="block text-sm font-semibold text-gray-700 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="heardAbout"
                        name="heardAbout"
                        value={formData.heardAbout}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="google-search">Google Search</option>
                        <option value="google-maps">Google Maps</option>
                        <option value="referral">Referral</option>
                        <option value="social-media">Social Media</option>
                        <option value="returning-client">Returning Client</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Row 6 - Services */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        What services are you interested in?
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {serviceOptions.map((service) => (
                          <label key={service} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-5 h-5 text-[#00B4D8] border-gray-300 rounded focus:ring-[#00B4D8]"
                            />
                            <span className="text-gray-700 group-hover:text-[#00B4D8] transition-colors">
                              {service}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Row 7 - Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell us about your project or goals*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="The more detail you provide, the better we can prepare."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Row 8 - Contact Method */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Preferred contact method
                      </label>
                      <div className="flex gap-6">
                        {['email', 'phone', 'either'].map((method) => (
                          <label key={method} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={formData.contactMethod === method}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#00B4D8] border-gray-300 focus:ring-[#00B4D8]"
                            />
                            <span className="text-gray-700 capitalize">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    {/* Privacy Note & Trust Badges */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Shield className="w-5 h-5 text-[#00B4D8]" />
                        <span>Your information is secure and will never be shared.</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                          ))}
                          <span className="ml-1 font-semibold text-gray-700">5.0</span>
                        </div>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-700">20+ Years</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-700">103 Reviews</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Info Cards (40%) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Card 1 - Office Location */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#00B4D8]" />
                    Office Location
                  </h3>
                  
                  {/* Map Placeholder */}
                  <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 h-48 bg-gray-100 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.8937287!2d-97.5883743!3d33.2283526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca0c0e2bc3dd%3A0x7a05b92ccce310c3!2sThinkMents%20LLC!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ThinkMents Office Location"
                    ></iframe>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="font-semibold text-[#1E3A5F]">ThinkMents Digital Marketing Agency</p>
                    <p className="text-gray-600">301 South Washburn St, Suite D</p>
                    <p className="text-gray-600">Decatur, Texas 76234</p>
                  </div>

                  <a
                    href="https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#00B4D8]/80 font-semibold transition-colors"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>

              {/* Card 2 - Direct Contact */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#00B4D8]" />
                      <div>
                        <p className="text-sm text-gray-600">Phone:</p>
                        <a href="tel:9403151023" className="font-semibold text-[#1E3A5F] hover:text-[#00B4D8] transition-colors">
                          (940) 315-1023
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-[#00B4D8]" />
                      <div>
                        <p className="text-sm text-gray-600">Text:</p>
                        <a href="sms:9403151023" className="font-semibold text-[#1E3A5F] hover:text-[#00B4D8] transition-colors">
                          (940) 315-1023
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#00B4D8]" />
                      <div>
                        <p className="text-sm text-gray-600">Email:</p>
                        <a href="mailto:info@thinkments.com" className="font-semibold text-[#1E3A5F] hover:text-[#00B4D8] transition-colors">
                          info@thinkments.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#00B4D8]" />
                      <div>
                        <p className="text-sm text-gray-600">Hours:</p>
                        <p className="font-semibold text-[#1E3A5F]">Mon-Fri, 8am-6pm CST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 - Response Guarantee */}
              <Card className="shadow-lg bg-[#E8F8FC] border-[#00B4D8]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                    Our Response Guarantee
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A5F]">Form submissions:</p>
                        <p className="text-sm text-gray-700">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A5F]">Phone calls:</p>
                        <p className="text-sm text-gray-700">Same day callback</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#1E3A5F]">Urgent matters:</p>
                        <p className="text-sm text-gray-700">Call us directly</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4 - Connect Online */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                    Connect Online
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/ThinkMents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="Facebook"
                    >
                      <span className="text-white text-xl font-bold">f</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/thinkments"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="LinkedIn"
                    >
                      <span className="text-white text-xl font-bold">in</span>
                    </a>
                    <a
                      href="https://www.instagram.com/thinkments"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="Instagram"
                    >
                      <span className="text-white text-xl font-bold">IG</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="Google"
                    >
                      <span className="text-[#4285F4] text-xl font-bold">G</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section ref={alternativeRef} className="py-16 md:py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAlternativeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Other Ways to Connect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Book a Discovery Call */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isAlternativeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                    Book a Discovery Call
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Schedule a 30-minute consultation to discuss your goals.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
                  >
                    <Link to="/free-consultation">Schedule Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Live Chat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isAlternativeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                    Live Chat
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Chat with our team in real-time for quick questions.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visit Our Office */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isAlternativeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                    Visit Our Office
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Stop by our Decatur office for an in-person meeting.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
                  >
                    <a
                      href="https://www.google.com/maps/place/ThinkMents+LLC/@33.2283526,-97.5883743,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-20 px-4 bg-[#1E3A5F]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let&apos;s talk about how we can help you achieve your goals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-10"
            >
              <a href="tel:9403151023" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (940) 315-1023
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}