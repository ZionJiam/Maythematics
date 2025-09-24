"use client";

import { useState, useEffect } from "react";
import styles from "./ResultMasonry.module.scss";
import Masonry from "react-masonry-css";
import { supabase } from "@/app/lib/supabaseClient";

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
    const [results, setResults] = useState<ResultItem[]>([]);
    const [visibleCount, setVisibleCount] = useState(7);

    useEffect(() => {
        const fetchResults = async () => {
            // 👇 list all files inside bucket "results"
            const { data, error } = await supabase.storage.from("results").list("", {
                limit: 100,
                offset: 0,
                sortBy: { column: "name", order: "asc" },
            });


            if (error) {
                console.error("Error fetching results:", error.message);
                return;
            }

            if (data) {
                const publicURL = process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/results/";
                const items: ResultItem[] = data.map((file) => ({
                    src: `${publicURL}${file.name}`,
                }));
                setResults(items);
            }
        };

        fetchResults();
    }, []);

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
