import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Badge {
    name: string;
    image: string;
    description?: string;
}

interface Badge3DCarouselProps {
    badges?: Badge[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
}

/**
 * Badge3DCarousel - Premium 3D rotating carousel for trust badges
 * Perfect for Google Partner certifications and authority signals
 * Mobile responsive with touch support
 */
export const Badge3DCarousel: React.FC<Badge3DCarouselProps> = ({
    badges = [
        {
            name: 'Google Partners Specialist',
            image: '/badges/google-partners-specialist.png',
            description: 'Certified Google Partners Specialist',
        },
        {
            name: 'Google Street View Trusted',
            image: '/badges/google-street-view.png',
            description: 'Google Street View Trusted Pro',
        },
        {
            name: 'Google Workspace Partner',
            image: '/badges/google-workspace.png',
            description: 'Official Google Workspace Partner',
        },
        {
            name: 'Google Cloud Partner',
            image: '/badges/google-cloud.png',
            description: 'Google Cloud Partner',
        },
        {
            name: 'Grow with Google Partner',
            image: '/badges/grow-with-google.png',
            description: 'Grow with Google High Impact Partner 2019',
        },
        {
            name: 'Squarespace Circle Member',
            image: '/badges/squarespace-circle.png',
            description: 'Squarespace Circle Member',
        },
        {
            name: 'Google for Education Partner',
            image: '/badges/google-education.png',
            description: 'Google for Education Partner',
        },
        {
            name: 'Get Your Business Online',
            image: '/badges/get-business-online.png',
            description: 'Get Your Business Online with Google',
        },
    ],
    autoPlay = true,
    interval = 4000,
    className = '',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-advance carousel
    useEffect(() => {
        if (!autoPlay || isPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex, autoPlay, isPaused, interval]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % badges.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + badges.length) % badges.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Get visible badges for 3D effect (current, previous, next)
    const getVisibleBadges = () => {
        const prev = (currentIndex - 1 + badges.length) % badges.length;
        const next = (currentIndex + 1) % badges.length;
        return [prev, currentIndex, next];
    };

    const visibleIndices = getVisibleBadges();

    return (
        <div
            className={`relative w-full py-12 px-4 ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00B4D8]/5 to-transparent pointer-events-none" />

            {/* Main Carousel Container */}
            <div className="relative max-w-6xl mx-auto">
                {/* 3D Carousel Stage */}
                <div className="relative h-64 md:h-80 flex items-center justify-center perspective-1000">
                    <AnimatePresence initial={false} custom={direction}>
                        {visibleIndices.map((badgeIndex, position) => {
                            const badge = badges[badgeIndex];
                            const isCenter = position === 1;
                            const isLeft = position === 0;
                            const isRight = position === 2;

                            return (
                                <motion.div
                                    key={`${badgeIndex}-${currentIndex}`}
                                    custom={direction}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.5,
                                        rotateY: direction > 0 ? 45 : -45,
                                        z: -200,
                                    }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.4,
                                        scale: isCenter ? 1 : 0.7,
                                        rotateY: isLeft ? -25 : isRight ? 25 : 0,
                                        x: isLeft ? '-120%' : isRight ? '120%' : 0,
                                        z: isCenter ? 0 : -100,
                                        filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.5,
                                        rotateY: direction > 0 ? -45 : 45,
                                        z: -200,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.32, 0.72, 0, 1],
                                    }}
                                    className="absolute"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        pointerEvents: isCenter ? 'auto' : 'none',
                                    }}
                                >
                                    {/* Badge Card */}
                                    <div className="relative">
                                        {/* 3D Shadow */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/20 to-[#1E3A5F]/20 rounded-2xl blur-xl"
                                            style={{
                                                transform: 'translateZ(-20px)',
                                            }}
                                        />

                                        {/* Badge Container */}
                                        <div
                                            className={`
                        relative bg-white/95 backdrop-blur-sm rounded-2xl
                        border-2 transition-all duration-500
                        ${isCenter
                                                    ? 'border-[#00B4D8] shadow-2xl shadow-[#00B4D8]/20'
                                                    : 'border-gray-200'
                                                }
                      `}
                                            style={{
                                                width: isCenter ? '280px' : '240px',
                                                height: isCenter ? '200px' : '180px',
                                            }}
                                        >
                                            {/* Badge Image */}
                                            <div className="h-full flex items-center justify-center p-6">
                                                <img
                                                    src={badge.image}
                                                    alt={badge.name}
                                                    className="max-w-full max-h-full object-contain"
                                                    style={{
                                                        filter: isCenter ? 'none' : 'grayscale(30%)',
                                                    }}
                                                />
                                            </div>

                                            {/* Badge Name (only on center) */}
                                            {isCenter && badge.description && (
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E3A5F] to-transparent p-4 rounded-b-2xl">
                                                    <p className="text-white text-sm text-center font-semibold">
                                                        {badge.description}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Active Indicator */}
                                            {isCenter && (
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00B4D8] rounded-full border-4 border-white shadow-lg animate-pulse" />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#00B4D8] shadow-lg hover:bg-[#00B4D8] hover:text-white transition-all duration-300 flex items-center justify-center group"
                    aria-label="Previous badge"
                >
                    <ChevronLeft className="w-6 h-6 text-[#00B4D8] group-hover:text-white" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#00B4D8] shadow-lg hover:bg-[#00B4D8] hover:text-white transition-all duration-300 flex items-center justify-center group"
                    aria-label="Next badge"
                >
                    <ChevronRight className="w-6 h-6 text-[#00B4D8] group-hover:text-white" />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
                {badges.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`
              transition-all duration-300 rounded-full
              ${index === currentIndex
                                ? 'w-8 h-3 bg-[#00B4D8]'
                                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                            }
            `}
                        aria-label={`Go to badge ${index + 1}`}
                    />
                ))}
            </div>

            {/* Badge Counter */}
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    {currentIndex + 1} / {badges.length}
                </p>
            </div>
        </div>
    );
};

export default Badge3DCarousel;
