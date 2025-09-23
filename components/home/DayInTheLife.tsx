"use client";

import React from "react";
import styles from "./DayInTheLife.module.scss";
import Link from "next/link";
import SecondaryCtaButton from "../ui/SecondaryCTAButton";

const StudentReview = () => {
    return (
        <section className={`${styles.studentReview} sectionYPadding`}>
            <div className={styles.studentContainer}>
                <div data-aos="fade-up" className={styles.videoContainer}>
                    {/* <img className={styles.video} src="/images/studentreview-thumbnail.png" /> */}
                    <iframe
                        loading="lazy"
                        className={styles.video}
                        src="https://youtube.com/embed/qfEws8IvGSw?si=slcdBQghTqj3jV23"
                        title="Day in the Life of a PSL Student Vianna"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>

                <div data-aos="fade-up" className={styles.textContainer}>
                    <h2 className="sectionTitle"> The Maythematics <br />Experience</h2>
                    <p>
                        Step into the daily journey of a student at Maythematics and discover how our unique environment and teaching approach make learning engaging — and why students genuinely look forward to every class
                    </p>
                    <SecondaryCtaButton text="Check out our programmes" href="/programmes" />
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
