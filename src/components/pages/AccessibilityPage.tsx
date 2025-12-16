import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, Check, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../SEO';

export default function AccessibilityPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  const accessibilityFeatures = [
    'Semantic HTML structure for screen reader compatibility',
    'Alt text for all meaningful images',
    'Sufficient color contrast ratios for text readability',
    'Keyboard navigation support throughout the site',
    'Resizable text without loss of functionality',
    'Clear and consistent navigation',
    'Descriptive link text',
    'Form labels and error messages',
    'Skip navigation links',
    'Mobile-responsive design'
  ];

  const ongoingEfforts = [
    'Regular accessibility audits',
    'Staff training on accessibility best practices',
    'Incorporating accessibility into our design and development processes',
    'Testing with assistive technologies',
    'Reviewing and updating content for accessibility'
  ];

  const knownLimitations = [
    'Some older PDF documents may not be fully accessible',
    'Some third-party content or applications may have accessibility limitations',
    'Video content is being updated with captions'
  ];

  return (
    <>
      <SEO
        title="Accessibility Statement - ThinkMents Digital Marketing"
        description="ThinkMents is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility features, ongoing efforts, and how to provide feedback."
        url="/accessibility"
        type="website"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 bg-[#F8F9FA]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Accessibility Statement
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed">
              ThinkMents is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1: Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 
                className="text-3xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Commitment
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ThinkMents Digital Marketing Agency is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We strive to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              </p>
            </motion.div>

            {/* Section 2: Accessibility Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 
                className="text-3xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our website includes the following accessibility features:
              </p>
              <ul className="space-y-3">
                {accessibilityFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-[#00B4D8]" />
                    </div>
                    <span className="text-lg text-gray-600 leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Section 3: Ongoing Efforts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 
                className="text-3xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ongoing Efforts
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are continually working to improve the accessibility of our website. Our efforts include:
              </p>
              <ul className="space-y-3">
                {ongoingEfforts.map((effort, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-[#00B4D8]" />
                    </div>
                    <span className="text-lg text-gray-600 leading-relaxed">{effort}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Section 4: Known Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 
                className="text-3xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Known Limitations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                While we strive for full accessibility, some content may not yet be fully accessible:
              </p>
              <ul className="space-y-3 mb-6">
                {knownLimitations.map((limitation, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-3"></div>
                    <span className="text-lg text-gray-600 leading-relaxed">{limitation}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are actively working to address these limitations.
              </p>
            </motion.div>

            {/* Section 5: Feedback & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#F8F9FA] p-8 rounded-lg border-l-4 border-[#00B4D8]"
            >
              <h2 
                className="text-3xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Feedback & Contact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We welcome your feedback on the accessibility of the ThinkMents website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Email</p>
                    <a 
                      href="mailto:info@thinkments.com" 
                      className="text-lg text-[#00B4D8] hover:underline"
                    >
                      info@thinkments.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Phone</p>
                    <a 
                      href="tel:9403151023" 
                      className="text-lg text-[#00B4D8] hover:underline"
                    >
                      (940) 315-1023
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#00B4D8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1E3A5F]">Address</p>
                    <p className="text-lg text-gray-600">
                      301 South Washburn St, Suite D<br />
                      Decatur, Texas 76234
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </motion.div>

            {/* Section 6: Third-Party Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 
                className="text-3xl font-bold text-[#1E3A5F] mb-4" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Third-Party Content
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites or embed third-party content. We are not responsible for the accessibility of external sites, but we encourage our partners to prioritize accessibility.
              </p>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500">
                This accessibility statement was last updated on December 2024.
              </p>
            </motion.div>

            {/* Back to Home Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] transition-colors text-lg font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
