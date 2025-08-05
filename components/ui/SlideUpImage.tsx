'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const slideUpVariants: Variants = {
    hidden: { y: 80 },
    visible: {
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.42, 0, 0.58, 1], // cubic-bezier for ease-in-out
        },
    },
};

export default function SlideUpImage({
    src,
    alt,
    className = '',
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

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
