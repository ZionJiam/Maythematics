"use client";

import React from "react";
import styles from "./FamilyReviews.module.scss";

const StudentReview = () => {
    return (
        <section className={styles.studentReview}>
            <div className={styles.videoContainer}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Student Review"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className={styles.textContainer}>
                <h2>What Our Students Say</h2>
                <p>
                    Hear directly from our students about their learning journey, progress,
                    and how our programme helped them achieve their academic goals.
                </p>
            </div>
        </section>
    );
};

export default StudentReview;
