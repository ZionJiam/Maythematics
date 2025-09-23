"use client";

import React from "react";
import styles from "./SpaceHighlights.module.scss";
import Slogan from "../ui/Slogan";

const SpaceHighlights = () => {
    return (
        <section className={`${styles.lesson} sectionYPadding`}>
            <div className={styles.lessonWrapper}>
                {/* Block 1 */}
                <div className={`${styles.lessonContainer}`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/space/image-2.webp"
                            alt="Inspiring classroom space with pastel colours"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                            <h2 data-aos="fade-up" className="sectionTitle">
                                Inspiring Spaces
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >
                                <p className={styles.description}>
                                    Pastel tones fill our space with energy and positivity, making students feel both welcomed and motivated to engage actively in every lesson.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 2 */}
                <div className={`${styles.lessonContainer} sectionYPadding`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/space/image-3.webp"
                            alt="Comfortable study space with ergonomic chairs"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                            <h2 data-aos="fade-up" className="sectionTitle">
                                Comfort First
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >
                                <p className={styles.description}>
                                    We invest in ergonomic chairs and spacious tables designed to support your child’s posture, comfort, and focus throughout every lesson.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 3 */}
                <div className={`${styles.lessonContainer}`}>
                    <div data-aos="fade-up" className={styles.imageContainer}>
                        <img
                            src="/images/space/image-1.webp"
                            alt="Modern study tools with smart screens and iPads"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textContent}>
                            <h2 data-aos="fade-up" className="sectionTitle">
                                Study in Best Light
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >
                                <p className={styles.description}>
                                    Our classrooms are equipped with optimal lighting that reduces eye strain and keeps students alert, ensuring every study session is comfortable and productve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpaceHighlights;
