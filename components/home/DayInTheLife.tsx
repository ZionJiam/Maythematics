"use client";

import React from "react";
import styles from "./DayInTheLife.module.scss";
import Link from "next/link";

const DayInTheLife = () => {
    return (
        <section className={styles.studentReview}>

            <div data-aos="fade-up" className={styles.videoContainer}>
                {/* <img className={styles.video} src="/images/studentreview-thumbnail.png" /> */}
                <iframe
                    loading="lazy"
                    className={styles.video}
                    src="https://youtube.com/embed/qfEws8IvGSw?si=slcdBQghTqj3jV23"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

            </div>

            <div data-aos="fade-up" className={styles.textContainer}>
                <h2 className="sectionTitle">A Day in the Life <br />of a PSLE Student</h2>
                <p>
                    Hear directly from our student about their learning journey, progress,
                    and how our programme helped them achieve their academic goals.
                </p>
                <Link href="/testimonials" className={` ${styles.button} buttonYellow ctaButton`}>See More Testimonials</Link>
            </div>
        </section>
    );
};

export default DayInTheLife;
