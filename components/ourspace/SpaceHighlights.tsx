"use client";

import React from "react";
import styles from "./SpaceHighlights.module.scss";
import Link from "next/link";

const spaceHighlights = [
    {
        title: "Study in the Best Light",
        description: "Our classrooms are equipped with optimal lighting that reduces eye strain and keeps students alert, ensuring every study session is comfortable and productive.",
        image: "/images/banner3.jpg",
    },
    {
        title: "A Space That Inspires",
        description: "We use warm, pastel-inspired colors that stimulate creativity and focus, creating a welcoming atmosphere that motivates students to learn and participate actively.",
        image: "/images/banner3.jpg",
    },
    {
        title: "Comfort Meets Focus",
        description: "Each student has access to ergonomic tables and chairs designed for proper posture, making long study sessions more comfortable and effective.",
        image: "/images/banner3.jpg",
    },
];

const SpaceHighlights = () => {
    return (
        <section className={styles.lesson}>
            <div className={styles.lessonWrapper}>
                {spaceHighlights.map((spaceHighlights, index) => (
                    <div className={`${styles.lessonContainer}`} key={index}>
                        <div className={styles.imageContainer}
                            style={{ backgroundImage: `url(${spaceHighlights.image})` }}>
                            {/* <img src={lesson.image} alt={`${lesson.title} Image`} /> */}
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textContent}>
                                <h2 className="text-xl">{spaceHighlights.title}</h2>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>{spaceHighlights.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </section >
    );
};

export default SpaceHighlights;
