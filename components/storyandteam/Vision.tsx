"use client";

import Link from "next/link";
import { useState } from "react";
import SlideUpImage from "@/components/ui/SlideUpImage";
import styles from "./Vision.module.scss";



const Vision = () => {

    return (
        <section className={styles.visionSection}>
            {/* <SlideUpImage alt="Review Mascot thumbs up" className={styles.reviewMascot} src="/assets/review-mascot.png" /> */}

            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider top"
                className={styles.dividerTop}
            />

            <div className={styles.visionContainer}>
                <h2 className={`${styles.sectionTitle} sectionTitle white-text-outline`}>Our Vision</h2>

                <div className={`text-lg ${styles.visionCard}`}>
                    <p>To foster a positive and safe environment for students to learn Math under the belt of the
                        most positive, patient and passionate tutors with effective teaching methodologies</p>
                    <img src="/images/maythematics-watermark.png" alt="watermark" className={styles.watermark} />

                </div>

            </div>



            <img
                src="/divider/bubble-side-divider-blue.png"
                alt="wave divider bottom"
                className={styles.dividerBottom}
            />
        </section>
    );
};

export default Vision;
