"use client";

import React from "react";
import styles from "./WorkshopDisplay.module.scss";
import Link from "next/link";

const WorkshopSection = () => {
    return (
        <section className={styles.workshopSection}>
            <div className={styles.container}>
                {/* Poster */}
                <div className={styles.poster}>
                    <img
                        src="/images/workshop-promo.webp"
                        alt="PSLE September Boot Camp Poster"
                    />
                </div>

                {/* Info */}
                <div className={styles.info}>
                    <h2 className={`sectionTitle ${styles.title}`}>PSLE September Boot Camp</h2>
                    <p className={styles.description}>
                        Join our intensive boot camp designed to prepare students for the
                        PSLE with proven strategies, timed practice, and engaging sessions.
                        Join our intensive boot camp designed to prepare students for the
                        PSLE with proven strategies, timed practice, and engaging sessions.
                    </p>

                    <div className={styles.details}>
                        <p>
                            <span className={styles.icon}>📅</span> 10 – 12 September 2025, 9AM
                            – 4PM
                        </p>
                        <p>
                            <span className={styles.icon}>📍</span> SMU Yong Pung How School Of Law
                        </p>
                        <p className={styles.note}>*Limited vacancies! Register early to secure your spot.</p>

                    </div>

                    <Link className={styles.ctaLink} href="https://tally.so/r/yourformlink" target="_blank">
                        <button className={`${styles.ctaButton} ctaButton buttonRed`}>Sign Up Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WorkshopSection;
