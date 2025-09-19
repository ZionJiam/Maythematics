"use client";

import React from "react";
import styles from "./StudentReview.module.scss";
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
                        src="https://youtube.com/embed/E2A8CtSdjAk?si=VKYh5qEHoSgsvJU_"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>


                </div>

                <div data-aos="fade-up" className={styles.textContainer}>
                    <h2 className="sectionTitle">What our <br /> students say</h2>
                    <p>
                        Hear directly from our students at Maythematics about their learning journey, progress,
                        and how our programme helped them achieve their academic goals.
                    </p>
                    {/* <Link href="/testimonials" className={` ${styles.button} buttonYellow ctaButton`}>See More Testimonials</Link> */}
                    <SecondaryCtaButton text="See more testimonials" href="/testimonials" />
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
