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
                <div className={`text-lg ${styles.visionCard}`}>
                    <p>To become Singapore’s leading math tuition centre — trusted by parents and loved by students. We aim to deliver the clearest explanations, the best learning materials, and engaging methods that bring out every child’s confidence and results.</p>
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
