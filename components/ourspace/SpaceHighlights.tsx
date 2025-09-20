"use client";

import React from "react";
import styles from "./SpaceHighlights.module.scss";
import Slogan from "../ui/Slogan";

const SpaceHighlights = () => {
    return (
        <section className={`${styles.lesson} sectionYPadding`}>
            <Slogan
                header="A Learning Environment That Inspires"
                text="At Maythematics, we’ve designed a learning environment where students feel comfortable, focused, and inspired. From bright classrooms and cosy study corners to a supportive atmosphere created by our tutors, every detail is built to keep students engaged and confident in their learning journey."
            />

            <div className={styles.lessonWrapper}>
                {/* Block 1 */}
                <div className={`${styles.lessonContainer} sectionYPadding`}>
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
                                    Our classrooms are thoughtfully designed with soft, pastel-inspired colours that create a calm and welcoming atmosphere. This environment helps students feel safe to ask questions, motivated to engage, and inspired to keep learning. More than just walls and desks, it’s a place where confidence takes root.
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
                                    We believe students learn best when they feel at ease. That’s why each room is equipped with ergonomic chairs and spacious tables that encourage good posture and sustained focus. With comfort taken care of, students can concentrate fully on mastering Math.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 3 */}
                <div className={`${styles.lessonContainer} sectionYPadding`}>
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
                                Modern Tools
                            </h2>
                            <div
                                data-aos="fade-up"
                                className={styles.descriptionContainer}
                            >
                                <p className={styles.description}>
                                    Learning comes alive with smart screens, iPads, and optimal lighting that reduces eye strain and keeps students alert. These tools turn lessons into interactive, engaging experiences — helping students not only follow explanations step by step but also truly understand and remember them.
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
