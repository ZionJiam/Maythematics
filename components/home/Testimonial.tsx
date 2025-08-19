"use client";
import { useState, useEffect } from "react";
import styles from './Testimonial.module.scss';

import { ChevronLeft, ChevronRight } from "lucide-react";


const testimonials = [
    {
        family: "Wong Family",
        quote: "Teacher May is a dedicated, patient and amazing teacher. She is able to keep the student engaged even though the lesson was conducted virtually, and this has significantly increased Nathan’s interest in Maths. Thanks to Teacher May, Nathan has improved from 56 marks to 88 marks in 3 months!",
        school: "Chong Zheng Primary School (P4 level in 2022)",
        image: "/images/family2.png",
    },
    {
        family: "Tan Family",
        quote: "Our daughter looked forward to every lesson. The learning was structured, friendly, and focused on her weak spots. Within months, she became more confident tackling problem sums.",
        school: "Rosyth Primary School (P5 level in 2023)",
        image: "/images/family2.png",
    },
    {
        family: "Lau Family",
        quote: "Our daughter looked forward to every lesson. The learning was structured, friendly, and focused on her weak spots. Within months, she became more confident tackling problem sums.",
        school: "Rosyth Primary School (P5 level in 2023)",
        image: "/images/family2.png",
    },
    // Add more testimonials here
];


const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance every 3 seconds
    useEffect(() => {
        const interval = setInterval(next, 3000); // 3 seconds
        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <section className={styles.testimonialSection}>
            <img className={`${styles.cardDesignElement}`} src="/assets/elements/design-element-2.png" alt="Card Design Element" />

            <h2 className={`sectionTitle`}>
                What{" "}
                <span className={styles.letterRainbow}>
                    <span className={styles.blue}>P</span>
                    <span className={styles.red}>a</span>
                    <span className={styles.yellow}>r</span>
                    <span className={styles.teal}>e</span>
                    <span className={styles.red}>n</span>
                    <span className={styles.blue}>t</span>
                    <span className={styles.yellow}>s</span>
                </span>{" "}
                Say About Us
            </h2>
            <div className={styles.carousel}>

                <div className={styles.card}>

                    <img src={testimonials[current].image} alt="Family" className={styles.image} />
                    <div className={styles.textContent}>
                        <h3 className={styles.familyName}>{testimonials[current].family}</h3>
                        <p className={styles.quote}>“{testimonials[current].quote}”</p>
                        <p className={styles.school}>{testimonials[current].school}</p>

                    </div>

                </div>

            </div>

            <div className={styles.controls}>
                <button className={styles.arrow} onClick={prev} aria-label="Previous">
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.dots}>
                    {testimonials.map((_, idx) => (
                        <span
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`${styles.dot} ${idx === current ? styles.active : ""}`}
                        />
                    ))}
                </div>

                <button className={styles.arrow} onClick={next} aria-label="Next">
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default TestimonialSection;
