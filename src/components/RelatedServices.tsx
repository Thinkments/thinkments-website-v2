import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface RelatedService {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A5F]" style={{ fontFamily: 'Playfair Display, serif' }}>
            You May Also Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complementary services to amplify your digital strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100 hover:border-[#00B4D8] hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 text-[#1E3A5F] group-hover:text-[#00B4D8] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 text-[#00B4D8] hover:text-[#1E3A5F] font-semibold transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-lg font-semibold text-[#1E3A5F] hover:text-[#00B4D8] transition-colors group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
