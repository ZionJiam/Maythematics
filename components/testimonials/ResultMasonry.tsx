"use client";

import { useState } from "react";
import styles from "./ResultMasonry.module.scss";
import Masonry from "react-masonry-css";

interface ResultItem {
    src: string;
    student?: string;
    school?: string;
    achievement?: string;
}

const breakpointColumnsObj = {
    default: 3,
    1279: 3,
    1023: 2,
    767: 1,
};

export default function ResultsMasonry() {
    // Hardcoded results
    const results: ResultItem[] = Array.from({ length: 8 }, (_, i) => ({
        src: `/images/results/results-${i + 1}.webp`,
    }));

    const [visibleCount, setVisibleCount] = useState(6);

    const handleSeeMore = () => {
        setVisibleCount(results.length);
    };

    return (
        <section id="messages" className={`${styles.resultsMasonry} sectionYPadding`}>
            <h2 className="sectionTitle">Our Hall of Fame</h2>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {results.slice(0, visibleCount).map((item, index) => (
                    <div data-aos="fade-up" key={index} className={styles.gridItem}>
                        <img src={item.src} alt={`Result ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </Masonry>

            {visibleCount < results.length && (
                <div className={styles.seeMoreWrapper}>
                    <button
                        className={`${styles.seeMoreBtn} ctaButton buttonRed`}
                        onClick={handleSeeMore}
                    >
                        See More
                    </button>
                </div>
            )}
        </section>
    );
}
