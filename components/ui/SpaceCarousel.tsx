"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SpaceCarousel.module.scss";

type Pos = { x: number; scale: number; opacity: number; z: number, rotateY?: number; };


const DEFAULT_IMAGES = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
];

interface CarouselProps {
    images?: string[];
}

export default function Carousel({ images = DEFAULT_IMAGES }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const len = images.length;

    // ——— Swipe (pointer) support ———
    const startX = useRef<number | null>(null);
    const dragging = useRef(false);

    const onPointerDown = (e: React.PointerEvent) => {
        dragging.current = true;
        startX.current = e.clientX;
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (!dragging.current || startX.current == null) return;
        // You could do live drag here if desired
    };
    const onPointerUp = (e: React.PointerEvent) => {
        if (!dragging.current || startX.current == null) return;
        const delta = e.clientX - startX.current;
        dragging.current = false;
        startX.current = null;

        const THRESHOLD = 50;
        if (delta > THRESHOLD) prev();
        else if (delta < -THRESHOLD) next();
    };
    const onPointerCancel = () => {
        dragging.current = false;
        startX.current = null;
    };

    const prev = () => setCurrent((i) => (i - 1 + len) % len);
    const next = () => setCurrent((i) => (i + 1) % len);

    // circular diff in range (-len/2, len/2]
    const circDiff = (idx: number, cur: number) => {
        let d = (idx - cur + len) % len;
        if (d > len / 2) d -= len;
        return d; // ...,-2,-1,0,1,2,...
    };

    const posForDiff = (d: number): Pos => {
        const spacing = 220; // horizontal spacing
        const rotation = 15; // degrees of Y-axis rotation for side cards

        if (d === 0) return { x: 0, scale: 1.1, opacity: 1, z: 3, rotateY: 0 };
        if (d === -1) return { x: -spacing, scale: 0.93, opacity: 0.7, z: 2, rotateY: rotation };
        if (d === 1) return { x: spacing, scale: 0.93, opacity: 0.7, z: 2, rotateY: -rotation };
        if (d === -2) return { x: -spacing * 2, scale: 0.85, opacity: 0.35, z: 1, rotateY: rotation * 1.5 };
        if (d === 2) return { x: spacing * 2, scale: 0.85, opacity: 0.35, z: 1, rotateY: -rotation * 1.5 };

        return { x: 0, scale: 0.8, opacity: 0, z: 0, rotateY: 0 };
    };

    // Precompute styles for each slide
    const slideStyles = useMemo(() => {
        return images.map((_, idx) => {
            const d = circDiff(idx, current);
            const p = posForDiff(d);
            const visible = Math.abs(d) <= 2; // render ring ±2; CSS will hide ±2 on mobile
            return {
                visible,
                style: {
                    transform: `
                        translate(-50%, -50%) 
                        translateX(${p.x}px) 
                        scale(${p.scale}) 
                        rotateY(${p.rotateY || 0}deg)
                        `,
                    opacity: p.opacity,
                    zIndex: p.z,
                } as React.CSSProperties,
            };
        });
    }, [images, current, len]);

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.background} />
            <button className={styles.navButton} onClick={prev} aria-label="Previous">‹</button>

            <div
                className={styles.stage}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerCancel}
            >
                {images.map((src, i) => {
                    const { visible, style } = slideStyles[i];
                    return (
                        <div
                            key={i}
                            className={`${styles.card} ${visible ? styles.visible : styles.hidden}`}
                            style={{ ...style, backgroundImage: `url(${src})` }}
                            role="img"
                            aria-label={`Slide ${i + 1}`}
                        />
                    );
                })}
            </div>

            <button className={styles.navButton} onClick={next} aria-label="Next">›</button>
        </div>
    );
}