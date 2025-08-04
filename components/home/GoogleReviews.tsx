"use client";

import Link from 'next/link';
import { useState } from "react";
import SlideUpImage from '@/components/ui/SlideUpImage';
import styles from "./GoogleReviews.module.scss";

const reviews = [
    {
        id: 1,
        name: "Sharon Ang",
        content:
            "My girl has been doing poorly for math PSLE last year until I got to know Teacher May and her team on TikTok. Now my girl is in Sec 1, she has improved tremendously with the help of her dedicated team. She was in G2 and now gotten good news to be in G3 in May 2025. My appreciation to Teacher Tyler for his guidance and patience.. and sincerely grateful",
    },
    {
        id: 2,
        name: "kellynn goh",
        content:
            "The PSLE math formula has helped me with my math results significantly! After the huge jump from p4 to p5, my math results went from a 80+ to a 50+, when I first discovered teacher’s May PSLE math formula during my p6 year, I used her notes for revision during my exams by rewriting her notes in my notebook and referring to it when doing practice papers. This had helped me understand all the key formulas better and eventually gotten AL1 for my exams! Thank you teacher May :)",
    },
    {
        id: 3,
        name: "neo jinxia",
        content:
            "Before joining Maythematics, my daughter Chloe got AL7 in PSLE and hated Math. After joining Maythematics Math Tuition, she gradually gained interest and started loving Math more. she eventually achieved A1 in G2 Maths consistently from weighted assessments to EOY. This allowed her to move up to G3 Maths in Secondary 2. She continued to score 85% for Sec 2 Emaths EOY and is currently taking both E and Amath classes with them now. Appreciate the help with all the teachers at Maythematics - Teacher May, Claire, Eunice, Lucas who helped my daughter ace Math - highly recommend anyone of you to give this tuition centre a try for your child to do well for Mathematics",
    },
    {
        id: 4,
        name: "Parent of Sarah",
        content:
            "Sarah’s confidence skyrocketed after joining Maythematics. The tutors are patient and the methods effective. Highly recommended!",
    },
    {
        id: 5,
        name: "Parent of Lucas",
        content:
            "Lucas always found math boring. The fun approach at Maythematics changed his mindset. He now looks forward to each lesson!",
    },
    {
        id: 6,
        name: "Parent of Mia",
        content:
            "Mia's grades improved steadily after joining. The small class sizes and interactive teaching made a big difference.",
    },
];

const GoogleReviews = () => {
    const [selectedReview, setSelectedReview] = useState<null | typeof reviews[0]>(null);

    return (
        <section className={styles.googleReviews}>

            <SlideUpImage className={styles.reviewMascot} src="/assets/review-mascot.png" />

            {/* <img
                src="/assets/review-mascot.png"
                alt="review mascot"
                className={styles.reviewMascot}
            /> */}

            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider top"
                className={styles.dividerTop}
            />

            <div className={styles.reviewContainer}>
                <h2 className={`sectionTitle white-text-outline`}>Google Reviews</h2>

                <div className={styles.marqueeWrapper}>
                    <div className={styles.marquee}>
                        {[...reviews, ...reviews].map((review, index) => (
                            <div
                                key={index}
                                className={styles.card}
                                onClick={() => setSelectedReview(review)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && setSelectedReview(review)}
                            >
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} aria-hidden="true" className={styles.star}>★</span>
                                    ))}
                                </div>

                                <p className={styles.name}>{review.name}</p>
                                <p className={styles.snippet}>{review.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Link href="/about" className={`buttonYellow ctaButton`}>
                    Check Out More Reviews
                </Link>

            </div>


            {selectedReview && (
                <div className={styles.modal} onClick={() => setSelectedReview(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedReview.name}</h3>
                        <p>{selectedReview.content}</p>
                        <button onClick={() => setSelectedReview(null)}>Close</button>
                    </div>
                </div>
            )}

            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider bottom"
                className={styles.dividerBottom}
            />
        </section>
    );
};

export default GoogleReviews;
