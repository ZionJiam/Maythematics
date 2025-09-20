"use client";

import React from "react";
import styles from "./LessonModes.module.scss";

export default function LessonModes() {
    return (
        <section className={`${styles.lessonModes} sectionYPadding`}>

            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <h3 data-aos="fade-up" className={`${styles.header} sectionTitle`}>Learning That Fits</h3>
                    <p data-aos="fade-up" className={styles.subheader}>
                        Whether in person or online, every lesson follows the same structured, <br /> engaging approach. Parents can choose between:
                    </p>
                </div>


                <div className={styles.container}>
                    <div data-aos="fade-up" className={styles.box}>
                        <img src="/images/programmes/physical.webp" alt="Physical Lessons Image" />
                        <h3>Physical Classes</h3>
                        <p>Bright, supportive classrooms <br /> designed for focus and comfort.</p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <img src="/images/programmes/online.webp" alt="Physical Lessons Image" />

                        <h3>Zoom Classes</h3>
                        <p>Interactive online sessions with digital<br /> worksheets and real-time feedback.</p>
                    </div>
                </div>
            </div>


        </section>
    );
}
