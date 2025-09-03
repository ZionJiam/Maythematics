"use client";

import React from "react";
import styles from "./StudentReview.module.scss";
import Link from "next/link";

const StudentReview = () => {
    return (
        <section className={styles.studentReview}>

            <div className={styles.videoContainer}>
                {/* <img className={styles.video} src="/images/studentreview-thumbnail.png" /> */}
                <iframe
                    className={styles.video}
                    src="https://youtube.com/embed/L7xRSzB7MQw?si=HhFNmiQ1zH_8lnLI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>


            </div>

            <div className={styles.textContainer}>
                <h2 className="sectionTitle">What Our <br /> Student Say</h2>
                <p>
                    Hear directly from our student about their learning journey, progress,
                    and how our programme helped them achieve their academic goals.
                </p>
                <Link href="/testimonials" className={` ${styles.button} buttonYellow ctaButton`}>See More Testimonials</Link>
            </div>
        </section>
    );
};

export default StudentReview;
