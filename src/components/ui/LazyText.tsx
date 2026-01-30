import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface LazyTextProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function LazyText({ children, className = '', delay = 0 }: LazyTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
