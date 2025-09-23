"use client";

import React from "react";
import styles from "./LessonModes.module.scss";

export default function LessonModes() {
    return (
        <section className={`${styles.lessonModes} sectionYPadding`}>

            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <h3 data-aos="fade-up" className={`text-xl`}>Two Learning Modes to Choose From</h3>
                </div>


                <div className={styles.container}>
                    <div data-aos="fade-up" className={styles.box}>
                        <img src="/images/programmes/physical.webp" alt="Physical Lessons Image" />
                        <h3>Physical Classes</h3>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <img src="/images/programmes/online.webp" alt="Physical Lessons Image" />

                        <h3>Zoom Classes</h3>
                    </div>
                </div>
            </div>


        </section>
    );
}
