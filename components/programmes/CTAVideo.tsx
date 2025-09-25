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
                        src="https://www.youtube.com/embed/ouX7EXKiWGA?si=yPfiFiFD35qB0y6e"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>


                </div>

                <div data-aos="fade-up" className={styles.textContainer}>
                    <h2 className="sectionTitle">The "Impossible" PSLE Question, Made Easy</h2>
                    <p>
                        Watch how we tackle and explain one of the most challenging PSLE 2019 questions — and show how simple it can be with the right strategies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
