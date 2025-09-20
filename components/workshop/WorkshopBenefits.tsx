"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./WorkshopBenefits.module.scss";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    { text: "The workshop helped my child tackle exam-style questions!", author: "Parent" },
    { text: "I learned strategies to avoid common mistakes in exams.", author: "Sec 4 Student" },
    { text: "The worksheets provided were very useful for revision.", author: "Parent" },
    { text: "Boosted my confidence a lot before my O-levels!", author: "Sec 4 Student" },
    { text: "Engaging teaching style and very practical tips.", author: "Parent" },
    { text: "The timing and pace were perfect.", author: "Sec 3 Student" },
    { text: "Very interactive and useful examples.", author: "Parent" },
    { text: "Very interactive and useful examples.", author: "Parent" },
    { text: "Very interactive and useful examples.", author: "Parent" },
    { text: "Very interactive and useful examples.", author: "Parent" },
    { text: "Very interactive and useful examples.", author: "Parent" },

];

export default function WorkshopBenefits() {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const intervalRef = useRef<number | null>(null);
    const [visiblePerSlide, setVisiblePerSlide] = useState(4);
    const slides = [...testimonials, ...testimonials.slice(0, visiblePerSlide)];
    const count = testimonials.length;

    const start = () => {
        stop();
        intervalRef.current = window.setInterval(() => {
            setIndex((i) => i + 1);
        }, 2000);
    };

    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        start();
        return () => stop();
    }, []);

    // Handle screen resize → adjust visiblePerSlide
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 768) {
                setVisiblePerSlide(1); // mobile

            } else if (window.innerWidth < 1024) {
                setVisiblePerSlide(3); // tablet
            } else if (window.innerWidth < 1280) {
                setVisiblePerSlide(4); // tablet
            }
            else {
                setVisiblePerSlide(5); // desktop
            }
        };

        updateVisible(); // run on mount
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    const handleTransitionEnd = () => {
        if (index >= count) {
            setIsAnimating(false);
            setIndex(0);
            requestAnimationFrame(() => requestAnimationFrame(() => setIsAnimating(true)));
        }
    };

    // number of "pages" = ceil(total / visible)
    const totalPages = Math.ceil(count / visiblePerSlide);
    const currentPage = index % count < count ? Math.floor(index % count / visiblePerSlide) : 0;

    const goToPage = (page: number) => {
        stop();
        setIndex(page * visiblePerSlide);
        start();
    };

    return (
        <section className={`${styles.WorkshopBenefits} sectionYPadding`}>
            <img src="/divider/bubble-side-divider-blue.png" alt="" className={styles.dividerTop} />

            <div className={styles.benefitsSection}>
                <div className={styles.container}>
                    <h2 className={styles.title}>
                        What Parents and Students <br /> Say About the Workshop
                    </h2>

                    <div
                        className={styles.carouselWrapper}
                        onMouseEnter={stop}
                        onMouseLeave={start}
                    >
                        <div
                            className={styles.track}
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                transform: `translateX(-${index * (100 / visiblePerSlide)}%)`,
                                transition: isAnimating ? "transform 0.6s ease" : "none",
                            }}
                        >
                            {slides.map((t, i) => (
                                <div className={styles.slide} key={i}>
                                    <div className={styles.slideInner}>
                                        <FaQuoteLeft className={styles.quoteIcon} />
                                        <p className={styles.text}>{t.text}</p>
                                        <p className={styles.author}>— {t.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination dots */}
                    <div className={styles.dots}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === currentPage ? styles.active : ""}`}
                                onClick={() => goToPage(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <img src="/divider/bubble-side-divider-blue.png" alt="" className={styles.dividerBottom} />
        </section>
    );
}
