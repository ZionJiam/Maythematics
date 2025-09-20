"use client";

import { useState } from "react";
import styles from "./ResultMasonry.module.scss";
import Masonry from "react-masonry-css";

const results = [
    {
        src: "/images/results/result1.webp",
        student: "Kia Han",
        school: "Kong Hua School",
        achievement: "Achieved 90 out of 100 on Prelims"
    },
    // {
    //     src: "/images/testimonials/results-2.webp",
    //     student: "Marcus",
    //     school: "Commonwealth Sec",
    //     achievement: "From C5 → A2 in just 3 months"
    // },
    // {
    //     src: "/images/testimonials/results-3.webp",
    //     student: "Chloe",
    //     school: "Fuhua Secondary",
    //     achievement: "Maintained A1 throughout Sec 4"
    // },
    // {
    //     src: "/images/testimonials/results-4.webp",
    //     student: "Darren",
    //     school: "River Valley High",
    //     achievement: "Jumped from 60% → 85% in Math"
    // },
    // {
    //     src: "/images/testimonials/results-5.webp",
    //     student: "Darren",
    //     school: "River Valley High",
    //     achievement: "Jumped from 60% → 85% in Math"
    // },
    // {
    //     src: "/images/testimonials/results-6.webp",
    //     student: "Darren",
    //     school: "River Valley High",
    //     achievement: "Jumped from 60% → 85% in Math"
    // },
    // {
    //     src: "/images/testimonials/results-7.webp",
    //     student: "Darren",
    //     school: "River Valley High",
    //     achievement: "Jumped from 60% → 85% in Math"
    // }
];

const breakpointColumnsObj = {
    default: 3,
    1023: 2,
    767: 1,
};

export default function ResultsMasonry() {
    const [visibleCount, setVisibleCount] = useState(6); // show 3 initially

    const handleSeeMore = () => {
        setVisibleCount(results.length); // reveal all
    };

    return (
        <section className={`${styles.resultsMasonry} sectionYPadding`}>
            <h2 className="sectionTitle">Our Hall of Fame</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {results.slice(0, visibleCount).map((item, index) => (
                    <div data-aos="fade-up" key={index} className={styles.gridItem}>
                        <img src={item.src} alt={`Result ${index + 1}`} loading="lazy" />
                        <div className={styles.caption}>
                            <p className={styles.student}>{item.student}</p>
                            <p className={styles.school}>{item.school}</p>
                            <p className={styles.achievement}>{item.achievement}</p>
                        </div>
                    </div>
                ))}
            </Masonry>

            {/* Show See More button only if there are more results */}
            {/* {visibleCount < results.length && (
                <div className={styles.seeMoreWrapper}>
                    <button className={`${styles.seeMoreBtn} ctaButton buttonRed`} onClick={handleSeeMore}>
                        See More
                    </button>
                </div>
            )} */}
        </section>
    );
}
