import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface GoogleCardProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    headerImage?: string;
    icon?: React.ReactNode;
    themeColor?: string;
    hoverEffect?: boolean;
    as?: 'div' | 'a' | 'button';
}

export function GoogleCard({
    children,
    className,
    href,
    onClick,
    headerImage,
    icon,
    themeColor = '#4285F4',
    hoverEffect = true,
    as: Component = 'div',
}: GoogleCardProps) {
    const baseClasses = cn(
        'relative overflow-hidden rounded-2xl bg-white transition-all duration-300',
        'border-2 border-gray-100',
        hoverEffect && 'hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1',
        className
    );

    const cardContent = (
        <>
            {/* Header Image */}
            {headerImage && (
                <div className="h-32 bg-gray-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
                    <img
                        src={headerImage}
                        alt=""
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            )}

            {/* Icon Badge */}
            {icon && (
                <div
                    className="w-12 h-12 -mt-8 mb-4 relative z-20 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center text-gray-700 group-hover:text-white transition-colors duration-300"
                    style={{
                        backgroundColor: hoverEffect ? undefined : 'white',
                    }}
                >
                    {icon}
                </div>
            )}

            {children}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={cn(baseClasses, 'block group cursor-pointer')}
                whileHover={hoverEffect ? { y: -4 } : undefined}
                transition={{ duration: 0.3 }}
            >
                {cardContent}
            </motion.a>
        );
    }

    if (onClick) {
        return (
            <motion.button
                onClick={onClick}
                className={cn(baseClasses, 'group cursor-pointer text-left w-full')}
                whileHover={hoverEffect ? { y: -4 } : undefined}
                transition={{ duration: 0.3 }}
            >
                {cardContent}
            </motion.button>
        );
    }

    return (
        <motion.div
            className={cn(baseClasses, hoverEffect && 'group')}
            whileHover={hoverEffect ? { y: -4 } : undefined}
            transition={{ duration: 0.3 }}
        >
            {cardContent}
        </motion.div>
    );
}
