import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    intensity?: number; // Controls how much the image moves (default: 0.3)
}

export default function ParallaxImage({
    src,
    alt,
    className = '',
    intensity = 0.3
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Transform the scroll progress into a Y position
    // Negative values move up as you scroll down, creating parallax effect
    const y = useTransform(scrollYProgress, [0, 1], [-100 * intensity, 100 * intensity]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y }}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
