'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SlideUpImageProps {
    src: string;
    alt: string;
    className?: string;
    delay?: number; // delay in seconds
}

export default function SlideUpImage({ src, alt, className = '', delay = 0 }: SlideUpImageProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

    const slideUpVariants: Variants = {
        hidden: { y: 80, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
            },
        },
    };

    return (
        <motion.img
            ref={ref}
            src={src}
            alt={alt}
            className={`absolute ${className}`}
            variants={slideUpVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        />
    );
}
