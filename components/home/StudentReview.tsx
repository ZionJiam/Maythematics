"use client";

import React from "react";
import styles from "./StudentReview.module.scss";
import Link from "next/link";
import SecondaryCtaButton from "../ui/SecondaryCTAButton";

const StudentReview = () => {
    return (
        <section className={`${styles.studentReview} sectionYPadding`}>
            <div className={styles.studentContainer}>
                <h2 className={`sectionTitle d-block-768 ${styles.title}`}>What Our <br /> Students Say</h2>
                <div data-aos="fade-up" className={styles.videoContainer}>
                    {/* <img className={styles.video} src="/images/studentreview-thumbnail.png" /> */}
                    <iframe
                        loading="lazy"
                        className={styles.video}
                        src="https://www.youtube.com/embed/E2A8CtSdjAk?si=VKYh5qEHoSgsvJU_"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen></iframe>


                </div>

                <div data-aos="fade-up" className={styles.textContainer}>
                    <h2 className="sectionTitle d-none-768">What Our <br /> Students Say</h2>
                    <p>
                        Discover firsthand experiences from our Maythematics students as they share their learning journey, progress, and how our programmes have helped them achieve their academic goals with confidence.
                    </p>
                    {/* <Link href="/testimonials" className={` ${styles.button} buttonYellow ctaButton`}>See More Testimonials</Link> */}
                    <SecondaryCtaButton text="See more testimonials" href="/testimonials" />
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
