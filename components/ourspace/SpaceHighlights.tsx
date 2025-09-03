"use client";

import React from "react";
import styles from "./SpaceHighlights.module.scss";
import Link from "next/link";

const spaceHighlights = [
    {
        title: "Cozy Study Areas",
        description: "Quiet spaces for focused learning with comfortable seating and calming ambience.",
        image: "/images/banner3.jpg",
    },
    {
        title: "Interactive Whiteboards",
        description: "Modern tools to make learning engaging and collaborative.",
        image: "/images/banner3.jpg",
    },
    {
        title: "Relaxation Corners",
        description: "Take a break and recharge in our cozy rest areas.",
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
