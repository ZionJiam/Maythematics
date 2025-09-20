"use client";

import React from "react";
import styles from "./CTAVideo.module.scss";
import Link from "next/link";
import SecondaryCtaButton from "../ui/SecondaryCTAButton";

const StudentReview = () => {
    return (
        <section className={`${styles.CTAVideo} sectionYPadding`}>
            <div className={styles.studentContainer}>
                <div data-aos="fade-up" className={styles.videoContainer}>
                    {/* <img className={styles.video} src="/images/studentreview-thumbnail.png" /> */}
                    <iframe
                        loading="lazy"
                        className={styles.video}
                        src="https://youtube.com/embed/ouX7EXKiWGA?si=yPfiFiFD35qB0y6e"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>


                </div>

                <div data-aos="fade-up" className={styles.textContainer}>
                    <h2 className="sectionTitle">'Impossible' <br /> PSLE Question</h2>
                    <p>
                        Check out this video on how we tackle and explain the question many parents and students the most difficult in PSLE 2019
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
